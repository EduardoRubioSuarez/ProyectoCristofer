# ISA'S Agencia Digital — Proyecto Next.js

Este proyecto fue reconstruido como una aplicación **Next.js 15 (App Router + TypeScript + Tailwind CSS)** a partir de lo que había en esta carpeta antes: **no existía código fuente**, solo el *output* estático ya compilado de un proyecto Next.js (archivos `index.html`, `_next/`, `__next.*.txt`, etc.). Ese material no se puede "convertir" directamente — es el resultado final de un build, no el código que lo genera. Por eso el contenido de cada página se extrajo leyendo ese HTML exportado, y todo el código (componentes, páginas, estilos, API) se escribió de nuevo desde cero para reproducir el sitio.

El export original **no se borró**: está íntegro en [`_legacy-export-backup/`](./_legacy-export-backup/) por si se necesita consultar algo de ahí.

---

## 1. Qué se hizo (conversión "neutral", sin decisiones de por medio)

- Se creó la estructura estándar de un proyecto Next.js: `package.json`, `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `.gitignore`.
- Se creó `app/layout.tsx` con metadata SEO, fuente Montserrat y el `Navbar`/`Footer` compartidos.
- Se recreó cada ruta como página real de Next.js, con el **mismo copy** (títulos, subtítulos, precios, descripciones, testimonios, nombres, bullets) que tenía el sitio exportado:
  - `/` (inicio)
  - `/casos-exito`
  - `/consultoria-asesorias`
  - `/gestion-redes-sociales`
  - `/paginas-web-ia`
  - `/paquetes-servicios`
  - `/talleres-capacitacion`
  - `/contacto`
  - página 404 personalizada
- Se reemplazó `enviar-correo.php` (backend del formulario de contacto, PHP) por una ruta de API nativa de Next.js: [`app/api/enviar-correo/route.ts`](./app/api/enviar-correo/route.ts), usando `nodemailer`. Mantiene **exactamente** los mismos nombres de campo (`nombre`, `email`, `telefono`, `servicio_interes`, `mensaje`), la misma validación, y las mismas 3 respuestas JSON (éxito, error de validación, error de envío) que el PHP original, así que el frontend no tuvo que cambiar su forma de hablar con el backend.
- Se movieron todas las imágenes, el video y los íconos a `public/` (carpeta estándar de Next.js para archivos estáticos).

Todo esto era necesario para que el sitio funcionara como proyecto Next.js real; no fueron decisiones de diseño, sino la mecánica de la conversión.

---

## 2. Cambios que SÍ son decisiones mías (más allá de la conversión)

Estos son los puntos donde tomé una decisión de diseño/contenido que el sitio original no resolvía así, o donde no fue posible recuperar el original al 100%. Se listan con el dato exacto que cambió:

### 2.1 Datos de contacto unificados
El sitio original mostraba **datos distintos según la página** (footer vs. página de contacto). Elegí un solo valor "canónico" para cada uno, definido en [`lib/site-config.ts`](./lib/site-config.ts):

| Dato | Footer (original) | Página de contacto (original) | Valor que quedó en el proyecto |
|---|---|---|---|
| Teléfono | 612 117 70 02 | 612 219 5577 | **612 219 5577** |
| Email | (no mostraba) | contacto@isasdigital.com | **contacto@isasdigital.com** |
| Dirección | Calle Toronja esq. Blvd. Colosio, La Paz, B.C.S. | Calle Toronja Esq. Blvd. Colosio, Col. Indeco, La Paz, B.C.S. | **la versión con "Col. Indeco"** |
| Horario | Lun - Vie: 9:00 AM - 6:00 PM | Lun - Vie 9:00 AM - 6:00 PM + Sáb 10:00 AM - 2:00 PM | **la versión con sábado** |
| Facebook | facebook.com/profile.php?id=61573283512221 | facebook.com/MARKETINGDIGITALISAS | **el link con `profile.php?id=...`** |

Además, el correo al que **realmente llega el formulario de contacto** (definido en el backend PHP original, variable de entorno `CONTACT_TO_EMAIL`) es `info@isasmkt.com` — un tercer dominio distinto a los dos de arriba. Lo dejé igual porque es el que de verdad recibía los leads.

**Esto lo tienes que revisar tú**: dime cuál teléfono/correo/dirección/Facebook es el real y lo dejo fijo en todas partes.

### 2.2 Bug corregido sin avisar antes
El carrusel de logos de clientes, en su segunda pasada (loop), referenciaba dos imágenes que no existen (`puertas-sanjorge.png` y `olympus-gym.png` — los archivos reales son `.jpeg`). En el sitio original esto rompía esos dos logos. Lo corregí para que usen el archivo `.jpeg` real en vez de reproducir el error.

### 2.3 Animaciones simplificadas
El hero original tenía un canvas de partículas animado de fondo y el texto del título apareciendo palabra por palabra. Lo reemplacé por un fondo con degradado simple (sin canvas ni animación de texto). Los contadores animados (+6 años, +380 colaboraciones, +600 alumnos) sí los recreé con una animación propia (cuentan hacia arriba al hacer scroll), pero es código nuevo mío, no una copia del original.

### 2.4 Íconos de redes sociales propios
No pude recuperar los íconos exactos de Facebook/WhatsApp/Instagram/TikTok del sitio original (estaban dentro de JavaScript minificado, ilegible). Los reemplacé por SVGs propios genéricos con el mismo propósito visual.

---

## 3. Qué necesito que hagas tú (no lo puedo resolver yo)

### 3.1 Credenciales SMTP para que el formulario de contacto mande correos de verdad
Copia `.env.local.example` a `.env.local` y llena los valores reales de tu proveedor de correo (Gmail con contraseña de aplicación, Resend, SendGrid, etc.):

```
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
CONTACT_TO_EMAIL=
```

Sin esto, el formulario de `/contacto` sigue funcionando en la interfaz pero el envío de correo fallará (probado: responde error 500 controlado, con el mismo mensaje que mostraba el sitio original en ese caso).

### 3.2 Confirmar cuáles datos de contacto son los correctos
Ver la tabla de la sección 2.1. Dime el teléfono, correo, dirección y Facebook reales y los dejo consistentes en todo el sitio.

### 3.3 Contenido real para "Casos de Éxito"
La página `/casos-exito` en el sitio original **ya era un placeholder** ("PRÓXIMAMENTE"), sin casos reales cargados. Si tienes casos de clientes (nombre, resultados, fotos, testimonios), pásamelos y armo la sección real.

### 3.4 Revisar `pu2.zip`
Quedó un archivo `pu2.zip` de 138 MB en la raíz del proyecto (fuera de `public/`, no se usa en ninguna página). No sé qué es ni si se puede borrar — revísalo tú.

### 3.5 Decidir si quieres las animaciones originales de vuelta
Si quieres el canvas de partículas y el texto palabra-por-palabra del hero como el sitio original, puedo construirlos (con una librería de animación), pero es trabajo adicional que no hice todavía porque no estaba pedido explícitamente.

---

## 4. Cómo correr el proyecto

```bash
npm install        # instalar dependencias (ya hecho una vez)
npm run dev         # servidor de desarrollo → http://localhost:3000
npm run build       # build de producción
npm run start       # correr el build de producción
```

## 5. Estructura relevante

```
app/                     rutas del sitio (una carpeta por página)
app/api/enviar-correo/   endpoint del formulario de contacto (reemplaza el PHP)
components/              Navbar, Footer, CtaSection, VideoHero, Counter, PricingCard, íconos
lib/site-config.ts        datos de contacto, redes sociales y menú de navegación
public/                  imágenes, video y assets estáticos
_legacy-export-backup/   export estático original, sin tocar, de referencia
```
