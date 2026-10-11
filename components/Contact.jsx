import { Download, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/config/portfolio";
import { ButtonLink, Container } from "./ui";

export function Contact({ resumeHref }) {
  // Without a public email, GitHub becomes the primary way to reach out.
  const hasEmail = Boolean(site.email);

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-36">
      <Container>
        <h2 id="contact-title" className="max-w-4xl font-display text-[clamp(2.6rem,6.2vw,5rem)] leading-[1.02] tracking-[-0.02em]">
          Have a project in mind? Let&apos;s build something meaningful.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I am open to software development internships and full-time roles, and happy to talk about a project or an idea.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {hasEmail ? (
            <ButtonLink href={`mailto:${site.email}?subject=Hello%20${encodeURIComponent(site.name.split(" ")[0])}`}>
              <Mail className="size-4" aria-hidden />
              Email me
            </ButtonLink>
          ) : (
            <ButtonLink href={site.github} external>
              <Github className="size-4" aria-hidden />
              Message me on GitHub
            </ButtonLink>
          )}
          {site.linkedin && (
            <ButtonLink href={site.linkedin} variant="secondary" external>
              <Linkedin className="size-4" aria-hidden />
              LinkedIn
            </ButtonLink>
          )}
          {hasEmail && (
            <ButtonLink href={site.github} variant="secondary" external>
              <Github className="size-4" aria-hidden />
              GitHub
            </ButtonLink>
          )}
          {resumeHref && (
            <ButtonLink href={resumeHref} variant="secondary" download>
              <Download className="size-4" aria-hidden />
              Download resume
            </ButtonLink>
          )}
        </div>

        {hasEmail && (
          <p className="mt-8 text-muted">
            Or write to{" "}
            <a href={`mailto:${site.email}`} className="text-fg underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-accent">
              {site.email}
            </a>
          </p>
        )}
      </Container>
    </section>
  );
}
