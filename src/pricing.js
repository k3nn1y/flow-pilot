const annualDiscount = 0.20

export const discountPercent = annualDiscount * 100

export function priceFor(plan, billingPeriod) {
  return billingPeriod === 'annual'
    ? plan.monthlyPrice * (1 - annualDiscount)
    : plan.monthlyPrice
}

export function annualTotal(plan) {
  return priceFor(plan, 'annual') * 12
}

export function annualSavings(plan) {
  return plan.monthlyPrice * 12 * annualDiscount
}

export function formatPrice(amount) {
  return Number.isInteger(amount)
    ? `$${amount}`
    : `$${amount.toFixed(2)}`
}
