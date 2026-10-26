"use client";
import * as React from "react";
import NextLink from "next/link";
import * as FeatherIcons from "react-icons/fi";
import FooterModule from "./Footer.jsx";
import "../styles/software-page.css";

const services = [
  {
    Icon: FeatherIcons.FiLayout,
    title: "Páginas Web",
    text: "Diseño y desarrollo responsivo, desde corporativos hasta landing pages de alta conversión.",
    url: "tunegocio.com",
  },
  {
    Icon: FeatherIcons.FiServer,
    title: "Software Empresarial",
    text: "Soluciones tecnológicas escalables para digitalizar y optimizar tus operaciones.",
    url: "app.tuempresa.com/panel",
  },
  {
    Icon: FeatherIcons.FiSmartphone,
    title: "Apps Móviles",
    text: "Desarrollo nativo e híbrido para iOS y Android centrado en la mejor experiencia de usuario.",
    url: "App Store · Google Play",
  },
  {
    Icon: FeatherIcons.FiCode,
    title: "Apps a Medida",
    text: "Sistemas personalizados diseñados específicamente para resolver los retos únicos de tu negocio.",
    url: "tu-sistema/modulos",
  },
  {
    Icon: FeatherIcons.FiMonitor,
    title: "Sistemas POS",
    text: "Punto de venta, control de inventario, ventas y facturación para negocios físicos o híbridos.",
    url: "pos.tutienda.com",
  },
  {
    Icon: FeatherIcons.FiShoppingCart,
    title: "E-Commerce",
    text: "Tiendas en línea completas con pasarelas de pago seguro y gestión de inventario automatizada.",
    url: "tutienda.com/carrito",
  },
  {
    Icon: FeatherIcons.FiCpu,
    title: "Automatizaciones IA",
    text: "Chatbots 24/7, optimización inteligente y análisis de datos predictivos.",
    url: "chat.tunegocio.com",
  },
  {
    Icon: FeatherIcons.FiUsers,
    title: "Sistemas CRM",
    text: "Plataformas personalizadas de gestión de clientes para potenciar ventas y fidelizar a tu audiencia.",
    url: "crm.tuempresa.com",
  },
];

// Mini interfaces que se dibujan en la ventana según el servicio visible.
const panels = [
  <>
    <div className="sw-bl b" style={{ height: 120, padding: 18 }}>
      <div className="sw-ln" style={{ background: "#ffffff80", width: "55%" }} />
      <div className="sw-ln s" style={{ background: "#ffffff55" }} />
      <span className="sw-pill" style={{ background: "#fff", color: "#4d4de6", marginTop: 14 }}>
        {"Cotiza ahora"}
      </span>
    </div>
    <div className="sw-row" style={{ marginTop: 14 }}>
      <div className="sw-bl sw-fill" style={{ height: 90 }} />
      <div className="sw-bl sw-fill" style={{ height: 90 }} />
      <div className="sw-bl sw-fill" style={{ height: 90 }} />
    </div>
    <div className="sw-ln" />
    <div className="sw-ln s" />
  </>,
  <div className="sw-row" style={{ height: "100%" }}>
    <div className="sw-bl" style={{ width: "22%" }} />
    <div className="sw-col sw-fill">
      <div className="sw-row">
        <div className="sw-bl b sw-fill" style={{ height: 60 }} />
        <div className="sw-bl sw-fill" style={{ height: 60 }} />
        <div className="sw-bl sw-fill" style={{ height: 60 }} />
      </div>
      <div className="sw-bl sw-fill" style={{ padding: 16, display: "flex", alignItems: "flex-end" }}>
        <div className="sw-bars" style={{ width: "100%" }}>
          {[50, 80, 60, 95, 70, 85].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  </div>,
  <div className="sw-phone">
    <div className="sw-bl b" style={{ height: 56 }} />
    <div className="sw-bl" style={{ height: 44 }} />
    <div className="sw-bl" style={{ height: 44 }} />
    <div className="sw-bl" style={{ height: 44 }} />
    <div className="sw-fill" />
    <div className="sw-row">
      <div className="sw-bl l sw-fill" style={{ height: 34 }} />
      <div className="sw-bl sw-fill" style={{ height: 34 }} />
      <div className="sw-bl sw-fill" style={{ height: 34 }} />
    </div>
  </div>,
  <>
    <div className="sw-mod">
      <div className="sw-bl b" />
      <div className="sw-bl" />
      <div className="sw-bl l" />
      <div className="sw-bl" />
      <div className="sw-bl b" />
      <div className="sw-bl" />
    </div>
    <div className="sw-ln" style={{ marginTop: 22 }} />
    <div className="sw-ln s" />
  </>,
  <div className="sw-row" style={{ height: "100%" }}>
    <div className="sw-prod sw-fill">
      <div className="sw-bl" />
      <div className="sw-bl b" />
      <div className="sw-bl l" />
      <div className="sw-bl" />
    </div>
    <div className="sw-col" style={{ width: "38%" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} className="sw-tk">
          <span>{"Producto"}</span>
          <span>{"$ --"}</span>
        </div>
      ))}
      <div className="sw-fill" />
      <div
        className="sw-bl b"
        style={{ height: 46, display: "grid", placeItems: "center", color: "#fff", fontWeight: 600 }}
      >
        {"Cobrar"}
      </div>
    </div>
  </div>,
  <>
    <div className="sw-prod" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
      <div className="sw-bl" />
      <div className="sw-bl l" />
      <div className="sw-bl" />
    </div>
    <div className="sw-row" style={{ marginTop: 16, alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ flex: 1 }}>
        <div className="sw-ln" />
        <div className="sw-ln xs" />
      </div>
      <span className="sw-pill">{"Pagar seguro"}</span>
    </div>
  </>,
  <div className="sw-col" style={{ height: "100%", justifyContent: "flex-end" }}>
    <div className="sw-msg u">{"Hola, ¿tienen disponibilidad mañana?"}</div>
    <div className="sw-msg a">{"Claro, te comparto los horarios disponibles."}</div>
    <div className="sw-msg u">{"Perfecto, agenda el primero."}</div>
    <div className="sw-msg a">{"Listo, quedó agendado. Te enviaré un recordatorio."}</div>
  </div>,
  <div className="sw-kan">
    <div className="c">
      <div className="sw-ln xs" style={{ margin: 0 }} />
      <div className="k" />
      <div className="k b" />
      <div className="k" />
    </div>
    <div className="c">
      <div className="sw-ln xs" style={{ margin: 0 }} />
      <div className="k" />
      <div className="k" />
    </div>
    <div className="c">
      <div className="sw-ln xs" style={{ margin: 0 }} />
      <div className="k b" />
    </div>
  </div>,
];

// Terminal del hero: "compila" el negocio (ritmo rápido).
const logLines = [
  { html: <><b>{"$"}</b>{" npm run build"}</>, cls: "" },
  { html: "Analizando tu negocio…", cls: "sw-dim" },
  { html: "✓ Diseño responsivo", cls: "sw-ok" },
  { html: "✓ Base de datos y panel", cls: "sw-ok" },
  { html: "✓ Integrando inteligencia artificial", cls: "sw-ok" },
  { html: "✓ Automatizaciones activas 24/7", cls: "sw-ok" },
  { html: <><b>{"Listo."}</b>{" Tu negocio ya trabaja solo."}</>, cls: "" },
];

function usePrefersReducedMotion() {
  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduce;
}

function Terminal({ reduce }) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (reduce) {
      setN(logLines.length);
      return;
    }
    let t;
    const step = (i) => {
      setN(i);
      if (i < logLines.length) t = setTimeout(() => step(i + 1), i === 0 ? 300 : 500);
      else t = setTimeout(() => step(0), 2500);
    };
    step(0);
    return () => clearTimeout(t);
  }, [reduce]);
  return (
    <div className="sw-term" aria-hidden="true">
      <div className="sw-term-head">
        <i />
        <i />
        <i />
        <span>{"terminal — tu-negocio"}</span>
      </div>
      <div className="sw-log">
        {logLines.slice(0, n).map((l, i) => (
          <div key={i} className={l.cls}>
            {l.html}
          </div>
        ))}
      </div>
      <div className="sw-pbar">
        <i style={{ transform: `scaleX(${n / logLines.length})` }} />
      </div>
    </div>
  );
}

// Puntos que reaccionan al cursor.
function DotGrid() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const x = c.getContext("2d");
    const S = 30;
    let mx = -999;
    let my = -999;
    let raf = 0;
    const draw = () => {
      raf = 0;
      x.clearRect(0, 0, c.width, c.height);
      for (let i = S / 2; i < c.width; i += S) {
        for (let j = S / 2; j < c.height; j += S) {
          const d = Math.hypot(i - mx, j - my);
          const a = Math.max(0, 1 - d / 190);
          x.fillStyle = a > 0 ? `rgba(120,120,255,${0.18 + a * 0.75})` : "rgba(255,255,255,.07)";
          x.beginPath();
          x.arc(i, j, 1.4 + a * 2.2, 0, 7);
          x.fill();
        }
      }
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const size = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
      queue();
    };
    const move = (e) => {
      const b = c.getBoundingClientRect();
      mx = e.clientX - b.left;
      my = e.clientY - b.top;
      queue();
    };
    const parent = c.parentNode;
    parent.addEventListener("mousemove", move);
    window.addEventListener("resize", size);
    size();
    return () => {
      parent.removeEventListener("mousemove", move);
      window.removeEventListener("resize", size);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <canvas ref={ref} className="sw-dots" aria-hidden="true" />;
}

function SoftwarePage() {
  const reduce = usePrefersReducedMotion();
  const [active, setActive] = React.useState(0);
  const itemRefs = React.useRef([]);

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(itemRefs.current.indexOf(e.target));
        }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sw">
      <section className="sw-hero">
        <DotGrid />
        <div className="sw-wrap">
          <div>
            <div className="sw-tag">{"DESARROLLO DE SOFTWARE + IA"}</div>
            <h1 className="sw-h1">
              {"Código que "}
              <mark>{"trabaja"}</mark>
              {" mientras tú duermes"}
              <span className="sw-cursor" aria-hidden="true" />
            </h1>
            <p className="sw-sub">
              {
                "Software moderno y automatizaciones con inteligencia artificial para optimizar procesos y mejorar la experiencia de tus usuarios."
              }
            </p>
            <NextLink href={"/contacto"} className="sw-btn">
              {"SOLICITAR COTIZACIÓN"}
              <FeatherIcons.FiArrowRight className="sw-icon" />
            </NextLink>
            <a href="#servicios" className="sw-btn sw-btn-ghost">
              {"Ver servicios"}
            </a>
          </div>
          <Terminal reduce={reduce} />
        </div>
      </section>

      <section className="sw-show" id="servicios">
        <div className="sw-wrap">
          <h2>{"Soluciones de software inteligentes"}</h2>
          <p className="sw-lead">
            {
              "Diseño excepcional, funcionalidad robusta y tecnología de punta. Mientras recorres cada solución, la vemos tomar forma."
            }
          </p>
          <div className="sw-split">
            <div>
              {services.map(({ Icon, title, text }, i) => (
                <div
                  key={title}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className={`sw-it ${i === active ? "is-on" : ""}`}
                >
                  <h3>
                    <Icon className="sw-icon" aria-hidden="true" />
                    {title}
                  </h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="sw-sticky" aria-hidden="true">
              <div className="sw-dev">
                <div className="sw-dev-head">
                  <i />
                  <i />
                  <i />
                  <em>{services[active].url}</em>
                </div>
                {panels.map((p, i) => (
                  <div key={i} className={`sw-pn ${i === active ? "is-on" : ""}`}>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-cta">
        <div className="sw-wrap">
          <h2>{"¿Listo para llevar tu negocio al siguiente nivel?"}</h2>
          <p>
            {
              "Contáctanos para crear tu página web inteligente con automatizaciones que trabajan por ti las 24 horas."
            }
          </p>
          <NextLink href={"/contacto"} className="sw-btn">
            {"SOLICITAR COTIZACIÓN"}
            <FeatherIcons.FiArrowRight className="sw-icon" />
          </NextLink>
        </div>
      </section>
      <FooterModule />
    </div>
  );
}
export default SoftwarePage;
