<template>
  <section id="dashboard-preview" class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

      <!-- Section Header -->
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold text-cyan-600">
          Demo dashboard · Sample data
        </p>

        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
        >
          Your meetings, organised automatically.
        </h2>

        <p class="mt-5 text-lg leading-8 text-slate-600">
          See what happened, what was decided and what needs to happen next
          without digging through notes.
        </p>
      </div>

      <!-- Dashboard -->
      <div class="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl">

        <!-- Top Bar -->
        <div class="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-slate-700"></span>
            <span class="h-3 w-3 rounded-full bg-slate-700"></span>
            <span class="h-3 w-3 rounded-full bg-slate-700"></span>
          </div>

          <div class="hidden h-7 w-64 rounded-md bg-slate-900 sm:block"></div>

          <div class="h-8 w-8 rounded-lg bg-slate-800"></div>
        </div>

        <div class="grid md:grid-cols-[220px_minmax(0,1fr)]">

          <!-- Sidebar -->
          <aside class="hidden border-r border-slate-800 p-5 md:block">
            <div class="mb-8 text-sm font-semibold text-white">
              Flow Pilot
            </div>

            <div class="space-y-2 text-sm">
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
                Decisions
              </div>

              <div class="px-3 py-2 text-slate-500">
                Insights
              </div>
            </div>
          </aside>

          <!-- Main Dashboard -->
          <div class="p-6 md:p-8">

            <!-- Heading -->
            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p class="text-sm text-slate-500">
                  Monday, August 24
                </p>

                <h3 class="mt-1 text-2xl font-semibold text-white">
                  Team overview
                </h3>
              </div>

            </div>

            <!-- Stats -->
            <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p class="text-xs text-slate-500">
                  Meetings
                </p>

                <p class="mt-2 text-3xl font-semibold text-white">
                  24
                </p>

                <p class="mt-2 text-xs text-cyan-400">
                  +18% this month
                </p>
              </div>

              <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p class="text-xs text-slate-500">
                  Action items
                </p>

                <p class="mt-2 text-3xl font-semibold text-white">
                  87
                </p>

                <p class="mt-2 text-xs text-cyan-400">
                  64 completed
                </p>
              </div>

              <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p class="text-xs text-slate-500">
                  Decisions
                </p>

                <p class="mt-2 text-3xl font-semibold text-white">
                  32
                </p>

                <p class="mt-2 text-xs text-slate-400">
                  Across 18 meetings
                </p>
              </div>

              <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p class="text-xs text-slate-500">
                  Time saved
                </p>

                <p class="mt-2 text-3xl font-semibold text-white">
                  12.4h
                </p>

                <p class="mt-2 text-xs text-cyan-400">
                  This month
                </p>
              </div>

            </div>

            <!-- Lower Content -->
            <div class="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">

              <!-- Recent Meetings -->
              <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-semibold text-white">
                    Recent meetings
                  </h4>

                </div>

                <div class="mt-5 space-y-4">

                  <div class="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <p class="text-sm font-medium text-white">
                        Product roadmap review
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        Today · 42 min
                      </p>
                    </div>

                    <span class="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-400">
                      Analysed
                    </span>
                  </div>

                  <div class="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <p class="text-sm font-medium text-white">
                        Weekly growth sync
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        Yesterday · 31 min
                      </p>
                    </div>

                    <span class="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-400">
                      Analysed
                    </span>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium text-white">
                        Design review
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        Aug 21 · 28 min
                      </p>
                    </div>

                    <span class="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
                      Processing
                    </span>
                  </div>

                </div>
              </div>

              <!-- Action Items -->
              <div class="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h4 class="text-sm font-semibold text-white">
                  Open action items
                </h4>

                <div class="mt-5 space-y-4">

                  <div class="flex gap-3">
                    <div class="mt-0.5 h-4 w-4 rounded border border-slate-600"></div>

                    <div>
                      <p class="text-sm text-slate-300">
                        Finalise onboarding flow
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        Due tomorrow
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-3">
                    <div class="mt-0.5 h-4 w-4 rounded border border-slate-600"></div>

                    <div>
                      <p class="text-sm text-slate-300">
                        Review analytics requirements
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        Due Wednesday
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-3">
                    <div class="mt-0.5 h-4 w-4 rounded border border-slate-600"></div>

                    <div>
                      <p class="text-sm text-slate-300">
                        Send customer follow-up
                      </p>

                      <p class="mt-1 text-xs text-slate-500">
                        Due Friday
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>