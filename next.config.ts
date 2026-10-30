import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Situs statis: hasil build ada di folder out/ (sesuai CLAUDE.md).
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
