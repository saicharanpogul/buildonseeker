"use client";

import { useState } from "react";
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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border-card bg-[#0d0d14] p-4 pr-12",
        className
      )}
    >
      <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-all">
        <code className="text-text-primary">
          {showPrompt && language === "bash" && (
            <span className="select-none text-accent-green">$ </span>
          )}
          {code}
        </code>
      </pre>

      <button
        onClick={handleCopy}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-[#0d0d14]/80 p-2 text-text-muted opacity-0 backdrop-blur transition-all hover:bg-white/10 hover:text-text-primary focus:opacity-100 group-hover:opacity-100"
        aria-label="Copy code"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg className="h-4 w-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
