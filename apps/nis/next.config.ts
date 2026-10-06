import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

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
  poweredByHeader: false,
  trailingSlash: true,
};

export default nextConfig;
