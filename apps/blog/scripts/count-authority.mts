import { articleWordCount } from "../src/data/authority/compose.ts";
import { clusters, pillars } from "../src/data/authority/index.ts";

const rows = [
  ...pillars.map((item) => ({
    kind: "pillar",
    slug: item.slug,
    title: item.title,
    words: articleWordCount(item),
    target: 3000,
  })),
  ...clusters.map((item) => ({
    kind: "cluster",
    slug: item.slug,
    title: item.title,
    words: articleWordCount(item),
    target: 1500,
  })),
];

for (const row of rows) {
  const mark = row.words >= row.target ? "OK" : "SHORT";
  console.log(`${mark}\t${row.kind}\t${row.words}\t${row.slug}\t${row.title}`);
}

const pillarWords = rows
  .filter((row) => row.kind === "pillar")
  .reduce((sum, row) => sum + row.words, 0);
const clusterWords = rows
  .filter((row) => row.kind === "cluster")
  .reduce((sum, row) => sum + row.words, 0);
const short = rows.filter((row) => row.words < row.target);

console.log("---");
console.log(`pillars\t${pillars.length}\t${pillarWords}`);
console.log(`clusters\t${clusters.length}\t${clusterWords}`);
console.log(`total_pages\t${rows.length}\t${pillarWords + clusterWords}`);
console.log(`short\t${short.length}`);
