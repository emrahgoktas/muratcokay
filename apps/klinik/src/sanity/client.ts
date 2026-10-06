export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-10-06",
  useCdn: true,
} as const;

// Sanity bağlantısı CMS kurulumu sırasında bu yapılandırma ile oluşturulacak.
