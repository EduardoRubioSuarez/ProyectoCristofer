import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { CONTACT, SOCIAL } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, TiktokIcon, WhatsappIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para impulsar tu negocio con marketing digital, desarrollo web y automatizaciones con IA en La Paz, B.C.S.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-base py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-accent/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Respuesta en menos de 1 hora
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold text-ink sm:text-5xl">
            HABLEMOS DE TU PROYECTO
          </h1>
          <p className="max-w-2xl text-lg text-ink/80">
            Estamos listos para transformar tus ideas en resultados reales. Cuéntanos tu visión y
            te responderemos en menos de 1 hora.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contactForm" className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-base transition hover:opacity-90">
              ENVIAR MENSAJE
            </a>
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold text-ink transition hover:border-accent hover:text-accent"
            >
              WHATSAPP DIRECTO
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-extrabold text-accent">+150</p>
              <p className="text-xs text-ink/60">Clientes satisfechos</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-accent">5.0/5.0</p>
              <p className="text-xs text-ink/60">Valoración</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-accent">&lt; 1h</p>
              <p className="text-xs text-ink/60">Tiempo respuesta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 pb-24 lg:grid-cols-2">
        <div id="contactForm">
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h2 className="mb-4 text-xl font-bold text-ink">Información de contacto</h2>
            <ul className="space-y-3 text-sm text-ink/70">
              <li>
                <span className="block text-ink/50">Teléfono</span>
                <a href={CONTACT.phoneHref} className="hover:text-accent">{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <span className="block text-ink/50">Email</span>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">{CONTACT.email}</a>
              </li>
              <li>
                <span className="block text-ink/50">Ubicación</span>
                {CONTACT.address}
              </li>
              <li>
                <span className="block text-ink/50">Horario</span>
                {CONTACT.hours}
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h2 className="mb-4 text-xl font-bold text-ink">Síguenos en redes</h2>
            <div className="flex gap-4">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="Facebook">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="WhatsApp">
                <WhatsappIcon className="h-6 w-6" />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="Instagram">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="TikTok">
                <TiktokIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
