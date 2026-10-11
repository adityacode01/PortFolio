import fs from "node:fs";
import path from "node:path";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GitHubSection } from "@/components/GitHubSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

// Resume buttons only appear when public/resume.pdf actually exists, so there is never a dead download.
const resumeHref = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf")) ? "/resume.pdf" : null;

export default function Home() {
  return (
    <>
      <Navbar resumeHref={resumeHref} />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <GitHubSection />
        <Contact resumeHref={resumeHref} />
      </main>
      <Footer />
    </>
  );
}
