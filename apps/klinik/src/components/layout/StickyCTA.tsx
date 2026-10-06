import { MessageCircle, Phone } from "lucide-react";

import { siteContent } from "@/lib/content";

export function StickyCTA() {
  return (
    <aside
      aria-label={siteContent.accessibility.quickContact}
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t bg-border pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={siteContent.contact.phone.href}
        className="flex min-h-14 items-center justify-center gap-2 bg-primary px-4 text-sm font-semibold text-white"
      >
        <Phone className="size-5" />
        {siteContent.actions.phone}
      </a>
      <a
        href={siteContent.contact.whatsapp.href}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 bg-secondary px-4 text-sm font-semibold text-white"
      >
        <MessageCircle className="size-5" />
        {siteContent.actions.whatsapp}
      </a>
    </aside>
  );
}
