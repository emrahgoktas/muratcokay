import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { locationCatalog, locationPageContent } from "@/lib/content";
import { withSocialMeta } from "@/lib/seo/metadata";
import { locationsIndexGraph } from "@/lib/seo/schema";

export function generateMetadata(): Metadata {
  return withSocialMeta({
    title: "Yalova Hizmet Bölgeleri",
    description:
      "Yalova Merkez, Çınarcık, Termal, Armutlu, Çiftlikköy, Altınova, Orhangazi ve Gemlik'ten kliniğe ulaşım bilgileri.",
    path: "/bolgeler",
  });
}

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={locationsIndexGraph()} />
      <section
        aria-labelledby="locations-title"
        className="bg-gradient-to-br from-primary/15 via-background to-secondary/15 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
            {locationPageContent.list.eyebrow}
          </p>
          <h1
            id="locations-title"
            className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-primary sm:text-5xl"
          >
            {locationPageContent.list.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-mutedText">
            {locationPageContent.list.description}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="location-list-title"
        className="py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="location-list-title" className="sr-only">
            {locationPageContent.list.eyebrow}
          </h2>
          <div className="pack-grid">
            {locationCatalog.map((location) => (
              <article
                key={location.slug}
                className="flex min-h-64 flex-col rounded-2xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/25 text-primary">
                  <MapPin aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{location.name}</h3>
                <p className="mt-3 text-sm leading-6 text-mutedText">
                  {location.summary}
                </p>
                <Link
                  href={`/bolgeler/${location.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary"
                >
                  {location.name} medikal estetik ve bütüncül sağlık bilgileri
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <RelatedContent currentPath="/bolgeler" category="local" keywords={["Yalova Merkez", "termal"]} />
    </>
  );
}
