import { processSteps } from "@/lib/icap-data";

export function ProcessSection() {
  return (
    <section className="section-pad bg-bg-subtle">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            How it works
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-fg md:text-4xl">
            From quote to POD without the chase
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6"
            >
              <span className="font-display text-sm font-bold tabular-nums text-primary">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-fg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
