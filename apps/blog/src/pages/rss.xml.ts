import type { APIRoute } from "astro";

import { clusters, pillars } from "../data/authority";
import { site } from "../data/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const items = [
  ...pillars.map((pillar) => ({
    title: pillar.title,
    description: pillar.description,
    path: `/rehberler/${pillar.slug}/`,
    date: pillar.lastUpdated,
  })),
  ...clusters.map((cluster) => ({
    title: cluster.title,
    description: cluster.description,
    path: `/yazilar/${cluster.slug}/`,
    date: cluster.lastUpdated,
  })),
].sort((left, right) => right.date.localeCompare(left.date));

export const GET: APIRoute = () => {
  const rssItems = items
    .map((item) => {
      const url = new URL(item.path, site.url).toString();
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid>${escapeXml(url)}</guid>
      <pubDate>${new Date(`${item.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${escapeXml(site.url)}/</link>
    <description>${escapeXml(site.description)}</description>
    <language>tr-TR</language>
${rssItems}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
