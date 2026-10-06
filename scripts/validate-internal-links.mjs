import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const jobs = [
  {
    cwd: path.join(root, "dr-murat-cokay-clinic"),
    code: `import { validateInternalLinks } from "./src/lib/seo/internal-links.ts"; const r = validateInternalLinks(); console.log(JSON.stringify(r, null, 2)); if (!r.ok) process.exit(1);`,
  },
  {
    cwd: path.join(root, "yalova-medikal-estetik-blog"),
    code: `import { validateInternalLinks } from "./src/lib/seo/internal-links.ts"; const r = validateInternalLinks(); console.log(JSON.stringify(r, null, 2)); if (!r.ok) process.exit(1);`,
  },
  {
    cwd: path.join(root, "yalova-butuncul-saglik"),
    code: `import { validateInternalLinks } from "./src/lib/seo/internal-links.ts"; const r = validateInternalLinks(); console.log(JSON.stringify(r, null, 2)); if (!r.ok) process.exit(1);`,
  },
];

let failed = false;
for (const job of jobs) {
  console.log(`\n== ${path.basename(job.cwd)} ==`);
  const result = spawnSync("npx", ["tsx", "-e", job.code], {
    cwd: job.cwd,
    encoding: "utf8",
    shell: true,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) failed = true;
}

if (failed) {
  process.exit(1);
}

console.log("\nTüm iç bağlantı katalogları doğrulandı.");
