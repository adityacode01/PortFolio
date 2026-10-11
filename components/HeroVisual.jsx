import { cn } from "@/lib/utils";

const bars = [38, 62, 46, 78, 54, 88, 70];
const models = ["User", "Transaction", "Category", "Budget"];

function Layer({ className, delay, title, meta, children }) {
  return (
    <div
      className={cn("rise absolute w-[84%] rounded-2xl border border-line bg-white/[0.04] p-4 shadow-[0_30px_80px_-40px_#000] backdrop-blur-md", className)}
      style={{ "--d": `${delay}ms` }}
    >
      <div className="mb-3 flex items-center justify-between text-xs text-muted">
        <span className="font-medium text-fg">{title}</span>
        <span>{meta}</span>
      </div>
      {children}
    </div>
  );
}

/** Decorative: the three layers of a full-stack app, drawn from Flux's real routes and tables. */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto h-[26rem] w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgba(124,131,255,0.16),transparent)]" />

      <Layer className="left-0 top-0" delay={420} title="Interface" meta="React, Next.js">
        <div className="flex h-14 items-end gap-1.5">
          {bars.map((h, i) => (
            <span key={i} className="flex-1 rounded-sm bg-accent/30" style={{ height: `${h}%` }} />
          ))}
        </div>
      </Layer>

      <Layer className="left-[8%] top-[9.5rem]" delay={560} title="API" meta="Node.js">
        <p className="font-mono text-[0.78rem] leading-6 text-muted">
          <span className="text-accent">POST</span> /api/transactions
          <br />
          <span className="text-accent">GET</span>&nbsp;&nbsp;/api/analytics
        </p>
      </Layer>

      <Layer className="left-[16%] top-[19rem]" delay={700} title="Database" meta="PostgreSQL">
        <div className="flex flex-wrap gap-1.5">
          {models.map((m) => (
            <span key={m} className="rounded-md border border-line px-2 py-1 font-mono text-[0.72rem] text-muted">
              {m}
            </span>
          ))}
        </div>
      </Layer>
    </div>
  );
}
