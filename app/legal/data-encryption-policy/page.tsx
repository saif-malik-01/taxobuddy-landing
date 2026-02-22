'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const DataEncryptionPolicy = () => {
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
                            Data Encryption <span className="text-[var(--primary)]">Policy.</span>
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
                                01. Encryption Standards
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                TaxoBuddy employs industry-leading encryption standards to ensure that professional research and firm data remain confidential and tamper-proof.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                02. Data in Transit
                            </h2>
                            <div className="glass rounded-2xl p-8 mb-6 border-[var(--primary)]/10">
                                <p className="text-[14px] text-[var(--text-secondary)] font-medium leading-relaxed">
                                    All communication between user browsers and TaxoBuddy servers is encrypted using TLS 1.3 or higher. We enforce HTTP Strict Transport Security (HSTS) to prevent downgrade attacks.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-[var(--primary)]" />
                                03. Data at Rest
                            </h2>
                            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                                Sensitive information, including user profiles and firm-specific research logs, is encrypted at rest using AES-256 (Advanced Encryption Standard).
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Unique encryption keys per firm silo.',
                                    'Automated key rotation managed via AWS KMS.',
                                    'No plaintext storage of professional intellectual property.'
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

export default DataEncryptionPolicy;
