import type { StaticImageData } from "next/image";

import akupunktur from "@/assets/media/yalova-akupunktur-uygulama-alani.jpg";
import butuncul from "@/assets/media/yalova-butuncul-saglik-klinik.jpg";
import fibromiyalji from "@/assets/media/yalova-fibromiyalji-tedavisi-klinik.jpg";
import hacamat from "@/assets/media/yalova-hacamat-uygulamasi-merkez.jpg";
import hero from "@/assets/media/yalova-medikal-estetik-klinik-hero.jpg";
import ozon from "@/assets/media/yalova-ozon-tedavisi-hazirlik.jpg";
import portrait from "@/assets/media/uzm-dr-yasar-murat-cokay-portre.jpg";
import termal from "@/assets/media/yalova-termal-saglik-cevre.jpg";

export type MediaRole = "hero" | "supporting";

export type MediaAsset = {
  id: string;
  src: StaticImageData;
  publicPath: string;
  alt: string;
  role: MediaRole;
  placeholder: true;
  credit: string;
};

function asset(
  id: string,
  src: StaticImageData,
  alt: string,
  role: MediaRole,
): MediaAsset {
  return {
    id,
    src,
    publicPath: `/media/${id}.jpg`,
    alt,
    role,
    placeholder: true,
    credit: "Unsplash (yer tutucu — üretimde klinik görseliyle değiştirilecek)",
  };
}

export const mediaCatalog = {
  hero: asset(
    "yalova-medikal-estetik-klinik-hero",
    hero,
    "Aydınlık klinik koridoru - Yalova Merkez muayenehanesi - medikal estetik ve bütüncül sağlık değerlendirmesi için steril ortamı göstermek",
    "hero",
  ),
  portrait: asset(
    "uzm-dr-yasar-murat-cokay-portre",
    portrait,
    "Hekim çalışma masası ve stetoskop - Uzm. Dr. Yaşar Murat Çokay Yalova muayenehanesi - profesyonel portre yer tutucusu, üretimde doktorun kendi fotoğrafıyla değiştirilecek",
    "hero",
  ),
  fibromiyalji: asset(
    "yalova-fibromiyalji-tedavisi-klinik",
    fibromiyalji,
    "Sakin muayene odası - Yalova Merkez'deki klinikte fibromiyalji değerlendirmesi - bütüncül yaklaşım ortamını anlatmak",
    "supporting",
  ),
  hacamat: asset(
    "yalova-hacamat-uygulamasi-merkez",
    hacamat,
    "Steril uygulama masası ve tıbbi hazırlık alanı - Yalova Merkez GETAT birimi - hacamat yaklaşımının yetkili ortamda konuşulduğunu göstermek",
    "supporting",
  ),
  akupunktur: asset(
    "yalova-akupunktur-uygulama-alani",
    akupunktur,
    "Sade ve aydınlık uygulama alanı - Yalova Merkez klinik - akupunktur değerlendirmesi için hazırlanan mekânı göstermek",
    "supporting",
  ),
  butuncul: asset(
    "yalova-butuncul-saglik-klinik",
    butuncul,
    "Bilgilendirme ve değerlendirme masası - Yalova bütüncül sağlık kliniği - hekim-hasta görüşme ortamını göstermek",
    "supporting",
  ),
  ozon: asset(
    "yalova-ozon-tedavisi-hazirlik",
    ozon,
    "Düzenli tıbbi hazırlık alanı - Yalova Merkez klinik - ozon yaklaşımının kontrollü ortamda ele alındığını göstermek",
    "supporting",
  ),
  termal: asset(
    "yalova-termal-saglik-cevre",
    termal,
    "Sahil ve açık ufuk manzarası - Yalova çevresi - kentin sağlık ve dinlenme coğrafyasını göstermek",
    "supporting",
  ),
} as const;

export type MediaId = keyof typeof mediaCatalog;

export const allMedia = Object.values(mediaCatalog);

export function mediaForService(slug: string): MediaAsset {
  if (slug.includes("fibromiyalji") || slug.includes("yorgunluk")) {
    return mediaCatalog.fibromiyalji;
  }
  if (slug.includes("hacamat")) {
    return mediaCatalog.hacamat;
  }
  if (slug.includes("akupunktur") || slug.includes("bel-fitik")) {
    return mediaCatalog.akupunktur;
  }
  if (slug.includes("ozon") || slug.includes("kilo")) {
    return mediaCatalog.ozon;
  }
  if (
    slug.includes("botoks") ||
    slug.includes("dolgu") ||
    slug.includes("yuz") ||
    slug.includes("lazer") ||
    slug.includes("mezoterapi") ||
    slug.includes("sac")
  ) {
    return mediaCatalog.hero;
  }
  return mediaCatalog.butuncul;
}

export function absoluteMediaUrl(siteUrl: string, asset: MediaAsset) {
  return new URL(asset.publicPath, siteUrl).toString();
}
