"use client";
import * as React from "react";
import Image from "next/image";
import "../styles/portfolio-page.css";

// `bg` es el tono claro del área; se aplica al fondo de la sección al pasar el cursor.
// Los proyectos de desarrollo web llevan `href` y se vuelven enlaces.
const AREAS = {
  redes: { label: "Redes sociales", bg: "#FFFBA6" },
  talleres: { label: "Talleres", bg: "#FFC2C2" },
  software: { label: "Desarrollo web", bg: "#C9C9FF" },
  consultoria: { label: "Consultoría", bg: "#DADADA" },
  diseno: { label: "Diseño gráfico", bg: "#FFFBA6" },
};

const projects = [
  { area: "redes", name: "Gestión de redes", src: "/f1.png", w: 2835, h: 2835 },
  {
    area: "software",
    name: "Jardines de la Baja",
    src: "/c2.jpg",
    w: 1000,
    h: 1000,
    href: "#",
  },
  { area: "talleres", name: "Taller: cómo crecer mi negocio", src: "/ta1.jpg", w: 1600, h: 1600 },
  { area: "consultoria", name: "Consultoría empresarial", src: "/co2.jpeg", w: 1600, h: 1066 },
  {
    area: "software",
    name: "Puertas San Jorge",
    src: "/c7.png",
    w: 720,
    h: 1336,
    href: "#",
  },
  { area: "diseno", name: "Publicidad y señalética", src: "/f5.png", w: 2295, h: 2295 },
  { area: "software", name: "Desarrollo de apps", src: "/pt3.jpg", w: 1500, h: 1000 },
  { area: "talleres", name: "Taller de marketing", src: "/4.jpeg", w: 960, h: 1280 },
  { area: "redes", name: "Contenido para redes", src: "/a1.jpg", w: 2048, h: 1367 },
];

const ORDER = ["redes", "software", "talleres", "consultoria", "diseno"];

export default function PortfolioGrid() {
  const [bg, setBg] = React.useState(null);
  const [cursor, setCursor] = React.useState(null);
  const [filter, setFilter] = React.useState(null);

  // El hero vive fuera de este componente: comparte el color por variable en :root.
  React.useEffect(() => {
    const root = document.documentElement;
    if (bg) root.style.setProperty("--portfolio-bg", bg);
    else root.style.removeProperty("--portfolio-bg");
    return () => root.style.removeProperty("--portfolio-bg");
  }, [bg]);

  const onMove =(e, link) =>
    setCursor(link ? { x: e.clientX, y: e.clientY } : null);

  const visible = filter ? ORDER.filter((k) => k === filter) : ORDER;

  const renderCard = (p) => {
    const area = AREAS[p.area];
    const card = (
      <>
        <Image
          src={p.src}
          alt={p.name}
          width={p.w}
          height={p.h}
          sizes="(max-width: 860px) 100vw, 33vw"
        />
        <span className="portfolio-tag">
          {filter === null ? `${p.name} · ${area.label}` : p.name}
        </span>
      </>
    );
    const common = {
      className: `portfolio-card ${p.href ? "is-link" : ""}`,
      onMouseEnter: () => setBg(area.bg),
      onMouseLeave: () => {
        setBg(null);
        setCursor(null);
      },
      onMouseMove: (e) => onMove(e, !!p.href),
    };
    return p.href ? (
      <a key={p.name} href={p.href} {...common}>
        {card}
      </a>
    ) : (
      <div key={p.name} {...common}>
        {card}
      </div>
    );
  };

  return (
    <section id="casos" className="portfolio">
      <p className="portfolio-hint">
        Presiona una categoría para ver solo los proyectos que te interesan.
      </p>
      <nav className="portfolio-filters" aria-label="Categorías del portafolio">
        <button
          type="button"
          className={`portfolio-chip ${filter === null ? "is-active" : ""}`}
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
        >
          Todos
        </button>
        {ORDER.map((k) => (
          <button
            key={k}
            type="button"
            className={`portfolio-chip ${filter === k ? "is-active" : ""}`}
            aria-pressed={filter === k}
            style={{ "--chip-bg": AREAS[k].bg }}
            onClick={() => setFilter(k)}
          >
            {AREAS[k].label}
          </button>
        ))}
      </nav>
      {filter === null && (
        <div className="portfolio-group">
          <div className="portfolio-grid">{projects.map(renderCard)}</div>
        </div>
      )}
      {filter !== null && visible.map((k) => {
        const items = projects.filter((p) => p.area === k);
        if (!items.length) return null;
        return (
          <div key={k} className="portfolio-group">
            <h2 className="portfolio-group-title">
              {AREAS[k].label}
            </h2>
            <div className="portfolio-grid">{items.map(renderCard)}</div>
          </div>
        );
      })}
      <span
        className={`portfolio-cursor ${cursor ? "is-on" : ""}`}
        style={cursor ? { left: cursor.x, top: cursor.y } : undefined}
        aria-hidden="true"
      >
        {"Ver ↗"}
      </span>
    </section>
  );
}
