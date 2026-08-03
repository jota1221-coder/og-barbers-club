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
  "Fades, diseños y cortes de verdad en Martínez. Team Rodrigo, Lauti y Valentín. Por orden de llegada — mirá cómo está la fila antes de salir de tu casa.";

export const metadata: Metadata = {
  metadataBase: new URL("https://og-barbers-club.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://og-barbers-club.vercel.app",
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
      <body className="min-h-screen bg-ink-50 text-ink-950 antialiased">
        {children}
      </body>
    </html>
  );
}
