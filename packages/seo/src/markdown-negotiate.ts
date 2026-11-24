/** Accept başlığında text/markdown tercih edilip edilmediği. */
export function prefersMarkdown(acceptHeader: string | null | undefined): boolean {
  if (!acceptHeader) return false;
  const accept = acceptHeader.toLowerCase();
  if (!accept.includes("text/markdown")) return false;

  const parts = accept.split(",").map((part) => part.trim());
  let mdQ = -1;
  let htmlQ = -1;

  for (const part of parts) {
    const [type, ...params] = part.split(";").map((p) => p.trim());
    const qParam = params.find((p) => p.startsWith("q="));
    const q = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
    if (Number.isNaN(q)) continue;
    if (type === "text/markdown" || type === "text/*" || type === "*/*") {
      if (type === "text/markdown") mdQ = Math.max(mdQ, q);
      else if (mdQ < 0) mdQ = Math.max(mdQ, q * 0.01);
    }
    if (type === "text/html") htmlQ = Math.max(htmlQ, q);
  }

  if (mdQ < 0) return false;
  if (htmlQ < 0) return true;
  return mdQ >= htmlQ;
}

export function markdownHeaders(extra?: HeadersInit): Headers {
  const headers = new Headers(extra);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.set("Vary", "Accept");
  headers.set("Cache-Control", "public, max-age=300, stale-while-revalidate=86400");
  return headers;
}

export function markdownResponse(
  body: string,
  init?: { status?: number; headers?: HeadersInit },
) {
  return new Response(body, {
    status: init?.status ?? 200,
    headers: markdownHeaders(init?.headers),
  });
}

export function agentNotFoundMarkdown(siteName: string, links: {
  home: string;
  llms: string;
  sitemap?: string;
}) {
  return [
    `# 404 — Sayfa bulunamadı`,
    ``,
    `${siteName} üzerinde istediğiniz yol yok veya taşınmış olabilir.`,
    ``,
    `- Ana sayfa: ${links.home}`,
    `- Ajan haritası: ${links.llms}`,
    links.sitemap ? `- Sitemap: ${links.sitemap}` : "",
    ``,
    `Bu yanıt bilgilendirme amaçlıdır; tıbbi tavsiye değildir.`,
  ]
    .filter(Boolean)
    .join("\n");
}
