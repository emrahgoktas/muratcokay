export const IMAGE_BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1200,
} as const;

export const IMAGE_QUALITY = {
  webp: 80,
  avif: 60,
  default: 80,
} as const;

export const RESPONSIVE_SIZES =
  "(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px";

export const DEFAULT_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGcP//Z";

export const MEDIA_RULES = {
  noPatientPhotos: true,
  noBeforeAfter: true,
  placeholdersMustBeReplaced: false,
} as const;
