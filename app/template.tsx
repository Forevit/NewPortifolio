"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

// Na primeira carga o conteúdo já vem visível do servidor (melhor LCP e funciona sem JS);
// a transição só acontece em navegações entre páginas.
let firstRender = true;

/** Transição curta entre páginas (§21). */
export default function Template({ children }: { children: React.ReactNode }) {
  const initial = firstRender ? false : { opacity: 0 };
  useEffect(() => {
    firstRender = false;
  }, []);

  return (
    <motion.div initial={initial} animate={{ opacity: 1 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
