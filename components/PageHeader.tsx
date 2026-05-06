import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Photo } from "@/lib/photos";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  photo?: Photo;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, photo, className }: PageHeaderProps) {
  if (photo) {
    return (
      <div className={cn("relative isolate overflow-hidden border-b border-slate-200", className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30"
        />
        <div className="container-page relative py-20 text-white md:py-28">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-3xl text-balance text-white">{title}</h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-pretty text-lg text-white/85">{description}</p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("border-b border-slate-200 bg-surface-cream", className)}>
      <div className="container-page py-16 md:py-20">
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="text-balance">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
