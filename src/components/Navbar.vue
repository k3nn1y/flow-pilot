<template>
  <header @keydown.esc="dismissMenu" class="relative border-b border-slate-200 bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
    >
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-xl font-bold tracking-tight text-slate-950"
        @click="closeMenu"
      >
        Flow<span class="text-cyan-500">Pilot</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          :to="{ path: '/', hash: '#features' }"
          class="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Features
        </RouterLink>

        <RouterLink
          :to="{ path: '/', hash: '#how-it-works' }"
          class="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          How it works
        </RouterLink>

        <RouterLink
          to="/pricing"
          class="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Pricing
        </RouterLink>

        <RouterLink
          :to="{ path: '/', hash: '#faq' }"
          class="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          FAQ
        </RouterLink>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden items-center gap-3 md:flex">
        <RouterLink
          to="/login"
          class="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
        >
          Sign in
        </RouterLink>

        <RouterLink
          :to="{ name: 'home', hash: '#dashboard-preview' }"
          class="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View demo
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        ref="menuButton"
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden cursor-pointer"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m18 6-12 12M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <div
      v-show="menuOpen"
      id="mobile-navigation"
      class="border-t border-slate-200 bg-white px-6 py-5 md:hidden"
    >
      <div class="mx-auto flex max-w-7xl flex-col gap-5">
        <RouterLink
          :to="{ path: '/', hash: '#features' }"
          class="text-sm font-medium text-slate-700"
          @click="closeMenu"
        >
          Features
        </RouterLink>

        <RouterLink
          :to="{ path: '/', hash: '#how-it-works' }"
          class="text-sm font-medium text-slate-700"
          @click="closeMenu"
        >
          How it works
        </RouterLink>

        <RouterLink
          to="/pricing"
          class="text-sm font-medium text-slate-700"
          @click="closeMenu"
        >
          Pricing
        </RouterLink>

        <RouterLink
          :to="{ path: '/', hash: '#faq' }"
          class="text-sm font-medium text-slate-700"
          @click="closeMenu"
        >
          FAQ
        </RouterLink>

        <div class="flex gap-3 border-t border-slate-200 pt-5">
          <RouterLink
            to="/login"
            class="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700"
            @click="closeMenu"
          >
            Sign in
          </RouterLink>

          <RouterLink
            :to="{ name: 'home', hash: '#dashboard-preview' }"
            class="flex-1 rounded-lg bg-slate-950 px-4 py-2.5 text-center text-sm font-semibold text-white"
            @click="closeMenu"
          >
            View demo
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const menuButton = ref(null)

function closeMenu() {
  menuOpen.value = false
}
function dismissMenu() {
  if (menuOpen.value) {
    closeMenu()
    menuButton.value?.focus()
  }
}
</script>