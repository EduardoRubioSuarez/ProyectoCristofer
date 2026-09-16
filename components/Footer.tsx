import Image from "next/image";
import Link from "next/link";
import { CONTACT, FOOTER_COMPANY, FOOTER_SERVICES, SITE, SOCIAL } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, TiktokIcon, WhatsappIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo1.png" alt={SITE.name} width={44} height={44} className="rounded-full" />
            <span className="text-lg font-bold text-ink">{SITE.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">{SITE.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">Servicios</h3>
          <ul className="space-y-2">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink/70 transition hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">Empresa</h3>
          <ul className="space-y-2">
            {FOOTER_COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink/70 transition hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">Contacto</h3>
          <ul className="space-y-2 text-sm text-ink/70">
            <li>
              <a href={CONTACT.phoneHref} className="transition hover:text-accent">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>{CONTACT.address}</li>
            <li>{CONTACT.hours}</li>
          </ul>
          <div className="mt-5 flex gap-4">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="WhatsApp">
              <WhatsappIcon className="h-5 w-5" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="text-ink/70 transition hover:text-accent" aria-label="TikTok">
              <TiktokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} Isa&apos;s Marketing Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}
