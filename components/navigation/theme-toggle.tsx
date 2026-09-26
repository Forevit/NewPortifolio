"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const nextLabel = theme === "dark" ? "claro" : "escuro";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Ativar tema ${nextLabel}`}
      className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2.5 text-muted transition-colors hover:text-fg"
    >
      {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      {withLabel && <span className="text-base">Tema {nextLabel}</span>}
    </button>
  );
}
