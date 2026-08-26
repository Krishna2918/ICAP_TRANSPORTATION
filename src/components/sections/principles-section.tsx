import { principles } from "@/lib/icap-data";

export function PrinciplesSection() {
  return (
    <section className="section-pad bg-bg">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-[var(--shadow-md)] lg:order-1">
            <img
              src="/cargo-load.jpg"
              alt="Cargo loaded on pallets inside an ICAP trailer"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Why ICAP
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-fg md:text-4xl">
              What shippers hire us for
            </h2>
            <ul className="mt-8 space-y-5">
              {principles.slice(0, 4).map((p) => (
                <li
                  key={p.title}
                  className="border-l-[3px] border-primary pl-4"
                >
                  <h3 className="font-display text-base font-semibold text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
