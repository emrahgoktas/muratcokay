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
import { CONTENT_REVISION_DATE } from "@/lib/seo/content-revision";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteContent.seo.siteUrl;
  const hero = absoluteMediaUrl(siteUrl, mediaCatalog.hero);
  const portrait = absoluteMediaUrl(siteUrl, mediaCatalog.portrait);
  const lastModified = new Date(`${CONTENT_REVISION_DATE}T12:00:00.000Z`);

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [hero, portrait],
    },
    {
      url: `${siteUrl}/hizmetler`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [hero],
    },
    {
      url: `${siteUrl}/iletisim`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [hero],
    },
    {
      url: `${siteUrl}/hakkimda`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [portrait],
    },
    {
      url: `${siteUrl}/gizlilik`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/bolgeler`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteMediaUrl(siteUrl, mediaCatalog.termal)],
    },
    ...serviceCatalog.map((service) => ({
      url: `${siteUrl}/hizmetler/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteMediaUrl(siteUrl, mediaForService(service.slug))],
    })),
    ...locationCatalog.map((location) => ({
      url: `${siteUrl}/bolgeler/${location.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [absoluteMediaUrl(siteUrl, mediaCatalog.termal)],
    })),
    ...serviceLocationCombinations.map((combination) => ({
      url: `${siteUrl}/hizmetler/${combination.servicePathSlug}/${combination.locationSlug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        absoluteMediaUrl(siteUrl, mediaForService(combination.servicePathSlug)),
      ],
    })),
  ];
}
