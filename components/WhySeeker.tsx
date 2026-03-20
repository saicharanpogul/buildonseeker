import { WHY_SEEKER_CARDS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WhySeekerIcon } from "@/components/icons/WhySeekerIcons";

export function WhySeeker() {
  return (
    <SectionWrapper id="why-seeker" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <SectionHeading
          title="Why Seeker?"
          subtitle="Six reasons to build your next app on Solana's mobile ecosystem."
          gradient
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_SEEKER_CARDS.map((card) => (
            <FeatureCard
              key={card.heading}
              icon={<WhySeekerIcon name={card.icon} />}
              heading={card.heading}
              body={card.body}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
