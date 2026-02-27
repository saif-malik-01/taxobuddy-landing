import React from 'react';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  fullScreen = false
}) => {
  const containerClass = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-[var(--bg-base)] z-50'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClass}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
        </div>
        <p className="text-[var(--text-secondary)] font-medium uppercase tracking-[0.2em] text-[10px]">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
