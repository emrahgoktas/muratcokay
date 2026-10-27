import type { StaticImageData } from "next/image";

import endoliftCihaz from "@/assets/media/klinik-gercek/yalova-endolift-lazer-cihazi.webp";
import hasOzon from "@/assets/media/klinik-gercek/yalova-has-ozon-cihazi.webp";
import karbonPeeling from "@/assets/media/klinik-gercek/yalova-karbon-peeling-lazer-uygulamasi.webp";
import icMekan from "@/assets/media/klinik-gercek/yalova-klinik-ic-mekan.webp";
import lazerSonrasi from "@/assets/media/klinik-gercek/yalova-lazer-sonrasi-yuz-bakimi.webp";
import tabela from "@/assets/media/klinik-gercek/yalova-uzm-dr-murat-cokay-klinik-tabelasi.webp";
import muayeneMasasi from "@/assets/media/klinik-gercek/yalova-uzm-dr-murat-cokay-muayene-masasi.webp";

/** Uzm. Dr. Yaşar Murat Çokay muayenehanesinde çekilmiş gerçek fotoğraf ve videolar. */
export type ClinicPhoto = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export type ClinicVideo = {
  src: string;
  poster: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

export const clinicPhotos = {
  karbonPeeling: {
    src: karbonPeeling,
    alt: "Uzm. Dr. Yaşar Murat Çokay'ın Yalova muayenehanesinde hastaya karbon peeling lazer uygulaması yapması",
    caption: "Karbon peeling / lazer uygulaması",
  },
  lazerSonrasi: {
    src: lazerSonrasi,
    alt: "Lazer uygulaması öncesi hastanın yüz bölgesinin hekim tarafından hazırlanması - Yalova muayenehanesi",
    caption: "Uygulama öncesi hazırlık",
  },
  endoliftCihaz: {
    src: endoliftCihaz,
    alt: "Uzm. Dr. Yaşar Murat Çokay'ın Endolift subdermal lazer cihazını hazırlaması - Yalova",
    caption: "Endolift (subdermal lazer) cihazı",
  },
  hasOzon: {
    src: hasOzon,
    alt: "Uzm. Dr. Yaşar Murat Çokay ve muayenehanedeki HAS ozon tedavisi cihazı - Yalova",
    caption: "Muayenehanemizdeki ozon cihazı",
  },
  icMekan: {
    src: icMekan,
    alt: "Uzm. Dr. Yaşar Murat Çokay'ın Yalova Merkez muayenehanesinin aydınlık iç mekânı ve çalışma masası",
    caption: "Muayenehane iç mekânı",
  },
  muayeneMasasi: {
    src: muayeneMasasi,
    alt: "Uzm. Dr. Yaşar Murat Çokay muayene masasında - Yalova Merkez muayenehanesi",
    caption: "Görüşme ve muayene masası",
  },
  tabela: {
    src: tabela,
    alt: "Uzm. Dr. Yaşar Murat Çokay muayenehane tabelası önünde - Yalova Merkez",
    caption: "Muayenehane girişi",
  },
} satisfies Record<string, ClinicPhoto>;

export const clinicVideos = {
  endolift: {
    src: "/media/video/yalova-endolift-subdermal-lazer.mp4",
    poster: "/media/video/yalova-endolift-subdermal-lazer-poster.webp",
    title: "Endolift (subdermal lazer) uygulamasından kısa kesit",
    description:
      "Muayenehanemizde yapılan bir Endolift uygulamasından birkaç saniyelik görüntü. Video sessizdir ve yalnızca oynat düğmesine basıldığında başlar.",
    width: 404,
    height: 720,
  },
  klinikTuru: {
    src: "/media/video/yalova-klinik-tanitim-turu.mp4",
    poster: "/media/video/yalova-klinik-tanitim-turu-poster.webp",
    title: "Muayenehane tanıtım turu",
    description:
      "Yalova Merkez muayenehanemizin koridoru, uygulama odaları ve ozon cihazından kısa bir tur. Video sessizdir ve yalnızca oynat düğmesine basıldığında başlar.",
    width: 848,
    height: 474,
  },
} satisfies Record<string, ClinicVideo>;

type ServiceClinicMedia = {
  title: string;
  description: string;
  photos: ClinicPhoto[];
  video?: ClinicVideo;
};

/** Hizmet sayfalarına eklenen gerçek klinik görselleri (yalnızca eşleşen sayfalar). */
export const serviceClinicMedia: Record<string, ServiceClinicMedia> = {
  lazer: {
    title: "Muayenehanemizden lazer uygulamaları",
    description:
      "Karbon peeling ve Endolift (subdermal lazer) uygulamalarından muayenehanemizde çekilmiş gerçek görüntüler.",
    photos: [
      clinicPhotos.karbonPeeling,
      clinicPhotos.lazerSonrasi,
      clinicPhotos.endoliftCihaz,
    ],
    video: clinicVideos.endolift,
  },
  "ozon-tedavisi": {
    title: "Muayenehanemizdeki ozon cihazı",
    description:
      "Ozon uygulamalarında kullanılan cihazımız; uygunluk ve süreç hekim değerlendirmesiyle belirlenir.",
    photos: [clinicPhotos.hasOzon],
  },
};
