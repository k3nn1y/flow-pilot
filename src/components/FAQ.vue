<template>
  <section id="faq" class="bg-white">
    <div class="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold text-cyan-600">FAQ</p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Questions, answered.
        </h2>

        <p class="mt-5 text-lg leading-8 text-slate-600">
          What the portfolio demo shows and how the product concept would work.
        </p>
      </div>

      <div class="mt-16 divide-y divide-slate-200 border-y border-slate-200">
        <article
          v-for="(item, index) in faqs"
          :key="item.question"
          class="py-6"
        >
          <button
            type="button"
            class="flex w-full cursor-pointer items-center justify-between gap-6 text-left"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggleFAQ(index)"
          >
            <span class="text-base font-semibold text-slate-950">
              {{ item.question }}
            </span>

            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg text-slate-600 transition-transform duration-200"
              :class="{ 'rotate-45': openIndex === index }"
              aria-hidden="true"
            >
              +
            </span>
          </button>

          <div
            v-show="openIndex === index"
            :id="`faq-answer-${index}`"
            class="mt-3 pr-10 text-sm leading-6 text-slate-600"
          >
            {{ item.answer }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const faqs = [
  {
    question: 'How does Flow Pilot work?',
    answer:
      'The concept uses meeting transcripts to surface decisions, action items, and follow-ups. The demo dashboard shows sample results.',
  },
  {
    question: 'Does Flow Pilot record my meetings?',
    answer:
      'This demo uses sample data and does not record meetings or process transcripts.',
  },
  {
    question: 'Can I use Flow Pilot with my existing tools?',
    answer:
      'Meeting and productivity integrations are part of the product concept. The demo runs on its own.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'The illustrative Starter plan includes up to five meetings per month. The demo itself is free to explore.',
  },
  {
    question: 'Can I subscribe to a plan?',
    answer:
      'The pricing toggle illustrates monthly and annual billing. The demo does not accept payments or start subscriptions.',
  },
]

function toggleFAQ(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>