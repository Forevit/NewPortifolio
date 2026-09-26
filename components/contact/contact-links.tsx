import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const channels = [
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={20} aria-hidden="true" />, external: false },
  { label: "LinkedIn", value: "Eduardo Ferreira", href: profile.linkedin, icon: <LinkedinIcon size={19} />, external: true },
  { label: "GitHub", value: `github.com/${profile.githubUser}`, href: profile.github, icon: <GithubIcon size={19} />, external: true },
];

/** Canais de contato (§18): usados na Home e em /contato. */
export function ContactLinks() {
  return (
    <ul className="border-t border-line">
      {channels.map((channel) => (
        <li key={channel.label} className="border-b border-line">
          <a
            href={channel.href}
            {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="group grid grid-cols-[28px_1fr_auto] items-center gap-4 py-6 md:grid-cols-[28px_160px_1fr_auto] md:py-7"
          >
            <span className="text-accent-text">{channel.icon}</span>
            <span className="text-sm font-medium tracking-[0.12em] text-muted uppercase">{channel.label}</span>
            <span className="col-span-2 col-start-2 row-start-2 font-display text-lg tracking-tight [overflow-wrap:anywhere] transition-colors group-hover:text-accent-text sm:text-xl md:col-span-1 md:col-start-3 md:row-start-1 md:text-2xl">
              {channel.value}
            </span>
            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="col-start-3 row-start-1 text-muted transition-colors group-hover:text-accent-text md:col-start-4"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
