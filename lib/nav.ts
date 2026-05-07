export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Leadership", href: "/leadership" },
  { label: "News", href: "/news" },
  { label: "Insights", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Press", href: "/press" },
  ],
  services: [
    { label: "Services overview", href: "/services" },
    { label: "Sustainability / SAF", href: "/sustainability" },
    { label: "Insights", href: "/blog" },
    { label: "News", href: "/news" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;
