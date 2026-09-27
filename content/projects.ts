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
      "Conjunto de scripts e soluções para padronização e manutenção de computadores corporativos, suporte técnico e rotinas de infraestrutura de redes, desenvolvido no contexto profissional da Paerro Tecnologia.",
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
      "Reúne ferramentas e scripts criados durante a atuação na Paerro Tecnologia. O projeto abrange preparação e manutenção de estações Windows, rotinas de suporte e scripts de infraestrutura de redes para cenários de conectividade dos clientes.",
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
      "Sistema de estudos jurídicos que combina geração automatizada de questões com IA, armazenamento estruturado e uma plataforma web para aplicação de simulados.",
    tier: "principal",
    featured: true,
    about:
      "O projeto reúne um workflow automatizado para geração e organização de questões e uma plataforma web para aplicação dos simulados. As questões estruturadas são armazenadas no Supabase e disponibilizadas na aplicação para estudo e prática.",
    problem:
      "A preparação para a OAB exige prática com questões variadas, organizadas por disciplina, com alternativas, respostas e explicações.",
    solution: [
      "Geração de questões com enunciado, quatro alternativas, resposta correta, explicações, disciplina e dificuldade",
      "Plataforma web para selecionar disciplinas, responder questões, confirmar respostas, consultar explicações e acompanhar a pontuação.",
      "Organização do conteúdo por diferentes disciplinas e níveis de dificuldade para montar diferentes sessões de estudo.",
    ],
    implementation: [
      "Workflow no n8n coordena a geração por IA, valida a estrutura JSON e insere as questões no Supabase.",
      "O fluxo possui controles para reduzir duplicidades e organizar o uso da API de IA.",
      "A aplicação web consulta as questões armazenadas e monta os simulados conforme os filtros selecionados.",
    ],
    links: [{ label: "Abrir site de simulados", href: "https://luiza.eduardoferreira.space" }],
    related: ["paerrotech", "central-dividas"],
  },
  {
    slug: "homelab-esxi",
    title: "HomeLab — Laboratório de infraestrutura",
    type: "Projeto pessoal · Infraestrutura e redes",
    stack: [
      "VMware ESXi",
      "Proxmox",
      "Windows Server",
      "Active Directory",
      "MikroTik",
      "OPNsense",
      "Docker",
      "Linux",
      "Iperius Backup",
      "Zabbix",
      "UniFi",
    ],
    summary:
      "Ambiente de laboratório utilizado para praticar administração de servidores, Active Directory, gerenciamento de arquivos, virtualização, backup, redes e serviços em containers.",
    tier: "principal",
    featured: true,
    about:
      "Laboratório pessoal baseado em VMware ESXi, utilizado para montar e administrar um ambiente de infraestrutura e simular cenários corporativos. O ambiente inclui serviços Windows, gerenciamento de usuários e permissões, políticas de domínio, servidor de arquivos, backup e máquinas virtuais com serviços em Docker.",
    problem:
      "Criar um ambiente controlado para praticar administração de infraestrutura e testar configurações de servidores, permissões, políticas, backup, virtualização e serviços sem depender de um ambiente de produção.",
    solution: [
      "Virtualização com VMware ESXi 6.7, utilizando máquinas virtuais para separar os diferentes serviços do laboratório.",
      "Active Directory para gerenciamento centralizado de usuários, computadores e recursos do domínio.",
      "Servidor de arquivos (File Server) com estrutura de pastas e permissões organizadas por grupos de segurança, evitando atribuir permissões diretamente aos usuários.",
      "GPOs (Group Policy Objects) para aplicar configurações e políticas de forma centralizada às máquinas do domínio.",
      "Iperius Backup configurado para realizar o backup do servidor de arquivos.",
      "Máquina virtual Linux com Docker, utilizada para hospedar serviços e aplicações, incluindo n8n e outros componentes do laboratório.",
      "Infraestrutura de rede utilizando MikroTik, com testes de DHCP, PPPoE, VPN, roteamento, failover e load balance.",
      "Monitoramento e troubleshooting, utilizando o laboratório para reproduzir problemas, testar configurações e validar procedimentos de recuperação.",
      "Monitoramento com Zabbix, acompanhando disponibilidade e métricas dos serviços e máquinas do laboratório.",
      "UniFi Network Server em uma VM dedicada para gerenciamento e experimentação com equipamentos e redes UniFi.",
    ],
    implementation: [
      "Ambiente virtualizado no VMware ESXi 6.7 com máquinas separadas para Active Directory, File Server e serviços Linux.",
      "Active Directory utilizado como base para autenticação e organização dos usuários e computadores do laboratório, com políticas aplicadas por GPO.",
      "File Server estruturado com permissões baseadas em grupos de segurança, permitindo controlar o acesso às pastas sem conceder permissões individualmente aos usuários.",
      "Iperius Backup utilizado para proteger os dados do File Server e permitir testes de recuperação.",
      "VM Linux com Docker utilizada para executar serviços como n8n e outras aplicações de laboratório.",
      "VM dedicada ao Zabbix para monitoramento da infraestrutura e acompanhamento da disponibilidade dos serviços.",
      "VM com UniFi Network Server para gerenciamento e testes de equipamentos e redes UniFi.",
      "Ambiente utilizado também para testes de rede, troubleshooting, recuperação de máquinas virtuais e validação de configurações antes de aplicá-las em outros ambientes.",
    ],
    related: ["paerrotech", "central-dividas"],
  },
  {
    slug: "central-dividas",
    title: "Central de Dívidas",
    type: "Projeto pessoal · Em desenvolvimento",
    stack: ["n8n", "Evolution API", "WhatsApp", "Supabase", "PostgreSQL", "Redis", "OpenAI API"],
    summary:
      "Sistema em desenvolvimento para gerenciamento de clientes, dívidas, parcelas e pagamentos, integrado a um fluxo de atendimento automatizado pelo WhatsApp.",
    tier: "menor",
    about:
      "A Central de Dívidas combina n8n, Evolution API, Supabase, Redis e serviços de IA para estruturar um fluxo de atendimento pelo WhatsApp. O sistema possui uma base para gerenciamento de clientes, dívidas, parcelas, pagamentos e conversas, com diferentes fluxos para atendimento e operações administrativas. O projeto está em desenvolvimento, com a estrutura de dados, integrações e principais fluxos de atendimento já implementados.",
    problem:
      "Centralizar informações de clientes, dívidas, parcelas, pagamentos e histórico de atendimento em uma única estrutura, reduzindo a dependência de mensagens e planilhas para consultar essas informações.",
    solution: [
      "Estrutura de dados para clientes, dívidas, parcelas, pagamentos e histórico de conversas.",
      "Atendimento pelo WhatsApp integrado à Evolution API, incluindo recebimento e processamento de mensagens de voz.",
      "Workflows no n8n para processar mensagens, consultar dados e executar operações sobre a base.",
      "Separação entre fluxos de atendimento e operações administrativas, com controle de acesso aos dados.",
      "Redis utilizado para controlar o processamento de mensagens e evitar respostas fragmentadas durante uma sequência de mensagens.",
    ],
    implementation: [
      "Supabase/PostgreSQL utilizado como base de dados para clientes, dívidas, parcelas, pagamentos, conversas e registros de auditoria.",
      "Evolution API integrada ao n8n para comunicação com o WhatsApp e processamento de mensagens recebidas.",
      "Mensagens de voz processadas a partir do áudio recebido, com transcrição antes do processamento pelo agente.",
      "Redis utilizado como mecanismo de debounce para agrupar mensagens recebidas em sequência antes do processamento.",
      "Agentes separados para consultas de atendimento e operações administrativas, utilizando ferramentas específicas para consultar e alterar os dados.",
      "Controles de acesso e RLS utilizados para restringir o acesso às informações armazenadas no Supabase.",
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
    .map((item) => ({
      item,
      shared: item.stack.filter((tech) => project.stack.includes(tech)).length,
    }))
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
    { title: "Wi-Fi", text: "Projetos e suporte a redes Wi-Fi em ambientes corporativos." },
    { title: "Telefonia IP", text: "Configuração e suporte a telefonia IP e soluções PBX com equipamentos Grandstream." },
    { title: "Monitoramento", text: "Monitoramento de ambientes com Zabbix." },
    { title: "Automação", text: "Padronização de estações e manutenção preventiva com PowerShell." },
    { title: "Acesso remoto", text: "Implantação do RustDesk com servidor próprio, substituindo o AnyDesk." },
    { title: "Segurança física", text: "Controle de acesso com HikCentral." },
  ],
  repo,
};
