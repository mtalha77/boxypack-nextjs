import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Reduce hydration mismatches
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei'],
    // Fix font loading issues
    optimizeCss: false, // Disable CSS optimization to fix critters error
  },
  // Handle static assets properly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Improve hydration performance
  swcMinify: true,
  // Font optimization
  optimizeFonts: true,
  // Handle font loading errors gracefully
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Disable CSS optimization that requires critters
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
