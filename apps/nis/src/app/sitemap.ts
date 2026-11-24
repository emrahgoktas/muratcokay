import type { MetadataRoute } from "next";

import { sites } from "@muratcokay/content";

const siteUrl = sites.nis;
const lastModified = new Date("2026-11-24T12:00:00.000Z");
const heroUrl = `${siteUrl}/media/yalova-medikal-estetik-klinik-hero.jpg`;
const portraitUrl = `${siteUrl}/media/uzm-dr-yasar-murat-cokay-portre.jpg`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [heroUrl, portraitUrl],
    },
    {
      url: `${siteUrl}/gizlilik/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
