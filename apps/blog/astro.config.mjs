// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { astroRedirects } from "./src/data/legacy-redirects.ts";
import { mediaForPath } from "./src/lib/media.ts";
import { lastmodForPath, sitemapPriority } from "./src/lib/seo/dates.ts";

const site = "https://www.yalovamedikalestetik.com.tr";

export default defineConfig({
  site,
  trailingSlash: "always",
  redirects: astroRedirects(),
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = lastmodForPath(pathname);
        return {
          ...item,
          priority: sitemapPriority(pathname),
          ...(lastmod ? { lastmod } : {}),
          img: mediaForPath(pathname).map((asset) => ({
            url: new URL(asset.publicPath, site).toString(),
            title: asset.alt,
            caption: asset.alt,
          })),
        };
      },
    }),
  ],
});