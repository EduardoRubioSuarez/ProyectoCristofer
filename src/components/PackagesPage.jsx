"use client";
import * as React from "react";
import Link from "next/link";
import Footer from "./Footer.jsx";
import "../styles/packages-page.css";

const webPackages = [
  {
    title: "Básica",
    price: 4500,
    popular: false,
    features: [
      "Hasta 4 secciones (Inicio, Quiénes somos, Servicios, Contacto)",
      "Diseño responsivo (móvil y computadora)",
      "Hasta 10 fotos en la página",
      "Formulario de contacto básico",
      "SEO básico",
      "Integración con WhatsApp (botón flotante)",
      "Dominio .com.mx o .mx incluido",
      "Hosting incluido",
      "Reportes de rendimiento mensuales (con mantenimiento activo)",
      "1 ronda de cambios después de la entrega",
      "Entrega en 7 días hábiles tras recibir tus materiales",
    ],
  },
  {
    title: "Estándar",
    price: 8500,
    popular: true,
    features: [
      "Hasta 6 secciones personalizadas",
      "Diseño con la identidad de tu marca (colores y tipografía)",
      "Diseño responsivo (móvil y computadora)",
      "Hasta 20 fotos en la página",
      "Formulario de contacto con integración a correo",
      "Correos profesionales ilimitados",
      "Integración con WhatsApp y redes sociales",
      "Mapa de Google Maps integrado",
      "SEO básico",
      "Dominio .com.mx o .mx y hosting incluidos",
      "Reportes de rendimiento mensuales (con mantenimiento activo)",
      "2 rondas de cambios después de la entrega",
      "Entrega en 7 días hábiles tras recibir tus materiales",
    ],
  },
  {
    title: "Avanzada",
    price: 12000,
    popular: false,
    features: [
      "Todo lo de la Página Estándar",
      "Catálogo de hasta 50 productos con foto, nombre, descripción y precio",
      "Filtro por categoría de producto",
      'Botón de "Pedir por WhatsApp" en cada producto',
      "Panel de administración para actualizar tus productos sin ayuda",
      "SEO estándar",
      "3 rondas de cambios después de la entrega",
      "Entrega en 10 a 14 días hábiles tras recibir tus materiales",
    ],
  },
];

const maintenanceNote =
  "Mantenimiento mensual opcional desde $600/mes: renovación de hosting y dominio, respaldos mensuales y soporte por WhatsApp.";

const extras = [
  {
    title: "Mantenimiento de la página",
    monthly: 600,
    label: "desde $600/mes",
    sub: "Opcional",
    features: [
      "Renovación de hosting y dominio",
      "Respaldos mensuales",
      "Soporte por WhatsApp",
      "Reportes de rendimiento mensuales",
    ],
  },
  {
    title: "Agente de WhatsApp con IA",
    once: 8000,
    monthly: 1500,
    label: "$8,000 + $1,500/mes",
    sub: "Instalación + mensualidad",
    features: [
      "Atención automática 24/7 en WhatsApp Business",
      "Configuración e integración con tu WhatsApp Business",
      "Hasta 30 preguntas y respuestas programadas (FAQ del negocio)",
      "Menú de opciones (cotizaciones, horarios, ubicación)",
      "Detección automática de cuándo pasar con una persona",
      "Reporte mensual de conversaciones y preguntas más frecuentes",
      "Servicio técnico constante",
      "Implementación en 7 a 14 días hábiles",
    ],
  },
  {
    title: "Captura y Nurturing de Leads",
    once: 6000,
    monthly: 1000,
    from: true,
    label: "desde $6,000 + $1,000/mes",
    sub: "Setup + mensualidad desde $1,000",
    features: [
      "Configuración e integración con tu WhatsApp Business",
      "Registro automático de cada lead en una base de datos (Excel)",
      "Respaldo mensual de la base de datos",
      "Secuencia de hasta 5 mensajes de seguimiento por WhatsApp o correo",
      "Clasificación del lead: frío, tibio o caliente",
      "Aviso a ventas cuando el lead está caliente",
      "Reporte mensual de leads, tasa de respuesta y conversión",
      "Servicio técnico constante",
      "Implementación en 14 a 30 días hábiles",
    ],
  },
  {
    title: "Google Business Profile",
    once: 1500,
    label: "$1,500",
    sub: "Un solo pago",
    features: [
      "Mejora tu visibilidad local",
      "Para todas las páginas",
      "Entrega en 1 a 2 días hábiles",
    ],
  },
  {
    title: "Multiidioma",
    once: 3000,
    from: true,
    label: "desde $3,000",
    sub: "Español / Inglés",
    features: [
      "Ideal para negocios turísticos",
      "Para todas las páginas",
      "Implementación en 5 a 10 días hábiles",
    ],
  },
  {
    title: "Sistema de agenda",
    once: 4000,
    from: true,
    label: "desde $4,000",
    sub: "Reserva de citas en línea",
    features: [
      "Ideal para clínicas, salones, dentistas y entrenadores",
      "Para todas las páginas",
      "Implementación en 7 a 14 días hábiles",
    ],
  },
  {
    title: "Pasarela de pagos",
    once: 5000,
    from: true,
    label: "desde $5,000",
    sub: "Stripe, MercadoPago o PayPal (hasta $8,000)",
    features: [
      "Convierte tu catálogo en tienda en línea",
      "Para Página Avanzada",
      "Implementación en 14 a 21 días hábiles",
    ],
  },
  {
    title: "SEO avanzado y Google Ads",
    label: "$2,500 - $5,000/mes",
    quote: true,
    sub: "Más inversión en Google Ads",
    features: [
      "Posicionamiento en mercados locales",
      "Para Página Estándar y Avanzada",
      "Contrato mínimo de 3 meses",
    ],
  },
  {
    title: "Bot con IA en tu sitio",
    label: "Cotiza",
    quote: true,
    sub: "Según complejidad",
    features: [
      "Responde y captura datos dentro de tu página",
      "Para Página Estándar y Avanzada",
      "Implementación en 7 a 14 días hábiles",
    ],
  },
];

const socialPackages = [
  {
    title: "Paquete Oro",
    price: 4300,
    platforms: ["Facebook", "Instagram"],
    features: [
      "3 anuncios publicitarios efectivos",
      "Asesoría de marketing",
      "4 ediciones especiales",
      "Branding para contenido de redes",
      "Presentación de resultados",
      "Vinculación con WhatsApp Business",
    ],
  },
  {
    title: "Paquete Diamante",
    price: 6300,
    popular: true,
    platforms: ["Facebook", "Instagram", "TikTok"],
    features: [
      "10 publicaciones orgánicas",
      "4 anuncios publicitarios efectivos",
      "Vinculación con WhatsApp Business",
      "Asesorías de marketing",
      "Edición especial",
      "Branding para contenido de redes",
      "Presentación de resultados",
    ],
  },
];

const businessPackages = [
  {
    title: "Digitaliza y Automatiza",
    price: "$80,000",
    from: true,
    sub: "Inversión mínima",
    features: [
      "Digitaliza 1 a 6+ sucursales",
      "Punto de venta e inventario",
      "CRM y gestión de franquicias",
      "Página web + chatbot IA",
      "Control desde una plataforma",
      "Embudos de venta automatizados",
      "Ideal para negocios en expansión",
    ],
  },
  {
    title: "Ventas Empresarial",
    price: "$97,000",
    monthly: "+ $19,400/mes de seguimiento",
    sub: "Sistema de ventas completo",
    features: [
      "Sistema de ventas empresarial",
      "Automatización WhatsApp CRM",
      "Publicidad en FB, IG y TikTok",
      "Seguimiento automático de leads",
      "Dashboard de resultados en vivo",
      "Máxima conversión y control",
      "Acompañamiento estratégico",
    ],
  },
];

const money = (n) => "$" + n.toLocaleString("es-MX");

function PackagesPage() {
  const [web, setWeb] = React.useState(1);
  const [picked, setPicked] = React.useState(() => new Set());
  const [focus, setFocus] = React.useState(null);

  const toggle = (i) => {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    setFocus(i);
  };

  let total = webPackages[web].price;
  let monthly = 0;
  let estimated = false;
  const onceLines = [["Página " + webPackages[web].title, money(total)]];
  const monthLines = [];
  extras.forEach((x, i) => {
    if (!picked.has(i)) return;
    if (x.once) {
      total += x.once;
      onceLines.push([x.title, money(x.once)]);
    }
    if (x.monthly) {
      monthly += x.monthly;
      monthLines.push([x.title, money(x.monthly)]);
    }
    if (x.from || x.quote) estimated = true;
    if (x.quote) {
      onceLines.push([x.title, "Cotiza"]);
    }
  });

  const shown = focus !== null ? extras[focus] : null;

  return (
    <div className="pq">
      <header className="pq-hero">
        <div className="pq-wrap">
          <h1>
            Tu marca,
            <br />
            <span>por paquete.</span>
          </h1>
          <p>
            Una página, un plan de redes o un sistema completo. Elige la
            historia que quieres contar.
          </p>
        </div>
      </header>

      <section className="pq-wrap pq-sec">
        <div className="pq-num" aria-hidden="true">
          01
        </div>
        <h2>Páginas web</h2>
        <p className="pq-lead">
          Toca un panel para abrirlo. Después marca los extras y arma tu ticket.
        </p>
        <div className="pq-cfg">
          <div>
            <div className="pq-panels" role="radiogroup" aria-label="Página web">
              {webPackages.map((x, i) => (
                <div
                  key={x.title}
                  role="radio"
                  aria-checked={web === i}
                  tabIndex={0}
                  className={`pq-pn ${web === i ? "on" : ""}`}
                  onClick={() => setWeb(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setWeb(i);
                    }
                  }}
                >
                  <div className="pq-rot">
                    <span>{x.title}</span>
                    <b>{money(x.price)}</b>
                  </div>
                  <div className="pq-in">
                    {x.popular && <div className="pq-pop">MÁS POPULAR</div>}
                    <h3>{x.title}</h3>
                    <div className="pq-price">{money(x.price)}</div>
                    <div className="pq-sub">Un solo pago</div>
                    <ul>
                      {x.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="pq-mnt">{maintenanceNote}</p>

            <h3 className="pq-xt">Extras y automatizaciones</h3>
            <div className="pq-stk">
              {extras.map((x, i) => (
                <div className="pq-it" key={x.title}>
                  <button
                    type="button"
                    aria-pressed={picked.has(i)}
                    aria-expanded={focus === i}
                    className={`pq-sk ${picked.has(i) ? "on" : ""} ${focus === i ? "open" : ""}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="pq-sk-t">
                      {picked.has(i) ? "✓ " : "+ "}
                      {x.title}
                    </span>
                    <small>{x.label}</small>
                  </button>
                  {focus === i && (
                    <div className="pq-xd pq-xd-m">
                      <p className="pq-sub">{x.sub}</p>
                      <ul>
                        {x.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {shown && (
              <div className="pq-xd" aria-live="polite">
                <h4>{shown.title}</h4>
                <p className="pq-sub">{shown.sub}</p>
                <ul>
                  {shown.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="pq-tk" aria-label="Resumen de tu paquete">
            <h4>TU TICKET</h4>
            <hr />
            {onceLines.map(([a, b], i) => (
              <div className="pq-l" key={a + i}>
                <span>{a}</span>
                <span>{b}</span>
              </div>
            ))}
            <hr />
            {monthLines.length ? (
              monthLines.map(([a, b]) => (
                <div className="pq-l" key={a}>
                  <span>{a}/mes</span>
                  <span>{b}</span>
                </div>
              ))
            ) : (
              <div className="pq-l">
                <span>Sin mensualidad</span>
                <span>—</span>
              </div>
            )}
            <hr />
            <div className="pq-tot">
              {estimated ? "desde " : ""}
              {money(total)}
              {monthly > 0 && <small>+ {money(monthly)}/mes</small>}
            </div>
            {estimated && (
              <p className="pq-note">
                Algunos precios varían según el alcance. Te confirmamos al
                cotizar.
              </p>
            )}
            <Link href="/contacto">Solicitar cotización</Link>
          </aside>
        </div>
      </section>

      <section className="pq-wrap pq-sec">
        <div className="pq-num" aria-hidden="true">
          02
        </div>
        <h2>Manejo de redes sociales</h2>
        <p className="pq-lead">
          Servicio mensual. Sin sorpresas: contenido, anuncios y resultados.
        </p>
        <div className="pq-split">
          {socialPackages.map((x) => (
            <div className={`pq-sp ${x.popular ? "d" : ""}`} key={x.title}>
              {x.popular && <div className="pq-best">MÁS POPULAR</div>}
              <div className="pq-pl">{x.platforms.join(" · ")}</div>
              <h3>{x.title}</h3>
              <div className="pq-price">
                {money(x.price)}
                <small>/mes</small>
              </div>
              <ul>
                {x.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href="/contacto" className="pq-btn">
                Solicitar información
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pq-wrap pq-sec">
        <div className="pq-num" aria-hidden="true">
          03
        </div>
        <h2>Sistemas empresariales</h2>
        <p className="pq-lead">
          Para negocios que están listos para crecer en grande.
        </p>
        <div className="pq-split">
          {businessPackages.map((x, i) => (
            <div className={`pq-sp ${i === 1 ? "d" : ""}`} key={x.title}>
              <div className="pq-pl">{x.sub}</div>
              <h3>{x.title}</h3>
              <div className="pq-price">
                {x.from && <small>desde </small>}
                {x.price}
              </div>
              {x.monthly && <p className="pq-mo">{x.monthly}</p>}
              <ul>
                {x.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href="/contacto" className="pq-btn">
                Solicitar información
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pq-wrap pq-cta">
        <h2>¿Necesitas un plan a medida?</h2>
        <p>
          Si ninguno de nuestros paquetes estándar se ajusta a lo que buscas,
          podemos crear una propuesta personalizada para tu empresa.
        </p>
        <Link href="/contacto" className="pq-btn">
          Contáctanos ahora
        </Link>
      </section>
      <Footer />
    </div>
  );
}
export default PackagesPage;
