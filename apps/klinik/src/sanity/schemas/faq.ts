export const faqSchema = {
  name: "faq",
  title: "Sık Sorulan Soru",
  type: "document",
  fields: [
    { name: "question", title: "Soru", type: "string" },
    { name: "answer", title: "Yanıt", type: "text" },
  ],
} as const;
