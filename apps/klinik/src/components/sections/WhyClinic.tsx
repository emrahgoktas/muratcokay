import { OptimizedImage } from "@/components/media/OptimizedImage";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import { siteContent } from "@/lib/content";
import { mediaCatalog } from "@/lib/media/catalog";

export function WhyClinic() {
  const { whyClinic } = siteContent.pages.home;

  return (
    <section id="hakkimda" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-34px_rgba(15,76,129,0.5)]">
            <OptimizedImage
              media={mediaCatalog.hero}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <div className="absolute -right-3 -bottom-6 hidden w-44 overflow-hidden rounded-[1.4rem] shadow-2xl ring-4 ring-[#f6f1ea] sm:block lg:-right-8">
            <OptimizedImage
              media={mediaCatalog.portrait}
              className="aspect-[4/5] h-full w-full object-cover"
              sizes="176px"
            />
          </div>
          <p className="mt-10 text-center text-[0.68rem] tracking-[0.2em] text-secondary uppercase sm:mt-12">
            Değerlendirme ortamı
          </p>
        </div>

        <div>
          <EditorialHeading
            eyebrow={whyClinic.eyebrow}
            title={whyClinic.title}
            description={whyClinic.description}
          />
          <p className="mt-4 max-w-xl text-sm leading-7 text-mutedText sm:text-base">
            {whyClinic.detail}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {siteContent.brand.values.map((value, index) => (
              <li
                key={value}
                className="rounded-2xl border border-[var(--gold)]/40 bg-white/70 px-4 py-4"
              >
                <span className="font-serif text-2xl text-[var(--gold)]">
                  0{index + 1}
                </span>
                <p className="mt-2 text-sm font-medium text-primary">{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
