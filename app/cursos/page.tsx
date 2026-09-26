import { ArrowUpRight } from "lucide-react";
import { CourseList } from "@/components/courses/course-list";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/section";
import { courses } from "@/content/courses";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cursos e certificações",
  description: "Cursos e certificações de Eduardo Ferreira em redes, Linux e segurança da informação — Cisco, LinuxTips e Mastercard.",
  path: "/cursos",
});

export default function CoursesPage() {
  const { education } = profile;
  return (
    <div className="wrap pt-16 pb-24 md:pt-24 md:pb-32">
      <PageHeader
        eyebrow="Formação"
        title="Cursos e certificações."
        intro="Aprendizado contínuo em redes, sistemas e segurança."
      />

      {/* A formação acadêmica vem primeiro; os cursos complementam. */}
      <section aria-labelledby="formacao-titulo">
        <Reveal className="grid gap-6 border-t border-line pt-10 md:grid-cols-[280px_1fr] md:gap-12">
          <p className="eyebrow">Formação acadêmica</p>
          <div>
            <h2 id="formacao-titulo" className="text-2xl font-medium tracking-tight md:text-3xl">
              {education.course}
            </h2>
            <p className="mt-2 text-lg text-muted">
              {education.institution} · {education.status.toLowerCase()} · {education.location}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Disciplinas relevantes: {education.subjects.join(", ")}.
            </p>
            <a
              href={education.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-accent-text"
            >
              {education.institution}
              <ArrowUpRight size={16} aria-hidden="true" className="text-accent-text" />
            </a>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="cursos-titulo" className="pt-20 md:pt-28">
        <Reveal className="border-b border-line pb-6">
          <p className="eyebrow mb-3">Formação complementar</p>
          <h2 id="cursos-titulo" className="text-3xl font-medium tracking-tight md:text-5xl">
            Cursos e certificações
          </h2>
        </Reveal>
        <CourseList courses={courses} headingLevel="h3" detailed />
      </section>
    </div>
  );
}
