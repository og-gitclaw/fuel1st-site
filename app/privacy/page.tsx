import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy notice"
        description={`How ${site.legalName} collects, uses, and stores information.`}
      />
      <section className="section">
        <article className="container-page max-w-3xl prose-fuel">
          {/* TODO: legal review — current copy is boilerplate placeholder */}
          <p className="text-sm text-ink-muted">Last updated: {new Date().getFullYear()}</p>

          <h2 className="mt-6">1. Who we are</h2>
          <p>
            {site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website at {site.url}.
          </p>

          <h2>2. Information we collect</h2>
          <p>
            We collect only the information necessary to respond to inquiries and operate this website. This may include name, email address, phone number, company affiliation, and any details you choose to share when you contact us. We also collect basic anonymized analytics about how visitors use the site.
          </p>

          <h2>3. How we use information</h2>
          <p>
            Information you provide is used to respond to your inquiry, deliver the services you request, and follow up about related products and services. We do not sell personal information.
          </p>

          <h2>4. Cookies and analytics</h2>
          <p>
            This website uses minimal cookies for site analytics. See our <a href="/cookies">cookie notice</a> for the specifics. You can withdraw cookie consent at any time by clearing your browser&rsquo;s site data for this domain.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We retain inquiry records for as long as necessary to fulfill the purpose for which the information was collected, and as required by applicable law.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or export your personal information, and to object to or restrict certain processing. To exercise any of these rights, email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>

          <h2>7. Contact</h2>
          <p>
            For privacy questions or requests, contact us at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or {site.contact.phone}.
          </p>

          <p className="mt-10 text-sm text-ink-muted">
            This notice is a placeholder and has not yet been reviewed by counsel.
          </p>
        </article>
      </section>
    </>
  );
}
