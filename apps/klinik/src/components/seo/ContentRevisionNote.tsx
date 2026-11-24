import {
  CONTENT_REVISION_DATE,
  formatRevisionTr,
} from "@/lib/seo/content-revision";

export function ContentRevisionNote() {
  return (
    <p className="text-xs leading-6 text-mutedText">
      İçerik son gözden geçirme:{" "}
      <time dateTime={CONTENT_REVISION_DATE}>{formatRevisionTr()}</time>. Metin
      genel bilgilendirmedir; kişiye özel uygunluk hekim değerlendirmesiyle
      belirlenir.
    </p>
  );
}
