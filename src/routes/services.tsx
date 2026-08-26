import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "@/lib/icap-data";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceIcon } from "@/components/sections/service-icon";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | ICAP Transport Inc." },
      {
        name: "description",
        content:
          "ICAP Transport services: truckload, dedicated, dry van, expedited, just-in-time, cross-border, line haul, reefer, heated, flatbed, step deck, open board FTL, warehousing, and cross-docking.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Every mode your freight needs"
        description="Customer satisfaction is the priority. ICAP offers a full spectrum of transportation and logistics services across North America."
        actions={
          <Button asChild>
            <Link to="/quote">Request capacity</Link>
          </Button>
        }
      />

      <section className="section-pad">
        <div className="container-page space-y-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 grid gap-6 rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 shadow-[var(--shadow-sm)] md:grid-cols-[1fr_1.1fr] md:p-8 lg:gap-10"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-accent-soft text-accent">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted md:text-base">
                  {service.description}
                </p>
                <Button asChild variant="outline" className="mt-6">
                  <a href={`/quote?service=${service.id}`}>Quote this service</a>
                </Button>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-[var(--radius-md)] border border-border bg-bg px-3.5 py-3 text-sm text-fg"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
