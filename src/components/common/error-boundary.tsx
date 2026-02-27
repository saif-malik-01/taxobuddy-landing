import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-base)]">
          <div className="text-center p-8 max-w-md animate-fade-up">
            <h2 className="text-2xl font-black text-[var(--text-primary)] mb-6 tracking-tight uppercase">
              System Interface <span className="text-[var(--primary)]">Interrupted.</span>
            </h2>
            <p className="text-[var(--text-secondary)] font-medium leading-relaxed mb-8">
              An unexpected error has been detected. Re-initializing the environment may resolve the state.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-base)] font-black uppercase text-[11px] tracking-widest rounded-xl hover:bg-[var(--primary)] transition-all"
            >
              Reload Environment
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
