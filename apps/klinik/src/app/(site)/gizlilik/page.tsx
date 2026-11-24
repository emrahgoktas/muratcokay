import type { Metadata } from "next";
import Link from "next/link";

import { privacyContent } from "@muratcokay/content";

import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { withSocialMeta } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  return withSocialMeta({
    title: privacyContent.title,
    description: privacyContent.description,
    path: "/gizlilik",
  });
}

export default function PrivacyPage() {
  return (
    <article className="py-16 sm:py-24" aria-labelledby="privacy-page-title">
      <Breadcrumb
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Gizlilik", path: "/gizlilik" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1
          id="privacy-page-title"
          className="mt-6 font-serif text-4xl font-medium tracking-tight text-primary sm:text-5xl"
        >
          {privacyContent.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-mutedText">
          {privacyContent.intro}
        </p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-mutedText sm:text-base">
          {privacyContent.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-xl font-medium text-primary">
                {section.heading}
              </h2>
              <p className="mt-3">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm text-mutedText">
          İletişim:{" "}
          <Link href="/iletisim" className="font-semibold text-primary hover:underline">
            /iletisim
          </Link>
        </p>
      </div>
    </article>
  );
}
