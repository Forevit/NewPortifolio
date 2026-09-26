"use client";

import { motion } from "motion/react";
import type { Experience } from "@/content/experience";
import { TechList } from "@/components/ui/section";

type Props = { items: Experience[]; compact?: boolean };

/**
 * Timeline com uma linha vertical contínua (não depende da altura de cada item).
 * Mobile: linha à esquerda. Desktop: período à esquerda, linha no meio, conteúdo à direita.
 */
export function Timeline({ items, compact = false }: Props) {
  const Heading = compact ? "h3" : "h2";
  return (
    <ol className="relative pt-10 md:pt-14">
      <span className="absolute top-12 bottom-6 left-[5px] w-px bg-line md:top-16 md:left-[204px]" aria-hidden="true" />
      <motion.span
        data-reveal=""
        className="absolute top-12 bottom-6 left-[5px] w-px origin-top bg-accent md:top-16 md:left-[204px]"
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />

      {items.map((item, index) => (
        <motion.li
          key={item.slug}
          id={compact ? undefined : item.slug}
          data-reveal=""
          className="relative grid pb-12 pl-9 last:pb-2 md:grid-cols-[180px_1fr] md:gap-x-12 md:pl-0 md:pb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
        >
          <span
            className="absolute top-1.5 left-0 size-[11px] rounded-full bg-accent ring-4 ring-bg md:left-[199px]"
            aria-hidden="true"
          />
          <p className="text-sm font-medium tracking-wide text-muted uppercase md:pt-0.5 md:text-right">{item.period}</p>
          <div className="mt-2 md:mt-0">
            <Heading className="text-2xl font-medium tracking-tight md:text-3xl">{item.company}</Heading>
            <p className="mt-1 text-base text-fg">
              {item.role} <span className="text-muted">· {item.location}</span>
            </p>
            <p className={`mt-4 max-w-3xl leading-relaxed text-muted ${compact ? "text-base" : "text-lg"}`}>
              {item.description}
            </p>
            {!compact && <TechList items={item.tags} className="mt-5" />}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
