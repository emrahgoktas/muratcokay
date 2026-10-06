# Performans ve teknik SEO

Lab ölçümü: Lighthouse 12, mobil emülasyon, `127.0.0.1` üretim derlemesi. CDN/Brotli olmadan localhost; canlıda LCP genelde daha düşük.

## Lab skorları

| Site | Perf | SEO | A11y | Best practices | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Klinik | 92 | 100 | 97 | 100 | 3.2s* | 0.014 | 60ms |
| Blog | 99 | 100 | 95 | 100 | 2.1s | 0 | 0 |
| Niş | 98 | 100 | 95 | 100 | 2.3s | 0 | 0 |

\* Klinik LCP, localhost + Slow 4G emülasyonu altında hero portresi. `fetchpriority=high` ve preload var; Vercel/Cloudflare + Brotli ile &lt;2.5s beklenir. İlk yük JS: 139 kB.

## Yapılanlar

- Hero: `priority`, `fetchPriority=high`, width/height, AVIF/WebP, srcset
- Font: Montserrat variable (`next/font`, `display: swap`); Astro Inter variable (latin + latin-ext)
- CLS: görsel boyutları, aspect-ratio rezervi, `font-display: swap`
- INP: Framer Motion kaldırıldı, Header sunucu bileşeni, ServicesGrid dinamik import, `optimizePackageImports`
- Bundle: `@next/bundle-analyzer` → `npm run analyze`
- Başlıklar: CSP, HSTS, X-Frame-Options, cache 1y / 1s
- robots: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, Applebot-Extended + sitemap
- Image sitemap ayrı; sayfa sitemap’inde de `img`
- 404/500 ilgili sayfalara yönlendirir
- Canonical self; hreflang `tr-TR` + `x-default`; www→non-www; trailing slash tutarlı

## Canlıda kalan iş

1. Hostinger/Vercel’de Brotli ve kenar önbelleği
2. Yer tutucu Unsplash görsellerini gerçek, sıkıştırılmış klinik fotoğraflarıyla değiştir
3. Renk kontrastı (a11y 95–97): secondary yeşil / gri metin
4. Klinik LCP’yi PageSpeed Insights (alan verisi) ile doğrula
