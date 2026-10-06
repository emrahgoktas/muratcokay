import Image from "next/image";
import type { StaticImageData } from "next/image";

export function MediaImage({
  src,
  alt,
  priority = false,
  fill = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : src.width}
      height={fill ? undefined : src.height}
      sizes={sizes}
      quality={68}
      placeholder="blur"
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
