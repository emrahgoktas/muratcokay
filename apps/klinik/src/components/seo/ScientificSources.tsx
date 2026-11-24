import {
  kaynaklar,
  serviceDetailTemplate,
  type BilimselKaynak,
} from "@/lib/content";

type ScientificSourcesProps = {
  sources?: readonly BilimselKaynak[];
  slug?: keyof typeof kaynaklar;
};

const TRUSTED_HOST =
  /(^|\.)(who\.int|nice\.org\.uk|nih\.gov|nccih\.nih\.gov|fda\.gov|cochranelibrary\.com|pubmed\.ncbi\.nlm\.nih\.gov|ncbi\.nlm\.nih\.gov|mevzuat\.gov\.tr|saglik\.gov\.tr|aad\.org)$/i;

function isTrustedSource(url: string) {
  try {
    return TRUSTED_HOST.test(new URL(url).hostname);
  } catch {
    return false;
  }
}

export function ScientificSources({ sources, slug }: ScientificSourcesProps) {
  const items = sources ?? (slug ? kaynaklar[slug] : []);

  if (!items.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="scientific-sources-title"
      className="py-16 sm:py-20"
      data-eeat="scientific-sources"
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
        <ol className="mt-8 grid list-decimal gap-4 ps-5">
          {items.map((source) => {
            const trusted = isTrustedSource(source.url);
            return (
              <li
                key={source.url}
                className="rounded-2xl border bg-surface px-5 py-4 text-sm leading-7 marker:font-semibold marker:text-primary"
              >
                <cite className="not-italic font-semibold text-primary">
                  {source.baslik}
                </cite>
                <span className="text-mutedText">
                  {" "}
                  ({source.yil}, {source.yayin})
                </span>
                <div className="mt-2">
                  <a
                    href={source.url}
                    rel={
                      trusted
                        ? "noopener noreferrer"
                        : "noopener noreferrer nofollow"
                    }
                    target="_blank"
                    className="break-all text-primary underline-offset-2 hover:underline"
                  >
                    {source.url}
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
