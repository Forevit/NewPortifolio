import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { GithubIcon } from "@/components/ui/brand-icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden">
      <div className="wrap grid gap-12 pt-14 pb-16 md:min-h-[640px] md:content-center md:py-24 xl:min-h-[720px]">
        <div className="relative z-10 max-w-2xl">
          <div className="hero-rise">
            <p className="eyebrow mb-6">
              {profile.role} <span className="text-muted">· Fortaleza, CE</span>
            </p>
          </div>
          <div className="hero-rise [animation-delay:60ms]">
            <h1
              id="hero-titulo"
              className="text-[clamp(2.9rem,8.6vw,5.75rem)] leading-[0.95] font-semibold tracking-[-0.055em]"
            >
              Infraestrutura, <span className="text-muted">redes e</span> tecnologia.
            </h1>
          </div>
          <div className="hero-rise [animation-delay:120ms]">
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.homeIntro}</p>
          </div>
          <div className="hero-rise mt-10 flex flex-wrap gap-3 [animation-delay:180ms]">
            <Link
              href="/projetos"
              className="inline-flex min-h-12 items-center gap-2.5 bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Ver projetos
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 border border-line px-5 text-sm font-semibold transition-colors hover:border-muted"
            >
              <GithubIcon size={17} />
              GitHub
            </a>
          </div>
        </div>

        {/*
          Foto recortada (fundo transparente) integrada ao fundo do site, nos dois temas.
          Desktop: lado direito em altura total, com névoa na borda esquerda e na base.
          Mobile: abaixo dos CTAs, com névoa na base e nas laterais dos ombros.
        */}
        <figure className="hero-rise relative m-0 aspect-square w-full max-w-sm justify-self-center [animation-delay:120ms] md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[42%] md:max-w-[640px]">
          <Image
            src={profile.photoCutout}
            alt={`Fotografia de ${profile.shortName}`}
            fill
            priority
            sizes="(min-width: 768px) 42vw, 90vw"
            className="object-contain object-bottom [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,black_70%,transparent),linear-gradient(to_right,transparent,black_14%,black_86%,transparent)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_30%),linear-gradient(to_top,transparent_0%,black_28%)]"
          />
        </figure>
      </div>
    </section>
  );
}
