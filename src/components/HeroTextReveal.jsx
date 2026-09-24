"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import styles from "../styles/HeroTextReveal.classes.js";
function HeroTextReveal({ title: e, subtitle: r }) {
  let a = e.replace("+IA", "").trim().split(" "),
    n = r.split(" ");
  return (
    <div className={styles.heroTextWrapper}>
      <h1>
        <span className={styles.titleLine}>
          <span className={styles.shimmerWrap}>
            {a.map((e, r) => (
              <span
                className={styles.titleWord}
                style={{
                  animationDelay: `${0.15 + 0.1 * r}s`,
                }}
                key={r}
              >
                {e}{" "}
              </span>
            ))}
            <span
              className={`${styles.titleWord} ${styles.iaGlitch}`}
              style={{
                animationDelay: `${0.15 + 0.1 * a.length}s`,
              }}
            >
              {"+IA"}
            </span>
          </span>
        </span>
      </h1>
      <p className={styles.subtitleReveal}>
        {n.map((e, l) => (
          <span
            style={{
              animationDelay: `${1.2 + 0.03 * l}s`,
            }}
            key={l}
          >
            {e}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}
export default HeroTextReveal;
