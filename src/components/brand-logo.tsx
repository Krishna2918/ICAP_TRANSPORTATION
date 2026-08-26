import { asset } from "@/lib/assets";
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
      src={asset(onDark ? "/logo-on-white.png" : "/logo.png")}
      alt="ICAP Transport Inc."
      className={cn("block object-contain object-left", className)}
      style={{ height, width: "auto", maxHeight: height }}
    />
  );
}
