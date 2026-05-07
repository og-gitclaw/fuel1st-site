import {
  Fuel,
  Plane,
  PackageOpen,
  Map,
  Wrench,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  body: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "fuel-supply",
    name: "Fuel Supply",
    short: "Reliable jet fuel sourced from a global supplier network.",
    icon: Fuel,
    body: "Jet A and Jet A-1 sourced directly from refiners and major distributors, with contract pricing routed through a single point of contact for your dispatch team.",
    highlights: [
      "Coverage at 1,800+ airports worldwide",
      "Single contract, single invoice",
      "Volume-backed pricing through major suppliers",
    ],
  },
  {
    slug: "trip-support",
    name: "Trip Support",
    short: "Multilingual dispatch handling permits, slots, and overflights — 24/7.",
    icon: Plane,
    body: "Experienced dispatchers handle landing and overflight permits, slot requests, customs coordination, ground transport, and crew accommodation in every operational time zone.",
    highlights: [
      "Coverage in every operational time zone",
      "Permit, slot, and overflight handling",
      "Coordination with handlers, customs, and crew services",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    short: "Into-plane fueling for FBOs, bulk distribution, and complex multi-stop programs.",
    icon: PackageOpen,
    body: "Beyond ramp delivery, we run logistics programs for fixed-base operators and large fleet customers — scheduled bulk replenishment, into-plane release coordination, and multi-stop programs that behave like one shipment.",
    highlights: [
      "FBO and bulk-distribution programs",
      "Multi-stop and complex routing",
      "Equipment and lease support where applicable",
    ],
  },
  {
    slug: "flight-planning",
    name: "Flight Planning",
    short: "Routes, weather, NOTAMs, and fuel planning — all in your release format.",
    icon: Map,
    body: "Operational releases that account for current weather, en-route winds, alternates, and active NOTAMs — built around your aircraft&rsquo;s performance data and delivered in the format your operations team already uses.",
    highlights: [
      "Performance-based fuel optimization",
      "Active NOTAM and weather integration",
      "Releases delivered in your preferred format",
    ],
  },
  {
    slug: "ground-handling",
    name: "Ground Handling",
    short: "Coordinated handling so the turn happens without surprises.",
    icon: Wrench,
    body: "Pre-arranged ramp services, GPU, catering, and ground transport at each stop — confirmed with crew and handler before arrival, with real-time FBO substitutions when needed.",
    highlights: [
      "Pre-coordinated ramp services and turn-around support",
      "FBO substitution handled in real time",
      "Single point of contact across the route",
    ],
  },
  {
    slug: "saf",
    name: "Sustainable Aviation Fuel",
    short: "Lower-carbon fuel options and emissions reporting that holds up.",
    icon: Leaf,
    body: "Physical SAF where available, plus book-and-claim arrangements and certified offsets at stations without local supply. Reporting is suitable for corporate sustainability disclosure.",
    highlights: [
      "Physical SAF supply at participating airports",
      "Book-and-claim for stations without local supply",
      "Documentation suitable for sustainability reporting",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
