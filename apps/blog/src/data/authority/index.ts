import {
  clusters as holisticClusters,
  pillar as holisticPillar,
} from "./butuncul-saglik";
import { applyExpansion } from "./expand";
import {
  clusters as getatClusters,
  pillar as getatPillar,
} from "./getat";
import {
  clusters as aestheticClusters,
  pillar as aestheticPillar,
} from "./medikal-estetik";
import {
  clusters as yalovaClusters,
  pillar as yalovaPillar,
} from "./yalova-saglik";

export const pillars = [
  applyExpansion(holisticPillar),
  applyExpansion(aestheticPillar),
  applyExpansion(getatPillar),
  applyExpansion(yalovaPillar),
] as const;

export const clusters = [
  ...holisticClusters,
  ...aestheticClusters,
  ...getatClusters,
  ...yalovaClusters,
].map(applyExpansion);

export function getPillar(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}

export function getCluster(slug: string) {
  return clusters.find((cluster) => cluster.slug === slug);
}
