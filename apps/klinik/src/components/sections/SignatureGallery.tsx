import { OptimizedImage } from "@/components/media/OptimizedImage";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import { mediaCatalog } from "@/lib/media/catalog";

const tiles = [
  {
    media: mediaCatalog.karsilama,
    label: "Karşılama",
    className: "min-h-[18rem] md:col-span-7 md:row-span-2 md:min-h-[32rem]",
  },
  {
    media: mediaCatalog.akupunkturRoom,
    label: "Uygulama alanı",
    className: "min-h-[14rem] md:col-span-5",
  },
  {
    media: mediaCatalog.butuncul,
    label: "Görüşme",
    className: "min-h-[14rem] md:col-span-5",
  },
  {
    media: mediaCatalog.hacamat,
    label: "GETAT",
    className: "min-h-[13rem] md:col-span-4",
  },
  {
    media: mediaCatalog.muayene,
    label: "Muayene ortamı",
    className: "min-h-[13rem] md:col-span-4",
  },
  {
    media: mediaCatalog.termal,
    label: "Yalova",
    className: "min-h-[13rem] md:col-span-4",
  },
] as const;

export function SignatureGallery() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <EditorialHeading
          eyebrow="Mekân"
          title="Yalova Merkez'de sakin bir klinik ritmi"
          description="Görseller ortamı anlatır; uygulama kararı ve uygunluk hekim değerlendirmesiyle belirlenir."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-12">
          {tiles.map((tile) => (
            <figure
              key={tile.label}
              className={`group hover-lift relative overflow-hidden rounded-[1.6rem] ${tile.className}`}
              data-reveal
            >
              <OptimizedImage
                media={tile.media}
                fill
                className="media-zoom object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c30]/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-5 bottom-5 font-serif text-2xl text-white">
                {tile.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
