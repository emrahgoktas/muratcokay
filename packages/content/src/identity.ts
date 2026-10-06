import { clinicAddress } from "./catalog";

export const doctor = {
  name: "Uzm. Dr. Yaşar Murat Çokay",
  jobTitle: "Medikal Estetik ve GETAT Uzmanı",
  tagline: "Medikal Estetik & Bütüncül Sağlık",
  biography:
    "Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesinden emekli olup, kendi muayenehanemde GETAT Ünitesi kurdum.",
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
