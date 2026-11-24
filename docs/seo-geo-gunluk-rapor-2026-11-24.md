# SEO / GEO — Günlük rapor (24 Kasım 2026, Europe/Istanbul)

Kapsam: üç site (klinik / blog / niş). Yasal çerçeve korundu: fiyat, önce-sonra, hasta yorumu, üstünlük iddiası yok.

## Özet karar

Teknik SEO + GEO + E-E-A-T iskeleti **Faz 0→4** kod PRlarıyla tamamlandı. Bundan sonra asıl kaldıraç **manuel ops** (GSC, GA env, GBP, yerel atıf) ve **içerik takvimi** (`docs/icerik-takvimi-2027`).

## PR stack

| Faz | PR | Branch | Base |
| --- | --- | --- | --- |
| 0 | [#6](https://github.com/emrahgoktas/muratcokay/pull/6) | `cursor/seo-geo-faz0-fdd1` | `cursor/topic-images-motion-fdd1` |
| 1 | [#7](https://github.com/emrahgoktas/muratcokay/pull/7) | `cursor/seo-geo-faz1-fdd1` | faz0 |
| 2 | [#9](https://github.com/emrahgoktas/muratcokay/pull/9) | `cursor/seo-geo-faz2-fdd1` | faz1 |
| 3 | [#10](https://github.com/emrahgoktas/muratcokay/pull/10) | `cursor/seo-geo-faz3-fdd1` | faz2 |
| 4 | (bu tur) | `cursor/seo-geo-faz4-fdd1` | faz3 |

Merge sırası: 0 → 1 → 2 → 3 → 4 (stack üstten alta değil; tabandan yukarı).

---

## Faz 0 — Hızlı teknik düzeltmeler

**Amaç:** Niş şema/docs hizası, uydu sayfa politikası, trust sayfaları, Organization zenginliği.

**Kod (öne çıkan):**

- Niş: FAQ + MedicalProcedure + Person/Image; `og:image` / hreflang; `/hizmetler/*` noindex + sitemap sadeleştirme
- Üç site: `/gizlilik` (+ `/privacy` / `/about` / `/contact` alias), `llms.txt` when-to-use / trust
- Organization / MedicalBusiness: `contactPoint`, ilgili sameAs hazırlığı
- İç link / eski blog slug temizlikleri; diyabet legacy title/noindex hattı

**Doküman:** `docs/schema-haritasi.md`, `docs/seo-geo-audit-yayin/RAPOR.md` güncellemesi

---

## Faz 1 — Ölçüm iskeleti

**Amaç:** GA4/GTM ve dönüşüm olayları; ops checklist.

**Kod:**

- `packages/seo` analytics yardımcıları
- Blog + niş GA/GTM bileşenleri (env boşken yüklenmez)
- Üç sitede `phone_click` / `whatsapp_click` / `contact_click`

**Ops checklist:** `docs/seo-geo-faz1-checklist.md`

- GSC üç property + sitemap
- Blog/niş Vercel `PUBLIC_GA_ID` / `NEXT_PUBLIC_GA_ID`
- GBP NAP = `Fevzi Çakmak Mah. Bora Sk. No:17/A Merkez YALOVA`
- Rich Results örnek URL’ler
- Aylık rapor şablonu (`RAPOR.md` §7)

---

## Faz 2 — GEO üst katman

**Amaç:** Agent / Is Agentic skoruna yönelik markdown + alıntı.

**Kod:**

- `Accept: text/markdown` müzakeresi (klinik/niş/blog middleware)
- Agent-friendly 404 markdown
- `/llms-full.txt` + `llms.txt` pointer
- Ana sayfa `data-geo-cite` özet (`GeoCiteSummary`)
- Organization / MedicalBusiness `alternateName` + `knowsAbout`

**Doküman:** `docs/seo-geo-faz2.md`

**Bilinçli sınır:** Speakable / HowTo eklenmedi (tıbbi risk).

---

## Faz 3 — İçerik / otorite (E-E-A-T)

**Amaç:** Öncelik kümeleri + bilimsel kaynak UX + taze tarih.

**Kod:**

- Bilimsel kaynak: güvenilir host dofollow, `cite`, sıralı liste
- `PriorityAuthority` — hacamat / akupunktur / fibromiyalji / botoks
- `ContentRevisionNote` + `CONTENT_REVISION_DATE` = 2026-11-24
- Blog authority `lastUpdated` öncelik cluster/pillar/yerel

**Ops checklist:** `docs/seo-geo-faz3-checklist.md` (yerel atıf, kaynak denetimi, Q4 sprint)

**Doküman:** `docs/seo-geo-faz3.md`

---

## Faz 4 — E-E-A-T tamamlama + sitemap hijyeni

**Karar gerekçesi:** 0–3 sonrası audit’te kalan kod boşlukları ops’tan önce kapatılmalıydı.

**Kod:**

1. Klinik `robots` / middleware: kırık `/sitemap-images.xml` ilanı kaldırıldı (görseller `sitemap.xml` içinde)
2. `PhysicianCard` — görünür hekim E-E-A-T (hizmet + hibrit)
3. `MedicalWebPage` + `dateModified` / `lastReviewed` / `reviewedBy` hizmet JSON-LD
4. Klinik sitemap `lastModified` ← `CONTENT_REVISION_DATE`
5. Niş sitemap: ana sayfa `images` + `lastModified`

**Doküman:** `docs/seo-geo-faz4.md`

---

## Bugün bilinçli yapılmayanlar

| Madde | Neden |
| --- | --- |
| Speakable / HowTo şeması | Tıbbi iletişim riski |
| Tam 2027 içerik üretimi (8+4+2) | Ayrı içerik sprint; checklist’te |
| GSC / GA env / GBP NAP | Hesap/erişim gerektiren manuel ops |
| Yerel backlink (oda, haber) | Operasyon; kod üretmez |
| Fiyat / yorum / önce-sonra | Yasal yasak |

---

## Merge sonrası doğrulama (kısa)

```bash
# Klinik: kaynak + hekim + MedicalWebPage sinyali
curl -sS https://www.uzmdrmuratcokay.com.tr/hizmetler/hacamat \
  | rg -n 'scientific-sources|physician|MedicalWebPage|Son gözden geçirme'

# Sitemap tek ve geçerli
curl -sSI https://www.uzmdrmuratcokay.com.tr/robots.txt | head
curl -sS https://www.uzmdrmuratcokay.com.tr/sitemap.xml | head
# /sitemap-images.xml beklenen: 404 (artık ilan edilmiyor)

# Markdown müzakeresi (Faz 2)
curl -sS -L -i -H 'Accept: text/markdown' https://www.uzmdrmuratcokay.com.tr/ | head
```

---

## Sonraki iş sırası (öncelik)

1. Stack’i merge et (0→4); Vercel preview’ları yeşil olsun.
2. Faz 1 checklist: GSC + blog/niş GA env + GBP NAP.
3. Faz 3 checklist: ilk yerel atıf + öncelik küme derinliği.
4. `docs/icerik-takvimi-2027` — Ocak 2027 fibromiyalji temasıyla üretim (veya Q4 2026 köprü içerik).

## İlgili dosya indeksi

- `docs/seo-geo-faz1-checklist.md`
- `docs/seo-geo-faz2.md`
- `docs/seo-geo-faz3.md` / `docs/seo-geo-faz3-checklist.md`
- `docs/seo-geo-faz4.md`
- `docs/seo-geo-audit-yayin/RAPOR.md`
- `docs/icerik-takvimi-2027/`
