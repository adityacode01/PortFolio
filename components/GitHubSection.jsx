import { Suspense } from "react";
import { Github, Star } from "lucide-react";
import { site } from "@/config/portfolio";
import { getRepos } from "@/lib/github";
import { ButtonLink, Container, SectionHeading } from "./ui";
import { Skeleton } from "./Skeleton";

const formatDate = (iso) => new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(iso));

function Fallback({ message }) {
  return (
    <div className="rounded-2xl border border-line p-7">
      <p className="max-w-lg text-muted">{message}</p>
      <ButtonLink href={site.github} variant="secondary" external className="mt-5">
        <Github className="size-4" aria-hidden />
        Open GitHub profile
      </ButtonLink>
    </div>
  );
}

async function Repos() {
  const { repos, error } = await getRepos();

  if (error === "rate-limited") return <Fallback message="GitHub is limiting requests right now, so the repository list is unavailable. The full list is on my profile." />;
  if (error) return <Fallback message="GitHub did not respond just now, so the repository list is unavailable. The full list is on my profile." />;
  if (repos.length === 0) return <Fallback message="There are no public repositories to list yet. Follow along on GitHub for new work." />;

  return (
    <>
      <ul className="divide-y divide-line border-y border-line">
        {repos.map((r) => (
          <li key={r.id}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-baseline md:gap-10"
            >
              <div>
                <h3 className="text-lg font-medium transition-colors group-hover:text-accent">
                  {r.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </h3>
                {r.description && <p className="mt-1 max-w-2xl leading-relaxed text-muted">{r.description}</p>}
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
                {r.language && <span>{r.language}</span>}
                {r.stars > 0 && (
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="size-3.5" aria-hidden />
                    {r.stars}
                    <span className="sr-only"> stars</span>
                  </span>
                )}
                <span>Updated {formatDate(r.updatedAt)}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <ButtonLink href={site.github} variant="secondary" external className="mt-8">
        <Github className="size-4" aria-hidden />
        All repositories on GitHub
      </ButtonLink>
    </>
  );
}

function ReposSkeleton() {
  return (
    <div aria-hidden className="divide-y divide-line border-y border-line">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-3 py-6">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-full max-w-xl" />
        </div>
      ))}
    </div>
  );
}

export function GitHubSection() {
  return (
    <section id="github" aria-labelledby="github-title" className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeading id="github-title" title="Recent repositories" description="My latest public work, loaded from GitHub." />
        <Suspense fallback={<ReposSkeleton />}>
          <Repos />
        </Suspense>
      </Container>
    </section>
  );
}
