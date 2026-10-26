import Image from "next/image";

const clientLogos = [
  { src: "/clientes-trim/c1.png", alt: "Doña Pily", w: 560, h: 600, k: 0.95 },
  { src: "/clientes-trim/c2.png", alt: "Jardines de la Baja", w: 600, h: 600, k: 0.88 },
  { src: "/clientes-trim/c4.png", alt: "Herrajes BCS", w: 600, h: 558, k: 1 },
  { src: "/clientes-trim/c5.png", alt: "Erick Valadez", w: 505, h: 458, k: 1 },
  { src: "/clientes-trim/c6.png", alt: "Baja Racing", w: 464, h: 173, k: 0.88 },
  { src: "/clientes-trim/puertas-sanjorge.png", alt: "Puertas San Jorge", w: 600, h: 388, k: 0.95 },
  { src: "/clientes-trim/olympus-gym.png", alt: "Olympus Gym", w: 600, h: 590, k: 0.88 },
  { src: "/clientes-trim/chevrolet.png", alt: "Chevrolet", w: 600, h: 284, k: 1 },
  { src: "/clientes-trim/ford.png", alt: "Ford", w: 512, h: 222, k: 1 },
  { src: "/clientes-trim/mazda.png", alt: "Mazda", w: 555, h: 600, k: 0.9 },
  { src: "/clientes-trim/toyota.png", alt: "Toyota", w: 200, h: 166, k: 1 },
];

export default function ClientsCarousel() {
  return (
    <section
      id={"clientes"}
      data-clients-carousel={""}
      className="clients-ink"
      aria-label="Clientes"
    >
      <div className="clients-ink-band">
        <div className="clients-ink-run">
          {[0, 1].map((copy) =>
            clientLogos.map((logo) => (
              <div
                className="clients-ink-logo"
                style={{ "--k": logo.k }}
                key={`${copy}-${logo.src}`}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                <Image
                  src={logo.src}
                  alt={copy === 1 ? "" : logo.alt}
                  width={logo.w}
                  height={logo.h}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
