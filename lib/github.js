import { GITHUB_USERNAME } from "@/config/portfolio";

/**
 * Fetches public repositories on the server (cached for an hour) and never throws:
 * the page must keep working when GitHub is slow, rate-limited or unreachable.
 */
export async function getRepos(limit = 6) {
  try {
    const headers = { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { repos: [], error: res.status === 403 || res.status === 429 ? "rate-limited" : "unavailable" };

    const data = await res.json();
    const repos = data
      .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, limit)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
        updatedAt: r.pushed_at,
      }));
    return { repos, error: null };
  } catch {
    return { repos: [], error: "unavailable" };
  }
}
