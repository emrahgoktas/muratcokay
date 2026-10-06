import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary">
        Aradığınız sayfa bulunamadı
      </h1>
      <p className="mt-4 leading-7 text-mutedText">
        Bağlantı değişmiş veya hatalı yazılmış olabilir. Yalova’daki hizmet,
        bölge ve iletişim sayfalarından devam edebilirsiniz. Bu sayfa
        bilgilendirme amaçlıdır.
      </p>
      <nav aria-label="Önerilen sayfalar" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {siteContent.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={buttonVariants({
              variant: item.href === "/" ? "default" : "outline",
            })}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
