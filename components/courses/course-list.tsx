import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/content/courses";
import { Reveal } from "@/components/ui/reveal";

type Props = { courses: Course[]; headingLevel?: "h2" | "h3"; detailed?: boolean };

/** Lista editorial separada por linhas — sem cards (§17). */
export function CourseList({ courses, headingLevel: Heading = "h3", detailed = false }: Props) {
  return (
    <ul>
      {courses.map((course, index) => (
        <Reveal
          as="li"
          key={course.title}
          delay={index * 0.04}
          className="grid gap-x-10 gap-y-2 border-b border-line py-7 md:grid-cols-[200px_1fr_auto] md:py-8"
        >
          <p className="text-sm font-medium tracking-wide text-accent-text uppercase md:pt-1.5">{course.institution}</p>
          <div>
            <Heading className="text-xl font-medium tracking-tight md:text-2xl">{course.title}</Heading>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{course.description}</p>
            {detailed && course.skills && course.skills.length > 0 && (
              <p className="mt-3 text-sm text-muted">
                <span className="text-fg">Competências:</span> {course.skills.join(" · ")}
              </p>
            )}
            {detailed && (course.certificateUrl || course.url) && (
              <div className="mt-3 flex flex-wrap gap-x-6">
                {course.certificateUrl && <ExternalLink href={course.certificateUrl}>Ver certificado</ExternalLink>}
                {course.url && <ExternalLink href={course.url}>Página do curso</ExternalLink>}
              </div>
            )}
          </div>
          <p className="text-sm text-muted md:pt-1.5 md:text-right">{course.period}</p>
        </Reveal>
      ))}
    </ul>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium hover:text-accent-text"
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" className="text-accent-text" />
    </a>
  );
}
