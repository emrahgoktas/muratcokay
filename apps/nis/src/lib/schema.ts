import { contact, doctor, sites } from "@muratcokay/content";
import {
  buildGraph,
  contactPoint,
  postalAddress,
  schemaIds,
  serializeJsonLd,
} from "@muratcokay/seo";

import { media } from "./media";
import { siteContent } from "./page-content";

const siteUrl = sites.nis;
const ids = schemaIds(siteUrl);
const address = postalAddress();
const phone = contact.phone.href.replace("tel:", "");

const heroUrl = `${siteUrl}/media/yalova-medikal-estetik-klinik-hero.jpg`;
const portraitUrl = `${siteUrl}/media/uzm-dr-yasar-murat-cokay-portre.jpg`;

const approachProcedures = [
  {
    name: "Hacamat",
    description:
      "Kupa uygulaması, GETAT mevzuatı ve hekim değerlendirmesi çerçevesinde planlanır.",
    slug: "hacamat",
  },
  {
    name: "Sülük Tedavisi",
    description:
      "Tıbbi sülük uygulamasında uygunluk, hijyen koşulları ve kanama riskleri değerlendirilir.",
    slug: "suluk-tedavisi",
  },
  {
    name: "Akupunktur",
    description:
      "Mevcut sağlık planına eşlik edebilecek tamamlayıcı bir yaklaşım olarak değerlendirilir.",
    slug: "akupunktur",
  },
  {
    name: "Ozon Tedavisi",
    description:
      "Ozon uygulamasının yöntemi ve uygunluğu tıbbi gerekliliklere göre ele alınır.",
    slug: "ozon-tedavisi",
  },
  {
    name: "Mezoterapi",
    description:
      "Uygulama içeriği ve bölgesi, kişisel gereksinimler doğrultusunda değerlendirilir.",
    slug: "mezoterapi",
  },
] as const;

function procedureId(slug: string) {
  return `${siteUrl}/#procedure-${slug}`;
}

export function homeJsonLd() {
  return serializeJsonLd(
    buildGraph(
      {
        "@type": "Physician",
        "@id": ids.physician,
        name: doctor.name,
        url: siteUrl,
        telephone: phone,
        email: contact.email.display,
        jobTitle: doctor.jobTitle,
        description: siteContent.hero.introduction,
        address,
        image: { "@id": `${siteUrl}/#portrait` },
        worksFor: { "@id": ids.business },
        sameAs: [
          ids.person,
          `${sites.klinik}/#physician`,
          `${sites.blog}/#physician`,
        ],
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: doctor.name,
        url: `${sites.klinik}/hakkimda`,
        jobTitle: "Uzm. Dr.",
        description: doctor.biographyParagraphs[0],
        image: { "@id": `${siteUrl}/#portrait` },
        sameAs: ids.physician,
      },
      {
        "@type": "MedicalBusiness",
        "@id": ids.business,
        name: "Yalova Bütüncül Sağlık",
        alternateName: [
          siteContent.site.title,
          "Yalova bütüncül sağlık",
          doctor.name,
        ],
        url: siteUrl,
        telephone: phone,
        email: contact.email.display,
        address,
        image: { "@id": `${siteUrl}/#hero` },
        employee: { "@id": ids.physician },
        contactPoint: contactPoint({ contactType: "customer service" }),
        knowsAbout: [
          "Yalova bütüncül sağlık",
          "Yalova fibromiyalji",
          "Yalova kronik yorgunluk",
          "Yalova hacamat",
          "Yalova akupunktur",
        ],
        availableService: approachProcedures.map((item) => ({
          "@id": procedureId(item.slug),
        })),
        sameAs: [sites.klinik, sites.blog],
      },
      ...approachProcedures.map((item) => ({
        "@type": "MedicalProcedure",
        "@id": procedureId(item.slug),
        name: item.name,
        description: item.description,
        url: `${sites.klinik}/hizmetler/${item.slug}`,
        procedureType: "https://schema.org/TherapeuticProcedure",
        howPerformed:
          "Hekim değerlendirmesi, bilgilendirilmiş rıza ve kişiye özel planlama sonrasında uygulanır.",
        provider: { "@id": ids.physician },
      })),
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: siteContent.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#hero`,
        url: heroUrl,
        contentUrl: heroUrl,
        caption: media.hero.alt,
        description: media.hero.alt,
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#portrait`,
        url: portraitUrl,
        contentUrl: portraitUrl,
        caption: media.desk.alt,
        description: media.desk.alt,
      },
    ),
  );
}
