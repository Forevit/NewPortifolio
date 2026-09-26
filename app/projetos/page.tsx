import { ArrowUpRight } from "lucide-react";
import { GithubActivity } from "@/components/github/github-activity";
import { ProjectList } from "@/components/projects/project-list";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/section";
import { paerroHighlight, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projetos",
  description:
    "Projetos práticos de Eduardo Ferreira em infraestrutura, redes e automação: padronização de estações, manutenção preventiva, failover MikroTik e mais.",
  path: "/projetos",
});

function SectionTitle({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <Reveal className="border-b border-line pb-6">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-medium tracking-tight md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

export default function ProjectsPage() {
  return (
    <div className="wrap pt-16 pb-24 md:pt-24 md:pb-32">
      <PageHeader
        eyebrow="Projetos"
        title="Soluções feitas na prática."
        intro="Projetos e experiências técnicas organizados pelo contexto de uso. Em trabalhos profissionais, os detalhes públicos respeitam os limites de confidencialidade."
      />

      {/* Destaque primeiro: a atuação na Paerro Tecnologia é a primeira coisa que o visitante vê. */}
      <section aria-labelledby="paerro-titulo">
        <Reveal className="grid gap-6 border-t border-b border-line pt-10 pb-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="eyebrow mb-3">Em destaque</p>
            <h2 id="paerro-titulo" className="text-3xl font-medium tracking-tight md:text-5xl">
              {paerroHighlight.company}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted">{paerroHighlight.intro}</p>
            <a
              href={paerroHighlight.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-accent-text"
            >
              Repositório PaerroTech
              <ArrowUpRight size={16} aria-hidden="true" className="text-accent-text" />
            </a>
          </div>
        </Reveal>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-3">
          {paerroHighlight.areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.04} className="border-b border-line py-6 sm:pr-8">
              <dt className="font-display text-lg font-medium">{area.title}</dt>
              <dd className="mt-1.5 text-base text-muted">{area.text}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section aria-labelledby="lista-titulo" className="pt-24 md:pt-32">
        <SectionTitle id="lista-titulo" eyebrow="Na prática" title="Todos os projetos" />
        <ProjectList projects={projects} headingLevel="h3" />
      </section>

      <section aria-labelledby="github-titulo" className="pt-24 md:pt-32">
        <SectionTitle id="github-titulo" eyebrow="Repositórios públicos" title="Atividade no GitHub" />
        <GithubActivity limit={8} />
      </section>
    </div>
  );
}
