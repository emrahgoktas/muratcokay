"use client";

import { useState } from "react";

import { contact } from "@muratcokay/content";

import { MediaImage } from "@/components/media-image";
import { media } from "@/lib/media";
import { siteContent } from "@/lib/page-content";

const destination = encodeURIComponent(contact.address);
const embedSrc = `https://maps.google.com/maps?q=${destination}&z=16&output=embed`;
const externalSrc = `https://www.google.com/maps/search/?api=1&query=${destination}`;

export function ClinicMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2rem] bg-[var(--surface)] shadow-[0_22px_50px_-32px_rgba(15,76,129,0.4)] ring-1 ring-[#0f4c81]/8">
      <div className="aspect-[16/10] w-full">
        {loaded ? (
          <iframe
            title={siteContent.map.loadedLabel}
            src={embedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center"
          >
            <MediaImage
              src={media.hero.src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute inset-0 bg-[#081c30]/55" />
            <span className="relative grid size-14 place-items-center rounded-full bg-white/95 text-primary shadow-sm">
              <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                />
              </svg>
            </span>
            <span className="relative max-w-sm text-sm font-semibold text-white">
              {siteContent.map.load}
            </span>
            <span className="relative max-w-sm text-sm leading-6 text-white/80">
              {contact.address}
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted-foreground)]">{contact.address}</p>
        <a
          href={externalSrc}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-primary"
        >
          {siteContent.map.openExternal} →
        </a>
      </div>
    </div>
  );
}
