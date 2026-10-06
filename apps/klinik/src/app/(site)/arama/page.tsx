import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { serviceCatalog, siteContent } from "@/lib/content";
import { withSocialMeta } from "@/lib/seo/metadata";
import { searchPageGraph } from "@/lib/seo/schema";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export function generateMetadata(): Metadata {
  return withSocialMeta({
    title: "Site içi arama",
    description:
      "Yalova medikal estetik ve bütüncül sağlık hizmet başlıklarında site içi arama.",
    path: "/arama",
  });
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLocaleLowerCase("tr-TR");
  const results = query
    ? serviceCatalog.filter((service) => {
        const haystack =
          `${service.baslik} ${service.kisaAciklama} ${service.slug}`.toLocaleLowerCase(
            "tr-TR",
          );
        return haystack.includes(query);
      })
    : serviceCatalog;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={searchPageGraph()} />
      <Breadcrumb
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Arama", path: "/arama" },
        ]}
      />
      <h1 className="text-4xl font-bold tracking-tight text-primary">
        Site içi arama
      </h1>
      <form action="/arama" method="get" className="mt-8">
        <label htmlFor="q" className="sr-only">
          Arama
        </label>
        <input
          id="q"
          name="q"
          defaultValue={q}
          placeholder="Örn. hacamat, botoks, fibromiyalji"
          className="w-full rounded-xl border border-border bg-background px-4 py-3"
        />
      </form>
      <ul className="mt-10 grid gap-4">
        {results.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="block rounded-2xl border p-5 hover:border-primary"
            >
              <strong className="text-primary">{service.baslik}</strong>
              <p className="mt-2 text-sm text-mutedText">
                {service.kisaAciklama}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      {results.length === 0 && (
        <p className="mt-8 text-mutedText">
          “{q}” için hizmet başlığı bulunamadı. {siteContent.actions.exploreServices}.
        </p>
      )}
      <RelatedContent currentPath="/arama" keywords={query ? [query] : ["botoks", "hacamat"]} />
    </section>
  );
}
