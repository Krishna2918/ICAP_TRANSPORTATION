import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, PackageCheck, MapPin, Clock } from "lucide-react";
import {
  demoShipments,
  statusLabels,
  type DemoShipment,
  type TrackingStatus,
} from "@/lib/icap-data";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tracking")({
  component: TrackingPage,
  head: () => ({
    meta: [
      { title: "Track Shipment | ICAP Transport Inc." },
      {
        name: "description",
        content:
          "Track ICAP Transport shipments with live status, ETA, and milestone history.",
      },
    ],
  }),
});

const statusTone: Record<
  TrackingStatus,
  "default" | "accent" | "success" | "warning"
> = {
  booked: "default",
  picked_up: "accent",
  in_transit: "accent",
  out_for_delivery: "warning",
  delivered: "success",
};

const sampleIds = Object.keys(demoShipments);

function TrackingPage() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const shipment: DemoShipment | null = useMemo(() => {
    if (!activeId) return null;
    return demoShipments[activeId] ?? null;
  }, [activeId]);

  function lookup(raw: string) {
    const id = raw.trim().toUpperCase();
    if (!id) {
      setError("Enter a tracking number.");
      setActiveId(null);
      return;
    }
    if (!demoShipments[id]) {
      setError(
        `No shipment found for “${id}”. Try a sample ID like ${sampleIds[0]}.`,
      );
      setActiveId(null);
      return;
    }
    setError(null);
    setActiveId(id);
    setQuery(id);
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Visibility"
        title="Track your shipment"
        description="Enter your ICAP tracking number for live status, ETA, and milestone history. Try a sample load to see how it works."
      />

      <section className="section-pad !pt-10">
        <div className="container-page max-w-3xl">
          <form
            className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-5 shadow-[var(--shadow-sm)] sm:p-6"
            onSubmit={(e) => {
              e.preventDefault();
              lookup(query);
            }}
          >
            <Label htmlFor="tracking">Tracking number</Label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Input
                id="tracking"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. ICAP10482"
                autoComplete="off"
                className="font-mono uppercase"
              />
              <Button type="submit" className="sm:min-w-36">
                <Search className="h-4 w-4" />
                Track
              </Button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-danger" role="alert">
                {error}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-fg-subtle">Samples:</span>
              {sampleIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => lookup(id)}
                  className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-xs text-fg-muted transition-colors hover:border-border-strong hover:text-fg focus-ring"
                >
                  {id}
                </button>
              ))}
            </div>
          </form>

          {shipment && (
            <div className="mt-6 space-y-4">
              <div className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-5 shadow-[var(--shadow-sm)] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-sm text-fg-subtle">
                      {shipment.id}
                    </p>
                    <h2 className="mt-1 font-display text-xl font-semibold text-fg">
                      {shipment.service}
                    </h2>
                  </div>
                  <Badge variant={statusTone[shipment.status]}>
                    {statusLabels[shipment.status]}
                  </Badge>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[var(--radius-md)] bg-bg px-3.5 py-3">
                    <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-fg-subtle">
                      <MapPin className="h-3.5 w-3.5" />
                      Origin
                    </p>
                    <p className="mt-1 text-sm font-medium text-fg">
                      {shipment.origin}
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-md)] bg-bg px-3.5 py-3">
                    <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-fg-subtle">
                      <PackageCheck className="h-3.5 w-3.5" />
                      Destination
                    </p>
                    <p className="mt-1 text-sm font-medium text-fg">
                      {shipment.destination}
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-md)] bg-bg px-3.5 py-3">
                    <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-fg-subtle">
                      <Clock className="h-3.5 w-3.5" />
                      ETA
                    </p>
                    <p className="mt-1 text-sm font-medium text-fg">
                      {shipment.eta}
                    </p>
                  </div>
                </div>

                <p className="mt-4 rounded-[var(--radius-md)] border border-accent/20 bg-accent-soft px-3.5 py-2.5 text-sm text-primary">
                  {shipment.lastUpdate}
                </p>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-5 shadow-[var(--shadow-sm)] sm:p-6">
                <h3 className="font-display text-base font-semibold text-fg">
                  Milestone history
                </h3>
                <ol className="mt-5 space-y-0">
                  {shipment.events.map((event, i) => {
                    const isLast = i === shipment.events.length - 1;
                    const isFuture =
                      shipment.status !== "delivered" && isLast && i > 0;
                    return (
                      <li key={event.time} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span
                            className={cn(
                              "mt-1 h-2.5 w-2.5 rounded-full",
                              isFuture
                                ? "border-2 border-border bg-bg-elevated"
                                : "bg-accent",
                            )}
                          />
                          {!isLast && (
                            <span className="my-1 w-px flex-1 bg-border" />
                          )}
                        </div>
                        <div className={cn("pb-6", isLast && "pb-0")}>
                          <p className="text-xs font-medium tabular-nums text-fg-subtle">
                            {event.time}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-fg">
                            {event.label}
                          </p>
                          <p className="mt-0.5 text-sm text-fg-muted">
                            {event.detail}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
