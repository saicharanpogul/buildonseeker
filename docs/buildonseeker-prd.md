# buildonseeker.com - Product Requirements Document

## One-liner

The unofficial developer hub for Solana Seeker: a pitch, live ecosystem dashboard, and resource hub that answers "why should I build on Seeker?" with real numbers and clear paths to getting started.

## Domain

buildonseeker.com

## Audience

Primary: Solana developers evaluating whether to build mobile-first on Seeker.
Secondary: Developers from EVM, Cosmos, Sui, Aptos ecosystems considering Solana Mobile.
Tertiary: The Solana Mobile team (this becomes their go-to link when someone asks "why Seeker?").

## Tone

Confident. Factual. Not hype. Let the numbers do the selling. No "revolutionary" or "next-gen" filler. Write like a builder talking to another builder.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router) for SEO. This site needs to rank for "build on Seeker", "Seeker developer", "Solana Mobile developer".
- **Styling:** Tailwind CSS. No component libraries. Custom everything.
- **Live data:** `seeker-sdk` npm package (https://github.com/saicharanpogul/seeker-sdk) for all on-chain queries. This is the author's own package.
- **Caching:** Next.js Route Handlers as edge-cached API endpoints. Revalidate every 5 minutes for stats. No database needed.
- **Deployment:** Vercel.
- **Fonts:** Use distinctive fonts. Avoid Inter, Roboto, Arial. Suggestions: "Instrument Sans" or "Satoshi" for body, "Cabinet Grotesk" or "Clash Display" for headings. Import from Google Fonts or Fontsource.
- **Analytics:** None for v1. Can add Plausible later.

## Design Direction

- Dark theme. Not pitch black, use #0A0A0F or similar deep dark as base.
- Solana ecosystem colors: primary accent #9945FF (purple), secondary accent #14F195 (green), tertiary #00D1FF (cyan).
- Subtle gradient glows on cards and section backgrounds. Not overwhelming. Think ambient light, not neon signs.
- The live stats section should feel alive. Subtle pulse animations on numbers, smooth count-up on page load.
- Cards with thin borders (#1a1a2e range), slight glassmorphism on hover.
- Typography-driven. Big bold headings. Generous whitespace.
- Mobile responsive. Many developers will see this shared on Twitter and open on phone first.

---

## Site Structure & Sections

### 1. Hero Section

Full viewport height. The first thing anyone sees.

**Content:**
- Headline: "Build on Seeker" (large, bold)
- Subheadline: one sentence that captures the value. Something like "100,000+ crypto-native users. Zero app store fees. Ship your dApp where the users already are."
- Two CTAs: "Start Building" (scrolls to Get Started section) and "View Ecosystem Stats" (scrolls to Live Stats)
- A subtle animated background. Keep it tasteful. Options: slow-moving gradient mesh, floating particles with Solana colors, or a minimal grid pattern with glow points.

**Do NOT** put a phone mockup or device image in the hero. This is a developer site, not a consumer landing page.

### 2. Why Seeker Section

The core pitch. 6 cards laid out in a 3x2 grid (stacks on mobile). Each card has an icon (use Lucide icons or simple SVG), a heading, and 2-3 sentences max.

**Card 1: Built-in Distribution**
- 100k+ power users already exploring the Solana dApp Store
- dApps that launch on Seeker see their first 10-20k users in weeks
- No cold start. Users are actively looking for new apps.

**Card 2: Zero Fees**
- No 30% app store tax. Developers keep what they earn.
- No gatekeeping on crypto features (unlike Apple/Google)
- SKR-powered economy means direct developer-to-user value flow.

**Card 3: Hardware Security**
- Seed Vault provides hardware-level key custody
- Users sign transactions with fingerprint + double-tap. Frictionless.
- Your app doesn't need to solve wallet UX. It's handled at the OS level.

**Card 4: Anti-Sybil by Default**
- Every Seeker device mints one Seeker Genesis Token (SGT)
- Verified, unique device ownership on-chain
- Gate features, airdrops, rewards to real users, not bots.

**Card 5: SKR Token Economy**
- Use SKR for payments, incentives, access control
- 4.3B+ SKR staked by the community
- Built-in token with real holders. No need to launch your own.

**Card 6: Active Grants Program**
- Solana Mobile Builder Grants are live right now
- Funding + technical guidance + marketing support for dApp Store launches
- RFPs for specific developer tooling gaps

### 3. Live Ecosystem Stats Section

**This is the differentiator.** No other "why build on X" site shows live on-chain proof. All data fetched via `seeker-sdk`.

**Stats to display (fetched from on-chain via seeker-sdk):**

| Stat | SDK Method | Display |
|------|-----------|---------|
| Total SKR Staked (TVL) | `getStakingStats(connection)` -> `totalValueLocked` | Large number with "SKR" suffix |
| Share Price | `getStakingStats(connection)` -> `sharePriceMultiplier` | Multiplier (e.g. "1.037x") |
| Guardian Count | `getStakingStats(connection)` -> `guardianCount` | Number |
| Min Stake Amount | `getStakingStats(connection)` -> `minStakeAmount` | Number with "SKR" suffix |
| Vault Address | `getStakingStats(connection)` -> `vaultAddress` | Truncated address, links to Solscan |

**Additional stats (not from seeker-sdk, hardcode for v1 with a note to update):**

| Stat | Source | Display |
|------|--------|---------|
| Devices Shipped | Solana Mobile public statements | "200,000+" |
| Power Users | Solana Mobile public statements | "100,000+" |
| dApps in Store | Solana Mobile public statements | "100+" |
| Weekly Active Wallets | Solana Mobile public statements | "85,000+" |

**Layout:** Big number grid. Each stat in its own card. Numbers should animate on scroll (count up from 0). Use a subtle glow behind the numbers matching the accent color.

**Important implementation detail for live stats:**

Create a Next.js Route Handler at `/api/stats` that:
1. Imports `Connection` from `@solana/web3.js` and `getStakingStats` from `seeker-sdk`
2. Creates a connection to a public RPC (use `https://api.mainnet-beta.solana.com` for v1, note in code that a dedicated RPC like Helius should be used in production)
3. Calls `getStakingStats(connection)` 
4. Returns the data as JSON
5. Uses Next.js revalidation: `export const revalidate = 300;` (5 minutes)

The frontend fetches from `/api/stats` on page load. This way the RPC call is server-side and cached, not hammered by every visitor.

```typescript
// Example: /app/api/stats/route.ts
import { Connection } from "@solana/web3.js";
import { getStakingStats } from "seeker-sdk";

export const revalidate = 300; // 5 minutes

export async function GET() {
  const connection = new Connection("https://api.mainnet-beta.solana.com");
  try {
    const stats = await getStakingStats(connection);
    return Response.json({
      totalValueLocked: stats.totalValueLocked,
      sharePriceMultiplier: stats.sharePriceMultiplier,
      guardianCount: stats.guardianCount,
      minStakeAmount: stats.minStakeAmount,
      vaultAddress: stats.vaultAddress,
    });
  } catch (error) {
    return Response.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
```

### 4. Developer Resources Section

Curated, not a link dump. Organized into clear categories.

**SDKs & Tools**
| Resource | URL | Description |
|----------|-----|-------------|
| seeker-sdk | https://github.com/saicharanpogul/seeker-sdk | TypeScript SDK for SGT, .skr domains, SKR, staking |
| Solana Mobile Stack SDK | https://github.com/solana-mobile/solana-mobile-stack-sdk | Official SMS SDK |
| Mobile Wallet Adapter | https://github.com/solana-mobile/mobile-wallet-adapter | MWA protocol for wallet connection |
| Solana Mobile Dev Skills | https://github.com/solana-mobile/solana-mobile-dev-skill | Claude Code skills for Seeker development |

**Documentation**
| Resource | URL | Description |
|----------|-----|-------------|
| Solana Mobile Docs | https://docs.solanamobile.com | Official developer documentation |
| Getting Started Guide | https://docs.solanamobile.com/get-started/overview | Setup and first project |
| SGT Verification Guide | https://docs.solanamobile.com/marketing/engaging-seeker-users | Seeker Genesis Token integration |
| dApp Store Publishing | https://docs.solanamobile.com/dapp-store/intro | How to publish to the dApp Store |

**Community**
| Resource | URL | Description |
|----------|-----|-------------|
| Discord | https://discord.gg/solanamobile | Solana Mobile developer community |
| Twitter | https://twitter.com/solanamobile | Official updates |
| Solana Mobile Blog | https://blog.solanamobile.com | Announcements and deep dives |

**Layout:** Cards grouped by category with icons. Each card has title, one-line description, and links to the resource. Clean grid.

### 5. Grants & Funding Section

This section exists because every developer evaluating Seeker will Google "Solana Mobile grants". You want them landing here.

**Content:**
- Heading: "Get Funded"
- Explain the two tracks: Builder Grants (open applications) and RFPs (specific gaps)
- What selected teams get: Funding, technical guidance from Solana Mobile team, marketing support for dApp Store launch
- What they're looking for:
  - Apps that feel viral or sticky by default
  - Creative SKR integrations (incentives, payments, exclusive experiences)
  - Dev tools that unlock more builders on Solana Mobile
  - Products that genuinely improve the Seeker experience
- Grant application guidelines (summarized):
  - Mobile-first implementation (Android, native features)
  - Clear use of Solana Mobile Stack (MWA, Seed Vault)
  - Creative SKR integration
  - Clear project scope and milestone timeline
  - Strong team / track record
  - Community & open source commitment preferred
- Applications are rolling, responses in 4-6 weeks
- CTA: "Apply for a Grant" linking to https://solanamobile.com/grants
- Secondary link: "View Current RFPs" linking to the Airtable RFP list at https://airtable.com/appw7jfRXG6Joia2b/shrsfJpcHYJZat9Uk

### 6. Seeker Stack / Architecture Section

A visual breakdown of the Seeker technical stack so developers understand what they're building on.

**Components to show (as a clean diagram or stacked card layout):**

| Layer | Component | What it does |
|-------|-----------|-------------|
| Hardware | Seed Vault | Secure enclave for private keys, biometric signing |
| Identity | Seeker Genesis Token (SGT) | Non-transferable NFT, one per device, anti-sybil |
| Identity | Seeker ID (.skr) | Human-readable domain via AllDomains |
| Token | SKR | Ecosystem token for staking, governance, incentives |
| Protocol | Mobile Wallet Adapter (MWA) | Universal wallet-to-dApp connection |
| Distribution | Solana dApp Store | Fee-free app distribution for web3 apps |
| Security | TPIN (Guardians) | Decentralized device/app verification network |

This should be a visual. Not a table on the page. Think of a layered stack diagram or horizontal flow, styled to match the site aesthetic.

### 7. Get Started Section

The close. 3 clear steps with CTAs.

**Step 1: Set Up Your Environment**
- Install the Solana Mobile Stack SDK
- Set up Android development environment
- Link: https://docs.solanamobile.com/get-started/development-setup

**Step 2: Install seeker-sdk**
- Terminal block showing `npm install seeker-sdk`
- Quick code snippet showing a one-liner SGT verification or getSeekerProfile call
- Link: https://github.com/saicharanpogul/seeker-sdk
- Also mention: "Add the Seeker skill to your AI coding agent:" with code block showing `curl -o .claude/skills/seeker.md https://buildonseeker.com/skill.md`

**Step 3: Ship to the dApp Store**
- Publish your app where 100k+ users are waiting
- Link: https://docs.solanamobile.com/dapp-store/intro

### 8. Footer

- "Built by Saicharan" with link to your GitHub/Twitter
- "Powered by seeker-sdk" with link to npm package
- "Not affiliated with Solana Mobile" disclaimer (important since this is unofficial)
- Links to Solana Mobile official site, docs, Discord

### 9. /skill.md Route (AI Coding Agent Skill)

This route serves a raw Markdown file at `buildonseeker.com/skill.md` that AI coding agents (Claude Code, Antigravity, Cursor, etc.) can install as a development skill. It is NOT an HTML page. It returns raw Markdown with `Content-Type: text/markdown`.

**Why this matters:** When a developer installs this skill, every time they prompt anything related to Seeker development, their AI agent has the full seeker-sdk API reference, correct on-chain constants, and working code patterns. It drives adoption of both the SDK and the site.

**Route:** `app/skill.md/route.ts`

Returns raw Markdown. Content lives in `lib/skill-content.ts` as a string constant.

**The skill content must include all of the following sections in this order:**

```markdown
---
name: seeker-development
description: Build Solana Mobile Seeker apps with seeker-sdk. Use when the user wants to verify Seeker device ownership (SGT), resolve .skr domains, query SKR token balances, build staking/unstaking transactions, gate content to Seeker owners, implement anti-sybil measures, query guardian pools, get staking stats, or build any feature targeting Solana Seeker users. Also trigger on mentions of "Seeker", "SGT", "Genesis Token", ".skr domain", "SKR token", "SKR staking", "Seeker ID", "Seed Vault", "dApp Store", or "Solana Mobile" in a build context.
---

# Seeker Development Skill

Complete skill for building on the Solana Seeker ecosystem using `seeker-sdk`.

## Setup

Always install before writing any Seeker-related code:

\`\`\`bash
npm install seeker-sdk @solana/web3.js
\`\`\`

Peer dependency: @solana/web3.js ^1.95.0

Every function requires a Connection:

\`\`\`typescript
import { Connection } from "@solana/web3.js";
const connection = new Connection("https://api.mainnet-beta.solana.com");
// Use a dedicated RPC (Helius, Triton, QuickNode) for production
\`\`\`

## On-Chain Constants

These are verified. Do not change or guess alternatives.

- SGT Mint Authority: GT2zuHVaZQYZSyQMgJPLzvkmyztfyXg2NJunqFp4p3A4
- SGT Metadata Address: GT22s89nU4iWFkNXj1Bw6uYhJJWDRPpShHt4Bk8f99Te
- SGT Group Address: GT22s89nU4iWFkNXj1Bw6uYhJJWDRPpShHt4Bk8f99Te
- Token-2022 Program: TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
- SKR Mint: SKRbvo6Gf7GondiT3BbTfuRDPqLWei4j2Qy2NPGZhW3
- SKR Staking Program: SKRskrmtL83pcL4YqLWt6iPefDqwXQWHSw9S9vz94BZ
- .skr domains use AllDomains protocol (NOT Bonfida SNS)

## SGT Verification

The Seeker Genesis Token is a Token-2022 NFT minted once per device. It proves device ownership.

### Simple boolean check
\`\`\`typescript
import { isSeeker } from "seeker-sdk";
const isSeekerUser = await isSeeker(connection, walletAddress);
\`\`\`

### Full verification with anti-sybil
\`\`\`typescript
import { verifySGT } from "seeker-sdk";

const usedMints = new Set<string>(); // persist to DB in production

const result = await verifySGT({
  connection,
  walletAddress,
  usedMints, // rejects SGTs already seen
});

if (result.isSeeker) {
  usedMints.add(result.mintAddress!);
  // grant reward
}
// result: { isSeeker: boolean, mintAddress: string | null, walletAddress: string }
\`\`\`

### Anti-sybil note
SGTs can transfer between wallets in the same Seed Vault. Always track mint addresses (not wallet addresses) to prevent double-claiming. The mint address is unique per device and stays the same after transfer.

## .skr Domain Resolution

.skr domains are Seeker IDs powered by AllDomains. Do NOT use @bonfida/spl-name-service (that is for .sol only).

\`\`\`typescript
import { resolveSkrDomain, reverseResolveSkr, getSkrDomains, isSkrDomain } from "seeker-sdk";

// Forward: domain -> wallet
const owner = await resolveSkrDomain(connection, "saicharan.skr");

// Reverse: wallet -> domain
const domain = await reverseResolveSkr(connection, walletAddress);

// All domains for a wallet
const domains = await getSkrDomains(connection, walletAddress);

// Validate format
isSkrDomain("saicharan.skr"); // true
\`\`\`

Display pattern: show .skr name when available, fall back to truncated address.

## SKR Token

\`\`\`typescript
import { getSKRBalance, hasMinSKR, getSKRStakeInfo } from "seeker-sdk";

// Balance
const { uiBalance } = await getSKRBalance(connection, walletAddress);

// Token-gate
const hasEnough = await hasMinSKR(connection, walletAddress, 1000);

// Staking info
const stake = await getSKRStakeInfo(connection, walletAddress);
// { isStaked, depositedAmount, currentAmount, yieldEarned, unstakingAmount }
\`\`\`

## Staking Instructions

Build TransactionInstruction objects for wallet adapters. Zero Anchor runtime dependency.

\`\`\`typescript
import {
  createStakeInstruction,
  createUnstakeInstruction,
  createCancelUnstakeInstruction,
  createWithdrawInstruction,
  deriveUserStakePda,
} from "seeker-sdk";

// Stake
const stakeIx = createStakeInstruction({
  user: walletPublicKey,
  guardianPool: guardianPoolAddress,
  amount: BigInt(10_000_000_000), // 6 decimals
});

// Unstake
const [userStakePda] = deriveUserStakePda(walletPublicKey, guardianPoolAddress);
const unstakeIx = createUnstakeInstruction({
  user: walletPublicKey,
  userStake: userStakePda,
  guardianPool: guardianPoolAddress,
  shares: BigInt(10_000_000_000),
});

// Cancel unstake during cooldown
const cancelIx = createCancelUnstakeInstruction({
  user: walletPublicKey,
  userStake: userStakePda,
  guardianPool: guardianPoolAddress,
});

// Withdraw after cooldown
const withdrawIx = createWithdrawInstruction({
  user: walletPublicKey,
  userStake: userStakePda,
});
\`\`\`

## Guardian Pools

\`\`\`typescript
import { getGuardianPool, getGuardiansForStaker, getAllGuardians } from "seeker-sdk";

const pool = await getGuardianPool(connection, poolAddress);
const myGuardians = await getGuardiansForStaker(connection, walletAddress);
const allGuardians = await getAllGuardians(connection);
\`\`\`

## Global Staking Stats

\`\`\`typescript
import { getStakingStats } from "seeker-sdk";

const stats = await getStakingStats(connection);
// { totalShares, sharePrice, sharePriceMultiplier, totalValueLocked,
//   minStakeAmount, cooldownSeconds, guardianCount, vaultAddress }
\`\`\`

## PDA Helpers

\`\`\`typescript
import {
  deriveStakeConfigPda,
  deriveUserStakePda,
  deriveGuardianPoolPda,
  deriveStakeVaultPda,
} from "seeker-sdk";
\`\`\`

## Aggregate Profile

One call for everything:

\`\`\`typescript
import { getSeekerProfile } from "seeker-sdk";

const profile = await getSeekerProfile(connection, walletAddress);
// { walletAddress, isSeeker, sgtMintAddress, skrDomain, skrBalance,
//   isStaked, stakedAmount, yieldEarned }
\`\`\`

Uses Promise.allSettled internally so partial RPC failures don't break the entire call.

## Error Handling

All errors extend SeekerVerifyError: SGTVerificationError, DomainResolutionError, InvalidAddressError, RpcError.

\`\`\`typescript
import { SGTVerificationError, RpcError } from "seeker-sdk";

try {
  await verifySGT({ connection, walletAddress });
} catch (e) {
  if (e instanceof RpcError) { /* handle RPC failure */ }
  if (e instanceof SGTVerificationError) { /* handle verification failure */ }
}
\`\`\`

## Links

- SDK: https://github.com/saicharanpogul/seeker-sdk
- npm: https://www.npmjs.com/package/seeker-sdk
- Solana Mobile Docs: https://docs.solanamobile.com
- SGT Docs: https://docs.solanamobile.com/marketing/engaging-seeker-users
- Developer Hub: https://buildonseeker.com
```

**Important implementation notes:**
- The entire skill content above goes into `lib/skill-content.ts` as a template literal string constant
- The route at `app/skill.md/route.ts` returns this string with Content-Type text/markdown
- Cache for 24 hours (86400 seconds) since skill content doesn't change often
- Only reference seeker-sdk functions that actually exist in the published package at https://github.com/saicharanpogul/seeker-sdk

---

## SEO Requirements

- Page title: "Build on Seeker | The Developer Hub for Solana Mobile"
- Meta description: "100,000+ users, zero app store fees, hardware wallet security. Everything developers need to build on Solana Seeker: live ecosystem stats, SDKs, grants, and resources."
- Open Graph image: create a static OG image (1200x630) with "Build on Seeker" headline and key stats. Similar style to the seeker-sdk card we already made.
- Canonical URL: https://buildonseeker.com
- Add structured data (JSON-LD) for the site as a WebSite type.
- All sections should use proper heading hierarchy (h1 > h2 > h3).
- Alt text on all images/icons.

---

## Performance Requirements

- Lighthouse score target: 90+ on all metrics
- All fonts loaded with `display: swap`
- Images optimized with Next.js Image component
- Animations should use CSS transforms/opacity only (GPU composited). No layout-triggering animations.
- Route handler for stats should have proper error handling and fallback to hardcoded values if RPC fails

---

## What NOT to Build

- No authentication or user accounts
- No database
- No wallet connection (this is an info site, not a dApp)
- No blog or CMS
- No phone mockups or device renders
- No "subscribe to newsletter" forms
- No chatbot or AI assistant
- No analytics tracking for v1

---

## File Structure

```
buildonseeker/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Home page composing all sections
│   ├── api/
│   │   └── stats/
│   │       └── route.ts        # Cached edge endpoint for live stats
│   ├── skill.md/
│   │   └── route.ts            # Raw Markdown endpoint for AI coding skill
│   ├── globals.css             # Tailwind base + custom CSS variables
│   └── opengraph-image.tsx     # Dynamic OG image generation (next/og)
├── components/
│   ├── Hero.tsx
│   ├── WhySeeker.tsx
│   ├── LiveStats.tsx
│   ├── Resources.tsx
│   ├── Grants.tsx
│   ├── SeekerStack.tsx
│   ├── GetStarted.tsx
│   ├── Footer.tsx
│   ├── ui/
│   │   ├── StatCard.tsx        # Animated number card
│   │   ├── FeatureCard.tsx     # Why Seeker cards
│   │   ├── ResourceCard.tsx    # Resource link cards
│   │   ├── StepCard.tsx        # Get Started step cards
│   │   ├── CodeBlock.tsx       # Styled terminal/code display
│   │   ├── SectionHeading.tsx  # Consistent section headers
│   │   ├── GradientGlow.tsx    # Reusable ambient glow effect
│   │   └── AnimatedNumber.tsx  # Count-up number animation
│   └── icons/                  # Custom SVG icons if needed
├── lib/
│   ├── constants.ts            # All hardcoded stats, URLs, content
│   ├── skill-content.ts        # Full Markdown content for /skill.md
│   └── utils.ts                # cn() helper, formatters
├── public/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Content Constants (lib/constants.ts)

Centralize all content so it's easy to update without touching components:

```typescript
export const HARDCODED_STATS = {
  devicesShipped: 200_000,
  powerUsers: 100_000,
  dappsInStore: 100,
  weeklyActiveWallets: 85_000,
  skrStaked: "4.3B",       // from Solana Mobile's tweet
};

export const RESOURCES = {
  sdks: [
    {
      name: "seeker-sdk",
      url: "https://github.com/saicharanpogul/seeker-sdk",
      npm: "https://www.npmjs.com/package/seeker-sdk",
      description: "TypeScript SDK for SGT, .skr domains, SKR, staking",
    },
    {
      name: "Seeker Dev Skill",
      url: "https://buildonseeker.com/skill.md",
      description: "AI coding agent skill for Seeker development",
    },
    {
      name: "Solana Mobile Stack SDK",
      url: "https://github.com/solana-mobile/solana-mobile-stack-sdk",
      description: "Official SMS SDK for Android",
    },
    {
      name: "Mobile Wallet Adapter",
      url: "https://github.com/solana-mobile/mobile-wallet-adapter",
      description: "Wallet-to-dApp connection protocol",
    },
    {
      name: "Solana Mobile Dev Skills",
      url: "https://github.com/solana-mobile/solana-mobile-dev-skill",
      description: "Claude Code skills for Seeker development",
    },
  ],
  docs: [
    {
      name: "Solana Mobile Docs",
      url: "https://docs.solanamobile.com",
      description: "Official developer documentation",
    },
    {
      name: "Getting Started",
      url: "https://docs.solanamobile.com/get-started/overview",
      description: "Setup and first project guide",
    },
    {
      name: "SGT Verification",
      url: "https://docs.solanamobile.com/marketing/engaging-seeker-users",
      description: "Seeker Genesis Token integration",
    },
    {
      name: "dApp Store Publishing",
      url: "https://docs.solanamobile.com/dapp-store/intro",
      description: "Publish to the Solana dApp Store",
    },
  ],
  community: [
    {
      name: "Discord",
      url: "https://discord.gg/solanamobile",
      description: "Developer community",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/solanamobile",
      description: "Official updates",
    },
    {
      name: "Blog",
      url: "https://blog.solanamobile.com",
      description: "Announcements and deep dives",
    },
  ],
};

export const GRANTS = {
  applyUrl: "https://solanamobile.com/grants",
  rfpUrl: "https://airtable.com/appw7jfRXG6Joia2b/shrsfJpcHYJZat9Uk",
};

export const EXTERNAL_LINKS = {
  solanaMobile: "https://solanamobile.com",
  seekerSdk: "https://github.com/saicharanpogul/seeker-sdk",
  seekerSdkNpm: "https://www.npmjs.com/package/seeker-sdk",
  authorGithub: "https://github.com/saicharanpogul",
  authorTwitter: "https://twitter.com/saicharanpogul",
};
```

---

## Animations

Keep them subtle. The site should feel polished, not flashy.

- **AnimatedNumber:** Count-up from 0 to target value on scroll into view. Use Intersection Observer. Duration ~1.5s with easeOut.
- **Section fade-in:** Each section fades in + translates up 20px on scroll. CSS only with Intersection Observer adding a class.
- **Stat cards:** Subtle pulse glow on the border when numbers are live (not hardcoded). This visually signals "this data is real-time".
- **Hero background:** Slow-moving gradient mesh or subtle grain texture. CSS only, no canvas or heavy JS.
- **Hover states on cards:** Slight border color brighten + subtle scale(1.01). Transition 200ms.

---

## Responsive Breakpoints

- Mobile: < 640px (single column everything)
- Tablet: 640px - 1024px (2-column grids)
- Desktop: > 1024px (3-column grids, full layout)

Max content width: 1200px, centered.

---

## Edge Cases & Error Handling

- If `/api/stats` fails, the LiveStats section should fall back to displaying the hardcoded stats from `HARDCODED_STATS` with a subtle "(cached)" label.
- If the RPC connection times out, the route handler should return a 500 and the frontend should handle it gracefully.
- All external links should have `target="_blank"` and `rel="noopener noreferrer"`.
- The site must work with JavaScript disabled for the static content (SSR from Next.js). Live stats won't load but everything else should render.

---

## README.md

The repo README should cover:
1. What the site is (one paragraph)
2. Tech stack
3. Local development: `npm install && npm run dev`
4. Environment variables (RPC URL if not using public endpoint)
5. Deployment: push to Vercel
6. Contributing guidelines
7. Note that this is an unofficial community project, not affiliated with Solana Mobile

---

## Build the entire site. Do not stop partway. Do not ask for confirmation between sections. Ship it.
