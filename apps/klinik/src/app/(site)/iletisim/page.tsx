import type { Metadata } from "next";
import Link from "next/link";

import { ClinicMap } from "@/components/contact/clinic-map";
import { ContactForm } from "@/components/contact/contact-form";
import { OptimizedImage } from "@/components/media/OptimizedImage";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedContent } from "@/components/seo/RelatedContent";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/lib/content";
import { mediaCatalog } from "@/lib/media/catalog";
import { withSocialMeta } from "@/lib/seo/metadata";
import { contactPageGraph } from "@/lib/seo/schema";

export function generateMetadata(): Metadata {
  return withSocialMeta({
    title: siteContent.pages.contact.seo.title,
    description: siteContent.pages.contact.seo.description,
    path: "/iletisim",
  });
}

export default function ContactPage() {
  const page = siteContent.pages.contact;

  return (
    <>
      <JsonLd data={contactPageGraph()} />
      <section
        aria-labelledby="contact-page-title"
        className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8"
      >
        <Breadcrumb
          items={[
            { name: "Ana Sayfa", path: "/" },
            { name: "İletişim", path: "/iletisim" },
          ]}
        />
        <h1
          id="contact-page-title"
          className="mt-6 font-serif text-4xl font-medium tracking-tight text-primary sm:text-5xl"
        >
          {page.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-mutedText sm:text-base">
          {page.description}
        </p>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_70px_-36px_rgba(15,76,129,0.4)] ring-1 ring-primary/8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72 h-full">
              <OptimizedImage
                media={mediaCatalog.hero}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-[#081c30]/55" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <EditorialHeading
                  eyebrow="Randevu"
                  title={page.form.title}
                  description={page.description}
                  tone="light"
                />
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={siteContent.contact.phone.href}
                    className={`${buttonVariants({ size: "lg" })} min-h-12 px-6`}
                  >
                    {siteContent.contact.phone.display}
                  </Link>
                  <a
                    href={siteContent.contact.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonVariants({ variant: "outline", size: "lg" })} min-h-12 border-white/70 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white`}
                  >
                    {siteContent.actions.whatsapp}
                  </a>
                </div>
                <address className="mt-6 text-sm leading-6 text-white/80 not-italic">
                  <p>{siteContent.contact.address}</p>
                  <p>{siteContent.contact.workingHours}</p>
                </address>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <EditorialHeading
            eyebrow="Konum"
            title={page.map.title}
            description={page.map.description}
          />
          <div className="mt-8">
            <ClinicMap />
          </div>
        </div>

        <p className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {page.legalWarning}
        </p>
      </section>
      <RelatedContent
        currentPath="/iletisim"
        keywords={["Yalova Merkez"]}
        category="local"
      />
    </>
  );
}
