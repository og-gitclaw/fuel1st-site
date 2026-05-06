export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string;
  todo?: boolean;
};

// {/* TODO: replace this placeholder post with real editorial content */}
export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-fuel1st-insights",
    title: "Welcome to the Fuel1st insights feed",
    excerpt:
      "An introduction to what we'll be writing about here: aviation fuel markets, trip-support craft, and the operational realities of moving aircraft around the world.",
    date: "2026-05-01",
    todo: true,
    body: `This is the inaugural post on the Fuel1st insights feed.

Our plan for this space is to write about the things that don't quite fit a press release: how our dispatch team thinks about a tricky international turn, what we learn from supply disruptions in the regions we operate, and the sustainability conversations our customers are having with their own boards.

We'll keep it practical. If a topic helps a chief pilot, an ops manager, or a sustainability lead make a better call, it belongs here.

Subscribe by visiting this feed regularly. We won't send a newsletter — yet.`,
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
