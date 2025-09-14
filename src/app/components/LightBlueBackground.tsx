'use client';

import React from 'react';

interface LightBlueBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const LightBlueBackground: React.FC<LightBlueBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <section 
      className={`py-24 relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(12, 166, 194, 0.1) 0%, rgba(12, 166, 194, 0.08) 50%, rgba(12, 166, 194, 0.05) 100%)',
        backgroundColor: '#f8fafc' // fallback background
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ca6c2' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default LightBlueBackground;
