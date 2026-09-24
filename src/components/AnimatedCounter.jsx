"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import styles from "../styles/AnimatedCounter.classes.js";
function Counter({
  end: e,
  prefix: a = "",
  suffix: n = "",
  label: i,
  duration: s = 2e3,
}) {
  let [o, c] = React.useState(0),
    [u, d] = React.useState(false),
    m = React.useRef(null);
  return (
    React.useEffect(() => {
      let e = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && !u && d(true);
        },
        {
          threshold: 0.5,
        },
      );
      return (m.current && e.observe(m.current), () => e.disconnect());
    }, [u]),
    React.useEffect(() => {
      if (!u) return;
      let t = 0,
        l = Math.ceil(e / (s / 16)),
        r = setInterval(() => {
          (t += l) >= e ? (c(e), clearInterval(r)) : c(t);
        }, 16);
      return () => clearInterval(r);
    }, [u, e, s]),
    (
      <div className={styles.counter} ref={m}>
        <span className={styles.number}>
          {a}
          {o}
          {n}
        </span>
        <span className={styles.label}>{i}</span>
      </div>
    )
  );
}
function AnimatedCounter() {
  return (
    <div className={styles.countersRow}>
      <Counter
        end={6}
        prefix={"+"}
        suffix={" años"}
        label={"Impulsando marcas"}
      />
      <div className={styles.divider} />
      <Counter end={380} prefix={"+"} label={"Colaboraciones con negocios"} />
      <div className={styles.divider} />
      <Counter
        end={600}
        prefix={"+"}
        label={"Alumnos en venta, marketing y IA"}
      />
    </div>
  );
}
export default AnimatedCounter;
