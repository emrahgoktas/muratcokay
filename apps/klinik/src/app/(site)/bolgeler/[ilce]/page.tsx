import type { Metadata } from "next";
import {
  ArrowRight,
  Bus,
  Car,
  Clock3,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
  locationCatalog,
  locationPageContent,
  serviceCatalog,
  serviceLocationCombinations,
  siteContent,
} from "@/lib/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { withSocialMeta } from "@/lib/seo/metadata";
import { locationPageGraph } from "@/lib/seo/schema";

type LocationPageProps = {
  params: Promise<{ ilce: string }>;
};

function getLocation(slug: string) {
  return locationCatalog.find((location) => location.slug === slug);
}

export function generateStaticParams() {
  return locationCatalog.map((location) => ({ ilce: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { ilce } = await params;
  const location = getLocation(ilce);

  if (!location) {
    return { title: locationPageContent.list.title };
  }

  return withSocialMeta({
    title: {
      absolute: `${location.name} Medikal Estetik ve Bütüncül Sağlık | ${siteContent.brand.name}`,
    },
    description: `${location.fromName} Yalova Merkez'deki kliniğimize ulaşım. Botoks, dolgu, hacamat, akupunktur ve bütüncül sağlık hizmetleri.`,
    path: `/bolgeler/${location.slug}`,
    imageTitle: `${location.name} | Yalova Sağlık`,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { ilce } = await params;
  const location = getLocation(ilce);

  if (!location) {
    notFound();
  }

  const popularServices = location.popularServiceSlugs
    .map((slug) => serviceCatalog.find((service) => service.slug === slug))
    .filter((service) => service !== undefined);
  const locationServicePages = serviceLocationCombinations
    .filter((combination) => combination.locationSlug === location.slug)
    .flatMap((combination) => {
      const matchedService = serviceCatalog.find(
        (catalogService) => catalogService.slug === combination.serviceSlug,
      );

      return matchedService
        ? [{ ...combination, service: matchedService }]
        : [];
    });
  return (
    <>
      <JsonLd data={locationPageGraph(location)} />

      <nav
        aria-label="Sayfa yolu"
        className="mx-auto max-w-7xl px-4 py-5 text-sm text-mutedText sm:px-6 lg:px-8"
      >
        <Link href="/" className="hover:text-primary">
          Ana Sayfa
        </Link>
        <span aria-hidden="true"> / </span>
        <Link href="/bolgeler" className="hover:text-primary">
          Bölgeler
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{location.name}</span>
      </nav>

      <section
        aria-labelledby="location-hero-title"
        className="bg-gradient-to-br from-primary/20 via-accent/5 to-secondary/20 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-sm font-semibold text-secondary">
            <MapPin aria-hidden="true" className="size-4" />
            {location.name}
          </span>
          <h1
            id="location-hero-title"
            className="mt-5 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl"
          >
            {location.locativeName} Medikal Estetik ve Bütüncül Sağlık Hizmeti
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mutedText">
            {location.introduction}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="why-location-title"
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="why-location-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            Neden {location.fromName} Kliniğimize?
          </h2>
          <p className="mt-5 leading-8 text-mutedText">{location.access}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-surface p-6">
              <Bus aria-hidden="true" className="size-7 text-secondary" />
              <h3 className="mt-4 font-semibold">Toplu Taşıma ve Güzergâh</h3>
              <p className="mt-2 text-sm leading-6 text-mutedText">
                {location.transport}
              </p>
            </article>
            <article className="rounded-2xl border bg-surface p-6">
              <Car aria-hidden="true" className="size-7 text-secondary" />
              <h3 className="mt-4 font-semibold">Araç ve Otopark Planı</h3>
              <p className="mt-2 text-sm leading-6 text-mutedText">
                {location.parking}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="travel-time-title"
        className="bg-gradient-to-r from-primary to-accent py-12 text-primary-foreground"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <Clock3 aria-hidden="true" className="size-10 shrink-0" />
          <div>
            <h2 id="travel-time-title" className="text-2xl font-bold">
              {locationPageContent.travelTimeTitle}
            </h2>
            <p className="mt-1 text-lg font-semibold">{location.travelTime}</p>
            <p className="mt-1 text-sm text-primary-foreground/75">
              {location.travelNote} {locationPageContent.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="popular-services-title"
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="popular-services-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            {locationPageContent.popularServicesTitle}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((service) => (
              <article
                key={service.slug}
                itemScope
                itemType="https://schema.org/MedicalProcedure"
                className="flex min-h-56 flex-col rounded-2xl border bg-surface p-5"
              >
                <Stethoscope
                  aria-hidden="true"
                  className="size-7 text-secondary"
                />
                <h3 itemProp="name" className="mt-4 font-semibold">
                  {service.baslik}
                </h3>
                <p
                  itemProp="description"
                  className="mt-2 line-clamp-2 text-sm leading-6 text-mutedText"
                >
                  {service.kisaAciklama}
                </p>
                <Link
                  itemProp="url"
                  href={`/hizmetler/${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary"
                >
                  Yalova {service.baslik} hakkında bilgi alın
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {locationServicePages.length > 0 && (
        <section
          aria-labelledby="location-service-pages-title"
          className="bg-surface py-16 sm:py-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2
              id="location-service-pages-title"
              className="text-3xl font-bold tracking-tight text-primary"
            >
              {location.name} İçin Hizmet Bilgileri
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {locationServicePages.map((item) => (
                <Link
                  key={item.servicePathSlug}
                  href={`/hizmetler/${item.servicePathSlug}/${item.locationSlug}`}
                  className="rounded-2xl border bg-background p-5 font-semibold text-primary transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {location.name} {item.service.baslik} hakkında bilgi alın
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        aria-labelledby="location-faq-title"
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="location-faq-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            {locationPageContent.faqTitle}
          </h2>
          <details className="mt-8 rounded-2xl border bg-background p-6" open>
            <summary className="cursor-pointer font-semibold">
              {location.fromName} gelen hastalar için randevu nasıl alınır?
            </summary>
            <p className="mt-4 leading-7 text-mutedText">
              {location.faqAnswer}
            </p>
          </details>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {locationPageContent.appointmentTitle}
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              {locationPageContent.appointmentDescription}
            </p>
          </div>
          <a
            href={siteContent.contact.phone.href}
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
              className: "shrink-0",
            })}
          >
            <Phone aria-hidden="true" />
            {siteContent.actions.appointment}
          </a>
        </div>
      </section>
      <RelatedContent
        currentPath={`/bolgeler/${location.slug}`}
        category="local"
        keywords={[location.name, ...popularServices.map((service) => service.baslik)]}
      />
    </>
  );
}
