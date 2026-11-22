# Flow Pilot

Flow Pilot is a responsive SaaS portfolio demo for a fictional AI meeting assistant. It shows how a remote team could review meeting summaries, decisions, action items, and follow-ups in one workspace.

The dashboard data, teams, testimonials, and prices are fictional. The site runs entirely in the browser. The account screens are previews, and the app has no live AI, integrations, authentication, or payments.

## Run locally

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. To serve the production build locally, run:

```sh
npm run build
npm run preview
```

Run `npm test` to check pricing calculations.

## What to explore

- The landing page and a responsive sample meeting dashboard.
- A pricing calculator that compares monthly rates with annual equivalents, totals, and savings.
- A keyboard-dismissible mobile menu and single-open FAQ.
- Sign-in and account previews with direct links to the dashboard.

## Architecture

Vue single-file components render the app, Tailwind CSS v4 handles styling, and Vue Router provides client-side navigation. Route views live in `src/views`, while shared sections and UI live in `src/components`. Vite emits static files to `dist`. The app requires no environment variables.

## Deployment

The included `netlify.toml` configures Node 24, `npm run build`, and the `dist` publish directory. The SPA rewrite serves `index.html` for direct requests such as `/pricing`, `/login`, and `/signup`. Unknown routes display a recovery page in the browser. [Netlify SPA routing guidance](https://docs.netlify.com/resources/troubleshooting/page-not-found-error-guide/)

The project fits Netlify’s Free plan. After deployment, open and refresh each route on the deployed URL. [Netlify pricing](https://www.netlify.com/pricing/)
