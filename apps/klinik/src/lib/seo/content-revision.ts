/** Ortak içerik gözden geçirme tarihi (ISO). Sitemap / görünür meta. */
export const CONTENT_REVISION_DATE = "2026-11-24";

export const PRIORITY_SERVICE_SLUGS = [
  "hacamat",
  "akupunktur",
  "fibromiyalji",
  "botoks",
] as const;

export type PriorityServiceSlug = (typeof PRIORITY_SERVICE_SLUGS)[number];

export function isPriorityService(slug: string): slug is PriorityServiceSlug {
  return (PRIORITY_SERVICE_SLUGS as readonly string[]).includes(slug);
}

export function formatRevisionTr(isoDate = CONTENT_REVISION_DATE) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(Date.UTC(y, m - 1, d, 12)));
}

/** Rakip boşluğu / yerel niyet H2’leri — vaat yok, hekim çerçevesi. */
export const priorityAuthorityBlocks: Record<
  PriorityServiceSlug,
  { heading: string; body: string }
> = {
  hacamat: {
    heading: "Yalova’da hacamat hekim değerlendirmesi",
    body: "Yalova Merkez’de hacamat, GETAT mevzuatı kapsamında hekim planıyla ele alınır. Bu sayfa genel bilgilendirmedir; uygunluk, hijyen ve onam yüz yüze görüşmede netleşir. Hastane GETAT birimi ile muayenehane farklı bağlamlardır; ikisi de ‘en iyi’ sıralaması taşımaz.",
  },
  akupunktur: {
    heading: "Yalova’da akupunktur muayenehane çerçevesi",
    body: "Akupunktur, mevcut sağlık takibine eşlik edebilecek tamamlayıcı bir yaklaşımdır. Yalova’daki değerlendirmede önce öykü, ilaçlar ve dışlama ölçütleri konuşulur. Bu metin tanı veya sonuç vaadi içermez.",
  },
  fibromiyalji: {
    heading: "Yalova’da fibromiyalji destek değerlendirmesi",
    body: "Fibromiyalji yakınmalarında uyku, hareket ve yaşam biçimi birlikte okunur. Bütüncül destek, branş takibinin yerine geçmez. Yalova Merkez’deki görüşme bilgilendirme ve uygunluk konuşmasıdır.",
  },
  botoks: {
    heading: "Yalova’da botoks bilgilendirme ve değerlendirme",
    body: "Botulinum toksini uygulamaları kişiye özel anatomi ve beklentiyle konuşulur. Bu sayfa kimler için ele alınabileceğini genel dilde anlatır; fiyat, yorum veya önce-sonra yoktur.",
  },
};
