"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import {
  serviceCatalog,
  serviceCategories,
  siteContent,
} from "@/lib/content";
import { mediaForService } from "@/lib/media/catalog";

type Category = keyof typeof serviceCategories;

const featuredSlugs = [
  "sivi-yuz-germe",
  "fibromiyalji",
  "sac-dokulmesi-tedavisi",
  "kilo-verme-destegi",
] as const;

const featuredServices = featuredSlugs.flatMap((slug) => {
  const service = serviceCatalog.find((item) => item.slug === slug);
  return service ? [service] : [];
});

function CategoryBadge({ category }: { category: Category }) {
  const isAesthetic = category === "medikal-estetik";

  return (
    <span
      className={
        isAesthetic
          ? "inline-flex rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-secondary"
          : "inline-flex rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary"
      }
    >
      {siteContent.services.ui.badges[category]}
    </span>
  );
}

function ServiceCta({
  href,
  label,
  featured = false,
}: {
  href: string;
  label: string;
  featured?: boolean;
}) {
  return (
    <Link
      itemProp="url"
      href={href}
      className={
        featured
          ? "mt-auto inline-flex h-auto min-h-8 w-full min-w-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-pretty text-sm font-medium whitespace-normal transition-colors hover:bg-muted"
          : "mt-auto inline-flex min-w-0 items-start justify-between gap-2 self-stretch whitespace-normal rounded-full px-3 py-2 text-pretty text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
      }
    >
      <span className="min-w-0 flex-1 text-left leading-5">{label}</span>
      <ArrowRight aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
    </Link>
  );
}

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("medikal-estetik");
  const { services } = siteContent.pages.home;
  const categoryServices = serviceCatalog.filter(
    (service) => service.kategori === activeCategory,
  );

  return (
    <section
      aria-labelledby="services-title"
      className="overflow-x-clip bg-white/55 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EditorialHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          titleId="services-title"
        />

        <section className="mt-12" aria-labelledby="featured-services-title">
          <h3
            id="featured-services-title"
            className="font-serif text-2xl font-medium tracking-tight text-primary"
          >
            {siteContent.services.ui.featuredTitle}
          </h3>
          <div className="mt-6 grid min-w-0 gap-5 md:grid-cols-2">
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                itemScope
                itemType="https://schema.org/MedicalProcedure"
                className="group flex min-w-0 flex-col overflow-hidden rounded-[1.7rem] bg-background shadow-[0_22px_50px_-32px_rgba(15,76,129,0.45)] ring-1 ring-primary/8"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <OptimizedImage
                    media={mediaForService(service.slug)}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081c30]/80 via-[#081c30]/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <CategoryBadge category={service.kategori} />
                  </div>
                  <h4
                    itemProp="name"
                    className="absolute inset-x-5 bottom-4 font-serif text-2xl leading-tight font-medium text-white"
                  >
                    {service.baslik}
                  </h4>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p
                    itemProp="description"
                    className="line-clamp-2 text-sm leading-6 text-mutedText"
                  >
                    {service.kisaAciklama}
                  </p>
                  <ServiceCta
                    featured
                    href={`/hizmetler/${service.slug}`}
                    label={`Yalova ${service.baslik} hakkında bilgi alın`}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="all-services-title">
          <h3 id="all-services-title" className="sr-only">
            {services.title}
          </h3>
          <div
            role="tablist"
            aria-label={services.title}
            className="flex w-full max-w-full flex-wrap rounded-xl border border-[var(--gold)]/35 bg-background p-1 shadow-sm"
          >
            {(Object.keys(serviceCategories) as Category[]).map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="services-tab-panel"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-ring sm:px-6 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-mutedText hover:text-foreground"
                  }`}
                >
                  {siteContent.services.ui.tabs[category]}
                </button>
              );
            })}
          </div>

          <div
            id="services-tab-panel"
            role="tabpanel"
            className="pack-grid mt-8"
          >
            {categoryServices.map((service) => (
              <article
                key={service.slug}
                itemScope
                itemType="https://schema.org/MedicalProcedure"
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] bg-background shadow-[0_18px_40px_-28px_rgba(15,76,129,0.4)] ring-1 ring-primary/8"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <OptimizedImage
                    media={mediaForService(service.slug)}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081c30]/75 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <CategoryBadge category={service.kategori} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 itemProp="name" className="font-serif text-xl font-medium text-primary">
                    {service.baslik}
                  </h4>
                  <p
                    itemProp="description"
                    className="mt-2 line-clamp-2 text-sm leading-6 text-mutedText"
                  >
                    {service.kisaAciklama}
                  </p>
                  <ServiceCta
                    href={`/hizmetler/${service.slug}`}
                    label={`Yalova ${service.baslik} hakkında bilgi alın`}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
