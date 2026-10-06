import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:color-mix(in_srgb,var(--gold)_34%,transparent)] bg-[#f6f1ea]/88 shadow-sm shadow-primary/5 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink leading-tight">
          <span className="block truncate font-serif text-lg font-semibold tracking-tight text-primary">
            {siteContent.brand.name}
          </span>
          <span className="block truncate text-xs text-secondary">
            {siteContent.brand.tagline}
          </span>
        </Link>

        <nav
          aria-label={siteContent.accessibility.mainNavigation}
          className="hidden flex-1 items-center justify-center gap-6 md:flex"
        >
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href={siteContent.contact.phone.href}
            className={`${buttonVariants({ size: "lg" })} max-md:!hidden`}
          >
            {siteContent.actions.appointment}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
