import Link from "next/link";

import { doctor, sites } from "@muratcokay/content";

import { OptimizedImage } from "@/components/media/OptimizedImage";
import { mediaCatalog } from "@/lib/media/catalog";

export function PhysicianCard() {
  return (
    <aside
      aria-labelledby="physician-card-title"
      className="border-y border-primary/10 bg-surface/60 py-10 sm:py-12"
      data-eeat="physician"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 sm:flex-row sm:items-start sm:px-6 lg:px-8">
        <OptimizedImage
          media={mediaCatalog.portrait}
          className="size-24 shrink-0 rounded-2xl object-cover sm:size-28"
          sizes="112px"
        />
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
            Değerlendiren hekim
          </p>
          <h2
            id="physician-card-title"
            className="mt-2 font-serif text-2xl font-medium tracking-tight text-primary"
          >
            {doctor.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-mutedText">
            {doctor.jobTitle}
          </p>
          <p className="mt-3 text-sm leading-7 text-mutedText">
            {doctor.biography}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <Link
                href="/hakkimda"
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                Klinik profil
              </Link>
            </li>
            <li>
              <a
                href={`${sites.blog}/yazar/`}
                className="font-semibold text-primary underline-offset-2 hover:underline"
                rel="noopener noreferrer"
              >
                Blog yazar sayfası
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
