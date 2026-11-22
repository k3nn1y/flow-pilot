# Flow Pilot — Codex / OpenCode Project Handoff

## Mission
Finish and ship **Flow Pilot**, a fictional but polished SaaS portfolio project, as efficiently as possible. It should demonstrate credible frontend/full-stack development skills to recruiters and serve as a sample for a web-development business. Do not represent the fictional product, testimonials, or customers as real. Prioritize a working, tested, responsive, deployed project and a clean public GitHub repository over endless refinements.

## User working preferences
- Execute quickly but reliably. Minimize tutorials, planning loops, unnecessary questions, and feature creep.
- Inspect the actual repository before changing anything; code is the source of truth. The information below is context from a previous ChatGPT conversation and may be outdated.
- Prefer making and validating edits directly in the local repo instead of asking the user to copy snippets.
- Keep user-facing progress updates brief: completed, tests/results, blockers, next action.
- Explain only essential technical decisions. Ask for approval before destructive operations, external publishing, account changes, paid services, or major scope changes.
- Use free tools/tiers where practical. Do not introduce paid dependencies without approval.
- Do not claim work is done unless verified.

## Product concept and design
**Flow Pilot**: AI meeting assistant for remote teams. Concept: capture meeting notes, identify decisions, action items, and follow-ups, and show team insights. This is a **portfolio demo**, not a real AI service or client commission.

Visual direction: premium modern B2B SaaS; white and dark slate with cyan accents. Focus on professional, cohesive, accessible, responsive UI. Existing sections may use fictional brands and testimonials; these must not be presented as real endorsements.

## Known tech stack (verify locally)
- Vite + Vue 3
- Tailwind CSS v4
- Vue Router
- JavaScript

Previously discussed `src/main.js`:
```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

## Known structure (verify locally)
`App.vue` contains shared `Navbar`, a `RouterView` in `main`, and shared `Footer`.

`HomeView.vue` renders:
Hero → LogoStrip → Features → HowItWorks → DashboardPreview → Testimonials → Pricing → FAQ → CTA.

Routes previously configured:
- `/` → `HomeView.vue`
- `/pricing` → `PricingView.vue` (reuses `Pricing` component)
- `/login` → `LoginView.vue` (placeholder at last report)
- `/signup` → `SignupView.vue` (placeholder at last report)

Router scroll behavior previously implemented: restore saved position; scroll smoothly to `to.hash`; otherwise top.

`Navbar.vue`: logo home link, desktop section/pricing links, sign-in/sign-up links, working mobile menu. User chose `sm:` breakpoint for desktop nav/actions and `sm:hidden` for mobile menu. Verify real responsiveness rather than assuming this breakpoint is ideal.

FAQ: single-open accordion using Vue `ref(null)` and `openIndex`; `id="faq"`; accessible expanded/controls attributes. Footer has homepage section links and company/legal placeholders. CTA links to signup/pricing.

`DashboardPreview`: static product-style dashboard showing overview stats, recent meetings, tasks. Do not mistake it for an implemented backend.

`LogoStrip`: fictional brands NOVA, VANTA, LUMA, ORBIT, PULSE, NORTH.

## Pricing decisions
Pricing is driven by script data/functions rather than hardcoded amounts in template. `billingPeriod` toggles monthly/annual. Annual discount: 20%.
- Starter: $0; free forever.
- Pro: $18/user/month monthly; annual equivalent $14.40/user/month; billed $172.80/user/year; saves $43.20/user/year.
- Business: $35/user/month monthly; annual equivalent $28/user/month; billed $336/user/year; saves $84/user/year.
- Business is **per user**, not a flat team subscription.

Prior version used `plans`, `priceFor(plan)`, `annualTotal(plan)`, `annualSavings(plan)`, and `formatPrice(amount)`. Verify the local code; the user said they likely added the latest version.

## Current known status and unknowns
The user previously reported navigation, mobile menu, FAQ accordion, and placeholder routes working. Pricing was recently refactored, but not independently verified. The app has **not been systematically tested**. Git status, deployment, and actual current code are unknown. Do not assume that auth, AI, database, or backend functionality exists.

## Execution plan
1. Audit repository and Git status; identify scripts, dependencies, broken links, incomplete placeholders, build issues, and actual implemented features. Avoid rewriting working components without reason.
2. Create/update `AGENTS.md`, `PROJECT_CONTEXT.md`, `STATUS.md`, `HANDOFF.md` based on this document and verified code.
3. Make a small prioritized completion plan. Finish essential navigation, page states, responsiveness, accessibility, UI consistency, and obvious broken flows. For demo-only flows, label them honestly or implement a modest functional demo if justified; never imply working authentication/AI where absent.
4. Run available checks (`npm install` only when needed, `npm run build`, lint/tests if configured), add sensible tests where feasible, and perform manual browser checks if browser tooling is available. Report what was actually tested versus untested.
5. Prepare GitHub: sensible `.gitignore`, clean README with setup/run instructions, feature summary, screenshots if possible, portfolio-demo disclosure, and architecture/tech stack. Check for secrets before commit. Ask user for repository destination/permission before remote push.
6. Prepare deployment on an appropriate free tier; confirm SPA routing works on refresh. Ask user before connecting external accounts or publishing.
7. Provide short recruiter-ready project description and clear remaining limitations. Then move on to next portfolio project; CV and business execution are separate priorities, not reasons to expand this app indefinitely.

## Multi-agent continuity protocol
Use the repository as the shared memory; no special integration or webhook system is required initially.

**`AGENTS.md`**: durable rules for all agents. Keep concise. Agents should read `PROJECT_CONTEXT.md`, `STATUS.md`, and `HANDOFF.md` before acting.

**`PROJECT_CONTEXT.md`**: product purpose, design system, architecture, major decisions, scope boundaries, and actual verified implementation.

**`STATUS.md`**: checklist of done/in progress/todo, with evidence and blockers. Keep current after each meaningful task.

**`HANDOFF.md`**: short session snapshot containing date, branch/commit if available, exact files changed, commands run and outcomes, unresolved issues, next 1–3 concrete actions, and warnings. Update at the end of each task/session and before hitting context/usage limits. Keep it compact and actionable, not a full transcript.

Every new agent must first read these docs, inspect Git status and relevant code, and reconcile stale documentation with the repo. Do not overwrite uncommitted changes from another agent. Avoid concurrent edits to the same files. Use Git commits as checkpoints after verified work, subject to user's approval/preferences.

## First Codex instruction
Read this handoff, inspect the entire local repository, and verify what is implemented. Create the four repo-local continuity documents (`AGENTS.md`, `PROJECT_CONTEXT.md`, `STATUS.md`, `HANDOFF.md`) grounded in the actual code. Then execute the highest-priority safe, local completion tasks, running the build and relevant checks. Keep updates brief. Do not publish, push, install paid services, or perform destructive changes without asking. At the end, update `STATUS.md` and `HANDOFF.md` and provide a concise summary with blockers and next actions.
