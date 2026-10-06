import type { JsonLdSchema } from "@/lib/seo/schema";

export function JsonLd({ data }: { data: JsonLdSchema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
