

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Diagramas com fundo próprio são exibidos sobre uma superfície clara. */
  kind?: "diagram" | "screenshot";
};

export type Project = {
  slug: string;
  title: string;
  /** Contexto do projeto: profissional, acadêmico, laboratório... */
  type: string;
  stack: string[];
  summary: string;
  /** "principal" tem página completa; "menor" tem página curta. */
  tier: "principal" | "menor";
  featured?: boolean;
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  about?: string;
  problem?: string;
  solution?: string[];
  implementation?: string[];
  links?: { label: string; href: string }[];
  related?: string[];
};

const repo = "https://github.com/Forevit/PaerroTech";

export const projects: Project[] = [
  {
    slug: "paerrotech",
    title: "PaerroTech — Suporte e infraestrutura de TI",
    type: "Experiência profissional · Infraestrutura",
    stack: ["PowerShell", "Windows", "Winget", "GLPI", "Active Directory", "MikroTik", "RouterOS"],
    summary:
      "Conjunto de scripts e soluções para padronização e manutenção de computadores corporativos, suporte técnico e infraestrutura de redes, desenvolvido no contexto profissional da Paerro Tecnologia.",
    tier: "principal",
    featured: true,
    cover: {
      src: "/projects/padronizacao-fluxograma.svg",
      alt: "Fluxograma de um dos módulos de padronização de estações Windows do PaerroTech",
      width: 680,
      height: 1180,
      kind: "diagram",
    },
    about:
      "Reúne ferramentas e scripts criados durante a atuação na Paerro Tecnologia. O projeto abrange preparação e manutenção de estações Windows, além de scripts MikroTik para cenários de conectividade dos clientes.",
    problem:
      "A preparação e a manutenção de computadores envolvem etapas repetitivas, como configuração do Windows, instalação de programas e drivers, atualizações e registro dos procedimentos. Organizar essas rotinas ajuda a tornar o atendimento mais consistente.",
    solution: [
      "Scripts PowerShell para padronização de estações Windows, instalação de softwares via Winget e configuração do GLPI Agent",
      "Rotinas de atualização do Windows, instalação de drivers e manutenção preventiva",
      "Scripts MikroTik para failover entre links, load balance e configuração de rotas",
    ],
    implementation: [
      "Etapas de preparação podem continuar após reinicializações; o processo registra atividades em logs",
      "Tratamento de erros nas rotinas PowerShell e distribuição do Paerro-Setup.exe para uso da equipe",
      "Scripts organizados por módulos no repositório público PaerroTech",
    ],
    links: [{ label: "Repositório PaerroTech", href: repo }],
    related: ["simulados-oab-fgv", "homelab-esxi"],
  },
  {
    slug: "simulados-oab-fgv",
    title: "Gerador de questões e simulados OAB/FGV",
    type: "Projeto pessoal · Educação · Desenvolvimento web",
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "n8n", "OpenAI API"],
    summary:
      "Sistema de estudos jurídicos que gera questões no estilo OAB/FGV com inteligência artificial e as disponibiliza em uma plataforma web de simulados.",
    tier: "principal",
    featured: true,
    about:
      "O projeto reúne um workflow de geração de questões e um site de simulados. As questões estruturadas são armazenadas no Supabase e apresentadas aos estudantes na plataforma.",
    problem:
      "A preparação para a OAB exige prática com questões variadas, organizadas por disciplina, com alternativas, respostas e explicações.",
    solution: [
      "Geração de questões com enunciado, quatro alternativas, resposta correta, explicações, disciplina e dificuldade",
      "Site para escolher disciplinas, responder questões, conferir explicações e acompanhar a pontuação",
      "Conteúdo organizado para disciplinas como Direito Civil, Direito Penal, Processo Civil e Direito do Trabalho",
    ],
    implementation: [
      "Workflow no n8n organiza a geração por IA, valida os dados estruturados em JSON e insere as questões no Supabase",
      "O fluxo inclui controles para evitar duplicidades e administrar o uso da API",
      "A aplicação web consulta as questões armazenadas para montar os simulados",
    ],
    links: [{ label: "Abrir site de simulados", href: "https://luiza.eduardoferreira.space" }],
    related: ["paerrotech", "dividas-luiza"],
  },
  {
    slug: "homelab-esxi",
    title: "HomeLab — Laboratório de infraestrutura",
    type: "Projeto pessoal · Infraestrutura e redes",
    stack: ["VMware ESXi", "Proxmox", "MikroTik", "OPNsense", "Docker", "Windows Server", "Linux"],
    summary:
      "Laboratório pessoal para estudar e testar infraestrutura, redes, virtualização, servidores e segurança em um ambiente controlado.",
    tier: "principal",
    featured: true,
    about:
      "O HomeLab permite experimentar tecnologias e simular cenários de infraestrutura sem depender de ambientes de produção. Os estudos incluem virtualização, redes, firewalls e serviços Windows e Linux.",
    problem:
      "Praticar configurações e investigar falhas em um ambiente controlado permite aprender com testes sem interferir em serviços de produção.",
    solution: [
      "Estudos de virtualização com VMware ESXi e Proxmox, incluindo máquinas Windows e Linux",
      "Testes de rede com equipamentos MikroTik, RouterOS, PPPoE, DHCP, VPN, failover e load balance",
      "Experimentação com OPNsense, Active Directory, File Server e serviços em Docker",
      "Práticas de backup, monitoramento, recuperação de máquinas virtuais e troubleshooting",
    ],
    implementation: [
      "Ambiente físico com processador Intel Core i5-10400, 64 GB de RAM e aproximadamente 3 TB de armazenamento",
      "Laboratório de rede com equipamentos MikroTik RB4011, RB750Gr3 e hEX, além de nobreak",
      "Serviços e integrações testados incluem n8n, Evolution API, PostgreSQL, Redis e monitoramento de conectividade",
    ],
    related: ["paerrotech", "dividas-luiza"],
  },
  {
    slug: "dividas-luiza",
    title: "Central de Dívidas — Luiza",
    type: "Projeto pessoal · Em desenvolvimento",
    stack: ["n8n", "Evolution API", "WhatsApp", "Supabase", "PostgreSQL", "Redis", "OpenAI API"],
    summary:
      "Sistema em desenvolvimento para organizar clientes, dívidas, parcelas e pagamentos e integrar o atendimento pelo WhatsApp.",
    tier: "menor",
    about:
      "A Central de Dívidas combina workflows no n8n, integração com WhatsApp e uma base Supabase para apoiar consultas e operações administrativas. Os recursos descritos estão em desenvolvimento ou planejados.",
    problem:
      "O sistema busca centralizar informações de clientes, dívidas, parcelas, pagamentos e histórico de atendimento que poderiam ficar dispersas entre mensagens e planilhas.",
    solution: [
      "Estrutura para cadastro e consulta de clientes, dívidas, parcelas e pagamentos",
      "Atendimento pelo WhatsApp para consultas e envio de informações, incluindo mensagens de voz",
      "Agentes separados para consultas públicas e operações administrativas",
    ],
    implementation: [
      "Integração planejada com Evolution API, n8n, Supabase, Redis e serviços de IA",
      "Controles de acesso e separação entre dados e operações públicas e administrativas",
      "Dados reais de clientes, credenciais e URLs privadas não fazem parte da demonstração pública",
    ],
    related: ["simulados-oab-fgv", "homelab-esxi"],
  },
  {
    slug: "dashboard-pesquisa-uniateneu",
    title: "Pesquisa UniAteneu",
    type: "Projeto acadêmico",
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "MySQL"],
    summary:
      "Dashboard interativo para análise de pesquisas de satisfação de alunos do EAD, desenvolvido como projeto de extensão da UniAteneu.",
    tier: "principal",
    about:
      "Plataforma para centralizar, analisar e visualizar os dados das pesquisas de satisfação acadêmica da instituição, como apoio à tomada de decisão.",
    problem:
      "Centralizar a leitura dos formulários de pesquisa e transformar as respostas em indicadores que ajudem a identificar problemas e tendências.",
    solution: [
      "Filtros por curso, turma, período e disciplina",
      "Indicadores de satisfação média, taxa de participação e avaliação por professor e disciplina",
      "Gráficos interativos, tabelas dinâmicas e heatmaps",
    ],
    implementation: [
      "Leitura de arquivos CSV com tratamento e padronização dos dados",
      "Processamento com Python e Pandas; interface em Streamlit",
      "Visualizações com Plotly",
    ],
    // TODO(cliente): adicionar screenshots do dashboard (sem dados identificáveis de alunos).
    links: [{ label: "Ver no GitHub", href: "https://github.com/Forevit/dashboard-pesquisa-uniateneu" }],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Relacionados explícitos primeiro; completa com projetos que compartilham tecnologias. */
export function getRelatedProjects(project: Project, limit = 2) {
  const explicit = (project.related ?? [])
    .map(getProject)
    .filter((item): item is Project => Boolean(item));
  const byStack = projects
    .filter((item) => item.slug !== project.slug && !explicit.includes(item))
    .map((item) => ({ item, shared: item.stack.filter((tech) => project.stack.includes(tech)).length }))
    .filter(({ shared }) => shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .map(({ item }) => item);
  return [...explicit, ...byStack].slice(0, limit);
}

/** Atuação na Paerro Tecnologia apresentada sem expor informações internas (req. §14). */
export const paerroHighlight = {
  company: "Paerro Tecnologia",
  intro:
    "Na Paerro Tecnologia, o trabalho acontece em ambientes de clientes corporativos. Parte das soluções criadas no dia a dia foi organizada no repositório público PaerroTech — scripts de padronização, manutenção, redes e acesso remoto usados pela equipe de suporte.",
  areas: [
    { title: "Suporte", text: "Atendimento presencial e remoto em clientes corporativos." },
    { title: "Redes", text: "Administração de redes MikroTik, failover, load balance e VPN WireGuard." },
    { title: "Monitoramento", text: "Monitoramento de ambientes com Zabbix." },
    { title: "Automação", text: "Padronização de estações e manutenção preventiva com PowerShell." },
    { title: "Acesso remoto", text: "Implantação do RustDesk com servidor próprio, substituindo o AnyDesk." },
    { title: "Segurança física", text: "Controle de acesso com HikCentral." },
  ],
  repo,
};
