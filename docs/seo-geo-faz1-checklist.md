# SEO / GEO Faz 1 — Ölçüm ve yerel (operasyon)

Kod iskeleti: blog/niş GA4+GTM bileşenleri, üç sitede `phone_click` / `whatsapp_click` / `contact_click` olayları. Aşağıdakiler **manuel** tamamlanır.

## 1. GA4 / GTM (Vercel env)

| Site | Env | Not |
| --- | --- | --- |
| Klinik | `NEXT_PUBLIC_GA_ID` | Canlıda `G-5K583PP0W4` (mevcut) |
| Klinik | `NEXT_PUBLIC_GTM_ID` | İsteğe bağlı `GTM-…` |
| Blog | `PUBLIC_GA_ID` | Vercel blog projesine ekle |
| Blog | `PUBLIC_GTM_ID` | İsteğe bağlı |
| Niş | `NEXT_PUBLIC_GA_ID` | Vercel nis projesine ekle |
| Niş | `NEXT_PUBLIC_GTM_ID` | İsteğe bağlı |

Öneri: tek GA4 property, üç web stream (klinik / blog / niş). Kimlikler boşken tracking yüklenmez (`.cursorrules`).

GA4 → Yönetici → Özel tanımlar / dönüşümler: `phone_click`, `whatsapp_click`, `contact_click` işaretle.

Doğrulama: canlıda DevTools → Network `collect?` / GA DebugView.

## 2. Google Search Console (üç property)

1. `https://www.uzmdrmuratcokay.com.tr` — URL öneki veya alan adı.
2. `https://www.yalovamedikalestetik.com.tr`
3. `https://www.yalovabutunculsaglik.com.tr`

Sitemap gönder:

- Klinik: `/sitemap.xml` + `/sitemap-images.xml`
- Blog: `/sitemap-index.xml` + `/sitemap-images.xml`
- Niş: `/sitemap.xml`

Doğrulama meta zaten sayfalarda var (klinik / blog / niş). İlk 7 gün: Kapsam + Sayfa deneyimi.

## 3. Google Business Profile (NAP)

Tek satır (sitelerle birebir):

`Fevzi Çakmak Mah. Bora Sk. No:17/A Merkez YALOVA`

- Eski “No:17 D:b” varsa düzelt.
- Kategori: hekim / medikal estetik / GETAT uyumlu birincil + ikincil.
- Hizmet listesi: sitedeki 20 hizmetle uyumlu (fiyat yok).
- Fotoğraf: onamlı mekân / süreç görseli; önce-sonra yok.
- Website: klinik URL; blog/niş çapraz link GBP açıklamasında kısa.

## 4. Rich Results (örnek URL)

[Rich Results Test](https://search.google.com/test/rich-results):

1. Klinik hizmet: `/hizmetler/hacamat` (FAQ + MedicalProcedure)
2. Blog pillar: `/rehberler/getat/`
3. Niş ana sayfa: `/` (MedicalBusiness + FAQ)

Hata varsa Faz 0 şema PR’si ile birlikte düzelt.

## 5. Aylık rapor (ilk ay)

Şablon: `docs/seo-geo-audit-yayin/RAPOR.md` §7.

Minimum ilk doldurma:

1. GA4 organik oturum (üç stream)
2. GSC tıklama / gösterim / konum / CTR
3. Top 10 URL
4. `phone_click` + `whatsapp_click` sayıları
5. Kapsam dışı / 404
6. Yasaklı dil taraması (yeni içerik)
7. Aksiyon 5 madde

## 6. Tamamlandı saymak için

- [ ] Blog + niş GA ID Vercel’de dolu ve DebugView’da hit
- [ ] Üç GSC property + sitemap “Başarılı”
- [ ] GBP NAP = `No:17/A`
- [ ] Üç Rich Results URL yeşil veya yalnızca uyarı
- [ ] İlk aylık rapor notu kaydı
