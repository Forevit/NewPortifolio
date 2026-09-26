import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/sobre", "/experiencia", "/projetos", "/cursos", "/contato"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
  const projectPages = projects.map((project) => ({
    url: absoluteUrl(`/projetos/${project.slug}`),
    changeFrequency: "yearly" as const,
    priority: project.tier === "principal" ? 0.6 : 0.5,
  }));
  return [...pages, ...projectPages];
}
