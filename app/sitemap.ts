import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/sobre", "/experiencia", "/projetos", "/cursos", "/contato"]; return [...routes.map((route) => ({ url: `https://eduardoferreira.space${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })), ...projects.map((project) => ({ url: `https://eduardoferreira.space/projetos/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 }))]; }
