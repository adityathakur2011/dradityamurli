import type { MetadataRoute } from "next";

/** Set NEXT_PUBLIC_SITE_URL in env for production. Used at build time (static-compatible). */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/faq",
    "/contact",
    "/philosophy",
    "/athlete",
    "/resources",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
