import type {
  ClusterContent,
  ContentFaq,
  ContentSection,
  ExternalSource,
  PillarContent,
} from "./types";

export function countWords(values: readonly string[]) {
  return values
    .join(" ")
    .trim()
    .split(/\s+/u)
    .filter(Boolean).length;
}

export function articleWordCount(content: {
  introduction: readonly string[];
  sections: readonly ContentSection[];
  faqs: readonly ContentFaq[];
}) {
  return countWords([
    ...content.introduction,
    ...content.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    ...content.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ]);
}

export function createPillar(content: PillarContent): PillarContent {
  return content;
}

export function createCluster(content: ClusterContent): ClusterContent {
  return content;
}

export const commonSources = {
  saglikBakanligiGetat: {
    title: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
    publisher: "T.C. Sağlık Bakanlığı",
    url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
  },
  saglikBakanligiTanitim: {
    title: "Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği",
    publisher: "T.C. Sağlık Bakanlığı",
    url: "https://www.resmigazete.gov.tr/eskiler/2025/11/20251112-3.htm",
  },
  ttbEtik: {
    title: "Hekimlik Meslek Etiği Kuralları",
    publisher: "Türk Tabipleri Birliği",
    url: "https://www.ttb.org.tr/kollar/hukuk/mevzuat",
  },
  whoTraditional: {
    title: "Traditional, Complementary and Integrative Medicine",
    publisher: "World Health Organization",
    url: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
  },
  niceFibromyalgia: {
    title: "Chronic pain (primary and secondary) in over 16s",
    publisher: "NICE",
    url: "https://www.nice.org.uk/guidance/ng193",
  },
  cdcDiabetes: {
    title: "Diabetes Management",
    publisher: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/diabetes/treatment/index.html",
  },
  aadAging: {
    title: "Dermatologic approaches to aging skin",
    publisher: "American Academy of Dermatology",
    url: "https://www.aad.org/public/diseases/a-z",
  },
  nihAcupuncture: {
    title: "Acupuncture: What You Need To Know",
    publisher: "National Center for Complementary and Integrative Health",
    url: "https://www.nccih.nih.gov/health/acupuncture-what-you-need-to-know",
  },
  nihCupping: {
    title: "Cupping",
    publisher: "National Center for Complementary and Integrative Health",
    url: "https://www.nccih.nih.gov/health/cupping",
  },
  whoObesity: {
    title: "Obesity and overweight",
    publisher: "World Health Organization",
    url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
  },
  ttbEstetik: {
    title: "Estetik amaçlı uygulamalarda hekim sorumluluğu",
    publisher: "Türk Tabipleri Birliği",
    url: "https://www.ttb.org.tr",
  },
  yalovaValilik: {
    title: "Yalova ili tanıtımı ve sağlık altyapısı",
    publisher: "T.C. Yalova Valiliği",
    url: "https://www.yalova.gov.tr",
  },
  kulturTermal: {
    title: "Yalova Termal kaplıcaları",
    publisher: "T.C. Kültür ve Turizm Bakanlığı",
    url: "https://www.ktb.gov.tr",
  },
  saglikGetat: {
    title: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
    publisher: "T.C. Sağlık Bakanlığı",
    url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
  },
  whoTm: {
    title: "Traditional, Complementary and Integrative Medicine",
    publisher: "World Health Organization",
    url: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
  },
  nccihAcupuncture: {
    title: "Acupuncture: What You Need To Know",
    publisher: "National Center for Complementary and Integrative Health",
    url: "https://www.nccih.nih.gov/health/acupuncture-what-you-need-to-know",
  },
} satisfies Record<string, ExternalSource>;
