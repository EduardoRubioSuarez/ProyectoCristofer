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
  title: "Casos de Éxito | ISA'S Agencia Digital",
  description:
    "Descubre cómo hemos ayudado a empresas locales a alcanzar resultados extraordinarios con nuestras estrategias de marketing inteligente.",
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
      <section className={"page-module__nXFJia__casesHero"}>
        <div className={"page-module__nXFJia__heroGrid"} />
        <div className={"page-module__nXFJia__heroContent"}>
          <div
            className={"page-module__nXFJia__heroBadge"}
            data-aos={"fade-down"}
          >
            {"Portfolio"}
          </div>
          <h1
            className={"page-module__nXFJia__casesHeroTitle"}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          >
            {"CASOS DE ÉXITO"}
          </h1>
          <p
            className={"page-module__nXFJia__casesHeroSubtitle"}
            data-aos={"fade-up"}
            data-aos-delay={"200"}
          >
            {
              "Transformamos desafíos en oportunidades. Descubre cómo hemos ayudado a empresas de diferentes sectores a alcanzar resultados extraordinarios con estrategias de marketing inteligentes y efectivas."
            }
          </p>
          <a
            href={"#casos"}
            className={"page-module__nXFJia__heroCta"}
            data-aos={"fade-up"}
            data-aos-delay={"300"}
          >
            {"EXPLORAR CASOS"}
            <svg
              stroke={"currentColor"}
              fill={"none"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              style={{}}
              height={16}
              width={16}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <line x1={"12"} y1={"5"} x2={"12"} y2={"19"} />
              <polyline points={"19 12 12 19 5 12"} />
            </svg>
          </a>
        </div>
      </section>
      <section id={"casos"} className={"page-module__nXFJia__casesSection"}>
        <div
          className={"page-module__nXFJia__sectionHeader"}
          data-aos={"fade-up"}
        >
          <div className={"page-module__nXFJia__sectionSubtitle"}>
            {"NUESTRO TRABAJO"}
          </div>
          <h2 className={"page-module__nXFJia__sectionMainTitle"}>
            {"HISTORIAS DE ÉXITO"}
          </h2>
          <div className={"page-module__nXFJia__comingSoon"}>
            <h3 className={"page-module__nXFJia__comingSoonTitle"}>
              {"PRÓXIMAMENTE"}
            </h3>
            <p className={"page-module__nXFJia__sectionDescription"}>
              {
                "Estamos preparando casos de éxito detallados que demostrarán cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos. ¡Vuelve pronto para conocer estas historias inspiradoras!"
              }
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
