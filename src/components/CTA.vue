<template>
  <section class="bg-slate-950">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold text-cyan-400">
          Ready to move faster?
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Turn your next meeting into momentum.
        </h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Explore the sample workspace or compare the concept plans.
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RouterLink
            :to="{ name: 'home', hash: '#dashboard-preview' }"
            class="rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore the dashboard
          </RouterLink>

          <RouterLink
            to="/pricing"
            class="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
          >
            View pricing
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>