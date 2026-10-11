import Image from "next/image";
import { Check, ExternalLink, Github } from "lucide-react";
import { projects } from "@/config/portfolio";
import { ButtonLink, Container, SectionHeading, Tag } from "./ui";
import { FluxPreview } from "./FluxPreview";

function ProjectLinks({ project }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {project.liveUrl && (
        <ButtonLink href={project.liveUrl} external>
          <ExternalLink className="size-4" aria-hidden />
          Live demo
        </ButtonLink>
      )}
      {project.repoUrl && (
        <ButtonLink href={project.repoUrl} variant="secondary" external>
          <Github className="size-4" aria-hidden />
          View source
        </ButtonLink>
      )}
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-white/[0.025]" aria-labelledby="featured-title">
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-line p-5 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r">
          {project.image ? (
            <figure className="m-0">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1600}
                height={1000}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="h-auto w-full rounded-xl border border-line"
              />
            </figure>
          ) : (
            <FluxPreview />
          )}
        </div>

        <div className="flex flex-col p-6 sm:p-9 lg:col-span-5">
          <p className="text-sm text-muted">{project.kind}</p>
          <h3 id="featured-title" className="mt-2 font-display text-5xl tracking-tight md:text-6xl">
            {project.name}
          </h3>
          <p className="mt-4 text-lg leading-relaxed">{project.summary}</p>
          <p className="mt-4 leading-relaxed text-muted">{project.problem}</p>

          <ul className="mt-7 space-y-3">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                {f}
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used in Flux">
            {project.stack.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectRow({ project }) {
  return (
    <li className="grid gap-4 py-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
      <div>
        <h3 className="font-display text-3xl">{project.name}</h3>
        <p className="mt-1 text-sm text-muted">{project.kind}</p>
      </div>
      <div>
        <p className="leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${project.name}`}>
          {project.stack.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </li>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeading
          id="projects-title"
          title="Selected projects"
          description="Flux is the one to start with: a full-stack app that covers authentication, data modelling, analytics and deployment."
        />
        {featured && <FeaturedProject project={featured} />}
        {others.length > 0 && (
          <ul className="mt-14 divide-y divide-line border-y border-line" aria-label="More projects">
            {others.map((p) => (
              <ProjectRow key={p.name} project={p} />
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
