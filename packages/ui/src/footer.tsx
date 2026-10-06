import { contact, doctor, legalNotice } from "@muratcokay/content";

export function Footer({
  description,
  extraLinks = [],
}: {
  description?: string;
  extraLinks?: readonly { label: string; href: string }[];
}) {
  return (
    <footer className="border-t border-[color:color-mix(in_srgb,#c4a574_35%,transparent)] bg-[#efe8dc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <section>
          <p className="font-semibold text-[var(--primary)]">{doctor.name}</p>
          <p className="mt-1 text-sm text-[var(--secondary)]">{doctor.tagline}</p>
          {description ? (
            <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
              {description}
            </p>
          ) : null}
        </section>
        {extraLinks.length > 0 ? (
          <section>
            <h2 className="font-semibold text-[var(--primary)]">Sayfalar</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {extraLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <section>
          <h2 className="font-semibold text-[var(--primary)]">İletişim</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-[var(--muted-foreground)]">
            <p>{contact.address}</p>
            <p>
              <a href={contact.phone.href}>{contact.phone.display}</a>
            </p>
            <p>
              <a href={contact.email.href}>{contact.email.display}</a>
            </p>
            <p>{contact.workingHours}</p>
          </address>
        </section>
      </div>
      <p
        id="yasal-bilgilendirme"
        className="mx-auto max-w-7xl px-4 pb-24 text-xs leading-6 text-[var(--muted-foreground)] sm:px-6 md:pb-8 lg:px-8"
      >
        {legalNotice}
      </p>
    </footer>
  );
}
