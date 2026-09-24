# ISA'S Agencia Digital — proyecto Next.js recuperado

Proyecto reconstruido desde la exportación estática. Las ocho páginas son rutas de Next.js App Router y sus interacciones son componentes React editables. Se conservaron textos, enlaces, clases CSS, fuentes, imágenes, videos, metadatos y lógica del navegador.

## Ejecutar

Requiere Node.js 20.9 o posterior y npm.

```sh
npm install
npm run dev
```

Abrir http://localhost:3000. Para producción:

```sh
npm run build
npm start
```

## Dónde editar

- `src/app/`: inicio, las siete páginas interiores, layout compartido y página 404.
- `src/components/`: menú, pie de página, formulario, contadores, partículas, animaciones y las dos páginas que ya eran componentes de cliente.
- `src/styles/`: CSS original formateado y mapas con sus nombres de clase. Las clases compiladas se conservaron para mantener exactamente el diseño existente.
- `public/`: imágenes, video local y fuentes.
- `src/app/enviar-correo.php/route.js`: endpoint compatible con la dirección y las respuestas que ya usa el formulario.
- `src/lib/contact-email-template.js`: diseño original del correo.

Los HTML, los datos de React, `_next/`, el PHP y `pu2.zip` originales permanecen intactos en la raíz como respaldo y referencia. Next.js utiliza `src/` y `public/`; los archivos exportados de la raíz no son el código de la nueva aplicación.

## Envío de correos

El archivo original `enviar-correo.php` depende de la función `mail()` del hosting PHP. Un servidor Next.js no ejecuta PHP. La ruta recuperada conserva el formulario y sus respuestas y admite dos opciones:

1. Copiar `.env.example` a `.env.local` y configurar `CONTACT_PHP_URL` con la dirección del PHP original en un servidor PHP separado.
2. O dejar esa variable vacía y configurar `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` y `SMTP_PASSWORD` para enviar desde Next.js. Los puertos habituales son 587 y 465.

Se mantiene el destinatario original `info@isasmkt.com`; `CONTACT_TO` y `CONTACT_FROM` permiten configurar el mismo servicio de correo del hosting. Las credenciales no estaban en la exportación. Sin una de estas opciones, el formulario mostrará su mensaje original de error y no simulará un envío exitoso.

No se enviaron correos reales durante la reconstrucción. Las pruebas usan un servidor SMTP local simulado.

## Comprobaciones

```sh
npm run build
npm run test:parity
```

La prueba inicia temporalmente dos servidores locales y un buzón SMTP simulado. Requiere Chromium de Playwright (`npx playwright install chromium` si no está instalado) y los puertos 3100, 3101 y 2526 libres.

Compara las ocho páginas y la página 404 con la exportación original en escritorio (1440 px) y móvil (390 px): capturas, contenido, enlaces, imágenes, campos y errores de JavaScript. Prueba el menú móvil, navegación y los estados de éxito y error del formulario. Guarda el informe y las capturas en `test-results/parity/`.

Para comparar capturas de forma reproducible, **solo durante las pruebas** se detienen las animaciones y se ocultan videos y el lienzo de partículas en ambas versiones. Los archivos y URL de video originales se conservan. Las pruebas de capturas no verifican la disponibilidad de los videos externos.

También se recalcula el diseño de los selectores después de cargar las fuentes en ambas versiones: Chromium puede conservar el texto dibujado con la fuente de respaldo. Esto evita diferencias de captura sin modificar los estilos ni los componentes de la aplicación.

## Alcance de la recuperación

Se recuperó JSX a partir de los datos de React y el JavaScript exportado, y se sustituyeron las dependencias compiladas del framework por dependencias npm. No se necesita el JavaScript antiguo de `_next/` para ejecutar o compilar la aplicación nueva. Los nombres de algunas variables y la organización exacta del repositorio original no se pueden recuperar automáticamente.

`scripts/recover-source.mjs` documenta el proceso y permite repetir la extracción desde los archivos originales. **No ejecutarlo después de editar el proyecto**, porque sobrescribe las páginas, componentes y estilos recuperados.

La configuración actual permite ejecutar el servidor Next.js y el endpoint de correo. Si en el futuro se necesita otra exportación estática, habrá que servir el correo con PHP u otro backend separado: los endpoints POST no se exportan como archivos estáticos. Véase la [documentación oficial de exportación estática](https://nextjs.org/docs/app/guides/static-exports).
