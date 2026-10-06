import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) walk(p, acc);
    else if (name.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function attr(html, name) {
  const a = html.match(new RegExp(`${name}="([^"]*)"[^>]*content="([^"]*)"`, "i"));
  if (a && a[1].includes("description")) return a[2];
  const b = html.match(new RegExp(`content="([^"]*)"[^>]*${name}="description"`, "i"));
  return b ? b[1] : "";
}

function scan(root, label) {
  const files = walk(root);
  const rows = files.map((f) => {
    const html = readFileSync(f, "utf8");
    const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || ["", ""])[1].trim();
    const desc =
      (html.match(/name="description"[^>]*content="([^"]*)"/i) ||
        html.match(/content="([^"]*)"[^>]*name="description"/i) || ["", ""])[1];
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
      m[1].replace(/<[^>]+>/g, "").trim(),
    );
    const canonical =
      (html.match(/rel="canonical"[^>]*href="([^"]*)"/i) ||
        html.match(/href="([^"]*)"[^>]*rel="canonical"/i) || ["", ""])[1];
    const author = /author-box|Yazar kutusu|authorText|Uzm\. Dr\. Yaşar Murat/i.test(html);
    const legal = /bilgilendirme amaçlı/i.test(html);
    const faq = /faq|sık sorulan/i.test(html);
    return {
      f: f.replace(root, ""),
      title,
      desc,
      h1n: h1s.length,
      canonical,
      author,
      legal,
      faq,
    };
  });
  const titles = {};
  for (const r of rows) titles[r.title] = (titles[r.title] || 0) + 1;
  const content = rows.filter((r) => !/404|500/.test(r.f));
  console.log(
    JSON.stringify(
      {
        label,
        pages: rows.length,
        missingTitle: rows.filter((r) => !r.title).length,
        missingDesc: rows.filter((r) => !r.desc).map((r) => r.f),
        missingH1: rows.filter((r) => r.h1n === 0).map((r) => r.f),
        multiH1: rows.filter((r) => r.h1n > 1).map((r) => r.f),
        missingCan: rows.filter((r) => !r.canonical).map((r) => r.f),
        dupTitles: Object.entries(titles).filter(([, n]) => n > 1),
        noLegal: content.filter((r) => !r.legal).map((r) => r.f),
        noAuthor: content.filter((r) => !r.author).map((r) => r.f),
        noFaq: content.filter((r) => !r.faq).map((r) => r.f),
      },
      null,
      2,
    ),
  );
}

scan("d:/Projeler/muratcokay/yalova-medikal-estetik-blog/dist", "blog");
scan("d:/Projeler/muratcokay/yalova-butuncul-saglik/dist", "nis");
