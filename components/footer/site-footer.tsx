import Link from "next/link";
import { profile } from "@/content/profile";
import { developer } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.shortName}
        </p>
        <p>Fortaleza, Ceará · Brasil</p>
        <nav aria-label="Rodapé" className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fg">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
            LinkedIn
          </a>
          <Link href="/contato" className="hover:text-fg">
            Contato
          </Link>
        </nav>
      </div>
      <p className="wrap pb-8 text-xs text-muted">
        Desenvolvido por {developer.name} · Fullstack
      </p>
    </footer>
  );
}
