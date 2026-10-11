import { experience } from "@/config/portfolio";
import { Container, SectionHeading, Tag } from "./ui";

export function Experience() {
  const { role, company, duration, summary, highlights, stack } = experience;

  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeading id="experience-title" title="Experience" />
        <div className="grid gap-8 rounded-3xl border border-line bg-white/[0.025] p-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-10">
          <div>
            <h3 className="font-display text-3xl leading-tight md:text-4xl">{role}</h3>
            <p className="mt-2 text-lg text-accent">{company}</p>
            <p className="mt-5 inline-block rounded-full border border-line px-3 py-1 text-sm text-muted">{duration}</p>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{summary}</p>
            {highlights.length > 0 && (
              <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-muted marker:text-accent">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            {stack.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used during the internship">
                {stack.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
