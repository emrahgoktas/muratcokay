import type { ImageMetadata } from "astro";

import akupunktur from "../assets/media/yalova-akupunktur-uygulama-alani.jpg";
import butuncul from "../assets/media/yalova-butuncul-saglik-klinik.jpg";
import fibromiyalji from "../assets/media/yalova-fibromiyalji-tedavisi-klinik.jpg";
import hacamat from "../assets/media/yalova-hacamat-uygulamasi-merkez.jpg";
import hero from "../assets/media/yalova-medikal-estetik-klinik-hero.jpg";
import ozon from "../assets/media/yalova-ozon-tedavisi-hazirlik.jpg";
import portrait from "../assets/media/uzm-dr-yasar-murat-cokay-portre.jpg";
import termal from "../assets/media/yalova-termal-saglik-cevre.jpg";

export const IMAGE_QUALITY = { webp: 80, avif: 60 } as const;
export const IMAGE_WIDTHS = [480, 768, 1200] as const;
export const RESPONSIVE_SIZES =
  "(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px";

export type MediaAsset = {
  id: string;
  src: ImageMetadata;
  publicPath: string;
  alt: string;
  role: "hero" | "supporting";
  placeholder: true;
};

function asset(
  id: string,
  src: ImageMetadata,
  alt: string,
  role: MediaAsset["role"],
): MediaAsset {
  return {
    id,
    src,
    publicPath: `/media/${id}.jpg`,
    alt,
    role,
    placeholder: true,
  };
}

export const mediaCatalog = {
  hero: asset(
    "yalova-medikal-estetik-klinik-hero",
    hero,
    "Aydınlık klinik koridoru - Yalova medikal estetik rehberi - steril değerlendirme ortamını göstermek",
    "hero",
  ),
  portrait: asset(
    "uzm-dr-yasar-murat-cokay-portre",
    portrait,
    "Hekim çalışma masası - Uzm. Dr. Yaşar Murat Çokay - yazar ve klinik yer tutucu, üretimde kendi portresiyle değiştirilecek",
    "supporting",
  ),
  fibromiyalji: asset(
    "yalova-fibromiyalji-tedavisi-klinik",
    fibromiyalji,
    "Sakin muayene odası - Yalova bütüncül sağlık yazıları - fibromiyalji ve yorgunluk yönetimini anlatmak",
    "supporting",
  ),
  hacamat: asset(
    "yalova-hacamat-uygulamasi-merkez",
    hacamat,
    "Steril hazırlık alanı - Yalova GETAT rehberi - hacamatın yetkili ortamda konuşulduğunu göstermek",
    "supporting",
  ),
  akupunktur: asset(
    "yalova-akupunktur-uygulama-alani",
    akupunktur,
    "Aydınlık uygulama alanı - Yalova GETAT yazıları - akupunktur değerlendirme ortamını göstermek",
    "supporting",
  ),
  butuncul: asset(
    "yalova-butuncul-saglik-klinik",
    butuncul,
    "Değerlendirme masası - Yalova bütüncül sağlık rehberi - hekim görüşme ortamını göstermek",
    "supporting",
  ),
  ozon: asset(
    "yalova-ozon-tedavisi-hazirlik",
    ozon,
    "Düzenli tıbbi hazırlık alanı - Yalova GETAT yazıları - ozon yaklaşımının kontrollü ortamını göstermek",
    "supporting",
  ),
  termal: asset(
    "yalova-termal-saglik-cevre",
    termal,
    "Açık ufuk ve sahil - Yalova sağlık rehberi - kentin termal ve dinlenme coğrafyasını göstermek",
    "supporting",
  ),
} as const;

export const allMedia = Object.values(mediaCatalog);

export function mediaForPath(pathname: string): MediaAsset[] {
  if (pathname.includes("getat") || pathname.includes("hacamat")) {
    return [mediaCatalog.hacamat];
  }
  if (pathname.includes("akupunktur") || pathname.includes("bel-fitik")) {
    return [mediaCatalog.akupunktur];
  }
  if (pathname.includes("ozon") || pathname.includes("kilo")) {
    return [mediaCatalog.ozon];
  }
  if (
    pathname.includes("butuncul") ||
    pathname.includes("fibromiyalji") ||
    pathname.includes("yorgunluk")
  ) {
    return [mediaCatalog.fibromiyalji, mediaCatalog.butuncul];
  }
  if (pathname.includes("yalova") || pathname.includes("termal")) {
    return [mediaCatalog.termal];
  }
  if (
    pathname.includes("botoks") ||
    pathname.includes("dolgu") ||
    pathname.includes("estetik") ||
    pathname.includes("yuz")
  ) {
    return [mediaCatalog.hero];
  }
  return [mediaCatalog.hero, mediaCatalog.portrait];
}

export function ogSlugFromPath(pathname: string) {
  const trimmed = pathname.replace(/^\/|\/$/g, "") || "anasayfa";
  return trimmed.replaceAll("/", "--") || "anasayfa";
}
