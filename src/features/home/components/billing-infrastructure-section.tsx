'use client';

import React from 'react';

/**
 * Global Metric Item
 * Refined and scaled to align with the rest of the page's design principles.
 */
const MetricItem = ({ label, val, delay }: { label: string; val: string; delay: string }) => (
  <div className="flex flex-col items-center group animate-fade-up" style={{ animationDelay: delay }}>
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block transition-transform group-hover:scale-105">
      {label}
    </span>
    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[var(--text-primary)] tracking-tight uppercase font-heading mb-4 leading-none">
      {val}
    </div>
    <div className="w-6 h-px bg-[var(--border-strong)] group-hover:w-12 group-hover:bg-[var(--primary)] transition-all duration-500" />
  </div>
);

const BillingInfrastructureSection: React.FC = () => {
  return (
    <section id="authority" className="section bg-transparent border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header - Sized to match WhyUs and Features */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Ecosystem</span>
          <h2
            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
            style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)' }}
          >
            Built on <span className="text-[var(--primary)]">Authority.</span>
          </h2>
        </div>

        {/* High-Impact Metric Strip - Refined Sizing */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-20 border-b border-[var(--border-subtle)] pb-16">
          <MetricItem label="Authority" val="60+ YRS" delay="0ms" />
          <MetricItem label="Indexed" val="1M+ Docs" delay="100ms" />
          <MetricItem label="Latency" val="< 2.5S" delay="200ms" />
          <MetricItem label="Verified" val="100%" delay="300ms" />
        </div>

        {/* Final CTA Card - Scaled for Better Vertical Rhythm */}
        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
          <div className="glass rounded-[2rem] p-10 md:p-16 relative overflow-hidden text-center group">
            {/* Background Glow Detail */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-[var(--primary)]/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--primary)]">Intelligence meets professional research</span>
              </div>

              <h3 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-[var(--text-primary)] tracking-tight uppercase leading-none mb-8">
                Ready to scale <br /> your <span className="text-[var(--primary)]">expertise?</span>
              </h3>

              <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed mb-10 max-w-sm mx-auto">
                Join the elite circle of firms using TaxoBuddy to stay ahead of compliance. Get professional access today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://chat.taxobuddy.ai/auth/signup"
                  className="px-8 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] shadow-2xl shadow-black/10 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BillingInfrastructureSection;
