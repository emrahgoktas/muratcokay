"use client";

import Link from "next/link";
import { useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
        500
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary">
        Sayfa şu anda yüklenemedi
      </h1>
      <p className="mt-4 leading-7 text-mutedText">
        Geçici bir sunucu sorunu oluştu. Yeniden deneyin veya aşağıdaki
        sayfalardan devam edin.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={reset}
          className={buttonVariants()}
        >
          Yeniden dene
        </button>
        {siteContent.navigation.slice(0, 3).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={buttonVariants({ variant: "outline" })}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
