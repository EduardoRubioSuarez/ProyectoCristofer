// One-time recovery utility. Reads the untouched static export at the project root.
// Never overwrites the exported HTML, JavaScript, CSS, PHP or media files.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
import * as t from '@babel/types';
import prettier from 'prettier';

const traverse = traverseModule.default;
const generate = generatorModule.default;
const root = process.cwd();
const routes = ['', 'casos-exito', 'consultoria-asesorias', 'contacto', 'gestion-redes-sociales', 'paginas-web-ia', 'paquetes-servicios', 'talleres-capacitacion'];
const componentNames = {
  91834: 'AnimatedCounter', 73859: 'HeroParticles', 86396: 'HeroTextReveal',
  19258: 'Footer', 13046: 'ContactForm', 88300: 'PackagesPage',
  38152: 'SoftwarePage', 55745: 'Navbar', 11872: 'AnimationProvider',
};
const styleNames = {
  59397: 'AnimatedCounter', 34260: 'HeroParticles', 13541: 'HeroTextReveal',
  33347: 'Footer', 23451: 'ContactForm', 10967: 'PackagesPage',
  27639: 'SoftwarePage', 10875: 'Navbar',
};
const external = {
  43476: ['react/jsx-runtime', 'ReactJSX'], 71645: ['react', 'React'],
  22016: ['next/link', 'NextLink'], 57688: ['next/image', 'NextImage'],
  5500: ['next/image', 'NextImage'], 92199: ['react-icons/fi', 'FeatherIcons'],
  40141: ['react-icons', 'IconUtils'], 5329: ['aos', 'AOS'],
};
async function write(file, content, parser = 'babel') {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, await prettier.format(content, { parser }));
}

const factories = new Map();
for (const file of fs.readdirSync('_next/static/chunks').filter(f => f.endsWith('.js'))) {
  const chunks = [];
  try {
    vm.runInNewContext(fs.readFileSync(`_next/static/chunks/${file}`, 'utf8'), { globalThis: { TURBOPACK: chunks } });
  } catch { continue; } // Runtime/polyfill chunks do not contain application components.
  for (const chunk of chunks) {
    let ids = [];
    for (const entry of chunk.slice(1)) {
      if (typeof entry === 'function') {
        for (const id of ids) factories.set(id, entry.toString());
        ids = [];
      } else ids.push(entry);
    }
  }
}

for (const [id, name] of Object.entries(styleNames)) {
  let styles;
  vm.runInNewContext(`(${factories.get(Number(id))})`, {})({ v(value) { styles = value; } });
  await write(`src/styles/${name}.classes.js`, `// Original CSS-module class names, preserved to keep the exported design identical.\nexport default ${JSON.stringify(styles)};`);
}

for (const [id, name] of Object.entries(componentNames)) {
  const ast = parse(`(${factories.get(Number(id))})`);
  const fn = ast.program.body[0].expression;
  const runtime = fn.params[0].name;
  const body = t.file(t.program(fn.body.body));
  const imports = [];
  let exports = [];
  traverse(body, {
    VariableDeclarator(p) {
      const value = p.node.init;
      if (!t.isCallExpression(value) || !t.isMemberExpression(value.callee) || value.callee.object.name !== runtime || value.callee.property.name !== 'i') return;
      const dep = value.arguments[0].value;
      const spec = external[dep] || (styleNames[dep] ? [`../styles/${styleNames[dep]}.classes.js`, 'styles'] : componentNames[dep] ? [`./${componentNames[dep]}.jsx`, componentNames[dep] + 'Module'] : null);
      if (!spec) throw new Error(`Unknown dependency ${dep} in ${name}`);
      p.scope.rename(p.node.id.name, spec[1]);
      imports.push(t.importDeclaration([t.importNamespaceSpecifier(t.identifier(spec[1]))], t.stringLiteral(spec[0])));
      p.remove();
    },
    CallExpression(p) {
      const c = p.node.callee;
      if (!t.isMemberExpression(c) || c.object.name !== runtime || c.property.name !== 's') return;
      const values = p.node.arguments[0].elements;
      for (let i = 0; i < values.length; i += 2) {
        if (values[i].value !== 'default') throw new Error(`Unexpected export in ${name}`);
        const binding = values[i + 1].body.name;
        p.scope.rename(binding, name);
        exports.push(t.exportDefaultDeclaration(t.identifier(name)));
      }
      p.parentPath.remove();
    },
  });
  // Give the recovered state and helper components descriptive source names.
  const locals = {
    Navbar: { e: 'menuOpen', i: 'setMenuOpen', s: 'servicesOpen', d: 'setServicesOpen', f: 'closeMenus' },
    ContactForm: { e: 'status', t: 'setStatus', s: 'message', i: 'setMessage', n: 'handleSubmit' },
    SoftwarePage: { e: 'videoRef' },
    PackagesPage: { e: 'videoRef', d: 'webPackages', o: 'businessPackages' },
  };
  traverse(body, {
    FunctionDeclaration(p) {
      if (p.node.id.name === name) {
        for (const [oldName, newName] of Object.entries(locals[name] || {})) {
          if (p.scope.hasOwnBinding(oldName)) p.scope.rename(oldName, newName);
        }
      }
    },
  });
  // Restore JSX from the compiler's jsx/jsxs calls, preserving expressions and handlers.
  traverse(body, {
    CallExpression(p) {
      let c = p.node.callee;
      if (t.isSequenceExpression(c)) c = c.expressions.at(-1);
      if (!t.isMemberExpression(c) || c.object.name !== 'ReactJSX' || !['jsx', 'jsxs'].includes(c.property.name)) return;
      const tag = p.node.arguments[0];
      if (t.isIdentifier(tag) && /^[a-z]/.test(tag.name)) p.scope.rename(tag.name, name === 'AnimatedCounter' ? 'Counter' : `Icon_${tag.name}`);
    },
    UnaryExpression(p) {
      if (p.node.operator === '!' && t.isNumericLiteral(p.node.argument)) p.replaceWith(t.booleanLiteral(!p.node.argument.value));
    },
  });
  function jsxName(n) {
    if (t.isStringLiteral(n)) return t.jsxIdentifier(n.value);
    if (t.isIdentifier(n)) return t.jsxIdentifier(n.name);
    if (t.isMemberExpression(n)) return t.jsxMemberExpression(jsxName(n.object), jsxName(n.property));
    throw new Error(`Unsupported JSX tag in ${name}`);
  }
  traverse(body, {
    CallExpression: { exit(p) {
      let c = p.node.callee;
      if (t.isSequenceExpression(c)) c = c.expressions.at(-1);
      if (!t.isMemberExpression(c) || c.object.name !== 'ReactJSX' || !['jsx', 'jsxs'].includes(c.property.name)) return;
      const [tag, props, key] = p.node.arguments;
      if (!t.isObjectExpression(props)) return;
      const attrs = [];
      const children = [];
      for (const prop of props.properties) {
        if (t.isSpreadElement(prop)) { attrs.push(t.jsxSpreadAttribute(prop.argument)); continue; }
        const propName = prop.key.name ?? prop.key.value;
        if (propName === 'children') {
          const values = t.isArrayExpression(prop.value) ? prop.value.elements : [prop.value];
          for (const value of values) if (value) children.push(t.isJSXElement(value) ? value : t.jsxExpressionContainer(value));
        } else attrs.push(t.jsxAttribute(t.jsxIdentifier(propName), t.jsxExpressionContainer(prop.value)));
      }
      if (key) attrs.push(t.jsxAttribute(t.jsxIdentifier('key'), t.jsxExpressionContainer(key)));
      const tagName = jsxName(tag);
      p.replaceWith(t.jsxElement(t.jsxOpeningElement(tagName, attrs, children.length === 0), children.length ? t.jsxClosingElement(tagName) : null, children, children.length === 0));
    } },
  });
  const defaultImports = new Set(['NextLink', 'NextImage', 'styles', 'FooterModule', 'AOS']);
  for (const declaration of imports) {
    const local = declaration.specifiers[0].local;
    if (defaultImports.has(local.name)) declaration.specifiers = [t.importDefaultSpecifier(local)];
  }
  traverse(body, {
    MemberExpression(p) {
      if (defaultImports.has(p.node.object.name) && p.node.property.name === 'default') p.replaceWith(t.identifier(p.node.object.name));
    },
    JSXMemberExpression(p) {
      if (defaultImports.has(p.node.object.name) && p.node.property.name === 'default') p.replaceWith(t.jsxIdentifier(p.node.object.name));
    },
    SequenceExpression(p) {
      const expressions = p.node.expressions;
      if (expressions.length === 2 && t.isNumericLiteral(expressions[0], { value: 0 }) && t.isMemberExpression(expressions[1])) p.replaceWith(expressions[1]);
    },
  });
  body.program.body = [...imports, ...body.program.body, ...exports];
  await write(`src/components/${name}.jsx`, `'use client';\n// Recovered from the exported application; handlers and rendered markup are preserved.\n${generate(body).code}`);
}

function readRows(route) {
  const rows = {};
  for (const line of fs.readFileSync(path.join(route, 'index.txt'), 'utf8').split('\n')) {
    const match = line.match(/^([a-f0-9]+):(.*)$/);
    if (match) rows[match[1]] = match[2][0] === 'I' ? { module: JSON.parse(match[2].slice(1)) } : JSON.parse(match[2]);
  }
  return rows;
}
function resolve(value, rows) {
  if (typeof value !== 'string' || !value.startsWith('$')) return value;
  if (value === '$undefined') return undefined;
  if (value.startsWith('$$')) return value.slice(1);
  if (value.startsWith('$S')) return value;
  const id = value.replace(/^\$[L@]?/, '');
  if (!(id in rows)) throw new Error(`Unresolved flight reference: ${value}`);
  return resolve(rows[id], rows);
}
function metadata(rows) {
  const tags = Object.values(rows).find(v => Array.isArray(v) && v.some(x => Array.isArray(x) && x[1] === 'title'));
  const result = { openGraph: {}, twitter: {} };
  for (const tag of tags || []) {
    const [, type, , p] = tag;
    if (type === 'title') result.title = p.children;
    if (type === 'link' && p.rel === 'icon') result.icons = { icon: [{ url: p.href, sizes: p.sizes, type: p.type }] };
    if (type !== 'meta') continue;
    const key = p.name || p.property;
    if (key.startsWith('og:')) result.openGraph[({ site_name: 'siteName' })[key.slice(3)] || key.slice(3)] = p.content;
    else if (key.startsWith('twitter:')) result.twitter[key.slice(8)] = p.content;
    else if (key === 'author') result.authors = [{ name: p.content }];
    else if (key !== 'viewport') result[key] = p.content;
  }
  return result;
}

await write('src/lib/site-metadata.js', `export default ${JSON.stringify(metadata(readRows('paquetes-servicios')))};`);

for (const route of routes) {
  const rows = readRows(route);
  const used = new Set();
  function component(ref) {
    const target = resolve(ref, rows);
    if (target === '$Sreact.fragment') return 'Fragment';
    if (!target?.module) throw new Error(`Unknown component ${ref}`);
    const id = target.module[0];
    const name = componentNames[id] || ({ 22016: 'Link', 5500: 'Image' })[id];
    if (!name) throw new Error(`Unrecovered component ${id}`);
    used.add(name);
    return name;
  }
  function value(input) {
    input = resolve(input, rows);
    if (input === undefined) return 'undefined';
    if (Array.isArray(input)) return `[${input.map(value).join(',')}]`;
    if (input && typeof input === 'object') return `{${Object.entries(input).filter(([, v]) => resolve(v, rows) !== undefined).map(([k,v]) => `${JSON.stringify(k)}:${value(v)}`).join(',')}}`;
    return JSON.stringify(input);
  }
  function render(input) {
    const node = resolve(input, rows);
    if (node == null || typeof node === 'boolean') return '';
    if (!Array.isArray(node)) return `{${JSON.stringify(node)}}`;
    if (node[0] !== '$') return node.map(render).join('\n');
    const [, type, , props] = node;
    if (type === 'footer') { used.add('Footer'); return '<Footer />'; }
    if (typeof type === 'string' && type.startsWith('$')) {
      const target = resolve(type, rows);
      if (target?.module?.[0] === 47257) return `<${component(props.Component)} />`;
    }
    const tag = type.startsWith('$') ? component(type) : type;
    if (tag === 'Fragment') return `<>${render(props.children)}</>`;
    const attrs = Object.entries(props).filter(([k,v]) => k !== 'children' && resolve(v, rows) !== undefined).map(([k,v]) => `${k}={${value(v)}}`).join(' ');
    const children = render(props.children);
    return children ? `<${tag} ${attrs}>${children}</${tag}>` : `<${tag} ${attrs} />`;
  }
  let pair = rows[0].f[0][1];
  while (pair[1]?.children) pair = pair[1].children;
  const content = render(pair[0][3].children[0]);
  const imports = [...used].map(name => `import ${name} from ${JSON.stringify(name === 'Link' ? 'next/link' : name === 'Image' ? 'next/image' : `@/components/${name}.jsx`)};`).join('\n');
  await write(`src/app/${route ? route + '/' : ''}page.jsx`, `${imports}\nexport const metadata = ${JSON.stringify(metadata(rows))};\nexport default function Page() {return <>${content}</>;}`);
}

fs.mkdirSync('public/fonts', { recursive: true });
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isFile() && /\.(png|jpe?g|webp|svg|ico|mp4|woff2)$/i.test(entry.name)) fs.copyFileSync(entry.name, `public/${entry.name}`);
}
for (const file of fs.readdirSync('_next/static/media')) fs.copyFileSync(`_next/static/media/${file}`, `public/fonts/${file}`);
for (const [source, target] of [['bdbc8f6ccba576cc.css', 'globals'], ['76149c2129a5647e.css', 'pages']]) {
  const css = fs.readFileSync(`_next/static/chunks/${source}`, 'utf8').replaceAll('../media/', '/fonts/');
  await write(`src/styles/${target}.css`, css, 'css');
}
console.log(`Recovered ${routes.length} routes and ${Object.keys(componentNames).length} interactive components.`);
