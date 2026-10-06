"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body className="mx-auto max-w-xl px-4 py-24 font-sans text-slate-800">
        <h1 className="text-3xl font-bold">Sayfa yüklenemedi</h1>
        <p className="mt-4 leading-7">
          Beklenmeyen bir hata oluştu. Ana sayfaya dönebilir veya yeniden
          deneyebilirsiniz.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-slate-900 px-4 py-2 text-white"
          >
            Yeniden dene
          </button>
          <Link href="/" className="rounded-lg border px-4 py-2">
            Ana sayfa
          </Link>
        </div>
      </body>
    </html>
  );
}
