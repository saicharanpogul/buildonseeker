import { GRANTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientGlow } from "@/components/ui/GradientGlow";

export function Grants() {
  return (
    <SectionWrapper id="grants" className="relative py-24 lg:py-32">
      <GradientGlow
        color="purple"
        size="lg"
        className="-left-32 top-1/3"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12">
        <SectionHeading
          title="Get Funded"
          subtitle="Solana Mobile Builder Grants and RFPs are live. Build something great and get supported."
          gradient
        />

        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {GRANTS.tracks.map((track) => (
            <div
              key={track.name}
              className="rounded-xl border border-border-card bg-bg-card p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-accent-purple">
                {track.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="mb-4 font-heading text-lg font-semibold text-text-primary">
            Selected teams get:
          </h3>
          <ul className="space-y-2">
            {GRANTS.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-green/10">
                  <svg
                    className="h-3 w-3 text-accent-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 font-heading text-lg font-semibold text-text-primary">
            What they&apos;re looking for
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {GRANTS.lookingFor.map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-border-card bg-bg-card p-5 card-hover"
              >
                <h4 className="font-heading text-base font-semibold text-text-primary">
                  {item.heading}
                </h4>
                <p className="mt-1.5 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 font-heading text-lg font-semibold text-text-primary">
            Grant Application Guidelines
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {GRANTS.guidelines.map((guideline) => (
              <li
                key={guideline}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span className="mt-1 text-accent-purple" aria-hidden="true">
                  →
                </span>
                {guideline}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-muted">
            Applications are rolling, responses in 4-6 weeks.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={GRANTS.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent-purple px-8 py-3 font-heading text-sm font-semibold text-white transition-all hover:bg-accent-purple/90 hover:shadow-lg hover:shadow-accent-purple/25"
          >
            Apply for a Grant
          </a>
          <a
            href={GRANTS.rfpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border-card px-8 py-3 font-heading text-sm font-semibold text-text-primary transition-all hover:border-text-muted hover:bg-bg-card"
          >
            View Current RFPs
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
