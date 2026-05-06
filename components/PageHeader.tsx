import { cn } from "@/lib/cn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
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
