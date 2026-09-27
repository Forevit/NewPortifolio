import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  link?: { href: string; label: string };
  children: React.ReactNode;
  className?: string;
};

/** Seção da Home: rótulo, título e link para a página detalhada, separados do conteúdo por uma linha. */
export function Section({ id, eyebrow, title, link, children, className = "" }: SectionProps) {
  const headingId = id ? `${id}-titulo` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`wrap pt-24 md:pt-32 ${className}`}>
      <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-line pb-6">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 id={headingId} className="text-3xl font-medium tracking-tight md:text-5xl">
            {title}
          </h2>
        </div>
        {link && <TextLink href={link.href}>{link.label}</TextLink>}
      </Reveal>
      {children}
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent-text"
    >
      {children}
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="text-accent-text transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/** Cabeçalho das páginas internas (h1). */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="max-w-4xl pb-14 md:pb-20">
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h1 className="text-5xl leading-[0.98] font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}

type TechListProps = { items: string[]; size?: string; className?: string };

/** Lista inline "PowerShell · Windows · GLPI"; o separador acompanha o item para não iniciar linha. */
export function TechList({ items, size = "text-sm", className = "" }: TechListProps) {
  return (
    <ul className={`flex flex-wrap gap-x-2 text-muted ${size} ${className}`}>
      {items.map((item, index) => (
        <li key={item} className="whitespace-nowrap">
          {item}
          {index < items.length - 1 && (
            <span className="ml-2 text-accent-text" aria-hidden="true">
              ·
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
