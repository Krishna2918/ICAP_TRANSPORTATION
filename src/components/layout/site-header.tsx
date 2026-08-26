import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/icap-data";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-[var(--grok-banner-h,0px)] z-40 border-b border-border bg-bg-elevated/95 backdrop-blur-md">
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--color-sky)_0%,var(--color-primary)_55%,var(--color-bg-ink)_100%)]" />
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-4 overflow-visible md:h-[5.25rem]">
        <Link
          to="/"
          className="flex shrink-0 items-center overflow-visible focus-ring rounded-[var(--radius-sm)]"
          onClick={() => setOpen(false)}
        >
          <BrandLogo
            height={58}
            className="max-h-[58px] w-[min(240px,58vw)] max-w-[260px] sm:w-[240px]"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm font-semibold transition-colors duration-150 focus-ring",
                  active
                    ? "bg-accent-soft text-primary"
                    : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/tracking">Track</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/quote">Get a quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-border bg-bg-elevated text-fg lg:hidden focus-ring"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-elevated lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-fg hover:bg-bg-subtle focus-ring"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <Button asChild variant="outline" className="w-full">
                <Link to="/tracking" onClick={() => setOpen(false)}>
                  Track shipment
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/quote" onClick={() => setOpen(false)}>
                  Get a quote
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
