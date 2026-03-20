import { SEEKER_STACK_LAYERS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StackIcon } from "@/components/icons/StackIcons";

const LAYER_COLORS: Record<string, string> = {
  Hardware: "border-accent-green/40 bg-accent-green/5",
  Identity: "border-accent-cyan/40 bg-accent-cyan/5",
  Token: "border-accent-purple/40 bg-accent-purple/5",
  Protocol: "border-accent-cyan/40 bg-accent-cyan/5",
  Distribution: "border-accent-green/40 bg-accent-green/5",
  Security: "border-accent-purple/40 bg-accent-purple/5",
};

const LAYER_ACCENT: Record<string, string> = {
  Hardware: "text-accent-green",
  Identity: "text-accent-cyan",
  Token: "text-accent-purple",
  Protocol: "text-accent-cyan",
  Distribution: "text-accent-green",
  Security: "text-accent-purple",
};

export function SeekerStack() {
  return (
    <SectionWrapper id="seeker-stack" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <SectionHeading
          title="The Seeker Stack"
          subtitle="A layered architecture from hardware security to app distribution."
          gradient
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {SEEKER_STACK_LAYERS.map((layer, index) => (
            <div
              key={layer.component}
              className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:scale-[1.01] sm:p-5 ${LAYER_COLORS[layer.layer] || "border-border-card bg-bg-card"}`}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-bg-primary/50">
                <StackIcon
                  name={layer.icon}
                  className={`h-5 w-5 ${LAYER_ACCENT[layer.layer] || "text-text-secondary"}`}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {layer.layer}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-text-primary">
                  {layer.component}
                </h3>
                <p className="mt-0.5 text-sm text-text-secondary">
                  {layer.description}
                </p>
              </div>

              <div className="hidden text-text-muted sm:block">
                <span className="font-mono text-xs">L{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
