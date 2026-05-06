import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { leadership } from "@/lib/leadership";
import { UserCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the team running Fuel1st's dispatch, supply, and sustainability programs.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="The team behind the dispatch desk."
        description="Our leaders combine experience in aviation fuel logistics, FBO operations, and global trip support."
      />
      <section className="section">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex-shrink-0">
                <UserCircle2 className="h-16 w-16 text-brand-200" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{leader.name}</h2>
                <p className="text-sm font-medium text-brand">{leader.role}</p>
                <p className="mt-3 text-sm text-ink-soft">{leader.bio}</p>
                {/* TODO: replace with real bio */}
              </div>
            </article>
          ))}
        </div>
        <div className="container-page mt-12">
          <p className="text-xs text-ink-muted">
            Bios on this page are placeholders pending review.
          </p>
        </div>
      </section>
    </>
  );
}
