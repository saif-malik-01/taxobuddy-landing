'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const DisclaimerPage = () => {
    return (
        <PageLayout>
            <main className="min-h-screen pt-24 pb-32">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Header - Global Design Principle */}
                    <div className="mb-20 animate-fade-up">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Legal</span>
                        <h1
                            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
                        >
                            Legal <span className="text-[var(--primary)]">Disclaimer.</span>
                        </h1>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">
                            <span>Last Updated: February 22, 2026</span>
                            <span className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
                            <span>Effective: March 1, 2026</span>
                        </div>
                    </div>

                    {/* Content Area - Premium Minimalist Typography */}
                    <article className="prose prose-invert max-w-none animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                01. No Professional Advice
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                The information provided by TaxoBuddy on our website and through our intelligence engine is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
                            </p>
                            <div className="glass rounded-2xl p-8 mb-6 border-red-500/10">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-4 italic">Critical Notice</h3>
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                    TaxoBuddy is an artificial intelligence research platform. It does not provide legal, tax, or accounting advice. Professional practitioners should always conduct independent verification of laws, regulations, and case citations before taking formal action.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. External Links
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                Our platform provides direct links to primary legal sources (statutes, judgments, circulars). While we index these sources for your convenience, we do not warrant the continuous availability or absolute accuracy of third-party government repositories.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                03. Limitation of Liability
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                In no event shall TaxoBuddy Systems be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our professional intelligence services.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'User accepts full liability for professional work product.',
                                    'No liability for loss of data or business interruption.',
                                    'No liability for external legal software integrations.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                                        <span className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </article>
                </div>
            </main>
        </PageLayout>
    );
};

export default DisclaimerPage;
