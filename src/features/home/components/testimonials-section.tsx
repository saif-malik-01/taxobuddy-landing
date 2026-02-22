'use client';

import React from 'react';

const plans = [
  { name: 'Income Tax', price: '₹49,500', queries: 'Unlimited', citations: '350', popular: false },
  { name: 'GST Intelligence', price: '₹49,500', queries: 'Unlimited', citations: '350', popular: true },
  { name: 'Professional Combo', price: '₹84,500', queries: 'Unlimited', citations: '700', popular: false },
];

const faqs = [
  { q: 'What is Taxobuddy?', a: 'An AI-driven research platform built on 60+ years of authoritative Indian legal content.' },
  { q: 'Does it hallucinate?', a: 'No. Every response is grounded in primary legal sources with direct citation links.' },
  { q: 'Data Privacy?', a: 'Every query is encrypted and client-side isolated. We don\'t share professional data.' },
  { q: 'Integration?', a: 'Supports MS Word for direct drafting and case law research without switching tabs.' },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="pricing" className="section bg-transparent border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Header - Unified Design Principle */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Membership</span>
          <h2
            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Select your <br className="hidden md:block" /> research focus.
          </h2>
          <p className="max-w-xl mx-auto text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
            Choose the plan that fits your practice. All memberships include our core neural engine and primary source index.
          </p>
        </div>

        {/* Pricing Cards Grid - Global Glass Design */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass rounded-[2rem] p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-[var(--bg-surface)] group ${plan.popular ? 'border-[var(--primary)]/30 ring-1 ring-[var(--primary)]/10' : ''}`}
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--text-tertiary)] mb-10">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-10 transition-transform group-hover:scale-105 duration-500">
                <span className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter">{plan.price}</span>
                <span className="text-[10px] text-[var(--text-disabled)] font-black uppercase tracking-widest ml-1">/ Year</span>
              </div>

              <div className="space-y-4 mb-12 w-full">
                {[
                  { l: 'Queries', v: plan.queries },
                  { l: 'Citations', v: plan.citations },
                  { l: 'Access', v: 'Full' }
                ].map(feat => (
                  <div key={feat.l} className="flex justify-between items-center pb-4 border-b border-[var(--border-subtle)]">
                    <span className="text-[10px] uppercase font-bold text-[var(--text-tertiary)] tracking-wider">{feat.l}</span>
                    <span className="text-sm font-black text-[var(--text-primary)]">{feat.v}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${plan.popular ? 'bg-[var(--primary)] text-black shadow-2xl shadow-[var(--primary)]/10 hover:scale-[1.02]' : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-overlay)] hover:border-[var(--border-default)]'}`}
              >
                Register Now
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Area - Refined with Global Pattern */}
        <div className="animate-fade-up pt-24 border-t border-[var(--border-subtle)]" style={{ animationDelay: '200ms' }}>
          <h3 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-tertiary)] mb-16 font-heading">Intelligence FAQ</h3>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="flex flex-col items-start gap-5 group">
                <div className="w-8 h-1 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] group-hover:w-14 transition-all duration-500 rounded-full" />
                <h4 className="text-[11px] font-black uppercase tracking-widest text-[var(--text-primary)] leading-relaxed">{faq.q}</h4>
                <p className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
