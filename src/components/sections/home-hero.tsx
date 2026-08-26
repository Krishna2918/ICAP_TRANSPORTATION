import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { company, stats } from "@/lib/icap-data";
import { asset } from "@/lib/assets";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#eaf3fc_55%,#d7e8f8_100%)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-sky)_40%,transparent),transparent_68%)]"
      />

      <div className="container-page relative section-pad !pt-12 !pb-12 md:!pt-16 md:!pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
              North American logistics
            </p>
            <h1 className="font-display text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] text-fg text-balance sm:text-5xl md:text-[3.2rem]">
              {company.tagline}
            </h1>
            <div className="wave-underline mt-5" />
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
              {company.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="min-h-12">
                <Link to="/quote">
                  Request a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 bg-white"
              >
                <Link to="/tracking">Track a shipment</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-[var(--shadow-lg)]">
              <img
                src={asset("/fleet.jpg")}
                alt="ICAP Transport fleet standing in a file — trucks with ICAP on the trailers"
                className="aspect-[16/10] w-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle">
              ICAP Transport Inc. · North American fleet
            </p>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[var(--radius-lg)] border border-border bg-white px-4 py-4 shadow-[var(--shadow-sm)]"
            >
              <dd className="font-display text-2xl font-semibold tracking-tight tabular-nums text-primary sm:text-[1.75rem]">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-fg-subtle">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
