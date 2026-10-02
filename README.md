# SocialWise

A Next.js App Router application for building social media awareness among teenagers.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Visit http://127.0.0.1:3000.

## Production

```sh
npm run build
```

The app is configured as a static export. Deploy the `out` directory to a static host. `next start` is not used for a static export.

## Included

- Home with three interactive scenarios and immediate feedback
- About the project
- Learning hub and five dedicated lesson routes
- Knowledge checks with explanations and reset controls
- Responsive navigation, keyboard focus styles, reduced-motion support

Lesson content is in `components/topics.ts`. Interactions are in `components/site.tsx`. Global styles are in `app/globals.css`.

Quiz answers and scenario responses exist only in page memory. No accounts, tracking, or external submissions are used.

## Blue family design

The homepage follows the approved blue SocialWise design: a family illustration, interactive two-choice scenarios, five learning cards, and expandable Teens, Kids, and Parents guidance. The shared navigation, About page, learning hub, and lessons use the same blue palette.

Artwork: `public/family-hero.png`, generated with the built-in image generation tool. Prompt: Recreate the approved mockup's family hero artwork as a standalone landscape illustration: teenage boy in blue hoodie, teenage girl, younger boy in yellow hoodie, and mother in cream learning around a tablet; pale ice-blue interior; match the original character style; no text, logos, UI, or buttons. Audience portraits reuse this asset with CSS framing.
