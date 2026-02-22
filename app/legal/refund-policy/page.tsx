'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const RefundPolicy = () => {
    return (
        <PageLayout>
            <main className="min-h-screen pt-24 pb-32">
                <div className="max-w-4xl mx-auto px-6">

                    {/* Header */}
                    <div className="mb-20 animate-fade-up">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Subscription Services</span>
                        <h1
                            className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 uppercase"
                            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                        >
                            Refund <span className="text-[var(--primary)]">Policy.</span>
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
                                01. Professional Licenses
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                TaxoBuddy provides access to specialized professional intelligence on a subscription basis. Due to the high-value intellectual property and API infrastructure costs involved, all professional licenses are generally non-refundable.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. Cancellation Terms
                            </h2>
                            <div className="glass rounded-2xl p-8 mb-6 border-[var(--primary)]/10">
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                    Users may cancel their subscription at any time. Upon cancellation, access to the platform will continue until the end of the current paid billing cycle. No partial refunds are provided for utilized months.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                03. Exceptional Circumstances
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                Refunds may be considered at the sole discretion of TaxoBuddy in cases of verified technical system failure preventing access for more than 7 consecutive business days.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Requests must be submitted via email within 14 days of the incident.',
                                    'Refunds, if approved, will be processed via the original payment method.',
                                    'Deductions for gateway charges and taxes may apply.'
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

export default RefundPolicy;
