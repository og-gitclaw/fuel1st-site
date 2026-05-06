import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie notice" };

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cookies"
        title="Cookie notice"
        description="How and why this website uses cookies and similar storage."
      />
      <section className="section">
        <article className="container-page max-w-3xl prose-fuel">
          {/* TODO: legal review — current copy is boilerplate placeholder */}
          <p className="text-sm text-ink-muted">Last updated: {new Date().getFullYear()}</p>

          <h2 className="mt-6">What we use</h2>
          <p>
            This website uses a small number of first-party storage entries to remember your preferences (for example, your news category filter and acknowledgment of this notice) and a privacy-respecting analytics service operated by our hosting provider that records aggregate visit data without setting persistent identifiers.
          </p>

          <h2>What we don&rsquo;t use</h2>
          <p>
            We do not use third-party advertising cookies, cross-site tracking, or behavioral profiling. We do not sell personal information.
          </p>

          <h2>Managing cookies</h2>
          <p>
            You can clear site data at any time through your browser settings. Doing so will reset the cookie banner acknowledgment and any saved preferences (such as your news category filter).
          </p>

          <h2>Contact</h2>
          <p>
            For cookie-related questions, email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>

          <p className="mt-10 text-sm text-ink-muted">
            This notice is a placeholder and has not yet been reviewed by counsel.
          </p>
        </article>
      </section>
    </>
  );
}
