export type Course = {
  institution: string;
  title: string;
  description: string;
  period: string;
  /** Exibido na Home. */
  featured?: boolean;
  skills?: string[];
  certificateUrl?: string;
  url?: string;
};

// TODO(cliente): informar data de conclusão, link do certificado (Credly/instituição) e competências de cada curso.
export const courses: Course[] = [
  {
    institution: "Cisco",
    title: "Networking Basics",
    period: "Concluído",
    description: "Conceitos fundamentais de redes, dispositivos, endereçamento e comunicação.",
    featured: true,
  },
  {
    institution: "Cisco",
    title: "Introduction to Cybersecurity",
    period: "Concluído",
    description: "Fundamentos de segurança cibernética, ameaças, proteção de dados e oportunidades na área.",
    featured: true,
  },
  {
    institution: "LinuxTips",
    title: "Linux Essentials",
    period: "Concluído",
    description: "Fundamentos do sistema Linux, terminal, arquivos e administração básica.",
    featured: true,
  },
  {
    institution: "Mastercard",
    title: "Cybersecurity Simulation",
    period: "Concluído",
    description: "Simulação prática de atividades e desafios relacionados à segurança cibernética.",
  },
];
