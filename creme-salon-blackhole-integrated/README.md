# Crème Salon + Black Hole Hero integration

Set up with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui-compatible aliases.

## Run locally
1. Install Node.js 18.17+.
2. Run `npm install` in this folder.
3. Run `npm run dev` and open the local URL printed by Next.js.

## Routes
- `/` — supplied Black Hole Hero demo.
- `/salon-preview` — original static Crème Salon site retained under `public/salon-site/`.

## Component
`components/ui/blackhole-hero-section.tsx`

The component uses React hooks and native WebGL; it has no extra runtime package dependencies. Tailwind is configured and `@/components/ui` matches the requested shadcn convention.

The supplied component is space-themed, unlike the salon business website. The original salon site is preserved at `/salon-preview` rather than being overwritten with an unrelated hero.
