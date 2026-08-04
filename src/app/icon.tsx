import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon: monograma "OG" en negativo. A 32px la gótica del logo real es
// ilegible, así que se usa un sans pesado — a este tamaño lo único que
// tiene que leerse son las dos letras.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080808",
          color: "#FAFAFA",
          fontSize: 19,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        OG
      </div>
    ),
    { ...size }
  );
}
