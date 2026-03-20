import { HERO_CONTENT } from "@/lib/constants";
import { GradientGlow } from "@/components/ui/GradientGlow";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden hero-gradient">
      <GradientGlow
        color="purple"
        size="lg"
        className="-left-48 top-1/4"
      />
      <GradientGlow
        color="green"
        size="md"
        className="-right-24 bottom-1/4"
      />
      <GradientGlow
        color="cyan"
        size="sm"
        className="left-1/3 top-10"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center md:px-12">
        <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
          <span className="gradient-text">{HERO_CONTENT.headline}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          {HERO_CONTENT.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={HERO_CONTENT.ctaPrimary.href}
            className="inline-flex items-center justify-center rounded-full bg-accent-purple px-8 py-3.5 font-heading text-sm font-semibold text-white transition-all hover:bg-accent-purple/90 hover:shadow-lg hover:shadow-accent-purple/25"
          >
            {HERO_CONTENT.ctaPrimary.label}
          </a>
          <a
            href={HERO_CONTENT.ctaSecondary.href}
            className="inline-flex items-center justify-center rounded-full border border-border-card px-8 py-3.5 font-heading text-sm font-semibold text-text-primary transition-all hover:border-text-muted hover:bg-bg-card"
          >
            {HERO_CONTENT.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
