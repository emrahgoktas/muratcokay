import type { MetadataRoute } from "next";

import { sites } from "@muratcokay/content";

import { nisServicePages } from "@/lib/nis-services";

const siteUrl = sites.nis;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...nisServicePages.map((page) => ({
      url: `${siteUrl}/hizmetler/${page.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
