import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /** Empty for custom domain (dradityamurali.com). Use BASE_PATH for project pages (e.g. /repo-name). */
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
