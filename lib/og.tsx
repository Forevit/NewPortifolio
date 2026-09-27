import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Imagem Open Graph na identidade do site: fundo escuro, tipografia grande e acento azul. */
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 5, color: "#6b9bff", textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 28 ? 76 : 92, fontWeight: 700, lineHeight: 1, letterSpacing: -3, maxWidth: 1000 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #262626",
            paddingTop: 28,
            fontSize: 26,
            color: "#a1a1aa",
          }}
        >
          <span>{footer}</span>
          <span style={{ color: "#f5f5f5", letterSpacing: 3 }}>EDUARDO FERREIRA</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
