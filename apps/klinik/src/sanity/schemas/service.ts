export const serviceSchema = {
  name: "service",
  title: "Hizmet",
  type: "document",
  fields: [
    { name: "title", title: "Başlık", type: "string" },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      options: { source: "title" },
    },
    { name: "shortDescription", title: "Kısa Tanım", type: "text" },
    { name: "whatIs", title: "Bu Tedavi Nedir?", type: "array", of: [{ type: "block" }] },
    {
      name: "processSteps",
      title: "Uygulama Adımları",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Başlık", type: "string" },
            { name: "description", title: "Açıklama", type: "text" },
          ],
        },
      ],
    },
    { name: "suitability", title: "Kimler İçin Uygundur?", type: "text" },
    {
      name: "faqs",
      title: "Sık Sorulan Sorular",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    },
    { name: "seoDescription", title: "SEO Açıklaması", type: "text" },
  ],
} as const;
