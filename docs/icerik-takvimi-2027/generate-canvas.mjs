import { readFileSync, writeFileSync } from "node:fs";

const data = JSON.parse(
  readFileSync(new URL("./takvim.json", import.meta.url), "utf8"),
);

const items = data.rows.map((r) => ({
  ay: r.ay,
  ayAdi: r.ayAdi,
  tema: r.tema,
  site: r.site,
  tip: r.tip,
  baslik: r.baslik,
  kw: r.hedefKw,
  links: r.icLinkler,
}));

const src = `import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  CollapsibleSection,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Select,
  Stack,
  Stat,
  Table,
  Text,
  useCanvasState,
  useMemo,
} from "cursor/canvas";

type Site = "blog" | "klinik" | "nis";

type Item = {
  ay: number;
  ayAdi: string;
  tema: string;
  site: Site;
  tip: string;
  baslik: string;
  kw: string;
  links: string;
};

type Month = { n: number; name: string; theme: string };

const MONTHS: Month[] = ${JSON.stringify(data.months, null, 2)};

const ITEMS: Item[] = ${JSON.stringify(items, null, 2)};

const SITE_LABEL: Record<Site | "all", string> = {
  all: "Tüm siteler",
  blog: "Blog",
  klinik: "Klinik",
  nis: "Niş",
};

export default function IcerikTakvimi2027() {
  const [month, setMonth] = useCanvasState("month", "1");
  const [site, setSite] = useCanvasState("site", "all");

  const filtered = useMemo(() => {
    return ITEMS.filter((item) => {
      if (month !== "all" && String(item.ay) !== month) return false;
      if (site !== "all" && item.site !== site) return false;
      return true;
    });
  }, [month, site]);

  const selectedMonth = MONTHS.find((m) => String(m.n) === month);
  const blogN = filtered.filter((i) => i.site === "blog").length;
  const clinicN = filtered.filter((i) => i.site === "klinik").length;
  const nisN = filtered.filter((i) => i.site === "nis").length;

  const rowTone = filtered.map((item) =>
    item.site === "blog" ? "info" : item.site === "klinik" ? "success" : "neutral",
  );

  return (
    <Stack gap={20}>
      <Stack gap={6}>
        <H1>2027 içerik üretim takvimi</H1>
        <Text tone="secondary">
          Üç site, 12 ay, 168 parça. Kaynak: docs/icerik-takvimi-2027 · UTF-8 BOM CSV ile Sheets/Notion.
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="96" label="Blog yazısı" tone="info" />
        <Stat value="48" label="Klinik sayfa" tone="success" />
        <Stat value="24" label="Niş güncelleme" />
        <Stat value="14" label="Aylık hedef (8+4+2)" />
      </Grid>

      <Row gap={12} wrap>
        <Select
          value={month}
          onChange={setMonth}
          options={[
            { value: "all", label: "Tüm aylar" },
            ...MONTHS.map((m) => ({
              value: String(m.n),
              label: m.name + " — " + m.theme,
            })),
          ]}
        />
        <Select
          value={site}
          onChange={setSite}
          options={[
            { value: "all", label: "Tüm siteler" },
            { value: "blog", label: "Blog (8/ay)" },
            { value: "klinik", label: "Klinik (4/ay)" },
            { value: "nis", label: "Niş (2/ay)" },
          ]}
        />
      </Row>

      {selectedMonth ? (
        <Card>
          <CardHeader
            trailing={
              <Pill tone="info" active>
                {blogN + " blog · " + clinicN + " klinik · " + nisN + " niş"}
              </Pill>
            }
          >
            {selectedMonth.name}
          </CardHeader>
          <CardBody>
            <Stack gap={8}>
              <H3>{selectedMonth.theme}</H3>
              <Text tone="secondary" size="small">
                Süzülmüş {filtered.length} satır. Pillar ve kümeler blogda; klinik yeni hibrit veya lokasyon; niş mevcut kart güncellemesi.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ) : (
        <Text tone="secondary">12 ayın tamamı: {filtered.length} satır.</Text>
      )}

      <Stack gap={8}>
        <H2>Aylık konu kümeleri</H2>
        <Text tone="secondary" size="small">
          Her ay 1 pillar + 7 cluster (blog), 4 klinik sayfa, 2 niş güncelleme.
        </Text>
        <Table
          headers={["Ay", "Küme", "Hedef anahtar (örnek)"]}
          rows={MONTHS.map((m) => {
            const pillar = ITEMS.find((i) => i.ay === m.n && i.site === "blog" && i.tip === "pillar");
            return [m.name, m.theme, pillar?.kw ?? ""];
          })}
          striped
        />
      </Stack>

      <Stack gap={8}>
        <H2>
          {month === "all" ? "Tüm plan" : selectedMonth?.name} — {SITE_LABEL[site as Site | "all"]}
        </H2>
        <Text tone="secondary" size="small">
          Başlık 60, meta 155 karakter altında doğrulandı. İç linkler mevcut pillar, hizmet ve bölge sayfalarına gider.
        </Text>
        <Table
          headers={["Ay", "Site", "Tip", "Başlık", "Anahtar kelime", "İç bağlantılar"]}
          rows={filtered.map((item) => [
            item.ayAdi,
            SITE_LABEL[item.site],
            item.tip,
            item.baslik,
            item.kw,
            item.links,
          ])}
          rowTone={rowTone}
          striped
          stickyHeader
        />
      </Stack>

      <Callout tone="warning" title="AI üretim — yasal dil">
        tedavi eder → destekler · yok eder → yaklaşım sunar · garantili → bilimsel yaklaşım · en iyi → uzman hekim eşliğinde. Hasta yorumu, fiyat ve öncesi-sonrası görsel yok. Kapanış: Bu içerik bilgilendirme amaçlıdır.
      </Callout>

      <CollapsibleSection title="Yazı iskeleti ve brief">
        <Stack gap={8}>
          <Text>
            Brief: yalova-medikal-estetik-blog/src/content/templates/blog-brief.md. Her yazı kopyalanıp doldurulur.
          </Text>
          <Text tone="secondary" size="small">
            Başlık SEO, meta, H1, 2 paragraf giriş (80–100 kelime), otomatik TOC, 5–7 H2/H3, en az 2 bilimsel dış kaynak, en az 3 iç link, SSS 5–6 + FAQPage, yazar kutusu, uyarı, RelatedContent ×4.
          </Text>
        </Stack>
      </CollapsibleSection>

      <H2>Dışa aktarma</H2>
      <Text>
        Google Sheets veya Notion: docs/icerik-takvimi-2027/takvim.csv (UTF-8 BOM). Yeniden üretmek için node docs/icerik-takvimi-2027/build-takvim.mjs
      </Text>
    </Stack>
  );
}
`;

writeFileSync(
  "C:/Users/Asus Rog/.cursor/projects/d-Projeler-muratcokay/canvases/icerik-takvimi-2027.canvas.tsx",
  src,
  "utf8",
);

console.log("canvas bytes", src.length, "items", items.length);
