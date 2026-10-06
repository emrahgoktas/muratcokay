import { clusters, pillars } from "../../data/authority";
import { posts } from "../../data/posts";
import { site } from "../../data/site";

export const CLINIC_URL = "https://uzmdrmuratcokay.com.tr";
export const BLOG_URL = site.url;
export const NICHE_URL = "https://yalovabutunculsaglik.com.tr";

export type LinkKind = "service" | "location" | "article" | "pillar" | "page";
export type LinkCategory = "aesthetic" | "holistic" | "getat" | "local" | "site";

export type InternalLink = {
  id: string;
  title: string;
  url: string;
  path: string;
  site: "clinic" | "blog" | "niche";
  kind: LinkKind;
  category: LinkCategory;
  keywords: readonly string[];
};

export type LinkSegment = {
  text: string;
  href?: string;
};

export type KeywordRule = {
  term: string;
  url: string;
};

const categoryMap: Record<string, LinkCategory> = {
  estetik: "aesthetic",
  "butuncul-saglik": "holistic",
  getat: "getat",
  "yalova-saglik": "local",
};

export const clinicServiceUrls = {
  botoks: `${CLINIC_URL}/hizmetler/botoks`,
  dolgu: `${CLINIC_URL}/hizmetler/dolgu`,
  siviYuz: `${CLINIC_URL}/hizmetler/sivi-yuz-germe`,
  leke: `${CLINIC_URL}/hizmetler/yuzde-matlik-kirisiklik-leke-tedavisi`,
  sac: `${CLINIC_URL}/hizmetler/sac-dokulmesi-tedavisi`,
  mezoterapi: `${CLINIC_URL}/hizmetler/mezoterapi`,
  fibro: `${CLINIC_URL}/hizmetler/fibromiyalji`,
  kilo: `${CLINIC_URL}/hizmetler/kilo-verme-destegi`,
  yorgunluk: `${CLINIC_URL}/hizmetler/kronik-yorgunluk-sendromu`,
  bel: `${CLINIC_URL}/hizmetler/bel-fitiklari-omurga-sagligi`,
  diyabet: `${CLINIC_URL}/hizmetler/diyabet-yonetimi-destegi`,
  hiper: `${CLINIC_URL}/hizmetler/hipertansiyon-destegi`,
  varis: `${CLINIC_URL}/hizmetler/varis-tedavisi-destegi`,
  hemoroid: `${CLINIC_URL}/hizmetler/hemoroid-tedavisi-destegi`,
  hacamat: `${CLINIC_URL}/hizmetler/hacamat`,
  suluk: `${CLINIC_URL}/hizmetler/suluk-tedavisi`,
  akupunktur: `${CLINIC_URL}/hizmetler/akupunktur`,
  ozon: `${CLINIC_URL}/hizmetler/ozon-tedavisi`,
  about: `${CLINIC_URL}/hakkimda`,
  contact: `${CLINIC_URL}/iletisim`,
  services: `${CLINIC_URL}/hizmetler`,
} as const;

export const articleToClinic: Record<string, { url: string; title: string }> = {
  "botoks-kimler-icin-uygundur": { url: clinicServiceUrls.botoks, title: "Yalova botoks uygulaması" },
  "dogal-gorunumlu-dolgu-uygulamalari": { url: clinicServiceUrls.dolgu, title: "Yalova dolgu uygulaması" },
  "sivi-yuz-germe-hacim-vermeden-sikilasma": { url: clinicServiceUrls.siviYuz, title: "Yalova sıvı yüz germe" },
  "sivi-yuz-germe-nedir": { url: clinicServiceUrls.siviYuz, title: "Yalova sıvı yüz germe" },
  "yuz-lekeleri-matlik-bilimsel-yaklasimlar": { url: clinicServiceUrls.leke, title: "Yalova leke ve matlık yaklaşımı" },
  "yuzde-leke-ve-matlik-icin-bilimsel-yaklasimlar": { url: clinicServiceUrls.leke, title: "Yalova leke ve matlık yaklaşımı" },
  "sac-dokulmesinde-mezoterapi-prp": { url: clinicServiceUrls.sac, title: "Yalova saç dökülmesi desteği" },
  "sac-dokulmesinde-mezoterapi-ve-prp": { url: clinicServiceUrls.sac, title: "Yalova saç dökülmesi desteği" },
  "fibromiyalji-ile-yasam": { url: clinicServiceUrls.fibro, title: "Yalova fibromiyalji desteği" },
  "kronik-yorgunluk-nedenleri-yonetimi": { url: clinicServiceUrls.yorgunluk, title: "Yalova kronik yorgunluk desteği" },
  "kronik-yorgunluk-sendromunda-akupunktur": { url: clinicServiceUrls.akupunktur, title: "Yalova akupunktur yaklaşımı" },
  "bel-fitiklarinda-tamamlayici-tip": { url: clinicServiceUrls.bel, title: "Yalova bel ve omurga desteği" },
  "bel-fitiklarinda-getat-yaklasimlari": { url: clinicServiceUrls.bel, title: "Yalova bel ve omurga desteği" },
  "diyabet-hipertansiyon-butuncul-destek": { url: clinicServiceUrls.diyabet, title: "Yalova diyabet yönetimi desteği" },
  "diyabet-ve-hipertansiyonda-butuncul-destek": { url: clinicServiceUrls.diyabet, title: "Yalova diyabet yönetimi desteği" },
  "varis-hemoroid-suluk-tedavisinin-yeri": { url: clinicServiceUrls.suluk, title: "Yalova tıbbi sülük uygulaması" },
  "varis-hemoroid-suluk-tedavisi-bilimsel-perspektif": { url: clinicServiceUrls.suluk, title: "Yalova tıbbi sülük uygulaması" },
  "kilo-yonetiminde-ozon-hacamat-destegi": { url: clinicServiceUrls.kilo, title: "Yalova kilo yönetimi desteği" },
  "kilo-verme-surecinde-ozon-ve-hacamat-destegi": { url: clinicServiceUrls.kilo, title: "Yalova kilo yönetimi desteği" },
  "hacamat-nedir-bilimsel-perspektif": { url: clinicServiceUrls.hacamat, title: "Yalova hacamat uygulaması" },
  "akupunktur-hangi-durumlarda-tercih-edilir": { url: clinicServiceUrls.akupunktur, title: "Yalova akupunktur yaklaşımı" },
  "suluk-tedavisi-modern-yorumu": { url: clinicServiceUrls.suluk, title: "Yalova tıbbi sülük uygulaması" },
  "ozon-tedavisinin-kullanim-alanlari": { url: clinicServiceUrls.ozon, title: "Yalova ozon uygulaması" },
  "yalovada-saglik-turizmi": { url: clinicServiceUrls.services, title: "Yalova hizmetler" },
  "yalovada-butuncul-saglik-turizmi": { url: clinicServiceUrls.services, title: "Yalova hizmetler" },
  "yalovadaki-saglik-kuruluslari-rehberi": { url: clinicServiceUrls.contact, title: "Klinik iletişim" },
  "yalovanin-termal-sulari-ve-saglik": { url: clinicServiceUrls.services, title: "Yalova bütüncül sağlık yaklaşımları" },
  "yalovada-butuncul-saglik-adresleri": { url: clinicServiceUrls.contact, title: "Klinik iletişim" },
};

const pillarRecords: InternalLink[] = pillars.map((pillar) => ({
  id: `pillar-${pillar.slug}`,
  title: pillar.title,
  url: `${BLOG_URL}/rehberler/${pillar.slug}/`,
  path: `/rehberler/${pillar.slug}/`,
  site: "blog",
  kind: "pillar",
  category:
    pillar.slug === "medikal-estetik"
      ? "aesthetic"
      : pillar.slug === "getat"
        ? "getat"
        : pillar.slug === "yalova-saglik"
          ? "local"
          : "holistic",
  keywords: [pillar.title, pillar.slug.replaceAll("-", " ")],
}));

const clusterRecords: InternalLink[] = clusters.map((cluster) => ({
  id: `cluster-${cluster.slug}`,
  title: cluster.title,
  url: `${BLOG_URL}/yazilar/${cluster.slug}/`,
  path: `/yazilar/${cluster.slug}/`,
  site: "blog",
  kind: "article",
  category: categoryMap[cluster.category] ?? "holistic",
  keywords: cluster.keywords,
}));

const legacyRecords: InternalLink[] = posts
  .filter(
    (post) =>
      !post.noindex &&
      !clusters.some((cluster) => cluster.slug === post.slug),
  )
  .map((post) => ({
    id: `legacy-${post.slug}`,
    title: post.title,
    url: `${BLOG_URL}/yazilar/${post.slug}/`,
    path: `/yazilar/${post.slug}/`,
    site: "blog" as const,
    kind: "article" as const,
    category: categoryMap[post.category] ?? "holistic",
    keywords: [post.title],
  }));

export const linkCatalog: InternalLink[] = [
  { id: "blog-home", title: "Ana Sayfa", url: `${BLOG_URL}/`, path: "/", site: "blog", kind: "page", category: "site", keywords: [] },
  { id: "blog-guides", title: "Rehberler", url: `${BLOG_URL}/rehberler/`, path: "/rehberler/", site: "blog", kind: "page", category: "site", keywords: [] },
  { id: "blog-author", title: "Yazar profili", url: `${BLOG_URL}/yazar/`, path: "/yazar/", site: "blog", kind: "page", category: "site", keywords: ["yazar"] },
  ...pillarRecords,
  ...clusterRecords,
  ...legacyRecords,
  { id: "clinic-about", title: "Uzm. Dr. Yaşar Murat Çokay", url: clinicServiceUrls.about, path: "/hakkimda", site: "clinic", kind: "page", category: "site", keywords: ["hakkımda"] },
  { id: "niche-home", title: "Yalova Bütüncül Sağlık", url: `${NICHE_URL}/`, path: "/", site: "niche", kind: "page", category: "holistic", keywords: ["bütüncül sağlık"] },
];

export const keywordMap: KeywordRule[] = [
  { term: "sıvı yüz germe", url: "/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/" },
  { term: "saç dökülmesi", url: "/yazilar/sac-dokulmesinde-mezoterapi-prp/" },
  { term: "kronik yorgunluk", url: "/yazilar/kronik-yorgunluk-nedenleri-yonetimi/" },
  { term: "bel fıtıkları", url: "/yazilar/bel-fitiklarinda-tamamlayici-tip/" },
  { term: "bel fıtığı", url: "/yazilar/bel-fitiklarinda-tamamlayici-tip/" },
  { term: "bütüncül sağlık", url: "/rehberler/butuncul-saglik/" },
  { term: "medikal estetik", url: "/rehberler/medikal-estetik/" },
  { term: "kilo yönetimi", url: "/yazilar/kilo-yonetiminde-ozon-hacamat-destegi/" },
  { term: "yüz lekeleri", url: "/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/" },
  { term: "sağlık turizmi", url: "/yazilar/yalovada-saglik-turizmi/" },
  { term: "fibromiyalji", url: "/yazilar/fibromiyalji-ile-yasam/" },
  { term: "hipertansiyon", url: "/yazilar/diyabet-hipertansiyon-butuncul-destek/" },
  { term: "mezoterapi", url: "/yazilar/sac-dokulmesinde-mezoterapi-prp/" },
  { term: "akupunktur", url: "/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/" },
  { term: "hacamat", url: "/yazilar/hacamat-nedir-bilimsel-perspektif/" },
  { term: "botoks", url: "/yazilar/botoks-kimler-icin-uygundur/" },
  { term: "diyabet", url: "/yazilar/diyabet-hipertansiyon-butuncul-destek/" },
  { term: "hemoroid", url: "/yazilar/varis-hemoroid-suluk-tedavisinin-yeri/" },
  { term: "sülük", url: "/yazilar/suluk-tedavisi-modern-yorumu/" },
  { term: "dolgu", url: "/yazilar/dogal-gorunumlu-dolgu-uygulamalari/" },
  { term: "varis", url: "/yazilar/varis-hemoroid-suluk-tedavisinin-yeri/" },
  { term: "GETAT", url: "/rehberler/getat/" },
  { term: "ozon", url: "/yazilar/ozon-tedavisinin-kullanim-alanlari/" },
  { term: "PRP", url: "/yazilar/sac-dokulmesinde-mezoterapi-prp/" },
  { term: "termal", url: "/yazilar/yalovanin-termal-sulari-ve-saglik/" },
].sort((left, right) => right.term.length - left.term.length);

function normalizeUrl(url = "") {
  return url.replace(/\/+$/, "") || "/";
}

function isWordCharacter(character: string | undefined) {
  return character ? /[\p{L}\p{N}]/u.test(character) : false;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resolveHref(url: string) {
  return url.startsWith("http") ? url : new URL(url, BLOG_URL).toString();
}

export function linkifySegments(text: string, currentUrl?: string): LinkSegment[] {
  const linkedTerms = new Set<string>();
  const current = normalizeUrl(currentUrl);
  const segments: LinkSegment[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    const normalized = remaining.toLocaleLowerCase("tr-TR");
    let selected: { term: string; url: string; index: number } | undefined;

    for (const rule of keywordMap) {
      if (linkedTerms.has(rule.term.toLocaleLowerCase("tr-TR"))) continue;
      if (normalizeUrl(rule.url) === current) continue;

      const term = rule.term.toLocaleLowerCase("tr-TR");
      let index = normalized.indexOf(term);
      while (index >= 0) {
        const before = remaining[index - 1];
        const after = remaining[index + term.length];
        if (!isWordCharacter(before) && !isWordCharacter(after)) {
          if (!selected || index < selected.index) {
            selected = { term: rule.term, url: rule.url, index };
          }
          break;
        }
        index = normalized.indexOf(term, index + term.length);
      }
    }

    if (!selected) {
      segments.push({ text: remaining });
      break;
    }
    if (selected.index > 0) {
      segments.push({ text: remaining.slice(0, selected.index) });
    }
    segments.push({
      text: remaining.slice(selected.index, selected.index + selected.term.length),
      href: selected.url,
    });
    linkedTerms.add(selected.term.toLocaleLowerCase("tr-TR"));
    remaining = remaining.slice(selected.index + selected.term.length);
  }

  return segments;
}

export function linkifyContent(html: string, currentUrl?: string): string {
  const skip = new Set(["a", "script", "style", "code", "pre"]);
  const tokens = html.split(/(<[^>]+>)/g);
  let skipDepth = 0;
  let output = "";

  for (const token of tokens) {
    const open = token.match(/^<([a-zA-Z0-9]+)/);
    const close = token.match(/^<\/([a-zA-Z0-9]+)/);
    if (token.startsWith("<")) {
      const name = (open?.[1] ?? close?.[1] ?? "").toLocaleLowerCase("tr-TR");
      if (open && skip.has(name)) skipDepth += 1;
      if (close && skip.has(name)) skipDepth = Math.max(0, skipDepth - 1);
      output += token;
      continue;
    }
    if (skipDepth > 0 || !token) {
      output += token;
      continue;
    }
    output += linkifySegments(token, currentUrl)
      .map((segment) =>
        segment.href
          ? `<a href="${escapeHtml(segment.href)}">${escapeHtml(segment.text)}</a>`
          : escapeHtml(segment.text),
      )
      .join("");
  }
  return output;
}

export function createRelatedContentLinker(currentPath: string) {
  return (text: string) => linkifySegments(text, currentPath);
}

export function getRelatedContent(input: {
  currentUrl: string;
  category?: LinkCategory;
  keywords?: readonly string[];
  limit?: number;
}): InternalLink[] {
  const current = normalizeUrl(input.currentUrl);
  const keywords = (input.keywords ?? []).map((item) => item.toLocaleLowerCase("tr-TR"));

  return linkCatalog
    .filter((item) => normalizeUrl(item.path) !== current && normalizeUrl(item.url) !== current)
    .map((item) => {
      let score = 0;
      if (input.category && item.category === input.category) score += 4;
      for (const keyword of keywords) {
        if (
          item.keywords.some(
            (entry) =>
              entry.toLocaleLowerCase("tr-TR").includes(keyword) ||
              keyword.includes(entry.toLocaleLowerCase("tr-TR")),
          )
        ) {
          score += 2;
        }
      }
      if (item.kind === "article" || item.kind === "pillar") score += 1;
      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, input.limit ?? 4)
    .map((entry) => entry.item);
}

export function siblingClusters(pillarSlug: string, currentSlug: string) {
  return clusters.filter(
    (cluster) => cluster.pillarSlug === pillarSlug && cluster.slug !== currentSlug,
  );
}

export function blogKnownPaths() {
  return [
    "/",
    "/rehberler/",
    "/yazar/",
    ...pillars.map((pillar) => `/rehberler/${pillar.slug}/`),
    ...clusters.map((cluster) => `/yazilar/${cluster.slug}/`),
    ...posts.map((post) => `/yazilar/${post.slug}/`),
  ];
}

export function validateInternalLinks() {
  const errors: string[] = [];
  const known = new Set(blogKnownPaths().map((path) => normalizeUrl(path)));

  for (const item of linkCatalog.filter((entry) => entry.site === "blog")) {
    if (!known.has(normalizeUrl(item.path))) {
      errors.push(`Blog yolu yok: ${item.path}`);
    }
  }

  for (const rule of keywordMap) {
    if (!known.has(normalizeUrl(rule.url))) {
      errors.push(`Anahtar kelime 404 riski: ${rule.term} → ${rule.url}`);
    }
  }

  for (const [slug, target] of Object.entries(articleToClinic)) {
    const exists =
      clusters.some((cluster) => cluster.slug === slug) ||
      posts.some((post) => post.slug === slug);
    if (!exists) errors.push(`Klinik eşlemesi hayalet slug: ${slug}`);
    if (!target.url.startsWith(CLINIC_URL)) {
      errors.push(`Klinik URL hatalı: ${target.url}`);
    }
  }

  return { ok: errors.length === 0, errors };
}

export { resolveHref };
