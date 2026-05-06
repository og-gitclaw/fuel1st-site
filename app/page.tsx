import Link from "next/link";
import { ArrowRight, Globe2, Clock, Plane, Leaf } from "lucide-react";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { NewsCard } from "@/components/NewsCard";
import { fetchAggregatedNews } from "@/lib/rss";
import { site, formattedAddress } from "@/lib/site";

export const revalidate = 86400;

export default async function HomePage() {
  let news: Awaited<ReturnType<typeof fetchAggregatedNews>> = [];
  try {
    news = (await fetchAggregatedNews(8)).slice(0, 3);
  } catch {
    news = [];
  }

  return (
    <>
      <Hero />
      <ValueStrip />
      <ServicesOverview />
      <LocationsStrip />
      <NewsStrip items={news} />
      <SustainabilityCallout />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-surface-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_20%,rgba(96,0,205,0.18),transparent_55%),radial-gradient(circle_at_85%_60%,rgba(96,0,205,0.10),transparent_60%)]"
      />
      <div className="container-page relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-4 text-balance">
            Aviation fuel and trip support, on call <span className="text-brand">24/7</span>.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-ink-soft">
            From Lauderdale by the Sea, {site.name} coordinates jet fuel, dispatch, and ground support for operators flying to {site.airportsCount} airports worldwide. One contract, one invoice, one team accountable for the trip.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">
              See what we do
            </Link>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-8 text-sm">
            <div>
              <dt className="text-ink-muted">Airports</dt>
              <dd className="mt-1 text-2xl font-semibold text-ink">{site.airportsCount}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Coverage</dt>
              <dd className="mt-1 text-2xl font-semibold text-ink">{site.countriesCount}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Dispatch</dt>
              <dd className="mt-1 text-2xl font-semibold text-ink">{site.hoursCount}</dd>
            </div>
          </dl>
        </div>
        <div aria-hidden className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand to-brand-700" />
          <div className="relative aspect-[4/5] rounded-2xl border border-brand-200 bg-white/70 p-8 backdrop-blur-sm">
            <Plane className="h-10 w-10 text-brand" />
            <p className="mt-6 text-2xl font-semibold leading-snug text-ink">
              &ldquo;The dispatch desk took an unexpected slot change at 02:00 local and rerouted the turn before our crew was on the ramp.&rdquo;
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              {/* TODO: replace with a real client testimonial */}
              Operations Manager, mid-size charter operator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueStrip() {
  const items = [
    {
      icon: Globe2,
      title: "Global supplier network",
      body: "Direct relationships with major refiners and primary distributors keep ramp pricing competitive across the route.",
    },
    {
      icon: Clock,
      title: "Always-on dispatch",
      body: "Multilingual coordinators handle slots, permits, and FBO changes around the clock — including yours.",
    },
    {
      icon: Plane,
      title: "Single point of contact",
      body: "One contract, one invoice, one team accountable for fuel and ground services across every stop.",
    },
    {
      icon: Leaf,
      title: "Lower-carbon options",
      body: "Sustainable Aviation Fuel where it's available, plus book-and-claim and offset programs everywhere else.",
    },
  ];
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-3">{title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="section bg-surface-slate">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-2 max-w-2xl text-balance">
              A full set of services for moving aircraft — and the fuel that powers them.
            </h2>
          </div>
          <Link href="/services" className="btn-outline">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} href={`/services#${s.slug}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsStrip() {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Where we are</p>
          <h2 className="mt-2 text-balance">Headquartered in South Florida, dispatching worldwide.</h2>
          <p className="prose-fuel mt-4">
            Our headquarters sits along the South Florida coast, a short drive from Fort Lauderdale-Hollywood International. From here, the dispatch team coordinates fuel and trip support for operators in every operational time zone.
          </p>
          <Link href="/locations" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand">
            See our office <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-surface-cream p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Headquarters</p>
          <p className="mt-2 text-lg font-semibold text-ink">Lauderdale by the Sea, Florida</p>
          <p className="mt-3 text-sm text-ink-soft">{formattedAddress}</p>
          <p className="mt-2 text-sm text-ink-soft">
            <a href={`tel:${site.contact.phoneTel}`} className="hover:text-brand">{site.contact.phone}</a>
            {" · "}
            <a href={`mailto:${site.contact.email}`} className="hover:text-brand">{site.contact.email}</a>
          </p>
          <iframe
            title="Map of Fuel1st headquarters"
            src={`https://www.google.com/maps?q=${encodeURIComponent(formattedAddress)}&output=embed`}
            className="mt-4 h-72 w-full rounded-lg border border-slate-200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function NewsStrip({ items }: { items: Awaited<ReturnType<typeof fetchAggregatedNews>> }) {
  return (
    <section className="section bg-surface-slate">
      <div className="container-page">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Latest aviation news</p>
            <h2 className="mt-2">From the wires.</h2>
          </div>
          <Link href="/news" className="hidden text-sm font-medium text-brand md:inline-flex">
            All news <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
        {items.length === 0 ? (
          <p className="mt-8 text-sm text-ink-soft">
            News feed temporarily unavailable. <Link href="/news" className="text-brand underline">Visit the news page</Link>.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {items.map((it) => (
              <NewsCard key={it.id} item={it} compact />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SustainabilityCallout() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-700 p-10 text-white md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">Sustainability</p>
          <h2 className="mt-3 max-w-2xl text-white text-balance">
            Lower-carbon fuel where it&rsquo;s physically available — and a credible bridge where it isn&rsquo;t.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-brand-100/90">
            Our SAF program supplies sustainable aviation fuel at participating airports, with book-and-claim and carbon-offset arrangements covering the gaps. The reporting we generate is built to stand up to scrutiny in a corporate sustainability disclosure.
          </p>
          <Link href="/sustainability" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-brand hover:bg-brand-50">
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="section">
      <div className="container-page text-center">
        <p className="eyebrow">Ready to talk?</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance">
          Tell us about the route. We&rsquo;ll send a quote — and, if it helps, a dispatch contact for the trip.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary">Get a quote</Link>
          <a href={`mailto:${site.contact.email}`} className="btn-outline">Email dispatch</a>
        </div>
      </div>
    </section>
  );
}
