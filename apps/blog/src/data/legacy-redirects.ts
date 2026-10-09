export const legacyRedirects = [
  {
    from: "sivi-yuz-germe-nedir",
    to: "sivi-yuz-germe-hacim-vermeden-sikilasma",
  },
  {
    from: "sac-dokulmesinde-mezoterapi-ve-prp",
    to: "sac-dokulmesinde-mezoterapi-prp",
  },
  {
    from: "yuzde-leke-ve-matlik-icin-bilimsel-yaklasimlar",
    to: "yuz-lekeleri-matlik-bilimsel-yaklasimlar",
  },
  {
    from: "kronik-yorgunluk-sendromunda-akupunktur",
    to: "kronik-yorgunluk-nedenleri-yonetimi",
  },
  {
    from: "bel-fitiklarinda-getat-yaklasimlari",
    to: "bel-fitiklarinda-tamamlayici-tip",
  },
  {
    from: "diyabet-ve-hipertansiyonda-butuncul-destek",
    to: "diyabet-hipertansiyon-butuncul-destek",
  },
  {
    from: "varis-hemoroid-suluk-tedavisi-bilimsel-perspektif",
    to: "varis-hemoroid-suluk-tedavisinin-yeri",
  },
  {
    from: "kilo-verme-surecinde-ozon-ve-hacamat-destegi",
    to: "kilo-yonetiminde-ozon-hacamat-destegi",
  },
  {
    from: "yalovada-butuncul-saglik-turizmi",
    to: "yalovada-saglik-turizmi",
  },
] as const;

export function legacyRedirectEntries() {
  return legacyRedirects.map(({ from, to }) => ({
    source: `/yazilar/${from}/`,
    destination: `/yazilar/${to}/`,
  }));
}

export function astroRedirects() {
  return Object.fromEntries(
    legacyRedirectEntries().map(({ source, destination }) => [
      source,
      { status: 301 as const, destination },
    ]),
  );
}
