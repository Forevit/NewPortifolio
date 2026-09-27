import { ArrowUpRight } from "lucide-react";
import { Timeline } from "@/components/experience/timeline";
import { TechGroups } from "@/components/technologies/tech-groups";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader, TechList, TextLink } from "@/components/ui/section";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Sobre",
  description: "Conheça a trajetória, formação e áreas de atuação de Eduardo Ferreira em infraestrutura, redes e suporte de TI.",
  path: "/sobre",
});

function Block({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-12 md:py-16">
      <Reveal className="grid gap-6 md:grid-cols-[280px_1fr] md:gap-12">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </Reveal>
    </section>
  );
}

export default function AboutPage() {
  const { education } = profile;
  return (
    <div className="wrap pt-16 pb-24 md:pt-24 md:pb-32">
      <PageHeader eyebrow="Sobre" title="Tecnologia com atenção à operação." intro={profile.about} />

      <Block eyebrow="Formação" title={education.course}>
        <p className="text-lg">
          {education.institution} <span className="text-muted">· {education.location}</span>
        </p>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          {education.status}. Disciplinas relevantes: {education.subjects.join(", ")}.
        </p>
      </Block>

      <Block eyebrow="Foco profissional" title="Infraestrutura e redes">
        <p className="text-lg leading-relaxed text-muted">{profile.focus}</p>
        <TechList items={profile.areas} size="text-base" className="mt-6 gap-y-1 !text-fg" />
      </Block>

      <Block eyebrow="Trajetória" title="Onde já trabalhei">
        <div className="-mt-10 md:-mt-14">
          <Timeline items={experience} compact />
        </div>
        <div className="mt-4">
          <TextLink href="/experiencia">Experiência completa</TextLink>
        </div>
      </Block>

      <section id="tecnologias" aria-labelledby="tecnologias-titulo" className="border-t border-line pt-12 md:pt-16">
        <Reveal className="pb-4">
          <p className="eyebrow mb-3">Tecnologias</p>
          <h2 id="tecnologias-titulo" className="text-2xl font-medium tracking-tight md:text-3xl">
            Ferramentas por contexto
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Organizadas pela área em que são usadas. Quando existe um projeto ou experiência real por trás, o vínculo aparece
            abaixo da tecnologia.
          </p>
        </Reveal>
        <TechGroups detailed />
      </section>

      <Block eyebrow="Fora do trabalho" title="Aprendizado em laboratório">
        <p className="text-lg leading-relaxed text-muted">{profile.lab}</p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 items-center gap-2.5 text-sm font-medium hover:text-accent-text"
        >
          <GithubIcon size={17} />
          Acompanhe no GitHub
          <ArrowUpRight size={16} aria-hidden="true" className="text-accent-text" />
        </a>
      </Block>
    </div>
  );
}
