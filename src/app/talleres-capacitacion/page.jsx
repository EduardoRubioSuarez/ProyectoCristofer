import Image from "next/image";
import Link from "next/link";
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
  title: "Talleres y Capacitación | ISA'S Agencia Digital",
  description:
    "Formación especializada en marketing digital, ventas, estoicismo e inteligencia artificial para equipos y emprendedores.",
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
      <section className={"page-module__BatWFG__serviceHero"}>
        <video
          className={"page-module__BatWFG__heroVideo"}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source
            src={
              "https://res.cloudinary.com/dkofkzzc5/video/upload/v1772829423/7647627-hd_1920_1080_30fps_es9df7.mp4"
            }
            type={"video/mp4"}
          />
        </video>
        <div className={"page-module__BatWFG__heroOverlay"} />
        <div className={"page-module__BatWFG__serviceHeroContent"}>
          <div
            className={"page-module__BatWFG__serviceIconLarge"}
            data-aos={"fade-down"}
          >
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
          <h1
            className={"page-module__BatWFG__serviceHeroTitle"}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          >
            {"TALLERES + CAPACITACIÓN"}
          </h1>
          <p
            className={"page-module__BatWFG__serviceHeroSubtitle"}
            data-aos={"fade-up"}
            data-aos-delay={"200"}
          >
            {
              "Formación especializada en marketing digital, ventas e inteligencia artificial para equipos y emprendedores que buscan resultados reales."
            }
          </p>
        </div>
      </section>
      <section className={"page-module__BatWFG__coursesSection"}>
        <div className={"page-module__BatWFG__coursesContainer"}>
          <div
            className={"page-module__BatWFG__coursesHeader"}
            data-aos={"fade-up"}
          >
            <h2 className={"page-module__BatWFG__coursesTitle"}>
              {"NUESTROS CURSOS"}
            </h2>
            <p className={"page-module__BatWFG__coursesSubtitle"}>
              {
                "Cada taller combina teoría con ejercicios prácticos para que puedas aplicar lo aprendido de inmediato en tu negocio."
              }
            </p>
          </div>
          <div className={"page-module__BatWFG__coursesList"}>
            <div
              className={"page-module__BatWFG__courseCard"}
              data-aos={"fade-up"}
              data-aos-delay={0}
            >
              <div className={"page-module__BatWFG__courseCardInner"}>
                <div
                  className={"page-module__BatWFG__courseImagePlaceholder"}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={"/14.jpg"}
                    alt={"Inteligencia Artificial"}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes={"(max-width: 900px) 100vw, 280px"}
                  />
                </div>
                <div className={"page-module__BatWFG__courseContent"}>
                  <h3 className={"page-module__BatWFG__courseTitle"}>
                    {"Inteligencia Artificial"}
                  </h3>
                  <p className={"page-module__BatWFG__courseDescription"}>
                    {
                      "Aprende a integrar herramientas de IA en tu negocio y flujo de trabajo. Desde automatización de tareas hasta generación de contenido con modelos de lenguaje, te enseñamos a usar la inteligencia artificial de forma práctica para ser más productivo y competitivo."
                    }
                  </p>
                  <div className={"page-module__BatWFG__courseTopics"}>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Fundamentos de IA aplicada al negocio"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Automatización de procesos con IA"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Generación de contenido con IA"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>
                        {"Herramientas de productividad potenciadas con IA"}
                      </span>
                    </div>
                  </div>
                  <div className={"page-module__BatWFG__courseAction"}>
                    <Link
                      href={"/contacto"}
                      className={"page-module__BatWFG__courseButton"}
                    >
                      {"SOLICITAR INFO"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"page-module__BatWFG__courseCard"}
              data-aos={"fade-up"}
              data-aos-delay={100}
            >
              <div className={"page-module__BatWFG__courseCardInner"}>
                <div
                  className={"page-module__BatWFG__courseImagePlaceholder"}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={"/15.jpg"}
                    alt={"Redes Sociales y Marketing Digital"}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes={"(max-width: 900px) 100vw, 280px"}
                  />
                </div>
                <div className={"page-module__BatWFG__courseContent"}>
                  <h3 className={"page-module__BatWFG__courseTitle"}>
                    {"Redes Sociales y Marketing Digital"}
                  </h3>
                  <p className={"page-module__BatWFG__courseDescription"}>
                    {
                      "Domina las plataformas digitales y aprende estrategias reales de marketing que generan resultados medibles. Desde la creación de contenido hasta la gestión de campañas publicitarias, capacita a tu equipo con las habilidades más demandadas del mercado."
                    }
                  </p>
                  <div className={"page-module__BatWFG__courseTopics"}>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>
                        {"Estrategia de contenido para redes sociales"}
                      </span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Publicidad en Meta Ads y Google Ads"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Branding y posicionamiento de marca"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>
                        {"Análisis de métricas y optimización de campañas"}
                      </span>
                    </div>
                  </div>
                  <div className={"page-module__BatWFG__courseAction"}>
                    <Link
                      href={"/contacto"}
                      className={"page-module__BatWFG__courseButton"}
                    >
                      {"SOLICITAR INFO"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"page-module__BatWFG__courseCard"}
              data-aos={"fade-up"}
              data-aos-delay={200}
            >
              <div className={"page-module__BatWFG__courseCardInner"}>
                <div
                  className={"page-module__BatWFG__courseImagePlaceholder"}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={"/16.jpg"}
                    alt={"Estoicismo"}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes={"(max-width: 900px) 100vw, 280px"}
                  />
                </div>
                <div className={"page-module__BatWFG__courseContent"}>
                  <h3 className={"page-module__BatWFG__courseTitle"}>
                    {"Estoicismo"}
                  </h3>
                  <p className={"page-module__BatWFG__courseDescription"}>
                    {
                      "Desarrolla una mentalidad resiliente y enfocada aplicando los principios del estoicismo al liderazgo y la vida empresarial. Un taller único que combina filosofía clásica con herramientas modernas de desarrollo personal y profesional."
                    }
                  </p>
                  <div className={"page-module__BatWFG__courseTopics"}>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>
                        {"Principios estoicos aplicados al liderazgo"}
                      </span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Control emocional y toma de decisiones"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Resiliencia y manejo del estrés"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Filosofía práctica para emprendedores"}</span>
                    </div>
                  </div>
                  <div className={"page-module__BatWFG__courseAction"}>
                    <Link
                      href={"/contacto"}
                      className={"page-module__BatWFG__courseButton"}
                    >
                      {"SOLICITAR INFO"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"page-module__BatWFG__courseCard"}
              data-aos={"fade-up"}
              data-aos-delay={300}
            >
              <div className={"page-module__BatWFG__courseCardInner"}>
                <div
                  className={"page-module__BatWFG__courseImagePlaceholder"}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={"/19.jpg"}
                    alt={"Ventas"}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes={"(max-width: 900px) 100vw, 280px"}
                  />
                </div>
                <div className={"page-module__BatWFG__courseContent"}>
                  <h3 className={"page-module__BatWFG__courseTitle"}>
                    {"Ventas"}
                  </h3>
                  <p className={"page-module__BatWFG__courseDescription"}>
                    {
                      "Domina las técnicas de venta más efectivas del mercado actual. Desde la prospección hasta el cierre, aprende a construir relaciones con clientes, manejar objeciones y multiplicar tus resultados comerciales con estrategias probadas."
                    }
                  </p>
                  <div className={"page-module__BatWFG__courseTopics"}>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>
                        {"Técnicas de prospección y captación de clientes"}
                      </span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Manejo de objeciones y cierre de ventas"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Estrategias de venta consultiva"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Negociación y seguimiento postventa"}</span>
                    </div>
                  </div>
                  <div className={"page-module__BatWFG__courseAction"}>
                    <Link
                      href={"/contacto"}
                      className={"page-module__BatWFG__courseButton"}
                    >
                      {"SOLICITAR INFO"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"page-module__BatWFG__courseCard"}
              data-aos={"fade-up"}
              data-aos-delay={400}
            >
              <div className={"page-module__BatWFG__courseCardInner"}>
                <div
                  className={"page-module__BatWFG__courseImagePlaceholder"}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={"/21.jpeg"}
                    alt={"Mujer Frente a la Cámara"}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    sizes={"(max-width: 900px) 100vw, 280px"}
                  />
                </div>
                <div className={"page-module__BatWFG__courseContent"}>
                  <h3 className={"page-module__BatWFG__courseTitle"}>
                    {"Mujer Frente a la Cámara"}
                  </h3>
                  <p className={"page-module__BatWFG__courseDescription"}>
                    {
                      "Un taller diseñado para mujeres emprendedoras que desean proyectar confianza y autenticidad frente a la cámara. Aprende a comunicar tu mensaje con impacto, crear contenido audiovisual profesional y posicionarte como referente en tu industria."
                    }
                  </p>
                  <div className={"page-module__BatWFG__courseTopics"}>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Comunicación efectiva y lenguaje corporal"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>
                        {"Creación de contenido en video para redes sociales"}
                      </span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Marca personal y posicionamiento digital"}</span>
                    </div>
                    <div className={"page-module__BatWFG__courseTopic"}>
                      <span className={"page-module__BatWFG__topicCheck"}>
                        {"✓"}
                      </span>
                      <span>{"Técnicas para perder el miedo a la cámara"}</span>
                    </div>
                  </div>
                  <div className={"page-module__BatWFG__courseAction"}>
                    <Link
                      href={"/contacto"}
                      className={"page-module__BatWFG__courseButton"}
                    >
                      {"SOLICITAR INFO"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"page-module__BatWFG__serviceCtaSection"}>
        <div
          className={"page-module__BatWFG__serviceCtaContainer"}
          data-aos={"zoom-in"}
        >
          <h2 className={"page-module__BatWFG__serviceCtaTitle"}>
            {"¿LISTO PARA CAPACITAR A TU EQUIPO?"}
          </h2>
          <p className={"page-module__BatWFG__serviceCtaText"}>
            {
              "Solicita información sobre nuestros talleres y programas de capacitación personalizados."
            }
          </p>
          <Link
            href={"/contacto"}
            className={"page-module__BatWFG__serviceCtaButton"}
          >
            {"SOLICITAR INFORMACIÓN"}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
