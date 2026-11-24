# SEO / GEO Faz 4 — E-E-A-T tamamlama + sitemap hijyeni

## Karar

Faz 0–3 sonrası kodda kalan yüksek kaldıraçlı boşluklar: kırık image-sitemap ilanı, görünür hekim kutusu, MedicalWebPage tarih sinyali, sitemap `lastModified`, niş görsel sitemap.

## Kod

- `PhysicianCard` — hizmet + hibrit sayfalar (görünür hekim E-E-A-T)
- `MedicalWebPage` + `dateModified` / `lastReviewed` / `reviewedBy` hizmet grafında
- Klinik sitemap `lastModified` ← `CONTENT_REVISION_DATE`
- Klinik `robots` + middleware: `/sitemap.xml` **ve** mevcut `/sitemap-images.xml` rotası korunur
- Niş sitemap: ana sayfa `images` + `lastModified`

## Ops (önceki checklist’ler geçerli)

- `docs/seo-geo-faz1-checklist.md` — GSC / GA env / GBP
- `docs/seo-geo-faz3-checklist.md` — yerel atıf + Q4 içerik sprint

## Bilinçli sınır

Speakable / HowTo yok. Yıllık 8+4+2 takvim üretimi ayrı iş.
