'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const AccessControlPolicy = () => {
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
                            Access Control <span className="text-[var(--primary)]">Policy.</span>
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
                                01. Principle of Least Privilege
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                TaxoBuddy operates on the Principle of Least Privilege (PoLP). Access to internal systems and user data silos is strictly limited to authorized personnel who require such access to perform their professional duties.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. Authentication Protocols
                            </h2>
                            <div className="glass rounded-2xl p-8 mb-6 border-[var(--primary)]/10">
                                <ul className="space-y-4">
                                    {[
                                        'Multi-Factor Authentication (MFA) required for all administrative access.',
                                        'Automated session timeouts for professional research environments.',
                                        'Strict password complexity requirements and rotation schedules.',
                                        'Hardware-based security keys for critical infrastructure management.'
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
                                03. Audit & Monitoring
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                All access attempts, both successful and failed, are logged in an immutable audit trail. These logs are reviewed periodically and monitored in real-time for suspicious activity patterns.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
        </PageLayout>
    );
};

export default AccessControlPolicy;
