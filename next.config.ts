import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer modern compressed formats when the browser supports them
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    // Avoid generating oversized variants for full-bleed photos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    // Brand photos rarely change — cache optimized versions longer
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
