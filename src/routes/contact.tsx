import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { company } from "@/lib/icap-data";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | ICAP Transport Inc." },
      {
        name: "description",
        content:
          "Contact ICAP Transport Inc. dispatch and sales. Phone, email, and Greater Toronto Area headquarters.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Valid email is required";
    }
    if (!message.trim()) next.message = "Message is required";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to dispatch or sales"
        description="For active loads, call dispatch anytime. For new business, send a note and a specialist will respond the same day."
      />

      <section className="section-pad !pt-10">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <ContactCard
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={company.phone}
              href={company.phoneHref}
            />
            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={company.email}
              href={company.emailHref}
            />
            <ContactCard
              icon={<MapPin className="h-4 w-4" />}
              label="Headquarters"
              value={`${company.address.line1} · ${company.address.line2}`}
            />
            <ContactCard
              icon={<Clock className="h-4 w-4" />}
              label="Hours"
              value={company.hours}
            />
          </div>

          <div className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-5 shadow-[var(--shadow-sm)] sm:p-8">
            {sent ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-success">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-fg">
                  Message sent
                </h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-fg-muted">
                  Thanks, {name.split(" ")[0]}. We will reply to {email} shortly.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => {
                    setSent(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <h2 className="font-display text-lg font-semibold text-fg">
                  Send a message
                </h2>
                <div className="space-y-2">
                  <Label htmlFor="c-name">Name</Label>
                  <Input
                    id="c-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-xs text-danger">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input
                    id="c-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-danger">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-message">Message</Label>
                  <Textarea
                    id="c-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                  />
                  {errors.message && (
                    <p className="text-xs text-danger">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" size="lg">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-md)] bg-accent-soft text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-subtle">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-fg break-words">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-3 rounded-[var(--radius-lg)] border border-border bg-bg-elevated p-4 shadow-[var(--shadow-sm)] transition-colors hover:border-border-strong focus-ring"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex gap-3 rounded-[var(--radius-lg)] border border-border bg-bg-elevated p-4 shadow-[var(--shadow-sm)]">
      {content}
    </div>
  );
}
