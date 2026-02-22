'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const EULA = () => {
    return (
        <PageLayout>
            <main className="min-h-screen pt-24 pb-32">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Header */}
                    <div className="mb-20 animate-fade-up">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Software Agreement</span>
                        <h1
                            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
                            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                        >
                            End User <br className="hidden md:block" /> License <span className="text-[var(--primary)]">Agreement.</span>
                        </h1>
                        <div className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">
                            Last Updated: February 22, 2026
                        </div>
                    </div>

                    {/* Content */}
                    <article className="prose prose-invert max-w-none animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                01. Grant of License
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                Subject to the terms of this Agreement, TaxoBuddy grants you a limited, non-exclusive, non-transferable, revocable license to access and use our proprietary tax intelligence software for your internal professional research purposes.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. Usage Restrictions
                            </h2>
                            <div className="glass rounded-2xl p-8 mb-6 border-[var(--primary)]/10">
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                    This license is for professional use only. You shall not:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Sublicense, lease, or rent access to the platform to third parties.',
                                        'Use automated crawlers or scripts to scrape legal data points.',
                                        'Attempt to reverse engineer the neural mapping and AI logic.',
                                        'Share account credentials across multiple firms or individuals.'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1 h-1 rounded-full bg-[var(--primary)] shrink-0" />
                                            <span className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                03. Proprietary Rights
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                The software, including its user interface, algorithms, and 60-year legal source indexing, remains the sole property of TaxoBuddy. No ownership rights are transferred to the user under this license.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
        </PageLayout>
    );
};

export default EULA;
