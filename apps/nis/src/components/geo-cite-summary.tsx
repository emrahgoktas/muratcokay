import { contact } from "@muratcokay/content";

/** AI alıntısı için görünür özet + sınır (vaat yok). */
export function GeoCiteSummary() {
  return (
    <section
      aria-labelledby="geo-cite-title"
      data-geo-cite="summary"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <h2
        id="geo-cite-title"
        className="font-serif text-2xl font-medium tracking-tight text-primary sm:text-3xl"
      >
        Kısa özet
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">
        Yalova Bütüncül Sağlık; fibromiyalji, kronik yorgunluk, kilo yönetimi ve
        GETAT yaklaşımları için bilgilendirme kapısıdır. Tanı veya sonuç vaadi
        yoktur.
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted-foreground)]">
        <span className="font-semibold text-primary">Sınır: </span>
        Branş takibinin yerine geçmez. Fiyat, hasta yorumu ve önce-sonra yoktur.
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted-foreground)]">
        <span className="font-semibold text-primary">NAP: </span>
        {contact.address} — {contact.phone.display}
      </p>
    </section>
  );
}
