import { siteContent } from "@/lib/content";
import { createOgImage } from "@/lib/media/og";

export const alt =
  "Yalova'da medikal estetik ve bütüncül sağlık — Uzm. Dr. Yaşar Murat Çokay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage({
    title: siteContent.pages.home.hero.title,
    domain: siteContent.brand.domain,
  });
}
