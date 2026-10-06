import {
  locationCatalog,
  serviceCatalog,
  serviceLocationCombinations,
} from "@/lib/content";

export const CLINIC_URL = "https://uzmdrmuratcokay.com.tr";
export const BLOG_URL = "https://yalovamedikalestetik.com.tr";
export const NICHE_URL = "https://yalovabutunculsaglik.com.tr";

export type LinkKind =
  | "service"
  | "location"
  | "hybrid"
  | "article"
  | "pillar"
  | "page";

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

const BLOG = {
  botoks: `${BLOG_URL}/yazilar/botoks-kimler-icin-uygundur/`,
  dolgu: `${BLOG_URL}/yazilar/dogal-gorunumlu-dolgu-uygulamalari/`,
  siviYuz: `${BLOG_URL}/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/`,
  leke: `${BLOG_URL}/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/`,
  sac: `${BLOG_URL}/yazilar/sac-dokulmesinde-mezoterapi-prp/`,
  fibro: `${BLOG_URL}/yazilar/fibromiyalji-ile-yasam/`,
  yorgunluk: `${BLOG_URL}/yazilar/kronik-yorgunluk-nedenleri-yonetimi/`,
  bel: `${BLOG_URL}/yazilar/bel-fitiklarinda-tamamlayici-tip/`,
  metabolik: `${BLOG_URL}/yazilar/diyabet-hipertansiyon-butuncul-destek/`,
  varis: `${BLOG_URL}/yazilar/varis-hemoroid-suluk-tedavisinin-yeri/`,
  kilo: `${BLOG_URL}/yazilar/kilo-yonetiminde-ozon-hacamat-destegi/`,
  hacamat: `${BLOG_URL}/yazilar/hacamat-nedir-bilimsel-perspektif/`,
  akupunktur: `${BLOG_URL}/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/`,
  suluk: `${BLOG_URL}/yazilar/suluk-tedavisi-modern-yorumu/`,
  ozon: `${BLOG_URL}/yazilar/ozon-tedavisinin-kullanim-alanlari/`,
  turizm: `${BLOG_URL}/yazilar/yalovada-saglik-turizmi/`,
  kurulus: `${BLOG_URL}/yazilar/yalovadaki-saglik-kuruluslari-rehberi/`,
  termal: `${BLOG_URL}/yazilar/yalovanin-termal-sulari-ve-saglik/`,
  adres: `${BLOG_URL}/yazilar/yalovada-butuncul-saglik-adresleri/`,
  pillarHolistic: `${BLOG_URL}/rehberler/butuncul-saglik/`,
  pillarAesthetic: `${BLOG_URL}/rehberler/medikal-estetik/`,
  pillarGetat: `${BLOG_URL}/rehberler/getat/`,
  pillarYalova: `${BLOG_URL}/rehberler/yalova-saglik/`,
  author: `${BLOG_URL}/yazar/`,
} as const;

const serviceCategory = (slug: string): LinkCategory => {
  if (
    [
      "botoks",
      "dolgu",
      "sivi-yuz-germe",
      "yuzde-matlik-kirisiklik-leke-tedavisi",
      "sac-dokulmesi-tedavisi",
      "mezoterapi",
      "lazer",
      "ip-aski",
    ].includes(slug)
  ) {
    return "aesthetic";
  }
  if (["hacamat", "suluk-tedavisi", "akupunktur", "ozon-tedavisi"].includes(slug)) {
    return "getat";
  }
  return "holistic";
};

export const serviceUrls = Object.fromEntries(
  serviceCatalog.map((service) => [
    service.slug,
    `${CLINIC_URL}/hizmetler/${service.slug}`,
  ]),
) as Record<(typeof serviceCatalog)[number]["slug"], string>;

export const locationUrls = Object.fromEntries(
  locationCatalog.map((location) => [
    location.slug,
    `${CLINIC_URL}/bolgeler/${location.slug}`,
  ]),
) as Record<(typeof locationCatalog)[number]["slug"], string>;

export const serviceBlogTargets: Record<
  (typeof serviceCatalog)[number]["slug"],
  { url: string; title: string }
> = {
  botoks: { url: BLOG.botoks, title: "Botoks: Kimler İçin Uygundur?" },
  dolgu: { url: BLOG.dolgu, title: "Doğal Görünümlü Dolgu Uygulamaları" },
  "sivi-yuz-germe": { url: BLOG.siviYuz, title: "Sıvı Yüz Germe Rehberi" },
  "yuzde-matlik-kirisiklik-leke-tedavisi": {
    url: BLOG.leke,
    title: "Yüz Lekeleri ve Matlık",
  },
  "sac-dokulmesi-tedavisi": { url: BLOG.sac, title: "Saç Dökülmesinde Mezoterapi ve PRP" },
  mezoterapi: { url: BLOG.sac, title: "Mezoterapi ve PRP Rehberi" },
  lazer: { url: BLOG.leke, title: "Leke ve Matlık Yaklaşımları" },
  "ip-aski": { url: BLOG.siviYuz, title: "Yüz Sıkılaşma Yaklaşımları" },
  fibromiyalji: { url: BLOG.fibro, title: "Fibromiyalji ile Yaşam" },
  "kilo-verme-destegi": { url: BLOG.kilo, title: "Kilo Yönetiminde Bütüncül Destek" },
  "kronik-yorgunluk-sendromu": { url: BLOG.yorgunluk, title: "Kronik Yorgunluk Yönetimi" },
  "bel-fitiklari-omurga-sagligi": { url: BLOG.bel, title: "Bel Fıtıklarında Tamamlayıcı Tıp" },
  "diyabet-yonetimi-destegi": { url: BLOG.metabolik, title: "Diyabet ve Hipertansiyonda Destek" },
  "hipertansiyon-destegi": { url: BLOG.metabolik, title: "Diyabet ve Hipertansiyonda Destek" },
  "varis-tedavisi-destegi": { url: BLOG.varis, title: "Varis ve Hemoroid Yaklaşımları" },
  "hemoroid-tedavisi-destegi": { url: BLOG.varis, title: "Varis ve Hemoroid Yaklaşımları" },
  hacamat: { url: BLOG.hacamat, title: "Hacamat Nedir?" },
  "suluk-tedavisi": { url: BLOG.suluk, title: "Sülük Tedavisi: Modern Yorumu" },
  akupunktur: { url: BLOG.akupunktur, title: "Akupunktur Hangi Durumlarda Tercih Edilir?" },
  "ozon-tedavisi": { url: BLOG.ozon, title: "Ozon Tedavisinin Kullanım Alanları" },
};

const blogRecords: InternalLink[] = [
  { id: "blog-pillar-holistic", title: "Bütüncül Sağlık Rehberi", url: BLOG.pillarHolistic, path: "/rehberler/butuncul-saglik/", site: "blog", kind: "pillar", category: "holistic", keywords: ["bütüncül sağlık", "fibromiyalji", "kilo yönetimi"] },
  { id: "blog-pillar-aesthetic", title: "Medikal Estetik Rehberi", url: BLOG.pillarAesthetic, path: "/rehberler/medikal-estetik/", site: "blog", kind: "pillar", category: "aesthetic", keywords: ["medikal estetik", "botoks", "dolgu"] },
  { id: "blog-pillar-getat", title: "GETAT Rehberi", url: BLOG.pillarGetat, path: "/rehberler/getat/", site: "blog", kind: "pillar", category: "getat", keywords: ["GETAT", "hacamat", "akupunktur"] },
  { id: "blog-pillar-yalova", title: "Yalova Sağlık Rehberi", url: BLOG.pillarYalova, path: "/rehberler/yalova-saglik/", site: "blog", kind: "pillar", category: "local", keywords: ["sağlık turizmi", "termal"] },
  { id: "blog-botoks", title: "Botoks: Kimler İçin Uygundur?", url: BLOG.botoks, path: "/yazilar/botoks-kimler-icin-uygundur/", site: "blog", kind: "article", category: "aesthetic", keywords: ["botoks"] },
  { id: "blog-dolgu", title: "Doğal Görünümlü Dolgu", url: BLOG.dolgu, path: "/yazilar/dogal-gorunumlu-dolgu-uygulamalari/", site: "blog", kind: "article", category: "aesthetic", keywords: ["dolgu"] },
  { id: "blog-sivi", title: "Sıvı Yüz Germe", url: BLOG.siviYuz, path: "/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/", site: "blog", kind: "article", category: "aesthetic", keywords: ["sıvı yüz germe"] },
  { id: "blog-leke", title: "Yüz Lekeleri ve Matlık", url: BLOG.leke, path: "/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/", site: "blog", kind: "article", category: "aesthetic", keywords: ["yüz lekeleri", "lazer"] },
  { id: "blog-sac", title: "Saç Dökülmesinde Mezoterapi ve PRP", url: BLOG.sac, path: "/yazilar/sac-dokulmesinde-mezoterapi-prp/", site: "blog", kind: "article", category: "aesthetic", keywords: ["saç dökülmesi", "mezoterapi", "PRP"] },
  { id: "blog-fibro", title: "Fibromiyalji ile Yaşam", url: BLOG.fibro, path: "/yazilar/fibromiyalji-ile-yasam/", site: "blog", kind: "article", category: "holistic", keywords: ["fibromiyalji"] },
  { id: "blog-yorgunluk", title: "Kronik Yorgunluk Yönetimi", url: BLOG.yorgunluk, path: "/yazilar/kronik-yorgunluk-nedenleri-yonetimi/", site: "blog", kind: "article", category: "holistic", keywords: ["kronik yorgunluk"] },
  { id: "blog-bel", title: "Bel Fıtıklarında Tamamlayıcı Tıp", url: BLOG.bel, path: "/yazilar/bel-fitiklarinda-tamamlayici-tip/", site: "blog", kind: "article", category: "holistic", keywords: ["bel fıtığı", "bel fıtıkları"] },
  { id: "blog-metabolik", title: "Diyabet ve Hipertansiyonda Destek", url: BLOG.metabolik, path: "/yazilar/diyabet-hipertansiyon-butuncul-destek/", site: "blog", kind: "article", category: "holistic", keywords: ["diyabet", "hipertansiyon"] },
  { id: "blog-varis", title: "Varis ve Hemoroid", url: BLOG.varis, path: "/yazilar/varis-hemoroid-suluk-tedavisinin-yeri/", site: "blog", kind: "article", category: "holistic", keywords: ["varis", "hemoroid"] },
  { id: "blog-kilo", title: "Kilo Yönetiminde Ozon ve Hacamat", url: BLOG.kilo, path: "/yazilar/kilo-yonetiminde-ozon-hacamat-destegi/", site: "blog", kind: "article", category: "holistic", keywords: ["kilo yönetimi", "ozon", "hacamat"] },
  { id: "blog-hacamat", title: "Hacamat Nedir?", url: BLOG.hacamat, path: "/yazilar/hacamat-nedir-bilimsel-perspektif/", site: "blog", kind: "article", category: "getat", keywords: ["hacamat"] },
  { id: "blog-akupunktur", title: "Akupunktur Rehberi", url: BLOG.akupunktur, path: "/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/", site: "blog", kind: "article", category: "getat", keywords: ["akupunktur"] },
  { id: "blog-suluk", title: "Sülük Tedavisi", url: BLOG.suluk, path: "/yazilar/suluk-tedavisi-modern-yorumu/", site: "blog", kind: "article", category: "getat", keywords: ["sülük"] },
  { id: "blog-ozon", title: "Ozon Tedavisi", url: BLOG.ozon, path: "/yazilar/ozon-tedavisinin-kullanim-alanlari/", site: "blog", kind: "article", category: "getat", keywords: ["ozon"] },
  { id: "blog-turizm", title: "Yalova'da Sağlık Turizmi", url: BLOG.turizm, path: "/yazilar/yalovada-saglik-turizmi/", site: "blog", kind: "article", category: "local", keywords: ["sağlık turizmi"] },
  { id: "blog-kurulus", title: "Yalova'daki Sağlık Kuruluşları", url: BLOG.kurulus, path: "/yazilar/yalovadaki-saglik-kuruluslari-rehberi/", site: "blog", kind: "article", category: "local", keywords: ["sağlık kuruluşları"] },
  { id: "blog-termal", title: "Yalova'nın Termal Suları", url: BLOG.termal, path: "/yazilar/yalovanin-termal-sulari-ve-saglik/", site: "blog", kind: "article", category: "local", keywords: ["termal"] },
  { id: "blog-adres", title: "Yalova'da Bütüncül Sağlık Adresleri", url: BLOG.adres, path: "/yazilar/yalovada-butuncul-saglik-adresleri/", site: "blog", kind: "article", category: "local", keywords: ["bütüncül sağlık"] },
  { id: "blog-author", title: "Yazar: Uzm. Dr. Yaşar Murat Çokay", url: BLOG.author, path: "/yazar/", site: "blog", kind: "page", category: "site", keywords: ["yazar"] },
];

const pageRecords: InternalLink[] = [
  { id: "clinic-home", title: "Ana Sayfa", url: `${CLINIC_URL}/`, path: "/", site: "clinic", kind: "page", category: "site", keywords: [] },
  { id: "clinic-about", title: "Hakkımda", url: `${CLINIC_URL}/hakkimda`, path: "/hakkimda", site: "clinic", kind: "page", category: "site", keywords: ["hakkımda"] },
  { id: "clinic-contact", title: "İletişim", url: `${CLINIC_URL}/iletisim`, path: "/iletisim", site: "clinic", kind: "page", category: "site", keywords: [] },
  { id: "clinic-services", title: "Hizmetler", url: `${CLINIC_URL}/hizmetler`, path: "/hizmetler", site: "clinic", kind: "page", category: "site", keywords: [] },
  { id: "clinic-locations", title: "Bölgeler", url: `${CLINIC_URL}/bolgeler`, path: "/bolgeler", site: "clinic", kind: "page", category: "local", keywords: [] },
  { id: "clinic-search", title: "Arama", url: `${CLINIC_URL}/arama`, path: "/arama", site: "clinic", kind: "page", category: "site", keywords: [] },
  { id: "niche-home", title: "Yalova Bütüncül Sağlık", url: `${NICHE_URL}/`, path: "/", site: "niche", kind: "page", category: "holistic", keywords: ["bütüncül sağlık", "fibromiyalji"] },
];

const serviceRecords: InternalLink[] = serviceCatalog.map((service) => ({
  id: `service-${service.slug}`,
  title: service.baslik,
  url: `${CLINIC_URL}/hizmetler/${service.slug}`,
  path: `/hizmetler/${service.slug}`,
  site: "clinic",
  kind: "service",
  category: serviceCategory(service.slug),
  keywords: [service.baslik.toLocaleLowerCase("tr-TR"), service.slug.replaceAll("-", " ")],
}));

const locationRecords: InternalLink[] = locationCatalog.map((location) => ({
  id: `location-${location.slug}`,
  title: location.name,
  url: `${CLINIC_URL}/bolgeler/${location.slug}`,
  path: `/bolgeler/${location.slug}`,
  site: "clinic",
  kind: "location",
  category: "local",
  keywords: [location.name],
}));

const hybridRecords: InternalLink[] = serviceLocationCombinations.map((item) => {
  const service = serviceCatalog.find((entry) => entry.slug === item.serviceSlug);
  const location = locationCatalog.find((entry) => entry.slug === item.locationSlug);
  return {
    id: `hybrid-${item.servicePathSlug}-${item.locationSlug}`,
    title: `${location?.name ?? item.locationSlug} ${service?.baslik ?? item.serviceSlug}`,
    url: `${CLINIC_URL}/hizmetler/${item.servicePathSlug}/${item.locationSlug}`,
    path: `/hizmetler/${item.servicePathSlug}/${item.locationSlug}`,
    site: "clinic" as const,
    kind: "hybrid" as const,
    category: service ? serviceCategory(service.slug) : "site",
    keywords: [service?.baslik ?? "", location?.name ?? ""],
  };
});

export const linkCatalog: InternalLink[] = [
  ...pageRecords,
  ...serviceRecords,
  ...locationRecords,
  ...hybridRecords,
  ...blogRecords,
];

export const keywordMap: KeywordRule[] = [
  { term: "sıvı yüz germe", url: serviceUrls["sivi-yuz-germe"] },
  { term: "saç dökülmesi", url: serviceUrls["sac-dokulmesi-tedavisi"] },
  { term: "kronik yorgunluk", url: serviceUrls["kronik-yorgunluk-sendromu"] },
  { term: "bel fıtıkları", url: serviceUrls["bel-fitiklari-omurga-sagligi"] },
  { term: "bel fıtığı", url: serviceUrls["bel-fitiklari-omurga-sagligi"] },
  { term: "bütüncül sağlık", url: BLOG.pillarHolistic },
  { term: "medikal estetik", url: BLOG.pillarAesthetic },
  { term: "kilo yönetimi", url: serviceUrls["kilo-verme-destegi"] },
  { term: "yüz lekeleri", url: serviceUrls["yuzde-matlik-kirisiklik-leke-tedavisi"] },
  { term: "sağlık turizmi", url: BLOG.turizm },
  { term: "fibromiyalji", url: serviceUrls.fibromiyalji },
  { term: "hipertansiyon", url: serviceUrls["hipertansiyon-destegi"] },
  { term: "mezoterapi", url: serviceUrls.mezoterapi },
  { term: "akupunktur", url: serviceUrls.akupunktur },
  { term: "Yalova Merkez", url: locationUrls["yalova-merkez"] },
  { term: "Çiftlikköy", url: locationUrls.ciftlikkoy },
  { term: "Çınarcık", url: locationUrls.cinarcik },
  { term: "Altınova", url: locationUrls.altinova },
  { term: "Orhangazi", url: locationUrls.orhangazi },
  { term: "Armutlu", url: locationUrls.armutlu },
  { term: "Gemlik", url: locationUrls.gemlik },
  { term: "Termal", url: locationUrls.termal },
  { term: "hacamat", url: serviceUrls.hacamat },
  { term: "botoks", url: serviceUrls.botoks },
  { term: "ip askı", url: serviceUrls["ip-aski"] },
  { term: "diyabet", url: serviceUrls["diyabet-yonetimi-destegi"] },
  { term: "hemoroid", url: serviceUrls["hemoroid-tedavisi-destegi"] },
  { term: "sülük", url: serviceUrls["suluk-tedavisi"] },
  { term: "dolgu", url: serviceUrls.dolgu },
  { term: "varis", url: serviceUrls["varis-tedavisi-destegi"] },
  { term: "lazer", url: serviceUrls.lazer },
  { term: "GETAT", url: BLOG.pillarGetat },
  { term: "ozon", url: serviceUrls["ozon-tedavisi"] },
  { term: "PRP", url: BLOG.sac },
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

export function linkifySegments(
  text: string,
  currentUrl?: string,
): LinkSegment[] {
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
          if (!selected || index < selected.index || (index === selected.index && rule.term.length > selected.term.length)) {
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

export function getRelatedContent(input: {
  currentUrl: string;
  category?: LinkCategory;
  keywords?: readonly string[];
  limit?: number;
}): InternalLink[] {
  const current = normalizeUrl(input.currentUrl);
  const keywords = (input.keywords ?? []).map((item) =>
    item.toLocaleLowerCase("tr-TR"),
  );

  return linkCatalog
    .filter((item) => normalizeUrl(item.url) !== current && item.kind !== "hybrid")
    .map((item) => {
      let score = 0;
      if (input.category && item.category === input.category) score += 4;
      for (const keyword of keywords) {
        if (item.keywords.some((entry) => entry.toLocaleLowerCase("tr-TR").includes(keyword) || keyword.includes(entry.toLocaleLowerCase("tr-TR")))) {
          score += 2;
        }
      }
      if (item.site !== "clinic") score += 1;
      if (item.kind === "article" || item.kind === "service") score += 1;
      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || left.item.title.localeCompare(right.item.title, "tr"))
    .slice(0, input.limit ?? 4)
    .map((entry) => entry.item);
}

export function clinicKnownPaths() {
  return [
    "/",
    "/hakkimda",
    "/iletisim",
    "/hizmetler",
    "/bolgeler",
    "/arama",
    ...serviceCatalog.map((service) => `/hizmetler/${service.slug}`),
    ...locationCatalog.map((location) => `/bolgeler/${location.slug}`),
    ...serviceLocationCombinations.map(
      (item) => `/hizmetler/${item.servicePathSlug}/${item.locationSlug}`,
    ),
  ];
}

export function validateInternalLinks() {
  const errors: string[] = [];
  const clinicPaths = new Set(clinicKnownPaths());
  const ids = new Set<string>();

  for (const item of [...serviceRecords, ...locationRecords, ...hybridRecords, ...pageRecords]) {
    if (item.site !== "clinic") continue;
    if (ids.has(item.id)) errors.push(`Yinelenen id: ${item.id}`);
    ids.add(item.id);
    if (!clinicPaths.has(item.path)) {
      errors.push(`Klinik yolu katalogda yok: ${item.path}`);
    }
  }

  for (const rule of keywordMap) {
    if (!rule.url.startsWith("http")) {
      errors.push(`Anahtar kelime URL'si mutlak değil: ${rule.term}`);
    }
  }

  for (const target of Object.values(serviceBlogTargets)) {
    if (!target.url.startsWith(BLOG_URL)) {
      errors.push(`Blog hedefi hatalı: ${target.url}`);
    }
  }

  return { ok: errors.length === 0, errors };
}
