import { linkifySegments } from "@/lib/seo/internal-links";

export function LinkifiedText({
  text,
  currentPath,
  className,
}: {
  text: string;
  currentPath: string;
  className?: string;
}) {
  const segments = linkifySegments(text, currentPath);

  return (
    <span className={className}>
      {segments.map((segment, index) =>
        segment.href ? (
          <a
            key={`${segment.text}-${index}`}
            href={segment.href}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            {segment.text}
          </a>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        ),
      )}
    </span>
  );
}
