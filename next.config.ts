import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || "/dradityamurli",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
