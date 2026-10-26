import TeamHero from "@/components/TeamHero.jsx";
import TeamBand from "@/components/TeamBand.jsx";
import TeamAreas from "@/components/TeamAreas.jsx";
import Footer from "@/components/Footer.jsx";

export const metadata = {
  openGraph: {
    title: "Conócenos | ISA'S Agencia Digital",
    description:
      "Conoce al equipo detrás de ISA'S Agencia Digital: estrategia, marketing y tecnología al servicio de tu negocio.",
    url: "https://isasmarketing.com/conocenos",
    siteName: "ISA'S Agencia Digital",
    locale: "es_MX",
    type: "website",
  },
  title: "Conócenos | ISA'S Agencia Digital",
  description:
    "Conoce al equipo detrás de ISA'S Agencia Digital: estrategia, marketing y tecnología al servicio de tu negocio.",
  authors: [{ name: "ISA'S Agencia Digital" }],
  creator: "ISA'S Agencia Digital",
  publisher: "ISA'S Agencia Digital",
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <TeamHero />
      <TeamBand />
      <TeamAreas />
      <Footer />
    </>
  );
}
