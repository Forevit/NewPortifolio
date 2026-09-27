/**
 * Projetos do portfólio.
 *
 * Regra de conteúdo: apenas fatos reais — texto já publicado no portfólio ou
 * documentado nos READMEs públicos do GitHub (github.com/Forevit).
 * Campos opcionais sem conteúdo não são renderizados. Itens marcados com
 * TODO(cliente) dependem de informação que só o Eduardo pode fornecer.
 */

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
    slug: "padronizacao-de-maquinas",
    title: "Padronização de máquinas",
    type: "Experiência profissional · Paerro Tecnologia",
    stack: ["PowerShell", "Windows", "GLPI", "Winget", "Active Directory"],
    summary:
      "Automação de implantação e padronização de estações corporativas com scripts PowerShell e controle de etapas por registro. Desenvolvido no contexto profissional; detalhes internos do ambiente não são publicados.",
    tier: "principal",
    featured: true,
    cover: {
      src: "/projects/padronizacao-fluxograma.svg",
      alt: "Fluxograma das etapas do script de padronização de estações Windows",
      width: 680,
      height: 1180,
      kind: "diagram",
    },
    about:
      "Script de padronização automática de máquinas Windows, utilizado para agilizar a entrega de equipamentos e garantir conformidade com o ambiente da empresa.",
    problem:
      "A preparação manual de cada estação é demorada e sujeita a erros. O objetivo foi reduzir o tempo de setup e garantir que todo equipamento entregue siga o mesmo padrão.",
    solution: [
      "Definição de hostname e ingresso automático no domínio",
      "Criação e configuração do administrador local",
      "Instalação de softwares essenciais via Winget (Chrome, Firefox, Java, AnyDesk, Adobe Reader, WinRAR)",
      "Instalação do GLPI Agent e do Microsoft Office 2021",
      "Instalação de drivers por fabricante (Dell e Lenovo)",
      "Windows Update executado em segundo plano",
    ],
    implementation: [
      "Execução por etapas com retomada automática após reinicialização",
      "Sistema de logs detalhado em C:\\Users\\Public\\Documents\\Logs\\Padronizacao",
      "Tratamento de erro com try/catch em cada etapa",
      "Distribuído também como executável (Paerro-Setup.exe) para uso pela equipe",
    ],
    links: [{ label: "Ver no GitHub", href: `${repo}/tree/main/PadronizacaoMaquinas` }],
    related: ["preventiva-corporativa", "failover-mikrotik"],
  },
  {
    slug: "preventiva-corporativa",
    title: "Preventiva corporativa",
    type: "Automação · Paerro Tecnologia",
    stack: ["PowerShell", "Windows", "Winget", "GLPI"],
    summary:
      "Rotina de manutenção preventiva com interface TUI, modo dry-run, execução paralela com runspaces e tratamento seguro de credenciais.",
    tier: "principal",
    featured: true,
    about:
      "Scripts responsáveis por manter as máquinas corporativas atualizadas, limpas e operando com bom desempenho, executados periodicamente pela equipe de suporte.",
    problem:
      "Reduzir falhas e incidentes, melhorar o desempenho das máquinas, manter atualizações de segurança em dia e diminuir o volume de chamados.",
    solution: [
      "Windows Update automático",
      "Atualização de drivers e de softwares via Winget",
      "Limpeza de disco e de arquivos temporários",
      "Remoção de perfis de usuário antigos",
      "Verificação de softwares essenciais e atualização do Java",
      "Ajustes básicos de sistema",
    ],
    implementation: [
      "Etapas que podem ser ignoradas individualmente por parâmetro",
      "Logs com status, ações realizadas e erros em C:\\Users\\Public\\Documents\\Logs\\Preventiva",
      "Scripts não armazenam credenciais em texto plano",
      "Recomendação de execução fora do horário crítico, como administrador",
    ],
    links: [{ label: "Ver no GitHub", href: `${repo}/tree/main/Preventivas` }],
    related: ["padronizacao-de-maquinas"],
  },
  {
    slug: "failover-mikrotik",
    title: "Failover e load balance MikroTik",
    type: "Redes · Paerro Tecnologia",
    stack: ["MikroTik", "RouterOS v6/v7", "Redes WAN"],
    summary:
      "Scripts para padronizar configurações críticas de roteadores MikroTik: rotas estáticas via DHCP, failover entre links de internet e balanceamento de carga.",
    tier: "menor",
    featured: true,
    about:
      "Módulo do repositório PaerroTech com scripts para cenários de infraestrutura WAN, compatíveis com RouterOS v6 e v7.",
    solution: [
      "Criação automática de rotas default a partir do gateway DHCP",
      "Failover: monitora múltiplos links e troca automaticamente em caso de falha",
      "Failover + load balance: distribui o tráfego entre links ativos com fallback automático",
    ],
    implementation: [
      "Aplicação via terminal (Winbox, WebFig ou SSH)",
      "Checklist antes da execução: versão do RouterOS, interfaces WAN/LAN e backup da configuração atual",
    ],
    links: [{ label: "Ver no GitHub", href: `${repo}/tree/main/ScriptsMikrotik` }],
    related: ["homelab-esxi"],
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
      "Leitura automática de arquivos CSV com tratamento e padronização dos dados",
      "Processamento com Python e Pandas; interface em Streamlit",
      "Visualizações com Plotly; planilhas com OpenPyXL",
    ],
    // TODO(cliente): adicionar screenshots do dashboard (sem dados identificáveis de alunos).
    links: [{ label: "Ver no GitHub", href: "https://github.com/Forevit/dashboard-pesquisa-uniateneu" }],
  },
  {
    slug: "homelab-esxi",
    title: "Homelab e virtualização",
    type: "Laboratório",
    stack: ["VMware ESXi", "Redes", "Virtualização", "Firewall"],
    summary:
      "Laboratório pessoal para praticar virtualização, redes internas e serviços de infraestrutura. O ambiente é um espaço contínuo de aprendizado e experimentação.",
    tier: "menor",
    about:
      "Ambiente para explorar virtualização com ESXi, redes internas, firewalls e automação com PowerShell e Python — testando em ambiente controlado o que será aplicado com segurança em produção.",
    // TODO(cliente): topologia/diagrama do homelab e lista de serviços em execução.
    related: ["failover-mikrotik"],
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
