import { contact } from "@muratcokay/content";

import { siteContent } from "@/lib/page-content";

export function StickyCta() {
  return (
    <aside
      aria-label="Hızlı iletişim"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-slate-200 bg-slate-200 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={contact.phone.href}
        className="flex min-h-14 items-center justify-center gap-2 bg-primary px-3 text-sm font-semibold text-white no-underline"
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M6 3h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"
          />
        </svg>
        {siteContent.hero.appointment}
      </a>
      <a
        href={contact.whatsapp.href}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 bg-secondary px-3 text-sm font-semibold text-white no-underline"
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M21 12a9 9 0 0 1-13 8L3 21l1-5A9 9 0 1 1 21 12z"
          />
        </svg>
        {siteContent.hero.whatsapp}
      </a>
    </aside>
  );
}
