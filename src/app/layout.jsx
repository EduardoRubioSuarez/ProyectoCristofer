import '@/styles/globals.css';
import '@/styles/pages.css';
import '@/styles/mobile-motion.css';
import Navbar from '@/components/Navbar';
import AnimationProvider from '@/components/AnimationProvider';
import siteMetadata from '@/lib/site-metadata';

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AnimationProvider>
          <Navbar />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
