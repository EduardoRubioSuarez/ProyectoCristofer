import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site-config";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ISA'S AGENCIA DIGITAL - Agencia de Publicidad + IA",
    template: "%s | ISA'S Agencia Digital",
  },
  description:
    "Bienvenido a ISA'S Agencia Digital. Transformamos marcas con estrategias digitales, desarrollo web de alto impacto y automatizaciones inteligentes.",
  keywords: [
    "Agencia de marketing",
    "Marketing Digital",
    "La Paz BCS",
    "Desarrollo Web",
    "Páginas Web",
    "Inteligencia Artificial",
    "Gestión de Redes Sociales",
    "Consultoría",
    "Software",
    "Automatización",
  ],
  openGraph: {
    title: "ISA'S AGENCIA DIGITAL - Agencia de Publicidad + IA",
    description:
      "Bienvenido a ISA'S Agencia Digital. Transformamos marcas con estrategias digitales, desarrollo web de alto impacto y automatizaciones inteligentes.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
