"use client";
import * as React from "react";
import Image from "next/image";

const people = [
  {
    photo: "/isabelfoto.png",
    alt: "Licenciada Isabel de la Rosa",
    name: "Isabel de la Rosa",
    role: "Fundadora de Isa's Marketing",
    reverse: false,
    steps: [
      {
        title: ["Bases sólidas, ", "visión clara"],
        text: "Para la emprendedora, líder o dueña de negocio que quiere crecer con estrategia y legalidad.",
      },
      {
        title: ["", "Protección", " legal"],
        text: "Asesoría clara para proteger tu marca y patrimonio empresarial de forma preventiva.",
      },
      {
        title: ["Estrategias de ", "ventas"],
        text: "Sistemas de marketing probados que generan crecimiento real y sostenible en el tiempo.",
      },
      {
        title: ["Liderazgo ", "femenino"],
        text: "Inspiración y guía para empoderar a mujeres empresarias en la toma de decisiones.",
      },
    ],
  },
  {
    photo: "/isaias-sillon.png",
    alt: "Maestro Isaias Osuna Barrera",
    name: "Isaias Osuna Barrera",
    role: "Líder estratégico",
    reverse: true,
    steps: [
      {
        title: ["La disciplina ", "vence", " al talento"],
        text: "Inspirado en el estoicismo, convierto cada desafío en una oportunidad.",
      },
      {
        title: ["Marcas ", "sólidas"],
        text: "Construcción de negocios escalables mediante estrategia y procesos operativos claros.",
      },
      {
        title: ["Mentalidad ", "resiliente"],
        text: "Forjando emprendedores con control emocional y acción enfocada para superar retos.",
      },
      {
        title: ["Transformación ", "tecnológica"],
        text: "La última tecnología como herramienta principal para alcanzar objetivos rápido.",
      },
    ],
  },
];

const markColors = ["#FEFB0B", "#FF1515", "#4D4DE6", "#000000"];

function Chapter({ person }) {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef([]);

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(refs.current.indexOf(e.target));
        }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`about-story-chapter ${person.reverse ? "is-reverse" : ""}`}>
      <div className="about-story-photo">
        <Image
          src={person.photo}
          alt={person.alt}
          width={800}
          height={1000}
          sizes="(max-width: 860px) 100vw, 40vw"
        />
        <div className="about-story-name">
          <h3>{person.name}</h3>
          <span>{person.role}</span>
        </div>
      </div>
      <div className="about-story-steps">
        {person.steps.map((step, i) => (
          <div
            key={step.text}
            ref={(el) => (refs.current[i] = el)}
            className={i === active ? "is-active" : ""}
            style={{ "--mark": markColors[i % markColors.length] }}
          >
            <h4>
              {step.title.map((part, j) =>
                j % 2 === 1 ? <mark key={j}>{part}</mark> : part,
              )}
            </h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutStory() {
  return (
    <section id="conocenos" className="about-story">
      {people.map((p) => (
        <Chapter key={p.name} person={p} />
      ))}
    </section>
  );
}
