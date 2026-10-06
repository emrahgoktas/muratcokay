# Görsel ve Medya SEO Standartları

Üç site aynı kural setini kullanır: klinik (`uzmdrmuratcokay.com.tr`), blog (`yalovamedikalestetik.com.tr`), mikro site (`yalovabutunculsaglik.com.tr`).

Üretimden önce tüm Unsplash yer tutucular doktorun kendi görselleriyle değiştirilir.

## Yasaklar

- Hasta yüzü, vücut yakın çekimi, rıza belgesi olmayan kişi görseli yok.
- Öncesi-sonrası yok.
- `IMG_1234.jpg`, `DSC0001.JPG`, `whatsapp-image-...` yok.
- Başka bir hekimin yüzü “Dr. Çokay portresi” diye sunulmaz.

## Dosya adı

`yalova-{konu}-{bağlam}.webp` — küçük harf, ASCII, tire.

Doğru:

- `yalova-fibromiyalji-tedavisi-klinik.webp`
- `yalova-hacamat-uygulamasi-merkez.webp`
- `uzm-dr-yasar-murat-cokay-portre.webp`

## Alt metin

`[Ne görünüyor] - [Nerede / kimin] - [Neden]`

Örnek: `Steril uygulama masası - Yalova Merkez GETAT birimi - hacamat yaklaşımının yetkili ortamda konuşulduğunu göstermek`

## Pipeline

| | Klinik (Next 15) | Blog / mikro site (Astro) |
|---|---|---|
| Dönüştürücü | `next/image` | `astro:assets` `Picture` |
| Format | AVIF + WebP | `formats={['avif','webp']}` |
| Genişlik | 480 / 768 / 1200 (+1920) | `widths={[480,768,1200]}` |
| Kalite | WebP 80; `qualities: [60, 80]` | WebP 80 (AVIF aynı encoder, daha küçük çıkar) |
| Hero | `priority` + LCP | `loading="eager"` + `fetchpriority="high"` |
| Diğer | `loading="lazy"` + `placeholder="blur"` | `loading="lazy"` + `decoding="async"` |

## OG / Twitter

- Klinik: `next/og` (Vercel OG) → `/og?title=...`, `opengraph-image.tsx`, `twitter-image.tsx`
- Astro: aynı şablon `satori` + `@resvg/resvg-js` ile `prebuild` sırasında `public/og/*.png` (`@vercel/og` Astro ESM prerender’da `fs` hatası verdiği için)
- Şablon: başlık + hekim adı + domain + Yalova silueti (dağ/deniz formları, marka gradyanı `#0F4C81` → `#0D9488` → `#2E8B57`)
- Kart: `summary_large_image`, 1200×630

## Sitemap

- Klinik: `src/app/sitemap.ts` → her URL’de `images: []`
- Astro: `@astrojs/sitemap` `serialize` → `img: [{ url, title, caption }]` (`sitemap` paketi bu alanı kullanır)
- Sitemap’te her zaman `public/media/{slug}.jpg` kanonik adresi kullanılır (optimize URL değil).

## Klasör yapısı

```
shared-media/placeholders/          # kaynak yer tutucular
docs/gorsel-standartlari.md

dr-murat-cokay-clinic/
  public/media/                     # sitemap + mutlak URL
  src/assets/media/                 # next/image + blur
  src/lib/media/catalog.ts
  src/lib/media/constants.ts
  src/lib/media/og.tsx
  src/components/media/OptimizedImage.tsx
  src/app/og/route.tsx
  src/app/opengraph-image.tsx
  src/app/twitter-image.tsx

yalova-medikal-estetik-blog/
  public/media/
  src/assets/media/
  src/lib/media.ts
  src/components/OptimizedImage.astro
  scripts/generate-og.mjs
  public/og/

yalova-butuncul-saglik/
  public/media/
  src/assets/media/
  src/lib/media.ts
  src/components/OptimizedImage.astro
  scripts/generate-og.mjs
  public/og/
```

## Katalog (şu an yer tutucu)

| Dosya | Kullanım |
|---|---|
| `yalova-medikal-estetik-klinik-hero` | Hero / estetik |
| `uzm-dr-yasar-murat-cokay-portre` | Hakkımda / yazar (yüz yok; masa yer tutucu) |
| `yalova-fibromiyalji-tedavisi-klinik` | Bütüncül / fibromiyalji |
| `yalova-hacamat-uygulamasi-merkez` | GETAT / hacamat |
| `yalova-akupunktur-uygulama-alani` | Akupunktur / omurga |
| `yalova-butuncul-saglik-klinik` | Bütüncül görüşme |
| `yalova-ozon-tedavisi-hazirlik` | Ozon / kilo |
| `yalova-termal-saglik-cevre` | Yalova / termal / ilçe |

## Üretime alma

1. Klinikte çekim: mekân, hekim portresi, boş uygulama alanı (işlem ve hasta yok).
2. Aynı slug ile `src/assets/media` ve `public/media` dosyalarını değiştir.
3. `catalog` alt metinlerindeki “yer tutucu” cümlesini kaldır.
4. `placeholder: true` alanını kaldır veya `false` yap.
5. Build al; sitemap görsel URL’lerinin 200 döndüğünü kontrol et.
