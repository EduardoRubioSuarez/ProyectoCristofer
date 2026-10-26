"use client";
import * as React from "react";
import Link from "next/link";
import "../styles/before-after.css";

// Perfil de ejemplo (empresa ficticia): el mismo negocio, antes y después de trabajar con ISA'S.
const messyTiles = [
  { bg: "#ff6b35", fg: "#fff", t: "OFERTA!!!", s: "s1" },
  { bg: "#27a7d8", fg: "#ffe14d", t: "Buenos días", s: "s2" },
  { bg: "#c0c0c0", fg: "#222", t: "2x1", s: "s3" },
  { bg: "#8e44ad", fg: "#fff", t: "Promo", s: "s4" },
  { bg: "#e8e8e8", fg: "#e0245e", t: "visítanos", s: "s2" },
  { bg: "#2ecc71", fg: "#fff", t: "OFERTA", s: "s1" },
  { bg: "#f1c40f", fg: "#6b2e2e", t: "Feliz lunes", s: "s3" },
  { bg: "#34495e", fg: "#ff8c8c", t: "café café café", s: "s4" },
  { bg: "#e74c3c", fg: "#ffe14d", t: "ÚLTIMOS DÍAS", s: "s1" },
  { bg: "#16a085", fg: "#fff", t: "Gracias!!", s: "s2" },
  { bg: "#ecf0f1", fg: "#c0392b", t: "PROMO 3x2", s: "s1" },
  { bg: "#d35400", fg: "#f9e79f", t: "cafecito", s: "s3" },
];

const cleanTiles = [
  { bg: "#fefb0b", fg: "#000", t: "Café de la casa" },
  { bg: "#000", fg: "#fefb0b", t: "Abierto de 7 a 7" },
  { bg: "#f7f8fa", fg: "#000", t: "Pan de hoy" },
  { bg: "#000", fg: "#fff", t: "Menú de temporada" },
  { bg: "#fefb0b", fg: "#000", t: "Desayunos" },
  { bg: "#f7f8fa", fg: "#000", t: "Frente al mar" },
  { bg: "#fefb0b", fg: "#000", t: "Reserva tu mesa" },
  { bg: "#000", fg: "#fefb0b", t: "Café de especialidad" },
  { bg: "#000", fg: "#fff", t: "Sabor local" },
  { bg: "#fefb0b", fg: "#000", t: "Hecho cada mañana" },
  { bg: "#f7f8fa", fg: "#000", t: "Te esperamos" },
  { bg: "#f7f8fa", fg: "#000", t: "Gracias, La Paz" },
];

function MessyLogo() {
  return (
    <svg viewBox="0 0 80 80" className="ba-avatar-svg" aria-hidden="true">
      <defs>
        <linearGradient id="ba-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff00c8" />
          <stop offset="0.5" stopColor="#7a00ff" />
          <stop offset="1" stopColor="#00e5ff" />
        </linearGradient>
        <radialGradient id="ba-g2">
          <stop offset="0" stopColor="#fff7a8" />
          <stop offset="1" stopColor="#ff9a00" />
        </radialGradient>
      </defs>
      <rect width="80" height="80" fill="url(#ba-g1)" />
      <circle cx="40" cy="38" r="22" fill="url(#ba-g2)" opacity="0.9" />
      <path
        d="M16 58 C 28 30, 52 70, 66 22"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
      />
      <path d="M22 28 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4z" fill="#fff" />
      <text
        x="40"
        y="68"
        textAnchor="middle"
        fontSize="9"
        fill="#fff"
        fontFamily="serif"
        fontStyle="italic"
      >
        Cafe Mrina
      </text>
    </svg>
  );
}

function ProfileBefore() {
  return (
    <div className="ba-profile ba-before" aria-hidden="true">
      <div className="ba-head">
        <div className="ba-avatar">
          <MessyLogo />
        </div>
        <div className="ba-stats">
          <span><b>1,284</b>publ.</span>
          <span><b>312</b>seguid.</span>
          <span><b>2,090</b>seguidos</span>
        </div>
      </div>
      <p className="ba-bio-messy">
        cafe_marina_oficial_2 *** CAFE - PAN - POSTRES - COMIDA - DESAYUNOS -
        EVENTOS - PEDIDOS AL 612... ¡¡SIGUENOS!! ofertas todos los dias
        escribenos por DM
      </p>
      <div className="ba-grid">
        {messyTiles.map((t, i) => (
          <div
            key={i}
            className={`ba-tile ba-messy ${t.s}`}
            style={{ background: t.bg, color: t.fg }}
          >
            {t.t}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileAfter() {
  return (
    <div className="ba-profile ba-after" aria-hidden="true">
      <div className="ba-head">
        <div className="ba-avatar ba-avatar-clean">
          <span>M</span>
        </div>
        <div className="ba-stats">
          <span><b>96</b>publicaciones</span>
          <span><b>8,420</b>seguidores</span>
        </div>
      </div>
      <p className="ba-name">Casa Marina Café</p>
      <p className="ba-bio-clean">
        Café de especialidad frente al mar. Abierto de 7 a 7, La Paz, B.C.S.
      </p>
      <div className="ba-grid">
        {cleanTiles.map((t, i) => (
          <div
            key={i}
            className="ba-tile ba-clean"
            style={{ background: t.bg, color: t.fg }}
          >
            {t.t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [pos, setPos] = React.useState(50);

  return (
    <section className="ba" aria-labelledby="ba-title">
      <div className="ba-inner">
        <div className="ba-copy">
          <h2 id="ba-title" className="ba-title">
            El mismo negocio, <mark>otra primera impresión.</mark>
          </h2>
          <p className="ba-lead">
            Antes de comprar, tus clientes revisan tu perfil. Mueve el control y
            mira la diferencia entre publicar por publicar y una marca con
            estrategia.
          </p>
          <ul className="ba-points">
            <li>Una identidad coherente en cada publicación.</li>
            <li>Contenido con intención, no solo ofertas.</li>
            <li>Un perfil que invita a seguirte y a escribirte.</li>
          </ul>
          <Link href="/gestion-redes-sociales" className="ba-link">
            Ver gestión de redes sociales
          </Link>
        </div>

        <div className="ba-stage" style={{ "--pos": `${pos}%` }}>
          <div className="ba-device">
            <div className="ba-layer">
              <ProfileAfter />
            </div>
            <div className="ba-layer ba-layer-top">
              <ProfileBefore />
            </div>
            <span className="ba-chip ba-chip-before">Antes</span>
            <span className="ba-chip ba-chip-after">Después</span>
            <span className="ba-handle" aria-hidden="true">
              <i />
            </span>
            <input
              className="ba-range"
              type="range"
              min={0}
              max={100}
              step={0.5}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar el perfil antes y después"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
