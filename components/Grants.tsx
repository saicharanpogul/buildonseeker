import { GRANTS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Grants() {
  return (
    <SectionWrapper id="grants" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-purple">
            Funding
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Get funded to build
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Solana Mobile Builder Grants and RFPs are live. Build something great and get supported.
          </p>
        </div>

        {/* Two tracks */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {GRANTS.tracks.map((track) => (
            <div key={track.name} className="card p-6">
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {track.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* What they look for */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-text-muted">
              What they&apos;re looking for
            </h3>
            <div className="space-y-3">
              {GRANTS.lookingFor.map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-border-card bg-bg-card p-4 transition-colors hover:bg-bg-card-hover"
                >
                  <h4 className="text-sm font-semibold text-text-primary">
                    {item.heading}
                  </h4>
                  <p className="mt-1 text-xs text-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines + CTA */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-text-muted">
              Application guidelines
            </h3>
            <ul className="space-y-3">
              {GRANTS.guidelines.map((guideline) => (
                <li
                  key={guideline}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {guideline}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border-card bg-bg-card p-4">
              <p className="text-sm text-text-secondary">
                Selected teams get{" "}
                <span className="text-text-primary">funding</span>,{" "}
                <span className="text-text-primary">technical guidance</span>, and{" "}
                <span className="text-text-primary">marketing support</span>{" "}
                for dApp Store launches. Applications are rolling, responses in 4-6 weeks.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={GRANTS.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                Apply for a Grant
              </a>
              <a
                href={GRANTS.rfpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-border-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-all hover:border-border-hover hover:bg-bg-card"
              >
                View Current RFPs
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
