'use client';

import React from 'react';

/**
 * AuthBanner: Brand immersive area with ambient glow and chat simulation.
 */
const AuthBanner: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Ambient Glow */}
            <div
                className="absolute w-[150%] aspect-square opacity-20"
                style={{
                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
            />

            {/* Simulated Chat Card */}
            <div className="glass rounded-[2rem] p-10 w-full max-w-sm shadow-2xl relative z-10">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]" />
                        <div className="h-2 w-24 bg-[var(--text-primary)]/10 rounded-full" />
                    </div>

                    <div className="space-y-4">
                        <div className="h-3 w-full bg-[var(--text-primary)]/5 rounded-full" />
                        <div className="h-3 w-4/5 bg-[var(--text-primary)]/5 rounded-full" />
                        <div className="h-3 w-2/3 bg-[var(--text-primary)]/5 rounded-full" />
                    </div>

                    <div className="pt-8 border-t border-[var(--border-subtle)]">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-4 bg-[var(--primary)] animate-pulse" />
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]/60 transition-all group-hover:text-[var(--primary)]">Ready to help</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthBanner;
