import type { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Consultoría y Asesorías",
  description:
    "Estrategias personalizadas, auditorías y planes de crecimiento para llevar tu negocio al siguiente nivel con decisiones inteligentes.",
};

const STEPS = [
  { n: 1, title: "Diagnóstico", text: "Analizamos tu situación actual, tu mercado y tu competencia para identificar oportunidades." },
  { n: 2, title: "Estrategia", text: "Diseñamos un plan personalizado con objetivos claros, tácticas y métricas de éxito." },
  { n: 3, title: "Ejecución", text: "Implementamos las estrategias con tu equipo, asegurando que cada acción genere impacto." },
  { n: 4, title: "Optimización", text: "Medimos resultados y ajustamos la estrategia para maximizar el retorno de inversión." },
];

export default function ConsultoriaPage() {
  return (
    <>
      <VideoHero
        videoSrc="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772829425/6930835-uhd_3840_2160_25fps_t7i9fl.mp4"
        title="CONSULTORÍA + ASESORÍAS"
        subtitle="Estrategias personalizadas, auditorías y planes de crecimiento para llevar tu negocio al siguiente nivel con decisiones inteligentes."
      />

      <section className="container-x py-24">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">
          NUESTRA METODOLOGÍA
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="rounded-2xl border border-white/10 bg-card p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-base">
                {step.n}
              </span>
              <p className="mb-2 font-bold text-ink">{step.title}</p>
              <p className="text-sm text-ink/60">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-card py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-ink sm:text-4xl">
              ESTRATEGIA Y CRECIMIENTO EMPRESARIAL
            </h2>
            <p className="mb-4 text-ink/70">
              Ofrecemos consultoría especializada en marketing digital, posicionamiento de marca y
              estrategia comercial. Nuestro enfoque combina análisis profundo, experiencia práctica
              y herramientas modernas para que cada decisión impulse resultados reales.
            </p>
            <p className="mb-4 text-ink/70">
              Trabajamos contigo de cerca, entendiendo tu mercado, tus metas y los desafíos únicos
              de tu negocio para diseñar planes de acción concretos y medibles.
            </p>
            <p className="text-ink/70">
              Nuestras asesorías cubren desde la auditoría de tu presencia digital actual hasta la
              creación de roadmaps de crecimiento, incluyendo estrategias de branding,
              posicionamiento SEO, campañas publicitarias y optimización de procesos comerciales.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-2xl">
              <Image src="/olympus-gym.jpeg" alt="Estrategia Digital" width={300} height={360} className="h-full w-full object-cover" />
              <figcaption className="mt-2 text-center text-xs text-ink/50">Estrategia Digital</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl">
              <Image src="/puertas-sanjorge.jpeg" alt="Asesoría de Marca" width={300} height={360} className="h-full w-full object-cover" />
              <figcaption className="mt-2 text-center text-xs text-ink/50">Asesoría de Marca</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <CtaSection
        title="¿LISTO PARA TRANSFORMAR TU NEGOCIO?"
        text="Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos comerciales con estrategias probadas."
        buttonLabel="AGENDAR CONSULTA GRATUITA"
      />
    </>
  );
}
