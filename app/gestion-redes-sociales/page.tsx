import type { Metadata } from "next";
import Link from "next/link";
import VideoHero from "@/components/VideoHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Gestión de Redes Sociales",
  description:
    "Potenciamos tu presencia digital con estrategias de contenido, community management y producción de video para conectar con clientes potenciales.",
};

const FEATURES = [
  { title: "Redes Sociales Profesionales", text: "Manejo experto de redes sociales incluyendo Facebook, Instagram y WhatsApp Business, optimizados para tu modelo de negocio." },
  { title: "Community Manager Dedicado", text: "Interacción profesional y moderación activa con tu comunidad para fortalecer las relaciones con tus clientes en tiempo real." },
  { title: "Post Digitales Estratégicos", text: "Paquetes de contenido visualmente atractivos y diseñados específicamente para generar alto engagement y conversión." },
  { title: "Producción de Video", text: "Videos digitales y reels de alta calidad que capturan la atención de tu audiencia en los primeros segundos." },
];

export default function GestionRedesPage() {
  return (
    <>
      <VideoHero
        videoSrc="/redes.mp4"
        title="GESTIÓN DE REDES SOCIALES"
        subtitle="Potenciamos tu presencia digital, con nuestra metodología, estrategia de contenido, que permiten conectar con tu cliente potencial y acercarte a más cierres de venta."
      />

      <section className="container-x py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Transformamos tu presencia digital
          </h2>
          <p className="mx-auto max-w-2xl text-ink/70">
            Creamos estrategias personalizadas que conectan con tu audiencia y generan resultados
            medibles. Nuestro equipo trabaja cada detalle para que tu marca destaque en el
            competitivo mundo digital.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="mb-2 font-bold text-ink">{f.title}</p>
              <p className="text-sm text-ink/60">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-accent/30 bg-card p-6">
          <p className="mb-2 font-bold text-ink">Soluciones Digitales Adicionales</p>
          <p className="text-sm text-ink/60">
            También ofrecemos tarjetas digitales inteligentes y minipáginas de aterrizaje altamente
            convertidoras. ¿Te interesa?{" "}
            <Link href="/contacto" className="font-semibold text-accent hover:underline">
              Contáctanos
            </Link>
          </p>
        </div>
      </section>

      <CtaSection
        title="¿Listo para transformar tus redes sociales?"
        text="Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudar a tu negocio a destacar en el mundo digital."
        buttonLabel="SOLICITAR CONSULTA GRATUITA"
      />
    </>
  );
}
