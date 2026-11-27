# Portfolio Creator: Marketing Site

The public landing/marketing site for Portfolio Creator, a service that builds
custom portfolio sites for artists, designers, and makers.

> This repo is **only** the marketing site. The reusable, cloneable portfolio
> template system lives in a separate repository.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- ESLint (`eslint-config-next`)

## Getting started

Requires Node 22 (see `.nvmrc`).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Lint with ESLint                 |

## Project structure

```
src/
  app/                  # Routes, root layout, global styles
  components/
    layout/             # Site header, footer
    sections/           # Landing page sections (Hero, etc.)
  lib/
    site.ts             # Site name, copy, nav links, URL
public/                 # Static assets
```

Site-wide copy and navigation live in `src/lib/site.ts`. Sections not yet
designed use `PlaceholderSection`.
