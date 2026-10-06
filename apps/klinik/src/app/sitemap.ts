import type { MetadataRoute } from "next";

import {
  locationCatalog,
  serviceCatalog,
  serviceLocationCombinations,
  siteContent,
} from "@/lib/content";
import {
  absoluteMediaUrl,
  mediaCatalog,
  mediaForService,
} from "@/lib/media/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteContent.seo.siteUrl;
  const hero = absoluteMediaUrl(siteUrl, mediaCatalog.hero);
  const portrait = absoluteMediaUrl(siteUrl, mediaCatalog.portrait);

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
      images: [hero, portrait],
    },
    {
      url: `${siteUrl}/hizmetler`,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [hero],
    },
    {
      url: `${siteUrl}/iletisim`,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [hero],
    },
    {
      url: `${siteUrl}/hakkimda`,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [portrait],
    },
    {
      url: `${siteUrl}/bolgeler`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteMediaUrl(siteUrl, mediaCatalog.termal)],
    },
    ...serviceCatalog.map((service) => ({
      url: `${siteUrl}/hizmetler/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteMediaUrl(siteUrl, mediaForService(service.slug))],
    })),
    ...locationCatalog.map((location) => ({
      url: `${siteUrl}/bolgeler/${location.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [absoluteMediaUrl(siteUrl, mediaCatalog.termal)],
    })),
    ...serviceLocationCombinations.map((combination) => ({
      url: `${siteUrl}/hizmetler/${combination.servicePathSlug}/${combination.locationSlug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        absoluteMediaUrl(siteUrl, mediaForService(combination.servicePathSlug)),
      ],
    })),
  ];
}
