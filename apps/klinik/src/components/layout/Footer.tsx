import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { serviceCatalog, siteContent } from "@/lib/content";

export function Footer() {
  const footerServices = serviceCatalog.filter((service) =>
    ["botoks", "sivi-yuz-germe", "fibromiyalji", "hacamat"].includes(
      service.slug,
    ),
  );

  return (
    <footer className="border-t border-[color:color-mix(in_srgb,var(--gold)_34%,transparent)] bg-[#efe8dc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <section>
          <p className="font-semibold text-primary">{siteContent.brand.name}</p>
          <p className="mt-1 text-sm text-secondary">
            {siteContent.brand.tagline}
          </p>
          <p className="mt-4 text-sm leading-6 text-mutedText">
            {siteContent.seo.description}
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-primary">
            {siteContent.footer.servicesTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-mutedText">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="hover:text-primary"
                >
                  {service.baslik}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-primary">
            {siteContent.footer.contactTitle}
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-mutedText">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{siteContent.contact.address}</span>
            </p>
            <p>
              <a
                href={siteContent.contact.phone.href}
                className="flex items-center gap-3 hover:text-primary"
              >
                <Phone className="size-4 text-accent" />
                {siteContent.contact.phone.display}
              </a>
            </p>
            <p>
              <a
                href={siteContent.contact.email.href}
                className="flex items-center gap-3 hover:text-primary"
              >
                <Mail className="size-4 text-accent" />
                {siteContent.contact.email.display}
              </a>
            </p>
          </address>
        </section>

        <section>
          <h2 className="font-semibold text-primary">
            {siteContent.footer.legalTitle}
          </h2>
          <p className="mt-4 flex items-center gap-3 text-sm text-mutedText">
            <Clock className="size-4 text-accent" />
            {siteContent.contact.workingHours}
          </p>
          <Link
            href="/hakkimda"
            className="mt-4 block text-sm text-mutedText hover:text-primary"
          >
            {siteContent.navigation[3].label}
          </Link>
          <p
            id="yasal-bilgilendirme"
            className="mt-4 text-xs leading-relaxed text-mutedText"
          >
            {siteContent.footer.legalNotice}
          </p>
        </section>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-mutedText sm:px-6 lg:px-8">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
