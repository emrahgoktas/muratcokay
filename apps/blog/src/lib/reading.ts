export function countWords(parts: readonly string[]) {
  return parts.join(" ").trim().split(/\s+/u).filter(Boolean).length;
}

export function readingMinutes(words: number) {
  return Math.max(1, Math.round(words / 220));
}

export function formatDateTr(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function guideWordCount(content: {
  introduction: readonly string[];
  sections: readonly {
    paragraphs: readonly string[];
    bullets?: readonly string[];
  }[];
  faqs: readonly { question: string; answer: string }[];
}) {
  return countWords([
    ...content.introduction,
    ...content.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    ...content.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ]);
}
