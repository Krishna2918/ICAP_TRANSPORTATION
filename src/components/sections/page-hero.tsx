import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-bg-elevated">
      <div className="container-page py-12 md:py-16">
        {eyebrow && (
          <p className="mb-4 inline-flex rounded-full border border-border bg-bg-subtle px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl md:text-5xl text-balance">
          {title}
        </h1>
        <div className="wave-underline mt-5" />
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {description}
          </p>
        )}
        {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
