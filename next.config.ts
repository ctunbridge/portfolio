import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 64, 96, 256],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/analytics/:path*',
        destination: '/_vercel/insights/:path*',
      },
    ];
  },
};

// Wrap with bundle analyzer if ANALYZE env var is set
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config: NextConfig) => config;

export default withBundleAnalyzer(nextConfig);
