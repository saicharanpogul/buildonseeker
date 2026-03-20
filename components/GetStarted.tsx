import { GET_STARTED_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/components/ui/StepCard";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientGlow } from "@/components/ui/GradientGlow";

export function GetStarted() {
  return (
    <SectionWrapper id="get-started" className="relative py-24 lg:py-32">
      <GradientGlow
        color="cyan"
        size="lg"
        className="-right-32 top-1/4"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12">
        <SectionHeading
          title="Get Started"
          subtitle="Three steps from zero to shipped on Seeker."
          gradient
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {GET_STARTED_STEPS.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              heading={step.heading}
              description={step.description}
            >
              {step.code && (
                <div className="space-y-3">
                  <CodeBlock code={step.code} />
                  <CodeSnippet />
                </div>
              )}

              {step.skillInstall && (
                <div className="mt-3">
                  <p className="mb-2 text-xs text-text-muted">
                    Add the Seeker development skill to your AI coding agent:
                  </p>
                  <CodeBlock code={step.skillInstall} />
                </div>
              )}

              <a
                href={step.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:text-accent-purple/80"
              >
                {step.link.label}
                <svg
                  className="h-3.5 w-3.5"
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
            </StepCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function CodeSnippet() {
  const code = `import { isSeeker } from "seeker-sdk";

const verified = await isSeeker(connection, wallet);`;

  return (
    <div className="overflow-x-auto rounded-lg border border-border-card bg-[#0d0d14] p-3">
      <pre className="font-mono text-xs leading-relaxed">
        <code className="text-text-secondary">
          {code.split("\n").map((line, i) => (
            <span key={i} className="block">
              {highlightSyntax(line)}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

function highlightSyntax(line: string): React.ReactNode {
  if (line.startsWith("import") || line.startsWith("const")) {
    return (
      <span>
        <span className="text-accent-purple">
          {line.split(" ")[0]}
        </span>
        <span className="text-text-secondary">
          {" " + line.slice(line.indexOf(" ") + 1)}
        </span>
      </span>
    );
  }
  return <span className="text-text-secondary">{line}</span>;
}
