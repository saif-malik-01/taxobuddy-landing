'use client';

import React, { useState } from 'react';
import pricingData from '../../../data/pricing.json';
import PricingCard from './pricing-card';
import PricingToggle from './pricing-toggle';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular: boolean;
}

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => setIsMonthly(!isMonthly);

  if (!pricingData) {
    return null;
  }

  const { plans }: { plans: PricingPlan[] } = pricingData;

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent)] opacity-[0.02] blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Licenses</span>
          <h1
            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-8 uppercase"
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
          >
            Professional <br /><span className="text-[var(--primary)]">Intelligence.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-[var(--text-secondary)] font-medium leading-relaxed mb-12">
            Choose the plan that matches your firm&apos;s research intensity. From solo practitioners to national firms, we provide grounded, source-verified authority.
          </p>

          <PricingToggle isMonthly={isMonthly} onToggle={togglePricing} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} isMonthly={isMonthly} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
