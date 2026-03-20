# buildonseeker.com

The unofficial developer hub for the Solana Seeker ecosystem. A Next.js site that pitches developers on why they should build on Seeker, shows live on-chain ecosystem stats powered by [`seeker-sdk`](https://github.com/saicharanpogul/seeker-sdk), curates developer resources, and provides grants/funding info.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (custom everything, no component libraries)
- **Live Data:** [`seeker-sdk`](https://www.npmjs.com/package/seeker-sdk) for on-chain staking stats
- **Language:** TypeScript (strict mode)
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `RPC_URL` | No | `https://api.mainnet-beta.solana.com` | Solana RPC endpoint. Use a dedicated RPC (Helius, Triton, QuickNode) for production. |

Create a `.env.local` file in the project root:

```bash
RPC_URL=https://your-rpc-endpoint.com
```

## Features

- **Live Ecosystem Stats** — On-chain data fetched via `seeker-sdk`, cached server-side for 5 minutes
- **Developer Resources** — Curated SDKs, documentation, and community links
- **Grants & Funding** — Info on Solana Mobile Builder Grants and RFPs
- **Seeker Stack** — Visual architecture breakdown of the Seeker tech stack
- **AI Coding Skill** — `/skill.md` endpoint serving a development skill for AI coding agents
- **OG Image** — Dynamic Open Graph image generation

## AI Coding Skill

The site serves a raw Markdown skill file at [`/skill.md`](https://buildonseeker.com/skill.md) that AI coding agents can install:

```bash
# Claude Code
claude mcp add-skill https://buildonseeker.com/skill.md

# Manual install
curl -o .claude/skills/seeker.md https://buildonseeker.com/skill.md
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/saicharanpogul/buildonseeker)

Or push to your connected GitHub repo — Vercel will auto-deploy.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run `npm run build` to verify the production build
5. Submit a pull request

## Disclaimer

This is an unofficial community project. It is **not affiliated with Solana Mobile, Inc.** or the Solana Foundation. All data is sourced from public on-chain state and publicly available information.

## License

MIT
