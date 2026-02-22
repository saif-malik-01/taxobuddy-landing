'use client';

import React from 'react';

const steps = [
  { n: '01', title: 'Ask a Query', body: 'Source-backed answers with direct links to primary legal authority.' },
  { n: '02', title: 'Draft a Response', body: 'Bifurcate issues and generate structured strategic replies.' },
  { n: '03', title: 'Insight Extraction', body: 'Upload any document to surface key issues and hidden patterns.' },
  { n: '04', title: 'Case Library', body: 'All past queries and research threads, organized by matter.' },
  { n: '05', title: 'Word Integration', body: 'Insert research directly into your draft without switching tabs.' },
];

const SecureAccessSection: React.FC = () => {
  return (
    <section id="workflow" className="section bg-transparent border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Header - Unified Design Principle */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Execution Architecture</span>
          <h2
            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            The Research <br className="hidden md:block" /> to Response path.
          </h2>
          <p className="max-w-xl mx-auto text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
            A private, isolated ecosystem built to take you from initial research thread to professional-grade legal drafts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left: Security Card - Balanced with Global Glass Design */}
          <div className="animate-fade-up h-full">
            <div className="glass rounded-[2rem] p-10 h-full relative overflow-hidden group border-[var(--primary)]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/[0.03] blur-3xl pointer-events-none" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6">Data Integrity</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-10 font-medium">
                Every interaction is client-side isolated and SOC2 compliant. Your professional research data stays strictly private.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'End-to-end encryption', desc: 'Secure transit for every query' },
                  { label: 'Isolated environments', desc: 'Client-specific data silos' },
                  { label: 'Audit-ready logs', desc: 'Transparent compliance tracking' }
                ].map(item => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[var(--primary)]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-primary)]">{item.label}</span>
                    </div>
                    <span className="text-[9px] text-[var(--text-tertiary)] font-bold ml-4 uppercase tracking-wider">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Steps Timeline - Micro-detail Alignment */}
          <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute left-[15px] top-6 bottom-6 w-px border-l border-dashed border-[var(--border-strong)]" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-10 group">
                  <div className="relative z-10 w-8 h-8 rounded-lg bg-[var(--bg-base)] border border-[var(--border-strong)] flex items-center justify-center shrink-0 group-hover:border-[var(--primary)]/30 group-hover:bg-[var(--primary)]/5 transition-all duration-300 shadow-sm">
                    <span className="text-[10px] font-black text-[var(--text-disabled)] group-hover:text-[var(--primary)]">{step.n}</span>
                  </div>
                  <div className="pt-1.5">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecureAccessSection;
