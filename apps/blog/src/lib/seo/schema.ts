import { clusters, pillars } from "../../data/authority";
import type { ClusterContent, ContentFaq, PillarContent } from "../../data/authority/types";
import type { BlogPost } from "../../data/posts";
import { site } from "../../data/site";
import { mediaCatalog, mediaForPath, type MediaAsset } from "../media";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

export type JsonLdNode = {
  "@type": string | string[];
  "@id"?: string;
  [key: string]: JsonLdValue | undefined;
};

export type JsonLdSchema = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

const siteUrl = site.url;
const clinicUrl = "https://uzmdrmuratcokay.com.tr";

export const schemaIds = {
  physician: `${siteUrl}/#physician`,
  person: `${siteUrl}/#person`,
  organization: `${siteUrl}/#organization`,
  website: `${siteUrl}/#website`,
} as const;

function pageId(path: string, hash: string) {
  return `${new URL(path, siteUrl).toString()}#${hash}`;
}

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function wordCountFrom(parts: readonly string[]) {
  return parts.join(" ").trim().split(/\s+/u).filter(Boolean).length;
}

export function buildGraph(
  ...nodes: Array<JsonLdNode | JsonLdNode[] | undefined | false | null>
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat().filter((node): node is JsonLdNode => Boolean(node)),
  };
}

export function serializeJsonLd(schema: JsonLdSchema) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function generatePhysicianSchema(): JsonLdNode {
  return {
    "@type": "Physician",
    "@id": schemaIds.physician,
    name: site.authorName,
    url: site.authorProfile.url,
    image: absoluteUrl(mediaCatalog.portrait.publicPath),
    jobTitle: "Medikal Estetik ve GETAT Uzmanı",
    description: site.authorText,
    worksFor: { "@id": schemaIds.organization },
    sameAs: [
      schemaIds.person,
      `${clinicUrl}/#physician`,
      "https://yalovabutunculsaglik.com.tr/#physician",
    ],
  };
}

export function generatePersonSchema(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": schemaIds.person,
    name: site.authorName,
    url: site.authorProfile.url,
    image: absoluteUrl(mediaCatalog.portrait.publicPath),
    jobTitle: "Uzm. Dr.",
    description: site.authorText,
    worksFor: { "@id": schemaIds.organization },
    sameAs: schemaIds.physician,
  };
}

export function generateOrganizationSchema(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: site.name,
    url: siteUrl,
    description: site.description,
    logo: absoluteUrl(mediaCatalog.portrait.publicPath),
    founder: { "@id": schemaIds.physician },
    sameAs: [clinicUrl, "https://yalovabutunculsaglik.com.tr/"],
  };
}

export function generateMedicalProcedureSchema(hizmet: {
  slug: string;
  baslik: string;
  kisaAciklama: string;
  path?: string;
}): JsonLdNode {
  const path = hizmet.path ?? `/yazilar/${hizmet.slug}/`;
  return {
    "@type": "MedicalProcedure",
    "@id": pageId(path, "procedure"),
    name: hizmet.baslik,
    description: hizmet.kisaAciklama,
    url: absoluteUrl(path),
    procedureType: "https://schema.org/TherapeuticProcedure",
    howPerformed:
      "Hekim değerlendirmesi, bilgilendirilmiş rıza ve kişiye özel planlama sonrasında uygulanır.",
    provider: { "@id": schemaIds.physician },
  };
}

export function generateFAQSchema(
  sorular: readonly FaqItem[] | readonly ContentFaq[],
  pagePath: string,
): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": pageId(pagePath, "faq"),
    mainEntity: sorular.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(yol: readonly BreadcrumbItem[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": pageId(yol[yol.length - 1]?.path ?? "/", "breadcrumb"),
    itemListElement: yol.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function generateArticleSchema(yazi: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
  wordCount?: number;
  type?: "Article" | "BlogPosting" | Array<"Article" | "BlogPosting">;
}): JsonLdNode {
  return {
    "@type": yazi.type ?? ["Article", "BlogPosting"],
    "@id": pageId(yazi.path, "article"),
    headline: yazi.title,
    description: yazi.description,
    url: absoluteUrl(yazi.path),
    mainEntityOfPage: { "@id": pageId(yazi.path, "webpage") },
    inLanguage: "tr-TR",
    author: { "@id": schemaIds.person },
    publisher: { "@id": schemaIds.organization },
    image: absoluteUrl(mediaCatalog.hero.publicPath),
    ...(yazi.dateModified ? { dateModified: yazi.dateModified } : {}),
    ...(yazi.wordCount ? { wordCount: yazi.wordCount } : {}),
  };
}

export function generateMedicalWebPageSchema(input: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
}): JsonLdNode {
  return {
    "@type": "MedicalWebPage",
    "@id": pageId(input.path, "webpage"),
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "tr-TR",
    isPartOf: { "@id": schemaIds.website },
    reviewedBy: { "@id": schemaIds.physician },
    lastReviewed: input.dateModified,
    about: { "@id": pageId(input.path, "article") },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

export function generateItemListSchema(
  name: string,
  path: string,
  items: readonly { name: string; path: string }[],
): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": pageId(path, "itemlist"),
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function generateImageObjectSchema(
  media: MediaAsset,
  path = "/",
): JsonLdNode {
  const url = absoluteUrl(media.publicPath);
  return {
    "@type": "ImageObject",
    "@id": pageId(path, `image-${media.id}`),
    url,
    contentUrl: url,
    caption: media.alt,
    description: media.alt,
    inLanguage: "tr-TR",
    representativeOfPage: media.role === "hero",
    creator: { "@id": schemaIds.person },
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    name: site.name,
    url: siteUrl,
    inLanguage: "tr-TR",
    publisher: { "@id": schemaIds.organization },
  };
}

const coreNodes = () => [
  generatePhysicianSchema(),
  generatePersonSchema(),
  generateOrganizationSchema(),
];

function guideWordCount(content: PillarContent | ClusterContent) {
  return wordCountFrom([
    ...content.introduction,
    ...content.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    ...content.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ]);
}

export function authorPageGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Yazar", path: "/yazar/" },
    ]),
  );
}

export function homePageGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    websiteNode(),
    generateBreadcrumbSchema([{ name: "Ana Sayfa", path: "/" }]),
    generateItemListSchema(
      "Kapsamlı sağlık rehberleri",
      "/",
      pillars.map((pillar) => ({
        name: pillar.title,
        path: `/rehberler/${pillar.slug}/`,
      })),
    ),
    generateImageObjectSchema(mediaCatalog.hero, "/"),
  );
}

export function guidesIndexGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Rehberler", path: "/rehberler/" },
    ]),
    generateItemListSchema(
      "Pillar rehberler",
      "/rehberler/",
      pillars.map((pillar) => ({
        name: pillar.title,
        path: `/rehberler/${pillar.slug}/`,
      })),
    ),
  );
}

export function pillarPageGraph(pillar: PillarContent): JsonLdSchema {
  const path = `/rehberler/${pillar.slug}/`;
  const pillarClusters = pillar.clusterSlugs
    .map((slug) => clusters.find((cluster) => cluster.slug === slug))
    .filter((cluster): cluster is ClusterContent => Boolean(cluster));

  return buildGraph(
    ...coreNodes(),
    generateArticleSchema({
      title: pillar.title,
      description: pillar.description,
      path,
      dateModified: pillar.lastUpdated,
      wordCount: guideWordCount(pillar),
      type: "Article",
    }),
    generateMedicalWebPageSchema({
      title: pillar.title,
      description: pillar.description,
      path,
      dateModified: pillar.lastUpdated,
    }),
    generateFAQSchema(pillar.faqs, path),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Rehberler", path: "/rehberler/" },
      { name: pillar.title, path },
    ]),
    generateItemListSchema(
      `${pillar.title} alt konu yazıları`,
      path,
      pillarClusters.map((cluster) => ({
        name: cluster.title,
        path: `/yazilar/${cluster.slug}/`,
      })),
    ),
    mediaForPath(path).map((media) => generateImageObjectSchema(media, path)),
  );
}

export function articlePageGraph(input: {
  post: BlogPost | ClusterContent;
  kind: "legacy" | "cluster";
  canonicalPath?: string;
}): JsonLdSchema {
  const path =
    input.canonicalPath ?? `/yazilar/${input.post.slug}/`;
  const cluster = input.kind === "cluster" ? (input.post as ClusterContent) : undefined;
  const pillar = cluster ? pillars.find((item) => item.slug === cluster.pillarSlug) : undefined;

  return buildGraph(
    ...coreNodes(),
    generateArticleSchema({
      title: input.post.title,
      description: input.post.description,
      path,
      dateModified: cluster?.lastUpdated,
      wordCount: cluster
        ? guideWordCount(cluster)
        : wordCountFrom((input.post as BlogPost).paragraphs),
      type: ["Article", "BlogPosting"],
    }),
    generateMedicalWebPageSchema({
      title: input.post.title,
      description: input.post.description,
      path,
      dateModified: cluster?.lastUpdated,
    }),
    cluster ? generateFAQSchema(cluster.faqs, path) : undefined,
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      pillar
        ? { name: pillar.title, path: `/rehberler/${pillar.slug}/` }
        : { name: "Yazılar", path: "/#yazilar" },
      { name: input.post.title, path },
    ]),
    mediaForPath(path).map((media) => generateImageObjectSchema(media, path)),
  );
}
