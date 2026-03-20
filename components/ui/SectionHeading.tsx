import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  gradient = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 text-center", className)} id={id}>
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          gradient ? "gradient-text" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
