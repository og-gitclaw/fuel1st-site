import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site, formattedAddress } from "@/lib/site";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Locations",
  description: `${site.name}'s headquarters in Lauderdale by the Sea, Florida.`,
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Locations"
        title="One office, global reach."
        description={`Our headquarters in Lauderdale by the Sea coordinates fuel and trip support for operators flying to ${site.airportsCount} airports worldwide.`}
        photo={photos.runwayAerial}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-slate-200 bg-surface-cream p-8">
            <p className="eyebrow">Headquarters</p>
            <h2 className="mt-2 text-balance">Lauderdale by the Sea, Florida</h2>
            <div className="mt-6 space-y-2 text-ink-soft">
              <p>{site.contact.address.street}</p>
              <p>
                {site.contact.address.city}, {site.contact.address.region} {site.contact.address.postal}
              </p>
              <p>{site.contact.address.countryName}</p>
            </div>
            <div className="mt-6 space-y-1 text-sm">
              <p>
                <span className="text-ink-muted">Phone </span>
                <a href={`tel:${site.contact.phoneTel}`} className="font-medium text-ink hover:text-brand">
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <span className="text-ink-muted">Email </span>
                <a href={`mailto:${site.contact.email}`} className="font-medium text-ink hover:text-brand">
                  {site.contact.email}
                </a>
              </p>
              <p>
                <span className="text-ink-muted">Hours </span>
                <span className="font-medium text-ink">Dispatch staffed 24/7, 365 days a year</span>
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-8">Get directions or a quote</Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title={`Map of ${site.name} headquarters`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(formattedAddress)}&output=embed`}
              className="h-[500px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
