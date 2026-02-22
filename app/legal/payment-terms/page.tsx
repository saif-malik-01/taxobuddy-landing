'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const PaymentTerms = () => {
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
                            Payment <span className="text-[var(--primary)]">Terms.</span>
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
                                01. Billing Cycles
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                TaxoBuddy offers annual subscription plans. All payments are due in advance of the service period. Prices listed on the website are exclusive of applicable taxes (GST), which will be calculated at checkout.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. Payment Processing
                            </h2>
                            <div className="glass rounded-2xl p-8 mb-6 border-[var(--primary)]/10">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">Secure Gateways</h3>
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                    Payments are processed via authorized secure gateways (Razorpay). TaxoBuddy does not store full credit card or bank account details on our primary servers.
                                </p>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">Automated Renewals</h3>
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                    To ensure uninterrupted access to professional research, subscriptions may auto-renew at the end of the term. Users will receive notification 7 days prior to any renewal charge.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                03. Late Payments & Defaults
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                Failure to complete a renewal payment will result in immediate suspension of the professional research dashboard until the account is settled.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Invoices will be generated and issued electronically.',
                                    'Any payment disputes must be raised within 15 days of the invoice date.',
                                    'We reserve the right to adjust pricing with 30 days notice.'
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

export default PaymentTerms;
