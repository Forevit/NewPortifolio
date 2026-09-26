import Image from "next/image";
import type { ProjectImage as ProjectImageType } from "@/content/projects";

type Props = {
  image: ProjectImageType;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** "thumb" recorta o topo de diagramas para ficar legível em tamanho pequeno. */
  variant?: "full" | "thumb";
};

/** Diagramas (fundo claro próprio) ficam sobre uma superfície branca; screenshots ocupam o quadro. */
export function ProjectImage({ image, sizes, className = "", priority = false, variant = "full" }: Props) {
  const diagram = image.kind === "diagram";
  const fit = diagram && variant === "full" ? "object-contain p-4" : diagram ? "object-cover object-top" : "object-cover";
  return (
    <div className={`relative overflow-hidden border border-line ${diagram ? "bg-white" : "bg-surface-2"} ${className}`}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className={fit} />
    </div>
  );
}
