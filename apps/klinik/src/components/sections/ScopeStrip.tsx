import { CountUp } from "@/components/motion/CountUp";
import { serviceCatalog, siteContent } from "@/lib/content";

const stats = [
  {
    value: serviceCatalog.length,
    label: "Hizmet başlığı",
    suffix: "",
  },
  {
    value: siteContent.pages.home.trustBadges.length,
    label: "Güven vurgusu",
    suffix: "",
  },
  {
    value: siteContent.brand.values.length,
    label: "Klinik değeri",
    suffix: "",
  },
] as const;

export function ScopeStrip() {
  return (
    <section
      aria-label="Klinik kapsamı"
      className="px-4 pb-4 sm:px-6 lg:px-8"
      data-reveal="fade"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-3 rounded-[1.5rem] border border-[var(--gold)]/35 bg-white/70 px-3 py-5 shadow-[0_18px_40px_-28px_rgba(15,76,129,0.35)] sm:gap-6 sm:px-8 sm:py-7">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="text-center"
            style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
          >
            <p className="font-serif text-3xl font-medium tracking-tight text-primary sm:text-4xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
