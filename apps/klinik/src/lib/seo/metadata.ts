import type { Metadata } from "next";

import { siteContent } from "@/lib/content";

function ogImageUrl(title: string) {
  return `/og?title=${encodeURIComponent(title)}`;
}

export function withSocialMeta({
  title,
  description,
  path,
  imageTitle,
}: {
  title?: Metadata["title"];
  description: string;
  path: string;
  imageTitle?: string;
}): Metadata {
  const resolvedTitle =
    imageTitle ??
    (typeof title === "string"
      ? title
      : title && typeof title === "object" && "absolute" in title
        ? String(title.absolute)
        : siteContent.brand.siteName);
  const image = ogImageUrl(resolvedTitle);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "tr-TR": path,
        "x-default": path,
      },
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: path,
      siteName: siteContent.brand.siteName,
      title: resolvedTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${resolvedTitle} - ${siteContent.brand.domain} - Yalova`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
  };
}

const defaultSocial = withSocialMeta({
  title: siteContent.brand.siteName,
  description: siteContent.seo.description,
  path: "/",
  imageTitle: siteContent.pages.home.hero.title,
});

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteContent.seo.siteUrl),
  verification: {
    google: "aJE1MNmOz2Vmnj_WjRXDuWB8MHzfG0aaBMp6Q-9Su8k",
  },
  title: {
    default: siteContent.brand.siteName,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "x-default": "/",
    },
  },
  openGraph: defaultSocial.openGraph,
  twitter: defaultSocial.twitter,
};
