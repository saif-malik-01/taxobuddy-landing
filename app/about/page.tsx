'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';
import Link from 'next/link';

/**
 * Global Design: The Archive Illustration
 * Visualizing 60 years of legal data depth.
 */
const ArchiveVisual = () => (
  <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-radial from-[var(--primary)]/10 to-transparent blur-3xl opacity-50" />
    <div className="relative z-10 w-full max-w-[280px] space-y-4">
      {[0.4, 0.7, 1.0, 0.7, 0.4].map((op, i) => (
        <div
          key={i}
          className="h-12 w-full glass rounded-xl border-[var(--primary)]/10 flex items-center px-6 gap-4 animate-fade-up"
          style={{
            animationDelay: `${i * 100}ms`,
            opacity: op,
            transform: `perspective(1000px) rotateX(20deg) translateY(${i * -10}px)`
          }}
        >
          <div className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]" />
          <div className="h-1.5 flex-1 bg-[var(--text-disabled)]/20 rounded-full overflow-hidden">
            <div className="h-full bg-[var(--primary)]/30 w-2/3 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Global Design: Neural Mapping Illustration
 * Visualizing the connection between data points.
 */
const NeuralMappingVisual = () => (
  <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-radial from-[var(--primary)]/5 to-transparent blur-2xl opacity-30" />
    <svg className="w-full h-full max-w-[300px]" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Paths */}
      <path d="M40 100 Q100 40 160 100" stroke="var(--primary)" strokeWidth="0.5" fill="none" strokeDasharray="4 4" className="animate-pulse" />
      <path d="M40 100 Q100 160 160 100" stroke="var(--primary)" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
      <path d="M100 40 L100 160" stroke="var(--primary)" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />

      {/* Nodes */}
      <circle cx="100" cy="100" r="12" fill="var(--bg-surface)" stroke="var(--primary)" strokeWidth="1" className="animate-pulse" />
      <circle cx="40" cy="100" r="6" fill="var(--primary)" />
      <circle cx="160" cy="100" r="6" fill="var(--primary)" />
      <circle cx="100" cy="40" r="6" fill="var(--primary)" />
      <circle cx="100" cy="160" r="6" fill="var(--primary)" />
    </svg>
  </div>
);

const AboutPage = () => {
  return (
    <PageLayout>
      <main className="min-h-screen bg-[var(--bg-base)] transition-colors duration-500">

        {/* ── Section 1: Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-[var(--border-subtle)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent)] opacity-[0.03] blur-[120px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <div className="max-w-4xl animate-fade-up">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-8 block font-heading">The Authority</span>
              <h1
                className="font-heading font-black tracking-tight leading-[0.9] text-[var(--text-primary)] mb-8 uppercase"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)' }}
              >
                Intelligent <br className="hidden md:block" /> <span className="text-[var(--primary)]">Legal Heritage.</span>
              </h1>
              <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-2xl mb-12 mx-auto">
                Digitizing 60 years of complex law into a high-performance neural ecosystem. Designed for firms that prioritize accuracy, speed, and privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-base)] text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[var(--primary)] transition-all">
                  Partner With Us
                </Link>
                <div className="flex items-center gap-4 px-6 border border-[var(--border-subtle)] rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">Trusted by 500+ Firms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Narrative Deep Dive with Illustrations ── */}
        <section className="py-40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">

            {/* Story Part 1: The Archive */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-40">
              <div className="relative animate-fade-up order-2 lg:order-1">
                <div className="glass rounded-[3rem] p-4 relative overflow-hidden border-[var(--primary)]/5">
                  <ArchiveVisual />
                </div>
              </div>
              <div className="space-y-12 animate-fade-up order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-[var(--primary)]" />
                  <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]">The Problem</h2>
                </div>
                <h3 className="text-4xl font-black text-[var(--text-primary)] tracking-tight leading-tight uppercase">
                  The burden of <br /><span className="text-[var(--primary)]">60 years of data.</span>
                </h3>
                <div className="space-y-6 text-[var(--text-secondary)] font-medium leading-relaxed">
                  <p>
                    For decades, professional research was synonymous with fragmentation. Thousands of pages of circulars, millions of judgment words, and the constant risk of relying on an outdated sub-clause.
                  </p>
                  <p>
                    We realized that professional expertise was being wasted on the logistics of search rather than the strategy of law. TaxoBuddy was born to solve this information bottleneck.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Part 2: Neural Mapping */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="space-y-12 animate-fade-up">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-[var(--primary)]" />
                  <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]">The Solution</h2>
                </div>
                <h3 className="text-4xl font-black text-[var(--text-primary)] tracking-tight leading-tight uppercase">
                  From raw source to <br /><span className="text-[var(--primary)]">Neural Insights.</span>
                </h3>
                <div className="space-y-6 text-[var(--text-secondary)] font-medium leading-relaxed">
                  <p>
                    Our engine doesn't just "index" keywords. It maps the semantic relationship between a 1970 tribunal ruling and a 2024 amendment. It understands legal hierarchy and context.
                  </p>
                  <p>
                    By visualizing 60 years of authority as a connected graph, we provide professionals with a single, source-verified point of truth in under 2 seconds.
                  </p>
                </div>
              </div>
              <div className="relative animate-fade-up">
                <div className="glass rounded-[3rem] p-4 relative overflow-hidden border-[var(--primary)]/5">
                  <NeuralMappingVisual />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 3: High-Impact Metric Grid ── */}
        <section className="py-32 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
              {[
                { label: 'Primary Docs', val: '1.2M+' },
                { label: 'Years of Law', val: '60+' },
                { label: 'Query Speed', val: '< 1.8s' },
                { label: 'Accuracy', val: '99.9%' }
              ].map((m, i) => (
                <div key={m.label} className="text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6">{m.label}</div>
                  <div className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter uppercase">{m.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Firm Infrastructure CTA ── */}
        <section className="py-40 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center animate-fade-up">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)] mb-10">Firm-Wide Deployment</h2>
            <p className="text-3xl md:text-4xl font-black text-[var(--text-primary)] tracking-tight uppercase leading-[1.1] mb-12">
              Empower your entire legal team with <br className="hidden md:block" /> absolute clarity and speed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-[var(--text-primary)] text-[var(--bg-base)] text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[var(--primary)] transition-all">
                Book Executive Demo
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-12 py-5 border border-[var(--border-strong)] text-[var(--text-primary)] text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[var(--bg-surface)] transition-all">
                Contact Sales
              </Link>
            </div>
            <div className="mt-16 text-[9px] font-bold text-[var(--text-disabled)] uppercase tracking-[0.3em] flex items-center justify-center gap-8">
              <span>SOC2 TYPE II</span>
              <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
              <span>STARTUP INDIA</span>
              <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
              <span>GDPR READY</span>
            </div>
          </div>
        </section>

      </main>
    </PageLayout>
  );
};

export default AboutPage;