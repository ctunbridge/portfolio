import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Wrap with bundle analyzer if ANALYZE env var is set
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config: NextConfig) => config;

export default withBundleAnalyzer(nextConfig);
