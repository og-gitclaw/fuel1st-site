import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { blogPosts, getPost } from "@/lib/blog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader
        eyebrow={new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        title={post.title}
        description={post.excerpt}
      />
      <section className="section">
        <article className="container-page max-w-3xl prose-fuel whitespace-pre-line">
          {post.body}
        </article>
        <div className="container-page mt-12 max-w-3xl">
          <Link href="/blog" className="text-sm font-medium text-brand">← All insights</Link>
        </div>
      </section>
    </>
  );
}
