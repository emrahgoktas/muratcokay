import { sites } from "@muratcokay/content";

/**
 * Niş site hizmet sayfaları — özgün bütüncül odak metinleri.
 * Klinik ile aynı hizmet slug’larında canonical klinik URL’sine işaret eder.
 */
export const nisServicePages = [
  {
    slug: "fibromiyalji",
    title: "Yalova’da Fibromiyalji Destek Değerlendirmesi",
    description:
      "Yalova’da fibromiyalji yakınmalarında uyku, hareket ve yaşam biçimini birlikte ele alan bilgilendirme. Tanı veya sonuç vaadi yoktur.",
    summary:
      "Fibromiyalji konuşması; yaygın ağrı, uyku bölünmesi ve günlük işlevi birlikte okumayı gerektirir. Bu sayfa, Yalova Merkez’de bütüncül değerlendirme çerçevesini özetler.",
    sections: [
      {
        heading: "Ne konuşulur?",
        body: "Öykü, mevcut ilaç listesi, uyku düzeni, hareket kapasitesi ve tetkik geçmişi birlikte incelenir. Amaç, kişiye özel tanı koymak değil; hangi destek seçeneklerinin güvenle konuşulabileceğini netleştirmektir.",
      },
      {
        heading: "Yaklaşımın sınırı",
        body: "Bütüncül destek, mevcut tıbbi takibin yerine geçmez. Uygunluk, yüz yüze hekim değerlendirmesi sonrasında belirlenir; ‘yok eder’ veya ‘kökünden çözer’ ifadeleri kullanılmaz.",
      },
      {
        heading: "Randevu öncesi",
        body: "Kullandığınız ilaçlar, önceki tetkikler ve yakınmalarınızın zaman çizelgesi görüşmeyi hızlandırır. Acil veya ilerleyici nörolojik bulgularda öncelik ilgili uzmanlıktadır.",
      },
    ],
    klinikPath: "/hizmetler/fibromiyalji",
    canonicalToKlinik: true,
  },
  {
    slug: "kronik-yorgunluk",
    title: "Kronik Yorgunluk İçin Bütüncül Bilgilendirme",
    description:
      "Uzun süren yorgunluk ve enerji düşüklüğünde Yalova’da değerlendirme çerçevesi. Bilgilendirme amaçlıdır; tanı yerine geçmez.",
    summary:
      "Kronik yorgunluk ifadesi birçok nedeni kapsar. Bu sayfa, Yalova’daki okura neden ayrımı yapılmadan destek konuşulmaması gerektiğini anlatır.",
    sections: [
      {
        heading: "Değerlendirme çerçevesi",
        body: "Uyku, demir ve tiroit gibi sık bakılan başlıklar, yaşam temposu ve mevcut hastalıklar birlikte ele alınır. Her yorgunluk aynı yaklaşımı gerektirmez.",
      },
      {
        heading: "Destek seçenekleri",
        body: "Akupunktur veya diğer GETAT başlıkları ancak uygunluk ve güvenlik konuşulduktan sonra gündeme gelir. İlk adım her zaman nedensel ayrıştırmadır.",
      },
      {
        heading: "Ne beklenmez?",
        body: "Tek seanslı ‘bitirme’ vaadi yoktur. Planlama; izlem, sınırlar ve gerekirse yönlendirmeyi içerir.",
      },
    ],
    klinikPath: "/hizmetler/kronik-yorgunluk-sendromu",
    canonicalToKlinik: true,
  },
  {
    slug: "kilo-yonetimi",
    title: "Yalova’da Kilo Yönetimi Destek Bilgilendirmesi",
    description:
      "Beslenme, hareket ve sağlık geçmişini birlikte ele alan kilo yönetimi bilgilendirmesi. Sonuç garantisi yoktur.",
    summary:
      "Kilo yönetimi; kısa vadeli vaatlerden çok sürdürülebilir alışkanlık ve tıbbi uygunluk konuşmasıdır. Yalova Merkez’de bu çerçeve bilgilendirme dilinde anlatılır.",
    sections: [
      {
        heading: "Ne değerlendirilir?",
        body: "Beslenme düzeni, hareket kapasitesi, uyku, ilaçlar ve metabolik öykü birlikte okunur. Ozon veya hacamat gibi seçenekler ancak bu zeminde konuşulabilir.",
      },
      {
        heading: "Dil ve sınır",
        body: "‘Hızlı incelme’ veya ‘garantili kilo kaybı’ ifadeleri kullanılmaz. Destek, mevcut tıbbi takibin tamamlayıcısı olarak ele alınır.",
      },
      {
        heading: "İzlem",
        body: "Ölçüm aralıkları, yan etki izlemi ve gerekirse diyetisyen / ilgili uzman yönlendirmesi planın parçası olabilir.",
      },
    ],
    klinikPath: "/hizmetler/kilo-verme-destegi",
    canonicalToKlinik: true,
  },
  {
    slug: "hacamat-bilgilendirme",
    title: "Hacamat: Yalova’da Bilgilendirme Çerçevesi",
    description:
      "GETAT mevzuatı çerçevesinde hacamat bilgilendirmesi. Uygunluk hekim değerlendirmesiyle belirlenir.",
    summary:
      "Hacamat, Sağlık Bakanlığı GETAT düzenlemesi altında hekim tarafından planlanan bir uygulamadır. Bu sayfa beklenti yönetimini ve güvenlik sınırını özetler.",
    sections: [
      {
        heading: "Yasal çerçeve",
        body: "Uygulama yetkisi, steril koşullar ve bilgilendirilmiş onam mevzuata bağlıdır. Bu metin genel bilgilendirmedir; kişiye özel uygunluk taşımaz.",
      },
      {
        heading: "Kimlerde ertelenir?",
        body: "Kanama riski, enfeksiyon, gebelik ve bazı ilaç kullanımlarında uygulama ertelenebilir veya yapılmaz. Karar yüz yüze değerlendirmeye aittir.",
      },
      {
        heading: "Beklenti",
        body: "‘Toksin temizler’ veya ‘hastalığı yok eder’ iddiaları bilimsel bilgilendirme diline uymaz. Destek ve değerlendirme düzeyinde konuşulur.",
      },
    ],
    klinikPath: "/hizmetler/hacamat",
    canonicalToKlinik: true,
  },
] as const;

export type NisServicePage = (typeof nisServicePages)[number];

export function getNisService(slug: string) {
  return nisServicePages.find((page) => page.slug === slug);
}

export function klinikCanonical(path: string) {
  return new URL(path, sites.klinik).toString();
}
