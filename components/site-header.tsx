"use client";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";

const links = [{ href: "/sobre", label: "Sobre" }, { href: "/experiencia", label: "Experiência" }, { href: "/projetos", label: "Projetos" }, { href: "/cursos", label: "Cursos" }, { href: "/contato", label: "Contato" }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return <header className="site-header"><div className="nav-shell"><Link className="wordmark" href="/" onClick={() => setOpen(false)}>EDUARDO FERREIRA<span>·</span></Link><button className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Navegação principal">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<button className="theme-toggle" aria-label={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`} onClick={toggleTheme}>{theme === "dark" ? <Sun /> : <Moon />}<span className="theme-word">Tema</span></button></nav></div></header>;
}
