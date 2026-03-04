'use client';

import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      window.location.href = `https://chat.taxobuddy.ai/chat?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex flex-col items-center justify-center py-10 md:py-16 overflow-hidden bg-transparent">

      {/* ── Ambient Background Glow ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-[80%] aspect-square opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center w-full">

        {/* ── Badge ── */}
        <div
          className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] animate-fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--primary)] font-extrabold font-heading">
            Intelligence meets precision
          </span>
        </div>

        {/* ── Headline ── */}
        <h1
          className="font-heading font-black leading-[1.05] tracking-tighter mb-2 text-[var(--text-primary)] animate-fade-up uppercase"
          style={{ fontSize: 'clamp(1.5rem, 5.5vw, 3.75rem)', animationDelay: '100ms' }}
        >
          complex law (gst) into <br className="hidden md:block" />
          <span style={{ color: 'var(--primary)' }}>clarity with precision</span>
        </h1>

        {/* ── Sub-headline ── */}
        <p
          className="max-w-xl text-[11px] md:text-[14px] text-[var(--text-secondary)] mb-4 animate-fade-up leading-relaxed font-medium"
          style={{ animationDelay: '200ms' }}
        >
          An AI engine built on 60 years of legal authority. Research faster, draft smarter, and stay compliant with source-verified tax intelligence.
        </p>

        {/* ── Chatbot Input Bar (Restored Layout) ── */}
        <div
          className="w-full max-w-2xl mb-6 animate-fade-up px-2"
          style={{ animationDelay: '300ms' }}
        >
          <form
            onSubmit={handleSubmit}
            className="relative glass rounded-2xl p-1.5 shadow-2xl"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a tax or legal question..."
              className="w-full px-5 pr-20 py-3 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none text-[13px] md:text-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] text-[9px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:bg-[var(--primary)]"
            >
              Ask
            </button>
          </form>
          <div className="mt-3.5 flex gap-4 md:gap-6 justify-center flex-wrap">
            {['Research', 'Draft Response', 'Summarization'].map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setQuery(tag);
                  window.location.href = `https://chat.taxobuddy.ai/chat?q=${encodeURIComponent(tag)}`;
                }}
                className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors uppercase"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <a
            href="https://chat.taxobuddy.ai/auth/signup"
            className="px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all duration-300 hover:bg-[var(--primary)] hover:text-black hover:border-[var(--primary)]"
            style={{ border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}
          >
            Get Started
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;
