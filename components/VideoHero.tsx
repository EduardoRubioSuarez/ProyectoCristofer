export default function VideoHero({
  videoSrc,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  videoSrc: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-base">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-base/70 to-base" />
      <div className="container-x relative z-10 flex flex-col items-center gap-6 py-24 text-center">
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-ink/80">{subtitle}</p>
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-base transition hover:opacity-90"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
