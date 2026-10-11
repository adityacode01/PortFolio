import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/config/portfolio";
import { Container } from "./ui";
import { Year } from "./Year";

const iconLink = "grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-white/25 hover:text-fg";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex items-center gap-2">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconLink}>
            <Github className="size-4" aria-hidden />
          </a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
              <Linkedin className="size-4" aria-hidden />
            </a>
          )}
          {site.email && (
            <a href={`mailto:${site.email}`} aria-label="Email" className={iconLink}>
              <Mail className="size-4" aria-hidden />
            </a>
          )}
          <a href="#home" aria-label="Back to top" className={`${iconLink} ml-2`}>
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </Container>
      <Container className="mt-8">
        <p className="text-sm text-muted">
          &copy; <Year /> {site.name}
        </p>
      </Container>
    </footer>
  );
}
