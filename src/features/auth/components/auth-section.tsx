'use client';

import React from 'react';
import Link from 'next/link';
import AuthLayout from './auth-layout';
import AuthBanner from './auth-banner';
import { AuthInput, AuthButton } from './auth-components';

interface AuthSectionProps {
  type?: 'login' | 'register';
}

const AuthSection: React.FC<AuthSectionProps> = ({ type = 'login' }) => {
  const isLogin = type === 'login';

  return (
    <AuthLayout banner={<AuthBanner />}>
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-12 group">
          <div
            className="w-8 h-8 rounded-full transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_var(--primary)]/20"
            style={{
              background: 'radial-gradient(circle at 30% 30%, var(--primary) 0%, var(--primary-hover) 100%)'
            }}
          />
          <span className="text-[var(--text-primary)] font-black text-xl tracking-tight uppercase font-heading">TaxoBuddy</span>
        </Link>

        <h1 className="text-3xl md:text-4xl font-black text-[var(--text-primary)] mb-4 tracking-tight">
          {isLogin ? 'Welcome back.' : 'Join the elite.'}
        </h1>
        <p className="text-[var(--text-secondary)] font-medium">
          {isLogin
            ? 'Access your professional research workspace.'
            : 'Precision research and drafting starts here.'}
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {!isLogin && (
          <AuthInput label="Full Name" placeholder="ENTER YOUR NAME" required />
        )}
        <AuthInput label="Work Email" type="email" placeholder="YOU@COMPANY.COM" required />
        <AuthInput label="Password" type="password" placeholder="••••••••" required />

        <div className="pt-4">
          <AuthButton type="submit">
            {isLogin ? 'Sign In' : 'Create Account'}
          </AuthButton>
        </div>
      </form>

      <div className="mt-12 text-center">
        <p className="text-[11px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Link
            href={isLogin ? '/register' : '/login'}
            className="ml-3 text-[var(--primary)] hover:opacity-80 transition-opacity"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default AuthSection;
