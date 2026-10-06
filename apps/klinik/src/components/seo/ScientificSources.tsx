import {
  kaynaklar,
  serviceDetailTemplate,
  type BilimselKaynak,
} from "@/lib/content";

type ScientificSourcesProps = {
  sources?: readonly BilimselKaynak[];
  slug?: keyof typeof kaynaklar;
};

export function ScientificSources({ sources, slug }: ScientificSourcesProps) {
  const items = sources ?? (slug ? kaynaklar[slug] : []);

  if (!items.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="scientific-sources-title"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          id="scientific-sources-title"
          className="text-3xl font-bold tracking-tight text-primary"
        >
          {serviceDetailTemplate.sourcesTitle}
        </h2>
        <p className="mt-3 text-sm leading-7 text-mutedText">
          {serviceDetailTemplate.sourcesNote}
        </p>
        <ul className="mt-8 grid gap-4">
          {items.map((source) => (
            <li
              key={source.url}
              className="rounded-2xl border bg-surface px-5 py-4 text-sm leading-7"
            >
              Kaynak: {source.baslik}, {source.yil}, {source.yayin} —{" "}
              <a
                href={source.url}
                rel="noopener nofollow"
                target="_blank"
                className="break-all text-primary underline-offset-2 hover:underline"
              >
                {source.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
