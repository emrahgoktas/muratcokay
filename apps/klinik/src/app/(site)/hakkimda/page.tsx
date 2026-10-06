import type { Metadata } from "next";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { siteContent } from "@/lib/content";
import { mediaCatalog } from "@/lib/media/catalog";
import { BLOG_URL } from "@/lib/seo/internal-links";
import { withSocialMeta } from "@/lib/seo/metadata";
import { aboutPageGraph } from "@/lib/seo/schema";

export function generateMetadata(): Metadata {
  return withSocialMeta({
    title: siteContent.pages.about.seo.title,
    description: siteContent.pages.about.seo.description,
    path: "/hakkimda",
  });
}

export default function AboutPage() {
  const { about } = siteContent.pages;

  return (
    <article className="py-16 sm:py-24" aria-labelledby="about-page-title">
      <JsonLd data={aboutPageGraph()} />
      <Breadcrumb
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımda", path: "/hakkimda" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
          {siteContent.brand.tagline}
        </p>
        <h1
          id="about-page-title"
          className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
        >
          {about.title}
        </h1>
        <div className="mt-8 overflow-hidden rounded-3xl">
          <OptimizedImage
            media={mediaCatalog.portrait}
            className="aspect-[16/9] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
        <div className="mt-8 space-y-5 text-lg leading-8 text-mutedText">
          <p>{about.introduction}</p>
          <p>{about.detail}</p>
          <p>{siteContent.brand.biography}</p>
          <p>
            Bilgilendirme yazıları ve yazar profili:{" "}
            <a
              href={`${BLOG_URL}/yazar/`}
              className="font-semibold text-primary hover:underline"
            >
              Yalova Medikal Estetik rehberindeki yazar sayfası
            </a>
            .
          </p>
        </div>
      </div>
      <RelatedContent currentPath="/hakkimda" keywords={["yazar", "bütüncül sağlık"]} />
    </article>
  );
}
