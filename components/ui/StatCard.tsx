import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  suffix?: string;
  prefix?: string;
  live?: boolean;
  className?: string;
}

export function StatCard({
  label,
  value,
  suffix,
  prefix,
  live = false,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border-card bg-bg-card p-6 card-hover",
        live && "glow-green",
        className
      )}
    >
      {live && (
        <div className="absolute right-4 top-4 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent-green pulse-live" />
          <span className="text-xs text-accent-green">Live</span>
        </div>
      )}
      <p className="text-sm font-medium text-text-secondary">{label}</p>
      <div className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary lg:text-4xl">
        {prefix && (
          <span className="text-text-secondary">{prefix}</span>
        )}
        {value}
        {suffix && (
          <span className="ml-1 text-lg text-text-secondary">{suffix}</span>
        )}
      </div>
    </div>
  );
}
