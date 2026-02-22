'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const PrivacyPolicyPage = () => {
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
                            Privacy <span className="text-[var(--primary)]">Policy.</span>
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
                                01. Introduction
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                TaxoBuddy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our professional tax intelligence services.
                            </p>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                As a platform built for legal and tax professionals, we understand the critical nature of data privacy. Our systems are designed with isolation and security at their core.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. Data Collection
                            </h2>
                            <div className="glass rounded-2xl p-8 mb-6 border-[var(--primary)]/10">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">Professional Information</h3>
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                    We collect information that you provide directly to us when you register for an account, such as your name, professional email address, firm name, and professional credentials.
                                </p>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">Query Data</h3>
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                    We collect information related to your research queries to provide customized intelligence. Note that query data is encrypted and isolated per firm.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                03. Data Security
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                We implement SOC2-compliant security measures, including end-to-end encryption for all query traffic and client-side isolation of professional data silos.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'AES-256 encryption at rest and in transit.',
                                    'Bi-annual independent security audits.',
                                    'Strict access control and internal logging.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                                        <span className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                04. Contact Information
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                If you have questions or concerns about this Privacy Policy, please contact our Data Protection Officer at <span className="text-[var(--primary)]">legal@taxobuddy.ai</span>.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
        </PageLayout>
    );
};

export default PrivacyPolicyPage;
