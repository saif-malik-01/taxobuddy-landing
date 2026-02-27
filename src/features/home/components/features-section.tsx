'use client';

import React from 'react';

/**
 * Global Design: Research Illustration
 * Big, clean, and schematic within a glass container.
 */
const ResearchVisual = () => (
  <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-radial from-[var(--primary)]/10 to-transparent blur-3xl opacity-50" />

    <div className="relative z-10 w-full flex items-center justify-around px-8">
      {/* Input Node */}
      <div className="w-16 h-16 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] flex items-center justify-center shadow-lg">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]" />
      </div>

      {/* Flow Path */}
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="w-full h-px bg-gradient-to-r from-[var(--border-default)] via-[var(--primary)]/30 to-[var(--border-default)] border-dashed border-t" />
        <div className="text-[7px] font-black uppercase tracking-[0.3em] text-[var(--text-disabled)] animate-pulse">Neural Mapping</div>
      </div>

      {/* Output Node */}
      <div className="w-20 h-24 rounded-2xl glass border-[var(--primary)]/20 shadow-2xl flex flex-col p-4 gap-3 rotate-3 group-hover:rotate-0 transition-transform duration-700">
        <div className="w-full h-1 bg-[var(--primary)] rounded-full" />
        <div className="space-y-1.5">
          <div className="h-1 w-full bg-[var(--text-disabled)] opacity-30 rounded-full" />
          <div className="h-1 w-2/3 bg-[var(--text-disabled)] opacity-30 rounded-full" />
        </div>
        <div className="mt-auto flex justify-end">
          <div className="w-6 h-6 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Global Design: Drafting Illustration
 * Big, clean, and schematic within a glass container.
 */
const DraftingVisual = () => (
  <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-radial from-[var(--text-primary)]/5 to-transparent blur-3xl opacity-30" />

    <div className="relative z-10 w-full flex items-center justify-center gap-10">
      {/* Notice Slab */}
      <div className="w-24 h-32 rounded-xl border border-[var(--border-strong)] bg-black/5 p-4 flex flex-col gap-2.5 shadow-xl -skew-y-3 group-hover:skew-y-0 transition-transform duration-700">
        {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-0.5 w-full bg-[var(--bg-overlay)] rounded-full" />)}
        <div className="absolute top-0 right-0 p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400/30" />
        </div>
      </div>

      {/* Transform Icon */}
      <div className="w-12 h-12 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 flex items-center justify-center animate-pulse">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </div>

      {/* Draft Slab */}
      <div className="w-24 h-32 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-4 flex flex-col gap-2.5 shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-700">
        {[1, 2, 3].map(i => <div key={i} className="h-1 w-full bg-[var(--primary)]/20 rounded-full" />)}
        <div className="mt-auto w-full h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center shadow-lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section bg-transparent border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Header - Perfectly aligned with WhyUs and SecureAccess */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">The Engine</span>
          <h2
            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Intelligence meets <br className="hidden md:block" /> legal precision.
          </h2>
          <p className="max-w-xl mx-auto text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
            We&apos;ve automated the core research and drafting workflows, mapping 60 years of legal authority into a high-performance neural system.
          </p>
        </div>

        {/* Feature Cards Grid - Global "Glass Card" Aesthetic */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1: Research */}
          <div className="glass rounded-[2.5rem] p-4 flex flex-col group animate-fade-up">
            {/* Schematic Visual Area */}
            <div className="w-full bg-[var(--bg-surface)]/50 rounded-[2rem] overflow-hidden">
              <ResearchVisual />
            </div>

            {/* Content Area */}
            <div className="p-8 pb-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[var(--primary)]" />
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)]">Research Intelligence</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                Query decades of tax legislation with sub-second latency. Verified by the country&apos;s most authoritative primary source index.
              </p>
              <div className="flex flex-wrap gap-2">
                {['1M+ Docs', '99.8% ACC', 'Citations'].map(tag => (
                  <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-[var(--text-tertiary)] bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Drafting */}
          <div className="glass rounded-[2.5rem] p-4 flex flex-col group animate-fade-up" style={{ animationDelay: '100ms' }}>
            {/* Schematic Visual Area */}
            <div className="w-full bg-[var(--bg-surface)]/50 rounded-[2rem] overflow-hidden">
              <DraftingVisual />
            </div>

            {/* Content Area */}
            <div className="p-8 pb-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[var(--primary)]" />
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)]">Response Strategist</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                Transform complex notices into precise legal drafts. Automatically bifurcate issues and cite relevant rulings.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Auto-Draft', 'Issue Mapping', 'SOC2'].map(tag => (
                  <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-[var(--text-tertiary)] bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
