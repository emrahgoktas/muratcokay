export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "light";
}) {
  const light = tone === "light";

  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] uppercase ${
            light ? "text-white/70" : "text-secondary"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-9 ${light ? "bg-white/35" : "bg-[var(--gold)]"}`}
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-serif text-[1.85rem] leading-[1.12] font-medium tracking-tight sm:text-4xl lg:text-[2.55rem] ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-xl text-sm leading-7 sm:text-base ${
            light ? "text-white/80" : "text-[var(--muted-foreground)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
