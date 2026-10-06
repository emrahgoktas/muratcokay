import { siteContent } from "@/lib/content";
import { absoluteMediaUrl, allMedia } from "@/lib/media/catalog";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function GET() {
  const siteUrl = siteContent.seo.siteUrl;
  const urls = allMedia
    .map((asset) => {
      const loc = absoluteMediaUrl(siteUrl, asset);
      return `  <url>
    <loc>${escapeXml(siteUrl)}</loc>
    <image:image>
      <image:loc>${escapeXml(loc)}</image:loc>
      <image:title>${escapeXml(asset.alt)}</image:title>
      <image:caption>${escapeXml(asset.alt)}</image:caption>
    </image:image>
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
}
