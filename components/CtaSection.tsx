import Link from "next/link";

export default function CtaSection({
  title,
  text,
  buttonLabel,
  href = "/contacto",
}: {
  title: string;
  text: string;
  buttonLabel: string;
  href?: string;
}) {
  return (
    <section className="border-t border-white/10 bg-card">
      <div className="container-x flex flex-col items-center gap-6 py-20 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-ink/70">{text}</p>
        <Link
          href={href}
          className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-base transition hover:opacity-90"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
