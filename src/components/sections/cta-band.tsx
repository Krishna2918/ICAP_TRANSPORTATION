import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/icap-data";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="section-pad bg-bg-subtle">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-bg-ink px-6 py-10 text-fg-on-ink sm:px-10 md:px-14 md:py-14">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,color-mix(in_oklab,var(--color-sky)_22%,transparent),transparent_70%)] pointer-events-none" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] md:text-4xl">
              Ready to move your next load?
            </h2>
            <p className="mt-3 text-fg-on-ink-muted">
              Share your lane and freight details. Dispatch responds the same
              business day — or call for live capacity.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to="/quote">
                  Get a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-fg-on-ink hover:bg-white/10"
              >
                <a href={company.phoneHref}>{company.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
