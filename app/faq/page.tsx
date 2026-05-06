import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Fuel1st's coverage, dispatch, SAF, billing, and how to get a quote.",
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions we get a lot." />
      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
                  {f.q}
                  <span aria-hidden className="text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
