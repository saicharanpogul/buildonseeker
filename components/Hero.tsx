import { HERO_CONTENT, ECOSYSTEM_HIGHLIGHTS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center hero-bg overflow-hidden">
      {/* Top right CTA */}
      <div className="absolute top-6 right-6 md:top-8 md:right-12 z-50">
        <a
          href="#ideas"
          className="inline-flex items-center gap-2 rounded-xl border border-border-card bg-bg-card/40 backdrop-blur-md px-5 py-2.5 font-heading text-sm font-medium text-text-primary transition-all hover:bg-border-card/60"
        >
          <svg className="h-4 w-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Get Ideas
        </a>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12 pt-24 pb-20">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-card bg-bg-card px-4 py-1.5 text-sm text-text-secondary">
            <span className="live-dot" />
            The Solana Seeker Developer Hub
          </p>

          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl xl:text-8xl">
            {HERO_CONTENT.headline.split(" ").map((word, i) => (
              <span key={i}>
                {i === 2 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
                {" "}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            {HERO_CONTENT.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={HERO_CONTENT.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-heading text-sm font-semibold text-black transition-all hover:bg-white/90"
            >
              {HERO_CONTENT.ctaPrimary.label}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={HERO_CONTENT.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-xl border border-border-card px-6 py-3 font-heading text-sm font-semibold text-text-primary transition-all hover:border-border-hover hover:bg-bg-card"
            >
              {HERO_CONTENT.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ECOSYSTEM_HIGHLIGHTS.map((stat) => (
            <div key={stat.label} className="group">
              <p className="font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-card to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
