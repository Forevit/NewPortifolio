import { ContactLinks } from "@/components/contact/contact-links";
import { CourseList } from "@/components/courses/course-list";
import { Timeline } from "@/components/experience/timeline";
import { GithubActivity } from "@/components/github/github-activity";
import { Hero } from "@/components/hero/hero";
import { ProjectList } from "@/components/projects/project-list";
import { TechGroups } from "@/components/technologies/tech-groups";
import { Reveal } from "@/components/ui/reveal";
import { Section, TextLink } from "@/components/ui/section";
import { courses } from "@/content/courses";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({ description: site.description, path: "/" });

// Ordem das seções definida no §8 do levantamento.
export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="sobre" aria-labelledby="sobre-titulo" className="wrap pt-24 md:pt-32">
        <Reveal className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1fr_1.2fr] md:gap-16 md:pt-14">
          <div>
            <p className="eyebrow mb-4">Sobre</p>
            <h2 id="sobre-titulo" className="text-3xl font-medium tracking-tight md:text-5xl">
              Tecnologia que mantém o trabalho em movimento.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted md:text-xl">{profile.homeAbout}</p>
            <div className="mt-6">
              <TextLink href="/sobre">Mais sobre minha trajetória</TextLink>
            </div>
          </div>
        </Reveal>
      </section>

      <Section
        id="projetos"
        eyebrow="Na prática"
        title="Projetos em destaque"
        link={{ href: "/projetos", label: "Todos os projetos" }}
      >
        <ProjectList projects={projects.filter((project) => project.featured)} />
      </Section>

      <Section
        id="experiencia"
        eyebrow="Trabalho em contexto"
        title="Experiência"
        link={{ href: "/experiencia", label: "Ver trajetória" }}
      >
        <Timeline items={experience} compact />
      </Section>

      <Section
        id="tecnologias"
        eyebrow="Ferramentas no dia a dia"
        title="Tecnologias"
        link={{ href: "/sobre#tecnologias", label: "Onde cada uma foi usada" }}
      >
        <TechGroups />
      </Section>

      <Section id="github" eyebrow="Atividade técnica" title="GitHub">
        <GithubActivity limit={3} />
      </Section>

      <Section
        id="cursos"
        eyebrow="Aprendizado contínuo"
        title="Cursos e certificações"
        link={{ href: "/cursos", label: "Ver todos" }}
      >
        <CourseList courses={courses.filter((course) => course.featured)} />
      </Section>

      <section id="contato" aria-labelledby="contato-titulo" className="wrap py-24 md:py-32">
        <Reveal className="mb-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
          <div>
            <p className="eyebrow mb-4">Contato</p>
            <h2 id="contato-titulo" className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Vamos conversar?
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            Se você quer trocar uma ideia sobre suporte, infraestrutura, redes ou automação, pode falar comigo por aqui.
          </p>
        </Reveal>
        <ContactLinks />
      </section>
    </>
  );
}
