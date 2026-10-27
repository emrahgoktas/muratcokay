import type { Metadata } from "next";

import { ClinicTour } from "@/components/sections/ClinicTour";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { ScopeStrip } from "@/components/sections/ScopeStrip";
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
      <div data-reveal style={{ ["--reveal-delay" as string]: "40ms" }}>
        <ScopeStrip />
      </div>
      <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
        <TrustBadges />
      </div>
      <div data-reveal style={{ ["--reveal-delay" as string]: "40ms" }}>
        <SignatureGallery />
      </div>
      <div data-reveal>
        <ClinicTour />
      </div>
      <div data-reveal>
        <ServicesGrid />
      </div>
      <div data-reveal>
        <AppointmentSection />
      </div>
      <div data-reveal>
        <WhyClinic />
      </div>
      <div data-reveal>
        <RelatedContent
          currentPath="/"
          keywords={["medikal estetik", "bütüncül sağlık", "hacamat", "botoks"]}
        />
      </div>
      <div data-reveal>
        <ContactCTA />
      </div>
    </>
  );
}
