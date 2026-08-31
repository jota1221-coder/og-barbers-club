import type { Metadata } from "next";
import { Anton, Inter, UnifrakturCook } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const unifraktur = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-logo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const title = "OG Barber's Club · Barbería en Martínez, San Isidro";
const description =
  "Fades, diseños y cortes de verdad en Martínez. Rodrigo y Valentín, por orden de llegada. Martes a sábado de 10 a 20 hs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ogbarber.vercel.app"),
  title,
  description,
  // Demo no oficial: no debe indexarse ni competir en Google con el negocio real.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "https://ogbarber.vercel.app",
    siteName: "OG Barber's Club",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${anton.variable} ${unifraktur.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink-950 text-ink-50 antialiased">
        {children}
      </body>
    </html>
  );
}
