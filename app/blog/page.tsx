import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { blogPosts } from "@/lib/blog";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Insights",
  description: "Operational notes, market commentary, and sustainability updates from the Fuel1st team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the dispatch desk."
        description="Practical writing on aviation fuel markets, trip support craft, and operating decisions."
        photo={photos.engineDetail}
      />
      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-brand">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                {post.todo ? " · placeholder" : ""}
              </p>
              <h2 className="mt-2 text-xl group-hover:text-brand">{post.title}</h2>
              <p className="mt-3 text-sm text-ink-soft">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
