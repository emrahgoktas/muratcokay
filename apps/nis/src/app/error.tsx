"use client";

import { ButtonLink } from "@muratcokay/ui";

export default function ErrorPage() {
  return (
    <main id="icerik" className="mx-auto max-w-xl px-4 py-16 sm:py-24">
      <p className="font-semibold text-secondary">500</p>
      <h1 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
        Sayfa şu anda yüklenemedi
      </h1>
      <p className="mt-4 text-[var(--muted-foreground)]">
        Beklenmeyen bir hata oluştu. Ana sayfaya dönerek bilgi alabilirsiniz.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" className="w-full sm:w-auto">
          Ana Sayfaya Dön
        </ButtonLink>
        <ButtonLink href="/#iletisim" variant="secondary" className="w-full sm:w-auto">
          İletişim
        </ButtonLink>
      </div>
    </main>
  );
}
