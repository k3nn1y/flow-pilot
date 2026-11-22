<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold text-cyan-600">
          Simple pricing
        </p>

        <h1 class="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Choose the plan that fits your team.
        </h1>

        <p class="mt-5 text-lg leading-8 text-slate-600">
          Compare illustrative plans for the portfolio demo. Prices are for illustration.
        </p>
      </div>

      <!-- Billing Toggle -->
      <div class="mt-10 flex flex-col items-center gap-3">
        <div
          class="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1"
          role="group"
          aria-label="Billing period"
        >
          <button
            type="button"
            class="cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition"
            :class="billingPeriod === 'monthly'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-500 hover:text-slate-950'"
            :aria-pressed="billingPeriod === 'monthly'"
            @click="billingPeriod = 'monthly'"
          >
            Monthly
          </button>

          <button
            type="button"
            class="cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition"
            :class="billingPeriod === 'annual'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-500 hover:text-slate-950'"
            :aria-pressed="billingPeriod === 'annual'"
            @click="billingPeriod = 'annual'"
          >
            Annually
          </button>
        </div>

        <p class="text-sm text-slate-500">
          <span class="font-semibold text-cyan-700">
            Save {{ discountPercent }}%
          </span>
          with annual billing
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="relative flex flex-col rounded-2xl p-8"
          :class="plan.popular
            ? 'border-2 border-cyan-500 shadow-sm'
            : 'border border-slate-200'"
        >
          <!-- Plan Details -->
          <h2 class="text-lg font-semibold text-slate-950">
            {{ plan.name }}
          </h2>

          <p class="mt-2 text-sm leading-6 text-slate-600">
            {{ plan.description }}
          </p>

          <!-- Dynamic Price -->
          <div class="mt-6">
            <p class="text-4xl font-bold tracking-tight text-slate-950">
              {{ formatPrice(priceFor(plan, billingPeriod)) }}
              <span class="text-sm font-medium text-slate-500">
                {{ plan.monthlyPrice === 0 ? '/month' : '/user/month' }}
              </span>
            </p>

            <p class="mt-2 text-sm text-slate-500">
              <template
                v-if="billingPeriod === 'annual' && plan.monthlyPrice > 0"
              >
                {{ formatPrice(annualTotal(plan)) }} per user, billed annually
              </template>

              <template v-else-if="plan.monthlyPrice === 0">
                Free forever
              </template>

              <template v-else>
                Billed monthly
              </template>
            </p>

            <p
              v-if="billingPeriod === 'annual' && plan.monthlyPrice > 0"
              class="mt-2 text-sm font-semibold text-cyan-700"
            >
              Save {{ formatPrice(annualSavings(plan)) }} per user/year
            </p>
          </div>

          <!-- CTA -->
          <RouterLink
            to="/signup"
            class="mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition"
            :class="plan.popular
              ? 'bg-slate-950 text-white hover:bg-slate-800'
              : 'border border-slate-300 text-slate-900 hover:bg-slate-50'"
          >
            Account preview
          </RouterLink>

          <!-- Features -->
          <div class="mt-8 border-t border-slate-200 pt-6">
            <p class="text-sm font-semibold text-slate-950">
              {{ plan.featuresHeading }}
            </p>

            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-2"
              >
                <svg
                  class="mt-0.5 h-4 w-4 shrink-0 text-cyan-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>

                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { annualSavings, annualTotal, discountPercent, formatPrice, priceFor } from '../pricing.js'

const billingPeriod = ref('monthly')

// Plan data
const plans = [
  {
    name: 'Starter',
    description: 'Explore smarter meetings at no cost.',
    monthlyPrice: 0,
    popular: false,
    featuresHeading: "What's included",
    features: [
      'Up to 5 meetings per month',
      'AI meeting summaries',
      'Automatic action items',
      '7-day meeting history',
    ],
  },
  {
    name: 'Pro',
    description: 'For individuals and growing teams.',
    monthlyPrice: 18,
    popular: true,
    featuresHeading: 'Everything in Starter, plus',
    features: [
      'Unlimited meetings',
      'Advanced AI summaries',
      'Action items and decision tracking',
      'Team insights',
      '1-year meeting history',
    ],
  },
  {
    name: 'Business',
    description: 'For teams that need more control and visibility.',
    monthlyPrice: 35,
    popular: false,
    featuresHeading: 'Everything in Pro, plus',
    features: [
      'Advanced team analytics',
      'Custom controls',
      'Priority support',
      'Unlimited meeting history',
    ],
  },
]

</script>
