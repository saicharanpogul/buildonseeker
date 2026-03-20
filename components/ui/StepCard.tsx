import { cn } from "@/lib/utils";

interface StepCardProps {
  step: number;
  heading: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function StepCard({
  step,
  heading,
  description,
  children,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border-card bg-bg-card p-6",
        className
      )}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-accent-purple/30 bg-accent-purple/10 font-heading text-lg font-bold text-accent-purple">
        {step}
      </div>
      <h3 className="font-heading text-lg font-semibold text-text-primary">
        {heading}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
