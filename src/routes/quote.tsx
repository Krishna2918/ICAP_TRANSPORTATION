import { useState } from "react";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/icap-data";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/quote")({
  component: QuotePage,
  head: () => ({
    meta: [
      { title: "Get a Quote | ICAP Transport Inc." },
      {
        name: "description",
        content:
          "Request a freight quote from ICAP Transport Inc. Same-business-day response on most lanes.",
      },
    ],
  }),
});

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  origin: string;
  destination: string;
  freight: string;
  notes: string;
};

const empty: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  origin: "",
  destination: "",
  freight: "",
  notes: "",
};

function QuotePage() {
  const search = useSearch({ strict: false }) as { service?: string };
  const serviceParam =
    typeof search.service === "string" ? search.service : undefined;
  const [form, setForm] = useState<FormState>({
    ...empty,
    service: serviceParam ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.company.trim()) next.company = "Company is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Valid email is required";
    }
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (!form.service) next.service = "Select a service";
    if (!form.origin.trim()) next.origin = "Origin is required";
    if (!form.destination.trim()) next.destination = "Destination is required";
    if (!form.freight.trim()) next.freight = "Freight details are required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Pricing"
        title="Request a freight quote"
        description="Tell us about your lane and freight. Our team responds the same business day with capacity and rates."
      />

      <section className="section-pad !pt-10">
        <div className="container-page max-w-2xl">
          {submitted ? (
            <div className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-8 text-center shadow-[var(--shadow-sm)]">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-success">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold text-fg">
                Quote request received
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-fg-muted">
                Thanks, {form.name.split(" ")[0]}. We will review{" "}
                {form.origin} → {form.destination} and follow up at {form.email}{" "}
                shortly.
              </p>
              <Button
                className="mt-6"
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ ...empty, service: serviceParam ?? "" });
                }}
              >
                Submit another request
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-5 shadow-[var(--shadow-sm)] sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" error={errors.name} id="name">
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Company" error={errors.company} id="company">
                  <Input
                    id="company"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    autoComplete="organization"
                  />
                </Field>
                <Field label="Work email" error={errors.email} id="email">
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    autoComplete="email"
                  />
                </Field>
                <Field label="Phone" error={errors.phone} id="phone">
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <Field label="Service" error={errors.service} id="service">
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="flex h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg-elevated px-3.5 text-sm text-fg shadow-[var(--shadow-sm)] focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Origin" error={errors.origin} id="origin">
                  <Input
                    id="origin"
                    value={form.origin}
                    onChange={(e) => update("origin", e.target.value)}
                    placeholder="City, province/state"
                  />
                </Field>
                <Field
                  label="Destination"
                  error={errors.destination}
                  id="destination"
                >
                  <Input
                    id="destination"
                    value={form.destination}
                    onChange={(e) => update("destination", e.target.value)}
                    placeholder="City, province/state"
                  />
                </Field>
              </div>

              <Field
                label="Freight details"
                error={errors.freight}
                id="freight"
              >
                <Input
                  id="freight"
                  value={form.freight}
                  onChange={(e) => update("freight", e.target.value)}
                  placeholder="Pallets, weight, dimensions, temperature"
                />
              </Field>

              <Field label="Notes (optional)" id="notes">
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Pickup windows, appointments, special handling…"
                />
              </Field>

              <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-fg-subtle">
                  Same-business-day response on most standard lanes.
                </p>
                <Button type="submit" size="lg" className="sm:min-w-40">
                  Submit request
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p className="text-xs text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
