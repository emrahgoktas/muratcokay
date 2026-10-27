import type { ImageMetadata } from "astro";

import { clusters, getCluster, getPillar } from "../data/authority";
import type { ClusterContent } from "../data/authority/types";

import butuncul from "../assets/media/yalova-kapak-butuncul.jpg";
import estetik from "../assets/media/yalova-kapak-estetik.jpg";
import getat from "../assets/media/yalova-kapak-getat.jpg";
import hero from "../assets/media/yalova-editorial-hero.jpg";
import kent from "../assets/media/yalova-kapak-kent.jpg";
import portrait from "../assets/media/yalova-kapak-yazar.jpg";
import stillAkupunktur from "../assets/media/yalova-kart-akupunktur.jpg";
import stillBel from "../assets/media/yalova-kart-bel.jpg";
import stillBotoks from "../assets/media/yalova-kart-botoks.jpg";
import stillDiyabet from "../assets/media/yalova-kart-diyabet.jpg";
import stillDolgu from "../assets/media/yalova-kart-dolgu.jpg";
import stillFibromiyalji from "../assets/media/yalova-kart-fibromiyalji.jpg";
import stillHacamat from "../assets/media/yalova-kart-hacamat.jpg";
import stillHemoroid from "../assets/media/yalova-kart-hemoroid.jpg";
import stillHipertansiyon from "../assets/media/yalova-kart-hipertansiyon.jpg";
import stillIpAski from "../assets/media/yalova-kart-ip-aski.jpg";
import stillKilo from "../assets/media/yalova-kart-kilo.jpg";
import stillLazer from "../assets/media/yalova-kart-lazer.jpg";
import stillLeke from "../assets/media/yalova-kart-leke.jpg";
import stillMezoterapi from "../assets/media/yalova-kart-mezoterapi.jpg";
import stillOzon from "../assets/media/yalova-kart-ozon.jpg";
import stillSac from "../assets/media/yalova-kart-sac.jpg";
import stillSiviYuz from "../assets/media/yalova-kart-sivi-yuz.jpg";
import stillSuluk from "../assets/media/yalova-kart-suluk.jpg";
import stillVaris from "../assets/media/yalova-kart-varis.jpg";
import stillYorgunluk from "../assets/media/yalova-kart-yorgunluk.jpg";

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
  placeholder: false;
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
    placeholder: false,
    objectPosition,
  };
}

export const mediaCatalog = {
  hero: asset(
    "yalova-editorial-hero",
    hero,
    "Medikal estetik uygulama odası ve cilt cihazı — Yalova rehberi",
    "hero",
  ),
  estetik: asset(
    "yalova-kapak-estetik",
    estetik,
    "Klinik ortamda yüz estetik işlemi — medikal estetik rehberi kapak",
    "supporting",
  ),
  butuncul: asset(
    "yalova-kapak-butuncul",
    butuncul,
    "Klinik ortamda bütüncül sağlık değerlendirmesi — bütüncül sağlık rehberi",
    "supporting",
  ),
  getat: asset(
    "yalova-kapak-getat",
    getat,
    "Klinik ortamda net görünen hacamat kupaları — GETAT rehberi kapak",
    "supporting",
    "center 40%",
  ),
  kent: asset(
    "yalova-kapak-kent",
    kent,
    "Yalova kent parkı / şehir görünümü — Yalova sağlık rehberi kapak",
    "supporting",
  ),
  portrait: asset(
    "yalova-kapak-yazar",
    portrait,
    "Stetoskop ve reçete masası — yazar profili",
    "supporting",
  ),
  botoks: asset(
    "yalova-kart-botoks",
    stillBotoks,
    "Ucu damlacıklı steril enjektör iğnesi — botoks hazırlığı",
    "supporting",
  ),
  dolgu: asset(
    "yalova-kart-dolgu",
    stillDolgu,
    "Steril dolgu enjektörleri ve yüz oran şeması — dolgu değerlendirmesi",
    "supporting",
  ),
  siviYuz: asset(
    "yalova-kart-sivi-yuz",
    stillSiviYuz,
    "Klinik ortamda yüze cihazla uygulanan sıvı yüz germe işlemi",
    "supporting",
  ),
  leke: asset(
    "yalova-kart-leke",
    stillLeke,
    "Klinik ortamda yüze uygulanan leke ve matlık tedavisi",
    "supporting",
  ),
  sac: asset(
    "yalova-kart-sac",
    stillSac,
    "Dermatoskop / trikoloji değerlendirmesi — saç dökülmesi klinik bağlamı",
    "supporting",
  ),
  mezoterapi: asset(
    "yalova-kart-mezoterapi",
    stillMezoterapi,
    "Kehribar flakonlar — mezoterapi hazırlığı",
    "supporting",
  ),
  lazer: asset(
    "yalova-kart-lazer",
    stillLazer,
    "Lazer el aleti ve koruyucu gözlük — lazer değerlendirmesi",
    "supporting",
  ),
  ipAski: asset(
    "yalova-kart-ip-aski",
    stillIpAski,
    "Klinik ortamda yüz konturu değerlendirmesi — ip askı planlaması",
    "supporting",
  ),
  fibromiyalji: asset(
    "yalova-kart-fibromiyalji",
    stillFibromiyalji,
    "Hassas nokta şeması ve ağrı günlüğü — fibromiyalji",
    "supporting",
  ),
  kilo: asset(
    "yalova-kart-kilo",
    stillKilo,
    "Dijital tartı ve mezura — kilo yönetimi",
    "supporting",
  ),
  yorgunluk: asset(
    "yalova-kart-yorgunluk",
    stillYorgunluk,
    "Klinik ortamda infüzyon / damar yolu hazırlığı — kronik yorgunluk desteği",
    "supporting",
  ),
  bel: asset(
    "yalova-kart-bel",
    stillBel,
    "Omurga modeli ve bel destek korsesi — bel fıtığı",
    "supporting",
  ),
  diyabet: asset(
    "yalova-kart-diyabet",
    stillDiyabet,
    "Kan şekeri ölçüm cihazı ve elma — diyabet desteği",
    "supporting",
  ),
  hipertansiyon: asset(
    "yalova-kart-hipertansiyon",
    stillHipertansiyon,
    "Tansiyon manşonu ve defter — hipertansiyon",
    "supporting",
  ),
  varis: asset(
    "yalova-kart-varis",
    stillVaris,
    "Kompresyon çorabı ve Doppler — varis desteği",
    "supporting",
  ),
  hemoroid: asset(
    "yalova-kart-hemoroid",
    stillHemoroid,
    "Muayene lambası ve eldiven — hemoroid değerlendirmesi",
    "supporting",
  ),
  hacamat: asset(
    "yalova-kart-hacamat",
    stillHacamat,
    "Klinik ortamda net görünen hacamat kupaları — kupa terapisi seansı",
    "supporting",
  ),
  suluk: asset(
    "yalova-kart-suluk",
    stillSuluk,
    "Forceps, gazlı bez ve amber şişeler — sülük uygulaması hazırlığı",
    "supporting",
  ),
  akupunktur: asset(
    "yalova-kart-akupunktur",
    stillAkupunktur,
    "El üzerinde yeşil saplı akupunktur iğnesi — akupunktur",
    "supporting",
  ),
  ozon: asset(
    "yalova-kart-ozon",
    stillOzon,
    "Damar yolu ve nabız oksimetresi — ozon / infüzyon hazırlığı",
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
  cluster: Pick<ClusterContent, "category" | "slug" | "title">,
): MediaAsset {
  const topic = `${cluster.slug} ${cluster.title}`.toLocaleLowerCase("tr-TR");
  if (topic.includes("botoks")) return mediaCatalog.botoks;
  if (topic.includes("dolgu")) return mediaCatalog.dolgu;
  if (topic.includes("sivi-yuz") || topic.includes("sıvı yüz")) {
    return mediaCatalog.siviYuz;
  }
  if (topic.includes("leke") || topic.includes("matlik") || topic.includes("matlık")) {
    return mediaCatalog.leke;
  }
  if (topic.includes("sac") || topic.includes("saç")) return mediaCatalog.sac;
  if (topic.includes("mezoterapi") || topic.includes("prp")) {
    return mediaCatalog.mezoterapi;
  }
  if (topic.includes("lazer")) return mediaCatalog.lazer;
  if (topic.includes("ip-aski") || topic.includes("ip ask")) {
    return mediaCatalog.ipAski;
  }
  if (topic.includes("fibromiyalji")) return mediaCatalog.fibromiyalji;
  if (topic.includes("kilo")) return mediaCatalog.kilo;
  if (topic.includes("yorgunluk")) return mediaCatalog.yorgunluk;
  if (topic.includes("bel-fitik") || topic.includes("bel fıt") || topic.includes("omurga")) {
    return mediaCatalog.bel;
  }
  if (topic.includes("diyabet")) return mediaCatalog.diyabet;
  if (topic.includes("hipertansiyon") || topic.includes("tansiyon")) {
    return mediaCatalog.hipertansiyon;
  }
  if (topic.includes("varis")) return mediaCatalog.varis;
  if (topic.includes("hemoroid")) return mediaCatalog.hemoroid;
  if (topic.includes("hacamat")) return mediaCatalog.hacamat;
  if (topic.includes("suluk") || topic.includes("sülük")) return mediaCatalog.suluk;
  if (topic.includes("akupunktur")) return mediaCatalog.akupunktur;
  if (topic.includes("ozon")) return mediaCatalog.ozon;
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
