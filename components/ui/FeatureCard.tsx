import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  heading: string;
  body: string;
  className?: string;
}

export function FeatureCard({
  icon,
  heading,
  body,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-border-card bg-bg-card p-6 card-hover",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple transition-colors group-hover:bg-accent-purple/20">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold text-text-primary">
        {heading}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{body}</p>
    </div>
  );
}
