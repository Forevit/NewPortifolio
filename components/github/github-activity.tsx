import { ArrowUpRight } from "lucide-react";
import { formatDay, formatMonth, getGithubActivity } from "@/lib/github";
import { GithubIcon } from "@/components/ui/brand-icons";

/** Evidência complementar da atividade técnica — lista editorial, não dashboard (§16). */
export async function GithubActivity({ limit = 4 }: { limit?: number }) {
  const { profileUrl, publicRepos, lastActivity, repos } = await getGithubActivity(limit);

  return (
    <div>
      {(publicRepos !== null || lastActivity) && (
        <p className="pt-6 text-sm text-muted">
          {publicRepos !== null && <>{publicRepos} repositórios públicos</>}
          {publicRepos !== null && lastActivity && <span className="mx-2 text-accent-text">·</span>}
          {lastActivity && <>Última atividade em {formatDay(lastActivity)}</>}
        </p>
      )}

      {repos.length > 0 ? (
        <ul className="mt-2">
          {repos.map((repo) => (
            <li key={repo.name} className="border-b border-line">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-6 py-6"
              >
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-medium tracking-tight break-words transition-colors group-hover:text-accent-text">
                    {repo.name}
                  </h3>
                  <p className="mt-1.5 text-base text-muted">{repo.description ?? "Sem descrição."}</p>
                  <p className="mt-2 text-sm text-muted">
                    {repo.language && (
                      <>
                        {repo.language}
                        <span className="mx-2 text-accent-text">·</span>
                      </>
                    )}
                    Atualizado em {formatMonth(repo.pushed_at)}
                  </p>
                </div>
                <ArrowUpRight size={20} aria-hidden="true" className="mt-1 shrink-0 text-accent-text" />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="border-b border-line py-6 text-base text-muted">
          Não foi possível carregar os repositórios agora. Eles continuam disponíveis diretamente no GitHub.
        </p>
      )}

      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        className="group mt-4 inline-flex min-h-11 items-center gap-2.5 text-sm font-medium transition-colors hover:text-accent-text"
      >
        <GithubIcon size={17} />
        Ver perfil completo no GitHub
        <ArrowUpRight size={16} aria-hidden="true" className="text-accent-text" />
      </a>
    </div>
  );
}
