"use client";

import { useEffect, useMemo, useState } from "react";
import { NEWS_CATEGORIES, type NewsCategory, type NewsItem } from "@/lib/rss";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "fuel1st_news_filter";

export function NewsFilter({ items }: { items: NewsItem[] }) {
  const [active, setActive] = useState<NewsCategory | "all">("all");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === "all" || NEWS_CATEGORIES.some((c) => c.id === saved))) {
        setActive(saved as NewsCategory | "all");
      }
    } catch {
      // ignore
    }
  }, []);

  function pick(next: NewsCategory | "all") {
    setActive(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((it) => it.categories.includes(active));
  }, [items, active]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter news by category">
        <FilterChip active={active === "all"} onClick={() => pick("all")} label="All" />
        {NEWS_CATEGORIES.map((c) => (
          <FilterChip
            key={c.id}
            active={active === c.id}
            onClick={() => pick(c.id)}
            label={c.label}
          />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-ink-soft">
          No items match this category right now. Check back tomorrow — the feed refreshes daily.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it, idx) => (
            <Reveal key={it.id} delay={Math.min(idx, 8) * 60} className="h-full">
              <NewsCard item={it} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition",
        active
          ? "border-brand bg-brand text-white"
          : "border-slate-200 bg-white text-ink-soft hover:border-brand-200 hover:text-brand",
      )}
    >
      {label}
    </button>
  );
}
