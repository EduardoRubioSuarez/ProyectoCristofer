import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";

const HERO_VIDEO =
  "https://res.cloudinary.com/dkofkzzc5/video/upload/v1772738106/6561561-uhd_3840_2160_25fps_b8pp0i.mp4";

const MARQUEE_ITEMS = [
  "Marketing Digital",
  "Redes Sociales",
  "Inteligencia Artificial",
  "Estrategia",
  "Desarrollo de Software",
  "Consultoría",
  "Capacitación",
];

const TEAM = [
  {
    name: "Isabel de la Rosa",
    role: "Fundadora de Isa's Marketing",
    photo: "/isabelfoto.png",
    quote:
      "Creo firmemente en el poder de la estrategia y la legalidad. Este espacio es para ti: emprendedora, líder o dueña de negocio que quiere crecer con bases sólidas y visión clara.",
    features: [
      { title: "Protección Legal", text: "Asesoría clara para proteger tu marca y patrimonio empresarial de forma preventiva." },
      { title: "Estrategias de Ventas", text: "Sistemas de marketing probados que generan crecimiento real y sostenible en el tiempo." },
      { title: "Liderazgo Femenino", text: "Inspiración y guía para empoderar a mujeres empresarias en la toma de decisiones." },
    ],
  },
  {
    name: "Isaias Osuna Barrera",
    role: "Líder Estratégico",
    photo: "/isasfoto4.png",
    quote:
      "Inspirado en los principios del estoicismo, he convertido cada desafío en una oportunidad. Dirijo con una filosofía clara: la disciplina siempre vence al talento sin dirección.",
    features: [
      { title: "Marcas Sólidas", text: "Construcción de negocios escalables mediante estrategia y procesos operativos claros." },
      { title: "Mentalidad Resiliente", text: "Forjando emprendedores con control emocional y acción enfocada para superar retos." },
      { title: "Transformación Tecnológica", text: "Implementación de la última tecnología como herramienta principal para alcanzar objetivos rápido." },
    ],
  },
];

const SERVICES = [
  { title: "Redes Sociales", text: "Estrategia, contenido y gestión para conectar con tu audiencia.", href: "/gestion-redes-sociales" },
  { title: "Talleres + Capacitación", text: "Formación especializada para potenciar las habilidades de tu equipo.", href: "/talleres-capacitacion" },
  { title: "Desarrollo de Software + IA", text: "Desarrollo web moderno con automatizaciones inteligentes.", href: "/paginas-web-ia" },
  { title: "Consultoría + Asesorías", text: "Estrategias personalizadas para el crecimiento de tu marca.", href: "/consultoria-asesorias" },
];

const CLIENT_LOGOS = [
  "c1.png",
  "c2.jpg",
  "c4.png",
  "c5.png",
  "c6.png",
  "c7.png",
  "puertas-sanjorge.jpeg",
  "olympus-gym.jpeg",
  "chevrolet.jpg",
  "ford.png",
  "mazda.jpg",
  "toyota.png",
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-base">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-base/70 to-base" />
        <div className="container-x relative z-10 flex flex-col items-center gap-6 py-24 text-center">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            AGENCIA DIGITAL +IA
          </h1>
          <p className="max-w-2xl text-lg text-ink/80">
            Expertos en Marketing Digital, Desarrollo de Software, Automatización con Inteligencia
            Artificial, y Estrategias Comerciales para potenciar el crecimiento de tu negocio.
          </p>
          <Link
            href="/paquetes-servicios"
            className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-base transition hover:opacity-90"
          >
            IMPULSA TU MARCA
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-card py-14">
        <div className="container-x grid grid-cols-1 gap-10 sm:grid-cols-3">
          <Counter target={6} prefix="+" label="Impulsando marcas" />
          <Counter target={380} prefix="+" label="Colaboraciones con negocios" />
          <Counter target={600} prefix="+" label="Alumnos en venta, marketing y IA" />
        </div>
      </section>

      <div className="overflow-hidden border-b border-white/10 bg-base py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-sm font-semibold uppercase tracking-widest text-ink/60">
              {item} ●
            </span>
          ))}
        </div>
      </div>

      <section id="conocenos" className="container-x py-24">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">CONÓCENOS</h2>
        <div className="grid gap-10 lg:grid-cols-2">
          {TEAM.map((person) => (
            <div key={person.name} className="rounded-2xl border border-white/10 bg-card p-8">
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-ink">{person.name}</p>
                  <p className="text-sm text-accent">{person.role}</p>
                </div>
              </div>
              <p className="mb-6 text-ink/80">&ldquo;{person.quote}&rdquo;</p>
              <div className="space-y-4">
                {person.features.map((f) => (
                  <div key={f.title}>
                    <p className="font-semibold text-ink">{f.title}</p>
                    <p className="text-sm text-ink/60">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="border-t border-white/10 bg-card py-24">
        <div className="container-x">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">SERVICIOS</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div key={service.href} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-base p-6">
                <div>
                  <p className="mb-2 font-bold text-ink">{service.title}</p>
                  <p className="text-sm text-ink/60">{service.text}</p>
                </div>
                <Link href={service.href} className="mt-6 text-sm font-semibold text-accent hover:underline">
                  Ver más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="overflow-hidden py-24">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink sm:text-4xl">NUESTROS CLIENTES</h2>
        <div className="marquee-track flex w-max items-center gap-14">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
            <Image
              key={`${logo}-${i}`}
              src={`/${logo}`}
              alt="Cliente"
              width={110}
              height={70}
              className="h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </section>
    </>
  );
}
