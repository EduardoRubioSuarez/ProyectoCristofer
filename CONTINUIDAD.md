# Estado de la migración — 24 de septiembre de 2026

La exportación estática se reconstruyó como proyecto Next.js App Router en `src/`, con recursos en `public/`. Los originales de la raíz permanecen como referencia. No ejecutar `scripts/recover-source.mjs` sobre cambios posteriores: sobrescribe código recuperado.

## Verificación completada

- `npm run build`: correcto.
- `npm run test:parity`: correcto, 18 comparaciones (ocho páginas y 404, escritorio y móvil), sin diferencias de contenido ni píxeles.
- Menú móvil, submenú, navegación y cierre automático: correctos.
- Formulario: éxito, validación y error comprobados con SMTP simulado local; no se enviaron correos reales.
- Informe actual: `test-results/parity/report.json`.

La corrección de metadatos de `src/app/not-found.jsx` ya existía al retomar y quedó validada con una compilación nueva. Se corrigió la prueba para recalcular los selectores después de cargar las fuentes en ambas versiones; el selector nativo de Chromium conservaba una diferencia de pintura de 364 píxeles en contacto. No se cambiaron estilos de la aplicación ni se relajó la comparación. Las capturas detienen animaciones y ocultan videos y partículas; no validan disponibilidad de videos externos.

## Gemini

El usuario pidió mantener Gemini como asistente y Codex como supervisor. Se intentó ejecutar Gemini CLI en modo de solo lectura, pero el servicio rechazó la autenticación con `IneligibleTierError`, razón `UNSUPPORTED_CLIENT`. No hubo revisión de Gemini en esta continuación. No se cambiaron su instalación, cuenta ni credenciales. Codex completó la verificación directamente.

## Para ejecutar y publicar

Usar `npm run dev` para desarrollo; `npm run build` y `npm start` para producción. Consultar `README.md`.

El envío real de correo requiere configurar SMTP o `CONTACT_PHP_URL` según `.env.example`. No se realizó despliegue. En este entorno Windows, build y Chromium necesitaron ejecución fuera del sandbox porque la creación de procesos fallaba con `EPERM`.
