import Link from "next/link";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/lib/content";
import { mediaCatalog } from "@/lib/media/catalog";

export function Hero() {
  const { hero } = siteContent.pages.home;

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-16 lg:py-24">
          <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.3em] text-secondary uppercase">
            <span className="h-px w-10 bg-[var(--gold)]" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-5 max-w-xl font-serif text-[2.6rem] leading-[0.96] font-medium tracking-tight text-primary sm:text-6xl lg:text-[4.35rem]"
          >
            Yalova&apos;da
            <span className="mt-1 block italic text-[#8a6a3d]">
              medikal estetik
            </span>
            <span className="mt-1 block">ve bütüncül sağlık</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-mutedText sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteContent.contact.phone.href}
              className={`${buttonVariants({ size: "lg" })} min-h-12 px-6`}
            >
              {siteContent.actions.appointment}
            </Link>
            <Link
              href="/hizmetler"
              className={`${buttonVariants({ variant: "outline", size: "lg" })} min-h-12 px-6`}
            >
              {siteContent.actions.exploreServices}
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-primary sm:grid-cols-3">
            {siteContent.brand.values.map((value) => (
              <li
                key={value}
                className="border-t border-[var(--gold)]/50 pt-3 leading-6"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:min-h-[92svh]">
          <div className="relative h-[22rem] overflow-hidden sm:h-[30rem] lg:absolute lg:inset-0 lg:h-auto">
            <OptimizedImage
              media={mediaCatalog.hero}
              fill
              priority
              className="object-cover object-[center_28%]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081c30]/25 via-transparent to-transparent" />
            <div className="absolute top-6 right-6 hidden w-36 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/80 rotate-3 lg:block">
              <OptimizedImage
                media={mediaCatalog.termal}
                className="aspect-[4/5] h-full w-full object-cover"
                sizes="144px"
              />
            </div>
            <div className="absolute bottom-28 left-[-1.25rem] hidden w-40 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-[#f6f1ea] -rotate-6 lg:block">
              <OptimizedImage
                media={mediaCatalog.akupunktur}
                className="aspect-square h-full w-full object-cover"
                sizes="160px"
              />
            </div>
          </div>

          <aside className="relative z-10 mx-4 -mt-16 mb-6 sm:mx-8 lg:absolute lg:right-8 lg:bottom-8 lg:left-auto lg:mx-0 lg:mt-0 lg:mb-0 lg:w-[23rem]">
            <div className="overflow-hidden rounded-[1.7rem] bg-[#f6f1ea]/96 shadow-[0_28px_70px_-28px_rgba(8,28,48,0.55)] ring-1 ring-white/60 backdrop-blur-md">
              <div className="relative h-24 overflow-hidden">
                <OptimizedImage
                  media={mediaCatalog.portrait}
                  fill
                  className="object-cover"
                  sizes="368px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f6f1ea] to-transparent" />
              </div>
              <div className="px-5 pb-5">
                <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-secondary uppercase">
                  Yalova Merkez
                </p>
                <h2 className="mt-1 font-serif text-2xl font-medium text-primary">
                  Bilgi ve randevu
                </h2>
                <address className="mt-3 space-y-1.5 text-sm not-italic text-foreground">
                  <p>{siteContent.contact.address}</p>
                  <p>
                    <a
                      href={siteContent.contact.phone.href}
                      className="font-semibold text-primary"
                    >
                      {siteContent.contact.phone.display}
                    </a>
                  </p>
                  <p className="text-mutedText">
                    {siteContent.contact.workingHours}
                  </p>
                </address>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
