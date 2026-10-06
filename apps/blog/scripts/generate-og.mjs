import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

import { clusters, pillars } from "../src/data/authority/index.ts";
import { posts } from "../src/data/posts.ts";
import { site } from "../src/data/site.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fontsDir = path.resolve(root, "../../shared-media/fonts");
const outDir = path.join(root, "public/og");

const pages = [
  { slug: "anasayfa", title: site.name },
  { slug: "rehberler", title: "Kapsamlı Sağlık Rehberleri" },
  ...pillars.map((pillar) => ({
    slug: `rehberler--${pillar.slug}`,
    title: pillar.title,
  })),
  ...clusters.map((cluster) => ({
    slug: `yazilar--${cluster.slug}`,
    title: cluster.title,
  })),
  ...posts.map((post) => ({
    slug: `yazilar--${post.slug}`,
    title: post.title,
  })),
];

function ogTree(title) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background:
          "linear-gradient(135deg, #0F4C81 0%, #0D9488 58%, #2E8B57 100%)",
        color: "#FFFFFF",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 920,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 22,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    opacity: 0.9,
                  },
                  children: "Yalova Medikal Estetik ve Bütüncül Sağlık",
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: title.length > 52 ? 46 : 56,
                    fontWeight: 700,
                    lineHeight: 1.15,
                  },
                  children: title,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              fontSize: 24,
            },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", flexDirection: "column", gap: 6 },
                  children: [
                    {
                      type: "div",
                      props: { children: "Uzm. Dr. Yaşar Murat Çokay" },
                    },
                    {
                      type: "div",
                      props: {
                        style: { opacity: 0.85 },
                        children: "yalovamedikalestetik.com.tr",
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: { style: { opacity: 0.85 }, children: "Yalova" },
              },
            ],
          },
        },
      ],
    },
  };
}

const unique = [...new Map(pages.map((page) => [page.slug, page])).values()];
try {
  await access(path.join(fontsDir, "Inter-Bold.ttf"));
} catch {
  console.warn("OG fontları yok; mevcut public/og korunuyor.");
  process.exit(0);
}
const fonts = [
  {
    name: "Inter",
    data: await readFile(path.join(fontsDir, "Inter-Bold.ttf")),
    weight: 700,
    style: "normal",
  },
  {
    name: "Inter",
    data: await readFile(path.join(fontsDir, "Inter-Bold-ext.ttf")),
    weight: 700,
    style: "normal",
  },
];

await mkdir(outDir, { recursive: true });

for (const page of unique) {
  const svg = await satori(ogTree(page.title), {
    width: 1200,
    height: 630,
    fonts,
  });
  const png = new Resvg(svg).render().asPng();
  await writeFile(path.join(outDir, `${page.slug}.png`), png);
}

console.log(`OG: ${unique.length} görsel yazıldı → public/og`);
