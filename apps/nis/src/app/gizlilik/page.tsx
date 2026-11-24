import type { Metadata } from "next";
import Link from "next/link";

import { privacyContent, sites } from "@muratcokay/content";

export const metadata: Metadata = {
  title: privacyContent.title,
  description: privacyContent.description,
  alternates: {
    canonical: "/gizlilik/",
    languages: {
      "tr-TR": "/gizlilik/",
      "x-default": "/gizlilik/",
    },
  },
  openGraph: {
    title: privacyContent.title,
    description: privacyContent.description,
    url: `${sites.nis}/gizlilik/`,
    locale: "tr_TR",
    type: "article",
    images: [
      {
        url: "/og/anasayfa.png",
        width: 1200,
        height: 630,
        alt: "Yalova Bütüncül Sağlık",
      },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <main id="icerik" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-secondary uppercase">
        Yasal
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary sm:text-5xl">
        {privacyContent.title}
      </h1>
      <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
        {privacyContent.intro}
      </p>
      <div className="mt-10 space-y-8 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
        {privacyContent.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-xl font-medium text-primary">
              {section.heading}
            </h2>
            <p className="mt-3">{section.body}</p>
          </section>
        ))}
      </div>
      <p className="mt-10 text-sm text-[var(--muted-foreground)]">
        Klinik iletişim:{" "}
        <Link href={`${sites.klinik}/iletisim`} className="text-primary underline">
          {sites.klinik.replace("https://", "")}/iletisim
        </Link>
      </p>
    </main>
  );
}
