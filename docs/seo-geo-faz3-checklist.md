# SEO / GEO Faz 3 — İçerik ve otorite

Kod iskeleti: öncelik kümeleri (hacamat / akupunktur / fibromiyalji / botoks), bilimsel kaynak dofollow, görünür gözden geçirme tarihi, çapraz rehber linkleri. Aşağıdakiler **manuel** veya düzenli içerik sprint’idir.

## Kodda tamamlananlar

| Madde | Konum |
| --- | --- |
| Güvenilir host’larda dofollow (`cite` + sıralı liste) | `apps/klinik/.../ScientificSources.tsx` |
| Öncelik H2 + blog rehber/yerel link | `PriorityAuthority.tsx` + `content-revision.ts` |
| “Son gözden geçirme” notu | `ContentRevisionNote.tsx` (`CONTENT_REVISION_DATE`) |
| Hizmet + hibrit sayfalara bağlama | `hizmetler/[slug]` ve `[ilce]` |
| Cluster / pillar / yerel `lastUpdated` → 2026-11-24 | `apps/blog/src/data/authority/*` |

## 1. Öncelik kümesi sprint (Q4)

Her kümede: klinik hizmet sayfası ↔ blog cluster ↔ `yalovada-…-yapan-yerler` üçgeni.

| Küme | Klinik | Bilimsel rehber | Yerel yazı |
| --- | --- | --- | --- |
| Hacamat | `/hizmetler/hacamat` | `hacamat-nedir-bilimsel-perspektif` | `yalovada-hacamat-yapan-yerler` |
| Akupunktur | `/hizmetler/akupunktur` | `akupunktur-hangi-durumlarda-tercih-edilir` | `yalovada-akupunktur-yapan-yerler` |
| Fibromiyalji | `/hizmetler/fibromiyalji` | `fibromiyalji-ile-yasam` | `yalovada-fibromiyalji-tedavisi-yapan-yerler` |
| Botoks | `/hizmetler/botoks` | `botoks-kimler-icin-uygundur` | `yalovada-botoks-yapan-yerler` |

Rakip niyet H2’leri kodda (`priorityAuthorityBlocks`); yeni doorway sayfa açma — mevcut sayfayı güçlendir.

İçerik üretimi: `docs/icerik-takvimi-2027` (8 blog + 4 klinik + 2 niş / ay). Bu PR takvimin tamamını yazmaz.

## 2. Yerel atıf (operasyon)

Yorum / fiyat / önce-sonra / “en iyi” yok.

| Hedef | Not |
| --- | --- |
| İl sağlık / oda / dernek duyurusu | Bilgi sayfası veya etkinlik; hekim adı + NAP |
| Yalova haber | Süreç / bilgilendirme; hasta hikâyesi yok |
| Üç site çapraz | Klinik ↔ blog ↔ niş; `llms.txt` hiyerarşisiyle uyumlu |
| GBP | Faz 1 checklist NAP + hizmet listesi |

Atıf alındığında: URL’yi `sameAs` / iç dokümana kaydet; aylık rapora ekle (`RAPOR.md` §7).

## 3. Kaynak kalitesi (aylık)

1. Öncelik 4 hizmette `ScientificSources` görünür mü (`data-eeat="scientific-sources"`).
2. WHO / NICE / NIH / `saglik.gov.tr` linkleri **dofollow**; diğerleri `nofollow`.
3. Kırık dış URL → `packages/content` kaynak listesini güncelle.
4. Yeni kaynak eklerken vaat / üstünlük dili yok.

## 4. Doğrulama (merge sonrası)

```bash
# Öncelik sayfada otorite + kaynak
curl -sS https://www.uzmdrmuratcokay.com.tr/hizmetler/hacamat | rg -n 'priority-cluster|scientific-sources|Son gözden geçirme'

# Blog tarih sinyali (örnek)
curl -sS https://www.yalovamedikalestetik.com.tr/yazilar/hacamat-nedir-bilimsel-perspektif/ | rg -n '2026|gözden|güncell'
```

Rich Results: `/hizmetler/hacamat` + bir pillar (Faz 1 checklist ile aynı).

## Bilinçli sınır

- 168 parçalık yıllık takvimin tamamı bu PR’da değil.
- Speakable / HowTo yok (tıbbi risk).
- Yerel backlink kodla “üretilmez”; checklist operasyondur.
