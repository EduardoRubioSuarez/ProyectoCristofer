"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import styles from "../styles/HeroParticles.classes.js";
function HeroParticles() {
  let e = React.useRef(null),
    a = React.useRef({
      x: -1e3,
      y: -1e3,
    }),
    n = React.useRef([]),
    i = React.useRef(0);
  return (
    React.useEffect(() => {
      let t = e.current;
      if (!t) return;
      let l = t.getContext("2d");
      if (!l) return;
      let r = ["0, 229, 255", "255, 0, 60", "77, 255, 255", "180, 100, 255"],
        s = 0,
        o = 0;
      function c() {
        let e = t.parentElement;
        e &&
          ((s = e.clientWidth),
          (o = e.clientHeight),
          (t.width = s),
          (t.height = o));
      }
      function u() {
        let e = Math.min(Math.floor((s * o) / 12e3), 120),
          t = [];
        for (let l = 0; l < e; l++) {
          let e = 0.3 + 0.7 * Math.random();
          t.push({
            x: Math.random() * s,
            y: Math.random() * o,
            vx: (Math.random() - 0.5) * 0.4 * e,
            vy: (Math.random() - 0.5) * 0.3 * e,
            radius: (1 + 2 * Math.random()) * e,
            color: r[Math.floor(Math.random() * r.length)],
            alpha: 0,
            targetAlpha: 0.15 + 0.5 * Math.random(),
            depth: e,
          });
        }
        n.current = t;
      }
      function d(e) {
        let l = t.getBoundingClientRect();
        ((a.current.x = e.clientX - l.left), (a.current.y = e.clientY - l.top));
      }
      function m() {
        ((a.current.x = -1e3), (a.current.y = -1e3));
      }
      (c(),
        u(),
        (function e() {
          if (!l) return;
          l.clearRect(0, 0, s, o);
          let t = a.current.x,
            r = a.current.y,
            c = n.current;
          for (let e = 0; e < c.length; e++) {
            let a = c[e];
            a.alpha += (a.targetAlpha - a.alpha) * 0.02;
            let n = a.x - t,
              i = a.y - r,
              u = Math.sqrt(n * n + i * i);
            if (u < 200) {
              let e = (1 - u / 200) * 0.4 * a.depth;
              (l.beginPath(),
                l.moveTo(a.x, a.y),
                l.lineTo(t, r),
                (l.strokeStyle = `rgba(${a.color}, ${e})`),
                (l.lineWidth = 0.5),
                l.stroke(),
                (a.vx += -((n / u) * 0.02) * a.depth),
                (a.vy += -((i / u) * 0.02) * a.depth));
            }
            for (let t = e + 1; t < c.length; t++) {
              let e = c[t],
                r = a.x - e.x,
                n = a.y - e.y,
                i = Math.sqrt(r * r + n * n);
              if (i < 140) {
                let t = (1 - i / 140) * 0.12 * Math.min(a.depth, e.depth);
                (l.beginPath(),
                  l.moveTo(a.x, a.y),
                  l.lineTo(e.x, e.y),
                  (l.strokeStyle = `rgba(${a.color}, ${t})`),
                  (l.lineWidth = 0.4),
                  l.stroke());
              }
            }
            ((a.x += a.vx),
              (a.y += a.vy),
              (a.vx *= 0.995),
              (a.vy *= 0.995),
              a.x < -10 && (a.x = s + 10),
              a.x > s + 10 && (a.x = -10),
              a.y < -10 && (a.y = o + 10),
              a.y > o + 10 && (a.y = -10),
              l.beginPath(),
              l.arc(a.x, a.y, a.radius, 0, 2 * Math.PI),
              (l.fillStyle = `rgba(${a.color}, ${a.alpha})`),
              l.fill(),
              a.radius > 1.5 &&
                (l.beginPath(),
                l.arc(a.x, a.y, 3 * a.radius, 0, 2 * Math.PI),
                (l.fillStyle = `rgba(${a.color}, ${0.1 * a.alpha})`),
                l.fill()));
          }
          i.current = requestAnimationFrame(e);
        })(),
        window.addEventListener("resize", () => {
          (c(), u());
        }));
      let h = t.parentElement;
      return (
        h &&
          (h.addEventListener("mousemove", d),
          h.addEventListener("mouseleave", m)),
        () => {
          (cancelAnimationFrame(i.current),
            window.removeEventListener("resize", c),
            h &&
              (h.removeEventListener("mousemove", d),
              h.removeEventListener("mouseleave", m)));
        }
      );
    }, []),
    (<canvas ref={e} className={styles.particleCanvas} />)
  );
}
export default HeroParticles;
