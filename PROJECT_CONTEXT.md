# Flow Pilot project context

Flow Pilot is a portfolio demo of a fictional AI meeting assistant for remote teams, aimed at recruiters and prospective web-development clients.

- Vite, Vue 3 single-file components, Vue Router in history mode, Tailwind CSS v4, and JavaScript.
- `src/App.vue` owns the shared header, main landmark, and footer. `src/views/HomeView.vue` composes the homepage. `src/components` contains the layouts and interactive navigation, FAQ, and pricing.
- `/` presents the landing page and sample dashboard. `/pricing` compares concept plans. `/login` and `/signup` are account previews. Unmatched paths render a recovery view.
- The responsive visual system uses white and dark slate with cyan accents.
- Starter is free. Pro and Business cost $18 and $35 per user per month. Annual billing is 20% lower. Pro is $14.40/month equivalent, $172.80 billed, and $43.20 saved. Business is $28/month equivalent, $336 billed, and $84 saved. Paid amounts are per user.
- The sample teams, testimonials, and dashboard metrics are fictional. The project is a frontend with no authentication, billing, AI processing, or integrations.
- Netlify builds `dist` with Node 24 and rewrites deep links to the SPA entry point.
