import type { Metadata } from "next";
import Link from "next/link";

import { contact, doctor, sites } from "@muratcokay/content";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Yalova Bütüncül Sağlık iletişim bilgileri ve klinik randevu kapısı.",
  alternates: {
    canonical: `${sites.klinik}/iletisim`,
  },
  robots: { index: false, follow: true },
};

export default function ContactAliasPage() {
  return (
    <main id="icerik" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-secondary uppercase">
        {doctor.name}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary sm:text-5xl">
        İletişim
      </h1>
      <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
        Randevu ve uygulama için klinik iletişim sayfasını kullanın. Bu sayfa
        yönlendirme amaçlıdır.
      </p>
      <address className="mt-8 space-y-3 text-sm not-italic leading-7 text-[var(--muted-foreground)] sm:text-base">
        <p>{contact.address}</p>
        <p>
          <a href={contact.phone.href} className="text-primary underline">
            {contact.phone.display}
          </a>
        </p>
        <p>
          <a href={contact.email.href} className="text-primary underline">
            {contact.email.display}
          </a>
        </p>
        <p>{contact.workingHours}</p>
      </address>
      <p className="mt-8 text-sm text-[var(--muted-foreground)]">
        Klinik iletişim formu:{" "}
        <Link href={`${sites.klinik}/iletisim`} className="text-primary underline">
          {sites.klinik.replace("https://", "")}/iletisim
        </Link>
      </p>
      <p className="mt-4 text-sm text-[var(--muted-foreground)]">
        Niş ana sayfa iletişim bölümü:{" "}
        <Link href="/#iletisim" className="text-primary underline">
          /#iletisim
        </Link>
      </p>
    </main>
  );
}