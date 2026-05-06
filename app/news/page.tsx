import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { NewsFilter } from "@/components/NewsFilter";
import { fetchAggregatedNews } from "@/lib/rss";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Aviation news",
  description: "Daily-refreshed aggregate of business and commercial aviation news from Aviation Week, FlightGlobal, Simple Flying, and AIN.",
};

export default async function NewsPage() {
  let items: Awaited<ReturnType<typeof fetchAggregatedNews>> = [];
  try {
    items = await fetchAggregatedNews(12);
  } catch {
    items = [];
  }

  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Aviation news, refreshed daily."
        description="Items aggregated from public RSS feeds. Click through to read at the original publication."
      />
      <section className="section">
        <div className="container-page">
          {items.length === 0 ? (
            <p className="text-ink-soft">
              The news feed is temporarily unavailable. Please refresh in a few minutes.
            </p>
          ) : (
            <NewsFilter items={items} />
          )}
          <p className="mt-12 text-xs text-ink-muted">
            Sources: Aviation Week, FlightGlobal, Simple Flying, AIN. Original publishers retain all rights to their content.
          </p>
        </div>
      </section>
    </>
  );
}
