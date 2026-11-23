<template>
  <footer class="border-t border-slate-800 bg-slate-950">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:px-8">

      <div class="grid gap-10 md:grid-cols-3">

        <!-- Brand -->
        <div class="md:col-span-2">
          <RouterLink
            to="/"
            class="text-xl font-bold tracking-tight text-white"
          >
            Flow<span class="text-cyan-400">Pilot</span>
          </RouterLink>

          <p class="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Smarter meetings. Clearer decisions. Better follow-ups.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h3 class="text-sm font-semibold text-white">
            Product
          </h3>

          <ul class="mt-4 space-y-3">
            <li>
              <RouterLink
                :to="{ name: 'home', hash: '#features' }"
                class="text-sm text-slate-400 transition hover:text-white"
              >
                Features
              </RouterLink>
            </li>

            <li>
              <RouterLink
                :to="{ name: 'home', hash: '#how-it-works' }"
                class="text-sm text-slate-400 transition hover:text-white"
              >
                How it works
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/pricing"
                class="text-sm text-slate-400 transition hover:text-white"
              >
                Pricing
              </RouterLink>
            </li>

            <li>
              <RouterLink
                :to="{ name: 'home', hash: '#faq' }"
                class="text-sm text-slate-400 transition hover:text-white"
              >
                FAQ
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-12 border-t border-slate-800 pt-8">
        <p class="text-sm text-slate-500">
          © 2026 Flow Pilot
        </p>
        <p class="mt-2 text-xs leading-5 text-slate-400">
          Flow Pilot is a fictional product concept developed as a portfolio project.
        </p>
      </div>

    </div>
  </footer>
</template>
