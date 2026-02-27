import React from 'react';
import Link from 'next/link';

const TopBar: React.FC = () => {
  return (
    <aside className="relative z-[60] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="py-2 px-6 text-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-secondary)] whitespace-nowrap overflow-hidden">
        <span className="inline-block animate-marquee md:animate-none">
          Now free for professional research · No credit card required ·
          <Link
            href="/contact"
            className="ml-1 text-[var(--primary)] hover:opacity-80 transition-opacity duration-200"
          >
            Start now →
          </Link>
        </span>
      </div>
    </aside>
  );
};

export default TopBar;
