import { ArrowDown, Github } from "lucide-react";
import { heroStack, site } from "@/config/portfolio";
import { ButtonLink, Container, Tag } from "./ui";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 md:pt-36">
      <div aria-hidden className="hero-light absolute inset-0 -z-10" />
      <div aria-hidden className="hero-grid absolute inset-0 -z-10" />

      <Container className="grid items-center gap-16 pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:pb-32">
        <div>
          {site.availability.show && (
            <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-1.5 pl-3 pr-4 text-sm text-muted">
              <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
              {site.availability.label}
            </p>
          )}

          <h1
            id="hero-title"
            className="rise mt-8 max-w-3xl font-display text-[clamp(3rem,7.4vw,6rem)] leading-[0.98] tracking-[-0.025em]"
            style={{ "--d": "90ms" }}
          >
            I build digital products that solve real problems.
          </h1>

          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted" style={{ "--d": "180ms" }}>
            I am {site.name}, a full-stack developer building modern, useful web applications, from the interface to the API to the database behind it.
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ "--d": "270ms" }}>
            <ButtonLink href="#projects">Explore my work</ButtonLink>
            <ButtonLink href={site.github} variant="secondary" external>
              <Github className="size-4" aria-hidden />
              View GitHub
            </ButtonLink>
          </div>

          <ul className="rise mt-12 flex flex-wrap gap-2" aria-label="Core technologies" style={{ "--d": "360ms" }}>
            {heroStack.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-fg lg:flex"
      >
        Scroll
        <ArrowDown className="size-4" aria-hidden />
      </a>
    </section>
  );
}
