import {
  ClipboardList,
  Clock3,
  Flame,
  Globe2,
  Grid2x2,
  Layers,
  MoveVertical,
  Package,
  Route,
  Shuffle,
  Snowflake,
  Truck,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { services } from "@/lib/icap-data";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  truck: Truck,
  clipboard: ClipboardList,
  box: Package,
  zap: Zap,
  clock: Clock3,
  globe: Globe2,
  route: Route,
  snowflake: Snowflake,
  flame: Flame,
  layers: Layers,
  move: MoveVertical,
  grid: Grid2x2,
  warehouse: Warehouse,
  shuffle: Shuffle,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: (typeof services)[number]["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.75} />;
}
