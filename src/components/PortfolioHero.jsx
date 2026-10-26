import "../styles/portfolio-hero.css";

export default function PortfolioHero() {
  return (
    <section className="pf-hero">
      <i className="team-shape team-s1" aria-hidden="true" />
      <i className="team-shape team-s2" aria-hidden="true" />
      <i className="team-shape team-s3" aria-hidden="true" />
      <i className="team-shape team-s4" aria-hidden="true" />
      <i className="team-shape team-s5" aria-hidden="true" />
      <div className="pf-copy">
        <h1>
          {"Ideas que ya "}
          <mark>{"funcionan"}</mark>
        </h1>
      </div>
    </section>
  );
}
