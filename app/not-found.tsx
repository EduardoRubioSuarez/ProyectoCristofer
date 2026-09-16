import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <h1 className="text-6xl font-extrabold text-accent">404</h1>
      <p className="text-lg text-ink/80">No pudimos encontrar la página que buscas.</p>
      <Link
        href="/"
        className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-base transition hover:opacity-90"
      >
        VOLVER AL INICIO
      </Link>
    </section>
  );
}
