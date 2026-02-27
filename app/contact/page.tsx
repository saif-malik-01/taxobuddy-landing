'use client';

import React from 'react';
import PageLayout from '@/components/layout/page-layout';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const mailtoUrl = `mailto:info@taxobuddy.ai?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('From: ' + name + ' <' + email + '>\n\n' + message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <PageLayout>
      <main className="min-h-screen pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-3xl mb-24 animate-fade-up">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">Connect</span>
            <h1
              className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-8 uppercase"
              style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
            >
              Get in <span className="text-[var(--primary)]">Touch.</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-2xl">
              Have a technical query, interested in a firm-wide demo, or need help with your subscription? Our professional support team is ready to assist.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-16 animate-fade-up">
              <div className="space-y-12">
                <div className="group">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-tertiary)] mb-6 transition-colors group-hover:text-[var(--primary)]">Direct Email</h3>
                  <a href="mailto:info@taxobuddy.ai" className="text-2xl font-black text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors tracking-tight">
                    info@taxobuddy.ai
                  </a>
                </div>

                <div className="group">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-tertiary)] mb-6 transition-colors group-hover:text-[var(--primary)]">Sales & Partnerships</h3>
                  <a href="mailto:info@taxobuddy.ai" className="text-2xl font-black text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors tracking-tight">
                    info@taxobuddy.ai
                  </a>
                </div>

                <div className="group">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-tertiary)] mb-6 transition-colors group-hover:text-[var(--primary)]">Headquarters</h3>
                  <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed max-w-xs">
                    Astrazure Eventure Private Limited <br />
                    C-9, Sushant Lok-1 <br />
                    Sector -43, Gurgaon - 122002 <br />
                    India
                  </p>
                </div>
              </div>

              <div className="pt-16 border-t border-[var(--border-subtle)] space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">Average Response: 2 Hours</span>
                </div>
                <p className="text-[12px] text-[var(--text-tertiary)] font-medium uppercase tracking-wider">Mon - Fri • 9:00 AM - 7:00 PM IST</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="glass rounded-[2.5rem] p-8 md:p-12 border-[var(--primary)]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/[0.02] blur-[100px] pointer-events-none" />

                <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)] ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl px-6 py-4 outline-none focus:border-[var(--primary)]/50 transition-all text-sm text-[var(--text-primary)]"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)] ml-1">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@firm.com"
                        className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl px-6 py-4 outline-none focus:border-[var(--primary)]/50 transition-all text-sm text-[var(--text-primary)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)] ml-1">Subject</label>
                    <select
                      name="subject"
                      required
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl px-6 py-4 outline-none focus:border-[var(--primary)]/50 transition-all text-sm text-[var(--text-primary)] appearance-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Sales & Demo">Sales & Demo</option>
                      <option value="Billing Question">Billing Question</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)] ml-1">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="How can we help you today?"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl px-6 py-4 outline-none focus:border-[var(--primary)]/50 transition-all text-sm text-[var(--text-primary)] resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[var(--text-primary)] text-[var(--bg-base)] py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-black/20 hover:bg-[var(--primary)]">
                    Initialize Connection
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </main>
    </PageLayout>
  );
};

export default ContactPage;