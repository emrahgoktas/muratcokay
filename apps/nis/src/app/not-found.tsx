import { ButtonLink } from "@muratcokay/ui";

export default function NotFound() {
  return (
    <main id="icerik" className="mx-auto max-w-xl px-4 py-16 sm:py-24">
      <p className="font-semibold text-secondary">404</p>
      <h1 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
        Aradığınız sayfa bulunamadı
      </h1>
      <p className="mt-4 text-[var(--muted-foreground)]">
        Ana sayfaya dönerek Yalova bütüncül sağlık bilgilerine ulaşabilirsiniz.
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
