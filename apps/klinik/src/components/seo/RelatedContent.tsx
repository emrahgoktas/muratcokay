import Link from "next/link";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { EditorialHeading } from "@/components/sections/EditorialHeading";
import { allMedia } from "@/lib/media/catalog";
import {
  CLINIC_URL,
  getRelatedContent,
  type LinkCategory,
} from "@/lib/seo/internal-links";

const kindLabel: Record<string, string> = {
  service: "Hizmet",
  article: "Rehber",
  pillar: "Ana rehber",
  location: "Bölge",
  page: "Sayfa",
  hybrid: "Hizmet + bölge",
};

export function RelatedContent({
  currentPath,
  category,
  keywords,
}: {
  currentPath: string;
  category?: LinkCategory;
  keywords?: readonly string[];
}) {
  const items = getRelatedContent({
    currentUrl: currentPath.startsWith("http")
      ? currentPath
      : `${CLINIC_URL}${currentPath}`,
    category,
    keywords,
    limit: 4,
  });

  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="related-content-title"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <EditorialHeading
          title="İlgili içerikler"
          titleId="related-content-title"
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const internal = item.site === "clinic";
            const href = internal ? item.path : item.url;
            const media = allMedia[index % allMedia.length];
            const body = (
              <>
                <OptimizedImage
                  media={media}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute inset-0 bg-[#081c30]/55" />
                <span className="absolute top-5 left-5 text-[0.68rem] font-semibold tracking-[0.2em] text-[#e6d3b3] uppercase">
                  {kindLabel[item.kind] ?? item.kind}
                </span>
                <strong className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight font-medium text-white">
                  {item.title}
                </strong>
              </>
            );
            return (
              <li key={item.id}>
                {internal ? (
                  <Link
                    href={href}
                    className="group relative block min-h-56 overflow-hidden rounded-[1.6rem]"
                  >
                    {body}
                  </Link>
                ) : (
                  <a
                    href={href}
                    className="group relative block min-h-56 overflow-hidden rounded-[1.6rem]"
                  >
                    {body}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
