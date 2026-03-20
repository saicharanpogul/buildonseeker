import { WHY_SEEKER_CARDS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WhySeekerIcon } from "@/components/icons/WhySeekerIcons";

export function WhySeeker() {
  return (
    <SectionWrapper id="why-seeker" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-purple">
            Why Seeker
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Everything developers need to ship mobile-first
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            From built-in distribution to hardware security, Seeker gives you unfair advantages other platforms can&apos;t.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border-card bg-border-card sm:grid-cols-2 lg:grid-cols-3">
          {WHY_SEEKER_CARDS.map((card) => (
            <div
              key={card.heading}
              className="bg-bg-card p-6 transition-colors hover:bg-bg-card-hover lg:p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple">
                <WhySeekerIcon name={card.icon} />
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary">
                {card.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
