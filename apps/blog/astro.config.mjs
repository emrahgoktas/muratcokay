// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { mediaForPath } from "./src/lib/media.ts";
import { posts } from "./src/data/posts.ts";

const site = "https://yalovamedikalestetik.com.tr";
const noindexPaths = new Set(
  posts
    .filter((post) => post.noindex)
    .map((post) => `/yazilar/${post.slug}/`),
);

export default defineConfig({
  site,
  trailingSlash: "always",
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
      filter(page) {
        return !noindexPaths.has(new URL(page).pathname);
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        return {
          ...item,
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