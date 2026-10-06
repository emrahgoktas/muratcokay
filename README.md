# Murat Çokay ekosistemi

Üç domain, tek repo.

| Uygulama | Klasör | Stack | Domain |
|---|---|---|---|
| Klinik | `apps/klinik` | Next.js 15 | uzmdrmuratcokay.com.tr |
| Blog | `apps/blog` | Astro 7 | yalovamedikalestetik.com.tr |
| Niş | `apps/nis` | Next.js 15 | yalovabutunculsaglik.com.tr |

## Kurulum

```bash
pnpm install
pnpm dev:klinik
pnpm dev:blog
pnpm dev:nis
```

Üretim derlemesi:

```bash
pnpm build
```

## Paketler

- `@muratcokay/content` — hizmet kataloğu, marka, iletişim, NAP
- `@muratcokay/seo` — şema yardımcıları
- `@muratcokay/ui` — Header, Footer, Button
- `@muratcokay/config` — TypeScript ve renk tokenları

## Deploy

- Klinik → Vercel (`apps/klinik`)
- Blog → Cloudflare Pages (`apps/blog`, output `dist`, Node 22.12+)
- Niş → Vercel (`apps/nis`) veya Cloudflare Pages (statik ihtiyaç yok; Next.js)

Eski bağımsız klasörler (`dr-murat-cokay-clinic`, `yalova-medikal-estetik-blog`, `yalova-butuncul-saglik`) geçiş tamamlandıktan sonra silinebilir.
