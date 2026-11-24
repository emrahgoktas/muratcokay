import { defineMiddleware } from "astro:middleware";

import { blogHomeMarkdown, sites } from "@muratcokay/content";
import {
  agentNotFoundMarkdown,
  markdownResponse,
  prefersMarkdown,
} from "@muratcokay/seo";

export const onRequest = defineMiddleware(async (context, next) => {
  const accept = context.request.headers.get("accept");
  const { pathname } = context.url;

  if (prefersMarkdown(accept) && (pathname === "/" || pathname === "")) {
    return markdownResponse(blogHomeMarkdown());
  }

  const response = await next();

  if (response.status === 404 && prefersMarkdown(accept)) {
    return markdownResponse(
      agentNotFoundMarkdown("Yalova Medikal Estetik Rehberi", {
        home: sites.blog,
        llms: `${sites.blog}/llms.txt`,
        sitemap: `${sites.blog}/sitemap-index.xml`,
      }),
      { status: 404 },
    );
  }

  if (prefersMarkdown(accept) && response.headers.get("Content-Type")?.includes("text/html")) {
    // HTML fallback path for other markdown-preferring requests
    response.headers.set("Vary", "Accept");
  }

  return response;
});
