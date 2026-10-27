import type { StaticImageData } from "next/image";

import stillAkupunktur from "@/assets/media/yalova-kart-akupunktur.jpg";
import stillBel from "@/assets/media/yalova-kart-bel.jpg";
import stillDiyabet from "@/assets/media/yalova-kart-diyabet.jpg";
import stillFibromiyalji from "@/assets/media/yalova-kart-fibromiyalji.jpg";
import stillHacamat from "@/assets/media/yalova-kart-hacamat.jpg";
import stillHemoroid from "@/assets/media/yalova-kart-hemoroid.jpg";
import stillHipertansiyon from "@/assets/media/yalova-kart-hipertansiyon.jpg";
import stillKilo from "@/assets/media/yalova-kart-kilo.jpg";
import stillMezoterapi from "@/assets/media/yalova-kart-mezoterapi.jpg";
import stillOzon from "@/assets/media/yalova-kart-ozon.jpg";
import stillSuluk from "@/assets/media/yalova-kart-suluk.jpg";
import stillVaris from "@/assets/media/yalova-kart-varis.jpg";
import stillYorgunluk from "@/assets/media/yalova-kart-yorgunluk.jpg";
import roomAkupunktur from "@/assets/media/yalova-akupunktur-uygulama-alani.jpg";
import roomButuncul from "@/assets/media/yalova-butuncul-saglik-klinik.jpg";
import desk from "@/assets/media/uzm-dr-yasar-murat-cokay-portre.jpg";
import hero from "@/assets/media/yalova-medikal-estetik-klinik-hero.jpg";
import termal from "@/assets/media/yalova-termal-saglik-cevre.jpg";

export type MediaAsset = {
  src: StaticImageData;
  alt: string;
};

function asset(src: StaticImageData, alt: string): MediaAsset {
  return { src, alt };
}

export const media = {
  hero: asset(
    hero,
    "Boş medikal estetik uygulama odası — Yalova Merkez bütüncül sağlık muayenehanesi",
  ),
  desk: asset(
    desk,
    "Stetoskop ve reçete masası — Yalova bütüncül sağlık görüşme ortamı",
  ),
  fibromiyalji: asset(
    stillFibromiyalji,
    "Hassas nokta şeması ve ısı yastığı — fibromiyalji değerlendirmesi",
  ),
  hacamat: asset(
    stillHacamat,
    "Turuncu valfli hacamat kupaları — kupa terapisi hazırlığı",
  ),
  akupunktur: asset(
    stillAkupunktur,
    "El üzerinde yeşil saplı akupunktur iğnesi — akupunktur uygulaması",
  ),
  butuncul: asset(
    roomButuncul,
    "Lavanta ve uçucu yağlarla bütüncül sağlık natürmortu — Yalova",
  ),
  ozon: asset(
    stillOzon,
    "Damar yolu ve nabız oksimetresi — ozon / infüzyon hazırlığı",
  ),
  termal: asset(
    termal,
    "Güneş doğarken sakin sahil — Yalova’nın dinlenme coğrafyası",
  ),
  kilo: asset(stillKilo, "Dijital tartı ve mezura — kilo yönetimi natürmortu"),
  yorgunluk: asset(
    stillYorgunluk,
    "Gece saati ve uyku bandı — kronik yorgunluk natürmortu",
  ),
  bel: asset(stillBel, "Omurga modeli ve bel destek korsesi — bel fıtığı"),
  diyabet: asset(
    stillDiyabet,
    "Kan şekeri ölçüm cihazı ve elma — diyabet desteği",
  ),
  hipertansiyon: asset(
    stillHipertansiyon,
    "Tansiyon manşonu ve defter — hipertansiyon natürmortu",
  ),
  varis: asset(stillVaris, "Kompresyon çorabı ve Doppler — varis desteği"),
  hemoroid: asset(
    stillHemoroid,
    "Muayene lambası ve eldiven — hemoroid değerlendirmesi",
  ),
  suluk: asset(
    stillSuluk,
    "Forceps, gazlı bez ve amber şişeler — sülük uygulaması hazırlığı",
  ),
  mezoterapi: asset(
    stillMezoterapi,
    "Kehribar flakonlar — mezoterapi hazırlık natürmortu",
  ),
  roomAkupunktur: asset(
    roomAkupunktur,
    "El üzerinde akupunktur iğnesi — GETAT uygulama bağlamı",
  ),
} as const;

export const situationMedia: Record<string, MediaAsset> = {
  Fibromiyalji: media.fibromiyalji,
  "Kilo Verme Desteği": media.kilo,
  "Kronik Yorgunluk Sendromu": media.yorgunluk,
  "Bel Fıtıkları": media.bel,
  "Diyabet Yönetimi Desteği": media.diyabet,
  "Hipertansiyon Desteği": media.hipertansiyon,
  "Varis Desteği": media.varis,
  "Hemoroid Desteği": media.hemoroid,
};

export const approachMedia: Record<string, MediaAsset> = {
  Hacamat: media.hacamat,
  Sülük: media.suluk,
  Akupunktur: media.akupunktur,
  "Ozon Tedavisi": media.ozon,
  Mezoterapi: media.mezoterapi,
};

export const readingMedia = [
  media.butuncul,
  media.fibromiyalji,
  media.hacamat,
  media.hero,
] as const;
