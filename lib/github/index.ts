const USER = "Forevit";
const API = "https://api.github.com";

/**
 * Repositórios públicos que não devem aparecer no portfólio
 * (README de perfil, site antigo e projetos pessoais fora do contexto de TI).
 * A lista é dinâmica: qualquer repositório novo aparece automaticamente.
 */
const HIDDEN = new Set(["Forevit", "Home", "NewPortifolio", "CasoMaster-Flavio", "AnaliseApostas365", "Albummer"]);

/** Exibidos primeiro, quando existirem. */
const PINNED = ["PaerroTech", "dashboard-pesquisa-uniateneu"];

export type Repository = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

export type GithubActivity = {
  profileUrl: string;
  publicRepos: number | null;
  lastActivity: string | null;
  repos: Repository[];
};

async function githubFetch<T>(path: string): Promise<T | null> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "EduardoFerreiraPortfolio",
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  try {
    const response = await fetch(`${API}${path}`, {
      headers,
      next: { revalidate: 3600 },
      // Evita que uma API lenta trave o build ou a renderização.
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function getGithubActivity(limit = 6): Promise<GithubActivity> {
  const [user, allRepos] = await Promise.all([
    githubFetch<{ public_repos: number }>(`/users/${USER}`),
    githubFetch<Repository[]>(`/users/${USER}/repos?per_page=100&sort=pushed`),
  ]);

  const repos = (allRepos ?? [])
    .filter((repo) => !repo.fork && !repo.archived && !HIDDEN.has(repo.name))
    .sort((a, b) => {
      const pinA = PINNED.indexOf(a.name);
      const pinB = PINNED.indexOf(b.name);
      if (pinA !== pinB) return (pinA === -1 ? Infinity : pinA) - (pinB === -1 ? Infinity : pinB);
      return Date.parse(b.pushed_at) - Date.parse(a.pushed_at);
    });

  const lastActivity = repos.reduce<string | null>(
    (latest, repo) => (!latest || Date.parse(repo.pushed_at) > Date.parse(latest) ? repo.pushed_at : latest),
    null,
  );

  return {
    profileUrl: `https://github.com/${USER}`,
    publicRepos: user?.public_repos ?? null,
    lastActivity,
    repos: repos.slice(0, limit),
  };
}

export function formatMonth(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { month: "short", year: "numeric" }).format(new Date(date));
}

export function formatDay(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}
