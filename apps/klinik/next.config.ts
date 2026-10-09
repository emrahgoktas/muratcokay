import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

import { siteContent } from "./src/lib/content";
import {
  htmlCacheControl,
  securityHeaders,
  staticCacheControl,
} from "./src/lib/seo/headers";

const require = createRequire(import.meta.url);

function withBundleAnalyzer(config: NextConfig) {
  if (process.env.ANALYZE !== "true") {
    return config;
  }

  try {
    return require("@next/bundle-analyzer")({ enabled: true })(config);
  } catch {
    return config;
  }
}

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "../..",
  ),
  transpilePackages: [
    "@muratcokay/content",
    "@muratcokay/seo",
    "@muratcokay/ui",
  ],
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.siteUrl,
  },
  allowedDevOrigins: ["127.0.0.1"],
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["@base-ui/react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 768, 1200, 1920],
    imageSizes: [48, 96, 160, 320],
    qualities: [60, 80],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...securityHeaders],
      },
      {
        source: "/",
        headers: [{ key: "Cache-Control", value: htmlCacheControl }],
      },
      {
        source: "/((?!_next/static|_next/image|og|api).*)",
        headers: [{ key: "Cache-Control", value: htmlCacheControl }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: staticCacheControl }],
      },
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: staticCacheControl }],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
