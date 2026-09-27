export type Experience = {
  slug: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    slug: "paerro-tecnologia",
    period: "Nov 2024 — atual",
    role: "Técnico de Suporte Júnior",
    company: "Paerro Tecnologia",
    location: "Fortaleza, CE",
    description:
      "Suporte técnico presencial e remoto em ambientes de clientes corporativos. Padronização de máquinas com PowerShell, administração de redes MikroTik, configuração de VPN WireGuard, monitoramento com Zabbix, controle de acesso HikCentral e automação de rotinas de manutenção e acesso remoto.",
    tags: ["Windows", "PowerShell", "MikroTik", "WireGuard", "Zabbix", "HikCentral"],
  },
  {
    slug: "eletra-energy-solutions",
    period: "Jun 2023 — set 2024",
    role: "Aprendiz de TI",
    company: "Eletra Energy Solutions",
    location: "Fortaleza, CE",
    description:
      "Suporte técnico interno e helpdesk, manutenção de hardware e software, atendimento de chamados e apoio à infraestrutura de TI. Primeiro contato com ambientes de rede corporativa, Active Directory e gestão de ativos.",
    tags: ["Helpdesk", "Windows", "Active Directory", "Hardware"],
  },
];
