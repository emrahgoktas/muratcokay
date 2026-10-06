import type { Metadata } from "next";

import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SignatureGallery } from "@/components/sections/SignatureGallery";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { WhyClinic } from "@/components/sections/WhyClinic";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { siteContent } from "@/lib/content";
import { withSocialMeta } from "@/lib/seo/metadata";
import { homePageGraph } from "@/lib/seo/schema";

export function generateMetadata(): Metadata {
  return withSocialMeta({
    title: siteContent.pages.home.seo.title,
    description: siteContent.pages.home.seo.description,
    path: "/",
    imageTitle: siteContent.pages.home.hero.title,
  });
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageGraph()} />
      <Hero />
      <TrustBadges />
      <SignatureGallery />
      <ServicesGrid />
      <WhyClinic />
      <RelatedContent currentPath="/" keywords={["medikal estetik", "bütüncül sağlık", "hacamat", "botoks"]} />
      <ContactCTA />
    </>
  );
}
