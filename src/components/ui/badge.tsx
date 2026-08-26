import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-bg-subtle text-fg-muted",
        accent: "bg-accent-soft text-primary",
        ink: "bg-bg-ink text-fg-on-ink",
        success:
          "bg-[color-mix(in_oklab,var(--color-success)_14%,white)] text-success",
        warning:
          "bg-[color-mix(in_oklab,var(--color-warning)_16%,white)] text-warning",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
