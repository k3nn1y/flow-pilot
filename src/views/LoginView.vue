<template>
  <section class="bg-slate-50 px-6 py-24">
    <div class="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 class="text-2xl font-bold tracking-tight text-slate-950">
        Sign-in preview
      </h1>

      <p class="mt-2 text-sm text-slate-600">
        This portfolio demo uses a sample dashboard and requires no account.
      </p>

      <RouterLink
        :to="{ name: 'home', hash: '#dashboard-preview' }"
        class="mt-6 inline-block text-sm font-semibold text-cyan-700 hover:text-cyan-600"
      >
        Explore the dashboard
      </RouterLink>
    </div>
  </section>
</template>
