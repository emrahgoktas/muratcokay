import type { ReactNode } from "react";

import { MediaImage } from "@/components/media-image";
import type { MediaAsset } from "@/lib/media";

export function PhotoCard({
  image,
  title,
  description,
  featured = false,
  children,
}: {
  image: MediaAsset;
  title: string;
  description: string;
  featured?: boolean;
  children?: ReactNode;
}) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[1.7rem] bg-white shadow-[0_22px_50px_-32px_rgba(15,76,129,0.45)] ring-1 ring-[#0f4c81]/8 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[5/3]"}`}
      >
        <MediaImage
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
          sizes={featured ? "(max-width: 768px) 100vw, 70vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081c30]/85 via-[#081c30]/15 to-transparent" />
        <h3 className="absolute inset-x-4 bottom-4 font-serif text-2xl leading-tight font-medium text-white sm:inset-x-5 sm:text-[1.7rem]">
          {title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-6 text-[var(--muted-foreground)]">{description}</p>
        {children}
      </div>
    </article>
  );
}
