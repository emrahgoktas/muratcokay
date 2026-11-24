import type { Metadata } from "next";
import Link from "next/link";

import { doctor, sites } from "@muratcokay/content";

export const metadata: Metadata = {
  title: "Hakkında",
  description:
    "Yalova Bütüncül Sağlık niş sitesi ve Uzm. Dr. Yaşar Murat Çokay hakkında bilgilendirme.",
  alternates: {
    canonical: `${sites.klinik}/hakkimda`,
  },
  robots: { index: false, follow: true },
};

export default function AboutAliasPage() {
  return (
    <main id="icerik" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-secondary uppercase">
        {doctor.name}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary sm:text-5xl">
        Hakkında
      </h1>
      <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
        Bu niş site, Yalova’da bütüncül sağlık arayanlar için bilgilendirme
        kapısıdır. Tanı veya sonuç vaadi yoktur.
      </p>
      <div className="mt-8 space-y-5 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
        {doctor.biographyParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
        <p>
          Ayrıntılı hekim profili klinik sitesindedir:{" "}
          <Link
            href={`${sites.klinik}/hakkimda`}
            className="text-primary underline"
          >
            {sites.klinik.replace("https://", "")}/hakkimda
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
