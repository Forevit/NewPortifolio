export const profile = {
  name: "Carlos Eduardo Rodrigues Ferreira",
  shortName: "Eduardo Ferreira",
  role: "Técnico de TI · Suporte e Infraestrutura",
  city: "Fortaleza, Ceará — Brasil",
  email: "contato@eduardoferreira.space",
  github: "https://github.com/Forevit",
  linkedin: "https://www.linkedin.com/in/carloseduardorodriguesferreira/",
  summary: "Técnico de TI com atuação em suporte, infraestrutura, redes, virtualização e automação.",
  about: "Técnico de Suporte em TI com experiência em ambientes corporativos Windows, infraestrutura de redes e monitoramento de sistemas. Atualmente cursando o 7º semestre de Engenharia da Computação na Universidade Ateneu. Focado em evoluir para funções de Sysadmin, Infraestrutura e Automação.",
  homeIntro: "Atuo em suporte e infraestrutura de TI, conectando a operação do dia a dia com redes, sistemas, monitoramento e automação. Fora do trabalho, mantenho um laboratório para testar virtualização, firewalls e redes.",
};

export const experience = [
  { period: "Nov 2024 — atual", role: "Técnico de Suporte Júnior", company: "Paerro Tecnologia", location: "Fortaleza, CE", description: "Suporte técnico presencial e remoto em ambientes de clientes corporativos. Padronização de máquinas com PowerShell, administração de redes MikroTik, configuração de VPN WireGuard, monitoramento com Zabbix, controle de acesso HikCentral e automação de rotinas de manutenção e acesso remoto.", tags: ["Windows", "PowerShell", "MikroTik", "WireGuard", "Zabbix", "HikCentral"] },
  { period: "Jun 2023 — set 2024", role: "Aprendiz de TI", company: "Eletra Energy Solutions", location: "Fortaleza, CE", description: "Suporte técnico interno e helpdesk, manutenção de hardware e software, atendimento de chamados e apoio à infraestrutura de TI. Primeiro contato com ambientes de rede corporativa, Active Directory e gestão de ativos.", tags: ["Helpdesk", "Windows", "Active Directory", "Hardware"] },
];

export const projects = [
  { slug: "padronizacao-de-maquinas", title: "Padronização de máquinas", stack: ["PowerShell", "Windows", "GLPI"], description: "Automação de implantação e padronização de estações corporativas com scripts PowerShell e controle de etapas por registro. Desenvolvido no contexto profissional; detalhes internos não são publicados.", type: "Experiência profissional", href: "" },
  { slug: "preventiva-corporativa", title: "Preventiva corporativa", stack: ["PowerShell", "Automação", "Windows"], description: "Rotina de manutenção preventiva com interface TUI, modo dry-run, execução paralela com runspaces e tratamento seguro de credenciais.", type: "Automação", href: "https://github.com/Forevit/PaerroTech" },
  { slug: "dashboard-pesquisa-uniateneu", title: "Pesquisa UniAteneu", stack: ["Python", "Streamlit", "Dados"], description: "Dashboard interativo para análise de pesquisas de satisfação de alunos do EAD, desenvolvido como projeto de extensão da UniAteneu.", type: "Projeto acadêmico", href: "https://github.com/Forevit/dashboard-pesquisa-uniateneu" },
  { slug: "homelab-esxi", title: "Homelab e virtualização", stack: ["VMware ESXi", "Redes", "Virtualização"], description: "Laboratório pessoal para praticar virtualização, redes internas e serviços de infraestrutura. O ambiente é um espaço contínuo de aprendizado e experimentação.", type: "Laboratório", href: "" },
];

export const courses = [
  { institution: "Cisco", title: "Introduction to Cybersecurity", period: "Concluído", description: "Fundamentos de segurança cibernética, ameaças, proteção de dados e oportunidades na área." },
  { institution: "Cisco", title: "Networking Basics", period: "Concluído", description: "Conceitos fundamentais de redes, dispositivos, endereçamento e comunicação." },
  { institution: "LinuxTips", title: "Linux Essentials", period: "Concluído", description: "Fundamentos do sistema Linux, terminal, arquivos e administração básica." },
  { institution: "Mastercard", title: "Cybersecurity Simulation", period: "Concluído", description: "Simulação prática de atividades e desafios relacionados à segurança cibernética." },
];

export const skillGroups = [
  { title: "Sistemas e redes", items: ["Windows 10/11", "Windows Server", "Active Directory", "GPO", "DNS / DHCP", "TCP/IP", "VLAN / NAT", "MikroTik / RouterOS", "VPN / WireGuard", "Cisco"] },
  { title: "Virtualização e infraestrutura", items: ["VMware ESXi", "VirtualBox", "Proxmox VE", "Hyper-V", "Linux", "OPNsense / pfSense", "Zabbix", "Docker", "Backup"] },
  { title: "Automação e scripting", items: ["PowerShell", "Python", "Bash", "Git", "Webhooks", "Automação de TI"] },
  { title: "Ferramentas e plataformas", items: ["GLPI", "n8n", "GitHub", "Microsoft 365", "Supabase", "PostgreSQL", "Evolution API"] },
  { title: "Segurança e serviços", items: ["Fundamentos de Cybersecurity", "Firewall", "Hardening", "Controle de acesso", "Monitoramento", "ITIL", "Gestão de incidentes", "Gestão de ativos"] },
];
