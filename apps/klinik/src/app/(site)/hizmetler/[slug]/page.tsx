import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { buttonVariants } from "@/components/ui/button";
import {
  locationCatalog,
  serviceCatalog,
  serviceDetailTemplate,
  serviceLocationCombinations,
  serviceSituations,
  siteContent,
} from "@/lib/content";
import { mediaForService } from "@/lib/media/catalog";
import { CrossSiteCta } from "@/components/seo/CrossSiteCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { LinkifiedText } from "@/components/seo/LinkifiedText";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { ScientificSources } from "@/components/seo/ScientificSources";
import { serviceBlogGuides, serviceBlogTargets } from "@/lib/seo/internal-links";
import { withSocialMeta } from "@/lib/seo/metadata";
import { servicePageGraph } from "@/lib/seo/schema";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

async function getServiceBySlug(slug: string) {
  // Sanity bağlantısı kurulduğunda bu placeholder sorgu CMS sorgusuyla değiştirilecek.
  return serviceCatalog.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: siteContent.pages.services.title };
  }

  return withSocialMeta({
    title: {
      absolute: `${service.baslik} | Yalova | ${siteContent.brand.name}`,
    },
    description: `${service.baslik} hakkında bilgilendirme. Yalova Merkez'de uzman hekim eşliğinde değerlendirme.`,
    path: `/hizmetler/${service.slug}`,
    imageTitle: `${service.baslik} | Yalova`,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const process = siteContent.pages.services.detail;
  const categoryLabel = siteContent.services.ui.badges[service.kategori];
  const situations = serviceSituations[service.slug];
  const blogLocal = serviceBlogTargets[service.slug];
  const blogGuide = serviceBlogGuides[service.slug];
  const relatedServices = serviceCatalog
    .filter(
      (relatedService) =>
        relatedService.kategori === service.kategori &&
        relatedService.slug !== service.slug,
    )
    .slice(0, 3);
  const serviceAreas = serviceLocationCombinations
    .filter((combination) => combination.serviceSlug === service.slug)
    .flatMap((combination) => {
      const matchedLocation = locationCatalog.find(
        (location) => location.slug === combination.locationSlug,
      );

      return matchedLocation
        ? [{ ...combination, location: matchedLocation }]
        : [];
    });
  const approachDescription = serviceDetailTemplate.whatIsTemplate.replace(
    "{service}",
    service.baslik,
  );

  return (
    <>
      <JsonLd data={servicePageGraph(service)} />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm text-mutedText">
          <li>
            <Link href="/" className="transition-colors hover:text-primary">
              {serviceDetailTemplate.breadcrumbs.home}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-4" />
          </li>
          <li>
            <Link
              href="/hizmetler"
              className="transition-colors hover:text-primary"
            >
              {serviceDetailTemplate.breadcrumbs.services}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-4" />
          </li>
          <li className="font-medium text-foreground" aria-current="page">
            {service.baslik}
          </li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span
            className={
              service.kategori === "medikal-estetik"
                ? "inline-flex rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary"
                : "inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            }
          >
            {categoryLabel}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {service.baslik}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mutedText">
            <LinkifiedText
              text={`${service.kisaAciklama} ${serviceDetailTemplate.introSuffix}`}
              currentPath={`/hizmetler/${service.slug}`}
            />
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <OptimizedImage
              media={mediaForService(service.slug)}
              className="aspect-[16/9] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteContent.actions.appointmentHref}
              className={buttonVariants({ size: "lg" })}
            >
              <Phone aria-hidden="true" />
              {siteContent.actions.appointment}
            </a>
            <a
              href={siteContent.contact.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-secondary text-secondary hover:bg-secondary/10",
              })}
            >
              <MessageCircle aria-hidden="true" />
              {siteContent.actions.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            {serviceDetailTemplate.whatIsTitle}
          </h2>
          <p className="mt-5 leading-8 text-mutedText">
            {approachDescription}
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            {serviceDetailTemplate.situationsTitle}
          </h2>
          <p className="mt-4 text-sm leading-6 text-mutedText">
            {serviceDetailTemplate.situationsNote}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {situations.map((situation) => (
              <li
                key={situation}
                className="flex items-start gap-3 rounded-xl border bg-background p-4"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-secondary"
                />
                <span className="text-sm leading-6">{situation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {serviceAreas.length > 0 && (
        <section
          aria-labelledby="service-areas-title"
          className="py-16 sm:py-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2
              id="service-areas-title"
              className="text-3xl font-bold tracking-tight text-primary"
            >
              Bölgelere Göre {service.baslik}
            </h2>
            <div className="pack-grid mt-8">
              {serviceAreas.map((item) => (
                <Link
                  key={item.locationSlug}
                  href={`/hizmetler/${item.servicePathSlug}/${item.locationSlug}`}
                  className="rounded-2xl border bg-surface p-5 font-semibold text-primary transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {item.location.name} {service.baslik} hakkında yerel bilgi
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            {process.processTitle}
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {process.processSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border bg-surface p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mutedText">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            {serviceDetailTemplate.relatedTitle}
          </h2>
          <div className="pack-grid mt-8">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/hizmetler/${relatedService.slug}`}
                className="group flex min-h-36 flex-col rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-semibold">{relatedService.baslik}</span>
                <span className="mt-auto flex items-center justify-end gap-2 text-sm font-medium text-primary">
                  {siteContent.actions.detailedInformation}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
            <Link
              href={blogGuide.url}
              className="group flex min-h-36 flex-col rounded-2xl border border-secondary/30 bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xs font-semibold tracking-wide text-secondary uppercase">
                {serviceDetailTemplate.blogGuideLabel}
              </span>
              <span className="mt-2 font-semibold">{blogGuide.title}</span>
              <span className="mt-auto flex items-center justify-end gap-2 text-sm font-medium text-primary">
                {siteContent.actions.detailedInformation}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
            <Link
              href={blogLocal.url}
              className="group flex min-h-36 flex-col rounded-2xl border border-secondary/30 bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xs font-semibold tracking-wide text-secondary uppercase">
                {serviceDetailTemplate.blogLabel}
              </span>
              <span className="mt-2 font-semibold">{blogLocal.title}</span>
              <span className="mt-auto flex items-center justify-end gap-2 text-sm font-medium text-primary">
                {siteContent.actions.detailedInformation}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faq-title"
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-title"
            className="text-3xl font-bold tracking-tight text-primary"
          >
            {serviceDetailTemplate.faqTitle}
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-surface px-6">
            {serviceDetailTemplate.faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-7 text-mutedText">
                  {faq.answer.replace("{service}", service.baslik)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ScientificSources slug={service.slug} />

      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
          <AlertTriangle
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0"
          />
          <p className="text-sm leading-6">{serviceDetailTemplate.warning}</p>
        </div>
        <CrossSiteCta href={blogGuide.url} label={blogGuide.title} />
      </section>
      <RelatedContent
        currentPath={`/hizmetler/${service.slug}`}
        category={
          service.kategori === "medikal-estetik" ? "aesthetic" : "holistic"
        }
        keywords={[service.baslik, service.slug.replaceAll("-", " ")]}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <CalendarDays aria-hidden="true" className="size-8" />
            <h2 className="mt-4 text-2xl font-bold">
              {serviceDetailTemplate.cta.title}
            </h2>
            <p className="mt-2 max-w-2xl text-primary-foreground/80">
              {serviceDetailTemplate.cta.description}
            </p>
          </div>
          <a
            href={siteContent.actions.appointmentHref}
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
    </>
  );
}
