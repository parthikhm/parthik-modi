import React, { Suspense, lazy } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"></div></div>
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazySection;