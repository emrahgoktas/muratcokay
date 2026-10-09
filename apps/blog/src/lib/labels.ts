import { site } from "../data/site";
import type { ClusterContent } from "../data/authority/types";

export function categoryClass(category: ClusterContent["category"] | "pillar") {
  if (category === "estetik") return "badge badge--aesthetic";
  return "badge";
}

export function categoryLabel(category: ClusterContent["category"] | "pillar") {
  if (category === "pillar") return "Ana rehber";
  if (category === "estetik") return site.labels.aesthetic;
  if (category === "getat") return "GETAT";
  if (category === "yalova-saglik") return "Yalova";
  return site.labels.holistic;
}
