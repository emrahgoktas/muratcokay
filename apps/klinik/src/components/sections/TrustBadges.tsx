import {
  Building2,
  MapPin,
  Microscope,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { siteContent } from "@/lib/content";
import { mediaCatalog } from "@/lib/media/catalog";

const icons: Record<string, LucideIcon> = {
  hospital: Building2,
  stethoscope: Stethoscope,
  microscope: Microscope,
  location: MapPin,
};

const atmosphere = [
  { media: mediaCatalog.karsilama, label: "Karşılama" },
  { media: mediaCatalog.akupunktur, label: "Uygulama alanı" },
  { media: mediaCatalog.muayene, label: "Muayene ortamı" },
  { media: mediaCatalog.termal, label: "Yalova" },
] as const;

export function TrustBadges() {
  return (
    <section className="px-4 pt-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">{siteContent.pages.home.trustTitle}</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {atmosphere.map((item) => (
            <figure
              key={item.label}
              className="group overflow-hidden rounded-[1.35rem] bg-white shadow-[0_18px_40px_-24px_rgba(15,76,129,0.4)] ring-1 ring-primary/8"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <OptimizedImage
                  media={item.media}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <figcaption className="px-3 py-2.5 text-center text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <ul className="mt-8 grid gap-5 border-t border-[var(--gold)]/35 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.pages.home.trustBadges.map((badge, index) => {
            const Icon = icons[badge.icon];

            return (
              <li key={badge.text} className="flex items-start gap-3">
                <span className="font-serif text-2xl leading-none text-[var(--gold)]">
                  0{index + 1}
                </span>
                <span className="flex items-start gap-3">
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-accent"
                  />
                  <span className="text-sm leading-6 font-medium">{badge.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
