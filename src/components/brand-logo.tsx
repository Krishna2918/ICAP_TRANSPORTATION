import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  height = 56,
  onDark = false,
}: {
  className?: string;
  height?: number;
  onDark?: boolean;
}) {
  return (
    <img
      src={onDark ? "/logo-on-white.png?v=3" : "/logo.png?v=3"}
      alt="ICAP Transport Inc."
      className={cn("block object-contain object-left", className)}
      style={{ height, width: "auto", maxHeight: height }}
    />
  );
}
