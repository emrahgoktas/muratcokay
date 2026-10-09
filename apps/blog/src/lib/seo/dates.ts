import { clusters, pillars } from "../../data/authority";

function latestContentDate() {
  return [...pillars, ...clusters]
    .map((item) => item.lastUpdated)
    .sort()
    .at(-1);
}

export function lastmodForPath(pathname: string) {
  const parts = pathname.replace(/^\/|\/$/g, "").split("/").filter(Boolean);

  if (parts[0] === "rehberler" && parts[1]) {
    return pillars.find((pillar) => pillar.slug === parts[1])?.lastUpdated;
  }

  if (parts[0] === "yazilar" && parts[1]) {
    return clusters.find((cluster) => cluster.slug === parts[1])?.lastUpdated;
  }

  if (
    parts.length === 0 ||
    parts[0] === "rehberler" ||
    parts[0] === "yazilar" ||
    parts[0] === "yazar" ||
    parts[0] === "harita"
  ) {
    return latestContentDate();
  }

  return undefined;
}

export function sitemapPriority(pathname: string) {
  const parts = pathname.replace(/^\/|\/$/g, "").split("/").filter(Boolean);

  if (parts.length === 0) return 1;
  if (parts[0] === "rehberler" && parts[1]) return 0.9;
  if (parts[0] === "yazilar" && parts[1]) return 0.8;
  if (
    parts[0] === "rehberler" ||
    parts[0] === "yazilar" ||
    parts[0] === "harita"
  ) {
    return 0.7;
  }

  return 0.5;
}
