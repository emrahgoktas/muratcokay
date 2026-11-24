import type { MetadataRoute } from "next";

import { siteContent } from "@/lib/content";

const aiCrawlers = [
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "OAI-SearchBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
      },
    ],
    sitemap: [
      `${siteContent.seo.siteUrl}/sitemap.xml`,
      `${siteContent.seo.siteUrl}/sitemap-images.xml`,
    ],
    host: siteContent.seo.siteUrl,
  };
}
