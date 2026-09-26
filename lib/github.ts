export type Repository = { name: string; description: string | null; html_url: string; language: string | null; updated_at: string; stargazers_count: number; fork: boolean };

export async function getRepositories(): Promise<Repository[]> {
  try {
    const response = await fetch("https://api.github.com/users/Forevit/repos?per_page=100&sort=updated", {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "EduardoFerreiraPortfolio" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    const repos = (await response.json()) as Repository[];
    // Keep the portfolio focused on public work that supports the infrastructure/IT story.
    const featured = new Set(["PaerroTech", "dashboard-pesquisa-uniateneu"]);
    return repos.filter((repo) => !repo.fork && featured.has(repo.name)).sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at));
  } catch { return []; }
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { month: "short", year: "numeric" }).format(new Date(date));
}
