import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectImage } from "@/components/projects/project-image";
import { Reveal } from "@/components/ui/reveal";
import { TechList } from "@/components/ui/section";
import { getProject, getRelatedProjects, projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { pageMetadata, site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projetos/${project.slug}`,
    type: "article",
    image: `/projetos/${project.slug}/opengraph-image`,
  });
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-4 border-t border-line py-10 md:grid-cols-[240px_1fr] md:gap-12 md:py-14">
      <h2 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h2>
      <div className="max-w-3xl min-w-0 text-lg leading-relaxed text-muted">{children}</div>
    </Reveal>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[18px_1fr] gap-2">
          <span className="mt-[0.7em] h-px w-3 bg-accent-text" aria-hidden="true" />
          <span className="min-w-0 [overflow-wrap:anywhere]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const url = `${site.url}/projetos/${project.slug}`;
  const repoLink = project.links?.find((link) => link.href.includes("github.com"));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": repoLink ? "SoftwareSourceCode" : "CreativeWork",
    name: project.title,
    description: project.summary,
    url,
    inLanguage: "pt-BR",
    keywords: project.stack.join(", "),
    author: { "@type": "Person", name: profile.name, url: site.url },
    ...(repoLink ? { codeRepository: repoLink.href } : {}),
    ...(project.cover ? { image: `${site.url}${project.cover.src}` } : {}),
  };

  return (
    <article className="wrap pt-12 pb-24 md:pt-16 md:pb-32">
      <Link
        href="/projetos"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-accent-text"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Todos os projetos
      </Link>

      <Reveal className="max-w-4xl pt-10 pb-12 md:pt-14 md:pb-16">
        <p className="eyebrow mb-5">{project.type}</p>
        <h1 className="text-5xl leading-[0.98] font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">{project.title}</h1>
        <TechList items={project.stack} size="text-base" className="mt-6" />
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted">{project.summary}</p>
        {project.links && project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2.5 border border-line px-5 text-sm font-semibold transition-colors hover:border-muted"
              >
                {link.label}
                <ArrowUpRight size={16} aria-hidden="true" className="text-accent-text" />
              </a>
            ))}
          </div>
        )}
      </Reveal>

      {project.about && (
        <Block title="Sobre o projeto">
          <p>{project.about}</p>
        </Block>
      )}

      {project.cover && (
        <Reveal as="figure" className="border-t border-line py-10 md:py-14">
          <ProjectImage
            image={project.cover}
            priority
            sizes="(min-width: 1240px) 1140px, 100vw"
            className={project.cover.kind === "diagram" ? "mx-auto aspect-[680/1180] max-h-[80vh] w-full max-w-xl" : "aspect-video w-full"}
          />
          <figcaption className="mt-4 text-sm text-muted">{project.cover.alt}</figcaption>
        </Reveal>
      )}

      {project.problem && (
        <Block title="Problema">
          <p>{project.problem}</p>
        </Block>
      )}

      {project.solution && (
        <Block title="Solução">
          <Bullets items={project.solution} />
        </Block>
      )}

      {project.implementation && (
        <Block title="Implementação">
          <Bullets items={project.implementation} />
        </Block>
      )}

      {project.tier === "principal" && (
        <Block title="Tecnologias utilizadas">
          <TechList items={project.stack} size="text-lg" />
        </Block>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <Reveal as="section" className="border-t border-line py-10 md:py-14">
          <h2 className="mb-8 text-xl font-medium tracking-tight md:text-2xl">Imagens</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <ProjectImage image={image} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-video w-full" />
                <figcaption className="mt-3 text-sm text-muted">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      )}

      {related.length > 0 && (
        <section aria-labelledby="relacionados" className="border-t border-line pt-10 md:pt-14">
          <h2 id="relacionados" className="eyebrow mb-2">
            Projetos relacionados
          </h2>
          <ul>
            {related.map((item) => (
              <li key={item.slug} className="border-b border-line">
                <Link href={`/projetos/${item.slug}`} className="group flex items-center justify-between gap-6 py-6">
                  <div>
                    <span className="block font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-text">
                      {item.title}
                    </span>
                    <TechList items={item.stack} className="mt-1.5" />
                  </div>
                  <ArrowRight size={20} aria-hidden="true" className="shrink-0 text-accent-text transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </article>
  );
}
