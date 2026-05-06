import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Clock, Plane, Leaf } from "lucide-react";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { NewsCard } from "@/components/NewsCard";
import { fetchAggregatedNews } from "@/lib/rss";
import { site, formattedAddress } from "@/lib/site";
import { photos } from "@/lib/photos";

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
    <section className="relative isolate overflow-hidden">
      <Image
        src={photos.heroCloudsJet.src}
        alt={photos.heroCloudsJet.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30"
      />
      <div className="container-page relative grid items-center gap-12 py-24 text-white md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
            {site.tagline}
          </p>
          <h1 className="mt-4 text-balance text-white">
            Aviation fuel and trip support, on call{" "}
            <span className="text-brand-200">24/7</span>.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-white/85">
            From Lauderdale by the Sea, {site.name} coordinates jet fuel, dispatch, and ground support for operators flying to {site.airportsCount} airports worldwide. One contract, one invoice, one team accountable for the trip.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="btn inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/15"
            >
              See what we do
            </Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/15 bg-ink/40 backdrop-blur-sm">
        <div className="container-page">
          <dl className="grid grid-cols-3 gap-6 py-8 text-white">
            <Stat label="Airports" value={site.airportsCount} />
            <Stat label="Coverage" value={site.countriesCount} />
            <Stat label="Dispatch" value={site.hoursCount} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold text-white md:text-3xl">{value}</dd>
    </div>
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
          <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 lg:block">
            <Image
              src={photos.runwayAerial.src}
              alt={photos.runwayAerial.alt}
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-surface-cream p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Headquarters</p>
          <p className="mt-2 text-2xl font-semibold text-ink">Lauderdale by the Sea, Florida</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="text-ink-muted">Address</dt>
              <dd className="mt-0.5 text-ink">{formattedAddress}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Phone</dt>
              <dd className="mt-0.5 text-ink">
                <a href={`tel:${site.contact.phoneTel}`} className="hover:text-brand">{site.contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-muted">Email</dt>
              <dd className="mt-0.5 text-ink">
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand">{site.contact.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-muted">Hours</dt>
              <dd className="mt-0.5 text-ink">Dispatch staffed 24/7, 365 days a year</dd>
            </div>
          </dl>
          <Link href="/locations" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand">
            View office on map <ArrowRight className="h-4 w-4" />
          </Link>
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
        <div className="relative isolate overflow-hidden rounded-2xl">
          <Image
            src={photos.skyJet.src}
            alt={photos.skyJet.alt}
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-brand/95 via-brand-700/85 to-ink/80"
          />
          <div className="relative p-10 text-white md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">Sustainability</p>
            <h2 className="mt-3 max-w-2xl text-balance text-white">
              Lower-carbon fuel where it&rsquo;s physically available — and a credible bridge where it isn&rsquo;t.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-white/90">
              Our SAF program supplies sustainable aviation fuel at participating airports, with book-and-claim and carbon-offset arrangements covering the gaps. The reporting we generate is built to stand up to scrutiny in a corporate sustainability disclosure.
            </p>
            <Link href="/sustainability" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-brand hover:bg-brand-50">
              Read more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
