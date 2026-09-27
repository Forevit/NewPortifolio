import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Reveal } from "@/components/ui/reveal";
import { TechList } from "@/components/ui/section";
import { ProjectImage } from "./project-image";

type Props = { projects: Project[]; headingLevel?: "h2" | "h3" };

export function ProjectList({ projects, headingLevel: Heading = "h3" }: Props) {
  return (
    <ul>
      {projects.map((project, index) => (
        <Reveal as="li" key={project.slug} delay={index * 0.04} className="border-b border-line">
          <Link
            href={`/projetos/${project.slug}`}
            className="group flex items-start justify-between gap-6 py-8 md:py-10 lg:items-center lg:gap-10"
          >
            <div className="max-w-3xl min-w-0 flex-1">
              <p className="mb-3 text-xs font-medium tracking-[0.12em] text-muted uppercase">{project.type}</p>
              <Heading className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-text sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
                {project.title}
              </Heading>
              <TechList items={project.stack} className="mt-3" />
              <p className="mt-4 text-base leading-relaxed text-muted">{project.summary}</p>
              {project.cover && (
                <ProjectImage
                  image={project.cover}
                  variant="thumb"
                  sizes="100vw"
                  className="mt-6 aspect-[4/3] w-full max-w-md lg:hidden"
                />
              )}
            </div>

            {/* Desktop: a prévia aparece na área livre à direita da linha, sem cobrir o texto. */}
            {project.cover && (
              <div
                aria-hidden="true"
                className="ml-auto hidden shrink-0 translate-x-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 lg:block"
              >
                <ProjectImage image={{ ...project.cover, alt: "" }} variant="thumb" sizes="224px" className="aspect-[4/3] w-56" />
              </div>
            )}

            <ArrowRight
              size={22}
              aria-hidden="true"
              className="mt-10 shrink-0 text-accent-text transition-transform group-hover:translate-x-1 sm:mt-12 lg:mt-0"
            />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
