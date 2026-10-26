import type { StaticImageData } from "next/image";

import roomAkupunktur from "@/assets/media/yalova-akupunktur-uygulama-alani.jpg";
import roomButuncul from "@/assets/media/yalova-butuncul-saglik-klinik.jpg";
import roomHero from "@/assets/media/yalova-medikal-estetik-klinik-hero.jpg";
import portrait from "@/assets/media/uzm-dr-yasar-murat-cokay-portre.jpg";
import termal from "@/assets/media/yalova-termal-saglik-cevre.jpg";
import stillAkupunktur from "@/assets/media/yalova-kart-akupunktur.jpg";
import stillBel from "@/assets/media/yalova-kart-bel.jpg";
import stillBotoks from "@/assets/media/yalova-kart-botoks.jpg";
import stillDiyabet from "@/assets/media/yalova-kart-diyabet.jpg";
import stillDolgu from "@/assets/media/yalova-kart-dolgu.jpg";
import stillFibromiyalji from "@/assets/media/yalova-kart-fibromiyalji.jpg";
import stillHacamat from "@/assets/media/yalova-kart-hacamat.jpg";
import stillHemoroid from "@/assets/media/yalova-kart-hemoroid.jpg";
import stillHipertansiyon from "@/assets/media/yalova-kart-hipertansiyon.jpg";
import stillIpAski from "@/assets/media/yalova-kart-ip-aski.jpg";
import stillKilo from "@/assets/media/yalova-kart-kilo.jpg";
import stillLazer from "@/assets/media/yalova-kart-lazer.jpg";
import stillLeke from "@/assets/media/yalova-kart-leke.jpg";
import stillMezoterapi from "@/assets/media/yalova-kart-mezoterapi.jpg";
import stillOzon from "@/assets/media/yalova-kart-ozon.jpg";
import stillSac from "@/assets/media/yalova-kart-sac.jpg";
import stillSiviYuz from "@/assets/media/yalova-kart-sivi-yuz.jpg";
import stillSuluk from "@/assets/media/yalova-kart-suluk.jpg";
import stillVaris from "@/assets/media/yalova-kart-varis.jpg";
import stillYorgunluk from "@/assets/media/yalova-kart-yorgunluk.jpg";

export type MediaRole = "hero" | "supporting";

export type MediaAsset = {
  id: string;
  src: StaticImageData;
  publicPath: string;
  alt: string;
  role: MediaRole;
  placeholder: false;
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
    placeholder: false,
    credit: "Unsplash / Pexels — lisanslı klinik görsel",
  };
}

export const mediaCatalog = {
  hero: asset(
    "yalova-medikal-estetik-klinik-hero",
    roomHero,
    "Aydınlık klinik koridoru - Yalova Merkez muayenehanesi",
    "hero",
  ),
  portrait: asset(
    "uzm-dr-yasar-murat-cokay-portre",
    portrait,
    "Sakin klinik masaüstü kompozisyonu - Yalova muayenehanesi",
    "hero",
  ),
  butuncul: asset(
    "yalova-butuncul-saglik-klinik",
    roomButuncul,
    "Aydınlık medikal estetik uygulama alanı - Yalova Merkez",
    "supporting",
  ),
  termal: asset(
    "yalova-termal-saglik-cevre",
    termal,
    "Sahil ve açık ufuk - Yalova sağlık coğrafyası",
    "supporting",
  ),
  akupunkturRoom: asset(
    "yalova-akupunktur-uygulama-alani",
    roomAkupunktur,
    "Aydınlık uygulama alanı - Yalova Merkez klinik",
    "supporting",
  ),
  botoks: asset(
    "yalova-kart-botoks",
    stillBotoks,
    "Flakon ve enjektör - botoks değerlendirmesi natürmortu",
    "supporting",
  ),
  dolgu: asset(
    "yalova-kart-dolgu",
    stillDolgu,
    "Hyaluronik asit enjektörleri - dolgu değerlendirmesi natürmortu",
    "supporting",
  ),
  siviYuz: asset(
    "yalova-kart-sivi-yuz",
    stillSiviYuz,
    "Mezoterapi ampulleri - sıvı yüz germe natürmortu",
    "supporting",
  ),
  leke: asset(
    "yalova-kart-leke",
    stillLeke,
    "Dermatoskop lambası ve güneş koruyucu - leke değerlendirmesi natürmortu",
    "supporting",
  ),
  sac: asset(
    "yalova-kart-sac",
    stillSac,
    "Ahşap tarak ve damlalık - saç dökülmesi natürmortu",
    "supporting",
  ),
  mezoterapi: asset(
    "yalova-kart-mezoterapi",
    stillMezoterapi,
    "Küçük flakonlar ve pamuk - mezoterapi hazırlık natürmortu",
    "supporting",
  ),
  lazer: asset(
    "yalova-kart-lazer",
    stillLazer,
    "Lazer el aleti ve koruyucu gözlük - lazer değerlendirmesi natürmortu",
    "supporting",
  ),
  ipAski: asset(
    "yalova-kart-ip-aski",
    stillIpAski,
    "PDO iplik poşetleri - ip askı natürmortu",
    "supporting",
  ),
  fibromiyalji: asset(
    "yalova-kart-fibromiyalji",
    stillFibromiyalji,
    "Hassas nokta şeması ve ısı yastığı - fibromiyalji natürmortu",
    "supporting",
  ),
  kilo: asset(
    "yalova-kart-kilo",
    stillKilo,
    "Dijital tartı ve mezura - kilo yönetimi natürmortu",
    "supporting",
  ),
  yorgunluk: asset(
    "yalova-kart-yorgunluk",
    stillYorgunluk,
    "Gece saati ve uyku bandı - kronik yorgunluk natürmortu",
    "supporting",
  ),
  bel: asset(
    "yalova-kart-bel",
    stillBel,
    "Omurga modeli ve defter - bel fıtığı natürmortu",
    "supporting",
  ),
  diyabet: asset(
    "yalova-kart-diyabet",
    stillDiyabet,
    "Ölçüm cihazı ve elma - diyabet desteği natürmortu",
    "supporting",
  ),
  hipertansiyon: asset(
    "yalova-kart-hipertansiyon",
    stillHipertansiyon,
    "Tansiyon manşonu ve defter - hipertansiyon natürmortu",
    "supporting",
  ),
  varis: asset(
    "yalova-kart-varis",
    stillVaris,
    "Kompresyon çorabı ve Doppler - varis desteği natürmortu",
    "supporting",
  ),
  hemoroid: asset(
    "yalova-kart-hemoroid",
    stillHemoroid,
    "Oturma banyosu ve muayene lambası - hemoroid değerlendirmesi natürmortu",
    "supporting",
  ),
  hacamat: asset(
    "yalova-kart-hacamat",
    stillHacamat,
    "Cam kupa seti - hacamat hazırlık natürmortu",
    "supporting",
  ),
  suluk: asset(
    "yalova-kart-suluk",
    stillSuluk,
    "Kehr tabağı ve forceps - sülük uygulaması natürmortu",
    "supporting",
  ),
  akupunktur: asset(
    "yalova-kart-akupunktur",
    stillAkupunktur,
    "Keçe yastık ve kapalı iğne paketleri - akupunktur natürmortu",
    "supporting",
  ),
  ozon: asset(
    "yalova-kart-ozon",
    stillOzon,
    "Ozon jeneratörü ve hortum - ozon hazırlık natürmortu",
    "supporting",
  ),
} as const;

export type MediaId = keyof typeof mediaCatalog;

export const allMedia = Object.values(mediaCatalog);

const serviceMedia: Record<string, MediaId> = {
  botoks: "botoks",
  dolgu: "dolgu",
  "sivi-yuz-germe": "siviYuz",
  "yuzde-matlik-kirisiklik-leke-tedavisi": "leke",
  "sac-dokulmesi-tedavisi": "sac",
  mezoterapi: "mezoterapi",
  lazer: "lazer",
  "ip-aski": "ipAski",
  fibromiyalji: "fibromiyalji",
  "kilo-verme-destegi": "kilo",
  "kronik-yorgunluk-sendromu": "yorgunluk",
  "bel-fitiklari-omurga-sagligi": "bel",
  "diyabet-yonetimi-destegi": "diyabet",
  "hipertansiyon-destegi": "hipertansiyon",
  "varis-tedavisi-destegi": "varis",
  "hemoroid-tedavisi-destegi": "hemoroid",
  hacamat: "hacamat",
  "suluk-tedavisi": "suluk",
  akupunktur: "akupunktur",
  "ozon-tedavisi": "ozon",
};

export function mediaForService(slug: string): MediaAsset {
  return mediaCatalog[serviceMedia[slug] ?? "butuncul"];
}

export function mediaForTopic(text: string): MediaAsset {
  const value = text.toLocaleLowerCase("tr-TR");
  if (value.includes("botoks")) return mediaCatalog.botoks;
  if (value.includes("dolgu")) return mediaCatalog.dolgu;
  if (value.includes("sıvı yüz") || value.includes("sivi-yuz")) {
    return mediaCatalog.siviYuz;
  }
  if (value.includes("leke") || value.includes("matlık") || value.includes("matlik")) {
    return mediaCatalog.leke;
  }
  if (value.includes("saç") || value.includes("sac")) return mediaCatalog.sac;
  if (value.includes("mezoterapi")) return mediaCatalog.mezoterapi;
  if (value.includes("lazer")) return mediaCatalog.lazer;
  if (value.includes("ip ask") || value.includes("ip-aski")) {
    return mediaCatalog.ipAski;
  }
  if (value.includes("fibromiyalji")) return mediaCatalog.fibromiyalji;
  if (value.includes("kilo")) return mediaCatalog.kilo;
  if (value.includes("yorgunluk")) return mediaCatalog.yorgunluk;
  if (value.includes("bel") || value.includes("omurga") || value.includes("fıtık") || value.includes("fitik")) {
    return mediaCatalog.bel;
  }
  if (value.includes("diyabet")) return mediaCatalog.diyabet;
  if (value.includes("hipertansiyon") || value.includes("tansiyon")) {
    return mediaCatalog.hipertansiyon;
  }
  if (value.includes("varis")) return mediaCatalog.varis;
  if (value.includes("hemoroid")) return mediaCatalog.hemoroid;
  if (value.includes("hacamat")) return mediaCatalog.hacamat;
  if (value.includes("sülük") || value.includes("suluk")) return mediaCatalog.suluk;
  if (value.includes("akupunktur")) return mediaCatalog.akupunktur;
  if (value.includes("ozon")) return mediaCatalog.ozon;
  if (value.includes("getat")) return mediaCatalog.hacamat;
  if (value.includes("yalova") || value.includes("termal") || value.includes("bölge") || value.includes("bolge")) {
    return mediaCatalog.termal;
  }
  return mediaCatalog.butuncul;
}

export function absoluteMediaUrl(siteUrl: string, asset: MediaAsset) {
  return new URL(asset.publicPath, siteUrl).toString();
}
