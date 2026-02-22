'use client';

import React from 'react';
import Header from './header';
import Footer from './footer';
import TopBar from '../common/top-bar';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  showTopBar?: boolean;
  className?: string;
}

/**
 * Main page layout component with header, footer, and optional top bar
 */
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showTopBar = true,
  className = ''
}) => {
  return (
    <div className={`antialiased bg-body text-body font-body ${className}`}>
      {showTopBar && <TopBar />}
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
