# 2027 içerik üretim takvimi

Yıllık hedef: **96 blog** (8/ay) + **48 klinik** (4/ay) + **24 niş güncelleme** (2/ay) = **168 parça**.

## Dosyalar

| Dosya | Kullanım |
| --- | --- |
| [takvim.csv](takvim.csv) | Google Sheets ve Notion içe aktarma (UTF-8 BOM) |
| [takvim.json](takvim.json) | Otomasyon / script |
| [yasal-kontrol-listesi.md](yasal-kontrol-listesi.md) | AI üretim denetimi |
| [../../yalova-medikal-estetik-blog/src/content/templates/blog-brief.md](../../yalova-medikal-estetik-blog/src/content/templates/blog-brief.md) | Her yazı için doldurulacak brief |
| [../../yalova-medikal-estetik-blog/src/content/templates/yazi-sablonu.md](../../yalova-medikal-estetik-blog/src/content/templates/yazi-sablonu.md) | Yayın iskeleti |

Yeniden üretmek: `node docs/icerik-takvimi-2027/build-takvim.mjs`

## Google Sheets

1. sheets.new açın.
2. **Dosya → İçe aktar → Yükle** ile `takvim.csv` seçin.
3. Ayırıcı: virgül, dönüştürme: UTF-8.
4. İlk satır başlıktır. `Durum` sütununa veri doğrulama ekleyin: planlandı / brief / taslak / yayın.

## Notion

1. Yeni sayfa → **Import → CSV**.
2. `takvim.csv` yükleyin; tablo veritabanına dönüşür.
3. Özellikler: Ay (sayı), Site (seçim), Tip (seçim), Durum (durum).
4. Görünümler: Ay panosu, Site filtresi, “Bu ay yayınlanacak”.

Brief şablonunu Notion’da ayrı bir şablon sayfası yapıp her karta iliştirebilirsiniz.
