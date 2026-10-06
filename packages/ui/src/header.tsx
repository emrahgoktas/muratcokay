import { ButtonLink } from "./button";
import { MobileMenu } from "./mobile-menu";

export type NavItem = {
  label: string;
  href: string;
};

export function Header({
  name,
  tagline,
  navigation,
  appointmentHref,
  appointmentLabel,
}: {
  name: string;
  tagline: string;
  navigation: readonly NavItem[];
  appointmentHref: string;
  appointmentLabel: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:color-mix(in_srgb,var(--primary)_10%,transparent)] bg-[#f7f3ec]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-3 px-4 sm:min-h-20 sm:gap-6 sm:px-6 lg:px-8">
        <a href="/" className="min-w-0 max-w-[13rem] flex-1 leading-tight no-underline sm:max-w-xs md:max-w-none md:flex-none">
          <span className="block truncate text-sm font-bold text-[var(--primary)] sm:text-base">
            {name}
          </span>
          <span className="block truncate text-xs text-[var(--secondary)]">
            {tagline}
          </span>
        </a>
        <nav
          aria-label="Ana menü"
          className="hidden flex-1 items-center justify-center gap-5 xl:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--foreground)] no-underline hover:text-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <span className="hidden xl:inline-flex">
            <ButtonLink href={appointmentHref} size="lg">
              {appointmentLabel}
            </ButtonLink>
          </span>
          <MobileMenu
            name={name}
            tagline={tagline}
            navigation={navigation}
            appointmentHref={appointmentHref}
            appointmentLabel={appointmentLabel}
          />
        </div>
      </div>
    </header>
  );
}
