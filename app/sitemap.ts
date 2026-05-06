import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/sustainability",
    "/locations",
    "/leadership",
    "/news",
    "/blog",
    "/faq",
    "/press",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];
  const lastModified = new Date();

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));

  const serviceEntries = services.map((s) => ({
    url: `${base}/services#${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogEntries = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
