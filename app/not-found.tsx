import { TextLink } from "@/components/ui/section";

export const metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <div className="wrap pt-24 pb-32 md:pt-32">
      <p className="eyebrow mb-5">Erro 404</p>
      <h1 className="max-w-3xl text-5xl leading-[0.98] font-semibold tracking-[-0.05em] sm:text-6xl">Página não encontrada.</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">O endereço pode ter mudado ou não existe mais.</p>
      <div className="mt-8 flex flex-wrap gap-x-8">
        <TextLink href="/">Ir para o início</TextLink>
        <TextLink href="/projetos">Ver projetos</TextLink>
      </div>
    </div>
  );
}
