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
  hero: asset(hero, "Aydınlık klinik karşılama alanı — Yalova Merkez muayenehanesi"),
  desk: asset(
    desk,
    "Değerlendirme masası ve stetoskop — Yalova bütüncül sağlık görüşme ortamı",
  ),
  fibromiyalji: asset(
    stillFibromiyalji,
    "Hassas nokta şeması ve ısı yastığı — fibromiyalji değerlendirmesi natürmortu",
  ),
  hacamat: asset(stillHacamat, "Cam kupa seti — hacamat hazırlık natürmortu"),
  akupunktur: asset(
    stillAkupunktur,
    "Keçe yastık ve kapalı iğne paketleri — akupunktur natürmortu",
  ),
  butuncul: asset(
    roomButuncul,
    "Hekim-hasta iletişim ortamı — bütüncül sağlık görüşmesi",
  ),
  ozon: asset(stillOzon, "Ozon jeneratörü ve hortum — ozon hazırlık natürmortu"),
  termal: asset(
    termal,
    "Açık ufuk ve sahil manzarası — Yalova’nın dinlenme coğrafyası",
  ),
  kilo: asset(stillKilo, "Dijital tartı ve mezura — kilo yönetimi natürmortu"),
  yorgunluk: asset(
    stillYorgunluk,
    "Gece saati ve uyku bandı — kronik yorgunluk natürmortu",
  ),
  bel: asset(stillBel, "Omurga modeli ve defter — bel fıtığı natürmortu"),
  diyabet: asset(
    stillDiyabet,
    "Ölçüm cihazı ve elma — diyabet desteği natürmortu",
  ),
  hipertansiyon: asset(
    stillHipertansiyon,
    "Tansiyon manşonu ve defter — hipertansiyon natürmortu",
  ),
  varis: asset(stillVaris, "Kompresyon çorabı ve Doppler — varis desteği natürmortu"),
  hemoroid: asset(
    stillHemoroid,
    "Oturma banyosu ve muayene lambası — hemoroid değerlendirmesi natürmortu",
  ),
  suluk: asset(stillSuluk, "Kehr tabağı ve forceps — sülük uygulaması natürmortu"),
  mezoterapi: asset(
    stillMezoterapi,
    "Küçük flakonlar — mezoterapi hazırlık natürmortu",
  ),
  roomAkupunktur: asset(
    roomAkupunktur,
    "Aydınlık uygulama alanı — akupunktur değerlendirmesi için hazırlanan mekân",
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
