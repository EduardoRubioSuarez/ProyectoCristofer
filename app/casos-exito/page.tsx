import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Descubre cómo hemos ayudado a empresas locales a alcanzar resultados extraordinarios con nuestras estrategias de marketing inteligente.",
};

export default function CasosExitoPage() {
  return (
    <>
      <section className="bg-base py-24">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-accent/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Portfolio
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold text-ink sm:text-5xl">CASOS DE ÉXITO</h1>
          <p className="max-w-2xl text-lg text-ink/80">
            Transformamos desafíos en oportunidades. Descubre cómo hemos ayudado a empresas de
            diferentes sectores a alcanzar resultados extraordinarios con estrategias de marketing
            inteligentes y efectivas.
          </p>
          <a
            href="#casos"
            className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-base transition hover:opacity-90"
          >
            EXPLORAR CASOS
          </a>
        </div>
      </section>

      <section id="casos" className="container-x py-24">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Nuestro Trabajo
        </p>
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">
          HISTORIAS DE ÉXITO
        </h2>
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-card p-12 text-center">
          <h3 className="mb-4 text-2xl font-bold text-ink">PRÓXIMAMENTE</h3>
          <p className="text-ink/70">
            Estamos preparando casos de éxito detallados que demostrarán cómo hemos ayudado a
            nuestros clientes a alcanzar sus objetivos. ¡Vuelve pronto para conocer estas historias
            inspiradoras!
          </p>
        </div>
      </section>

      <CtaSection
        title="¿LISTO PARA SER NUESTRO PRÓXIMO CASO DE ÉXITO?"
        text="Cuéntanos tu proyecto y descubre cómo podemos ayudarte a alcanzar resultados reales."
        buttonLabel="CONTÁCTANOS"
      />
    </>
  );
}
