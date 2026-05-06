import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Website terms of use"
        description={`Terms governing use of this website. Service-specific terms are issued separately when ${site.name} engages with a customer.`}
      />
      <section className="section">
        <article className="container-page max-w-3xl prose-fuel">
          {/* TODO: legal review — current copy is boilerplate placeholder */}
          <p className="text-sm text-ink-muted">Last updated: {new Date().getFullYear()}</p>

          <h2 className="mt-6">1. Acceptance</h2>
          <p>
            By accessing or using {site.url}, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <h2>2. Use of content</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of {site.legalName} or its licensors and is protected by copyright and trademark law. You may view and download content for personal, non-commercial use only.
          </p>

          <h2>3. No professional advice</h2>
          <p>
            Information on this site is provided for general informational purposes and does not constitute professional advice. Specific operational guidance is provided as part of an executed service agreement.
          </p>

          <h2>4. Third-party links</h2>
          <p>
            The site links to third-party content, including news articles syndicated from public RSS feeds. These sources are independently operated; we do not control their content and are not responsible for it.
          </p>

          <h2>5. Disclaimer of warranties</h2>
          <p>
            The site is provided on an &ldquo;as is&rdquo; basis without warranties of any kind, express or implied.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {site.legalName} is not liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of this site.
          </p>

          <h2>7. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Florida, United States, without regard to conflict-of-laws principles.
          </p>

          <h2>8. Contact</h2>
          <p>
            Questions about these terms should be directed to <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>

          <p className="mt-10 text-sm text-ink-muted">
            These terms are a placeholder and have not yet been reviewed by counsel.
          </p>
        </article>
      </section>
    </>
  );
}
