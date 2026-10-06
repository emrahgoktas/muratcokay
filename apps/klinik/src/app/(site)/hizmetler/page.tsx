import type { Metadata } from "next";

import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { siteContent } from "@/lib/content";
import { withSocialMeta } from "@/lib/seo/metadata";
import { servicesIndexGraph } from "@/lib/seo/schema";

export function generateMetadata(): Metadata {
  return withSocialMeta({
    title: siteContent.pages.services.seo.title,
    description: siteContent.pages.services.seo.description,
    path: "/hizmetler",
  });
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesIndexGraph()} />
      <Breadcrumb
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
        ]}
      />
      <section
        aria-labelledby="services-page-title"
        className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"
      >
        <h1
          id="services-page-title"
          className="font-serif text-4xl font-medium tracking-tight text-primary sm:text-5xl"
        >
          {siteContent.pages.services.title}
        </h1>
      </section>
      <ServicesGrid />
      <RelatedContent
        currentPath="/hizmetler"
        keywords={["medikal estetik", "bütüncül sağlık"]}
      />
    </>
  );
}
