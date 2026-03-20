import { cn } from "@/lib/utils";

interface ResourceCardProps {
  name: string;
  description: string;
  url: string;
  npm?: string;
  className?: string;
}

export function ResourceCard({
  name,
  description,
  url,
  npm,
  className,
}: ResourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-start justify-between rounded-xl border border-border-card bg-bg-card p-5 card-hover",
        className
      )}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-base font-semibold text-text-primary">
            {name}
          </h3>
          {npm && (
            <span className="rounded-full bg-accent-green/10 px-2 py-0.5 text-xs text-accent-green">
              npm
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-text-secondary">{description}</p>
      </div>
      <svg
        className="ml-3 mt-0.5 h-4 w-4 flex-shrink-0 text-text-muted transition-colors group-hover:text-accent-purple"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}
