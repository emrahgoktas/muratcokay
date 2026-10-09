import type { APIRoute } from "astro";

import { clusters, pillars } from "../data/authority";
import { site } from "../data/site";
import { mediaCatalog, mediaForPath, type MediaAsset } from "../lib/media";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const imagePages: Array<{ path: string; assets: readonly MediaAsset[] }> = [
  { path: "/", assets: [mediaCatalog.hero] },
  { path: "/rehberler/", assets: [mediaCatalog.hero] },
  { path: "/yazilar/", assets: [mediaCatalog.hero] },
  { path: "/yazar/", assets: [mediaCatalog.portrait] },
  { path: "/harita/", assets: [mediaCatalog.kent] },
  ...pillars.map((pillar) => {
    const path = `/rehberler/${pillar.slug}/`;
    return { path, assets: mediaForPath(path) };
  }),
  ...clusters.map((cluster) => {
    const path = `/yazilar/${cluster.slug}/`;
    return { path, assets: mediaForPath(path) };
  }),
];

export const GET: APIRoute = () => {
  const urls = imagePages
    .map((page) => {
      const loc = new URL(page.path, site.url).toString();
      const images = page.assets
        .map(
          (asset) => `    <image:image>
      <image:loc>${escapeXml(new URL(asset.publicPath, site.url).toString())}</image:loc>
      <image:title>${escapeXml(asset.alt)}</image:title>
      <image:caption>${escapeXml(asset.alt)}</image:caption>
    </image:image>`,
        )
        .join("\n");
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
