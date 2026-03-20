import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showPrompt?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "bash",
  showPrompt = true,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-lg border border-border-card bg-[#0d0d14] p-4",
        className
      )}
    >
      <pre className="font-mono text-sm leading-relaxed">
        <code className="text-text-primary">
          {showPrompt && language === "bash" && (
            <span className="select-none text-accent-green">$ </span>
          )}
          {code}
        </code>
      </pre>
    </div>
  );
}
