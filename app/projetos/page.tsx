import type { Metadata } from "next";
import { GithubProjects } from "@/components/github-projects";
import { ProjectList } from "@/components/project-list";
import { SectionHeading } from "@/components/section-heading";
export const metadata: Metadata = { title: "Projetos", description: "Projetos e experiências práticas em infraestrutura, suporte e automação de TI." };
export default function ProjectsPage() { return <div className="page wrap"><SectionHeading eyebrow="PROJETOS" title="Soluções feitas na prática." intro="Projetos e experiências técnicas organizados pelo contexto de uso. Em trabalhos profissionais, os detalhes públicos respeitam os limites de confidencialidade." /><ProjectList /><section className="subsection github-subsection"><div className="section-bar"><div><p className="eyebrow">REPOSITÓRIOS PÚBLICOS</p><h2>Atividade no GitHub</h2></div></div><GithubProjects limit={8} /></section></div>; }
