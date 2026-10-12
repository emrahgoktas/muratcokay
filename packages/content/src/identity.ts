import { clinicAddress } from "./catalog";

export const doctor = {
  name: "Uzm. Dr. Yaşar Murat Çokay",
  jobTitle: "Medikal Estetik ve GETAT Uzmanı",
  tagline: "Medikal Estetik & Bütüncül Sağlık",
  biography:
    "Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesinden emekli olduktan sonra çalışmalarını kendi muayenehanesinde sürdürmektedir.",
  biographyParagraphs: [
    "Uzm. Dr. Yaşar Murat Çokay, yirmi üç yılı aşkın mesleki deneyime sahip bir iş yeri hekimidir. İş yeri hekimliği birikimini, medikal estetik ve bütüncül sağlık yaklaşımıyla birlikte ele alır. Acil durum ve afet yönetimi alanındaki akademik altyapısının yanında, 2004 yılından itibaren geleneksel ve tamamlayıcı tıp uygulamalarına yönelmiştir.",
    "Hacamat, kupa tedavisi, sülük, akupunktur, ozon ve mezoterapi başlıklarındaki eğitimlerini tamamlamış; Sağlık Bakanlığı onaylı sertifikalarını Medipol Üniversitesi’nden almıştır. Yalova Devlet Hastanesi ve Çınarcık Devlet Hastanesi’nde bu başlıklarda klinik çalışması yürütmüş; aynı kurumlarda başhekim, başhekim yardımcısı ve servis sorumlusu olarak idari ve klinik görevler üstlenmiştir.",
    "Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesindeki görevinden emekli olduktan sonra çalışmalarını kendi muayenehanesinde sürdürmüştür. 2020 yılında Yalova Merkez’de muayenehanesini kurarak bireysel değerlendirme ve bütüncül sağlık yaklaşımını bu adreste devam ettirmektedir.",
    "Medikal estetik alanında dolgu, botoks, ip askı ve örümcek ağı uygulamalarına ilişkin sertifikaları vardır. Muayenehanesinde BBL lazer, Endolift, CO2 fraksiyonel lazer, karbon peeling, dövme silme, altın iğne ve epilasyon lazer sistemleriyle çalışır. Saç ekimi uygulamalarını anlaşmalı özel hastane ortamında yürütür.",
  ],
} as const;

export const contact = {
  address: clinicAddress,
  phone: {
    display: "0505 244 51 23",
    href: "tel:+905052445123",
  },
  whatsapp: {
    href: "https://wa.me/905052445123",
  },
  email: {
    display: "muryas2@mynet.com",
    href: "mailto:muryas2@mynet.com",
  },
  workingHours: "Randevu ile hizmet verilmektedir.",
} as const;

export const sites = {
  klinik: "https://uzmdrmuratcokay.com.tr",
  blog: "https://yalovamedikalestetik.com.tr",
  nis: "https://yalovabutunculsaglik.com.tr",
} as const;

export const legalNotice =
  "Bu site bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez." as const;
