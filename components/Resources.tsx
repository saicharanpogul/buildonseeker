import { RESOURCES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Resources() {
  return (
    <SectionWrapper id="resources" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <SectionHeading
          title="Developer Resources"
          subtitle="Curated SDKs, documentation, and community channels to get you building fast."
        />

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
      <h3 className="mb-4 font-heading text-lg font-semibold text-text-primary">
        {title}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.name}
            name={resource.name}
            description={resource.description}
            url={resource.url}
            npm={resource.npm}
          />
        ))}
      </div>
    </div>
  );
}
