import Link from "next/link";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter.jsx";
import Footer from "@/components/Footer.jsx";
import HeroShapes from "@/components/HeroShapes.jsx";
import ClientsCarousel from "@/components/ClientsCarousel.jsx";
import BeforeAfter from "@/components/BeforeAfter.jsx";
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
  title: "ISA'S Agencia Digital",
  description:
    "Bienvenido a ISA'S Agencia Digital. Transformamos marcas con estrategias digitales, desarrollo web de alto impacto y automatizaciones inteligentes.",
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
export default function Page() {
  return (
    <>
      <section className={"page-module___8aEwW__hero"}>
        <HeroShapes />
        <video
          className={"page-module___8aEwW__heroVideo"}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source
            src={
              "https://res.cloudinary.com/dkofkzzc5/video/upload/v1772738106/6561561-uhd_3840_2160_25fps_b8pp0i.mp4"
            }
            type={"video/mp4"}
          />
        </video>
        <div className={"page-module___8aEwW__heroOverlay"} />
        <div
          className={"page-module___8aEwW__floatingIcons"}
          aria-hidden={"true"}
        >
          <div
            className={
              "page-module___8aEwW__floatingIcon page-module___8aEwW__floatIcon1"
            }
          >
            <svg
              stroke={"currentColor"}
              fill={"none"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              style={{}}
              height={"1em"}
              width={"1em"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <rect
                x={"5"}
                y={"2"}
                width={"14"}
                height={"20"}
                rx={"2"}
                ry={"2"}
              />
              <line x1={"12"} y1={"18"} x2={"12.01"} y2={"18"} />
            </svg>
          </div>
          <div
            className={
              "page-module___8aEwW__floatingIcon page-module___8aEwW__floatIcon2"
            }
          >
            <svg
              stroke={"currentColor"}
              fill={"none"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              style={{}}
              height={"1em"}
              width={"1em"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <polyline points={"16 18 22 12 16 6"} />
              <polyline points={"8 6 2 12 8 18"} />
            </svg>
          </div>
          <div
            className={
              "page-module___8aEwW__floatingIcon page-module___8aEwW__floatIcon3"
            }
          >
            <svg
              stroke={"currentColor"}
              fill={"none"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              style={{}}
              height={"1em"}
              width={"1em"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <polyline points={"23 6 13.5 15.5 8.5 10.5 1 18"} />
              <polyline points={"17 6 23 6 23 12"} />
            </svg>
          </div>
          <div
            className={
              "page-module___8aEwW__floatingIcon page-module___8aEwW__floatIcon4"
            }
          >
            <svg
              stroke={"currentColor"}
              fill={"none"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              style={{}}
              height={"1em"}
              width={"1em"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <rect
                x={"2"}
                y={"3"}
                width={"20"}
                height={"14"}
                rx={"2"}
                ry={"2"}
              />
              <line x1={"8"} y1={"21"} x2={"16"} y2={"21"} />
              <line x1={"12"} y1={"17"} x2={"12"} y2={"21"} />
            </svg>
          </div>
          <div
            className={
              "page-module___8aEwW__floatingIcon page-module___8aEwW__floatIcon5"
            }
          >
            <svg
              stroke={"currentColor"}
              fill={"none"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              style={{}}
              height={"1em"}
              width={"1em"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <rect
                x={"4"}
                y={"4"}
                width={"16"}
                height={"16"}
                rx={"2"}
                ry={"2"}
              />
              <rect x={"9"} y={"9"} width={"6"} height={"6"} />
              <line x1={"9"} y1={"1"} x2={"9"} y2={"4"} />
              <line x1={"15"} y1={"1"} x2={"15"} y2={"4"} />
              <line x1={"9"} y1={"20"} x2={"9"} y2={"23"} />
              <line x1={"15"} y1={"20"} x2={"15"} y2={"23"} />
              <line x1={"20"} y1={"9"} x2={"23"} y2={"9"} />
              <line x1={"20"} y1={"14"} x2={"23"} y2={"14"} />
              <line x1={"1"} y1={"9"} x2={"4"} y2={"9"} />
              <line x1={"1"} y1={"14"} x2={"4"} y2={"14"} />
            </svg>
          </div>
          <div
            className={
              "page-module___8aEwW__floatingIcon page-module___8aEwW__floatIcon6"
            }
          >
            <svg
              stroke={"currentColor"}
              fill={"none"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              style={{}}
              height={"1em"}
              width={"1em"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <polyline points={"22 12 18 12 15 21 9 3 6 12 2 12"} />
            </svg>
          </div>
        </div>
        <div className={"page-module___8aEwW__heroContent"}>
          <h1 className={"page-module___8aEwW__heroHeadline"}>
            {
              "CONECTAMOS TU NEGOCIO CON EL MUNDO"
            }
          </h1>
          <div className={"page-module___8aEwW__heroCountersWrapper"}>
            <AnimatedCounter />
          </div>
        </div>
      </section>
      <ClientsCarousel />
      <BeforeAfter />
      <section id={"servicios"} className="services-index">
        <div className="services-index-inner">
          <h2 className={"page-module___8aEwW__servicesTitle"} data-aos={"fade-up"}>
            {"SERVICIOS"}
          </h2>
          <Link href={"/gestion-redes-sociales"} className="services-index-row" style={{ "--row-color": "#FEFB0B" }}>
            <div>
              <span className="services-index-title">{"Redes Sociales"}</span>
              <span className="services-index-desc">
                {"Estrategia, contenido y gestión para conectar con tu audiencia."}
              </span>
            </div>
            <span className="services-index-go" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
          <Link href={"/talleres-capacitacion"} className="services-index-row" style={{ "--row-color": "#FF1515" }}>
            <div>
              <span className="services-index-title">{"Talleres + Capacitación"}</span>
              <span className="services-index-desc">
                {"Formación especializada para potenciar las habilidades de tu equipo."}
              </span>
            </div>
            <span className="services-index-go" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
          <Link href={"/paginas-web-ia"} className="services-index-row" style={{ "--row-color": "#4D4DE6" }}>
            <div>
              <span className="services-index-title">{"Desarrollo de Software + IA"}</span>
              <span className="services-index-desc">
                {"Desarrollo web moderno con automatizaciones inteligentes."}
              </span>
            </div>
            <span className="services-index-go" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
          <Link
            href={"/consultoria-asesorias"}
            className="services-index-row"
            style={{ "--row-color": "#000000", "--row-ink": "#ffffff", "--row-ink-2": "#ffffff" }}
          >
            <div>
              <span className="services-index-title">{"Consultoría + Asesorías"}</span>
              <span className="services-index-desc">
                {"Estrategias personalizadas para el crecimiento de tu marca."}
              </span>
            </div>
            <span className="services-index-go" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
