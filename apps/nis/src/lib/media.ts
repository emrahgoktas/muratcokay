import type { StaticImageData } from "next/image";

import akupunktur from "@/assets/media/yalova-akupunktur-uygulama-alani.jpg";
import butuncul from "@/assets/media/yalova-butuncul-saglik-klinik.jpg";
import fibromiyalji from "@/assets/media/yalova-fibromiyalji-tedavisi-klinik.jpg";
import hacamat from "@/assets/media/yalova-hacamat-uygulamasi-merkez.jpg";
import hero from "@/assets/media/yalova-medikal-estetik-klinik-hero.jpg";
import ozon from "@/assets/media/yalova-ozon-tedavisi-hazirlik.jpg";
import desk from "@/assets/media/uzm-dr-yasar-murat-cokay-portre.jpg";
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
    "Aydınlık klinik karşılama alanı — Yalova Merkez muayenehanesi",
  ),
  desk: asset(
    desk,
    "Değerlendirme masası ve stetoskop — Yalova bütüncül sağlık görüşme ortamı",
  ),
  fibromiyalji: asset(
    fibromiyalji,
    "Sakin muayene odası — fibromiyalji ve yaygın ağrı değerlendirmesi için klinik ortam",
  ),
  hacamat: asset(
    hacamat,
    "Steril uygulama hazırlık alanı — Yalova Merkez GETAT birimi",
  ),
  akupunktur: asset(
    akupunktur,
    "Aydınlık uygulama alanı — akupunktur değerlendirmesi için hazırlanan mekân",
  ),
  butuncul: asset(
    butuncul,
    "Hekim-hasta iletişim ortamı — bütüncül sağlık görüşmesi",
  ),
  ozon: asset(
    ozon,
    "Düzenli tıbbi hazırlık alanı — ozon yaklaşımının kontrollü ortamda ele alındığını göstermek",
  ),
  termal: asset(
    termal,
    "Açık ufuk ve sahil manzarası — Yalova’nın dinlenme coğrafyasını göstermek",
  ),
} as const;

export const situationMedia: Record<string, MediaAsset> = {
  Fibromiyalji: media.fibromiyalji,
  "Kilo Verme Desteği": media.ozon,
  "Kronik Yorgunluk Sendromu": media.akupunktur,
  "Bel Fıtıkları": media.desk,
  "Diyabet Yönetimi Desteği": media.butuncul,
  "Hipertansiyon Desteği": media.hero,
  "Varis Desteği": media.hacamat,
  "Hemoroid Desteği": media.hacamat,
};

export const approachMedia: Record<string, MediaAsset> = {
  Hacamat: media.hacamat,
  Sülük: media.butuncul,
  Akupunktur: media.akupunktur,
  "Ozon Tedavisi": media.ozon,
  Mezoterapi: media.hero,
};

export const readingMedia = [
  media.termal,
  media.fibromiyalji,
  media.hacamat,
  media.hero,
] as const;
