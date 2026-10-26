"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import * as FeatherIcons from "react-icons/fi";
import Footer from "./Footer.jsx";
import "../styles/talleres-page.css";

const SLIDE_MS = 9000;

const courses = [
  {
    img: "/talleres/ia.jpg",
    title: "Inteligencia Artificial",
    short: "Inteligencia Artificial",
    text: "Aprende a integrar herramientas de IA en tu negocio y flujo de trabajo. Desde automatización de tareas hasta generación de contenido con modelos de lenguaje, te enseñamos a usar la inteligencia artificial de forma práctica para ser más productivo y competitivo.",
    topics: [
      "Fundamentos de IA aplicada al negocio",
      "Automatización de procesos con IA",
      "Generación de contenido con IA",
      "Herramientas de productividad potenciadas con IA",
    ],
  },
  {
    img: "/talleres/marketing.jpg",
    title: "Redes Sociales y Marketing Digital",
    short: "Marketing Digital",
    text: "Domina las plataformas digitales y aprende estrategias reales de marketing que generan resultados medibles. Desde la creación de contenido hasta la gestión de campañas publicitarias, capacita a tu equipo con las habilidades más demandadas del mercado.",
    topics: [
      "Estrategia de contenido para redes sociales",
      "Publicidad en Meta Ads y Google Ads",
      "Branding y posicionamiento de marca",
      "Análisis de métricas y optimización de campañas",
    ],
  },
  {
    img: "/talleres/estoicismo.jpg",
    title: "Estoicismo",
    short: "Estoicismo",
    text: "Desarrolla una mentalidad resiliente y enfocada aplicando los principios del estoicismo al liderazgo y la vida empresarial. Un taller único que combina filosofía clásica con herramientas modernas de desarrollo personal y profesional.",
    topics: [
      "Principios estoicos aplicados al liderazgo",
      "Control emocional y toma de decisiones",
      "Resiliencia y manejo del estrés",
      "Filosofía práctica para emprendedores",
    ],
  },
  {
    img: "/talleres/ventas.jpg",
    title: "Ventas",
    short: "Ventas",
    text: "Domina las técnicas de venta más efectivas del mercado actual. Desde la prospección hasta el cierre, aprende a construir relaciones con clientes, manejar objeciones y multiplicar tus resultados comerciales con estrategias probadas.",
    topics: [
      "Técnicas de prospección y captación de clientes",
      "Manejo de objeciones y cierre de ventas",
      "Estrategias de venta consultiva",
      "Negociación y seguimiento postventa",
    ],
  },
];

function useReducedMotion() {
  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduce;
}

function Deck() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [hover, setHover] = React.useState(false);
  const [cycle, setCycle] = React.useState(0);
  const running = playing && !hover && !reduce;

  const go = React.useCallback((i, user) => {
    setActive((i + courses.length) % courses.length);
    if (user) setPlaying(false);
    setCycle((c) => c + 1);
  }, []);

  React.useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => go(active + 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [running, active, cycle, go]);

  const onKey = (e) => {
    if (e.key === "ArrowRight") go(active + 1, true);
    if (e.key === "ArrowLeft") go(active - 1, true);
  };

  return (
    <div
      className="tl-stage"
      tabIndex={0}
      onKeyDown={onKey}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setCycle((c) => c + 1);
      }}
      role="group"
      aria-roledescription="presentación"
      aria-label="Cursos: usa las flechas del teclado para cambiar"
    >
      <div className="tl-prog" aria-hidden="true">
        <i key={`${active}-${cycle}-${running}`} className={running ? "is-run" : ""} />
      </div>

      {courses.map((c, i) => (
        <article
          key={c.title}
          className={`tl-sl ${i === active ? "is-on" : ""}`}
          aria-hidden={i !== active}
        >
          <Image src={c.img} alt="" fill sizes="(max-width: 1240px) 100vw, 1240px" priority={i === 0} />
          <div className="tl-c">
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <ul>
              {c.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Link href="/contacto" className="tl-btn" tabIndex={i === active ? 0 : -1}>
              {"SOLICITAR INFO"}
              <FeatherIcons.FiArrowRight className="tl-icon" />
            </Link>
          </div>
        </article>
      ))}

      <div className="tl-ctrl">
        <div className="tl-dots">
          {courses.map((c, i) => (
            <button
              key={c.title}
              type="button"
              className={`tl-dot ${i === active ? "is-on" : ""}`}
              onClick={() => go(i, true)}
              aria-current={i === active}
            >
              {c.short}
            </button>
          ))}
        </div>
        <div className="tl-arrows">
          <span aria-hidden="true">
            {active + 1} / {courses.length}
          </span>
          <button
            type="button"
            className="tl-ab"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pausar presentación" : "Reanudar presentación"}
          >
            {playing ? <FeatherIcons.FiPause /> : <FeatherIcons.FiPlay />}
          </button>
          <button type="button" className="tl-ab" onClick={() => go(active - 1, true)} aria-label="Curso anterior">
            <FeatherIcons.FiArrowLeft />
          </button>
          <button type="button" className="tl-ab" onClick={() => go(active + 1, true)} aria-label="Curso siguiente">
            <FeatherIcons.FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TalleresPage() {
  return (
    <>
      <div className="tl">
        <section className="tl-hero">
          <div className="tl-wrap">
            <h1 className="tl-h1">
              {"Talleres "}
              <span>{"+ Capacitación"}</span>
            </h1>
            <div className="tl-hero-b">
              <p className="tl-sub">
                {"Formación especializada en "}
                <b>{"marketing digital, ventas e inteligencia artificial"}</b>
                {" para equipos y emprendedores que buscan resultados reales."}
              </p>
              <Link href="/contacto" className="tl-btn">
                {"SOLICITAR INFORMACIÓN"}
                <FeatherIcons.FiArrowRight className="tl-icon" />
              </Link>
            </div>
          </div>
        </section>

        <section className="tl-deck">
          <div className="tl-wrap">
            <div className="tl-dh">
              <h2>{"Nuestros cursos"}</h2>
              <p>
                {
                  "Cada taller combina teoría con ejercicios prácticos para que puedas aplicar lo aprendido de inmediato en tu negocio."
                }
              </p>
            </div>
            <Deck />
          </div>
        </section>

        <section className="tl-cta">
          <div className="tl-wrap">
            <h2>{"¿Listo para capacitar a tu equipo?"}</h2>
            <p>
              {
                "Solicita información sobre nuestros talleres y programas de capacitación personalizados."
              }
            </p>
            <Link href="/contacto" className="tl-btn">
              {"SOLICITAR INFORMACIÓN"}
              <FeatherIcons.FiArrowRight className="tl-icon" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
