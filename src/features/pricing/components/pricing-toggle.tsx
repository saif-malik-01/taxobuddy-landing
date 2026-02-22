'use client';

import React from 'react';

interface PricingToggleProps {
  isMonthly: boolean;
  onToggle: () => void;
}

export default function PricingToggle({ isMonthly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex justify-center items-center gap-8 mb-4">
      <div
        className="relative p-1.5 flex items-center bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-full cursor-pointer group transition-all"
        onClick={onToggle}
      >
        <div
          className={`absolute h-[calc(100%-12px)] rounded-full transition-all duration-500 ease-out bg-[var(--text-primary)] shadow-2xl ${isMonthly ? 'left-1.5 w-[140px]' : 'left-[145px] w-[140px]'
            }`}
        />

        <button
          className={`relative z-10 w-[140px] py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${isMonthly ? 'text-[var(--bg-base)]' : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
            }`}
        >
          Monthly
        </button>

        <button
          className={`relative z-10 w-[140px] py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${!isMonthly ? 'text-[var(--bg-base)]' : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
            }`}
        >
          Annually
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)]">Save 25%</span>
      </div>
    </div>
  );
}
