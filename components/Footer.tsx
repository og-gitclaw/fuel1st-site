import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { site, formattedAddress } from "@/lib/site";

export function Footer() {
  const groups = [
    { title: "Company", items: footerNav.company },
    { title: "Services", items: footerNav.services },
    { title: "Support", items: footerNav.support },
    { title: "Legal", items: footerNav.legal },
  ];

  return (
    <footer className="mt-24 border-t border-slate-200 bg-surface-slate">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">{site.name}</p>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">{site.description}</p>
            <div className="mt-6 space-y-1 text-sm text-ink-soft">
              <p>{formattedAddress}</p>
              <p>
                <a href={`tel:${site.contact.phoneTel}`} className="hover:text-brand">
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">{g.title}</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-ink-soft hover:text-brand">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-ink-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Fuel1st is a brand of {site.legalName}.</p>
        </div>
      </div>
    </footer>
  );
}
