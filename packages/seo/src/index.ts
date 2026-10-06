import { contact, sites } from "@muratcokay/content";

export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

export type JsonLdNode = {
  "@type": string | string[];
  "@id"?: string;
  [key: string]: JsonLdValue | undefined;
};

export type JsonLdSchema = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

export function buildGraph(
  ...nodes: Array<JsonLdNode | JsonLdNode[] | undefined | false | null>
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat().filter((node): node is JsonLdNode => Boolean(node)),
  };
}

export function serializeJsonLd(schema: JsonLdSchema) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    addressLocality: "Merkez",
    addressRegion: "YALOVA",
    postalCode: "77100",
    addressCountry: "TR",
  };
}

export function schemaIds(siteUrl: string) {
  return {
    physician: `${siteUrl}/#physician`,
    person: `${siteUrl}/#person`,
    clinic: `${siteUrl}/#clinic`,
    organization: `${siteUrl}/#organization`,
    website: `${siteUrl}/#website`,
    business: `${siteUrl}/#medicalbusiness`,
  };
}

export { sites };
