'use client';

import React, { useState } from 'react';
import pricingData from '../../../data/pricing.json';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const { faqs }: { faqs: FAQ[] } = pricingData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-40 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/[0.02] blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Support</span>
          <h2 className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Expert <br /><span className="text-[var(--primary)]">Insights.</span>
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our professional licenses, data authority, and technical infrastructure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass rounded-3xl transition-all duration-500 overflow-hidden border-[var(--primary)]/${openIndex === index ? '10' : '0'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-8 flex justify-between items-center group"
              >
                <span className={`text-[15px] font-black uppercase tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-[var(--primary)]' : 'text-[var(--text-primary)] group-hover:text-[var(--primary)]'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'rotate-180 bg-[var(--primary)] border-[var(--primary)]' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openIndex === index ? "black" : "currentColor"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 pt-2">
                  <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed max-w-2xl border-l-[3px] border-[var(--primary)]/20 pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
