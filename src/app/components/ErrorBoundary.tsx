'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: () => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c6b76] via-[#0ca6c2] to-[#46959c] flex items-center justify-center">
          <div className="text-white text-center max-w-md p-8">
            <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
            <p className="mb-6">We&apos;re sorry, but there was an error loading this page. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-[#0c6b76] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
