import { cn } from "@/lib/utils";

export function Container({ className, ...props }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)} {...props} />;
}

export function SectionHeading({ id, title, description, className }) {
  return (
    <div className={cn("mb-12 max-w-2xl md:mb-16", className)}>
      <h2 id={id} className="font-display text-4xl leading-[1.05] tracking-[-0.015em] md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

const styles = {
  primary: "bg-accent text-bg hover:brightness-110",
  secondary: "border border-line bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.07]",
  ghost: "text-muted hover:text-fg",
};

/** Anchor styled as a button. External links open in a new tab and say so to screen readers. */
export function ButtonLink({ href, variant = "primary", external = false, className, children, ...props }) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200 active:scale-[0.98]",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

export function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
