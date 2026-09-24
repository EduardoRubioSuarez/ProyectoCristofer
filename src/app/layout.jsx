import '@/styles/globals.css';
import '@/styles/pages.css';
import Navbar from '@/components/Navbar';
import AnimationProvider from '@/components/AnimationProvider';
import siteMetadata from '@/lib/site-metadata';

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/fonts/e8f2fbee2754df70-s.p.9b7a96b4.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="montserrat_a7e66e18-module__Faw1Kq__variable">
        <AnimationProvider>
          <Navbar />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
