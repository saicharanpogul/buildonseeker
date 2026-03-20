export const SITE_CONFIG = {
  title: "Build on Seeker | The Developer Hub for Solana Mobile",
  description:
    "100,000+ users, zero app store fees, hardware wallet security. Everything developers need to build on Solana Seeker: live ecosystem stats, SDKs, grants, and resources.",
  url: "https://buildonseeker.com",
};

export const HERO_CONTENT = {
  headline: "Build on Seeker",
  subheadline:
    "150,000+ crypto-native users. Zero app store fees. Hardware wallet security built in. Ship your dApp where the users already are.",
  ctaPrimary: { label: "Start Building", href: "#get-started" },
  ctaSecondary: { label: "Explore Ecosystem", href: "#live-stats" },
};

export const WHY_SEEKER_CARDS = [
  {
    icon: "distribution",
    heading: "Built-in Distribution",
    body: "150k+ power users already exploring the Solana dApp Store. dApps that launch on Seeker see their first 10-20k users in weeks. No cold start.",
  },
  {
    icon: "zero-fees",
    heading: "Zero Platform Fees",
    body: "No 30% app store tax. Developers keep 100% of what they earn. No gatekeeping on crypto features. Direct developer-to-user value flow.",
  },
  {
    icon: "hardware-security",
    heading: "Hardware-Level Security",
    body: "Seed Vault provides hardware-level key custody. Users sign transactions with fingerprint + double-tap. Wallet UX handled at the OS level.",
  },
  {
    icon: "anti-sybil",
    heading: "Anti-Sybil by Default",
    body: "Every Seeker device mints one Seeker Genesis Token (SGT). Verified, unique device ownership on-chain. Gate rewards to real users, not bots.",
  },
  {
    icon: "skr-token",
    heading: "SKR Token Economy",
    body: "4.3B+ SKR staked. Use SKR for payments, incentives, access control. Built-in token with real holders — no need to launch your own.",
  },
  {
    icon: "grants",
    heading: "Active Grants Program",
    body: "Solana Mobile Builder Grants are live. Funding + technical guidance + marketing support for dApp Store launches.",
  },
] as const;

export const HARDCODED_STATS = {
  devicesShipped: 200_000,
  powerUsers: 150_000,
  dappsInStore: 100,
  weeklyActiveWallets: 85_000,
  skrStaked: "4.3B",
  skrPrice: 0.0058,
  skrApy: 19.7,
  platformFees: 0,
};

export const ECOSYSTEM_HIGHLIGHTS = [
  {
    value: "200K+",
    label: "Devices Shipped",
    detail: "Seeker devices in the hands of users worldwide",
  },
  {
    value: "150K+",
    label: "Active Users",
    detail: "Crypto-native users actively exploring dApps",
  },
  {
    value: "$25M+",
    label: "TVL in SKR Staking",
    detail: "4.3B+ SKR tokens locked in staking",
  },
  {
    value: "0%",
    label: "Platform Fees",
    detail: "No app store tax — developers keep everything",
  },
];

export const STAT_LABELS = {
  devicesShipped: "Devices Shipped",
  powerUsers: "Active Users",
  dappsInStore: "dApps in Store",
  weeklyActiveWallets: "Weekly Active Wallets",
  totalValueLocked: "Total SKR Staked",
  sharePriceMultiplier: "Share Price",
  guardianCount: "Active Guardians",
  minStakeAmount: "Min Stake",
  vaultAddress: "Vault Address",
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
  tracks: [
    {
      name: "Builder Grants",
      description:
        "Open applications for teams building compelling experiences on Seeker. Rolling basis, responses in 4-6 weeks.",
    },
    {
      name: "RFPs",
      description:
        "Specific developer tooling gaps the Solana Mobile team wants to see filled. Targeted funding for high-impact projects.",
    },
  ],
  benefits: [
    "Funding for development",
    "Technical guidance from the Solana Mobile team",
    "Marketing support for dApp Store launch",
  ],
  lookingFor: [
    {
      heading: "Viral & Sticky",
      description:
        "Apps that feel viral or sticky by default. Think social, gaming, or daily-use experiences.",
    },
    {
      heading: "Creative SKR Integrations",
      description:
        "Incentives, payments, exclusive experiences built around SKR token utility.",
    },
    {
      heading: "Dev Tools",
      description:
        "Tools that unlock more builders on Solana Mobile. SDKs, libraries, frameworks.",
    },
    {
      heading: "Better Seeker Experience",
      description:
        "Products that genuinely improve how users interact with their Seeker device.",
    },
  ],
  guidelines: [
    "Mobile-first implementation (Android, native features)",
    "Clear use of Solana Mobile Stack (MWA, Seed Vault)",
    "Creative SKR integration",
    "Clear project scope and milestone timeline",
    "Strong team / track record",
    "Community & open source commitment preferred",
  ],
};

export const SEEKER_STACK_LAYERS = [
  {
    layer: "Hardware",
    component: "Seed Vault",
    description: "Secure enclave for private keys, biometric signing",
    icon: "shield",
  },
  {
    layer: "Identity",
    component: "Seeker Genesis Token (SGT)",
    description: "Non-transferable NFT, one per device, anti-sybil",
    icon: "fingerprint",
  },
  {
    layer: "Identity",
    component: "Seeker ID (.skr)",
    description: "Human-readable domain via AllDomains",
    icon: "at-sign",
  },
  {
    layer: "Token",
    component: "SKR",
    description: "Ecosystem token for staking, governance, incentives",
    icon: "coins",
  },
  {
    layer: "Protocol",
    component: "Mobile Wallet Adapter (MWA)",
    description: "Universal wallet-to-dApp connection",
    icon: "link",
  },
  {
    layer: "Distribution",
    component: "Solana dApp Store",
    description: "Fee-free app distribution for web3 apps",
    icon: "store",
  },
  {
    layer: "Security",
    component: "TPIN (Guardians)",
    description: "Decentralized device/app verification network",
    icon: "lock",
  },
] as const;

interface GetStartedStep {
  step: number;
  heading: string;
  description: string;
  link: { label: string; url: string };
  code?: string;
  skillInstall?: string;
}

export const GET_STARTED_STEPS: GetStartedStep[] = [
  {
    step: 1,
    heading: "Set Up Your Environment",
    description:
      "Install the Solana Mobile Stack SDK and set up your Android development environment.",
    link: {
      label: "Development Setup Guide",
      url: "https://docs.solanamobile.com/get-started/development-setup",
    },
  },
  {
    step: 2,
    heading: "Install AI Dev Skill",
    description:
      "Get the Seeker Dev Skill for your AI coding agent (Claude/Cursor) to instantly generate Solana Mobile integrations.",
    link: {
      label: "View Skill Source",
      url: "https://buildonseeker.com/skill.md",
    },
    code: "curl https://buildonseeker.com/skill.md",
  },
  {
    step: 3,
    heading: "Ship to the dApp Store",
    description:
      "Publish your app where 150k+ users are waiting. Zero fees, direct distribution.",
    link: {
      label: "Publishing Guide",
      url: "https://docs.solanamobile.com/dapp-store/intro",
    },
  },
];

export const FOOTER_LINKS = {
  author: {
    name: "Saicharan",
    github: "https://github.com/saicharanpogul",
    twitter: "https://twitter.com/saicharanpogul",
    superteam: "https://x.com/pogul_saicharan",
  },
  sdk: {
    name: "seeker-sdk",
    npm: "https://www.npmjs.com/package/seeker-sdk",
    github: "https://github.com/saicharanpogul/seeker-sdk",
  },
  solanaMobile: {
    site: "https://solanamobile.com",
    docs: "https://docs.solanamobile.com",
    discord: "https://discord.gg/solanamobile",
  },
};

export const EXTERNAL_LINKS = {
  solanaMobile: "https://solanamobile.com",
  seekerSdk: "https://github.com/saicharanpogul/seeker-sdk",
  seekerSdkNpm: "https://www.npmjs.com/package/seeker-sdk",
  authorGithub: "https://github.com/saicharanpogul",
  authorTwitter: "https://twitter.com/saicharanpogul",
};
