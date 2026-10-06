"use client";

import { useRef } from "react";

import { ButtonLink } from "./button";

type NavItem = {
  label: string;
  href: string;
};

export function MobileMenu({
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openMenu() {
    dialogRef.current?.showModal();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-xl border border-[color:color-mix(in_srgb,var(--primary)_18%,transparent)] text-[var(--primary)] xl:hidden"
        aria-label="Menüyü aç"
        onClick={openMenu}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
      </button>
      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 m-0 h-dvh max-h-dvh w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-slate-900/40 open:flex open:justify-end"
        aria-label="Mobil menü"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeMenu();
        }}
        onClose={() => undefined}
      >
        <div className="flex h-full w-[min(100%,20.5rem)] flex-col bg-white shadow-2xl">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-5 py-5">
            <div className="min-w-0">
              <p className="truncate font-semibold text-[var(--primary)]">{name}</p>
              <p className="truncate text-sm text-[var(--secondary)]">{tagline}</p>
            </div>
            <button
              type="button"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200"
              aria-label="Menüyü kapat"
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>
          <nav aria-label="Ana menü" className="grid gap-1 px-3 py-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-[var(--foreground)] no-underline hover:bg-[var(--surface)]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto border-t border-slate-100 p-4">
            <ButtonLink href={appointmentHref} size="lg" className="w-full">
              {appointmentLabel}
            </ButtonLink>
          </div>
        </div>
      </dialog>
    </>
  );
}
