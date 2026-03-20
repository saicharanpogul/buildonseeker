export type IdeaCategory =
  | "All"
  | "DePIN"
  | "Payments"
  | "Dev Tool"
  | "Social"
  | "DeFi"
  | "Commerce"
  | "Infrastructure"
  | "Identity";

export interface BuilderIdea {
  id: number;
  title: string;
  description: string;
  tags: IdeaCategory[];
  seekerAdvantage: string;
  suggestedBy: {
    name: string;
    avatar?: string;
  };
  tweetText: string;
}

export const BUILDER_IDEAS: BuilderIdea[] = [
  {
    id: 1,
    title: "Seeker Proof",
    description:
      "Notarize photos and videos on-chain the moment you take them. Seeker's camera + SGT proves a verified device captured this media at this time and place. Useful for insurance claims, journalism, supply chain verification. Charge per notarization.",
    tags: ["DePIN", "Infrastructure"],
    seekerAdvantage: "SGT device attestation + camera hardware",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building Seeker Proof natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 2,
    title: "Tap-to-Pay with SKR",
    description:
      "NFC tap-to-pay for local merchants using SKR or any SPL token. Seeker's NFC hardware + Seed Vault biometric signing makes it a one-tap checkout. No card networks, no 3% processing fees. Take a smaller cut.",
    tags: ["Payments", "Commerce"],
    seekerAdvantage: "NFC + Seed Vault instant signing",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building Tap-to-Pay with SKR natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 3,
    title: "dApp Store Analytics",
    description:
      "App Annie for the Solana dApp Store. Track installs, daily active users, retention curves, and ranking trends for any dApp. Every developer in the store needs this data and it doesn't exist yet. Freemium: basic stats free, advanced analytics paid in SKR.",
    tags: ["Dev Tool", "Infrastructure"],
    seekerAdvantage: "dApp Store is the only distribution channel",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building dApp Store Analytics natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 4,
    title: "SGT-Gated Communities",
    description:
      "Group messaging where every member is a verified Seeker owner. Zero bots. No fake accounts. SGT verification on join means you know every person in the room has a real device. Charge for premium community features or take a cut of in-group tipping.",
    tags: ["Social"],
    seekerAdvantage: "SGT anti-sybil as membership proof",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building SGT-Gated Communities natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 5,
    title: "Push Notifications API",
    description:
      "Background service on Seeker that watches your wallet and sends native push notifications when things happen. Offer an API so any dApp developer can trigger pushes to their users. Revenue from API access tiers.",
    tags: ["Infrastructure", "Dev Tool"],
    seekerAdvantage: "Native mobile push + always-on wallet",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building a Native Push Notifications API on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 6,
    title: "SKR Subscriptions",
    description:
      "SDK and protocol for recurring SKR payments. Content creators, newsletter writers, premium dApp features, anything that needs monthly billing. Creator sets the price, subscriber authorizes recurring pulls from their wallet. Take a small protocol fee.",
    tags: ["Payments", "Infrastructure"],
    seekerAdvantage: "Seed Vault pre-authorization + SKR as native payment rail",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building SKR Subscriptions natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 7,
    title: "Seeker Bump Transfers",
    description:
      "Tap two Seekers together to transfer tokens, NFTs, or contact info via NFC. Like AirDrop but for crypto. No QR codes, no addresses, no copy-paste. Just bump and confirm with fingerprint.",
    tags: ["Payments", "Social"],
    seekerAdvantage: "NFC hardware + Seed Vault biometric confirm",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building Seeker Bump Transfers natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 8,
    title: ".skr Link Page",
    description:
      "Your .skr domain becomes a public profile and link-in-bio page that resolves on-chain. saicharan.skr shows your links, socials, NFTs, and accepts tips. Premium themes and analytics paid in SKR.",
    tags: ["Social", "Identity"],
    seekerAdvantage: ".skr domains as native identity",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building .skr Link Pages natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 9,
    title: "Seeker Bounty Board",
    description:
      "Post development bounties paid in SKR. Only SGT-verified developers can claim them. One device per person means no sybil farming bounties. Perfect for Solana Mobile ecosystem tasks. Take a listing fee.",
    tags: ["Dev Tool", "Commerce"],
    seekerAdvantage: "SGT prevents fake accounts gaming bounties",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building the Seeker Bounty Board on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 10,
    title: "Mobile DePIN Reporter",
    description:
      "Use Seeker's camera, GPS, and sensors to report real-world data: road conditions, air quality, weather, store prices, parking availability. Earn SKR for verified reports. SGT attestation prevents fake data injection.",
    tags: ["DePIN"],
    seekerAdvantage: "Hardware sensors + SGT device attestation",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building a Mobile DePIN Reporter natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 11,
    title: "Provably Fair Raffle Protocol",
    description:
      "On-chain raffles where entry is gated to SGT holders. One device equals one entry. No bots, no multi-accounting. Perfect for NFT drops, token launches, event tickets, giveaways.",
    tags: ["DeFi", "Commerce"],
    seekerAdvantage: "SGT = one entry per real device",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building a Provably Fair Raffle Protocol on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 12,
    title: "Guardian Leaderboard",
    description:
      "Public dashboard ranking all SKR guardian pools by yield, commission, uptime, total delegation, and community trust score. Help stakers make informed decisions instead of guessing.",
    tags: ["DeFi", "Infrastructure"],
    seekerAdvantage: "SKR staking and guardian system data",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building a Guardian Leaderboard natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 13,
    title: "On-Chain Attendance",
    description:
      "Event check-in using Seeker. Attendees scan a QR code, SGT proves they're a real person with a real device. Replaces POAPs that get farmed by bots. Event organizers get verified headcount.",
    tags: ["Social", "Commerce"],
    seekerAdvantage: "SGT anti-sybil for physical events",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building On-Chain Attendance gating natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 14,
    title: "Seeker Wallet Alerts",
    description:
      "Watchdog service monitoring your DeFi positions, LP health, borrow ratios, and token prices. Sends native Seeker push notifications when action is needed. Free basic alerts, paid tier for advanced setups.",
    tags: ["DeFi", "Infrastructure"],
    seekerAdvantage: "Native push + always-connected mobile wallet",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building Seeker Wallet Alerts natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 15,
    title: "SKR Micropayment Paywall",
    description:
      "SDK that lets any website gate content behind SKR micropayments. Reader taps 'unlock' on their Seeker, Seed Vault confirms, content loads. No accounts, no subscriptions for a single article.",
    tags: ["Payments", "Infrastructure"],
    seekerAdvantage: "One-tap Seed Vault micropayments",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building a SKR Micropayment Paywall natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 16,
    title: "Seeker Dev Sandbox",
    description:
      "Mobile IDE for testing Solana programs directly on Seeker. Preview MWA flows, test Seed Vault signing, verify SGT gating, debug transaction simulation. Every developer needs to test on-device.",
    tags: ["Dev Tool"],
    seekerAdvantage: "On-device testing of the full Solana Mobile Stack",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building the Seeker Dev Sandbox natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 17,
    title: "Peer-to-Peer Marketplace",
    description:
      "Local classifieds exclusively for Seeker owners. Buy and sell with SKR. SGT verification means verified sellers, no scam accounts. Escrow built into the protocol. Think Craigslist but zero-trust.",
    tags: ["Commerce", "Social"],
    seekerAdvantage: "SGT seller verification + SKR native payments",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building a Peer-to-Peer Marketplace natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
  {
    id: 18,
    title: "Token-Gated Fitness Challenges",
    description:
      "Stake SKR to join fitness challenges tracked by Seeker's accelerometer and GPS. Complete the challenge, split the pool. Fail, lose your stake. SGT ensures one person per device, no gaming.",
    tags: ["Social", "DeFi"],
    seekerAdvantage: "Device sensors + SGT anti-cheat + SKR staking",
    suggestedBy: {
      name: "buildonseeker.skr",
    },
    tweetText:
      "I'm building Token-Gated Fitness Challenges natively on @solanamobile Seeker \uD83D\uDD28 https://buildonseeker.com #solanamobile",
  },
];
