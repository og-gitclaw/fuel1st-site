import Image from "next/image";
import type { NewsItem } from "@/lib/rss";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NewsCard({ item, compact = false }: { item: NewsItem; compact?: boolean }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-brand-200"
    >
      {!compact && item.image ? (
        <div className="relative aspect-[16/9] w-full bg-surface-slate">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-brand">
          {item.source} · {formatDate(item.publishedAt)}
        </p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-ink group-hover:text-brand">
          {item.title}
        </h3>
        {!compact && item.excerpt ? (
          <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{item.excerpt}</p>
        ) : null}
      </div>
    </a>
  );
}
