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
  title: "Consultoría y Asesorías | ISA'S Agencia Digital",
  description:
    "Estrategias personalizadas, auditorías y planes de crecimiento para llevar tu negocio al siguiente nivel con decisiones inteligentes.",
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
      <section className={"page-module__NPA_RW__serviceHero"}>
        <video
          className={"page-module__NPA_RW__serviceHeroVideo"}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source
            src={
              "https://res.cloudinary.com/dkofkzzc5/video/upload/v1772829425/6930835-uhd_3840_2160_25fps_t7i9fl.mp4"
            }
            type={"video/mp4"}
          />
        </video>
        <div className={"page-module__NPA_RW__serviceHeroContent"}>
          <div
            className={"page-module__NPA_RW__serviceIconLarge"}
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
              <polyline points={"23 6 13.5 15.5 8.5 10.5 1 18"} />
              <polyline points={"17 6 23 6 23 12"} />
            </svg>
          </div>
          <h1
            className={"page-module__NPA_RW__serviceHeroTitle"}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          >
            {"CONSULTORÍA + ASESORÍAS"}
          </h1>
          <p
            className={"page-module__NPA_RW__serviceHeroSubtitle"}
            data-aos={"fade-up"}
            data-aos-delay={"200"}
          >
            {
              "Estrategias personalizadas, auditorías y planes de crecimiento para llevar tu negocio al siguiente nivel con decisiones inteligentes."
            }
          </p>
        </div>
      </section>
      <section className={"page-module__NPA_RW__methodologySection"}>
        <div className={"page-module__NPA_RW__methodologyContainer"}>
          <h2
            className={"page-module__NPA_RW__sectionTitle"}
            data-aos={"fade-up"}
          >
            {"NUESTRA METODOLOGÍA"}
          </h2>
          <div className={"page-module__NPA_RW__methodologySteps"}>
            <div
              className={"page-module__NPA_RW__methodologyStep"}
              data-aos={"fade-up"}
              data-aos-delay={"100"}
            >
              <div className={"page-module__NPA_RW__methodologyCircle"}>
                {"1"}
              </div>
              <h3 className={"page-module__NPA_RW__methodologyTitle"}>
                {"Diagnóstico"}
              </h3>
              <p>
                {
                  "Analizamos tu situación actual, tu mercado y tu competencia para identificar oportunidades."
                }
              </p>
            </div>
            <div
              className={"page-module__NPA_RW__methodologyStep"}
              data-aos={"fade-up"}
              data-aos-delay={"200"}
            >
              <div className={"page-module__NPA_RW__methodologyCircle"}>
                {"2"}
              </div>
              <h3 className={"page-module__NPA_RW__methodologyTitle"}>
                {"Estrategia"}
              </h3>
              <p>
                {
                  "Diseñamos un plan personalizado con objetivos claros, tácticas y métricas de éxito."
                }
              </p>
            </div>
            <div
              className={"page-module__NPA_RW__methodologyStep"}
              data-aos={"fade-up"}
              data-aos-delay={"300"}
            >
              <div className={"page-module__NPA_RW__methodologyCircle"}>
                {"3"}
              </div>
              <h3 className={"page-module__NPA_RW__methodologyTitle"}>
                {"Ejecución"}
              </h3>
              <p>
                {
                  "Implementamos las estrategias con tu equipo, asegurando que cada acción genere impacto."
                }
              </p>
            </div>
            <div
              className={"page-module__NPA_RW__methodologyStep"}
              data-aos={"fade-up"}
              data-aos-delay={"400"}
            >
              <div className={"page-module__NPA_RW__methodologyCircle"}>
                {"4"}
              </div>
              <h3 className={"page-module__NPA_RW__methodologyTitle"}>
                {"Optimización"}
              </h3>
              <p>
                {
                  "Medimos resultados y ajustamos la estrategia para maximizar el retorno de inversión."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"page-module__NPA_RW__serviceDetailSection"}>
        <div className={"page-module__NPA_RW__serviceContainer"}>
          <div className={"page-module__NPA_RW__serviceContentGrid"}>
            <div
              className={"page-module__NPA_RW__serviceTextContent"}
              data-aos={"fade-right"}
            >
              <h2>{"ESTRATEGIA Y CRECIMIENTO EMPRESARIAL"}</h2>
              <p>
                {
                  "Ofrecemos consultoría especializada en marketing digital, posicionamiento de marca y estrategia comercial. Nuestro enfoque combina análisis profundo, experiencia práctica y herramientas modernas para que cada decisión impulse resultados reales."
                }
              </p>
              <p>
                {
                  "Trabajamos contigo de cerca, entendiendo tu mercado, tus metas y los desafíos únicos de tu negocio para diseñar planes de acción concretos y medibles."
                }
              </p>
              <p>
                {
                  "Nuestras asesorías cubren desde la auditoría de tu presencia digital actual hasta la creación de roadmaps de crecimiento, incluyendo estrategias de branding, posicionamiento SEO, campañas publicitarias y optimización de procesos comerciales."
                }
              </p>
            </div>
            <div
              className={"page-module__NPA_RW__serviceImageContent"}
              data-aos={"fade-left"}
              data-aos-delay={"200"}
            >
              <div
                className={"page-module__NPA_RW__serviceImagePlaceholder"}
                data-label={"Estrategia Digital"}
              >
                <Image
                  src={"/olympus-gym.jpeg"}
                  alt={"Estrategia Digital - Olympus Gym"}
                  width={400}
                  height={300}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div
                className={"page-module__NPA_RW__serviceImagePlaceholder"}
                data-label={"Asesoría de Marca"}
              >
                <Image
                  src={"/puertas-sanjorge.jpeg"}
                  alt={"Asesoría de Marca"}
                  width={400}
                  height={300}
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
      <section className={"page-module__NPA_RW__serviceCtaSection"}>
        <div
          className={"page-module__NPA_RW__serviceCtaContainer"}
          data-aos={"zoom-in"}
        >
          <h2 className={"page-module__NPA_RW__serviceCtaTitle"}>
            {"¿LISTO PARA TRANSFORMAR TU NEGOCIO?"}
          </h2>
          <p className={"page-module__NPA_RW__serviceCtaText"}>
            {
              "Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos comerciales con estrategias probadas."
            }
          </p>
          <Link
            href={"/contacto"}
            className={"page-module__NPA_RW__serviceCtaButton"}
          >
            {"AGENDAR CONSULTA GRATUITA"}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
