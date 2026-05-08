import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/photos";
import { Leaf, BarChart3, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability & SAF",
  description: "Sustainable Aviation Fuel supply, book-and-claim arrangements, carbon-offset programs, and reporting that holds up in disclosure.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sustainability"
        title="Lower-carbon fuel. Honest accounting. Reporting that holds up."
        description="Sustainable Aviation Fuel reduces life-cycle CO₂ versus conventional jet fuel. Where it's physically available, we deliver it. Where it isn't, we offer book-and-claim and offset programs as a credible bridge."
        photo={photos.skyJet}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <Reveal delay={0} className="h-full">
            <Pillar
              icon={Leaf}
              title="Physical SAF"
              body="Drop-in SAF supply at participating airports, integrated with your contract and invoice the same way as conventional jet fuel."
            />
          </Reveal>
          <Reveal delay={80} className="h-full">
            <Pillar
              icon={BarChart3}
              title="Book-and-claim"
              body="When a station can&rsquo;t take physical SAF, book the environmental attribute through a certified registry and claim it against your operations."
            />
          </Reveal>
          <Reveal delay={160} className="h-full">
            <Pillar
              icon={FileText}
              title="Reporting"
              body="Documentation suitable for corporate sustainability disclosure, scope-3 conversations with your auditor, and customer-facing emissions claims."
            />
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface-slate">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">How it fits together</p>
            <h2 className="mt-2 text-balance">A program, not a press release.</h2>
          </div>
          <div className="prose-fuel">
            <p>
              SAF reduces life-cycle CO₂ versus conventional Jet A. We treat it as a procurement program: a measurable share sourced as SAF or its book-and-claim equivalent, with certified offsets covering the rest where the operator chooses.
            </p>
            <p>
              Reporting runs at the same cadence as your fueling activity — no year-end scramble. Configure target percentages, registry preferences, and formats aligned to your disclosures.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-2xl text-balance">
            Tell us your sustainability targets. We&rsquo;ll show you what&rsquo;s achievable on your route.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Get a SAF assessment</Link>
            <Link href="/services#saf" className="btn-outline">SAF service detail</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ icon: Icon, title, body }: { icon: typeof Leaf; title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8">
      <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
      <h3 className="mt-4">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{body}</p>
    </article>
  );
}
