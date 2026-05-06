import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Download, Mail } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press & Media",
  description: "Fuel1st brand assets, palette, boilerplate, and media contact.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press & Media"
        title="Brand assets, boilerplate, and a contact for inquiries."
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2>Boilerplate</h2>
              <p className="prose-fuel mt-3">{site.description}</p>
              <p className="prose-fuel">
                Founded in {site.founded} and headquartered in Lauderdale by the Sea, Florida, the company specializes in the downstream marketing of aviation fuel and runs a 24/7 dispatch operation supporting general aviation, commercial, and military customers.
              </p>
            </div>
            <div>
              <h2>Palette</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Swatch hex="#6000CD" name="Brand" />
                <Swatch hex="#0F172A" name="Ink" textHex="#FFFFFF" />
                <Swatch hex="#454F5E" name="Body" textHex="#FFFFFF" />
                <Swatch hex="#F1F5F9" name="Surface slate" textHex="#0F172A" />
                <Swatch hex="#FAF9F5" name="Surface cream" textHex="#0F172A" />
                <Swatch hex="#FFFFFF" name="White" textHex="#0F172A" />
              </div>
            </div>
            <div>
              <h2>Logo files</h2>
              <p className="prose-fuel mt-3">SVG marks for use in editorial and partner contexts.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/favicon.svg" className="inline-flex items-center gap-2 text-brand underline" download>
                    <Download className="h-4 w-4" /> Favicon mark (SVG)
                  </a>
                </li>
                <li>
                  {/* TODO: add downloadable full wordmark logo pack (SVG/PNG) */}
                  <span className="text-ink-muted">Full logo pack — pending</span>
                </li>
              </ul>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-surface-cream p-8">
            <p className="eyebrow">Media contact</p>
            <p className="mt-3 text-sm text-ink-soft">
              For interviews, statements, or asset requests, please email the address below. We respond within one business day.
            </p>
            <a
              href={`mailto:${site.contact.email}?subject=Press%20inquiry`}
              className="btn-primary mt-6"
            >
              <Mail className="h-4 w-4" /> {site.contact.email}
            </a>
            <p className="mt-6 text-xs text-ink-muted">
              {/* TODO: add a one-pager PDF and updated press kit. */}
              One-pager and full press kit forthcoming.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

function Swatch({ hex, name, textHex = "#FFFFFF" }: { hex: string; name: string; textHex?: string }) {
  return (
    <div
      className="rounded-lg border border-slate-200 p-4"
      style={{ backgroundColor: hex, color: textHex }}
    >
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-xs opacity-80">{hex}</p>
    </div>
  );
}
