import Image from "next/image";

// Color de cada área según el servicio de la página al que corresponde.
export const areas = [
  { name: "Asesoría legal", color: "#000000" },
  { name: "Manejo de marca", color: "#000000" },
  { name: "Marketing digital", color: "#FEFB0B" },
  { name: "Ventas", color: "#FF1515" },
  { name: "Desarrollo de software", color: "#4D4DE6" },
  { name: "Diseño gráfico", color: "#FEFB0B" },
];

export default function TeamAreas() {
  return (
    <section id="equipo" className="team-areas">
      <div className="team-areas-inner">
        <div className="team-areas-photos">
          <Image
            className="team-areas-p1"
            src="/equipo-formal.jpeg"
            alt="El equipo de ISA'S"
            width={1280}
            height={852}
            sizes="(max-width: 860px) 80vw, 40vw"
          />
          <Image
            className="team-areas-p2"
            src="/equipo-feliz.jpeg"
            alt="El equipo de ISA'S celebrando"
            width={1280}
            height={852}
            sizes="(max-width: 860px) 70vw, 35vw"
          />
          <i className="team-areas-dot team-areas-d1" aria-hidden="true" />
          <i className="team-areas-dot team-areas-d2" aria-hidden="true" />
        </div>
        <div className="team-areas-copy">
          <span className="team-areas-kicker">{"ASÍ SOMOS"}</span>
          <h2>
            {"Conoce a quienes "}
            <mark>{"cuidan tu marca"}</mark>
          </h2>
          <p>{"Cubrimos todas las áreas que tu marca necesita, todo bajo el mismo techo:"}</p>
          <ul className="team-areas-list">
            {areas.map((a) => (
              <li key={a.name} style={{ "--dot": a.color }}>
                {a.name}
              </li>
            ))}
          </ul>
          {/* <p className="team-areas-note">
            {
              "Por eso no tienes que coordinar a varios proveedores: aquí todos se conocen y trabajan juntos."
            }
          </p> */}
        </div>
      </div>
    </section>
  );
}
