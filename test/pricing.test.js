import assert from 'node:assert/strict'
import { test } from 'node:test'
import { annualSavings, annualTotal, discountPercent, formatPrice, priceFor } from '../src/pricing.js'

const cases = [
  { name: 'Starter', rate: 0, monthly: '$0', annual: '$0', total: '$0', savings: '$0' },
  { name: 'Pro', rate: 18, monthly: '$18', annual: '$14.40', total: '$172.80', savings: '$43.20' },
  { name: 'Business', rate: 35, monthly: '$35', annual: '$28', total: '$336', savings: '$84' },
]

for (const { name, rate, monthly, annual, total, savings } of cases) {
  test(`${name} shows the correct monthly rate, annual equivalent, total, and savings`, () => {
    const plan = { monthlyPrice: rate }
    assert.equal(discountPercent, 20)
    assert.equal(formatPrice(priceFor(plan, 'monthly')), monthly)
    assert.equal(formatPrice(priceFor(plan, 'annual')), annual)
    assert.equal(formatPrice(annualTotal(plan)), total)
    assert.equal(formatPrice(annualSavings(plan)), savings)
  })
}
