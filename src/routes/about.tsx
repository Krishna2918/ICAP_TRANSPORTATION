import { createFileRoute, Link } from "@tanstack/react-router";
import { industries, principles, stats } from "@/lib/icap-data";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | ICAP Transport Inc." },
      {
        name: "description",
        content:
          "About ICAP Transport Inc. — a North American trucking and logistics partner focused on reliability, visibility, and accountable service.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About ICAP"
        title="Built for shippers who measure reliability"
        description="ICAP Transport Inc. is a full-service transportation and logistics company serving North America with asset-based truckload, specialty equipment, cross-border, and warehouse support."
        actions={
          <>
            <Button asChild>
              <Link to="/quote">Work with us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact the team</Link>
            </Button>
          </>
        }
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-fg md:text-3xl">
              Our approach
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-fg-muted md:text-base">
              <p>
                We close the gap between capacity and communication. Every load
                has a named owner inside ICAP — from quote through proof of
                delivery.
              </p>
              <p>
                Our model combines owned equipment on core corridors with vetted
                capacity for overflow and specialized gear. Timeliness, safety,
                and customer service are the operating standard, not marketing
                lines.
              </p>
              <p>
                Headquartered in the Greater Toronto Area, we move freight
                across Canada, the United States, and Mexico with a focus on
                industrial, retail, automotive, and temperature-controlled
                lanes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-5 shadow-[var(--shadow-sm)]"
              >
                <p className="font-display text-2xl font-semibold tabular-nums tracking-tight text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-fg-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad !pt-0">
        <div className="container-page">
          <div className="rounded-[var(--radius-2xl)] border border-border bg-bg-subtle p-6 sm:p-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
              What shippers hire us for
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <li
                  key={p.title}
                  className="rounded-[var(--radius-lg)] border border-border bg-bg-elevated p-5"
                >
                  <h3 className="font-display text-base font-semibold text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-0">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
            Industries we serve
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <li
                key={industry}
                className="rounded-[var(--radius-md)] border border-border bg-bg-elevated px-4 py-3 text-sm font-medium text-fg"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
