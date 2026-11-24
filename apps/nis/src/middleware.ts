import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { nisHomeMarkdown, sites } from "@muratcokay/content";
import {
  agentNotFoundMarkdown,
  markdownResponse,
  prefersMarkdown,
} from "@muratcokay/seo";

const knownExact = new Set([
  "/",
  "/gizlilik",
  "/gizlilik/",
  "/privacy",
  "/privacy/",
  "/about",
  "/about/",
  "/contact",
  "/contact/",
  "/llms.txt",
  "/llms-full.txt",
  "/robots.txt",
  "/sitemap.xml",
]);

function isKnownPath(pathname: string) {
  if (knownExact.has(pathname)) return true;
  if (pathname.startsWith("/hizmetler/")) return true;
  if (pathname.startsWith("/og")) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accept = request.headers.get("accept");

  if (prefersMarkdown(accept)) {
    if (pathname === "/" || pathname === "") {
      return markdownResponse(nisHomeMarkdown());
    }
    if (!isKnownPath(pathname)) {
      return markdownResponse(
        agentNotFoundMarkdown("Yalova Bütüncül Sağlık", {
          home: sites.nis,
          llms: `${sites.nis}/llms.txt`,
          sitemap: `${sites.nis}/sitemap.xml`,
        }),
        { status: 404 },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|media/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff2)$).*)",
  ],
};
