import React from 'react';

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  opacity?: number;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className = '',
  opacity = 100
}) => {
  // Your exact gradient specification
  const gradientStyle = {
    background: 'linear-gradient(45deg, rgba(1, 63, 74, 1) 0%, rgba(128, 223, 242, 1) 100%, rgba(128, 223, 242, 1) 30%, rgba(128, 223, 242, 1) 10%)',
    opacity: opacity < 100 ? opacity / 100 : 1
  };

  return (
    <div className={className} style={gradientStyle}>
      {children}
    </div>
  );
};

export default GradientBackground;
