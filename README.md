# PPAOP

Personal portfolio site for Papop Chattongchaikul — built as a single-page Next.js app with animated hero visuals, project highlights, and contact links.

## Features

- Built with **Next.js 16** and **React 19**
- Responsive layout with dark theme and **Poppins** typography
- **Motion**-based UI animation and interactive sections
- Hero background using **Three.js** / **React Three Fiber** (beams effect)
- **Previous work** section with case-study style content
- **Contact** via drawer with social / external links (no backend form)

## Tech stack

- [Next.js](https://nextjs.org/) — App Router, SSR/SSG
- [React](https://react.dev/) — UI
- [TypeScript](https://www.typescriptlang.org/) — Types
- [Tailwind CSS](https://tailwindcss.com/) v4 — Styling (`@tailwindcss/postcss`)
- [Motion](https://motion.dev/) — Animation
- [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/introduction) & [@react-three/drei](https://github.com/pmndrs/drei) — WebGL hero
- [Radix UI](https://www.radix-ui.com/) primitives — Accessible building blocks
- [shadcn/ui](https://ui.shadcn.com/)-style components — `components/shadcn-ui`
- [Vaul](https://github.com/emilkowalski/vaul) — Drawer
- [OpenNext Cloudflare](https://opennext.js.org/cloudflare) & [Wrangler](https://developers.cloudflare.com/workers/wrangler/) — Cloudflare Workers deployment
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) — Linting and formatting
- [pnpm](https://pnpm.io/) — Package manager

## Installation

1. Clone the repository:

```bash
git clone git@github.com:PapopCtck/portfolio.git
```

2. Go into the project directory:

```bash
cd portfolio
```

3. Install dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| -------- | ----------- |
| `pnpm dev` | Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Run production server locally |
| `pnpm lint` | ESLint |
| `pnpm preview` | OpenNext Cloudflare build + local preview |
| `pnpm deploy` | OpenNext Cloudflare build + deploy |
| `pnpm cf-typegen` | Generate `cloudflare-env.d.ts` from Wrangler |

## Project structure

```
portfolio/
├── app/                 # App Router — layout, page, global CSS
├── components/          # Shared UI (shadcn-ui, magicui, react-bits, etc.)
├── features/            # Page sections — Hero, Navbar, TechStack, PreviousWork, Footer
├── public/              # Static assets
├── wrangler.jsonc       # Cloudflare Workers config for OpenNext
└── package.json
```

Path alias: `@ppaop/*` maps to the repository root (see `tsconfig.json`).

## Deployment (Cloudflare)

The app targets Cloudflare Workers via OpenNext. After [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) is authenticated, use `pnpm deploy` or `pnpm preview` as above. Adjust `wrangler.jsonc` and compatibility settings as needed for your account.

## Author

PapopCtck — [@PapopCtck](https://github.com/PapopCtck)

## Acknowledgments

- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Motion documentation](https://motion.dev/docs)
- [Three.js documentation](https://threejs.org/docs/)
- [React Three Fiber documentation](https://docs.pmnd.rs/react-three-fiber)
- [Cloudflare Workers documentation](https://developers.cloudflare.com/docs)
- [OpenNext Cloudflare](https://opennext.js.org/cloudflare)
