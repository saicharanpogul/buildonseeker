import { GET_STARTED_STEPS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CodeBlock } from "@/components/ui/CodeBlock";

export function GetStarted() {
  return (
    <SectionWrapper id="get-started" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-purple">
            Get Started
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Zero to shipped in three steps
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {GET_STARTED_STEPS.map((step) => (
            <div key={step.step} className="card p-6">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 font-heading text-sm font-bold text-accent-purple">
                {step.step}
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary">
                {step.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>

              {step.code && (
                <div className="mt-4">
                  <CodeBlock code={step.code} />
                </div>
              )}

              <a
                href={step.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline"
              >
                {step.link.label}
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
