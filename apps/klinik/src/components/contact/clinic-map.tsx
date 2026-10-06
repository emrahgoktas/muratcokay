"use client";

import { useState } from "react";

import { clinicGeo, clinicMapUi as copy, clinicNAP } from "@/lib/contact-ui";

function osmEmbedSrc(lat: number, lng: number) {
  const pad = 0.006;
  const bbox = [lng - pad, lat - pad, lng + pad, lat + pad]
    .map((value) => value.toFixed(5))
    .join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export function ClinicMap() {
  const [loaded, setLoaded] = useState(false);
  const destination = encodeURIComponent(clinicNAP);
  const embedSrc = osmEmbedSrc(clinicGeo.lat, clinicGeo.lng);
  const externalSrc = `https://www.google.com/maps/search/?api=1&query=${destination}`;

  return (
    <div className="overflow-hidden rounded-[2rem] bg-surface shadow-[0_22px_50px_-32px_rgba(15,76,129,0.4)] ring-1 ring-primary/8">
      <div className="aspect-[16/10] w-full">
        {loaded ? (
          <iframe
            title={copy.loadedLabel}
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
            className="relative flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#0f4c81,#0a6b63)] px-6 text-center"
          >
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
              {copy.load}
            </span>
            <span className="relative max-w-sm text-sm leading-6 text-white/80">
              {clinicNAP}
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-col gap-3 border-t border-primary/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mutedText">{clinicNAP}</p>
        <a
          href={externalSrc}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-primary"
        >
          {copy.openExternal} →
        </a>
      </div>
    </div>
  );
}
