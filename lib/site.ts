import type { Metadata } from "next";

export const site = {
  url: "https://eduardoferreira.space",
  name: "Eduardo Ferreira",
  title: "Eduardo Ferreira | Infraestrutura, redes e tecnologia",
  description:
    "Técnico de TI em Fortaleza, com atuação em infraestrutura, redes, suporte, virtualização e automação.",
  locale: "pt_BR",
  gaId: "G-B4YV9LLZKP",
} as const;

/** Crédito de desenvolvimento do site (SEO, humans.txt e rodapé). */
export const developer = {
  name: "Guilherme Martins Bezerra",
  role: "Desenvolvedor Fullstack",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

type PageMetadataInput = {
  title?: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Rota da imagem OG; por padrão a de `app/opengraph-image.tsx`. */
  image?: string;
};

/**
 * Metadata padrão de cada página: title, description, canonical, Open Graph e Twitter.
 * As imagens OG são geradas pelas rotas `opengraph-image` do App Router.
 */
export function pageMetadata({ title, description, path, type = "website", image = "/opengraph-image" }: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  const images = [{ url: image, width: 1200, height: 630, alt: fullTitle }];
  return {
    title: title ?? { absolute: site.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
