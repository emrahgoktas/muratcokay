export type ContentSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type ContentFaq = {
  question: string;
  answer: string;
};

export type ExternalSource = {
  title: string;
  publisher: string;
  url: string;
};

export type PillarContent = {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  introduction: readonly string[];
  sections: readonly ContentSection[];
  clusterSlugs: readonly string[];
  faqs: readonly ContentFaq[];
};

export type ClusterContent = {
  slug: string;
  title: string;
  pillarSlug: string;
  category: "estetik" | "butuncul-saglik" | "getat" | "yalova-saglik";
  description: string;
  lastUpdated: string;
  introduction: readonly string[];
  sections: readonly ContentSection[];
  sources: readonly ExternalSource[];
  faqs: readonly ContentFaq[];
  keywords: readonly string[];
};
