import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { HomeHero } from "@/components/sections/home-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessSection } from "@/components/sections/process-section";
import { CoverageSection } from "@/components/sections/coverage-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { CtaBand } from "@/components/sections/cta-band";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "ICAP Transport Inc. | Freight & Logistics",
      },
      {
        name: "description",
        content:
          "ICAP Transport Inc. — full truckload, dedicated, dry van, reefer, flatbed, cross-border, and warehousing across Canada, the U.S., and Mexico.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <SiteShell>
      <HomeHero />
      <ServicesGrid limit={6} />
      <ProcessSection />
      <CoverageSection />
      <PrinciplesSection />
      <CtaBand />
    </SiteShell>
  );
}
