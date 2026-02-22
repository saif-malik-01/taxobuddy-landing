'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const DataRetentionPolicy = () => {
    return (
        <PageLayout>
            <main className="min-h-screen pt-24 pb-32">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Header */}
                    <div className="mb-20 animate-fade-up">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Legal Infrastructure</span>
                        <h1
                            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
                            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                        >
                            Data Retention <br className="hidden md:block" /> & Disposal <span className="text-[var(--primary)]">Policy.</span>
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
                                01. Retention Periods
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                TaxoBuddy retains user information and research data only for as long as necessary to fulfill the professional purposes outlined in our Service Agreement or as required by Indian legal and tax regulations.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. Disposal Protocols
                            </h2>
                            <div className="glass rounded-2xl p-8 mb-6 border-[var(--primary)]/10">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">Secure Wiping</h3>
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                    Upon account termination or data expiration, data is securely wiped from our primary production databases and subsequent backups within 30 days.
                                </p>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">Cryptographic Erasure</h3>
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                    We utilize cryptographic erasure (Crypto-shredding) for sensitive firm silos, ensuring that even if underlying physical storage is recovered, the data is mathematically irretrievable.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                03. Data Protection
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                Redundant storage across multiple isolated availability zones ensures data protection against environmental or hardware failures.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Automated integrity checks every 24 hours.',
                                    'Point-in-time recovery for professional research silos.',
                                    'SOC2 compliant physical security at data centers.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-[var(--primary)] shrink-0" />
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

export default DataRetentionPolicy;
