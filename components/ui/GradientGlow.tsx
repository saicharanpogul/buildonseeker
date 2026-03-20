import { cn } from "@/lib/utils";

interface GradientGlowProps {
  color?: "purple" | "green" | "cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const COLOR_MAP = {
  purple: "bg-accent-purple/10",
  green: "bg-accent-green/10",
  cyan: "bg-accent-cyan/10",
};

const SIZE_MAP = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
};

export function GradientGlow({
  color = "purple",
  size = "md",
  className,
}: GradientGlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        COLOR_MAP[color],
        SIZE_MAP[size],
        className
      )}
      aria-hidden="true"
    />
  );
}
