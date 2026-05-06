import Parser from "rss-parser";

export type NewsCategory =
  | "commercial"
  | "business-aviation"
  | "military"
  | "mro"
  | "sustainability";

export const NEWS_CATEGORIES: { id: NewsCategory; label: string }[] = [
  { id: "commercial", label: "Commercial" },
  { id: "business-aviation", label: "Business Aviation" },
  { id: "military", label: "Military" },
  { id: "mro", label: "MRO" },
  { id: "sustainability", label: "Sustainability (SAF)" },
];

export type NewsItem = {
  id: string;
  title: string;
  link: string;
  source: string;
  publishedAt: string;
  excerpt: string;
  image?: string;
  categories: NewsCategory[];
};

const FEEDS: { source: string; url: string }[] = [
  { source: "Aviation Week", url: "https://aviationweek.com/awn-rss" },
  { source: "FlightGlobal", url: "https://www.flightglobal.com/rss" },
  { source: "Simple Flying", url: "https://simpleflying.com/feed/" },
  { source: "AIN", url: "https://www.ainonline.com/rss.xml" },
];

const KEYWORDS: Record<NewsCategory, RegExp> = {
  commercial: /\b(airline|airliner|boeing|airbus|737|787|a320|a350|a380|wide[- ]?body|narrow[- ]?body|low[- ]?cost|leisure|carrier|route network|fleet renewal)\b/i,
  "business-aviation": /\b(business jet|bizjet|gulfstream|bombardier|cessna|citation|pilatus|embraer phenom|honda jet|nbaa|fbo|charter|fractional|netjets|flexjet|vista)\b/i,
  military: /\b(air force|military|defense|defence|fighter|tanker|f-?35|f-?16|f-?15|kc-?46|airborne refueling|mro contract|navy|royal air force|usaf|raf|nato)\b/i,
  mro: /\b(mro|maintenance|overhaul|repair|engineering|hangar|ad note|airworthiness|engine shop|inspection)\b/i,
  sustainability: /\b(saf|sustainable aviation fuel|sustainability|carbon|emissions|net[- ]?zero|electric aircraft|hydrogen|biofuel|book[- ]?and[- ]?claim|offset)\b/i,
};

const BLOCKLIST = /\baeg\b/i;

type ParserItem = {
  title?: string;
  link?: string;
  isoDate?: string;
  pubDate?: string;
  contentSnippet?: string;
  content?: string;
  enclosure?: { url?: string };
  "media:content"?: { $?: { url?: string } };
};

const parser = new Parser<Record<string, never>, ParserItem>({
  timeout: 12000,
  customFields: { item: ["media:content", "enclosure"] },
  headers: { "User-Agent": "Fuel1st-News-Aggregator/1.0 (+https://fuel1st.com)" },
});

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function extractImage(item: ParserItem): string | undefined {
  const media = item["media:content"];
  if (media && (media as { $?: { url?: string } }).$?.url) return (media as { $?: { url?: string } }).$!.url;
  if (item.enclosure?.url) return item.enclosure.url;
  const html = item.content || "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

function categorize(title: string, excerpt: string): NewsCategory[] {
  const text = `${title} ${excerpt}`;
  const cats: NewsCategory[] = [];
  for (const [cat, re] of Object.entries(KEYWORDS) as [NewsCategory, RegExp][]) {
    if (re.test(text)) cats.push(cat);
  }
  return cats;
}

export async function fetchAggregatedNews(limit = 24): Promise<NewsItem[]> {
  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const parsed = await parser.parseURL(feed.url);
      return (parsed.items || []).map((it): NewsItem => {
        const title = (it.title || "").trim();
        const link = (it.link || "").trim();
        const dateStr = it.isoDate || it.pubDate || new Date().toISOString();
        const excerpt = stripHtml(it.contentSnippet || it.content || "").slice(0, 280);
        return {
          id: link || `${feed.source}-${title}`,
          title,
          link,
          source: feed.source,
          publishedAt: new Date(dateStr).toISOString(),
          excerpt,
          image: extractImage(it),
          categories: categorize(title, excerpt),
        };
      });
    }),
  );

  const items: NewsItem[] = [];
  for (const r of results) {
    if (r.status === "fulfilled") items.push(...r.value);
  }

  const filtered = items.filter(
    (it) => !BLOCKLIST.test(it.title) && !BLOCKLIST.test(it.excerpt) && !!it.title && !!it.link,
  );

  const seen = new Set<string>();
  const unique = filtered.filter((it) => {
    if (seen.has(it.link)) return false;
    seen.add(it.link);
    return true;
  });

  unique.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  return unique.slice(0, limit);
}
