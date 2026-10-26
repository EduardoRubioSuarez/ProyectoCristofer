import ContactForm from "@/components/ContactForm.jsx";
import "@/styles/contact-page.css";
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
      <div className="ct">
        <aside className="ct-side">
          <h1>
            Hablemos de tu <em>proyecto</em>
          </h1>
          <p className="ct-lead">
            Cuéntanos qué necesitas. Nuestro equipo te responde con una
            propuesta clara y sin compromiso.
          </p>
          <div className="ct-list">
            <div className="ct-row y">
              <i />
              <div>
                <small>Teléfono y WhatsApp</small>
                <a className="ct-big" href="tel:+526122195577">
                  612 219 5577
                </a>
              </div>
            </div>
            <div className="ct-row b">
              <i />
              <div>
                <small>Correo</small>
                <a href="mailto:contacto@isasdigital.com">
                  contacto@isasdigital.com
                </a>
              </div>
            </div>
            <div className="ct-row r">
              <i />
              <div>
                <small>Oficina</small>
                <p>
                  Calle Toronja Esq. Blvd. Colosio
                  <br />
                  Col. Indeco, La Paz, B.C.S.
                </p>
              </div>
            </div>
            <div className="ct-row w">
              <i />
              <div>
                <small>Horario</small>
                <p>
                  Lun – Vie · 9:00 a 18:00
                  <br />
                  Sábados · 10:00 a 14:00
                </p>
              </div>
            </div>
          </div>
          <div className="ct-soc">
            <a
              href="https://wa.me/526122195577"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://facebook.com/MARKETINGDIGITALISAS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/ISASMARKETING.DIGITAL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@isas.marketing.of"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
          <div className="ct-tri" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </aside>
        <main className="ct-main">
          <div className="ct-resp">
            Respuesta en menos de 1 hora en horario laboral
          </div>
          <h2>Envíanos un mensaje</h2>
          <p className="ct-sub">
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </p>
          <ContactForm />
        </main>
      </div>
      <Footer />
    </>
  );
}
