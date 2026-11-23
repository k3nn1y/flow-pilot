<template>
  <section class="overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
      <div class="mx-auto max-w-4xl text-center">

        <h1
          class="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
        >
          Turn every meeting into
          <span class="text-cyan-500"> momentum.</span>
        </h1>

        <p
          class="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
        >
          Turn conversations into clear notes, decisions, and actionable next steps with an AI-powered meeting assistant.
        </p>

        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <RouterLink
            :to="{ name: 'home', hash: '#dashboard-preview' }"
            class="w-full rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            Explore the dashboard
          </RouterLink>

          <RouterLink
            :to="{ name: 'home', hash: '#how-it-works' }"
            class="w-full rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
          >
            See how it works
          </RouterLink>
        </div>

      </div>

      <!-- Product Preview -->
      <div class="relative mx-auto mt-20 max-w-5xl">

        <div class="absolute -inset-10 -z-10 bg-cyan-100/50 blur-3xl"></div>

        <div
          class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl"
        >

          <!-- Browser Bar -->
          <div class="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
            <span class="h-3 w-3 rounded-full bg-slate-700"></span>
            <span class="h-3 w-3 rounded-full bg-slate-700"></span>
            <span class="h-3 w-3 rounded-full bg-slate-700"></span>

            <div class="ml-4 h-7 flex-1 rounded-md bg-slate-900"></div>
          </div>

          <div class="grid min-h-[360px] md:grid-cols-[220px_1fr]">

            <!-- Sidebar -->
            <aside class="hidden border-r border-slate-800 p-5 md:block">
              <div class="mb-8 text-sm font-semibold text-white">
                Flow Pilot
              </div>

              <div class="space-y-3 text-sm">
                <div class="rounded-lg bg-slate-800 px-3 py-2 text-white">
                  Overview
                </div>

                <div class="px-3 py-2 text-slate-500">
                  Meetings
                </div>

                <div class="px-3 py-2 text-slate-500">
                  Tasks
                </div>

                <div class="px-3 py-2 text-slate-500">
                  Insights
                </div>
              </div>
            </aside>

            <!-- Dashboard -->
            <div class="p-6 md:p-8">

              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p class="text-sm text-slate-500">
                    Good morning
                  </p>

                  <h2 class="mt-1 text-2xl font-semibold text-white">
                    Team overview
                  </h2>
                </div>

                <div
                  class="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-bold text-slate-950"
                >
                  SAMPLE DATA
                </div>
              </div>

              <!-- Stats -->
              <div class="mt-8 grid gap-4 sm:grid-cols-3">

                <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                  <p class="text-xs text-slate-500">
                    Meetings analysed
                  </p>

                  <p class="mt-2 text-3xl font-semibold text-white">
                    24
                  </p>
                </div>

                <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                  <p class="text-xs text-slate-500">
                    Action items
                  </p>

                  <p class="mt-2 text-3xl font-semibold text-white">
                    87
                  </p>
                </div>

                <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                  <p class="text-xs text-slate-500">
                    Time saved
                  </p>

                  <p class="mt-2 text-3xl font-semibold text-white">
                    12.4h
                  </p>
                </div>

              </div>

              <!-- Latest Meeting -->
              <div class="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-5">

                <div class="flex flex-wrap items-center justify-between gap-2">
                  <p class="text-sm font-medium text-white">
                    Latest meeting
                  </p>

                  <span class="text-xs text-cyan-400">
                    Analysed
                  </span>
                </div>

                <p class="mt-5 text-sm leading-6 text-slate-300">
                  In the weekly product sync, the team agreed to simplify onboarding. Design will share a revised first-run flow by Friday.
                </p>

                <div class="mt-5 flex flex-wrap gap-2">
                  <span class="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-400">
                    6 action items
                  </span>

                  <span class="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
                    3 decisions
                  </span>

                  <span class="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
                    2 follow-ups
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
