'use client';

import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-12 pb-16 overflow-hidden bg-transparent">

      {/* ── Ambient Background Glow ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-[80%] aspect-square opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        {/* ── Badge ── */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] animate-fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--primary)] font-extrabold font-heading">
            Intelligence meets precision
          </span>
        </div>

        {/* ── Headline ── */}
        <h1
          className="font-heading font-black leading-[1.05] tracking-tight mb-6 text-[var(--text-primary)] animate-fade-up uppercase"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', animationDelay: '100ms' }}
        >
          Complex law into <br className="hidden md:block" />
          <span style={{ color: 'var(--primary)' }}>financial clarity.</span>
        </h1>

        {/* ── Sub-headline ── */}
        <p
          className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)] mb-8 animate-fade-up leading-relaxed font-medium"
          style={{ animationDelay: '200ms' }}
        >
          An AI engine built on 60 years of legal authority. Research faster, draft smarter, and stay compliant with source-verified tax intelligence.
        </p>

        {/* ── Chatbot Input Bar (Restored Layout) ── */}
        <div
          className="w-full max-w-2xl mb-8 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <div className="relative glass rounded-2xl p-1.5 shadow-2xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a tax or legal question..."
              className="w-full px-6 py-4 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none text-sm"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:bg-[var(--primary)]"
            >
              Ask
            </button>
          </div>
          <div className="mt-6 flex gap-6 justify-center">
            {['§10(13A)', 'GST Penalty', 'TDS Rates'].map(tag => (
              <button key={tag} className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors uppercase">{tag}</button>
            ))}
          </div>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <button
            className="px-10 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all duration-300 hover:bg-[var(--primary)] hover:text-black hover:border-[var(--primary)]"
            style={{ border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>

      </div>

      {/* ── Partner Strip ── */}
      <div className="mt-auto pt-20 w-full">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] font-black text-[var(--text-disabled)] mb-6">
          Partnering with leading firms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale invert-[var(--theme-invert)]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-[var(--text-disabled)]" />
              <div className="h-1.5 w-12 bg-[var(--border-strong)] rounded-full" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
