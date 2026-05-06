import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/services";
import { photos } from "@/lib/photos";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Fuel supply, trip support, logistics, card programs, flight planning, ground handling, and Sustainable Aviation Fuel — coordinated by one Fuel1st team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything an operator needs to leave on time."
        description="From the contract for jet fuel to the FBO confirmation at the destination, our services are designed to behave like one program — even when the route involves a dozen suppliers and four time zones."
        photo={photos.rampDusk}
      />

      <section className="section">
        <div className="container-page">
          <ul className="grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="block rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium text-ink hover:border-brand-200 hover:text-brand"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {services.map((s, idx) => {
        const Icon = s.icon;
        const altRow = idx % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={altRow ? "section bg-surface-slate" : "section"}
          >
            <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <Icon className="h-10 w-10 text-brand" aria-hidden="true" />
                <h2 className="mt-4 text-balance">{s.name}</h2>
                <div className="prose-fuel mt-4">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <p className="eyebrow">Highlights</p>
                <ul className="mt-4 space-y-3">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-ink-soft">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary mt-8">Talk to dispatch</Link>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
