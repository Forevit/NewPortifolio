import { experience } from "./experience";
import { projects } from "./projects";

type Technology = {
  name: string;
  /** Termos usados nas stacks de projetos e nas tags de experiência. */
  match?: string[];
};

export type TechnologyGroup = { title: string; items: Technology[] };

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Infraestrutura",
    items: [
      { name: "Windows 10/11", match: ["Windows"] },
      { name: "Windows Server" },
      { name: "Active Directory", match: ["Active Directory"] },
      { name: "GPO" },
      { name: "Linux" },
      { name: "VMware ESXi", match: ["VMware ESXi"] },
      { name: "Proxmox VE" },
      { name: "Hyper-V" },
      { name: "VirtualBox" },
      { name: "Docker" },
      { name: "Zabbix", match: ["Zabbix"] },
      { name: "Backup" },
      { name: "Hardware", match: ["Hardware"] },
    ],
  },
  {
    title: "Redes",
    items: [
      { name: "TCP/IP" },
      { name: "DNS / DHCP" },
      { name: "VLAN / NAT" },
      { name: "MikroTik / RouterOS", match: ["MikroTik", "RouterOS v6/v7"] },
      { name: "VPN / WireGuard", match: ["WireGuard"] },
      { name: "Failover / Load balance", match: ["Redes WAN"] },
      { name: "Cisco" },
    ],
  },
  {
    title: "Automação",
    items: [
      { name: "PowerShell", match: ["PowerShell"] },
      { name: "Python", match: ["Python"] },
      { name: "Bash" },
      { name: "Winget", match: ["Winget"] },
      { name: "Git" },
      { name: "Webhooks" },
      { name: "n8n" },
    ],
  },
  {
    title: "Segurança",
    items: [
      { name: "Fundamentos de Cybersecurity" },
      { name: "Firewall", match: ["Firewall"] },
      { name: "OPNsense / pfSense" },
      { name: "Hardening" },
      { name: "Controle de acesso", match: ["HikCentral"] },
      { name: "Monitoramento", match: ["Zabbix"] },
    ],
  },
  {
    title: "Gestão e plataformas",
    items: [
      { name: "GLPI", match: ["GLPI"] },
      { name: "ITIL" },
      { name: "Gestão de incidentes", match: ["Helpdesk"] },
      { name: "Gestão de ativos" },
      { name: "Microsoft 365" },
      { name: "GitHub" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Evolution API" },
    ],
  },
];

export type TechnologyUsage = { label: string; href: string };

/** Onde cada tecnologia aparece de fato: experiências e projetos (req. §15). */
export function getTechnologyUsage(tech: Technology): TechnologyUsage[] {
  if (!tech.match) return [];
  const terms = new Set(tech.match);
  const jobs = experience
    .filter((item) => item.tags.some((tag) => terms.has(tag)))
    .map((item) => ({ label: item.company, href: `/experiencia#${item.slug}` }));
  const work = projects
    .filter((item) => item.stack.some((tag) => terms.has(tag)))
    .map((item) => ({ label: item.title, href: `/projetos/${item.slug}` }));
  return [...jobs, ...work];
}
