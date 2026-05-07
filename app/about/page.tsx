import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a Florida-based provider of global aviation fuel and trip support, founded in ${site.founded}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="One team. Every airport. Every time zone."
        description={`Founded in ${site.founded} in South Florida. Downstream marketing of aviation fuel to operators at ${site.airportsCount} airports worldwide.`}
        photo={photos.jetHeadOn}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">In one paragraph</p>
          </div>
          <p className="prose-fuel">
            {site.name} sources jet fuel directly from refiners and major distributors, then handles the downstream pieces — contracts, into-plane release, dispatch, consolidated invoicing — so a flight department can run a multi-stop trip through one team.
          </p>
        </div>
      </section>

      <section className="section bg-surface-slate">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <Card title="Our vision">
            Operators focused on flying, not chasing FBOs and suppliers.
          </Card>
          <Card title="Our mission">
            Be the single point of accountability for fuel and trip support, anywhere, around the clock.
          </Card>
          <Card title="How we work">
            One contract. One invoice. One dispatch team. A culture that treats 02:00 the same as 14:00.
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="rounded-2xl border border-slate-200 bg-white p-10">
            <p className="eyebrow">Who we serve</p>
            <h2 className="mt-2 text-balance">Operators who don&rsquo;t fit one box.</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <Segment title="Business aviation">
                Charter, fractional, and corporate flight departments with unpredictable schedules.
              </Segment>
              <Segment title="Commercial airlines">
                Scheduled carriers managing fuel and trip needs outside their primary network.
              </Segment>
              <Segment title="Government &amp; military">
                Defense and government customers on contingency or scheduled missions.
              </Segment>
            </div>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl bg-white p-8 shadow-sm">
      <h3>{title}</h3>
      <p className="mt-3 text-ink-soft">{children}</p>
    </article>
  );
}

function Segment({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{children}</p>
    </div>
  );
}
