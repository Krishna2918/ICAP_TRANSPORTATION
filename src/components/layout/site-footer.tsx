import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, services } from "@/lib/icap-data";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-ink bg-bg-ink text-fg-on-ink">
      <div className="container-page section-pad !pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <div className="inline-flex rounded-md bg-white px-3 py-2">
              <BrandLogo onDark height={48} className="w-[200px]" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-fg-on-ink-muted">
              {company.description}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-fg-on-ink-muted transition-colors hover:text-fg-on-ink focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/quote"
                  className="text-fg-on-ink-muted transition-colors hover:text-fg-on-ink focus-ring rounded-sm"
                >
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    hash={s.id}
                    className="text-fg-on-ink-muted transition-colors hover:text-fg-on-ink focus-ring rounded-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-fg-on-ink-muted">
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                <a
                  href={company.phoneHref}
                  className="hover:text-fg-on-ink focus-ring rounded-sm"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                <a
                  href={company.emailHref}
                  className="hover:text-fg-on-ink focus-ring rounded-sm"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-ink pt-6 text-xs text-fg-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <p>{company.hours}</p>
        </div>
      </div>
    </footer>
  );
}
