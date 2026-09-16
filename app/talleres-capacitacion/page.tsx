import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Talleres y Capacitación",
  description:
    "Formación especializada en marketing digital, ventas, estoicismo e inteligencia artificial para equipos y emprendedores.",
};

const COURSES = [
  {
    title: "Inteligencia Artificial",
    image: "/14.jpg",
    text: "Aprende a integrar herramientas de IA en tu negocio y flujo de trabajo. Desde automatización de tareas hasta generación de contenido con modelos de lenguaje, te enseñamos a usar la inteligencia artificial de forma práctica para ser más productivo y competitivo.",
    bullets: [
      "Fundamentos de IA aplicada al negocio",
      "Automatización de procesos con IA",
      "Generación de contenido con IA",
      "Herramientas de productividad potenciadas con IA",
    ],
  },
  {
    title: "Redes Sociales y Marketing Digital",
    image: "/15.jpg",
    text: "Domina las plataformas digitales y aprende estrategias reales de marketing que generan resultados medibles. Desde la creación de contenido hasta la gestión de campañas publicitarias, capacita a tu equipo con las habilidades más demandadas del mercado.",
    bullets: [
      "Estrategia de contenido para redes sociales",
      "Publicidad en Meta Ads y Google Ads",
      "Branding y posicionamiento de marca",
      "Análisis de métricas y optimización de campañas",
    ],
  },
  {
    title: "Estoicismo",
    image: "/16.jpg",
    text: "Desarrolla una mentalidad resiliente y enfocada aplicando los principios del estoicismo al liderazgo y la vida empresarial. Un taller único que combina filosofía clásica con herramientas modernas de desarrollo personal y profesional.",
    bullets: [
      "Principios estoicos aplicados al liderazgo",
      "Control emocional y toma de decisiones",
      "Resiliencia y manejo del estrés",
      "Filosofía práctica para emprendedores",
    ],
  },
  {
    title: "Ventas",
    image: "/19.jpg",
    text: "Domina las técnicas de venta más efectivas del mercado actual. Desde la prospección hasta el cierre, aprende a construir relaciones con clientes, manejar objeciones y multiplicar tus resultados comerciales con estrategias probadas.",
    bullets: [
      "Técnicas de prospección y captación de clientes",
      "Manejo de objeciones y cierre de ventas",
      "Estrategias de venta consultiva",
      "Negociación y seguimiento postventa",
    ],
  },
  {
    title: "Mujer Frente a la Cámara",
    image: "/21.jpeg",
    text: "Un taller diseñado para mujeres emprendedoras que desean proyectar confianza y autenticidad frente a la cámara. Aprende a comunicar tu mensaje con impacto, crear contenido audiovisual profesional y posicionarte como referente en tu industria.",
    bullets: [
      "Comunicación efectiva y lenguaje corporal",
      "Creación de contenido en video para redes sociales",
      "Marca personal y posicionamiento digital",
      "Técnicas para perder el miedo a la cámara",
    ],
  },
];

export default function TalleresPage() {
  return (
    <>
      <VideoHero
        videoSrc="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772829423/7647627-hd_1920_1080_30fps_es9df7.mp4"
        title="TALLERES + CAPACITACIÓN"
        subtitle="Formación especializada en marketing digital, ventas e inteligencia artificial para equipos y emprendedores que buscan resultados reales."
      />

      <section className="container-x py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl">NUESTROS CURSOS</h2>
          <p className="mx-auto max-w-2xl text-ink/70">
            Cada taller combina teoría con ejercicios prácticos para que puedas aplicar lo aprendido
            de inmediato en tu negocio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {COURSES.map((course) => (
            <div key={course.title} className="overflow-hidden rounded-2xl border border-white/10 bg-card">
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={340}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-3 text-lg font-bold text-ink">{course.title}</p>
                <p className="mb-4 text-sm text-ink/60">{course.text}</p>
                <ul className="mb-6 space-y-1">
                  {course.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-ink/70">
                      <span className="text-accent">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className="inline-block rounded-full bg-accent px-6 py-2 text-sm font-bold text-base transition hover:opacity-90"
                >
                  SOLICITAR INFO
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="¿LISTO PARA CAPACITAR A TU EQUIPO?"
        text="Solicita información sobre nuestros talleres y programas de capacitación personalizados."
        buttonLabel="SOLICITAR INFORMACIÓN"
      />
    </>
  );
}
