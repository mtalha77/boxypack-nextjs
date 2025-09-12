import React from 'react';

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  fromColor?: string;
  toColor?: string;
  direction?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
  opacity?: number;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className = '',
  fromColor = '#2d1c0e',
  toColor = '#a8f0ff',
  direction = 'to-r',
  opacity = 100
}) => {
  // Create a custom gradient with more control over the color stops
  const gradientStyle = {
    background: `linear-gradient(${direction === 'to-r' ? '90deg' : 
      direction === 'to-l' ? '180deg' :
      direction === 'to-t' ? '0deg' :
      direction === 'to-b' ? '180deg' :
      direction === 'to-tr' ? '45deg' :
      direction === 'to-tl' ? '225deg' :
      direction === 'to-br' ? '135deg' :
      '225deg'}, ${fromColor} 0%, ${fromColor} 50%, ${toColor} 100%)`,
    opacity: opacity < 100 ? opacity / 100 : 1
  };

  return (
    <div className={className} style={gradientStyle}>
      {children}
    </div>
  );
};

export default GradientBackground;
