import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site, formattedAddress } from "@/lib/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for fuel quotes, trip support, or general inquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about the trip."
        description="The dispatch desk is staffed around the clock. Email or call for a quote — sending the route and tail number ahead speeds the response."
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-6">
            <ContactItem icon={Phone} label="Phone">
              <a href={`tel:${site.contact.phoneTel}`} className="text-ink hover:text-brand">
                {site.contact.phone}
              </a>
            </ContactItem>
            <ContactItem icon={Mail} label="Email">
              <a href={`mailto:${site.contact.email}`} className="text-ink hover:text-brand">
                {site.contact.email}
              </a>
            </ContactItem>
            <ContactItem icon={MapPin} label="Address">
              <span className="text-ink">{formattedAddress}</span>
            </ContactItem>
            <ContactItem icon={Clock} label="Hours">
              <span className="text-ink">Dispatch staffed 24/7, 365 days a year</span>
            </ContactItem>
          </aside>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="eyebrow">Send a message</p>
            <h2 className="mt-2 text-2xl">We&rsquo;ll reply by the next business day.</h2>
            <ContactForm />
            <p className="mt-4 text-xs text-ink-muted">
              This form composes an email in your default mail client. For active dispatch issues, please call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden="true" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{label}</p>
        <div className="mt-1 text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${site.contact.email}`}
      method="post"
      encType="text/plain"
      className="mt-6 space-y-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Company / operator" name="company" />
      <Field label="Tail number (optional)" name="tail" />
      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          placeholder="Route, dates, any constraints..."
        />
      </div>
      <button type="submit" className="btn-primary">Open mail client</button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink" htmlFor={name}>
        {label}
        {required ? <span className="ml-1 text-brand">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
