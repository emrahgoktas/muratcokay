import Image from "next/image";

import type { MediaAsset } from "@/lib/media/catalog";
import { IMAGE_QUALITY, RESPONSIVE_SIZES } from "@/lib/media/constants";

type OptimizedImageProps = {
  media: MediaAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
};

export function OptimizedImage({
  media,
  priority = false,
  className,
  sizes = RESPONSIVE_SIZES,
  quality = IMAGE_QUALITY.webp,
  fill = false,
}: OptimizedImageProps) {
  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill={fill}
      width={fill ? undefined : media.src.width}
      height={fill ? undefined : media.src.height}
      sizes={sizes}
      quality={quality}
      placeholder="blur"
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      className={className}
    />
  );
}
