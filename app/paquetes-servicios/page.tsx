import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
import CtaSection from "@/components/CtaSection";
import PricingCard, { type PricingPlan } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Paquetes de Servicios",
  description:
    "Agencia de marketing digital en La Paz B.C.S. especializada en redes sociales, páginas web, desarrollo de software, y automatizaciones con IA. Impulsa tu marca con estrategias que generan resultados.",
};

const WEB_IA_PLANS: PricingPlan[] = [
  {
    name: "Landing + Bot IA",
    price: "$6,500",
    feeNote: "Implementación inicial",
    features: [
      "Creación de Página Web Básica",
      "Desarrollo y Setup de Bot IA",
      "Mantenimiento Bot: $1,600/mes",
      "Dominio gratis (1er año)",
      "Hosting e infraestructura",
      "Correos profesionales",
    ],
  },
  {
    name: "Página Web Completa",
    price: "$8,500",
    feeNote: "Un solo pago",
    badge: "MÁS POPULAR",
    highlight: true,
    features: [
      "Diseño adaptado a necesidades",
      "Sistema de agendado de citas",
      "Formulario de contacto dinámico",
      "Galería de imágenes profesional",
      "Sección de servicios detallada",
      "Dominio y Hosting incluidos",
      "Correos profesionales",
    ],
  },
  {
    name: "Bot de IA",
    price: "$1,800/mes",
    feeNote: "Solo suscripción",
    features: [
      "Atención 24/7 sin interrupciones",
      "Integración con WhatsApp Business",
      "Entrenamiento personalizado",
      "Calificación automática de leads",
      "Transferencia a humanos",
      "Soporte técnico continuo",
      "Optimización mensual",
    ],
  },
];

const EMPRESARIAL_PLANS: PricingPlan[] = [
  {
    name: "Digitaliza y Automatiza",
    price: "$80,000+",
    feeNote: "Inversión mínima",
    badge: "MÁS POPULAR",
    highlight: true,
    features: [
      "Digitaliza 1 - 6+ Sucursales",
      "Punto de Venta e Inventario",
      "CRM y Gestión de Franquicias",
      "Página Web + Chatbot IA",
      "Control desde una plataforma",
      "Embudos de Venta Automatizados",
      "Ideal para negocios en expansión",
    ],
  },
  {
    name: "Ventas Empresarial",
    price: "$97,000",
    feeNote: "+ $19,400/mes (Seguimiento)",
    features: [
      "Sistema de Ventas Empresarial",
      "Automatización WhatsApp CRM",
      "Publicidad en FB, IG y TikTok",
      "Seguimiento Automático de Leads",
      "Dashboard de Resultados en vivo",
      "Máxima Conversión y Control",
      "Acompañamiento Estratégico",
    ],
  },
];

const REDES_PLANS: PricingPlan[] = [
  {
    name: "Paquete Oro",
    price: "$4,300",
    feeNote: "Manejo Mensual",
    features: [
      "3 Anuncios Publicitarios Efectivos",
      "Asesoría de Marketing",
      "4 Ediciones Especiales",
      "Branding para Contenido Redes",
      "Presentación de Resultados",
      "Vinculación con WhatsApp Business",
    ],
  },
  {
    name: "Paquete Diamante",
    price: "$6,300",
    feeNote: "Manejo Mensual",
    badge: "PREMIUM",
    highlight: true,
    features: [
      "10 Publicaciones Orgánicas",
      "4 Anuncios Publicitarios Efectivos",
      "Vinculación con WhatsApp Business",
      "Asesorías de Marketing",
      "Edición Especial",
      "Branding para Contenido Redes",
      "Presentación de Resultados",
    ],
  },
];

export default function PaquetesPage() {
  return (
    <>
      <VideoHero
        videoSrc="https://res.cloudinary.com/dkofkzzc5/video/upload/v1773788560/7552421-hd_1920_1080_25fps_cnwyv9.mp4"
        title="PAQUETES DE SERVICIOS"
        subtitle="Soluciones diseñadas para escalar tu presencia digital. Elige el plan que mejor se adapte a tus necesidades y objetivos de negocio."
      />

      <section className="container-x py-24">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">
          PÁGINAS WEB Y SOLUCIONES IA
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {WEB_IA_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-card py-24">
        <div className="container-x">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">
            SISTEMAS EMPRESARIALES
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {EMPRESARIAL_PLANS.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">
          MANEJO DE REDES SOCIALES
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {REDES_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <CtaSection
        title="¿NECESITAS UN PLAN A MEDIDA?"
        text="Si ninguno de nuestros paquetes estándar se ajusta a lo que buscas, podemos crear una propuesta personalizada para tu empresa."
        buttonLabel="CONTÁCTANOS AHORA"
      />
    </>
  );
}
