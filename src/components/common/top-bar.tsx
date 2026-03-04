import React from 'react';
import Link from 'next/link';

const TopBar: React.FC = () => {
  return (
    <aside className="relative z-[60] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden">
      <div className="py-2 px-6 text-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-secondary)] whitespace-nowrap">
        <div className="flex animate-marquee md:animate-none space-x-12 w-max md:w-full md:justify-center">
          <span className="flex items-center gap-1">
            Now free for professional research <span className="hidden sm:inline">· No credit card required</span>
            <Link
              href="/contact"
              className="ml-2 text-[var(--primary)] hover:opacity-80 transition-opacity duration-200"
            >
              Start now →
            </Link>
          </span>
          {/* Duplicate for seamless marquee on mobile only */}
          <span className="flex md:hidden items-center gap-1">
            Now free for professional research <span className="hidden sm:inline">· No credit card required</span>
            <Link
              href="/contact"
              className="ml-2 text-[var(--primary)] hover:opacity-80 transition-opacity duration-200"
            >
              Start now →
            </Link>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default TopBar;
