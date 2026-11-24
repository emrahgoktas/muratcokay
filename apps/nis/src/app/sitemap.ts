import type { MetadataRoute } from "next";

import { sites } from "@muratcokay/content";

const siteUrl = sites.nis;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/gizlilik/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
