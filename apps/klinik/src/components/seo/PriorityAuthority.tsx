import Link from "next/link";

import {
  formatRevisionTr,
  isPriorityService,
  priorityAuthorityBlocks,
} from "@/lib/seo/content-revision";
import {
  serviceBlogGuides,
  serviceBlogTargets,
} from "@/lib/seo/internal-links";

type PriorityAuthorityProps = {
  slug: string;
};

export function PriorityAuthority({ slug }: PriorityAuthorityProps) {
  if (!isPriorityService(slug)) return null;

  const block = priorityAuthorityBlocks[slug];
  const guide = serviceBlogGuides[slug];
  const local = serviceBlogTargets[slug];

  return (
    <section
      aria-labelledby="priority-authority-title"
      className="py-12 sm:py-16"
      data-eeat="priority-cluster"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
          Son gözden geçirme · {formatRevisionTr()}
        </p>
        <h2
          id="priority-authority-title"
          className="mt-3 font-serif text-3xl font-medium tracking-tight text-primary"
        >
          {block.heading}
        </h2>
        <p className="mt-4 text-base leading-7 text-mutedText">{block.body}</p>
        <ul className="mt-6 grid gap-2 text-sm">
          {guide ? (
            <li>
              Bilimsel rehber:{" "}
              <Link
                href={guide.url}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                {guide.title}
              </Link>
            </li>
          ) : null}
          {local ? (
            <li>
              Yerel bilgilendirme:{" "}
              <Link
                href={local.url}
                className="font-semibold text-primary underline-offset-2 hover:underline"
              >
                {local.title}
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}
