export const navLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/projetos", label: "Projetos" },
  { href: "/cursos", label: "Cursos" },
  { href: "/contato", label: "Contato" },
];

export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
