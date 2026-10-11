"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, site } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({ resumeHref }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlights the nav item for the section crossing the middle of the viewport.
  useEffect(() => {
    const sections = navItems.map((i) => document.getElementById(i.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || open ? "border-line bg-bg/85 backdrop-blur-xl" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#home" onClick={close} className="font-display text-2xl tracking-tight">
            {site.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn("rounded-full px-3.5 py-2 text-sm transition-colors", active === id ? "text-fg" : "text-muted hover:text-fg")}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {resumeHref && (
              <a href={resumeHref} download className="hidden h-10 items-center gap-2 rounded-full px-4 text-sm text-muted transition-colors hover:text-fg lg:inline-flex">
                <Download className="size-4" aria-hidden />
                Resume
              </a>
            )}
            <a href="#contact" className="hidden h-10 items-center rounded-full bg-accent px-5 text-sm font-medium text-bg transition-[filter] hover:brightness-110 md:inline-flex">
              Let&apos;s talk
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-line md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: backdrop-filter there would trap this fixed overlay inside the header. */}
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 overflow-y-auto bg-bg px-5 pb-10 pt-24 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={close} className="border-b border-line py-4 font-display text-3xl">
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" onClick={close} className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-bg">
              Let&apos;s talk
            </a>
            {resumeHref && (
              <a href={resumeHref} download className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm">
                <Download className="size-4" aria-hidden />
                Resume
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
