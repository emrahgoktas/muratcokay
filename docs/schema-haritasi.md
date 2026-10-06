# Schema.org sayfa haritası

Her sayfada tek bir JSON-LD `@graph` bloğu vardır. Düğümler `@id` ile çapraz bağlanır (`Physician` → `author` / `provider` / `employee`). Puan, yorum, fiyat ve sonuç vaadi yoktur.

Yardımcılar: `src/lib/seo/schema.ts`

- `generatePhysicianSchema()`
- `generateMedicalProcedureSchema(hizmet)`
- `generateFAQSchema(sorular)`
- `generateBreadcrumbSchema(yol)`
- `generateArticleSchema(yazi)`

Doğrulama: sayfa kaynağındaki `application/ld+json` bloğunu [validator.schema.org](https://validator.schema.org) alanına yapıştırın.

## 1. Ana site — uzmdrmuratcokay.com.tr

| Sayfa | Physician | MedicalClinic | MedicalProcedure | FAQPage | BreadcrumbList | WebSite + SearchAction | LocalBusiness | Person | ImageObject | ItemList |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` Ana sayfa | Evet | Evet | — | — | — | Evet | — | — | Evet | — |
| `/hakkimda` | Evet | — | — | — | Evet | — | — | Evet | Evet | — |
| `/iletisim` | Evet | Evet | — | — | Evet | — | — | — | Evet | — |
| `/hizmetler` | Evet | — | — | — | Evet | — | — | — | — | Evet |
| `/hizmetler/{slug}` (20 hizmet) | Evet | — | Evet | Evet | Evet | — | — | — | Evet | — |
| `/hizmetler/{slug}/{ilce}` (hibrit) | Evet | — | Evet | Evet | Evet | — | Evet | — | Evet | — |
| `/bolgeler` | Evet | — | — | — | Evet | — | — | — | Evet | Evet |
| `/bolgeler/{ilce}` (8 bölge) | Evet | — | — | Evet | Evet | — | Evet | — | Evet | — |
| `/arama` | Evet | — | — | — | Evet | Evet | — | — | — | — |

Notlar:

- `Organization` çekirdek düğüm olarak her klinik sayfasında vardır (`#organization`).
- `SearchAction` hedefi: `https://uzmdrmuratcokay.com.tr/arama?q={search_term_string}`.
- `Person` yalnızca Hakkımda sayfasında tam biyografi düğümü olarak çıkar; `Physician` ile `sameAs` bağlanır.

## 2. Blog — yalovamedikalestetik.com.tr

| Sayfa | Article / BlogPosting | MedicalWebPage | FAQPage | BreadcrumbList | Person | Organization | ItemList | Physician | ImageObject |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` Ana sayfa | — | — | — | — | Evet | Evet | Evet (pillar listesi) | Evet | Evet |
| `/rehberler/` | — | — | — | Evet | Evet | Evet | Evet (pillar listesi) | Evet | — |
| `/rehberler/{slug}` (4 pillar) | Article | Evet | Evet | Evet | Evet | Evet | Evet (cluster listesi) | Evet | Evet |
| `/yazilar/{slug}` cluster (19) | Article + BlogPosting | Evet | Evet | Evet | Evet | Evet | — | Evet | Evet |
| `/yazilar/{slug}` eski yazı | Article + BlogPosting | Evet | — | Evet | Evet | Evet | — | Evet | Evet |

`author` → `#person`, `reviewedBy` → `#physician`, `publisher` → `#organization`.

## 3. Niş site — yalovabutunculsaglik.com.tr

| Sayfa | MedicalBusiness | MedicalProcedure | FAQPage | Physician | Person | ImageObject |
| --- | --- | --- | --- | --- | --- | --- |
| `/` tek sayfa | Evet | Evet (5 yaklaşım) | Evet | Evet | Evet | Evet |

Tek sayfalı site olduğu için `BreadcrumbList` yok. `MedicalProcedure` düğümleri Hacamat, Sülük, Akupunktur, Ozon Tedavisi ve Mezoterapi içindir.

## Çapraz referans kimlikleri

| Düğüm | Klinik | Blog | Niş |
| --- | --- | --- | --- |
| Physician | `https://uzmdrmuratcokay.com.tr/#physician` | `https://yalovamedikalestetik.com.tr/#physician` | `https://yalovabutunculsaglik.com.tr/#physician` |
| Person | `/#person` | `/#person` | `/#person` |
| Clinic / Business | `/#clinic` | — | `/#medicalbusiness` |
| Organization | `/#organization` | `/#organization` | — |
| WebSite | `/#website` | `/#website` | — |
