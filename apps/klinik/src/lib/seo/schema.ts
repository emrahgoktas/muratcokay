import { doctor } from "@muratcokay/content";

import {
  locationCatalog,
  serviceCatalog,
  serviceCategories,
  serviceDetailTemplate,
  siteContent,
} from "@/lib/content";
import {
  absoluteMediaUrl,
  mediaCatalog,
  mediaForService,
  type MediaAsset,
} from "@/lib/media/catalog";

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

const siteUrl = siteContent.seo.siteUrl;
const phone = siteContent.contact.phone.href.replace("tel:", "");

export const schemaIds = {
  physician: `${siteUrl}/#physician`,
  person: `${siteUrl}/#person`,
  clinic: `${siteUrl}/#clinic`,
  organization: `${siteUrl}/#organization`,
  website: `${siteUrl}/#website`,
} as const;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: siteContent.contact.address,
  addressLocality: "Merkez",
  addressRegion: "YALOVA",
  postalCode: "77100",
  addressCountry: "TR",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: "40.655",
  longitude: "29.276",
};

function pageId(path: string, hash: string) {
  return `${new URL(path, siteUrl).toString()}#${hash}`;
}

export function buildGraph(
  ...nodes: Array<JsonLdNode | JsonLdNode[] | undefined | false | null>
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat().filter((node): node is JsonLdNode => Boolean(node)),
  };
}

export function generatePhysicianSchema(): JsonLdNode {
  return {
    "@type": "Physician",
    "@id": schemaIds.physician,
    name: siteContent.brand.name,
    url: `${siteUrl}/hakkimda`,
    image: absoluteMediaUrl(siteUrl, mediaCatalog.portrait),
    telephone: phone,
    email: siteContent.contact.email.display,
    jobTitle: "Medikal Estetik ve GETAT Uzmanı",
    description: doctor.biographyParagraphs.join(" "),
    address: postalAddress,
    medicalSpecialty: [
      "Medikal Estetik",
      "Geleneksel ve Tamamlayıcı Tıp",
    ],
    knowsAbout: [
      ...Object.values(serviceCategories),
      ...serviceCatalog.map((service) => service.baslik),
    ],
    worksFor: { "@id": schemaIds.clinic },
    affiliation: { "@id": schemaIds.organization },
    sameAs: [
      schemaIds.person,
      "https://www.yalovamedikalestetik.com.tr/",
      "https://www.yalovabutunculsaglik.com.tr/",
    ],
  };
}

export function generatePersonSchema(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": schemaIds.person,
    name: siteContent.brand.name,
    url: `${siteUrl}/hakkimda`,
    image: absoluteMediaUrl(siteUrl, mediaCatalog.portrait),
    jobTitle: "Uzm. Dr.",
    description: doctor.biographyParagraphs.join(" "),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesi",
    },
    worksFor: { "@id": schemaIds.clinic },
    sameAs: schemaIds.physician,
  };
}

export function generateMedicalClinicSchema(): JsonLdNode {
  return {
    "@type": "MedicalClinic",
    "@id": schemaIds.clinic,
    name: siteContent.brand.siteName,
    url: siteUrl,
    telephone: phone,
    email: siteContent.contact.email.display,
    address: postalAddress,
    geo,
    image: absoluteMediaUrl(siteUrl, mediaCatalog.hero),
    medicalSpecialty: [
      "Medikal Estetik",
      "Geleneksel ve Tamamlayıcı Tıp",
    ],
    employee: { "@id": schemaIds.physician },
    availableService: serviceCatalog.map((service) => ({
      "@id": pageId(`/hizmetler/${service.slug}`, "procedure"),
    })),
    openingHours: "Mo-Sa 09:00-18:00",
    priceRange: "$$",
  };
}

export function generateOrganizationSchema(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: siteContent.brand.siteName,
    url: siteUrl,
    logo: `${siteUrl}/media/uzm-dr-yasar-murat-cokay-portre.jpg`,
    telephone: phone,
    email: siteContent.contact.email.display,
    address: postalAddress,
    founder: { "@id": schemaIds.physician },
  };
}

export function generateWebSiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    name: siteContent.brand.siteName,
    url: siteUrl,
    inLanguage: "tr-TR",
    publisher: { "@id": schemaIds.organization },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/arama?q={search_term_string}`,
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
        valueName: "search_term_string",
      },
    },
  };
}

export function generateMedicalProcedureSchema(hizmet: {
  slug: string;
  baslik: string;
  kisaAciklama: string;
  path?: string;
  areaServed?: string;
}): JsonLdNode {
  const path = hizmet.path ?? `/hizmetler/${hizmet.slug}`;
  return {
    "@type": "MedicalProcedure",
    "@id": pageId(path, "procedure"),
    name: hizmet.baslik,
    description: hizmet.kisaAciklama,
    url: new URL(path, siteUrl).toString(),
    procedureType: "https://schema.org/TherapeuticProcedure",
    howPerformed:
      "Hekim değerlendirmesi, bilgilendirilmiş rıza ve kişiye özel planlama sonrasında uygulanır.",
    provider: { "@id": schemaIds.physician },
    ...(hizmet.areaServed
      ? {
          areaServed: {
            "@type": "AdministrativeArea",
            name: hizmet.areaServed,
          },
        }
      : {}),
  };
}

export function generateFAQSchema(
  sorular: readonly FaqItem[],
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
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function generateArticleSchema(yazi: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
  wordCount?: number;
}): JsonLdNode {
  return {
    "@type": "Article",
    "@id": pageId(yazi.path, "article"),
    headline: yazi.title,
    description: yazi.description,
    url: new URL(yazi.path, siteUrl).toString(),
    inLanguage: "tr-TR",
    author: { "@id": schemaIds.physician },
    publisher: { "@id": schemaIds.organization },
    ...(yazi.dateModified ? { dateModified: yazi.dateModified } : {}),
    ...(yazi.wordCount ? { wordCount: yazi.wordCount } : {}),
  };
}

export function generateLocalBusinessSchema(location: {
  name: string;
  slug: string;
}): JsonLdNode {
  const path = `/bolgeler/${location.slug}`;
  return {
    "@type": ["LocalBusiness", "MedicalClinic"],
    "@id": pageId(path, "localbusiness"),
    name: `${siteContent.brand.name} — ${location.name}`,
    url: new URL(path, siteUrl).toString(),
    telephone: phone,
    email: siteContent.contact.email.display,
    address: postalAddress,
    geo,
    image: absoluteMediaUrl(siteUrl, mediaCatalog.termal),
    areaServed: {
      "@type": "AdministrativeArea",
      name: location.name,
    },
    parentOrganization: { "@id": schemaIds.clinic },
    employee: { "@id": schemaIds.physician },
  };
}

export function generateImageObjectSchema(
  media: MediaAsset,
  path = "/",
): JsonLdNode {
  const url = absoluteMediaUrl(siteUrl, media);
  return {
    "@type": "ImageObject",
    "@id": pageId(path, `image-${media.id}`),
    url,
    contentUrl: url,
    caption: media.alt,
    description: media.alt,
    inLanguage: "tr-TR",
    representativeOfPage: media.role === "hero",
    creator: { "@id": schemaIds.physician },
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
      url: new URL(item.path, siteUrl).toString(),
    })),
  };
}

const coreNodes = () => [
  generatePhysicianSchema(),
  generateOrganizationSchema(),
];

export function homePageGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generateWebSiteSchema(),
    generateMedicalClinicSchema(),
    generateBreadcrumbSchema([{ name: "Ana Sayfa", path: "/" }]),
    generateImageObjectSchema(mediaCatalog.portrait, "/"),
    generateImageObjectSchema(mediaCatalog.hero, "/"),
  );
}

export function contactPageGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generateMedicalClinicSchema(),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "İletişim", path: "/iletisim" },
    ]),
    generateImageObjectSchema(mediaCatalog.hero, "/iletisim"),
  );
}

export function aboutPageGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generatePersonSchema(),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hakkımda", path: "/hakkimda" },
    ]),
    generateImageObjectSchema(mediaCatalog.portrait, "/hakkimda"),
  );
}

export function servicesIndexGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hizmetler", path: "/hizmetler" },
    ]),
    generateItemListSchema(
      "Yalova medikal estetik ve bütüncül sağlık hizmetleri",
      "/hizmetler",
      serviceCatalog.map((service) => ({
        name: service.baslik,
        path: `/hizmetler/${service.slug}`,
      })),
    ),
  );
}

export function servicePageGraph(hizmet: {
  slug: string;
  baslik: string;
  kisaAciklama: string;
}): JsonLdSchema {
  const path = `/hizmetler/${hizmet.slug}`;
  const faqs = serviceDetailTemplate.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer.replace("{service}", hizmet.baslik),
  }));
  const media = mediaForService(hizmet.slug);
  return buildGraph(
    ...coreNodes(),
    generateMedicalProcedureSchema(hizmet),
    generateFAQSchema(faqs, path),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hizmetler", path: "/hizmetler" },
      { name: hizmet.baslik, path },
    ]),
    generateImageObjectSchema(media, path),
  );
}

export function serviceLocationPageGraph(input: {
  service: { slug: string; baslik: string; kisaAciklama: string };
  location: { name: string; slug: string; fromName: string };
  servicePathSlug: string;
}): JsonLdSchema {
  const path = `/hizmetler/${input.servicePathSlug}/${input.location.slug}`;
  const faqs = [
    {
      question: `${input.location.fromName} gelen hastalar için ${input.service.baslik} kaç seans sürer?`,
      answer: `${input.service.baslik} için sabit bir seans sayısı bulunmaz. Planlama; değerlendirme bulguları, kullanılan yöntem ve kişisel gereksinimlere göre yapılır. ${input.location.fromName} ulaşım süresi de kontrol veya izlem planı oluşturulurken dikkate alınabilir.`,
    },
  ];
  return buildGraph(
    ...coreNodes(),
    generateMedicalProcedureSchema({
      ...input.service,
      path,
      areaServed: input.location.name,
    }),
    generateLocalBusinessSchema(input.location),
    generateFAQSchema(faqs, path),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hizmetler", path: "/hizmetler" },
      { name: input.service.baslik, path: `/hizmetler/${input.service.slug}` },
      { name: input.location.name, path },
    ]),
    generateImageObjectSchema(mediaForService(input.service.slug), path),
  );
}

export function locationsIndexGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Bölgeler", path: "/bolgeler" },
    ]),
    generateItemListSchema(
      "Yalova ve çevre hizmet bölgeleri",
      "/bolgeler",
      locationCatalog.map((location) => ({
        name: location.name,
        path: `/bolgeler/${location.slug}`,
      })),
    ),
    generateImageObjectSchema(mediaCatalog.termal, "/bolgeler"),
  );
}

export function locationPageGraph(location: {
  name: string;
  slug: string;
  faqAnswer: string;
}): JsonLdSchema {
  const path = `/bolgeler/${location.slug}`;
  return buildGraph(
    ...coreNodes(),
    generateLocalBusinessSchema(location),
    generateFAQSchema(
      [
        {
          question: `${location.name}'den kliniğe nasıl ulaşılır?`,
          answer: location.faqAnswer,
        },
      ],
      path,
    ),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Bölgeler", path: "/bolgeler" },
      { name: location.name, path },
    ]),
    generateImageObjectSchema(mediaCatalog.termal, path),
  );
}

export function searchPageGraph(): JsonLdSchema {
  return buildGraph(
    ...coreNodes(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Arama", path: "/arama" },
    ]),
  );
}

/** Geriye dönük kullanım — layout yerine sayfa graph'ları tercih edilir. */
export const physicianSchema = generatePhysicianSchema();
export const medicalClinicSchema = generateMedicalClinicSchema();
export const medicalOrganizationSchema = buildGraph(
  generatePhysicianSchema(),
  generateMedicalClinicSchema(),
);
