import Image from "next/image";

import { ClinicVideoPlayer } from "@/components/media/ClinicVideoPlayer";
import { IMAGE_QUALITY } from "@/lib/media/constants";
import { serviceClinicMedia } from "@/lib/media/clinic-photos";

export function ServiceClinicMedia({ slug }: { slug: string }) {
  const media = serviceClinicMedia[slug];
  if (!media) return null;

  return (
    <section
      aria-labelledby="clinic-media-title"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id="clinic-media-title"
          className="text-3xl font-bold tracking-tight text-primary"
        >
          {media.title}
        </h2>
        <p className="mt-4 leading-7 text-mutedText">{media.description}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.photos.map((photo) => (
            <figure key={photo.caption} className="overflow-hidden rounded-2xl border bg-surface">
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                quality={IMAGE_QUALITY.webp}
                placeholder="blur"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="p-4 text-sm font-medium">{photo.caption}</figcaption>
            </figure>
          ))}
          {media.video ? (
            <ClinicVideoPlayer video={media.video} className="sm:col-span-2 lg:col-span-1" />
          ) : null}
        </div>
      </div>
    </section>
  );
}
