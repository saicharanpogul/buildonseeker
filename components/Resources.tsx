import { RESOURCES } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Resources() {
  return (
    <SectionWrapper id="resources" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-cyan">
            Resources
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Developer resources
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            SDKs, documentation, and community — everything to get building.
          </p>
        </div>

        <div className="space-y-12">
          <ResourceGroup title="SDKs & Tools" resources={RESOURCES.sdks} />
          <ResourceGroup title="Documentation" resources={RESOURCES.docs} />
          <ResourceGroup title="Community" resources={RESOURCES.community} />
        </div>
      </div>
    </SectionWrapper>
  );
}

interface ResourceGroupProps {
  title: string;
  resources: ReadonlyArray<{
    name: string;
    url: string;
    description: string;
    npm?: string;
  }>;
}

function ResourceGroup({ title, resources }: ResourceGroupProps) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-text-muted">
        {title}
      </h3>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border-card bg-border-card sm:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.name}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-bg-card p-5 transition-colors hover:bg-bg-card-hover"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm font-semibold text-text-primary">
                  {resource.name}
                </span>
                {resource.npm && (
                  <span className="rounded bg-accent-green/10 px-1.5 py-0.5 text-[10px] font-medium text-accent-green">
                    npm
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-text-secondary">{resource.description}</p>
            </div>
            <svg
              className="h-4 w-4 flex-shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-text-secondary"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
