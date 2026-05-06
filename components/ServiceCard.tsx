import Link from "next/link";
import type { Service } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service, href }: { service: Service; href?: string }) {
  const Icon = service.icon;
  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-sm">
      <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
      <h3 className="mt-4">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-soft">{service.short}</p>
      {href ? (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand"
        >
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </article>
  );
}
