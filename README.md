# ANTHERA Systems

**Empowering Intelligent Systems**

Official website for ANTHERA Systems — a European software company building modern SaaS products for enterprise teams.

## Products

- **PowerLeave** — HR & Team Management platform for leave and absence management
- **GOVERN.AI** — Sovereign Control Plane for enterprise AI agent governance
- **AntheraLearn** — AI education platform with an AI coach
- **agentAIer** — AI Agent Operating System ([live landing](https://witty-llamas-wonder.freebuff.dev/))

## Brand & product logos

Company logos (SVG) live in `client/public/`:

- `anthera-mark.svg` — symbol only, transparent background (used in the navbar, footer and favicon)
- `anthera-logo-transparent.svg` — full lockup for dark backgrounds
- `anthera-logo-dark.svg` — full lockup on a dark tile

Product logos (SVG) go in **`client/public/products/`**, named after the route slug:

| File | Product |
| --- | --- |
| `client/public/products/powerleave.svg` | PowerLeave |
| `client/public/products/govern-ai.svg` | GOVERN.AI |
| `client/public/products/antheralearn.svg` | AntheraLearn |
| `client/public/products/agent-aier.svg` | agentAIer |

Just drop the file in that folder: the site picks it up automatically. Until a logo is uploaded, the previous logo/icon is shown as a fallback.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Wouter (routing)

## Features

- Dark/Light mode toggle
- IT/EN language switcher
- Responsive design
- Glassmorphism UI
- Scroll animations

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The build output will be in `dist/public/`.

## Deploy on Netlify

1. Connect this repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist/public`
4. Deploy!

---

© 2026 ANTHERA Systems. All rights reserved.
