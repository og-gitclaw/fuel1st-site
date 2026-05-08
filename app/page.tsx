import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Clock, Plane, Leaf } from "lucide-react";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import { fetchAggregatedNews } from "@/lib/rss";
import { site } from "@/lib/site";
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
      <SecondaryBand />
      <ServicesOverview />
      <SustainabilityBand />
      <NewsStrip items={news} />
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
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/5 md:via-ink/35 md:to-transparent" />
      <div className="container-page relative grid items-center py-24 text-white sm:py-28 md:py-36 lg:py-44 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
            Global aviation fuel solutions
          </p>
          <h1 className="mt-4 text-balance text-white">
            Aviation fuel and trip support, on call <span className="text-brand-200">24/7</span>.
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-lg text-white/85">
            One contract, one invoice, one dispatch team — across {site.airportsCount} airports.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="btn inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/15"
            >
              See our services
            </Link>
          </div>
        </div>
        {/* Empty right column on desktop — lets the plane breathe */}
        <div aria-hidden className="hidden lg:block" />
      </div>
      <div className="relative border-t border-white/15 bg-ink/45 backdrop-blur-sm">
        <div className="container-page">
          <dl className="grid grid-cols-3 gap-6 py-7 text-white">
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
  // If the value starts with digits (with optional commas), animate the
  // numeric portion via a ticker and append whatever suffix follows
  // (e.g. "1,800+" -> ticker 1800, suffix "+").
  const numericMatch = value.match(/^([\d,]+)(.*)$/);
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-white/55">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold text-white md:text-3xl">
        {numericMatch ? (
          <Ticker
            target={parseInt(numericMatch[1].replace(/,/g, ""), 10)}
            format={(n) => `${n.toLocaleString()}${numericMatch[2]}`}
          />
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function ValueStrip() {
  const items = [
    { icon: Globe2, title: "Global supplier network", body: "Direct relationships with major refiners keep ramp pricing competitive." },
    { icon: Clock, title: "Always-on dispatch", body: "Multilingual coordinators handle slots, permits, and FBO changes around the clock." },
    { icon: Plane, title: "One point of contact", body: "Single contract, single invoice, single team across every stop." },
    { icon: Leaf, title: "Lower-carbon options", body: "Physical SAF where available, plus book-and-claim and offset programs everywhere else." },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }, idx) => (
            <Reveal key={title} delay={idx * 80}>
              <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
              <h3 className="mt-3 text-base">{title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecondaryBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={photos.rampDusk.src}
        alt={photos.rampDusk.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand-700/85 to-ink/70" />
      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Worldwide aviation fuel & services
          </p>
          <h2 className="mt-3 text-balance text-white">
            From the contract to the ramp — handled.
          </h2>
          <p className="mt-4 text-pretty text-white/85">
            We source jet fuel directly, then run the trip-support details so your dispatch team isn&rsquo;t chasing FBOs at 02:00.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-brand hover:bg-brand-50"
          >
            Explore our services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="bg-surface-slate py-20 md:py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-2 max-w-2xl text-balance">
              A full set of services for moving aircraft.
            </h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-brand">
            All services <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 80} className="h-full">
              <ServiceCard service={s} href={`/services#${s.slug}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SustainabilityBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={photos.skyJet.src}
        alt={photos.skyJet.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-l from-brand-700/95 via-brand/85 to-ink/70" />
      <div className="container-page relative py-24 md:py-32">
        <div className="ml-auto max-w-xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Sustainability</p>
          <h2 className="mt-3 text-balance text-white">Lower-carbon fuel. Honest accounting.</h2>
          <p className="mt-4 text-pretty text-white/85">
            Sustainable Aviation Fuel where it&rsquo;s available, book-and-claim everywhere else, and reporting that holds up in disclosure.
          </p>
          <Link
            href="/sustainability"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-brand hover:bg-brand-50"
          >
            See the SAF program <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsStrip({ items }: { items: Awaited<ReturnType<typeof fetchAggregatedNews>> }) {
  return (
    <section className="bg-surface-slate py-20 md:py-24">
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
            News feed temporarily unavailable.{" "}
            <Link href="/news" className="text-brand underline">Visit the news page</Link>.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {items.map((it, idx) => (
              <Reveal key={it.id} delay={idx * 80} className="h-full">
                <NewsCard item={it} compact />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page text-center">
        <p className="eyebrow">Ready to talk?</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance">
          Send the route. We&rsquo;ll send a quote.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary">Get a quote</Link>
          <a href={`mailto:${site.contact.email}`} className="btn-outline">Email dispatch</a>
        </div>
      </div>
    </section>
  );
}
