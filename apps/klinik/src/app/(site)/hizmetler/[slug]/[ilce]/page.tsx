import type { Metadata } from "next";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Phone,
  Route,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
  locationCatalog,
  serviceCatalog,
  serviceLocationCombinations,
  serviceLocationPageContent,
  serviceSituations,
  siteContent,
} from "@/lib/content";
import { CrossSiteCta } from "@/components/seo/CrossSiteCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { ScientificSources } from "@/components/seo/ScientificSources";
import { serviceBlogTargets } from "@/lib/seo/internal-links";
import { withSocialMeta } from "@/lib/seo/metadata";
import { serviceLocationPageGraph } from "@/lib/seo/schema";

type ServiceLocationPageProps = {
  params: Promise<{ slug: string; ilce: string }>;
};

function getCombination(servicePathSlug: string, locationSlug: string) {
  return serviceLocationCombinations.find(
    (combination) =>
      combination.servicePathSlug === servicePathSlug &&
      combination.locationSlug === locationSlug,
  );
}

export function generateStaticParams() {
  return serviceLocationCombinations.map((combination) => ({
    slug: combination.servicePathSlug,
    ilce: combination.locationSlug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceLocationPageProps): Promise<Metadata> {
  const { slug, ilce } = await params;
  const combination = getCombination(slug, ilce);
  const service = combination
    ? serviceCatalog.find(
        (catalogService) => catalogService.slug === combination.serviceSlug,
      )
    : undefined;
  const location = combination
    ? locationCatalog.find(
        (catalogLocation) =>
          catalogLocation.slug === combination.locationSlug,
      )
    : undefined;

  if (!combination || !service || !location) {
    return { title: siteContent.pages.services.title };
  }

  return withSocialMeta({
    title: {
      absolute: `${location.name} ${service.baslik} | ${siteContent.brand.name}`,
    },
    description: `${location.fromName} Yalova Merkez'deki kliniğimizde ${service.baslik.toLocaleLowerCase("tr-TR")} hakkında genel bilgilendirme ve hekim değerlendirmesi.`,
    path: `/hizmetler/${combination.servicePathSlug}/${location.slug}`,
    imageTitle: `${location.name} ${service.baslik}`,
  });
}

export default async function ServiceLocationPage({
  params,
}: ServiceLocationPageProps) {
  const { slug, ilce } = await params;
  const combination = getCombination(slug, ilce);

  if (!combination) {
    notFound();
  }

  const service = serviceCatalog.find(
    (catalogService) => catalogService.slug === combination.serviceSlug,
  );
  const location = locationCatalog.find(
    (catalogLocation) => catalogLocation.slug === combination.locationSlug,
  );

  if (!service || !location) {
    notFound();
  }

  const situations = serviceSituations[service.slug];
  const relatedServices = serviceCatalog
    .filter(
      (relatedService) =>
        relatedService.kategori === service.kategori &&
        relatedService.slug !== service.slug,
    )
    .slice(0, 3);
  return (
    <>
      <JsonLd
        data={serviceLocationPageGraph({
          service,
          location,
          servicePathSlug: combination.servicePathSlug,
        })}
      />

      <nav
        aria-label="Sayfa yolu"
        className="mx-auto max-w-7xl px-4 py-5 text-sm text-mutedText sm:px-6 lg:px-8"
      >
        <Link href="/" className="hover:text-primary">
          Ana Sayfa
        </Link>
        <span aria-hidden="true"> / </span>
        <Link href="/hizmetler" className="hover:text-primary">
          Hizmetler
        </Link>
        <span aria-hidden="true"> / </span>
        <Link
          href={`/hizmetler/${service.slug}`}
          className="hover:text-primary"
        >
          {service.baslik}
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{location.name}</span>
      </nav>

      <section
        aria-labelledby="service-location-title"
        className="bg-gradient-to-br from-primary/20 via-accent/5 to-secondary/20 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-sm font-semibold text-secondary">
            <MapPin aria-hidden="true" className="size-4" />
            {location.name}
          </span>
          <h1
            id="service-location-title"
            className="mt-5 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl"
          >
            {location.locativeName} {service.baslik}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mutedText">
            {location.fromName} kliniğimize gelen kişiler için{" "}
            {service.baslik.toLocaleLowerCase("tr-TR")} yaklaşımı; sağlık
            geçmişi, mevcut bulgular ve kişisel uygunluk birlikte
            değerlendirilerek ele alınır. {combination.localFocus}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="approach-title"
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="approach-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            {serviceLocationPageContent.approachTitle}
          </h2>
          <p className="mt-5 leading-8 text-mutedText">
            {location.name} için hazırlanan bu sayfada {service.baslik} genel
            kapsamıyla ele alınır. {service.kisaAciklama}
          </p>
          <p className="mt-4 leading-8 text-mutedText">
            Değerlendirmede {situations[0].toLocaleLowerCase("tr-TR")} ve{" "}
            {situations[1].toLocaleLowerCase("tr-TR")} gibi başlıklar
            incelenebilir. {serviceLocationPageContent.generalDisclaimer}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="local-access-title"
        className="bg-surface py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="local-access-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            {serviceLocationPageContent.accessTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-background p-6">
              <Route aria-hidden="true" className="size-7 text-secondary" />
              <h3 className="mt-4 font-semibold">{location.travelTime}</h3>
              <p className="mt-2 text-sm leading-6 text-mutedText">
                {location.access} {location.transport}
              </p>
            </article>
            <article className="rounded-2xl border bg-background p-6">
              <Clock3 aria-hidden="true" className="size-7 text-secondary" />
              <h3 className="mt-4 font-semibold">Randevu ve Yol Planı</h3>
              <p className="mt-2 text-sm leading-6 text-mutedText">
                {combination.localFocus} {location.parking}{" "}
                {location.travelNote}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="related-services-title"
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="related-services-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            {serviceLocationPageContent.nearbyServicesTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/hizmetler/${relatedService.slug}`}
                className="group flex min-h-40 flex-col rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <Stethoscope
                  aria-hidden="true"
                  className="size-6 text-secondary"
                />
                <h3 className="mt-4 font-semibold">
                  {relatedService.baslik}
                </h3>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary">
                  Yalova {relatedService.baslik} hakkında bilgi alın
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="parent-links-title"
        className="bg-surface py-12"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            id="parent-links-title"
            className="text-2xl font-bold text-primary"
          >
            {serviceLocationPageContent.linksTitle}
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/hizmetler/${service.slug}`}
              className={buttonVariants({ variant: "outline" })}
            >
              Yalova {service.baslik} ana hizmet sayfası
            </Link>
            <Link
              href={`/bolgeler/${location.slug}`}
              className={buttonVariants({ variant: "outline" })}
            >
              {location.name} ulaşım ve bölge bilgileri
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="service-location-faq-title"
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="service-location-faq-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            {serviceLocationPageContent.faqTitle}
          </h2>
          <details className="mt-8 rounded-2xl border bg-surface p-6" open>
            <summary className="cursor-pointer font-semibold">
              {location.fromName} gelen hastalar için {service.baslik} kaç seans
              sürer?
            </summary>
            <p className="mt-4 leading-7 text-mutedText">
              {service.baslik} için sabit bir seans sayısı bulunmaz. Planlama;
              değerlendirme bulguları, kullanılan yöntem ve kişisel
              gereksinimlere göre yapılır. {location.fromName} ulaşım süresi de
              kontrol veya izlem planı oluşturulurken dikkate alınabilir.
            </p>
          </details>
        </div>
      </section>

      <ScientificSources slug={service.slug} />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {serviceLocationPageContent.appointmentTitle}
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              {serviceLocationPageContent.appointmentDescription}
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
      <CrossSiteCta
        href={serviceBlogTargets[service.slug].url}
        label={serviceBlogTargets[service.slug].title}
      />
      <RelatedContent
        currentPath={`/hizmetler/${combination.servicePathSlug}/${location.slug}`}
        keywords={[service.baslik, location.name]}
      />
    </>
  );
}
