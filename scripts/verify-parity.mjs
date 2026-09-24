import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import net from 'node:net';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

// All contact deliveries in this suite are intercepted by a local SMTP sink.
const routes = ['', 'casos-exito', 'consultoria-asesorias', 'contacto', 'gestion-redes-sociales', 'paginas-web-ia', 'paquetes-servicios', 'talleres-capacitacion', 'pagina-inexistente'];
const dir = path.resolve('test-results/parity');
fs.mkdirSync(dir, { recursive: true });
const mime = { '.html': 'text/html; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.ico': 'image/x-icon', '.webp': 'image/webp' };
const original = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = path.resolve('.' + pathname);
  if (!file.startsWith(process.cwd() + path.sep) && file !== process.cwd()) { res.writeHead(403).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { file = path.resolve('404.html'); res.statusCode = 404; }
  res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
const deliveries = [];
let rejectMail = false;
const smtp = net.createServer(socket => {
  socket.write('220 localhost test sink\r\n');
  let buffer = '', inData = false, message = '';
  socket.on('data', data => {
    buffer += data.toString();
    while (buffer.includes('\r\n')) {
      const index = buffer.indexOf('\r\n');
      const line = buffer.slice(0, index);
      buffer = buffer.slice(index + 2);
      if (inData) {
        if (line === '.') { inData = false; deliveries.push(message); message = ''; socket.write('250 accepted\r\n'); }
        else message += line + '\r\n';
      } else if (/^EHLO|^HELO/i.test(line)) socket.write('250 localhost\r\n');
      else if (/^DATA/i.test(line)) { if (rejectMail) socket.write('550 test rejection\r\n'); else { inData = true; socket.write('354 continue\r\n'); } }
      else if (/^QUIT/i.test(line)) socket.end('221 bye\r\n');
      else socket.write('250 OK\r\n');
    }
  });
});
await Promise.all([new Promise(resolve => original.listen(3101, '127.0.0.1', resolve)), new Promise(resolve => smtp.listen(2526, '127.0.0.1', resolve))]);
const serverLog = fs.openSync(path.join(dir, 'server.log'), 'w');
const next = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3100', '-H', '127.0.0.1'], {
  windowsHide: true,
  stdio: ['ignore', serverLog, serverLog],
  env: { ...process.env, CONTACT_PHP_URL: '', SMTP_HOST: '127.0.0.1', SMTP_PORT: '2526', SMTP_USER: '', CONTACT_TO: 'info@isasmkt.com', CONTACT_FROM: 'Formulario Web <noreply@isasmkt.com>' },
});
const report = { pages: [], interactions: [], failures: [] };
let browser;
try {
  for (let i = 0; i < 100; i++) {
    try { if ((await fetch('http://127.0.0.1:3100/')).ok) break; } catch {}
    if (i === 99) throw new Error('Next.js did not start');
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  browser = await chromium.launch({ headless: true });
  for (const [size, viewport] of Object.entries({ desktop: { width: 1440, height: 1000 }, mobile: { width: 390, height: 844 } })) {
    for (const route of routes) {
      const images = [], snapshots = [];
      for (const [label, port] of [['original', 3101], ['next', 3100]]) {
        const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.route(/\.mp4(?:\?|$)/, r => r.fulfill({ status: 200, contentType: 'video/mp4', body: '' }));
        await page.goto(`http://127.0.0.1:${port}/${route}${route ? '/' : ''}`, { waitUntil: 'networkidle' });
        await page.addStyleTag({ content: '*,:before,:after{animation:none!important;transition:none!important} [data-aos],[class*="titleWord"],[class*="subtitleReveal"] span{opacity:1!important;transform:none!important} canvas,video{visibility:hidden!important}' });
        await page.evaluate(async () => {
          await document.fonts.ready;
          // Native selects can retain fallback-font painting after web fonts load.
          // Recreate their layout in both versions before comparing screenshots.
          document.querySelectorAll('select').forEach(select => {
            const display = select.style.display;
            select.style.display = 'none';
            void select.offsetHeight;
            select.style.display = display;
          });
          document.querySelectorAll('img').forEach(img => { img.loading = 'eager'; });
          for (let y = 0; y < document.body.scrollHeight; y += 650) {
            window.scrollTo(0, y);
            await new Promise(resolve => setTimeout(resolve, 15));
          }
          await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
          window.scrollTo(0, 0);
        });
        await page.waitForTimeout(2300);
        snapshots.push(await page.evaluate(() => ({
          title: document.title,
          text: document.body.innerText,
          links: [...document.querySelectorAll('a')].map(a => ({ text: a.textContent, href: a.getAttribute('href').replace(/\/$/, '') })),
          images: [...document.images].map(i => ({ src: i.getAttribute('src'), alt: i.alt, width: i.getBoundingClientRect().width, height: i.getBoundingClientRect().height, loaded: i.complete && i.naturalWidth > 0 })),
          forms: [...document.querySelectorAll('input,select,textarea,button')].map(el => ({ tag: el.tagName, type: el.type, name: el.name, text: el.textContent, placeholder: el.placeholder, required: el.required })),
        })));
        const file = path.join(dir, `${route || 'inicio'}-${size}-${label}.png`);
        const bytes = await page.screenshot({ path: file, fullPage: true, animations: 'disabled' });
        images.push(PNG.sync.read(bytes));
        if (label === 'next' && errors.length) report.failures.push({ route, size, errors });
        await context.close();
      }
      const [a, b] = images;
      let differences = null;
      if (a.width === b.width && a.height === b.height) {
        const diff = new PNG({ width: a.width, height: a.height });
        differences = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
        if (differences) fs.writeFileSync(path.join(dir, `${route || 'inicio'}-${size}-diff.png`), PNG.sync.write(diff));
      }
      const sameContent = JSON.stringify(snapshots[0]) === JSON.stringify(snapshots[1]);
      const result = { route: '/' + route, size, original: [a.width, a.height], next: [b.width, b.height], differentPixels: differences, sameContent };
      report.pages.push(result);
      if (differences !== 0 || !sameContent) {
        fs.writeFileSync(path.join(dir, `${route || 'inicio'}-${size}-content.json`), JSON.stringify(snapshots, null, 2));
        report.failures.push(result);
      }
      console.log(JSON.stringify(result));
    }
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.route(/\.mp4(?:\?|$)/, r => r.fulfill({ status: 200, contentType: 'video/mp4', body: '' }));
  await page.goto('http://127.0.0.1:3100/');
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  assert.match(await page.locator('ul[class*="navMenu"]').getAttribute('class'), /active/);
  await page.getByRole('link', { name: 'SERVICIOS', exact: true }).first().click();
  assert.match(await page.locator('li[class*="navItemDropdown"]').getAttribute('class'), /dropdownActive/);
  await page.getByRole('link', { name: 'Gestión de Redes', exact: true }).click();
  await page.waitForURL('**/gestion-redes-sociales/');
  assert.doesNotMatch(await page.locator('ul[class*="navMenu"]').getAttribute('class'), /__active/);
  report.interactions.push('Mobile menu, services dropdown, client navigation and automatic menu close');
  await page.goto('http://127.0.0.1:3100/contacto/');
  await page.locator('#name').fill('Prueba local');
  await page.locator('#email').fill('prueba@example.test');
  await page.locator('#service').selectOption('paginas-web');
  await page.locator('#message').fill('Prueba local sin envio externo');
  await page.getByRole('button', { name: 'ENVIAR MENSAJE' }).click();
  await page.getByText('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.', { exact: true }).waitFor();
  assert.equal(await page.locator('#name').inputValue(), '');
  assert.equal(deliveries.length, 1);
  assert.match(deliveries[0], /info@isasmkt.com/);
  assert.match(deliveries[0], /prueba@example.test/);
  report.interactions.push('Contact form submits to local SMTP, displays original success message and clears fields');
  const invalid = await fetch('http://127.0.0.1:3100/enviar-correo.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
  assert.equal(invalid.status, 400);
  rejectMail = true;
  await page.locator('#name').fill('Prueba local');
  await page.locator('#email').fill('prueba@example.test');
  await page.locator('#service').selectOption('paginas-web');
  await page.locator('#message').fill('Prueba local de error');
  await page.getByRole('button', { name: 'ENVIAR MENSAJE' }).click();
  await page.getByText('Ocurrió un error al intentar enviar el mensaje por correo. Por favor, inténtalo de nuevo más tarde o contáctanos por WhatsApp.', { exact: true }).waitFor();
  assert.equal(await page.locator('#name').inputValue(), 'Prueba local');
  report.interactions.push('Required field validation, mail failure message and preservation of entered values');
  console.log(JSON.stringify(report.interactions));
} catch (error) {
  report.failures.push({ error: error.stack });
  console.error(error);
} finally {
  await browser?.close();
  next.kill();
  original.close();
  smtp.close();
  fs.closeSync(serverLog);
  fs.writeFileSync(path.join(dir, 'report.json'), JSON.stringify(report, null, 2));
}
if (report.failures.length) process.exitCode = 1;
