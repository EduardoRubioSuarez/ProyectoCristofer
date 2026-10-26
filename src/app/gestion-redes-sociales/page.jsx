import Link from "next/link";
import * as FeatherIcons from "react-icons/fi";
import Footer from "@/components/Footer.jsx";
import "@/styles/redes-page.css";
export const metadata = {
  openGraph: {
    title: "ISA'S AGENCIA DIGITAL - Agencia de Publicidad + IA",
    description:
      "Expertos en Marketing Digital, Automatización con Inteligencia Artificial, y Estrategias Comerciales para potenciar el crecimiento de tu negocio.",
    url: "https://isasmarketing.com/",
    siteName: "ISA'S Agencia Digital",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISA'S AGENCIA DIGITAL - Agencia de Publicidad + IA",
    description:
      "Lleva tu negocio al siguiente nivel con marketing digital avanzado e inteligencia artificial.",
  },
  title: "Gestión de Redes Sociales | ISA'S Agencia Digital",
  description:
    "Potenciamos tu presencia digital con estrategias de contenido, community management y producción de video para conectar con clientes potenciales.",
  authors: [{ name: "ISA'S Agencia Digital" }],
  keywords:
    "Agencia de marketing,Marketing Digital,La Paz BCS,Desarrollo Web,Páginas Web,Inteligencia Artificial,Gestión de Redes Sociales,Consultoría,Software,Automatización",
  creator: "ISA'S Agencia Digital",
  publisher: "ISA'S Agencia Digital",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/icon.png?icon.efd2afa0.png",
        sizes: "1280x1280",
        type: "image/png",
      },
    ],
  },
};
const layers = [
  {
    cls: "rs-l1",
    Icon: FeatherIcons.FiSmartphone,
    title: "Redes sociales profesionales",
    text: "Manejo experto de redes sociales incluyendo Facebook, Instagram y WhatsApp Business, optimizados para tu modelo de negocio.",
  },
  {
    cls: "rs-l2",
    Icon: FeatherIcons.FiUsers,
    title: "Community manager dedicado",
    text: "Interacción profesional y moderación activa con tu comunidad para fortalecer las relaciones con tus clientes en tiempo real.",
  },
  {
    cls: "rs-l3",
    Icon: FeatherIcons.FiTrendingUp,
    title: "Post digitales estratégicos",
    text: "Paquetes de contenido visualmente atractivos y diseñados específicamente para generar alto engagement y conversión.",
  },
  {
    cls: "rs-l4",
    Icon: FeatherIcons.FiVideo,
    title: ["Producción de ", <u key="v">video</u>],
    text: "Videos digitales y reels de alta calidad que capturan la atención de tu audiencia en los primeros segundos.",
  },
  {
    cls: "rs-l5",
    Icon: FeatherIcons.FiPlusSquare,
    title: "Soluciones digitales adicionales",
    text: "También ofrecemos tarjetas digitales inteligentes y minipáginas de aterrizaje altamente convertidoras. ¿Te interesa? Contáctanos.",
  },
];

export default function Page() {
  return (
    <>
      <div className="rs">
        <section className="rs-hero">
          <video
            className="rs-hero-video"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/redes.mp4" type="video/mp4" />
          </video>
          <div className="rs-hero-in">
            <h1 className="rs-h1">
              {"Gestión de "}
              <span>{"redes sociales"}</span>
            </h1>
            <p className="rs-cap">
              {
                "Potenciamos tu presencia digital con nuestra metodología y estrategia de contenido, para conectar con tu cliente potencial y acercarte a más cierres de venta."
              }
            </p>
            <Link href="/contacto" className="rs-btn">
              {"SOLICITAR CONSULTA GRATUITA"}
              <FeatherIcons.FiArrowRight className="rs-icon" />
            </Link>
          </div>
        </section>

        <section className="rs-intro">
          <div className="rs-intro-in">
            <h2>{"Transformamos tu presencia digital"}</h2>
            <p>
              {
                "Creamos estrategias personalizadas que conectan con tu audiencia y generan resultados medibles. Nuestro equipo trabaja cada detalle para que tu marca destaque en el competitivo mundo digital."
              }
            </p>
          </div>
        </section>

        {layers.map(({ cls, Icon, title, text }) => (
          <section key={cls} className={`rs-layer ${cls}`}>
            <div className="rs-layer-in">
              <h3>{title}</h3>
              <div>
                <Icon className="rs-icon" aria-hidden="true" />
                <p>{text}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="rs-cta">
          <h2>
            {"¿Listo para transformar tus "}
            <span>{"redes sociales?"}</span>
          </h2>
          <p>
            {
              "Agenda una consulta gratuita y te mostramos cómo llevar tu marca al siguiente nivel."
            }
          </p>
          <Link href="/contacto" className="rs-btn">
            {"SOLICITAR CONSULTA GRATUITA"}
            <FeatherIcons.FiArrowRight className="rs-icon" />
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
