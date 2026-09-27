import Link from "next/link";
import { getTechnologyUsage, technologyGroups } from "@/content/technologies";
import { Reveal } from "@/components/ui/reveal";

/**
 * Tecnologias organizadas por contexto, sem níveis ou porcentagens (§15).
 * `detailed` mostra onde cada tecnologia foi usada de fato (experiências e projetos).
 */
export function TechGroups({ detailed = false }: { detailed?: boolean }) {
  return (
    <div>
      {technologyGroups.map((group) => (
        <Reveal
          key={group.title}
          className="grid gap-3 border-b border-line py-7 md:grid-cols-[240px_1fr] md:gap-10 md:py-9"
        >
          <h3 className="text-lg font-medium tracking-tight">{group.title}</h3>

          {detailed ? (
            <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((tech) => {
                const usage = getTechnologyUsage(tech);
                return (
                  <li key={tech.name}>
                    <span className="text-base">{tech.name}</span>
                    {usage.length > 0 && (
                      <p className="mt-0.5 text-sm text-muted">
                        Usado em{" "}
                        {usage.map((item, index) => (
                          <span key={item.href}>
                            {index > 0 && ", "}
                            <Link href={item.href} className="underline decoration-line underline-offset-4 hover:text-accent-text hover:decoration-accent-text">
                              {item.label}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-base leading-relaxed text-muted">
              {group.items.map((tech) => tech.name).join(" · ")}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
