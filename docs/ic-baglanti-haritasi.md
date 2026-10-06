# İç bağlantı haritası

`linkifyContent(html)` her sitede `src/lib/seo/internal-links.ts` içindedir. Bir anahtar kelime yalnızca ilk geçişte bağlanır; mevcut `<a>` içi atlanır.

Doğrulama: `node scripts/validate-internal-links.mjs`

```mermaid
flowchart LR
  subgraph Klinik["uzmdrmuratcokay.com.tr"]
    KHome["/"]
    KAbout["/hakkimda"]
    KContact["/iletisim"]
    KServices["/hizmetler"]
    KService["/hizmetler/{slug}"]
    KLoc["/bolgeler/{ilce}"]
    KHybrid["/hizmetler/{slug}/{ilce}"]
  end

  subgraph Blog["yalovamedikalestetik.com.tr"]
    BHome["/"]
    BAuthor["/yazar/"]
    BPillar["/rehberler/{pillar}"]
    BCluster["/yazilar/{cluster}"]
  end

  subgraph Nis["yalovabutunculsaglik.com.tr"]
    NHome["/"]
  end

  KHome --> KServices
  KHome --> KAbout
  KServices --> KService
  KService -->|"Detaylı bilgi için rehber yazımızı okuyun."| BCluster
  KService --> KHybrid
  KLoc --> KService
  KHybrid --> KService
  KHybrid --> KLoc
  KAbout --> BAuthor

  BCluster -->|"Bu rehberin ana sayfası"| BPillar
  BPillar --> BCluster
  BCluster <--> BCluster
  BCluster -->|"Bu konuda kliniğimizde uygulanan yaklaşımlar için tıklayın."| KService
  BAuthor --> KAbout

  NHome -->|"Kliniğimizde ve rehberimizde daha fazla bilgi."| KService
  NHome --> BCluster
  NHome --> BPillar
```

## Site içi kurallar

| Kaynak | Hedef |
| --- | --- |
| Hizmet | İlgili cluster yazı + aynı kategorideki hizmetler |
| Cluster | Pillar + kardeş cluster + ilgili hizmet |
| Pillar | Tüm cluster listesi |
| Lokasyon | Popüler hizmetler + hibrit sayfalar |
| Hibrit | Hizmet ana sayfası + bölge ana sayfası |
| Hakkımda | Blog `/yazar/` |

## CTA metinleri

- Klinik → Blog: Detaylı bilgi için rehber yazımızı okuyun.
- Blog → Klinik: Bu konuda kliniğimizde uygulanan yaklaşımlar için tıklayın.
- Niş → Klinik + Blog: Kliniğimizde ve rehberimizde daha fazla bilgi.
