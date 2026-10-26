"use client";
import * as React from "react";

// Formas del logo: punto, línea y D (en cuatro orientaciones).
const D_KINDS = ["dR", "dD", "dL", "dU"];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Generador con semilla fija: la distribución inicial es siempre la misma al recargar.
function seeded(seed) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomKind(exclude, rand = Math.random) {
  let k;
  do {
    const r = rand();
    k =
      r < 0.3
        ? "dot"
        : r < 0.6
          ? "bar"
          : D_KINDS[Math.floor(rand() * D_KINDS.length)];
  } while (k === exclude);
  return k;
}

// Cada forma vive en una caja fija (ancho de la línea x alto del punto) y se recorta
// con clip-path: así cambiar de forma no recalcula el layout de la página.
function applyKind(slot, k) {
  slot.k = k;
  const { u, el } = slot;
  // Caja común: la línea mide 2.5 veces su alto, como en el logo.
  const bw = u * 0.92,
    bh = u * 0.62;
  // Siempre 4 radios (TL TR BR BL) en px: si el número de valores cambia entre
  // formas, el navegador no interpola el clip-path y la forma salta de golpe.
  let w = bh,
    h = bh,
    rad = [bh / 2, bh / 2, bh / 2, bh / 2];
  if (k === "bar") {
    w = bw;
    h = bw / 2.5;
    rad = [h / 2, h / 2, h / 2, h / 2];
  } else if (k === "dR") rad = [0, bh / 2, bh / 2, 0];
  else if (k === "dD") rad = [0, 0, bh / 2, bh / 2];
  else if (k === "dL") rad = [bh / 2, 0, 0, bh / 2];
  else if (k === "dU") rad = [bh / 2, bh / 2, 0, 0];
  const r = rad.map((v) => `${v.toFixed(2)}px`).join(" ");
  const ix = (bw - w) / 2,
    iy = (bh - h) / 2;
  el.style.clipPath = `inset(${iy.toFixed(2)}px ${ix.toFixed(2)}px ${iy.toFixed(2)}px ${ix.toFixed(2)}px round ${r})`;
  slot.maxScale = (slot.limit * 0.98) / Math.max(w, h);
}

export default function HeroShapes() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const root = ref.current;
    const hero = root.parentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    let slots = [];
    let visible = true;
    let pointer = { x: -1e4, y: -1e4 };
    let raf = 0;
    let width = 0;
    let height = 0;

    function build() {
      root.innerHTML = "";
      slots = [];
      const W = hero.clientWidth,
        H = hero.clientHeight;
      width = W;
      height = H;
      // La cuadrícula empieza debajo del navbar, así la primera fila queda completa.
      const top = W < 900 ? 70 : 96;
      const rand = seeded(20240611);
      // Cuadrícula fija de 3 filas x 8 columnas (4 columnas en pantallas angostas).
      const ROWS = 3,
        COLS = W < 700 ? 4 : 8;
      const pitchX = W / COLS,
        pitchY = Math.max(40, (H - top - 16) / ROWS),
        u = Math.min(pitchX, pitchY),
        limit = Math.min(pitchX, pitchY);
      // Cantidad de figuras por fila (arriba y abajo más llenas, en medio más vacía),
      // elegidas con la semilla para que la distribución sea siempre la misma.
      const fills = [0.62, 0.38, 0.75].map((f) => Math.round(COLS * f));
      let hasExtra = false;
      const addSlot = (r, q, rnd) => {
        const cx = (q + 0.5) * pitchX,
          cy = top + (r + 0.5) * pitchY;
        const el = document.createElement("span");
        el.className = "hero-shape";
        el.style.width = `${u * 0.92}px`;
        el.style.height = `${u * 0.62}px`;
        const slot = { el, u, limit, cell: u, cx, cy, row: r, sc: 1, near: false };
        applyKind(slot, randomKind(undefined, rnd));
        el.style.transform = `translate(${slot.cx}px, ${slot.cy}px) translate(-50%, -50%)`;
        root.appendChild(el);
        slots.push(slot);
      };
      for (let r = 0; r < ROWS; r++) {
        const cols = Array.from({ length: COLS }, (_, i) => i);
        for (let i = cols.length - 1; i > 0; i--) {
          const j = Math.floor(rand() * (i + 1));
          [cols[i], cols[j]] = [cols[j], cols[i]];
        }
        for (const q of cols.slice(0, fills[r])) {
          addSlot(r, q, rand);
          if (r === 1 && q === 0) hasExtra = true;
        }
      }
      // Figura extra (fila 2, columna 1) con su propio generador: no altera el
      // sorteo del resto de figuras.
      if (!hasExtra) addSlot(1, 0, seeded(777));
      root.classList.add("is-ready");
    }

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!visible || coarse || reduce) return;
      for (const s of slots) {
        const d = Math.hypot(s.cx - pointer.x, s.cy - pointer.y);
        const t = clamp(1 - d / (s.cell * 2.4), 0, 1);
        const target = 1 + t * (s.maxScale - 1);
        if (Math.abs(target - s.sc) < 0.0005 && t === 0) continue;
        s.sc += (target - s.sc) * 0.14;
        const isNear = t > 0.55;
        if (isNear && !s.near) applyKind(s, randomKind(s.k));
        s.near = isNear;
        s.el.style.transform = `translate(${s.cx}px, ${s.cy}px) translate(-50%, -50%) scale(${s.sc.toFixed(3)})`;
      }
    }

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => (pointer = { x: -1e4, y: -1e4 });

    build();
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(frame);

    const idle = reduce
      ? null
      : setInterval(() => {
          if (!visible || document.hidden || !slots.length) return;
          const s = slots[Math.floor(Math.random() * slots.length)];
          applyKind(s, randomKind(s.k));
        }, 550);

    const io = new IntersectionObserver(
      ([entry]) => (visible = entry.isIntersecting),
      { rootMargin: "80px" },
    );
    io.observe(hero);

    let resizeTimer;
    const ro = new ResizeObserver(() => {
      if (hero.clientWidth === width && Math.abs(hero.clientHeight - height) < 40)
        return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    });
    ro.observe(hero);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(idle);
      clearTimeout(resizeTimer);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return <div ref={ref} className="hero-shapes" aria-hidden="true" />;
}
