'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initialize theme from storage or system preference
    const savedTheme = localStorage.getItem('taxobuddy-theme') as 'dark' | 'light';
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('taxobuddy-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-[var(--bg-base)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-full transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_var(--primary)]/20"
            style={{
              background: 'radial-gradient(circle at 25% 75%, var(--primary) 0%, var(--primary-hover) 100%)'
            }}
          />
          <span className="text-[var(--text-primary)] font-black text-xl tracking-tighter uppercase font-heading">
            Taxo<span className="text-[var(--primary)]">Buddy</span>
          </span>
        </Link>

        {/* Minimalist Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: 'Intelligence', href: '/#features' },
            { label: 'Journal', href: '/blog' },
            { label: 'About', href: '/about' },
            { label: 'Pricing', href: '/pricing' }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action & Toggle */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] transition-all group"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--text-tertiary)] group-hover:text-[var(--primary)]">
                <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--text-tertiary)] group-hover:text-[var(--primary)]">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <Link href="/login" className="hidden md:block text-[10px] font-black uppercase tracking-[0.25em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Log In</Link>
          <Link
            href="/register"
            className="px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
