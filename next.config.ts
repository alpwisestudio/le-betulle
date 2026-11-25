import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // 85 per la foto dell'hero a tutto schermo, 75 per le altre
    qualities: [75, 85],
  },
};

export default nextConfig;
