import { Timeline } from "@/components/experience/timeline";
import { PageHeader } from "@/components/ui/section";
import { experience } from "@/content/experience";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Experiência",
  description: "Experiência profissional de Eduardo Ferreira em suporte técnico, redes e infraestrutura de TI.",
  path: "/experiencia",
});

export default function ExperiencePage() {
  return (
    <div className="wrap pt-16 pb-24 md:pt-24 md:pb-32">
      <PageHeader
        eyebrow="Experiência"
        title="Trabalho em contexto."
        intro="Atuação em suporte, operações e infraestrutura, com foco em ambientes corporativos e soluções práticas para o dia a dia."
      />
      <div className="border-t border-line">
        <Timeline items={experience} />
      </div>
    </div>
  );
}
