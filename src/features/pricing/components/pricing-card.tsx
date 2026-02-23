'use client';

import React from 'react';
import Link from 'next/link';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  ctaText: string;
  popular: boolean;
  comingSoon?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  isMonthly: boolean;
  delay?: number;
}

export default function PricingCard({ plan, isMonthly, delay = 0 }: PricingCardProps) {
  const price = isMonthly ? plan.monthlyPrice : plan.annualPrice;
  const period = isMonthly ? '/mo' : '/yr';

  return (
    <div
      className="h-full flex flex-col group animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`flex-1 glass rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden transition-all duration-500 border-[var(--primary)]/${plan.popular ? '20' : '0'} group-hover:border-[var(--primary)]/30`}>

        {plan.popular && (
          <div className="absolute top-0 right-0 px-6 py-2 bg-[var(--primary)] text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-bl-2xl">
            Most Popular
          </div>
        )}

        <div className="mb-10">
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--primary)] mb-4">{plan.name}</h3>
          <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
            {plan.description}
          </p>
        </div>

        <div className="mb-12 min-h-[80px] flex flex-col justify-center">
          {plan.comingSoon ? (
            <div className="flex">
              <span className="px-4 py-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-overlay)] text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em]">
                Coming Soon
              </span>
            </div>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-[var(--text-primary)] tracking-tighter">
                {price === 0 ? 'Free' : `$${price}`}
              </span>
              {price !== 0 && (
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)]">
                  {period}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex-1 mb-12">
          <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--text-tertiary)] mb-6">Capabilities</h4>
          <ul className="space-y-4">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                <span className="text-[13px] text-[var(--text-secondary)] font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={plan.comingSoon ? '#' : "https://chat.taxobuddy.ai/auth/signup"}
          className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] text-center transition-all duration-300 ${plan.comingSoon
            ? 'bg-[var(--bg-surface)] text-[var(--text-disabled)] cursor-not-allowed border border-[var(--border-subtle)]'
            : plan.popular
              ? 'bg-[var(--text-primary)] text-[var(--bg-base)] hover:bg-[var(--primary)]'
              : 'border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          onClick={(e) => plan.comingSoon && e.preventDefault()}
        >
          {plan.ctaText}
        </Link>
      </div>
    </div>
  );
}
