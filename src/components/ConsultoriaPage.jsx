"use client";
import * as React from "react";
import Link from "next/link";
import * as FeatherIcons from "react-icons/fi";
import Footer from "./Footer.jsx";
import "../styles/consultoria-page.css";

const ROUTE =
  "M500,0 C500,70 360,60 360,130 C360,260 640,250 640,380 C640,510 360,500 360,630 C360,760 640,750 640,880 C640,940 500,940 500,1000";
const TRAIL = "M120,740 C420,780 520,360 840,420 S1180,160 1300,90";
const STATIONS = [
  [360, 130],
  [640, 380],
  [360, 630],
  [640, 880],
];

const steps = [
  {
    cls: "cn-s1",
    n: "1",
    title: "Diagnóstico",
    text: "Analizamos tu situación actual, tu mercado y tu competencia para identificar oportunidades.",
  },
  {
    cls: "cn-s2",
    n: "2",
    title: "Estrategia",
    text: "Diseñamos un plan personalizado con objetivos claros, tácticas y métricas de éxito.",
  },
  {
    cls: "cn-s3",
    n: "3",
    title: "Ejecución",
    text: "Implementamos las estrategias con tu equipo, asegurando que cada acción genere impacto.",
  },
  {
    cls: "cn-s4",
    n: "4",
    title: "Optimización",
    text: "Medimos resultados y ajustamos la estrategia para maximizar el retorno de inversión.",
  },
];

const scope = [
  "Auditoría de presencia digital",
  "Roadmaps de crecimiento",
  "Estrategias de branding",
  "Posicionamiento SEO",
  "Campañas publicitarias",
  "Optimización de procesos comerciales",
];

// Curvas de nivel decorativas del hero (determinista, igual en servidor y cliente).
const topoPaths = (() => {
  const cx = 980;
  const cy = 380;
  const out = [];
  for (let r = 40; r < 900; r += 34) {
    let d = "";
    const n = 72;
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2;
      const w =
        1 +
        0.16 * Math.sin(a * 3 + r * 0.012) +
        0.1 * Math.sin(a * 5 - r * 0.02) +
        0.06 * Math.sin(a * 2 + r * 0.03);
      const x = cx + Math.cos(a) * r * 1.5 * w;
      const y = cy + Math.sin(a) * r * w;
      d += `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
    }
    out.push(d + "Z");
  }
  return out;
})();

function useRouteScroll() {
  const wrapRef = React.useRef(null);
  const progRef = React.useRef(null);
  const pinRef = React.useRef(null);
  const stepRefs = React.useRef([]);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const prog = progRef.current;
    const pin = pinRef.current;
    if (!wrap || !prog || !pin) return;
    const len = prog.getTotalLength();
    prog.style.strokeDasharray = len;
    const marks = STATIONS.map(([sx, sy]) => {
      let best = 0;
      let bd = Infinity;
      for (let l = 0; l <= len; l += 4) {
        const q = prog.getPointAtLength(l);
        const dd = Math.hypot(q.x - sx, q.y - sy);
        if (dd < bd) {
          bd = dd;
          best = l;
        }
      }
      return best;
    });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (window.innerWidth <= 900) {
        stepRefs.current.forEach((s) => s && s.classList.add("is-on"));
        return;
      }
      const r = wrap.getBoundingClientRect();
      const p = reduce
        ? 1
        : Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / r.height));
      const l = p * len;
      prog.style.strokeDashoffset = len - l;
      const pt = prog.getPointAtLength(l);
      pin.style.left = `${pt.x / 10}%`;
      pin.style.top = `${pt.y / 10}%`;
      stepRefs.current.forEach((s, i) => s && s.classList.toggle("is-on", l >= marks[i] - 30));
    };
    const tick = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { wrapRef, progRef, pinRef, stepRefs };
}

export default function ConsultoriaPage() {
  const { wrapRef, progRef, pinRef, stepRefs } = useRouteScroll();
  const trailRef = React.useRef(null);
  const dotRef = React.useRef(null);
  // El SVG del sendero se estira (preserveAspectRatio="none"); se compensa en el punto para que siga siendo redondo.
  React.useEffect(() => {
    const svg = trailRef.current;
    const dot = dotRef.current;
    if (!svg || !dot) return;
    const fix = () => {
      const { width, height } = svg.getBoundingClientRect();
      if (!width || !height) return;
      dot.setAttribute("transform", `scale(${1400 / width} ${800 / height})`);
    };
    fix();
    const ro = new ResizeObserver(fix);
    ro.observe(svg);
    return () => ro.disconnect();
  }, []);
  return (
    <>
      <div className="cn">
        <section className="cn-hero">
          <svg
            className="cn-topo"
            viewBox="0 0 1400 800"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            {topoPaths.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </svg>
          <svg
            ref={trailRef}
            className="cn-trail"
            viewBox="0 0 1400 800"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={TRAIL} />
            <circle ref={dotRef} r="6">
              <animateMotion dur="7s" repeatCount="indefinite" path={TRAIL} />
            </circle>
          </svg>
          <span className="cn-tag cn-tag-a">
            <i />
            {"Tu negocio hoy"}
          </span>
          <span className="cn-tag cn-tag-b">
            <FeatherIcons.FiFlag className="cn-icon" aria-hidden="true" />
            {"Siguiente nivel"}
          </span>
          <div className="cn-wrap">
            <h1 className="cn-h1">
              {"Consultoría "}
              <em>{"+ Asesorías"}</em>
            </h1>
            <div className="cn-hero-b">
              <p className="cn-sub">
                {
                  "Estrategias personalizadas, auditorías y planes de crecimiento para llevar tu negocio al siguiente nivel con decisiones inteligentes."
                }
              </p>
              <Link href="/contacto" className="cn-btn">
                {"AGENDAR CONSULTA GRATUITA"}
                <FeatherIcons.FiArrowRight className="cn-icon" />
              </Link>
            </div>
          </div>
        </section>

        <section className="cn-route">
          <div className="cn-wrap">
            <h2>{"Nuestra metodología"}</h2>
            <div className="cn-rwrap" ref={wrapRef}>
              <svg
                className="cn-rsvg"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path className="cn-base" d={ROUTE} />
                <path className="cn-prog" d={ROUTE} ref={progRef} />
              </svg>
              <div className="cn-pin" ref={pinRef} aria-hidden="true">
                <FeatherIcons.FiNavigation />
              </div>
              {steps.map((s, i) => (
                <article
                  key={s.n}
                  className={`cn-st ${s.cls}`}
                  ref={(el) => (stepRefs.current[i] = el)}
                >
                  <span className="cn-no">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cn-sec">
          <div className="cn-wrap cn-two">
            <div className="cn-txt">
              <h2>{"Estrategia y crecimiento empresarial"}</h2>
              <p>
                {
                  "Ofrecemos consultoría especializada en marketing digital, posicionamiento de marca y estrategia comercial. Nuestro enfoque combina análisis profundo, experiencia práctica y herramientas modernas para que cada decisión impulse resultados reales."
                }
              </p>
              <p>
                {
                  "Trabajamos contigo de cerca, entendiendo tu mercado, tus metas y los desafíos únicos de tu negocio para diseñar planes de acción concretos y medibles."
                }
              </p>
              <p>
                {
                  "Nuestras asesorías cubren desde la auditoría de tu presencia digital actual hasta la creación de roadmaps de crecimiento, incluyendo estrategias de branding, posicionamiento SEO, campañas publicitarias y optimización de procesos comerciales."
                }
              </p>
            </div>
            <ol className="cn-list">
              {scope.map((item) => (
                <li key={item} className="cn-li">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cn-cta">
          <div className="cn-goal" aria-hidden="true">
            <FeatherIcons.FiFlag />
          </div>
          <div className="cn-wrap">
            <h2>{"¿Listo para transformar tu negocio?"}</h2>
            <p>
              {
                "Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos comerciales con estrategias probadas."
              }
            </p>
            <Link href="/contacto" className="cn-btn">
              {"AGENDAR CONSULTA GRATUITA"}
              <FeatherIcons.FiArrowRight className="cn-icon" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
