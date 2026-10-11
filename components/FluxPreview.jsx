import { cn } from "@/lib/utils";

const stats = ["Income", "Expenses", "Savings"];
const budgets = [
  { label: "Food", width: "72%" },
  { label: "Transport", width: "38%" },
  { label: "Shopping", width: "94%", over: true },
];

/**
 * A drawn layout of the Flux dashboard. It contains no real data and is captioned as an
 * illustration. Set `image` on the project in config/portfolio.js to show a real screenshot instead.
 */
export function FluxPreview() {
  return (
    <figure className="m-0">
      <div aria-hidden className="grid grid-cols-[3rem_1fr] gap-3 rounded-xl border border-line bg-bg p-3 sm:gap-4 sm:p-4">
        <div className="flex flex-col gap-3 rounded-lg bg-white/[0.03] p-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={cn("h-2 rounded-full bg-white/10", i === 0 && "bg-accent/70")} />
          ))}
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s} className="rounded-lg border border-line p-3">
                <p className="text-[0.7rem] text-muted sm:text-xs">{s}</p>
                <span className="mt-3 block h-2.5 w-3/4 rounded-full bg-white/15" />
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-line p-3">
            <svg viewBox="0 0 400 120" className="h-28 w-full" preserveAspectRatio="none" fill="none">
              <path d="M0 92 C40 82 72 30 122 44 S204 98 254 62 S334 22 400 36 V120 H0Z" fill="var(--accent)" fillOpacity="0.14" />
              <path d="M0 92 C40 82 72 30 122 44 S204 98 254 62 S334 22 400 36" stroke="var(--accent)" strokeWidth="2" />
              <path d="M0 104 C60 100 110 88 170 94 S280 80 400 84" stroke="#fff" strokeOpacity="0.3" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="space-y-3 rounded-lg border border-line p-3">
            {budgets.map((b) => (
              <div key={b.label}>
                <p className="mb-1.5 text-[0.7rem] text-muted sm:text-xs">{b.label}</p>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className={cn("h-full rounded-full", b.over ? "bg-rose-400" : "bg-accent")} style={{ width: b.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">Illustrated layout of the Flux dashboard.</figcaption>
    </figure>
  );
}
