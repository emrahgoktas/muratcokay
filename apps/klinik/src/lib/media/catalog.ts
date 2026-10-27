import type { StaticImageData } from "next/image";

import roomAkupunktur from "@/assets/media/yalova-akupunktur-uygulama-alani.jpg";
import roomButuncul from "@/assets/media/yalova-butuncul-saglik-klinik.jpg";
import roomHero from "@/assets/media/yalova-medikal-estetik-klinik-hero.jpg";
import roomKarsilama from "@/assets/media/yalova-karsilama.jpg";
import roomMuayene from "@/assets/media/yalova-muayene.jpg";
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
    "Medikal estetik uygulama odası ve cilt cihazı - Yalova Merkez muayenehanesi",
    "hero",
  ),
  karsilama: asset(
    "yalova-karsilama",
    roomKarsilama,
    "Klinik karşılama / resepsiyon alanı - Yalova Merkez muayenehanesi",
    "supporting",
  ),
  muayene: asset(
    "yalova-muayene",
    roomMuayene,
    "Muayene ve uygulama odası - Yalova Merkez klinik ortamı",
    "supporting",
  ),
  portrait: asset(
    "uzm-dr-yasar-murat-cokay-portre",
    portrait,
    "Stetoskop, ilaç şişeleri ve reçete masası - Yalova muayenehanesi değerlendirme ortamı",
    "hero",
  ),
  butuncul: asset(
    "yalova-butuncul-saglik-klinik",
    roomButuncul,
    "Klinik ortamda bütüncül sağlık değerlendirmesi / manuel terapi bağlamı - Yalova",
    "supporting",
  ),
  termal: asset(
    "yalova-termal-saglik-cevre",
    termal,
    "Umuttur Yalova kent tabelası - Yalova Merkez şehir bağlamı",
    "supporting",
  ),
  akupunkturRoom: asset(
    "yalova-akupunktur-uygulama-alani",
    roomAkupunktur,
    "Klinik ortamda akupunktur / manuel terapi uygulaması - Yalova Merkez GETAT",
    "supporting",
  ),
  botoks: asset(
    "yalova-kart-botoks",
    stillBotoks,
    "Klinik ortamda yüz konturu değerlendirmesi - botoks yaklaşımı",
    "supporting",
  ),
  dolgu: asset(
    "yalova-kart-dolgu",
    stillDolgu,
    "Eldivenli uygulayıcı ile yüz estetik hazırlığı - dolgu değerlendirmesi",
    "supporting",
  ),
  siviYuz: asset(
    "yalova-kart-sivi-yuz",
    stillSiviYuz,
    "Klinik ortamda yüze cihazla uygulanan sıvı yüz germe / cilt sıkılaştırma işlemi",
    "supporting",
  ),
  leke: asset(
    "yalova-kart-leke",
    stillLeke,
    "Klinik ortamda yüze uygulanan leke ve matlık tedavisi / cilt yenileme işlemi",
    "supporting",
  ),
  sac: asset(
    "yalova-kart-sac",
    stillSac,
    "Trikoskopi ile saç ve saç derisi değerlendirmesi - saç dökülmesi klinik bağlamı",
    "supporting",
  ),
  mezoterapi: asset(
    "yalova-kart-mezoterapi",
    stillMezoterapi,
    "Klinik ortamda yüze fırça ile uygulanan mezoterapi / cilt bakımı hazırlığı",
    "supporting",
  ),
  lazer: asset(
    "yalova-kart-lazer",
    stillLazer,
    "Klinik ortamda yüze uygulanan lazer / enerji bazlı cilt işlemi",
    "supporting",
  ),
  ipAski: asset(
    "yalova-kart-ip-aski",
    stillIpAski,
    "Klinik ortamda çene hattı ve yüz konturu değerlendirmesi - ip askı planlaması",
    "supporting",
  ),
  fibromiyalji: asset(
    "yalova-kart-fibromiyalji",
    stillFibromiyalji,
    "Klinik ortamda bel / omuz bölgesinde manuel terapi - fibromiyalji desteği",
    "supporting",
  ),
  kilo: asset(
    "yalova-kart-kilo",
    stillKilo,
    "Dijital tartı ve mezura - kilo yönetimi değerlendirme natürmortu",
    "supporting",
  ),
  yorgunluk: asset(
    "yalova-kart-yorgunluk",
    stillYorgunluk,
    "Klinik ortamda damar yolu ve nabız oksimetresi - kronik yorgunluk destek hazırlığı",
    "supporting",
  ),
  bel: asset(
    "yalova-kart-bel",
    stillBel,
    "Klinik ortamda bel bölgesine manuel terapi - bel fıtığı destek bağlamı",
    "supporting",
  ),
  diyabet: asset(
    "yalova-kart-diyabet",
    stillDiyabet,
    "Klinik bağlamda diyabet yönetimi / ölçüm hazırlığı",
    "supporting",
  ),
  hipertansiyon: asset(
    "yalova-kart-hipertansiyon",
    stillHipertansiyon,
    "Klinik bağlamda tansiyon değerlendirmesi - hipertansiyon desteği",
    "supporting",
  ),
  varis: asset(
    "yalova-kart-varis",
    stillVaris,
    "Kompresyon çorabı ve Doppler cihazı - varis değerlendirmesi",
    "supporting",
  ),
  hemoroid: asset(
    "yalova-kart-hemoroid",
    stillHemoroid,
    "Muayene lambası, eldiven ve merhem - hemoroid değerlendirme hazırlığı",
    "supporting",
  ),
  hacamat: asset(
    "yalova-kart-hacamat",
    stillHacamat,
    "Hastanın sırtında net görünen hacamat kupaları - klinik kupa terapisi seansı",
    "supporting",
  ),
  suluk: asset(
    "yalova-kart-suluk",
    stillSuluk,
    "Klinik ortamda tıbbi sülük uygulaması - GETAT yaklaşımı",
    "supporting",
  ),
  akupunktur: asset(
    "yalova-kart-akupunktur",
    stillAkupunktur,
    "Klinik ortamda akupunktur / manuel terapi uygulaması",
    "supporting",
  ),
  ozon: asset(
    "yalova-kart-ozon",
    stillOzon,
    "Klinik ortamda damar yolu ve nabız oksimetresi - ozon / infüzyon hazırlığı",
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
