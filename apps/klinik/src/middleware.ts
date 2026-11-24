import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { klinikHomeMarkdown, sites } from "@muratcokay/content";
import {
  agentNotFoundMarkdown,
  markdownResponse,
  prefersMarkdown,
} from "@muratcokay/seo";

const CANONICAL_HOST = "www.uzmdrmuratcokay.com.tr";

const knownExact = new Set([
  "/",
  "/hakkimda",
  "/iletisim",
  "/hizmetler",
  "/bolgeler",
  "/gizlilik",
  "/privacy",
  "/about",
  "/contact",
  "/arama",
  "/llms.txt",
  "/llms-full.txt",
  "/robots.txt",
  "/sitemap.xml",
]);

function isPreviewOrLocal(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".vercel.app") ||
    hostname.endsWith(".localhost")
  );
}

function isKnownPath(pathname: string) {
  if (knownExact.has(pathname)) return true;
  if (pathname.startsWith("/hizmetler/")) return true;
  if (pathname.startsWith("/bolgeler/")) return true;
  if (pathname.startsWith("/api/")) return true;
  if (pathname.startsWith("/og")) return true;
  if (pathname.startsWith("/opengraph-image")) return true;
  if (pathname.startsWith("/twitter-image")) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.nextUrl.hostname;

  if (!isPreviewOrLocal(hostname) && hostname === "uzmdrmuratcokay.com.tr") {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  const accept = request.headers.get("accept");
  if (prefersMarkdown(accept)) {
    if (url.pathname === "/") {
      return markdownResponse(klinikHomeMarkdown());
    }
    if (!isKnownPath(url.pathname)) {
      return markdownResponse(
        agentNotFoundMarkdown("Uzm. Dr. Yaşar Murat Çokay klinik sitesi", {
          home: sites.klinik,
          llms: `${sites.klinik}/llms.txt`,
          sitemap: `${sites.klinik}/sitemap.xml`,
        }),
        { status: 404 },
      );
    }
  }

  const response = NextResponse.next();
  if (prefersMarkdown(accept) === false && accept?.includes("text/markdown")) {
    response.headers.append("Vary", "Accept");
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|media/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff2)$).*)",
  ],
};
