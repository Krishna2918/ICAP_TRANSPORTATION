import { corridors } from "@/lib/icap-data";
import { asset } from "@/lib/assets";

export function CoverageSection() {
  return (
    <section className="section-pad bg-bg-ink text-fg-on-ink">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">
              Network
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] md:text-4xl">
              Capacity that shows up
            </h2>
            <p className="mt-4 max-w-lg text-fg-on-ink-muted">
              Built for the lanes that keep your business moving. From
              time-sensitive freight to planned network volume, ICAP brings the
              equipment, visibility, and dispatch support to move with
              confidence — across Canada, the U.S., and Mexico.
            </p>
            <div className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-border-ink">
              <img
                src={asset("/warehouse.jpg")}
                alt="ICAP distribution center and container yard"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <ul className="space-y-3">
            {corridors.map((c, i) => (
              <li
                key={c.name}
                className="rounded-[var(--radius-lg)] border border-border-ink bg-bg-ink-elevated px-5 py-4"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-sm font-semibold tabular-nums text-sky">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-medium text-fg-on-ink">{c.name}</h3>
                    <p className="mt-1 text-sm text-fg-on-ink-muted">
                      {c.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
