import type { MetadataRoute } from "next";

/** Set NEXT_PUBLIC_SITE_URL in env for production. Used at build time (static-compatible). */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
