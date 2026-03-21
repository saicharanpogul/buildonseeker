"use client";

import { useState } from "react";
import { BUILDER_IDEAS, IdeaCategory } from "@/lib/ideas";
import { SectionWrapper } from "./ui/SectionWrapper";
import { FeatureCard } from "./ui/FeatureCard";

const CATEGORIES: IdeaCategory[] = [
  "All",
  "Payments",
  "Dev Tool",
  "DePIN",
  "Social",
  "DeFi",
  "Commerce",
  "Infrastructure",
];

const CATEGORY_COLORS: Record<string, string> = {
  DePIN: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Payments: "bg-green-500/10 text-green-400 border-green-500/20",
  "Dev Tool": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Social: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  DeFi: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Commerce: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Infrastructure: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Identity: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

function getCategoryPillClasses(tag: string) {
  return CATEGORY_COLORS[tag] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
}

export function Ideas() {
  const [activeCategory, setActiveCategory] = useState<IdeaCategory>("All");

  const filteredIdeas = BUILDER_IDEAS.filter((idea) =>
    activeCategory === "All" ? true : idea.tags.includes(activeCategory)
  );

  return (
    <SectionWrapper id="ideas" className="py-24 lg:py-32 bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-12 text-center md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-green">
            Brainstorm
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Ideas Worth Building
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">
            Real problems, real revenue paths. Pick one and ship it.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
                activeCategory === cat
                  ? "bg-text-primary text-bg-primary border-text-primary"
                  : "bg-bg-card text-text-muted border-border-card hover:text-text-primary hover:border-text-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile View: Standard Flex Column */}
        <div className="flex flex-col gap-6 md:hidden">
          {filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>

        {/* Desktop View: Dual Flex Column for Staggered Masonry */}
        <div className="hidden md:grid grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-6">
            {filteredIdeas.filter((_, i) => i % 2 === 0).map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
          <div className="flex flex-col gap-6 mt-16">
            {filteredIdeas.filter((_, i) => i % 2 !== 0).map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        </div>

        {/* Submit Form Area */}
        <div className="mt-20 overflow-hidden text-center rounded-2xl border border-border-card bg-bg-card p-8 md:p-12 relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />
           <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">Got a better idea?</h3>
              <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                If it's good, we'll add it to the board. Submit your pitch to the community discussion.
              </p>
              <a
                href="https://github.com/saicharanpogul/buildonseeker/discussions/new?category=ideas&title=%5BIdea%5D%3A+&body=**Idea+Name**%3A%20%0A%0A**One-line+pitch**%3A%20%0A%0A**Why+Seeker%3F**%3A%20%0A%0A**Your+Twitter%2F.skr**%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-heading text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                Submit an Idea (GitHub)
              </a>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function IdeaCard({ idea }: { idea: import("@/lib/ideas").BuilderIdea }) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    idea.tweetText
  )}`;

  return (
    <div className="group relative rounded-2xl border border-border-card bg-bg-card p-6 transition-colors hover:border-border-hover">
      {/* Meta Header */}
      <div className="mb-4 flex flex-wrap gap-2">
        {idea.tags.map((tag) => (
          <span
            key={tag}
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getCategoryPillClasses(
              tag
            )}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <h3 className="mb-3 font-heading text-xl font-bold text-text-primary">
        {idea.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-text-secondary">
        {idea.description}
      </p>

      {/* Footer details */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-t border-border-card/50 pt-5 text-sm">
        <div className="flex flex-col gap-2">
          {/* Seeker Advantage line */}
          <div className="flex items-center gap-1.5 text-text-muted">
            <svg className="h-4 w-4 shrink-0 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs">{idea.seekerAdvantage}</span>
          </div>
          {/* Suggested By */}
          <div className="flex items-center gap-2 mt-1">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-accent-purple to-accent-green opacity-80" />
            <span className="text-xs text-text-muted">
              Suggested by <span className="text-text-primary font-medium">{idea.suggestedBy.name}</span>
            </span>
          </div>
        </div>

        {/* Build Action */}
        <a
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-border-card bg-bg-primary px-4 py-2 text-xs font-semibold text-text-primary transition-colors hover:bg-border-card hover:text-white"
        >
          Build This
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
