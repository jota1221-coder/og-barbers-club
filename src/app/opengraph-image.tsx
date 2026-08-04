import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OG Barber's Club · Barbería en Martínez, San Isidro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Monocromo puro, como el resto del sitio y como el logo real de OG.
// Fondo negro (no el blanco del sitio) porque la tarjeta se ve como miniatura
// dentro de un DM de Instagram: contrasta contra el feed en vez de fundirse.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080808",
          // Satori (el renderer de @vercel/og) sólo soporta linear/radial-gradient:
          // un repeating-linear-gradient acá tira 500 en vez de fallar en build.
          backgroundImage:
            "radial-gradient(circle at 50% 0%, #2A2A2A 0%, #080808 62%)",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#A3A3A3",
            marginBottom: 30,
          }}
        >
          Martínez · San Isidro
        </div>
        <div
          style={{
            fontSize: 118,
            fontWeight: 800,
            color: "#FAFAFA",
            letterSpacing: -3,
            textAlign: "center",
            lineHeight: 1,
            padding: "0 60px",
          }}
        >
          OG BARBER&apos;S CLUB
        </div>
        <div
          style={{
            width: 72,
            height: 4,
            backgroundColor: "#FAFAFA",
            marginTop: 42,
          }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            color: "#D4D4D4",
          }}
        >
          Fades · Diseños · Cortes clásicos · Color
        </div>
      </div>
    ),
    { ...size }
  );
}
