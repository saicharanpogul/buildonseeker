# CLAUDE.md

## Project: buildonseeker.com

The unofficial developer hub for the Solana Seeker ecosystem. A Next.js site that pitches developers on why they should build on Seeker, shows live on-chain ecosystem stats powered by `seeker-sdk`, curates developer resources, and provides grants/funding info.

## Tech Stack

- Next.js 14+ (App Router)
- Tailwind CSS (no component libraries, custom everything)
- `seeker-sdk` npm package for on-chain data
- TypeScript strict mode
- Deploy target: Vercel

## Git Workflow

**Remote:** `git@github.com:saicharanpogul/buildonseeker.git` (branch: `main`)

**Commit rules:**
- Commit after completing each major section/component. Do not batch the entire site into one commit.
- Use conventional commit messages: `feat:`, `fix:`, `chore:`, `docs:`
- Commit order should follow the build order below.
- Push after every 2-3 commits. Do not accumulate unpushed work.

**Commit sequence (follow this order):**
1. `chore: init next.js project with tailwind and typescript`
2. `chore: add fonts, css variables, base layout and metadata`
3. `feat: add lib/constants.ts with all content data`
4. `feat: add shared UI components (StatCard, FeatureCard, CodeBlock, etc.)`
5. `feat: add Hero section`
6. `feat: add Why Seeker section`
7. `feat: add /api/stats route handler with seeker-sdk`
8. `feat: add Live Ecosystem Stats section with animated numbers`
9. `feat: add Developer Resources section`
10. `feat: add Grants & Funding section`
11. `feat: add Seeker Stack architecture section`
12. `feat: add Get Started section`
13. `feat: add Footer`
14. `feat: add /skill.md route serving seeker-sdk development skill`
15. `feat: add OG image generation`
16. `chore: responsive polish and final cleanup`
17. `docs: add README.md`

**Never commit:**
- `node_modules/`
- `.next/`
- `.env.local`
- `.vercel/`
- `*.log`
- `.DS_Store`

Ensure `.gitignore` covers all of the above before the first commit.

## Build Order

Follow this exact order. Complete each step fully before moving to the next. Do not skip ahead.

### Step 1: Project Init
```bash
npx create-next-app@latest buildonseeker --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd buildonseeker
npm install seeker-sdk @solana/web3.js
git remote add origin git@github.com:saicharanpogul/buildonseeker.git
```

Verify `.gitignore` includes: `node_modules/`, `.next/`, `.env.local`, `.vercel/`, `.DS_Store`

Commit and push.

### Step 2: Fonts, CSS Variables, Layout

- Add fonts via `next/font/google`. Use `Instrument Sans` (or `Satoshi` via Fontsource) for body and `Clash Display` (or `Cabinet Grotesk`) for headings. If these are not on Google Fonts, use `Space Grotesk` for headings and `DM Sans` for body as fallbacks. Do NOT use Inter, Roboto, or Arial.
- In `globals.css`, define CSS variables:
  ```css
  :root {
    --bg-primary: #0A0A0F;
    --bg-card: #111118;
    --border-card: #1a1a2e;
    --text-primary: #FAFAFA;
    --text-secondary: #888;
    --text-muted: #555;
    --accent-purple: #9945FF;
    --accent-green: #14F195;
    --accent-cyan: #00D1FF;
    --gradient-purple-green: linear-gradient(135deg, #9945FF 0%, #14F195 100%);
  }
  ```
- Set up `app/layout.tsx` with proper metadata:
  - Title: "Build on Seeker | The Developer Hub for Solana Mobile"
  - Description: "100,000+ users, zero app store fees, hardware wallet security. Everything developers need to build on Solana Seeker."
  - OG fields
- Body should have dark background, font classes applied.

Commit.

### Step 3: Constants File

Create `lib/constants.ts` with ALL content data. Every string displayed on the site lives here. Components import from here, never hardcode text in JSX.

See the PRD file at `/docs/PRD.md` for the full constants structure including HARDCODED_STATS, RESOURCES, GRANTS, and EXTERNAL_LINKS.

Also create `lib/utils.ts` with:
- `cn()` helper for conditional classnames (use `clsx` + `tailwind-merge`, install both)
- `formatNumber()` for displaying large numbers with commas
- `truncateAddress()` for shortening wallet addresses

Commit.

### Step 4: Shared UI Components

Build these in `components/ui/` before building sections:

- `SectionHeading.tsx` - consistent section header with optional subtitle. Gradient text option.
- `FeatureCard.tsx` - card with icon slot, heading, body text. Hover glow effect.
- `StatCard.tsx` - big number display with label. Optional "live" pulse indicator.
- `AnimatedNumber.tsx` - count-up animation triggered by Intersection Observer. Props: target value, duration, suffix, prefix.
- `ResourceCard.tsx` - link card with title, description, external link icon.
- `StepCard.tsx` - numbered step with heading and description.
- `CodeBlock.tsx` - styled terminal/code display with dark bg, green prompt, monospace font.
- `GradientGlow.tsx` - reusable ambient glow div (absolute positioned, blurred, low opacity).

All cards: dark background (var(--bg-card)), thin border (var(--border-card)), rounded-xl, hover:border-color brightens, transition 200ms.

Commit.

### Step 5-13: Build Each Section

Build each section as its own component in `components/`. Each section is a full-width container with max-w-[1200px] centered content and generous vertical padding (py-24 minimum).

**Hero.tsx** - full viewport height, headline "Build on Seeker", subheadline with stats, two CTAs (smooth scroll links), subtle animated gradient background (CSS only, use multiple layered radial-gradients with slow animation).

**WhySeeker.tsx** - 6 feature cards in 3x2 grid. Content from constants. Use Lucide icons or simple inline SVGs.

**LiveStats.tsx** - fetches from `/api/stats` on mount. Displays on-chain stats from seeker-sdk alongside hardcoded ecosystem stats. All numbers use AnimatedNumber. Stat cards with subtle live pulse animation for real-time data. Fallback to hardcoded if fetch fails.

**`/api/stats/route.ts`** - server-side route handler. Imports from `seeker-sdk` and `@solana/web3.js`. Caches for 5 minutes. Returns JSON. Full error handling with try/catch. Falls back to error response, not crash.

```typescript
import { Connection } from "@solana/web3.js";
import { getStakingStats } from "seeker-sdk";
import { NextResponse } from "next/server";

export const revalidate = 300;

export async function GET() {
  try {
    const connection = new Connection(
      process.env.RPC_URL || "https://api.mainnet-beta.solana.com"
    );
    const stats = await getStakingStats(connection);
    return NextResponse.json({
      totalValueLocked: stats.totalValueLocked,
      sharePriceMultiplier: stats.sharePriceMultiplier,
      guardianCount: stats.guardianCount,
      minStakeAmount: stats.minStakeAmount,
      vaultAddress: stats.vaultAddress,
    });
  } catch (error) {
    console.error("Failed to fetch staking stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
```

**Resources.tsx** - three grouped sections (SDKs, Docs, Community) from constants. ResourceCard grid.

**Grants.tsx** - two-track explanation (Builder Grants + RFPs), what they look for (4 bullet items as styled cards), grant guidelines summary, two CTAs linking to solanamobile.com/grants and the Airtable RFP list.

**SeekerStack.tsx** - visual layered diagram showing the Seeker tech stack. Build as a styled vertical stack of cards or a horizontal flow. Layers: Hardware (Seed Vault) > Identity (SGT, .skr) > Token (SKR) > Protocol (MWA) > Distribution (dApp Store) > Security (TPIN/Guardians). Use gradient borders and icons per layer.

**GetStarted.tsx** - 3 numbered steps with code snippet for step 2 (npm install seeker-sdk + quick usage example in CodeBlock).

**Footer.tsx** - minimal. Built by credit, powered by seeker-sdk, not affiliated disclaimer, key links.

Commit after each section. Push after every 2-3 sections.

### Step 14: OG Image

Use `next/og` (ImageResponse) in `app/opengraph-image.tsx` to generate a dynamic OG image. Style similar to the site's dark theme. Show "Build on Seeker" headline and 2-3 key stats. 1200x630px.

Commit.

### Step 15: /skill.md Route (AI Coding Skill)

This is a key differentiator. `buildonseeker.com/skill.md` serves a raw Markdown file that developers install as a skill in Claude Code, Antigravity, Cursor, or any AI coding agent. It turns buildonseeker.com from a static pitch site into an active tool in developers' workflows.

Create a Next.js route at `app/skill.md/route.ts` that returns raw Markdown with `Content-Type: text/markdown`. Do NOT create an HTML page. The endpoint must return raw `.md` content because AI coding agents fetch and parse it as plain text.

```typescript
// app/skill.md/route.ts
import { NextResponse } from "next/server";
import { SKILL_CONTENT } from "@/lib/skill-content";

export async function GET() {
  return new NextResponse(SKILL_CONTENT, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
```

Create `lib/skill-content.ts` that exports a single string constant `SKILL_CONTENT` containing the full skill Markdown. See PRD Section 9 for the complete skill content.

The skill must cover:
- Frontmatter with name, description, and trigger phrases
- Installation (`npm install seeker-sdk @solana/web3.js`)
- Connection setup with RPC notes
- SGT verification (simple check, full verification, anti-sybil pattern)
- .skr domain resolution (forward, reverse, list, validate)
- SKR token queries (balance, staking info, token-gating)
- Staking instruction builders (stake, unstake, cancel, withdraw)
- PDA derivation helpers
- Aggregate getSeekerProfile
- Error handling patterns
- Key on-chain constants (mint authority, metadata address, group address, SKR mint, staking program ID)

The skill content must only reference `seeker-sdk` APIs that actually exist in the published package. Check the README at https://github.com/saicharanpogul/seeker-sdk for the current API surface. Do not invent functions that don't exist.

Also add a link to the skill in the Resources section of the site and in the Get Started section alongside the npm install step. Frame it as: "Add the Seeker development skill to your AI coding agent for guided development."

Installation command for developers:
```
# Claude Code
claude mcp add-skill https://buildonseeker.com/skill.md

# Or manually add to .claude/skills/
curl -o .claude/skills/seeker.md https://buildonseeker.com/skill.md
```

Commit.

### Step 16: Responsive Polish

- Test all breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- All grids collapse properly
- Hero text scales down
- Code blocks don't overflow
- Navigation/scroll CTAs work on mobile
- Check font sizes on mobile (min 16px body)

Commit.

### Step 17: README

Write README.md covering: what this is, tech stack, local dev (`npm install && npm run dev`), env vars (RPC_URL optional), deploy to Vercel, contributing, "not affiliated with Solana Mobile" note.

Commit and push.

## Code Quality Rules

- TypeScript strict mode. No `any` types.
- All components are typed with explicit prop interfaces.
- No inline styles. Tailwind only. CSS variables for theme values.
- All external links: `target="_blank" rel="noopener noreferrer"`
- Semantic HTML: proper heading hierarchy (one h1, h2 per section, h3 for subsections).
- All images/icons have alt text.
- No console.log in production code (only in error catches in API routes with console.error).
- Components are single-responsibility. No component over 150 lines. Split if needed.

## Design Rules

- Dark theme only. Base: #0A0A0F. Cards: #111118. Borders: #1a1a2e.
- Accent colors: purple #9945FF, green #14F195, cyan #00D1FF.
- Gradient glows are subtle (opacity 0.05-0.15). Never neon or overwhelming.
- Typography: headings bold/extrabold, body regular/medium. Generous line-height.
- Max content width 1200px. Horizontal padding 24px mobile, 48px desktop.
- Section vertical padding: py-20 minimum, py-32 for major sections.
- Card hover: border lightens, subtle scale(1.01), 200ms transition.
- AnimatedNumber triggers once on scroll into view, not repeatedly.
- No layout-triggering animations. Transform and opacity only.

## Do NOT

- Do not add authentication, databases, or user accounts
- Do not add wallet connection (this is an info site)
- Do not add newsletter signup, chatbot, or analytics
- Do not use component libraries (shadcn, MUI, Chakra, etc.)
- Do not use Inter, Roboto, or Arial fonts
- Do not add phone mockups or device images
- Do not leave TODO comments. Finish everything.
- Do not make a single monolithic commit. Follow the commit sequence.
