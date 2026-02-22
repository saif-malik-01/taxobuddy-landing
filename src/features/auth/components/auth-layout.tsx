'use client';

import React from 'react';

/**
 * AuthLayout: Enforces a symmetrical 2-column split on desktop.
 * Banner (Left) + Form (Right)
 */
const AuthLayout: React.FC<{ children: React.ReactNode; banner: React.ReactNode }> = ({ children, banner }) => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col lg:flex-row">
            {/* Banner Section (Left) */}
            <div className="hidden lg:flex w-1/2 relative bg-[#121212] overflow-hidden items-center justify-center p-24">
                {banner}
            </div>

            {/* Form Section (Right) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-24 animate-auth-fade">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
