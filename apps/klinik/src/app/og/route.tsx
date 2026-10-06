import { siteContent } from "@/lib/content";
import { createOgImage } from "@/lib/media/og";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") ?? siteContent.pages.home.seo.title;
  const domain =
    searchParams.get("domain") ?? siteContent.brand.domain;

  return createOgImage({ title, domain });
}
