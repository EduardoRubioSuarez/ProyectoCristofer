import HeroParticles from "@/components/HeroParticles.jsx";
import HeroTextReveal from "@/components/HeroTextReveal.jsx";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter.jsx";
import Image from "next/image";
import Footer from "@/components/Footer.jsx";
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
        <HeroParticles />
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
          <HeroTextReveal
            title={"AGENCIA DIGITAL +IA"}
            subtitle={
              "Expertos en Marketing Digital, Desarrollo de Software, Automatización con Inteligencia Artificial, y Estrategias Comerciales para potenciar el crecimiento de tu negocio."
            }
          />
          <Link
            href={"/paquetes-servicios"}
            className={"page-module___8aEwW__btnImpulsa"}
          >
            <span className={"page-module___8aEwW__btnText"}>
              {"IMPULSA TU MARCA"}
            </span>
            <span className={"page-module___8aEwW__btnShimmer"} />
          </Link>
          <div className={"page-module___8aEwW__heroCountersWrapper"}>
            <AnimatedCounter />
          </div>
        </div>
      </section>
      <div className={"Marquee-module__Q--LXW__marquee"}>
        <div className={"Marquee-module__Q--LXW__track"}>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Marketing Digital"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Redes Sociales"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Inteligencia Artificial"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Estrategia"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Desarrollo de Software"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Consultoría"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Capacitación"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Marketing Digital"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Redes Sociales"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Inteligencia Artificial"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Estrategia"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Desarrollo de Software"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Consultoría"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
          <span className={"Marquee-module__Q--LXW__item"}>
            {"Capacitación"}
            <span className={"Marquee-module__Q--LXW__dot"}>{"●"}</span>
          </span>
        </div>
      </div>
      <section id={"conocenos"} className={"page-module___8aEwW__aboutSection"}>
        <h2
          className={"page-module___8aEwW__sectionTitle"}
          data-aos={"fade-up"}
        >
          {"CONÓCENOS"}
        </h2>
        <div
          className={
            "page-module___8aEwW__aboutPart page-module___8aEwW__partOne"
          }
          data-aos={"fade-right"}
        >
          <div className={"page-module___8aEwW__aboutImage"}>
            <Image
              src={"/isabelfoto.png"}
              alt={"Licenciada Isabel de la Rosa"}
              width={400}
              height={400}
              className={"page-module___8aEwW__imagePlaceholder"}
            />
          </div>
          <div className={"page-module___8aEwW__aboutText"}>
            <h3 className={"page-module___8aEwW__personTitle"}>
              {"Licenciada Isabel de la Rosa"}
            </h3>
            <span className={"page-module___8aEwW__personSubtitle"}>
              {"Fundadora de Isa's Marketing"}
            </span>
            <p className={"page-module___8aEwW__personDescription"}>
              {
                "Creo firmemente en el poder de la estrategia y la legalidad. Este espacio es para ti: emprendedora, líder o dueña de negocio que quiere crecer con bases sólidas y visión clara."
              }
            </p>
            <div className={"page-module___8aEwW__aboutFeatureList"}>
              <div className={"page-module___8aEwW__aboutFeatureItem"}>
                <div className={"page-module___8aEwW__aboutFeatureIcon"}>
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
                    <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                  </svg>
                </div>
                <div className={"page-module___8aEwW__aboutFeatureText"}>
                  <h4>{"Protección Legal"}</h4>
                  <p>
                    {
                      "Asesoría clara para proteger tu marca y patrimonio empresarial de forma preventiva."
                    }
                  </p>
                </div>
              </div>
              <div className={"page-module___8aEwW__aboutFeatureItem"}>
                <div className={"page-module___8aEwW__aboutFeatureIcon"}>
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
                <div className={"page-module___8aEwW__aboutFeatureText"}>
                  <h4>{"Estrategias de Ventas"}</h4>
                  <p>
                    {
                      "Sistemas de marketing probados que generan crecimiento real y sostenible en el tiempo."
                    }
                  </p>
                </div>
              </div>
              <div className={"page-module___8aEwW__aboutFeatureItem"}>
                <div className={"page-module___8aEwW__aboutFeatureIcon"}>
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
                    <polygon
                      points={
                        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      }
                    />
                  </svg>
                </div>
                <div className={"page-module___8aEwW__aboutFeatureText"}>
                  <h4>{"Liderazgo Femenino"}</h4>
                  <p>
                    {
                      "Inspiración y guía para empoderar a mujeres empresarias en la toma de decisiones."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "page-module___8aEwW__aboutPart page-module___8aEwW__partTwo"
          }
          data-aos={"fade-left"}
        >
          <div className={"page-module___8aEwW__aboutImage"}>
            <Image
              src={"/isasfoto4.png"}
              alt={"Maestro Isaias Osuna Barrera"}
              width={400}
              height={400}
              className={"page-module___8aEwW__imagePlaceholder"}
            />
          </div>
          <div className={"page-module___8aEwW__aboutText"}>
            <h3 className={"page-module___8aEwW__personTitle"}>
              {"Maestro Isaias Osuna Barrera"}
            </h3>
            <span className={"page-module___8aEwW__personSubtitle"}>
              {"Líder Estratégico"}
            </span>
            <p className={"page-module___8aEwW__personDescription"}>
              {
                "Inspirado en los principios del estoicismo, he convertido cada desafío en una oportunidad. Dirijo con una filosofía clara: la disciplina siempre vence al talento sin dirección."
              }
            </p>
            <div className={"page-module___8aEwW__aboutFeatureList"}>
              <div className={"page-module___8aEwW__aboutFeatureItem"}>
                <div className={"page-module___8aEwW__aboutFeatureIcon"}>
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
                    <polygon points={"12 2 2 7 12 12 22 7 12 2"} />
                    <polyline points={"2 17 12 22 22 17"} />
                    <polyline points={"2 12 12 17 22 12"} />
                  </svg>
                </div>
                <div className={"page-module___8aEwW__aboutFeatureText"}>
                  <h4>{"Marcas Sólidas"}</h4>
                  <p>
                    {
                      "Construcción de negocios escalables mediante estrategia y procesos operativos claros."
                    }
                  </p>
                </div>
              </div>
              <div className={"page-module___8aEwW__aboutFeatureItem"}>
                <div className={"page-module___8aEwW__aboutFeatureIcon"}>
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
                <div className={"page-module___8aEwW__aboutFeatureText"}>
                  <h4>{"Mentalidad Resiliente"}</h4>
                  <p>
                    {
                      "Forjando emprendedores con control emocional y acción enfocada para superar retos."
                    }
                  </p>
                </div>
              </div>
              <div className={"page-module___8aEwW__aboutFeatureItem"}>
                <div className={"page-module___8aEwW__aboutFeatureIcon"}>
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
                <div className={"page-module___8aEwW__aboutFeatureText"}>
                  <h4>{"Transformación Tecnológica"}</h4>
                  <p>
                    {
                      "Implementación de la última tecnología como herramienta principal para alcanzar objetivos rápido."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id={"servicios"}
        className={"page-module___8aEwW__servicesServices"}
      >
        <div
          className={"GradientOrbs-module__A0lrLW__orbContainer"}
          aria-hidden={"true"}
        >
          <div
            className={
              "GradientOrbs-module__A0lrLW__orb GradientOrbs-module__A0lrLW__orb1"
            }
          />
          <div
            className={
              "GradientOrbs-module__A0lrLW__orb GradientOrbs-module__A0lrLW__orb2"
            }
          />
        </div>
        <div className={"page-module___8aEwW__servicesSection"}>
          <h2
            className={"page-module___8aEwW__servicesTitle"}
            data-aos={"fade-up"}
          >
            {"SERVICIOS"}
          </h2>
          <div className={"page-module___8aEwW__servicesGrid"}>
            <Link
              href={"/gestion-redes-sociales"}
              className={"page-module___8aEwW__modernCard"}
              data-aos={"fade-up"}
              data-aos-delay={"100"}
            >
              <div className={"page-module___8aEwW__modernCardIconWrapper"}>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  style={{}}
                  height={28}
                  width={28}
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
              <h3 className={"page-module___8aEwW__modernCardTitle"}>
                {"Redes Sociales"}
              </h3>
              <p className={"page-module___8aEwW__modernCardDesc"}>
                {
                  "Estrategia, contenido y gestión para conectar con tu audiencia."
                }
              </p>
              <div className={"page-module___8aEwW__modernCardAction"}>
                <span>{"Ver más"}</span>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module___8aEwW__actionIcon"}
                  style={{}}
                  height={"1em"}
                  width={"1em"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <line x1={"5"} y1={"12"} x2={"19"} y2={"12"} />
                  <polyline points={"12 5 19 12 12 19"} />
                </svg>
              </div>
            </Link>
            <Link
              href={"/talleres-capacitacion"}
              className={"page-module___8aEwW__modernCard"}
              data-aos={"fade-up"}
              data-aos-delay={"200"}
            >
              <div className={"page-module___8aEwW__modernCardIconWrapper"}>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  style={{}}
                  height={28}
                  width={28}
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
              <h3 className={"page-module___8aEwW__modernCardTitle"}>
                {"Talleres + Capacitación"}
              </h3>
              <p className={"page-module___8aEwW__modernCardDesc"}>
                {
                  "Formación especializada para potenciar las habilidades de tu equipo."
                }
              </p>
              <div className={"page-module___8aEwW__modernCardAction"}>
                <span>{"Ver más"}</span>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module___8aEwW__actionIcon"}
                  style={{}}
                  height={"1em"}
                  width={"1em"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <line x1={"5"} y1={"12"} x2={"19"} y2={"12"} />
                  <polyline points={"12 5 19 12 12 19"} />
                </svg>
              </div>
            </Link>
            <Link
              href={"/paginas-web-ia"}
              className={"page-module___8aEwW__modernCard"}
              data-aos={"fade-up"}
              data-aos-delay={"300"}
            >
              <div className={"page-module___8aEwW__modernCardIconWrapper"}>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  style={{}}
                  height={28}
                  width={28}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <polyline points={"16 18 22 12 16 6"} />
                  <polyline points={"8 6 2 12 8 18"} />
                </svg>
              </div>
              <h3 className={"page-module___8aEwW__modernCardTitle"}>
                {"Desarrollo de Software + IA"}
              </h3>
              <p className={"page-module___8aEwW__modernCardDesc"}>
                {"Desarrollo web moderno con automatizaciones inteligentes."}
              </p>
              <div className={"page-module___8aEwW__modernCardAction"}>
                <span>{"Ver más"}</span>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module___8aEwW__actionIcon"}
                  style={{}}
                  height={"1em"}
                  width={"1em"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <line x1={"5"} y1={"12"} x2={"19"} y2={"12"} />
                  <polyline points={"12 5 19 12 12 19"} />
                </svg>
              </div>
            </Link>
            <Link
              href={"/consultoria-asesorias"}
              className={"page-module___8aEwW__modernCard"}
              data-aos={"fade-up"}
              data-aos-delay={"400"}
            >
              <div className={"page-module___8aEwW__modernCardIconWrapper"}>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  style={{}}
                  height={28}
                  width={28}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <polyline points={"23 6 13.5 15.5 8.5 10.5 1 18"} />
                  <polyline points={"17 6 23 6 23 12"} />
                </svg>
              </div>
              <h3 className={"page-module___8aEwW__modernCardTitle"}>
                {"Consultoría + Asesorías"}
              </h3>
              <p className={"page-module___8aEwW__modernCardDesc"}>
                {"Estrategias personalizadas para el crecimiento de tu marca."}
              </p>
              <div className={"page-module___8aEwW__modernCardAction"}>
                <span>{"Ver más"}</span>
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module___8aEwW__actionIcon"}
                  style={{}}
                  height={"1em"}
                  width={"1em"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <line x1={"5"} y1={"12"} x2={"19"} y2={"12"} />
                  <polyline points={"12 5 19 12 12 19"} />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section
        id={"clientes"}
        className={"page-module___8aEwW__clientsServices"}
      >
        <div className={"page-module___8aEwW__clientsSection"}>
          <h2
            className={"page-module___8aEwW__clientsTitle"}
            data-aos={"fade-up"}
          >
            {"NUESTROS CLIENTES"}
          </h2>
          <div className={"page-module___8aEwW__carouselContainer"}>
            <div className={"page-module___8aEwW__clientsLogos"}>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c1.png"}
                  alt={"Cliente 1"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c2.jpg"}
                  alt={"Cliente 2"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c4.png"}
                  alt={"Cliente 4"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c5.png"}
                  alt={"Cliente 5"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c6.png"}
                  alt={"Cliente 6"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/puertas-sanjorge.jpeg"}
                  alt={"Puertas San Jorge"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/olympus-gym.jpeg"}
                  alt={"Olympus Gym"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/chevrolet.jpg"}
                  alt={"Chevrolet"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/ford.png"}
                  alt={"Ford"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/mazda.jpg"}
                  alt={"Mazda"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/toyota.png"}
                  alt={"Toyota"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c1.png"}
                  alt={"Cliente 1"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c2.jpg"}
                  alt={"Cliente 2"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c4.png"}
                  alt={"Cliente 4"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c5.png"}
                  alt={"Cliente 5"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c6.png"}
                  alt={"Cliente 6"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/c7.png"}
                  alt={"Cliente 7"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/puertas-sanjorge.png"}
                  alt={"Puertas San Jorge"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/olympus-gym.png"}
                  alt={"Olympus Gym"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/chevrolet.jpg"}
                  alt={"Chevrolet"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/ford.png"}
                  alt={"Ford"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/mazda.jpg"}
                  alt={"Mazda"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className={"page-module___8aEwW__clientLogo"}>
                <Image
                  src={"/toyota.png"}
                  alt={"Toyota"}
                  width={200}
                  height={150}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
