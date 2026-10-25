import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { contact, doctor, sites } from "@muratcokay/content";
import { ButtonLink } from "@muratcokay/ui";

import { MediaImage } from "@/components/media-image";
import { SectionHeading } from "@/components/section-heading";
import { media } from "@/lib/media";
import {
  getNisService,
  klinikCanonical,
  nisServicePages,
} from "@/lib/nis-services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return nisServicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getNisService(slug);

  if (!page) {
    return { title: "Hizmet bulunamadı" };
  }

  const path = `/hizmetler/${page.slug}/`;
  const canonical = page.canonicalToKlinik
    ? klinikCanonical(page.klinikPath)
    : new URL(path, sites.nis).toString();

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.description,
      url: new URL(path, sites.nis).toString(),
      locale: "tr_TR",
      type: "article",
    },
  };
}

export default async function NisServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getNisService(slug);

  if (!page) {
    notFound();
  }

  const heroImage =
    slug === "fibromiyalji"
      ? media.fibromiyalji
      : slug === "kronik-yorgunluk"
        ? media.yorgunluk
        : slug === "kilo-yonetimi"
          ? media.kilo
          : media.hacamat;

  return (
    <main id="icerik">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-secondary uppercase">
              {doctor.name}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight font-medium tracking-tight text-primary sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
              {page.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#iletisim" size="lg" className="w-full sm:w-auto">
                Bilgi talebi
              </ButtonLink>
              <ButtonLink
                href={contact.whatsapp.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[16rem] sm:min-h-[22rem] lg:min-h-full">
            <MediaImage
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20" data-reveal>
        <SectionHeading
          eyebrow="Bilgilendirme"
          title="Değerlendirme çerçevesi"
          description="Aşağıdaki metin genel bilgilendirme amaçlıdır; tıbbi tavsiye veya sonuç vaadi değildir."
        />
        <div className="mt-10 space-y-10">
          {page.sections.map((section) => (
            <article key={section.heading} data-reveal>
              <h2 className="font-serif text-2xl font-medium text-primary">
                {section.heading}
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[color-mix(in_srgb,var(--gold)_35%,transparent)] bg-[color-mix(in_srgb,#fffdf8_88%,transparent)] p-6">
          <p className="text-sm leading-6 text-[var(--muted-foreground)]">
            Klinik uygulamalar ve hizmet ayrıntıları için ana site sayfasını
            inceleyebilirsiniz.
          </p>
          <Link
            href={klinikCanonical(page.klinikPath)}
            className="mt-3 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Klinik hizmet sayfası →
          </Link>
        </div>
      </section>
    </main>
  );
}
