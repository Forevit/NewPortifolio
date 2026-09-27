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
    period: "nov/2024 — atual",
    role: "Técnico de Suporte Júnior",
    company: "Paerro Tecnologia",
    location: "Fortaleza, CE",
    description:
      "Atendimento técnico presencial e remoto, suporte a usuários e manutenção de ambientes Windows. Atuação em infraestrutura de TI, redes e Wi-Fi, configuração e suporte a equipamentos MikroTik, VPN WireGuard, telefonia IP e soluções PBX com equipamentos Grandstream, monitoramento com Zabbix, CFTV e sistemas de segurança HikCentral. Também atuo com infraestrutura física, manutenção e organização de equipamentos e ambientes de TI, além do desenvolvimento de scripts PowerShell para automatização de rotinas de suporte e manutenção.",
    tags: ["Windows", "PowerShell", "MikroTik", "WireGuard", "Zabbix", "HikCentral", "Wi-Fi", "Telefonia IP", "Grandstream", "CFTV"],
  },
  {
    slug: "eletra-energy-solutions",
    period: "jun/2023 — set/2024",
    role: "Aprendiz de TI",
    company: "Eletra Energy Solutions",
    location: "Fortaleza, CE",
    description:
      "Atuação no suporte de TI em ambiente industrial, realizando atendimento a usuários, manutenção de hardware e software, acompanhamento de chamados e apoio à infraestrutura. Participação na resolução de problemas de estações de trabalho e sistemas utilizados na operação, incluindo diagnóstico e correção de problemas de comunicação entre equipamentos e servidores.",
    tags: ["Helpdesk", "Windows", "Active Directory", "Hardware"],
  },
];
