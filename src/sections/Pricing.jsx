import React from 'react'
import PricingCard from '../components/PricingCard'

const freeFeatures = [
  { label: '1 Active Job', included: true },
  { label: 'Basic List Placement', included: true },
  { label: 'Unlimited Job Applicants', included: false },
  { label: 'Invite Anyone to Apply to Your Jobs', included: false },
]

const premiumFeatures = [
  { label: 'Unlimited Job Posts', included: true },
  { label: 'Instant Job Post Approval', included: true },
  { label: 'Premium List Placement', included: true },
  { label: 'Unlimited Job Applicants', included: true },
]

export default function Pricing() {
  return (
    <section className="px-6 md:px-36 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[32px] md:text-[40px] leading-[48px] font-semibold text-[#11142D]">Help Is One Click Away</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <PricingCard
            title="Free"
            subtitle="Basic"
            price=""
            period=""
            features={freeFeatures}
            variant="outline"
            ctaLabel="Get Started"
            href="#"
          />

          <PricingCard
            title="$79.99"
            subtitle="Premium"
            price="$79.99"
            period="Per Month"
            features={premiumFeatures}
            variant="filled"
            ctaLabel="Get Started"
            href="#"
          />
        </div>
      </div>
    </section>
  )
}
