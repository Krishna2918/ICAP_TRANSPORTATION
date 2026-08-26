export const company = {
  name: "ICAP Transport Inc.",
  shortName: "ICAP",
  tagline: "Freight that moves with precision",
  description:
    "ICAP Transport Inc. is a full-service trucking and logistics partner — asset-based truckload, specialty equipment, cross-border, and warehousing across Canada, the U.S., and Mexico.",
  phone: "1-800-422-7847",
  phoneHref: "tel:+18004227847",
  email: "dispatch@icaptransport.com",
  emailHref: "mailto:dispatch@icaptransport.com",
  hours: "Mon–Fri 6:00–20:00 ET · Dispatch 24/7",
  address: {
    line1: "Mississauga, ON",
    line2: "Greater Toronto Area",
    city: "Mississauga, ON",
    country: "Canada",
  },
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Tracking", href: "/tracking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    id: "truckload",
    title: "Truckload Operations",
    short:
      "Full truckload across North America — general commodities, automotive, and specialized moves.",
    description:
      "Full-service truckload with an extensive fleet of dry van and specialized equipment covering North America. Automotive parts with tight delivery windows, general commodities, and flatbed or specialized loads of all shapes and sizes.",
    features: [
      "North American geographic coverage",
      "Automotive & production-support lanes",
      "General commodities truckload",
      "Service, capacity, and focus aligned",
    ],
    icon: "truck" as const,
  },
  {
    id: "dedicated",
    title: "Dedicated Operations",
    short:
      "Contracted capacity with dedicated managers, KPI dashboards, and reserved equipment pools.",
    description:
      "Dedicated programs managed by an experienced operations lead with KPI monitoring. Automotive supplier-to-plant lanes, reserved equipment pools, round-trip or one-way, milk-runs, and peddle routes — small fleets or large trailer pools.",
    features: [
      "Named program manager",
      "Dashboard KPI monitoring",
      "Reserved trucks & trailers",
      "Flexible scale and scope",
    ],
    icon: "clipboard" as const,
  },
  {
    id: "dry-van",
    title: "Dry Van",
    short:
      "Enclosed 53' capacity for freight that needs weather protection and dock-high loading.",
    description:
      "For goods that need protection from moisture and weather. Furniture, automotive parts, packaged food, and general freight — with GPS tracking for accurate location and delivery status.",
    features: [
      "Weather-protected enclosed trailers",
      "GPS location updates",
      "Cost-effective standard FTL",
      "Live delivery status",
    ],
    icon: "box" as const,
  },
  {
    id: "expedited",
    title: "Expedited Services",
    short:
      "Time-critical loads with direct routing, continuous monitoring, and delivery confirmation.",
    description:
      "When the clock is the product. Non-stop operations and shortest practical routes to cut transit time, with status monitoring, notifications, and delivery confirmation.",
    features: [
      "Time-critical dispatch",
      "Direct routing priority",
      "Proactive status alerts",
      "Delivery confirmation",
    ],
    icon: "zap" as const,
  },
  {
    id: "just-in-time",
    title: "Just-in-Time",
    short:
      "JIT programs that cut excess inventory and align arrivals to production or retail windows.",
    description:
      "JIT programs that cut excess inventory and align arrivals to production or retail windows. Tight appointment control and sequenced deliveries.",
    features: [
      "Appointment-sequenced routing",
      "Production-line support",
      "Inventory minimization focus",
      "Reliable window performance",
    ],
    icon: "clock" as const,
  },
  {
    id: "cross-border",
    title: "Cross-Border",
    short:
      "Canada–U.S.–Mexico lanes with customs coordination, e-logs, and live location updates.",
    description:
      "Experienced Canada–U.S.–Mexico transportation. We work with customs and border services so the crossing is as smooth as the rest of the trip, with e-logs and continuous monitoring.",
    features: [
      "US / Canada / Mexico lanes",
      "Customs coordination",
      "E-log tracking",
      "Exception alerts in transit",
    ],
    icon: "globe" as const,
  },
  {
    id: "line-haul",
    title: "Line Haul",
    short:
      "High-mileage corridor moves with capable tractors and trailers built for long-haul reliability.",
    description:
      "High-mileage corridor moves with capable tractors and trailers built for long-haul reliability between terminals, DCs, and hubs.",
    features: [
      "Long-haul corridor capacity",
      "Terminal-to-terminal moves",
      "Reliable equipment",
      "Scheduled linehaul windows",
    ],
    icon: "route" as const,
  },
  {
    id: "refrigerated",
    title: "Refrigerated Transportation",
    short:
      "Temperature-controlled trailers for perishable and conditioned goods.",
    description:
      "Temperature-controlled trailers with maintained cooling systems for perishable and conditioned goods. Product integrity is the priority from pickup through delivery.",
    features: [
      "Maintained reefer units",
      "Perishable-capable lanes",
      "Condition monitoring focus",
      "Food & pharma-ready options",
    ],
    icon: "snowflake" as const,
  },
  {
    id: "heated",
    title: "Heated Services",
    short:
      "Climate-controlled trailers that protect temperature-sensitive freight from freezing.",
    description:
      "Climate-controlled trailers that protect temperature-sensitive freight from freezing — paints, chemicals, food, and other products that cannot ride cold.",
    features: [
      "Freeze-protection trailers",
      "Winter lane readiness",
      "Product-condition focus",
      "Scheduled heated capacity",
    ],
    icon: "flame" as const,
  },
  {
    id: "flatbed",
    title: "Flatbed",
    short:
      "Open-deck capacity for machinery, steel, lumber, and construction materials.",
    description:
      "Open-deck capacity for freight that will not fit a dry van — machinery, steel, lumber, construction materials. Trained teams, proper securement, and cost-effective planning for each unique load.",
    features: [
      "Open-deck loading access",
      "Securement standards",
      "Industrial & construction freight",
      "Job-specific planning",
    ],
    icon: "layers" as const,
  },
  {
    id: "step-deck",
    title: "Step Deck",
    short:
      "Lower-deck height for taller freight that exceeds standard flatbed clearances.",
    description:
      "Lower-deck height for taller freight that exceeds standard flatbed clearances while staying within legal height limits on major corridors.",
    features: [
      "Extra height clearance",
      "Machinery & tall equipment",
      "Legal-height routing",
      "Specialized securement",
    ],
    icon: "move" as const,
  },
  {
    id: "open-board",
    title: "Open Board FTL",
    short:
      "Flexible full-truckload capacity for volume moves, unbalanced lanes, and overflow.",
    description:
      "Flexible full-truckload capacity for volume moves, unbalanced lanes, and overflow when your core program needs extra trucks without a long-term dedicated contract.",
    features: [
      "Overflow & peak capacity",
      "Unbalanced lane support",
      "Volume FTL options",
      "Fast capacity response",
    ],
    icon: "grid" as const,
  },
  {
    id: "warehousing",
    title: "Warehousing & Value Added",
    short:
      "Storage, consolidation, inventory, short- or long-term programs, and flexible distribution.",
    description:
      "Programs built around your inventory needs — storage and consolidation, inventory control, short- or long-term warehouse, and flexible distribution. Product safety is non-negotiable.",
    features: [
      "Storage & consolidation",
      "Inventory management",
      "Short & long-term options",
      "Flexible distribution",
    ],
    icon: "warehouse" as const,
  },
  {
    id: "cross-docking",
    title: "Cross-Docking",
    short:
      "Transfer freight from inbound to outbound with minimal dwell — for any shipment size.",
    description:
      "Transfer freight from inbound to outbound with minimal dwell — for any shipment size. Faster turns, less handling, and tighter connection to linehaul and final-mile moves.",
    features: [
      "Rapid inbound-to-outbound turns",
      "Reduced storage dwell",
      "Any shipment size",
      "Connected to linehaul network",
    ],
    icon: "shuffle" as const,
  },
] as const;

export const stats = [
  { value: "98.7%", label: "On-time delivery" },
  { value: "12k+", label: "Shipments / month" },
  { value: "48", label: "States & provinces" },
  { value: "24/7", label: "Dispatch coverage" },
] as const;

export const corridors = [
  {
    name: "Great Lakes Corridor",
    detail: "Toronto · Detroit · Chicago · Cleveland",
  },
  {
    name: "Northeast Express",
    detail: "Montreal · Boston · New York · Philadelphia",
  },
  {
    name: "Midwest Spine",
    detail: "Chicago · Indianapolis · Columbus · St. Louis",
  },
  {
    name: "Transborder West",
    detail: "Winnipeg · Minneapolis · Denver · Calgary",
  },
] as const;

export const principles = [
  {
    title: "Timeliness",
    body: "Prompt response and disciplined execution so loads hit the window you booked.",
  },
  {
    title: "Safety",
    body: "Certified practices and equipment standards focused on protecting product and people.",
  },
  {
    title: "Customer service",
    body: "Named contacts and clear updates — you should not have to chase status.",
  },
  {
    title: "Experience",
    body: "Deep North American operating knowledge across truckload and logistics programs.",
  },
  {
    title: "Cross-border",
    body: "Borders do not stop the operation — Canada, U.S., and Mexico lanes with customs coordination.",
  },
  {
    title: "Capacity focus",
    body: "Service, capacity, and focus kept connected on every program we run.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Share your lane",
    body: "Origin, destination, freight profile, and timing. Same-business-day response on most lanes.",
  },
  {
    step: "02",
    title: "Book & stage",
    body: "We confirm equipment, schedule pickup, and issue tracking before the truck rolls.",
  },
  {
    step: "03",
    title: "Move with updates",
    body: "Live ETAs, exception alerts, and one point of contact through transit.",
  },
  {
    step: "04",
    title: "Deliver & close",
    body: "POD, invoice, and performance notes so your ops and books stay clean.",
  },
] as const;

export type TrackingStatus =
  | "booked"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered";

export type DemoShipment = {
  id: string;
  status: TrackingStatus;
  origin: string;
  destination: string;
  service: string;
  eta: string;
  lastUpdate: string;
  events: { time: string; label: string; detail: string }[];
};

export const demoShipments: Record<string, DemoShipment> = {
  ICAP10482: {
    id: "ICAP10482",
    status: "in_transit",
    origin: "Mississauga, ON",
    destination: "Columbus, OH",
    service: "Full Truckload · Dry Van",
    eta: "Aug 7, 2026 · 14:00 ET",
    lastUpdate: "Near Buffalo, NY · on schedule",
    events: [
      {
        time: "Aug 5 · 08:12",
        label: "Picked up",
        detail: "Loaded at shipper dock, 22 pallets sealed",
      },
      {
        time: "Aug 5 · 11:40",
        label: "Border cleared",
        detail: "Queenston–Lewiston, customs released",
      },
      {
        time: "Aug 6 · 09:05",
        label: "In transit",
        detail: "Westbound I-90 near Buffalo, NY",
      },
      {
        time: "Aug 7 · 14:00",
        label: "Scheduled delivery",
        detail: "Appointment window 13:00–15:00 ET",
      },
    ],
  },
  ICAP10991: {
    id: "ICAP10991",
    status: "out_for_delivery",
    origin: "Chicago, IL",
    destination: "Toronto, ON",
    service: "Expedited · Line Haul",
    eta: "Aug 6, 2026 · 16:30 ET",
    lastUpdate: "Out for delivery · GTA hub",
    events: [
      {
        time: "Aug 4 · 16:20",
        label: "Picked up",
        detail: "Origin terminal Chicago South",
      },
      {
        time: "Aug 5 · 22:10",
        label: "Linehaul complete",
        detail: "Arrived GTA cross-dock",
      },
      {
        time: "Aug 6 · 07:45",
        label: "Out for delivery",
        detail: "Route 14 · appointment confirmed",
      },
    ],
  },
  ICAP10012: {
    id: "ICAP10012",
    status: "delivered",
    origin: "Montreal, QC",
    destination: "Boston, MA",
    service: "Refrigerated · FTL",
    eta: "Delivered Aug 3, 2026",
    lastUpdate: "Delivered with clean POD",
    events: [
      {
        time: "Aug 2 · 05:00",
        label: "Picked up",
        detail: "Temp set 2°C · seal #A8821",
      },
      {
        time: "Aug 2 · 19:30",
        label: "In transit",
        detail: "I-89 corridor · temp stable",
      },
      {
        time: "Aug 3 · 11:18",
        label: "Delivered",
        detail: "Signed by R. Patel · no exceptions",
      },
    ],
  },
};

export const statusLabels: Record<TrackingStatus, string> = {
  booked: "Booked",
  picked_up: "Picked up",
  in_transit: "In transit",
  out_for_delivery: "Out for delivery",
  delivered: "Delivered",
};

export const industries = [
  "Automotive parts",
  "Industrial manufacturing",
  "Retail & e-commerce",
  "Food & beverage",
  "Temperature-controlled freight",
  "Building materials",
] as const;
