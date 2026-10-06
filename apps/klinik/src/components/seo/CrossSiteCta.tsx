export function CrossSiteCta({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <aside className="mx-auto mt-10 max-w-4xl rounded-2xl border border-secondary/30 bg-surface p-6">
      <p className="font-semibold text-primary">
        Detaylı bilgi için rehber yazımızı okuyun.
      </p>
      <a href={href} className="mt-3 inline-block font-semibold text-secondary hover:underline">
        {label} →
      </a>
    </aside>
  );
}
