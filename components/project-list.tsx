import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
export function ProjectList({ limit }: { limit?: number }) { return <div className="project-list">{projects.slice(0, limit).map((project) => <article className="project-row" key={project.slug}><Link className="project-link" href={`/projetos/${project.slug}`}><div className="project-main"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><div className="inline-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><p className="project-description">{project.description}</p></div><span className="row-arrow" aria-hidden="true"><ArrowUpRight /></span></Link></article>)}</div>; }
