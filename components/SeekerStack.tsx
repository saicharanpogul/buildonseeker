import { SEEKER_STACK_LAYERS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StackIcon } from "@/components/icons/StackIcons";

const LAYER_ACCENT: Record<string, string> = {
  Hardware: "text-accent-green border-l-accent-green/30",
  Identity: "text-accent-cyan border-l-accent-cyan/30",
  Token: "text-accent-purple border-l-accent-purple/30",
  Protocol: "text-accent-cyan border-l-accent-cyan/30",
  Distribution: "text-accent-green border-l-accent-green/30",
  Security: "text-accent-purple border-l-accent-purple/30",
};

export function SeekerStack() {
  return (
    <SectionWrapper id="seeker-stack" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-green">
              Architecture
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              The Seeker Stack
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Seven layers from hardware security to app distribution.
              Every layer is an advantage your dApp gets for free.
            </p>
            <div className="mt-6 rounded-xl border border-border-card bg-bg-card p-4">
              <p className="text-sm text-text-secondary">
                Unlike traditional app platforms, Seeker handles{" "}
                <span className="text-text-primary">wallet UX</span>,{" "}
                <span className="text-text-primary">identity</span>, and{" "}
                <span className="text-text-primary">security</span>{" "}
                at the OS level — so you can focus on your product.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {SEEKER_STACK_LAYERS.map((layer, index) => {
              const accent = LAYER_ACCENT[layer.layer] || "text-text-secondary border-l-border-card";
              return (
                <div
                  key={layer.component}
                  className={`stack-layer flex items-center gap-4 border-l-2 p-4 ${accent}`}
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <StackIcon
                      name={layer.icon}
                      className={`h-4 w-4 ${accent.split(" ")[0]}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
                        L{index + 1} · {layer.layer}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-text-primary">
                      {layer.component}
                    </h3>
                    <p className="text-xs text-text-secondary">
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
