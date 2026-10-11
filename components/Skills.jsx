import { Database, PanelsTopLeft, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/config/portfolio";
import { Container, SectionHeading, Tag } from "./ui";

const icons = { frontend: PanelsTopLeft, backend: Server, database: Database, tools: Wrench };

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeading
          id="skills-title"
          title="Skills and technologies"
          description="Tools I have used in projects and internship work, listed without ratings."
        />
        <dl className="divide-y divide-line border-y border-line">
          {skillGroups.map(({ title, icon, items }) => {
            const Icon = icons[icon];
            return (
              <div key={title} className="grid gap-4 py-7 md:grid-cols-[15rem_1fr] md:items-center">
                <dt className="flex items-center gap-3 font-display text-2xl">
                  <Icon className="size-5 text-accent" aria-hidden />
                  {title}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
