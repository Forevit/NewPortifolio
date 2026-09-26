"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure";
  id?: string;
};

/** Entrada discreta durante o scroll. Respeita prefers-reduced-motion via MotionConfig. */
export function Reveal({ children, className, delay = 0, as = "div", id }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      id={id}
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
