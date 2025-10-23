import React from 'react';
import pricingPlans from '../../data/pricingPlans';
import PricingCard from './PricingCard';
import Reveal from "../ui/Reveal";

export default function Pricing() {
  return (
  <section aria-labelledby="pricing-title" className="relative z-10 px-6 md:px-10 lg:px-16 pt-24 pb-24 md:pt-32 -mb-48 md:-mb-64">
      <div className="w-full max-w-[1440px] mx-auto">
        <Reveal as="h2" variant="slide-up" id="pricing-title" className="text-center text-[40px] leading-[52px] font-semibold text-[#11142D]">
          Help Is One Click Away
        </Reveal>
        <div className="mt-16 flex flex-col lg:flex-row gap-12 justify-center">
          {pricingPlans.map((plan, idx) => (
            <Reveal key={plan.id} variant="fade" delay={idx * 120} className="h-full">
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
