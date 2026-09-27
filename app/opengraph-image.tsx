import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Eduardo Ferreira — Infraestrutura, redes e tecnologia";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Técnico de TI · Fortaleza, CE",
    title: "Infraestrutura, redes e tecnologia.",
    footer: "eduardoferreira.space",
  });
}
