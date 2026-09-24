import ContactForm from "@/components/ContactForm.jsx";
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
  title: "Contacto | ISA'S Agencia Digital",
  description:
    "Contáctanos para impulsar tu negocio con marketing digital, desarrollo web y automatizaciones con IA en La Paz, B.C.S.",
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
      <section className={"page-module__rpHNCa__contactHero"}>
        <div className={"page-module__rpHNCa__heroContent"}>
          <div
            className={"page-module__rpHNCa__heroBadge"}
            data-aos={"fade-down"}
          >
            <svg
              stroke={"currentColor"}
              fill={"currentColor"}
              strokeWidth={"0"}
              viewBox={"0 0 320 512"}
              style={{}}
              height={12}
              width={12}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <path
                d={
                  "M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                }
              />
            </svg>
            <span>{"Respuesta en menos de 1 hora"}</span>
          </div>
          <h1
            className={"page-module__rpHNCa__contactHeroTitle"}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          >
            {"HABLEMOS DE TU PROYECTO"}
          </h1>
          <p
            className={"page-module__rpHNCa__contactHeroSubtitle"}
            data-aos={"fade-up"}
            data-aos-delay={"200"}
          >
            {
              "Estamos listos para transformar tus ideas en resultados reales. Cuéntanos tu visión y te responderemos en menos de 1 hora."
            }
          </p>
          <div
            className={"page-module__rpHNCa__heroCtaGroup"}
            data-aos={"fade-up"}
            data-aos-delay={"300"}
          >
            <a href={"#contactForm"} className={"page-module__rpHNCa__heroCta"}>
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
                <line x1={"22"} y1={"2"} x2={"11"} y2={"13"} />
                <polygon points={"22 2 15 22 11 13 2 9 22 2"} />
              </svg>
              <span>{"ENVIAR MENSAJE"}</span>
            </a>
            <a
              href={"https://wa.me/526122195577"}
              className={
                "page-module__rpHNCa__heroCta page-module__rpHNCa__heroCtaSecondary"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <svg
                stroke={"currentColor"}
                fill={"currentColor"}
                strokeWidth={"0"}
                viewBox={"0 0 448 512"}
                style={{}}
                height={16}
                width={16}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <path
                  d={
                    "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  }
                />
              </svg>
              <span>{"WHATSAPP DIRECTO"}</span>
            </a>
          </div>
          <div
            className={"page-module__rpHNCa__heroFeatures"}
            data-aos={"fade-up"}
            data-aos-delay={"400"}
          >
            <div className={"page-module__rpHNCa__heroFeature"}>
              <div className={"page-module__rpHNCa__heroFeatureIcon"}>
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
                  <path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                  <path d={"M23 21v-2a4 4 0 0 0-3-3.87"} />
                  <path d={"M16 3.13a4 4 0 0 1 0 7.75"} />
                </svg>
              </div>
              <div className={"page-module__rpHNCa__heroFeatureText"}>
                <div className={"page-module__rpHNCa__heroFeatureTitle"}>
                  {"Clientes satisfechos"}
                </div>
                <div className={"page-module__rpHNCa__heroFeatureValue"}>
                  {"+150"}
                </div>
              </div>
            </div>
            <div className={"page-module__rpHNCa__heroFeature"}>
              <div className={"page-module__rpHNCa__heroFeatureIcon"}>
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
                  <polygon
                    points={
                      "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    }
                  />
                </svg>
              </div>
              <div className={"page-module__rpHNCa__heroFeatureText"}>
                <div className={"page-module__rpHNCa__heroFeatureTitle"}>
                  {"Valoración"}
                </div>
                <div className={"page-module__rpHNCa__heroFeatureValue"}>
                  {"5.0/5.0"}
                </div>
              </div>
            </div>
            <div className={"page-module__rpHNCa__heroFeature"}>
              <div className={"page-module__rpHNCa__heroFeatureIcon"}>
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
                  <circle cx={"12"} cy={"12"} r={"10"} />
                  <polyline points={"12 6 12 12 16 14"} />
                </svg>
              </div>
              <div className={"page-module__rpHNCa__heroFeatureText"}>
                <div className={"page-module__rpHNCa__heroFeatureTitle"}>
                  {"Tiempo respuesta"}
                </div>
                <div className={"page-module__rpHNCa__heroFeatureValue"}>
                  {"< 1h"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"page-module__rpHNCa__contactMain"}>
        <div className={"page-module__rpHNCa__contactWrapper"}>
          <div
            className={"page-module__rpHNCa__contactFormContainer"}
            data-aos={"fade-right"}
          >
            <div className={"page-module__rpHNCa__formHeader"}>
              <h2 className={"page-module__rpHNCa__formTitle"}>
                {"Envíanos un mensaje"}
              </h2>
              <p className={"page-module__rpHNCa__formDescription"}>
                {
                  "Completa el formulario y nos pondremos en contacto contigo pronto"
                }
              </p>
            </div>
            <ContactForm />
          </div>
          <div
            className={"page-module__rpHNCa__contactSidebar"}
            data-aos={"fade-left"}
            data-aos-delay={"200"}
          >
            <div className={"page-module__rpHNCa__infoCard"}>
              <h3 className={"page-module__rpHNCa__infoCardTitle"}>
                {"Información de contacto"}
              </h3>
              <div className={"page-module__rpHNCa__infoItem"}>
                <div className={"page-module__rpHNCa__infoIcon"}>
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
                    <path
                      d={
                        "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      }
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={"page-module__rpHNCa__infoTitle"}>
                    {"Teléfono"}
                  </h4>
                  <p className={"page-module__rpHNCa__infoText"}>
                    <a href={"tel:+526122195577"}>{"612 219 5577"}</a>
                  </p>
                </div>
              </div>
              <div className={"page-module__rpHNCa__infoItem"}>
                <div className={"page-module__rpHNCa__infoIcon"}>
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
                    <path
                      d={
                        "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      }
                    />
                    <polyline points={"22,6 12,13 2,6"} />
                  </svg>
                </div>
                <div>
                  <h4 className={"page-module__rpHNCa__infoTitle"}>
                    {"Email"}
                  </h4>
                  <p className={"page-module__rpHNCa__infoText"}>
                    <a href={"mailto:contacto@isasdigital.com"}>
                      {"contacto@isasdigital.com"}
                    </a>
                  </p>
                </div>
              </div>
              <div className={"page-module__rpHNCa__infoItem"}>
                <div className={"page-module__rpHNCa__infoIcon"}>
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
                    <path
                      d={"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}
                    />
                    <circle cx={"12"} cy={"10"} r={"3"} />
                  </svg>
                </div>
                <div>
                  <h4 className={"page-module__rpHNCa__infoTitle"}>
                    {"Ubicación"}
                  </h4>
                  <p className={"page-module__rpHNCa__infoText"}>
                    {"Calle Toronja Esq. Blvd. Colosio"}
                    <br />
                    {"Col. Indeco, La Paz"}
                    <br />
                    {"Baja California Sur, México"}
                  </p>
                </div>
              </div>
              <div className={"page-module__rpHNCa__infoItem"}>
                <div className={"page-module__rpHNCa__infoIcon"}>
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
                    <circle cx={"12"} cy={"12"} r={"10"} />
                    <polyline points={"12 6 12 12 16 14"} />
                  </svg>
                </div>
                <div>
                  <h4 className={"page-module__rpHNCa__infoTitle"}>
                    {"Horario"}
                  </h4>
                  <p className={"page-module__rpHNCa__infoText"}>
                    {"Lunes - Viernes: 9:00 AM - 6:00 PM"}
                    <br />
                    {"Sábados: 10:00 AM - 2:00 PM"}
                  </p>
                </div>
              </div>
            </div>
            <div className={"page-module__rpHNCa__socialCard"}>
              <h3 className={"page-module__rpHNCa__socialCardTitle"}>
                {"Síguenos en redes"}
              </h3>
              <div className={"page-module__rpHNCa__socialLinks"}>
                <a
                  href={"https://facebook.com/MARKETINGDIGITALISAS"}
                  className={"page-module__rpHNCa__socialLink"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  title={"Facebook"}
                >
                  <svg
                    stroke={"currentColor"}
                    fill={"currentColor"}
                    strokeWidth={"0"}
                    viewBox={"0 0 320 512"}
                    style={{}}
                    height={15}
                    width={15}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <path
                      d={
                        "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      }
                    />
                  </svg>
                </a>
                <a
                  href={"https://wa.me/526122195577"}
                  className={"page-module__rpHNCa__socialLink"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  title={"WhatsApp"}
                >
                  <svg
                    stroke={"currentColor"}
                    fill={"currentColor"}
                    strokeWidth={"0"}
                    viewBox={"0 0 448 512"}
                    style={{}}
                    height={15}
                    width={15}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <path
                      d={
                        "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      }
                    />
                  </svg>
                </a>
                <a
                  href={"https://instagram.com/ISASMARKETING.DIGITAL"}
                  className={"page-module__rpHNCa__socialLink"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  title={"Instagram"}
                >
                  <svg
                    stroke={"currentColor"}
                    fill={"currentColor"}
                    strokeWidth={"0"}
                    viewBox={"0 0 448 512"}
                    style={{}}
                    height={15}
                    width={15}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <path
                      d={
                        "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      }
                    />
                  </svg>
                </a>
                <a
                  href={"https://tiktok.com/@isas.marketing.of"}
                  className={"page-module__rpHNCa__socialLink"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  title={"TikTok"}
                >
                  <svg
                    stroke={"currentColor"}
                    fill={"currentColor"}
                    strokeWidth={"0"}
                    viewBox={"0 0 448 512"}
                    style={{}}
                    height={14}
                    width={14}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <path
                      d={
                        "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                      }
                    />
                  </svg>
                </a>
                <a
                  href={"#"}
                  className={"page-module__rpHNCa__socialLink"}
                  title={"LinkedIn"}
                >
                  <svg
                    stroke={"currentColor"}
                    fill={"currentColor"}
                    strokeWidth={"0"}
                    viewBox={"0 0 448 512"}
                    style={{}}
                    height={15}
                    width={15}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <path
                      d={
                        "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      }
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
