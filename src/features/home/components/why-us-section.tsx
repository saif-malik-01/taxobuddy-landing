'use client';

import React from 'react';

const icons = {
  authority: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  accuracy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  privacy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  draft: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
};

const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="section bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Large Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Authority & Precision</span>
          <h2
            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Built for professional <br className="hidden md:block" /> legal research.
          </h2>
        </div>

        {/* 4-Item Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {[
            { id: 'authority', title: 'Verified Authority', desc: 'Every response is mapped to primary statutes ensuring zero-hallucination.' },
            { id: 'accuracy', title: 'Time Efficiency', desc: 'Generate precise legal drafts and advisory notes in seconds based on legal context.' },
            { id: 'privacy', title: 'Firm Privacy', desc: 'SOC2 compliant infrastructure. Your queries never train public models.' },
            { id: 'draft', title: 'Neural Search', desc: 'Understands legal terminology across thousands of judgments and provisions.' },
          ].map((item, i) => (
            <div key={item.id} className="flex flex-col items-center text-center animate-fade-up group" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center mb-8 text-[var(--text-tertiary)] group-hover:border-[var(--primary)]/30 group-hover:text-[var(--primary)] transition-all duration-300">
                {icons[item.id as keyof typeof icons]}
              </div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-4">{item.title}</h3>
              <p className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Floating Stat Block */}
        <div className="mt-24 pt-16 border-t border-[var(--border-subtle)] flex justify-center gap-16 md:gap-32 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-1 uppercase tracking-tighter">50% Faster</div>
            <div className="text-[9px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.3em]">Research Speed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-1 uppercase tracking-tighter">0% Failure</div>
            <div className="text-[9px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.3em]">Logic Integrity</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
