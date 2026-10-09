import { contact, doctor, legalNotice, sites } from "@muratcokay/content";

export const site = {
  name: "Yalova Medikal Estetik ve Bütüncül Sağlık Rehberi",
  brandShort: "Yalova Rehberi",
  brandKicker: "Medikal estetik ve bütüncül sağlık",
  heroEyebrow: "Bilimsel bilgilendirme",
  url: sites.blog,
  description:
    "Yalova'da medikal estetik, bütüncül sağlık ve GETAT konularında bilimsel, tarafsız ve genel bilgilendirme içerikleri.",
  navigation: {
    home: "Ana Sayfa",
    guides: "Rehberler",
    articles: "Yazılar",
  },
  labels: {
    aesthetic: "Medikal Estetik",
    holistic: "Bütüncül Sağlık",
    readArticle: "Makaleyi Oku",
    latestArticles: "Bilgilendirme Yazıları",
  },
  legalNotice,
  authorName: doctor.name,
  authorText:
    "Bu makale Uzm. Dr. Yaşar Murat Çokay tarafından yazılmıştır. Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesinden emekli olup, kendi muayenehanesinde medikal estetik ve bütüncül sağlık hizmetleri vermektedir. İçerik bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez.",
  authorProfile: {
    label: "Yalova'da Uzm. Dr. Yaşar Murat Çokay hakkında",
    url: `${sites.klinik}/hakkimda`,
  },
  clinicCta:
    "Bu konuda kliniğimizde uygulanan yaklaşımlar için tıklayın.",
  contact,
  sites,
} as const;
