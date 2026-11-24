# SEO / GEO Faz 2 — Üst katman

## Kod

- `Accept: text/markdown` müzakeresi (klinik/niş middleware, blog Astro middleware)
- Agent-friendly 404 markdown gövdesi
- `/llms-full.txt` + `llms.txt` pointer
- Ana sayfa alıntı özeti (`data-geo-cite`)
- Organization / MedicalBusiness `alternateName` + `knowsAbout` (marka araması)

## Doğrulama

```bash
curl -sS -L -i -H 'Accept: text/markdown' https://www.uzmdrmuratcokay.com.tr/
# Content-Type: text/markdown; Vary: Accept

curl -sS -L -i -H 'Accept: text/markdown' https://www.uzmdrmuratcokay.com.tr/__ora-404-probe
# HTTP 404 + markdown gövde (≥20 karakter, llms.txt linki)

curl -sS https://www.uzmdrmuratcokay.com.tr/llms-full.txt | head
```

Aynı kontroller blog ve niş domainlerinde.

## Bilinçli sınır

Speakable / HowTo şeması eklenmedi (tıbbi iletişim riski). FAQ + Article yeterli.
