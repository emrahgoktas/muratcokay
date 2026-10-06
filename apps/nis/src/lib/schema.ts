import { contact, doctor, sites } from "@muratcokay/content";
import {
  buildGraph,
  postalAddress,
  schemaIds,
  serializeJsonLd,
} from "@muratcokay/seo";

import { siteContent } from "./page-content";

const siteUrl = sites.nis;
const ids = schemaIds(siteUrl);

export function homeJsonLd() {
  return serializeJsonLd(
    buildGraph(
      {
        "@type": "Physician",
        "@id": ids.physician,
        name: doctor.name,
        url: siteUrl,
        telephone: contact.phone.href.replace("tel:", ""),
        email: contact.email.display,
        jobTitle: doctor.jobTitle,
        description: siteContent.hero.introduction,
        address: postalAddress(),
        worksFor: { "@id": ids.business },
      },
      {
        "@type": "MedicalBusiness",
        "@id": ids.business,
        name: siteContent.site.title,
        url: siteUrl,
        telephone: contact.phone.href.replace("tel:", ""),
        email: contact.email.display,
        address: postalAddress(),
        employee: { "@id": ids.physician },
        sameAs: [sites.klinik, sites.blog],
      },
    ),
  );
}
