import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/icap-data";
import { ServiceIcon } from "./service-icon";
import { Button } from "@/components/ui/button";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-pad bg-bg">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Capabilities
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.025em] text-fg md:text-4xl">
              Full spectrum of transportation services
            </h2>
            <p className="mt-3 text-fg-muted">
              The same service lineup shippers expect from a serious North
              American carrier — from dry van truckload to reefer, flatbed,
              dedicated, and warehouse support.
            </p>
          </div>
          {limit && (
            <Button asChild variant="outline">
              <Link to="/services">
                View all 14 services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group flex flex-col rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 shadow-[var(--shadow-sm)] transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-accent-soft text-primary">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                {service.short}
              </p>
              <Link
                to="/services"
                hash={service.id}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover focus-ring rounded-sm"
              >
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
