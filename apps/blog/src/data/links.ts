import { sites } from "@muratcokay/content";
import { localPlaceClinicLinks } from "./authority/yalova-hizmet-yerleri";

export const pillarClinicCtas: Record<
  string,
  { url: string; label: string }
> = {
  "medikal-estetik": {
    url: `${sites.klinik}/hizmetler`,
    label: "Yalova medikal estetik yaklaşımları hakkında bilgi",
  },
  "butuncul-saglik": {
    url: `${sites.klinik}/hizmetler`,
    label: "Yalova bütüncül sağlık yaklaşımları hakkında bilgi",
  },
  getat: {
    url: `${sites.klinik}/hizmetler`,
    label: "Yalova GETAT yaklaşımları hakkında bilgi",
  },
  "yalova-saglik": {
    url: `${sites.klinik}/iletisim`,
    label: "Yalova Merkez klinik iletişim bilgileri",
  },
};

export const clinicLinks: Record<
  string,
  { url: string; anchor: string }
> = {
  "sivi-yuz-germe-nedir": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/sivi-yuz-germe",
    anchor: "Yalova sıvı yüz germe yaklaşımı hakkında bilgi",
  },
  "sac-dokulmesinde-mezoterapi-ve-prp": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/sac-dokulmesi-tedavisi",
    anchor: "Yalova saç dökülmesi destek yaklaşımları",
  },
  "yuzde-leke-ve-matlik-icin-bilimsel-yaklasimlar": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/yuzde-matlik-kirisiklik-leke-tedavisi",
    anchor: "Yalova cilt lekesi ve matlık yaklaşımları",
  },
  "dogal-gorunumlu-dolgu-uygulamalari": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/dolgu",
    anchor: "Yalova dolgu uygulaması hakkında bilgi",
  },
  "fibromiyalji-ile-yasam": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/fibromiyalji",
    anchor: "Yalova fibromiyalji bütüncül destek yaklaşımı",
  },
  "kronik-yorgunluk-sendromunda-akupunktur": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/akupunktur",
    anchor: "Yalova akupunktur yaklaşımı hakkında bilgi",
  },
  "bel-fitiklarinda-getat-yaklasimlari": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/bel-fitiklari-omurga-sagligi",
    anchor: "Yalova bel ve omurga sağlığı destek yaklaşımı",
  },
  "diyabet-ve-hipertansiyonda-butuncul-destek": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/diyabet-yonetimi-destegi",
    anchor: "Yalova diyabet yönetimi desteği hakkında bilgi",
  },
  "varis-hemoroid-suluk-tedavisi-bilimsel-perspektif": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/suluk-tedavisi",
    anchor: "Yalova tıbbi sülük uygulaması hakkında bilgi",
  },
  "kilo-verme-surecinde-ozon-ve-hacamat-destegi": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/kilo-verme-destegi",
    anchor: "Yalova kilo verme desteği ve bütüncül yaklaşım",
  },
  "yalovada-butuncul-saglik-turizmi": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler",
    anchor: "Yalova bütüncül sağlık uygulamaları",
  },
  "hacamat-nedir-bilimsel-perspektif": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/hacamat",
    anchor: "Yalova hacamat uygulaması hakkında bilgi",
  },
  "sivi-yuz-germe-hacim-vermeden-sikilasma": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/sivi-yuz-germe",
    anchor: "Yalova sıvı yüz germe yaklaşımı hakkında bilgi",
  },
  "sac-dokulmesinde-mezoterapi-prp": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/sac-dokulmesi-tedavisi",
    anchor: "Yalova saç dökülmesi destek yaklaşımları",
  },
  "yuz-lekeleri-matlik-bilimsel-yaklasimlar": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/yuzde-matlik-kirisiklik-leke-tedavisi",
    anchor: "Yalova cilt lekesi ve matlık yaklaşımları",
  },
  "botoks-kimler-icin-uygundur": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/botoks",
    anchor: "Yalova botoks uygulaması hakkında bilgi",
  },
  "kronik-yorgunluk-nedenleri-yonetimi": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/kronik-yorgunluk-sendromu",
    anchor: "Yalova kronik yorgunluk yönetimi yaklaşımı",
  },
  "bel-fitiklarinda-tamamlayici-tip": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/bel-fitiklari-omurga-sagligi",
    anchor: "Yalova bel ve omurga sağlığı destek yaklaşımı",
  },
  "diyabet-hipertansiyon-butuncul-destek": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/diyabet-yonetimi-destegi",
    anchor: "Yalova diyabet ve hipertansiyon yönetimi desteği",
  },
  "varis-hemoroid-suluk-tedavisinin-yeri": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/suluk-tedavisi",
    anchor: "Yalova tıbbi sülük yaklaşımı hakkında bilgi",
  },
  "kilo-yonetiminde-ozon-hacamat-destegi": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/kilo-verme-destegi",
    anchor: "Yalova kilo yönetimi desteği hakkında bilgi",
  },
  "akupunktur-hangi-durumlarda-tercih-edilir": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/akupunktur",
    anchor: "Yalova akupunktur yaklaşımı hakkında bilgi",
  },
  "suluk-tedavisi-modern-yorumu": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/suluk-tedavisi",
    anchor: "Yalova tıbbi sülük uygulaması hakkında bilgi",
  },
  "ozon-tedavisinin-kullanim-alanlari": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler/ozon-tedavisi",
    anchor: "Yalova ozon uygulaması hakkında bilgi",
  },
  "yalovada-saglik-turizmi": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler",
    anchor: "Yalova medikal estetik ve bütüncül sağlık hizmetleri",
  },
  "yalovadaki-saglik-kuruluslari-rehberi": {
    url: "https://uzmdrmuratcokay.com.tr/iletisim",
    anchor: "Yalova Merkez klinik iletişim bilgileri",
  },
  "yalovanin-termal-sulari-ve-saglik": {
    url: "https://uzmdrmuratcokay.com.tr/hizmetler",
    anchor: "Yalova bütüncül sağlık yaklaşımları",
  },
  "yalovada-butuncul-saglik-adresleri": {
    url: "https://uzmdrmuratcokay.com.tr/iletisim",
    anchor: "Yalova Merkez bütüncül sağlık kliniği iletişim bilgileri",
  },
  ...localPlaceClinicLinks,
};
