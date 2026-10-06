# SEO / GEO denetim ve yayın stratejisi

Tarih: 6 Ekim 2026. Kapsam: üç site, kaynak kod + üretim HTML taraması + Lighthouse lab + açık web rakip taraması. Screaming Frog ve Rich Results Test canlı domain olmadığı için eşdeğer statik tarama ve şema kod incelemesiyle yapıldı. ChatGPT / Claude / Perplexity alıntı testi siteler indekslenmeden yapılamaz.

**Karar:** Kod yayına alınabilir. Ölçüm (GSC, GA4, GTM) ve Google Business Profile NAP düzeltmesi olmadan “tam hazır” sayılmaz. Durum: **koşullu yayın**.

## 1. Teknik SEO

| Kontrol | Klinik | Blog | Niş |
| --- | --- | --- | --- |
| Title + description + H1 | Şablonla zorunlu | 37/37 HTML tamam | İçerik sayfaları tamam; 404/500’de description yok |
| Duplicate title | Şablon benzersiz | **1 çift:** diyabet-hipertansiyon legacy + cluster aynı title | Yok |
| Kırık iç link | `validateInternalLinks` önceki turda ok | Cluster/pillar haritası doğrulandı | Çapraz CTA’lar sabit URL |
| 404 / 500 | `not-found` + `error` + yönlendirme | 404/500 + iç link | 404/500; 500’de canonical yok |
| robots + sitemap | AI botlar + image sitemap | Aynı | Aynı |
| Canonical + hreflang | Self + tr-TR | Self + tr-TR | Self + tr-TR |
| Şema | @graph Physician / MedicalProcedure / FAQ / Breadcrumb | Article + FAQ + Breadcrumb | Physician + FAQ |
| Mobil | Viewport + Lighthouse a11y 97 | 95 | 95 |
| Hız (lab) | Perf 92, LCP 3.2s localhost | 99 / 2.1s | 98 / 2.3s |

P1: Blog’da `diyabet-ve-hipertansiyonda-butuncul-destek` (legacy) ile `diyabet-hipertansiyon-butuncul-destek` (cluster) aynı title. Legacy’ye canonical veya noindex.

P1: GBP kaydında adres “Bora Sk. No:17 D:b”, sitede “No:17/A”. Yayın öncesi tek NAP.

P2: Klinik hizmet sayfalarında bilimsel dış kaynak yok (blogda var).

P2: Kontrast (Lighthouse color-contrast).

P3: Niş 404/500 meta; klinik LCP canlı CDN’de doğrulanacak.

Screaming Frog yerine: Astro `dist` 40 HTML taranır; klinik 61 SSG rota şablonla üretilir.

## 2. İçerik

| Kontrol | Bulgu |
| --- | --- |
| Yönetim / destek / yaklaşım | Klinik ve niş kaynakta yasak kalıp yok. Blog’da “yok eder” çoğunlukla yasak dile karşı uyarı veya SSS sorusu; 2 yerde “düzeltme payını yok eder” metaforu — gözden geçir |
| Yorum / fiyat / önce-sonra | Yok |
| Yazar kutusu | Blog yazı + rehber + yazar sayfası var. Klinik: Physician şema + /hakkimda, ayrı kutu yok. Niş: isim var, kutu yok |
| Yasal uyarı | Footer / şablon / hizmet warning. Blog HTML’de 0 eksik |
| FAQ | Hizmet, hibrit, pillar, cluster, niş evet. Liste/anasayfa sınırlı |
| Bilimsel kaynak | Blog pillar/cluster: WHO, NICE, TTB, SB. Legacy yazılarda kaynak bölümü yok. Klinik sayfalarında yok |

## 3. Yerel SEO

- GBP: “Uzman Doktor Yaşar Murat Çokay” kaydı var (Bora Sk., sınırlı yorum). Kategori, fotoğraf (onamlı, süreç görseli yok), hizmet listesi, NAP hizası **manuel**.
- NAP kodda tutarlı: Fevzi Çakmak Mah. Bora Sk. No:17/A, 0505 244 51 23, muryas2@mynet.com. Blog gövdede NAP yok (bilinçli); footer/yazar kliniğe bağlar.
- Yerel backlink: henüz yok. Hedef: il sağlık duyuruları, oda/dernek, Yalova haber (yorum/fiyat olmadan), çapraz 3 site.
- Lokasyon sayfaları: 8 ilçe; introduction / access / transport / travelTime ayrı. Hibritler mevcut kombinasyonu tekrarlamaz.

## 4. GEO

- `llms.txt` üç sitede var ve hizmet/rehber haritasını listeler.
- robots: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, Applebot-Extended açık.
- Şema zengin; FAQ görünür metinle eşleşmeli (hibritte tek görünen soru riski önceki turda not edildi).
- Dil kısa cümle, H2, SSS, tarih — AI özetine uygun.
- Canlı alıntı testi: domainler indekslenmeden ChatGPT/Claude/Perplexity site adını bilmez. İlk 30 gün sonra tekrarla. Mevcut bilgi GBP + EAH GETAT arşiv haberine dayanır.

## 5. Yayın öncesi

| Madde | Durum |
| --- | --- |
| Ana site kod | Koşullu hazır |
| Blog kod | Koşullu hazır (duplicate title düzelt) |
| Niş kod | Koşullu hazır |
| GSC üç property | Yok — Hafta 1 |
| GA4 | Yok — Hafta 1 |
| GTM | Yok — Hafta 1 |
| Sosyal hesap bağlama | Yok; yasal olarak influencer/yorum yasak. Yalnızca profil linki |

## 6. İlk 90 gün

- Hafta 1: DNS/HTTPS, üç site canlı, GSC + sitemap, GA4/GTM, GBP NAP, Rich Results örnek URL.
- Hafta 2–4: Günlük GSC kapsam, 404, ilk alıntı (oda, yerel haber, çapraz site).
- Ay 2: Takvim uyarınca 8+4+2 üretim; GSC sorgu/sayfa.
- Ay 3: İlk sıralama özeti, fırsat kelime revizyonu, AI alıntı tekrar testi.

## 7. Aylık rapor şablonu

1. Organik oturum / kullanıcı (GA4, üç property)
2. Tıklama, gösterim, ortalama konum, CTR (GSC)
3. En çok görüntülenen 10 URL
4. Dönüşüm: `tel:` tıklama, WhatsApp çıkışı, /iletisim (GA4 olay)
5. Yeni/kayıp sorgular
6. Teknik: dizin dışı, 404, CWV
7. Yasal: yeni metinde yasak kalıp taraması
8. Aksiyon 5 madde

## 8. Rakip analizi (Yalova, açık kaynak)

| Rakip | Güç | Zayıf | Fırsat kelime |
| --- | --- | --- | --- |
| Yalova EAH GETAT | Resmî izin, hacim, 7 uygulama | Hastane dili, yerel SEO sayfası yok, randevu sistemi hantal | yalova hacamat hekim, yalova akupunktur muayenehane |
| Aktif International Yalova | Hastane otoritesi, dermatoloji + medikal estetik sayfası | Genel network içeriği, Yalova niş zayıf, “gençleştirme” iddia dili | yalova botoks kimler için, yalova dolgu değerlendirme |
| Aktif International Çiftlikköy | İlçe konum, cerrahi + estetik | Çiftlikköy’e kilitli, GETAT yok | çiftlikköy fibromiyalji, çiftlikköy botoks (hibritleriniz) |
| Op. Dr. İlknur Turan | Sertifikalı medikal estetik, Doktorsitesi | GETAT/bütüncül yok, yorum ağırlıklı platform | yalova medikal estetik bilgilendirme (yorumsuz) |
| Yalova Hacamat (Cevher Sk / sosyal) | Yerel arama + TikTok | Hekim sitesi değil, yasal risk, zayıf E-E-A-T | yalova hacamat bilimsel, getat yalova hekim |

Kaçınılacak: fiyat savaşı, yorum toplama, önce-sonra, “en iyi / garantili”.

## 12 aylık yol haritası (2027 takvimiyle)

| Çeyrek | Odak |
| --- | --- |
| Q4 2026 | Yayın, GSC/GA4, GBP, duplicate title, NAP, ilk 4 blog + 2 hibrit |
| Q1 2027 | Fibromiyalji → estetik → yorgunluk kümeleri; EAH ve Aktif boşluğuna bilgi sayfaları |
| Q2 2027 | Kilo, bel, sağlık turizmi; İstanbul/Bursa yol sayfaları |
| Q3 2027 | Saç/cilt, metabolik, kadın sağlığı yönlendirme (hormon vaadi yok) |
| Q4 2027 | Koruyucu, cilt yaşlanması, yıl özeti; ilk yıllık revizyon |

Aylık üretim sabit: 8 blog + 4 klinik + 2 niş. Ayrıntı: `docs/icerik-takvimi-2027`.
