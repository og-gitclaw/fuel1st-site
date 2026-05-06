import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a Florida-based provider of global aviation fuel and trip support, founded in ${site.founded}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We move fuel and trips, not paperwork."
        description={`Founded in ${site.founded} in South Florida, ${site.name} specializes in the downstream marketing of aviation fuel — buying from the world’s largest producers and delivering it to operators at more than ${site.airportsCount} airports.`}
      />

      <section className="section">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">What we do, in one paragraph</p>
          </div>
          <div className="prose-fuel">
            <p>
              {site.name} sources jet fuel directly from refiners and major distributors, then handles the downstream pieces — supplier contracts, into-plane release, dispatch coordination, and consolidated invoicing — so an operator&rsquo;s flight department can run a multi-stop trip through one team instead of negotiating with a different vendor at every airport.
            </p>
            <p>
              We work with general aviation operators, commercial airlines, charter operators, government and military customers, and corporate flight departments. The thread that ties them together is straightforward: missions that have to leave on time and arrive without surprises.
            </p>
            <p>
              See <a href="/services">what we do</a> or talk to <a href="/contact">dispatch</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-surface-slate">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <Card title="Our vision">
            A world where operators can focus on flying — confident that the fuel and the ground coordination will be where they&rsquo;re supposed to be, when they&rsquo;re supposed to be there.
          </Card>
          <Card title="Our mission">
            Be the single point of accountability for an operator&rsquo;s fuel program and trip support, anywhere in the world, around the clock.
          </Card>
          <Card title="How we work">
            One contract, one invoice, one dispatch team. Volume-backed pricing through major-supplier relationships. A culture that treats a 02:00 phone call the same as a 14:00 one.
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="rounded-2xl border border-slate-200 bg-white p-10">
            <p className="eyebrow">Customer breadth</p>
            <h2 className="mt-2 text-balance">Built for operators who don&rsquo;t fit neatly in one box.</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <Segment title="Business aviation">
                Charter operators, fractional programs, and corporate flight departments running unpredictable schedules across multiple FBOs.
              </Segment>
              <Segment title="Commercial airlines">
                Scheduled carriers managing fuel and trip needs in markets outside their primary network footprint.
              </Segment>
              <Segment title="Government & military">
                Defense and government customers requiring discreet supplier coordination on contingency or scheduled missions.
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
