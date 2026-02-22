'use client';

import React from 'react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

/**
 * AuthInput: Standardized glassmorphism data entry field.
 */
export const AuthInput: React.FC<AuthInputProps> = ({ label, ...props }) => {
    return (
        <div className="space-y-4 w-full">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)] ml-1">
                {label}
            </label>
            <input
                {...props}
                className="w-full bg-[var(--bg-surface)] backdrop-blur-xl border border-[var(--border-subtle)] rounded-xl px-5 py-4 text-[13px] text-[var(--text-primary)] placeholder-[var(--text-disabled)] outline-none transition-all duration-300 focus:border-[var(--primary)]/30 focus:ring-4 focus:ring-[var(--primary)]/5"
            />
        </div>
    );
};

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

/**
 * AuthButton: High-contrast primary conversion element.
 */
export const AuthButton: React.FC<AuthButtonProps> = ({ children, loading, ...props }) => {
    return (
        <button
            {...props}
            disabled={loading || props.disabled}
            className="w-full bg-[var(--text-primary)] text-[var(--bg-base)] text-[11px] font-black uppercase tracking-[0.2em] py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-black/5 disabled:opacity-50 flex items-center justify-center gap-3 hover:bg-[var(--primary)]"
        >
            {loading && <div className="w-4 h-4 border-2 border-[var(--bg-base)]/20 border-t-[var(--bg-base)] rounded-full animate-spin" />}
            {children}
        </button>
    );
};
