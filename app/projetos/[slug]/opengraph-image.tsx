import { getProject, projects } from "@/content/projects";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Projeto de Eduardo Ferreira";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  return renderOgImage({
    eyebrow: project?.type ?? "Projeto",
    title: project?.title ?? "Projeto",
    footer: project?.stack.join(" · ") ?? "",
  });
}
