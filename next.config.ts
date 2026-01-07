import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental CSS optimization
  experimental: {
    optimizeCss: true,
  },
  // Compress responses
  compress: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Reduce JS bundle by excluding unused packages from client bundle
  modularizeImports: {
    // If you add lodash or similar later, this helps tree-shake
  },
};

export default nextConfig;

