import React from 'react';

const TopBar: React.FC = () => {
  return (
    <aside className="relative z-[60] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="py-2 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
        <span>Now free for professional research · No credit card required ·</span>
        <a
          href="#pricing"
          className="ml-1 text-[var(--primary)] hover:opacity-80 transition-opacity duration-200"
        >
          Start now →
        </a>
      </div>
    </aside>
  );
};

export default TopBar;
