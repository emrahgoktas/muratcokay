"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteContent } from "@/lib/content";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        aria-label={siteContent.accessibility.openMenu}
        className="inline-flex size-10 items-center justify-center rounded-lg border md:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{siteContent.brand.name}</SheetTitle>
          <SheetDescription>{siteContent.brand.tagline}</SheetDescription>
        </SheetHeader>
        <nav
          aria-label={siteContent.accessibility.mainNavigation}
          className="grid gap-1 px-4"
        >
          {siteContent.navigation.map((item) => (
            <SheetClose
              key={item.href}
              render={
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                />
              }
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
        <SheetFooter>
          <SheetClose
            render={
              <Link
                href={siteContent.actions.appointmentHref}
                className={buttonVariants({ size: "lg" })}
              />
            }
          >
            {siteContent.actions.appointment}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
