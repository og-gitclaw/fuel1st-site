import {
  Fuel,
  Plane,
  PackageOpen,
  CreditCard,
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
  body: string[];
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "fuel-supply",
    name: "Fuel Supply",
    short: "Reliable jet fuel sourced from a global supplier network and delivered where you need it.",
    icon: Fuel,
    body: [
      "Fuel1st sources Jet A and Jet A-1 directly from refiners and major distributors, then routes contracts and into-plane release through a single point of contact for your dispatch team.",
      "Strong commercial relationships with the world's largest fuel producers translate into competitive ramp pricing for general aviation, commercial, and private operators.",
    ],
    highlights: [
      "Coverage at 1,800+ airports worldwide",
      "Single contract, single invoice, single point of accountability",
      "Volume-backed pricing through major-supplier agreements",
    ],
  },
  {
    slug: "trip-support",
    name: "Trip Support",
    short: "Multilingual dispatch, permits, slots, and overflight coordination — handled around the clock.",
    icon: Plane,
    body: [
      "Our trip support desk is staffed by experienced dispatchers who handle the moving parts of an international mission: landing and overflight permits, slot requests, customs and immigration coordination, ground transport, and crew accommodation.",
      "We coordinate with handlers and authorities in local time zones so the flight deck stays focused on the aircraft.",
    ],
    highlights: [
      "Coverage in every operational time zone",
      "Permit, slot, and overflight handling",
      "Coordination with handlers, customs, and crew services",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    short: "Into-plane fueling logistics for FBOs, bulk distribution, and complex multi-stop programs.",
    icon: PackageOpen,
    body: [
      "Beyond ramp delivery, we run logistics programs for fixed-base operators and large fleet customers: scheduled bulk replenishment, into-plane release coordination, equipment leasing where it makes sense, and multi-stop programs that need to behave like one shipment.",
      "If your operation has unusual constraints — temporary FBOs, remote stations, charter cycles — we'll design the lift around them.",
    ],
    highlights: [
      "FBO and bulk-distribution programs",
      "Multi-stop and complex routing",
      "Equipment and lease support where applicable",
    ],
  },
  {
    slug: "card-programs",
    name: "Card Programs",
    short: "Prepaid fuel cards that simplify settlement across our partner network.",
    icon: CreditCard,
    body: [
      "Our card program lets crews settle fuel transactions at participating locations without setting up a contract for every stop. It folds into your monthly statement and removes the friction of one-off ramp purchases.",
      "Cards are designed for operators with high stop counts and unpredictable routing.",
    ],
    highlights: [
      "Settle at participating locations on a single statement",
      "Designed for high-stop-count operations",
      "Consolidated monthly invoicing",
    ],
  },
  {
    slug: "flight-planning",
    name: "Flight Planning",
    short: "Routes, weather, NOTAMs, and fuel planning — everything the dispatch release needs.",
    icon: Map,
    body: [
      "Our flight-planning team produces operational releases that account for current weather, en-route winds, alternates, and active NOTAMs. We work with the aircraft's performance data to optimize fuel loads and route choices.",
      "Plans are delivered in the format your operations team already uses.",
    ],
    highlights: [
      "Performance-based fuel optimization",
      "Active NOTAM and weather integration",
      "Releases delivered in your preferred format",
    ],
  },
  {
    slug: "ground-handling",
    name: "Ground Handling",
    short: "Coordinated handling at destination FBOs so the turn happens without surprises.",
    icon: Wrench,
    body: [
      "We pre-arrange ramp services, lavatory and water carts, GPU, catering, and ground transport with the FBO of record at each stop, then confirm with crew and handler before arrival.",
      "If an FBO substitution becomes necessary mid-mission, our dispatch desk handles the swap in real time.",
    ],
    highlights: [
      "Pre-coordinated ramp services and turn-around support",
      "FBO substitution handled in real time",
      "Single point of contact across the route",
    ],
  },
  {
    slug: "saf",
    name: "Sustainable Aviation Fuel (SAF)",
    short: "Lower-carbon fuel options and emissions reporting for operators with sustainability mandates.",
    icon: Leaf,
    body: [
      "Sustainable Aviation Fuel reduces life-cycle CO₂ emissions versus conventional jet fuel. We help operators source SAF where it is currently available and fold its use into their internal sustainability reporting.",
      "For stops where physical SAF isn't yet available, we offer book-and-claim arrangements and carbon-offset programs as bridge options.",
    ],
    highlights: [
      "Physical SAF supply at participating airports",
      "Book-and-claim for stations without local supply",
      "Documentation suitable for corporate sustainability reporting",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
