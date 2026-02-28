'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-base)] border-t border-[var(--border-subtle)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Identity - 4 Columns */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div
                className="w-8 h-8 rounded-full transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_var(--primary)]/20"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, var(--primary) 0%, var(--primary-hover) 100%)'
                }}
              />
              <span className="text-[var(--text-primary)] font-black text-xl tracking-tighter uppercase font-heading">
                Taxo<span className="text-[var(--primary)]">Buddy</span>
              </span>
            </Link>
            <p className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed max-w-sm">
              The intelligent companion for tax and legal professionals. Built with precision, grounded in authority, and delivered at scale.
            </p>
            <div className="flex gap-6">
              {[
                { name: 'Twitter', href: 'https://x.com/TaxoBbuddy' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/taxo-buddy/' },
                { name: 'Instagram', href: 'https://www.instagram.com/taxobuddy/' },
                { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588643215308' }
              ].map(item => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)] hover:text-[var(--primary)] transition-colors uppercase">{item.name}</a>
              ))}
            </div>
          </div>

          {/* Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Links Columns - 2 Columns Each */}
          {[
            {
              title: 'Company',
              links: [
                { label: 'About Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' }
              ]
            },
            {
              title: 'Infrastructure',
              links: [
                { label: 'Access Control', href: '/legal/access-control-policy' },
                { label: 'Data Encryption', href: '/legal/data-encryption-policy' },
                { label: 'Data Retention', href: '/legal/data-retention-disposal-protection-policy' }
              ]
            },
            {
              title: 'Legal & Billing',
              links: [
                { label: 'Privacy Policy', href: '/legal/privacy-policy' },
                { label: 'Refund Policy', href: '/legal/refund-policy' },
                { label: 'Payment Terms', href: '/legal/payment-terms' },
                { label: 'Disclaimer', href: '/legal/disclaimer' },
                { label: 'EULA', href: '/legal/eula' }
              ]
            }
          ].map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 font-heading">{col.title}</h4>
              <nav aria-label={`${col.title} navigation`}>
                <ul className="space-y-3">
                  {col.links.map(item => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-[13px] font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Bar - Ultra Compact */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex justify-center">
          <span className="text-[10px] font-bold text-[var(--text-disabled)] uppercase tracking-widest">
            © {new Date().getFullYear()} TaxoBuddy. All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
