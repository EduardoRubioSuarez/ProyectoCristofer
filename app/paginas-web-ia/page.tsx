import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Páginas Web e IA",
  description:
    "Soluciones de desarrollo de software, creación de páginas web y aplicaciones móviles equipadas con automatizaciones de inteligencia artificial.",
};

const SERVICES = [
  { title: "Páginas Web", text: "Diseño y desarrollo responsivo, desde corporativos hasta landing pages de alta conversión." },
  { title: "Software Empresarial", text: "Soluciones tecnológicas escalables para digitalizar y optimizar tus operaciones." },
  { title: "Apps Móviles", text: "Desarrollo nativo e híbrido para iOS y Android centrado en la mejor experiencia de usuario." },
  { title: "Apps a Medida", text: "Sistemas personalizados diseñados específicamente para resolver los retos únicos de tu negocio." },
  { title: "Sistemas POS", text: "Punto de venta, control de inventario, ventas y facturación para negocios físicos o híbridos." },
  { title: "E-Commerce", text: "Tiendas en línea completas con pasarelas de pago seguro y gestión de inventario automatizada." },
  { title: "Automatizaciones IA", text: "Chatbots 24/7, optimización inteligente y análisis de datos predictivos." },
  { title: "Sistemas CRM", text: "Plataformas personalizadas de gestión de clientes para potenciar ventas y fidelizar a tu audiencia." },
];

export default function PaginasWebIaPage() {
  return (
    <>
      <VideoHero
        videoSrc="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772947770/14519236_3840_2160_60fps_1_-_FPS_-_Videobolt.net_dqtpqx.mp4"
        title="DESARROLLO DE SOFTWARE + IA"
        subtitle="Desarrollo de soluciones de software moderno y soluciones de automatización con inteligencia artificial para optimizar procesos y mejorar la experiencia del usuario."
      />

      <section className="container-x py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl">
            SOLUCIONES DE SOFTWARE INTELIGENTES
          </h2>
          <p className="mx-auto max-w-2xl text-ink/70">
            Desarrollamos tecnología de última generación, optimizada para conversión y equipada
            con herramientas avanzadas. Cada proyecto es una combinación de diseño excepcional,
            funcionalidad robusta y tecnología de punta.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="mb-2 font-bold text-ink">{s.title}</p>
              <p className="text-sm text-ink/60">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="¿LISTO PARA LLEVAR TU NEGOCIO AL SIGUIENTE NIVEL?"
        text="Contáctanos para crear tu página web inteligente con automatizaciones que trabajan por ti las 24 horas."
        buttonLabel="SOLICITAR COTIZACIÓN"
      />
    </>
  );
}
