import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/lib/content";
import { mediaCatalog } from "@/lib/media/catalog";

export function ContactCTA() {
  const { contactCta } = siteContent.pages.home;

  return (
    <section id="bolgeler" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-36px_rgba(15,76,129,0.45)]">
        <div className="absolute inset-0">
          <OptimizedImage
            media={mediaCatalog.termal}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#081c30]/62" />
        </div>
        <div className="relative grid gap-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <EditorialHeading
              eyebrow="İletişim"
              title={contactCta.title}
              description={contactCta.description}
              tone="light"
            />
            <p className="mt-5 flex items-start gap-2 text-sm text-white/80">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-[#e6d3b3]"
              />
              {siteContent.contact.address}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <Phone aria-hidden="true" className="size-4 text-[#e6d3b3]" />
              {siteContent.contact.phone.display}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href={siteContent.contact.phone.href}
              className={`${buttonVariants({ size: "lg" })} min-h-12 px-6`}
            >
              <Phone aria-hidden="true" />
              {siteContent.actions.appointment}
            </Link>
            <Link
              href="/iletisim"
              className={`${buttonVariants({ variant: "outline", size: "lg" })} min-h-12 border-white/70 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white`}
            >
              {siteContent.navigation[4].label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
