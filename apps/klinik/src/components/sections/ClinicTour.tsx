import Image from "next/image";

import { ClinicVideoPlayer } from "@/components/media/ClinicVideoPlayer";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import { IMAGE_QUALITY } from "@/lib/media/constants";
import { clinicPhotos, clinicVideos } from "@/lib/media/clinic-photos";

const photos = [clinicPhotos.icMekan, clinicPhotos.muayeneMasasi, clinicPhotos.tabela];

export function ClinicTour() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <EditorialHeading
          eyebrow="Muayenehanemiz"
          title="Yalova Merkez muayenehanemizden kareler"
          description="Muayenehanemizde çekilmiş gerçek fotoğraflar ve kısa bir tanıtım turu."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-[1.6rem] border bg-surface" data-reveal>
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={IMAGE_QUALITY.webp}
                placeholder="blur"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="p-4 text-sm font-medium">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <ClinicVideoPlayer video={clinicVideos.klinikTuru}
          muted={false}
          className="mx-auto mt-8 max-w-3xl" />
      </div>
    </section>
  );
}
