import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [{ title: "Sign in | ICAP Transport Inc." }],
  }),
});

function LoginPage() {
  return (
    <div className="flex min-h-[calc(100dvh-var(--grok-banner-h,0px))] flex-col bg-bg">
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--color-sky)_0%,var(--color-primary)_55%,var(--color-bg-ink)_100%)]" />
      <div className="container-page flex flex-1 flex-col items-center justify-center py-12">
        <div className="w-full max-w-sm">
          <Link
            to="/"
            className="mb-8 flex items-center justify-center overflow-visible focus-ring rounded-[var(--radius-sm)]"
          >
            <BrandLogo height={72} className="w-[260px]" />
          </Link>

          <div className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6 shadow-[var(--shadow-md)] sm:p-8">
            <h1 className="font-display text-xl font-semibold tracking-tight text-fg">
              Sign in
            </h1>
            <p className="mt-1.5 text-sm text-fg-muted">
              Access your ICAP customer portal and shipment tools.
            </p>

            <div className="mt-6 space-y-3">
              {authEnabled ? (
                GROK_PROVIDERS.map((p) => (
                  <Button
                    key={p.providerId}
                    type="button"
                    variant="outline"
                    className="w-full justify-center"
                    onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                  >
                    Continue with {p.label}
                  </Button>
                ))
              ) : (
                <p className="text-sm text-fg-muted">Sign-in is disabled.</p>
              )}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-fg-muted">
            <Link to="/" className="font-medium text-primary hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
