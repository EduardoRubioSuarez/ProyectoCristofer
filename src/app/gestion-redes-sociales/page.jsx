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
export default function Page() {
  return (
    <>
      <section className={"page-module__7x4RkW__serviceHero"}>
        <video
          className={"page-module__7x4RkW__heroVideo"}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source src={"/redes.mp4"} type={"video/mp4"} />
        </video>
        <div className={"page-module__7x4RkW__heroOverlay"} />
        <div className={"page-module__7x4RkW__serviceHeroContent"}>
          <div
            className={"page-module__7x4RkW__serviceIconLarge"}
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
          <h1
            className={"page-module__7x4RkW__serviceHeroTitle"}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          >
            {"GESTIÓN DE REDES SOCIALES"}
          </h1>
          <p
            className={"page-module__7x4RkW__serviceHeroSubtitle"}
            data-aos={"fade-up"}
            data-aos-delay={"150"}
          >
            {
              "Potenciamos tu presencia digital, con nuestra metodología, estrategia de contenido, que permiten conectar con tu cliente potencial y acercarte a más cierres de venta."
            }
          </p>
        </div>
      </section>
      <section className={"page-module__7x4RkW__serviceDetailSection"}>
        <div className={"page-module__7x4RkW__serviceContainer"}>
          <div className={"page-module__7x4RkW__splitLayout"}>
            <div className={"page-module__7x4RkW__splitSticky"}>
              <div
                className={"page-module__7x4RkW__introText"}
                data-aos={"fade-right"}
              >
                <h2>{"Transformamos tu presencia digital"}</h2>
                <p>
                  {
                    "Creamos estrategias personalizadas que conectan con tu audiencia y generan resultados medibles. Nuestro equipo trabaja cada detalle para que tu marca destaque en el competitivo mundo digital."
                  }
                </p>
              </div>
            </div>
            <div className={"page-module__7x4RkW__splitContent"}>
              <div
                className={"page-module__7x4RkW__minimalItem"}
                data-aos={"fade-left"}
                data-aos-delay={"100"}
              >
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module__7x4RkW__minimalIcon"}
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
                <div className={"page-module__7x4RkW__minimalContent"}>
                  <h3>{"Redes Sociales Profesionales"}</h3>
                  <p>
                    {
                      "Manejo experto de redes sociales incluyendo Facebook, Instagram y WhatsApp Business, optimizados para tu modelo de negocio."
                    }
                  </p>
                </div>
              </div>
              <div
                className={"page-module__7x4RkW__minimalItem"}
                data-aos={"fade-left"}
                data-aos-delay={"200"}
              >
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module__7x4RkW__minimalIcon"}
                  style={{}}
                  height={"1em"}
                  width={"1em"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                  <path d={"M23 21v-2a4 4 0 0 0-3-3.87"} />
                  <path d={"M16 3.13a4 4 0 0 1 0 7.75"} />
                </svg>
                <div className={"page-module__7x4RkW__minimalContent"}>
                  <h3>{"Community Manager Dedicado"}</h3>
                  <p>
                    {
                      "Interacción profesional y moderación activa con tu comunidad para fortalecer las relaciones con tus clientes en tiempo real."
                    }
                  </p>
                </div>
              </div>
              <div
                className={"page-module__7x4RkW__minimalItem"}
                data-aos={"fade-left"}
                data-aos-delay={"300"}
              >
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module__7x4RkW__minimalIcon"}
                  style={{}}
                  height={"1em"}
                  width={"1em"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <polyline points={"23 6 13.5 15.5 8.5 10.5 1 18"} />
                  <polyline points={"17 6 23 6 23 12"} />
                </svg>
                <div className={"page-module__7x4RkW__minimalContent"}>
                  <h3>{"Post Digitales Estratégicos"}</h3>
                  <p>
                    {
                      "Paquetes de contenido visualmente atractivos y diseñados específicamente para generar alto engagement y conversión."
                    }
                  </p>
                </div>
              </div>
              <div
                className={"page-module__7x4RkW__minimalItem"}
                data-aos={"fade-left"}
                data-aos-delay={"400"}
              >
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module__7x4RkW__minimalIcon"}
                  style={{}}
                  height={"1em"}
                  width={"1em"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <polygon points={"23 7 16 12 23 17 23 7"} />
                  <rect
                    x={"1"}
                    y={"5"}
                    width={"15"}
                    height={"14"}
                    rx={"2"}
                    ry={"2"}
                  />
                </svg>
                <div className={"page-module__7x4RkW__minimalContent"}>
                  <h3>{"Producción de Video"}</h3>
                  <p>
                    {
                      "Videos digitales y reels de alta calidad que capturan la atención de tu audiencia en los primeros segundos."
                    }
                  </p>
                </div>
              </div>
              <div
                className={"page-module__7x4RkW__minimalItem"}
                data-aos={"fade-left"}
                data-aos-delay={"500"}
              >
                <svg
                  stroke={"currentColor"}
                  fill={"none"}
                  strokeWidth={"2"}
                  viewBox={"0 0 24 24"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  className={"page-module__7x4RkW__minimalIcon"}
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
                <div className={"page-module__7x4RkW__minimalContent"}>
                  <h3>{"Soluciones Digitales Adicionales"}</h3>
                  <p>
                    {
                      "También ofrecemos tarjetas digitales inteligentes y minipáginas de aterrizaje altamente convertidoras. "
                    }
                    <Link
                      href={"/contacto"}
                      style={{
                        color: "var(--accent)",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {"¿Te interesa? Contáctanos "}
                      <svg
                        stroke={"currentColor"}
                        fill={"none"}
                        strokeWidth={"2"}
                        viewBox={"0 0 24 24"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        style={{ verticalAlign: "middle" }}
                        height={"1em"}
                        width={"1em"}
                        xmlns={"http://www.w3.org/2000/svg"}
                      >
                        <line x1={"5"} y1={"12"} x2={"19"} y2={"12"} />
                        <polyline points={"12 5 19 12 12 19"} />
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"page-module__7x4RkW__serviceCtaSection"}>
        <div
          className={"page-module__7x4RkW__serviceCtaContainer"}
          data-aos={"zoom-in"}
        >
          <h2 className={"page-module__7x4RkW__serviceCtaTitle"}>
            {"¿Listo para transformar tus redes sociales?"}
          </h2>
          <p className={"page-module__7x4RkW__serviceCtaText"}>
            {
              "Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudar a tu negocio a destacar en el mundo digital."
            }
          </p>
          <Link
            href={"/contacto"}
            className={"page-module__7x4RkW__serviceCtaButton"}
          >
            {"SOLICITAR CONSULTA GRATUITA"}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
