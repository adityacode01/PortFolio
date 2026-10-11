import { about } from "@/config/portfolio";
import { Container } from "./ui";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <h2 id="about-title" className="font-display text-4xl leading-[1.05] tracking-[-0.015em] md:text-5xl">
            From electronics to full-stack development
          </h2>
          <div className="mt-8 max-w-md space-y-5 leading-relaxed text-muted">
            <p>{about.intro}</p>
            <p>{about.approach}</p>
            <p>{about.objective}</p>
          </div>
        </div>

        <ol className="relative space-y-11 border-l border-line pl-8">
          {about.timeline.map((item) => (
            <li key={item.title} className="relative">
              <span aria-hidden className="absolute -left-[2.35rem] top-2 size-2.5 rounded-full border border-accent bg-bg" />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-0.5 text-sm text-accent">{item.org}</p>
              <p className="mt-3 max-w-lg leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
