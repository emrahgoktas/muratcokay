import type { ImageMetadata } from "astro";

import { clusters, getCluster, getPillar } from "../data/authority";
import type { ClusterContent } from "../data/authority/types";

import butuncul from "../assets/media/yalova-kapak-butuncul.jpg";
import estetik from "../assets/media/yalova-kapak-estetik.jpg";
import getat from "../assets/media/yalova-kapak-getat.jpg";
import hero from "../assets/media/yalova-editorial-hero.jpg";
import kent from "../assets/media/yalova-kapak-kent.jpg";
import portrait from "../assets/media/yalova-kapak-yazar.jpg";

export const IMAGE_QUALITY = { webp: 80, avif: 60 } as const;
export const IMAGE_WIDTHS = [480, 768, 1200] as const;
export const RESPONSIVE_SIZES =
  "(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px";
export const CARD_SIZES = "(max-width: 900px) 100vw, 50vw";
export const THUMB_SIZES = "(max-width: 900px) 42vw, 22vw";

export type MediaAsset = {
  id: string;
  src: ImageMetadata;
  publicPath: string;
  alt: string;
  role: "hero" | "supporting";
  placeholder: true;
  objectPosition?: string;
};

function asset(
  id: string,
  src: ImageMetadata,
  alt: string,
  role: MediaAsset["role"],
  objectPosition?: string,
): MediaAsset {
  return {
    id,
    src,
    publicPath: `/media/${id}.jpg`,
    alt,
    role,
    placeholder: true,
    objectPosition,
  };
}

export const mediaCatalog = {
  hero: asset(
    "yalova-editorial-hero",
    hero,
    "Sakin muayene odası — Yalova medikal estetik ve bütüncül sağlık rehberi",
    "hero",
  ),
  estetik: asset(
    "yalova-kapak-estetik",
    estetik,
    "Keten ve seramik natürmort — medikal estetik yazıları kapak görseli",
    "supporting",
  ),
  butuncul: asset(
    "yalova-kapak-butuncul",
    butuncul,
    "Defter, su bardağı ve zeytin dalı — bütüncül sağlık yazıları kapak görseli",
    "supporting",
  ),
  getat: asset(
    "yalova-kapak-getat",
    getat,
    "Boş kupa ve seramik kase — GETAT yazıları kapak görseli",
    "supporting",
    "center 18%",
  ),
  kent: asset(
    "yalova-kapak-kent",
    kent,
    "Sisli kıyı ve tepe — Yalova sağlık rehberi kapak görseli",
    "supporting",
  ),
  portrait: asset(
    "yalova-kapak-yazar",
    portrait,
    "Boş hekim çalışma masası — yazar profili",
    "supporting",
  ),
} as const;

export const allMedia = Object.values(mediaCatalog);

export function mediaForPillar(slug: string): MediaAsset {
  if (slug === "medikal-estetik") return mediaCatalog.estetik;
  if (slug === "getat") return mediaCatalog.getat;
  if (slug === "butuncul-saglik") return mediaCatalog.butuncul;
  if (slug === "yalova-saglik") return mediaCatalog.kent;
  return mediaCatalog.hero;
}

export function mediaForCluster(
  cluster: Pick<ClusterContent, "category">,
): MediaAsset {
  if (cluster.category === "estetik") return mediaCatalog.estetik;
  if (cluster.category === "getat") return mediaCatalog.getat;
  if (cluster.category === "butuncul-saglik") return mediaCatalog.butuncul;
  return mediaCatalog.kent;
}

export function mediaForPath(pathname: string): MediaAsset[] {
  const parts = pathname.replace(/^\/|\/$/g, "").split("/").filter(Boolean);

  if (parts[0] === "yazar") {
    return [mediaCatalog.portrait];
  }

  if (parts[0] === "harita") {
    return [mediaCatalog.kent];
  }

  if (parts[0] === "rehberler" && parts[1]) {
    const pillar = getPillar(parts[1]);
    return [pillar ? mediaForPillar(pillar.slug) : mediaCatalog.hero];
  }

  if (parts[0] === "yazilar" && parts[1]) {
    const cluster = getCluster(parts[1]);
    return [cluster ? mediaForCluster(cluster) : mediaCatalog.hero];
  }

  return [mediaCatalog.hero];
}

export function featuredClusters() {
  return clusters
    .filter((cluster) => {
      const pillar = getPillar(cluster.pillarSlug);
      const index = pillar?.clusterSlugs.indexOf(cluster.slug) ?? -1;
      return index >= 0 && index < 2;
    })
    .slice(0, 8);
}

export function ogSlugFromPath(pathname: string) {
  const trimmed = pathname.replace(/^\/|\/$/g, "") || "anasayfa";
  return trimmed.replaceAll("/", "--") || "anasayfa";
}
