import { clinicAddress } from "@muratcokay/content";

import { commonSources, createCluster } from "./compose";
import type {
  ClusterContent,
  ContentFaq,
  ExternalSource,
} from "./types";

export type LocalPlaceSeed = {
  slug: string;
  kind: "cluster";
  titles: readonly [string, string, string];
  beats: readonly string[];
};

type LocalPlaceSpec = {
  slug: string;
  title: string;
  pillarSlug: ClusterContent["pillarSlug"];
  category: ClusterContent["category"];
  clinicPath: string;
  clinicAnchor: string;
  keywords: readonly string[];
  description: string;
  service: string;
  educationalPath: string;
  educationalLabel: string;
  intent: string;
  what: readonly string[];
  choose: readonly string[];
  notFor: readonly string[];
  faqs: readonly ContentFaq[];
  sources: readonly ExternalSource[];
  seedTitles: readonly [string, string, string];
  beats: readonly string[];
};

const NAP = clinicAddress;

function localCluster(spec: LocalPlaceSpec): ClusterContent {
  return createCluster({
    slug: spec.slug,
    title: spec.title,
    pillarSlug: spec.pillarSlug,
    category: spec.category,
    description: spec.description,
    lastUpdated: "2026-10-07",
    keywords: spec.keywords,
    introduction: [
      `«${spec.title}» araması, sıralı bir yer listesi veya üstünlük iddiası istemez; Yalova'da ${spec.service} konuşulacak ortamın nasıl süzüleceğini sorar. ${spec.intent}`,
      `12 Kasım 2025 tanıtım çerçevesi «en iyi», yorum, fiyat ve öncesi-sonrası dilini yasaklar. Bu yazı o yasağa uyar: yer seçiminde hekimlik, yetki, hijyen ve rıza ölçütlerini anlatır. Tek adres dayatması yoktur.`,
      `Yalova Merkez, Termal, Çınarcık, Çiftlikköy, Altınova ve Armutlu ile İstanbul-Bursa feribot hattı aynı gün hem uzun yol hem işlem dayatmayı zorlaştırabilir. Adres bilgisi: ${NAP}. Bu, lisanslı bir muayenehane seçeneğidir; kamu izlemi ve ikinci görüş saklıdır.`,
    ],
    sections: [
      {
        id: "arama-niyeti",
        title: `${spec.title} ne anlama gelir?`,
        paragraphs: [
          `Arama kutusu çoğu zaman «Yalova'da ${spec.service} nerede yapılır» ile «hangi ölçütle gidilir»i birlikte taşır. İlk soru marka adı değil; uygulayıcının hekimliği, ortamın niteliği ve kaydın tutulup tutulmadığıdır.`,
          spec.what[0],
          `Derinleştirilmiş bilimsel çerçeve için ${spec.educationalLabel} yazısı okunmalıdır. Bu sayfa o çerçevenin yerel, coğrafi katmanıdır.`,
        ],
      },
      {
        id: "yer-secimi",
        title: "Yer seçerken bakılacak ölçütler",
        paragraphs: [...spec.choose],
        bullets: [
          "Uygulayıcının hekim kimliği ve ilgili yetkisi sorulabilir.",
          "Ortam, malzeme, atık ve kayıt ev pratiğinden ayrılmalıdır.",
          "Onam anlaşılmadan işlem başlamamalıdır.",
          "Acil veya kırmızı bayrak randevulu kapıya bırakılmaz.",
          `Yalova adresi teyit edilir: ${NAP}.`,
        ],
      },
      {
        id: "yaklasim",
        title: `${spec.service.charAt(0).toLocaleUpperCase("tr-TR")}${spec.service.slice(1)} yaklaşımının sınırı`,
        paragraphs: spec.what.slice(1),
      },
      {
        id: "kimler-icin-degil",
        title: "Kimler için konuşulmayabilir?",
        paragraphs: [...spec.notFor],
      },
      {
        id: "yalova-cografya",
        title: "Yalova coğrafyasında planlama",
        paragraphs: [
          "Çınarcık, Termal, Çiftlikköy, Altınova ve Armutlu'dan gelen kişilerde aktarma ve deniz-kara yorgunluğu planın parçasıdır. Merkez'de oturan kişi daha sık kısa izlem konuşabilir.",
          "İstanbul veya Bursa'dan feribotla gelenlerde aynı gün yoğun işlem ve dönüş dayatılmayabilir. Termal veya yaz sezonu bazı cilt ve dolaşım başlıklarını erteletebilir.",
          `İletişim ve uygulama kararı blogdan değil, yüz yüze uygunluktan çıkar. Klinik hizmet sayfası bilgilendirme için kullanılabilir; acil durumda 112 geçerlidir.`,
        ],
      },
      {
        id: "adres",
        title: "Adres, iletişim ve tek kapı olmama",
        paragraphs: [
          `Uzm. Dr. Yaşar Murat Çokay'ın muayenehanesi ${NAP} adresindedir. Telefon ve yazışma klinik sitesindedir. Bu cümle «tek adres» veya sıralama değildir.`,
          "Aile hekimliği, ilgili branş ve ikinci görüş hakkı saklıdır. Blog hattı acil kanal değildir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Tanı, reçete veya sonuç vaadi yoktur.",
          "Karar; öykü, muayene, gerektiğinde tetkik ve bilgilendirilmiş rıza ile kurulur.",
        ],
      },
    ],
    sources: spec.sources,
    faqs: spec.faqs,
  });
}

const specs: readonly LocalPlaceSpec[] = [
  {
    slug: "yalovada-botoks-yapan-yerler",
    title: "Yalova'da Botoks Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/botoks",
    clinicAnchor: "Yalova botoks uygulaması hakkında bilgi",
    keywords: [
      "Yalova'da botoks yapan yerler",
      "Yalova'da botoks",
      "botoks Yalova",
    ],
    description:
      "Yalova'da botoks yaptırmak isteyenler için yer seçimi, hekimlik ölçütleri, adaylık ve Merkez-ilçe ulaşım bağlamında genel bilgilendirme.",
    service: "botoks",
    educationalPath: "/yazilar/botoks-kimler-icin-uygundur/",
    educationalLabel: "Botoks: Kimler İçin Uygundur?",
    intent:
      "Amaç yüzü donduran bir sıralama değil; ifadeyi koruyan planın hangi ortamda konuşulabileceğini göstermektir.",
    what: [
      "Botulinum toksini, seçilmiş kasın gücünü geçici azaltmak üzere konuşulur. Marka ve doz bu yazıda yoktur.",
      "Hacim kaybı botoksla düzelmez. Yanlış araç doğal görünümü bozar.",
      "Etki hemen tam belirgin olmayabilir. Kontrol ihtiyacını hekim belirler.",
    ],
    choose: [
      "Yüz anatomisi, mimik ve damarsal acil hazırlık anlatılmayan ortamda işlem konuşulmamalıdır.",
      "Sosyal olay öncesi acele randevu, düzeltme payını siler. Takvim tahammüle göre kurulur.",
    ],
    notFor: [
      "Gebelik, emzirme, bölgede enfeksiyon ve bazı nöromüsküler hastalıklar planı durdurabilir.",
      "«Hiç çizgi kalmasın» beklentisi adaylık açısından sorunludur. Yüzün hareketi kimliğin parçasıdır.",
    ],
    faqs: [
      {
        question: "Yalova'da botoks nerede yapılır?",
        answer:
          "Hekimlik ortamında, yüz yüze değerlendirme ve rıza sonrası konuşulur. Sıralı yer listesi yoktur.",
      },
      {
        question: "En iyi botoks kimde yapılır?",
        answer:
          "Üstünlük iddiası kurulmaz. Ölçüt hekimlik, anatomi, dışlama ve izlemdir.",
      },
      {
        question: "İlçeden aynı gün dönülür mü?",
        answer:
          "Kişiye göre değişir. Yol ve olası şişlik aynı güne yığılmayabilir.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["İfade ve Anatomi", "Acele Takvimin Bedeli", "Yalova'da İzlem"],
    beats: [
      "Amaç seçilmiş kası geçici yatıştırmaktır; maske yüz hedef değildir.",
      "Yanlış kas asimetri veya ağır kapak görünümü yaratabilir.",
      "Tören öncesi acele, düzeltme süresini siler.",
      "Bilinmeyen önceki ürüne ekleme yapılmayabilir.",
      "Çınarcık veya feribot yorgunluğu planı sadeleştirebilir.",
      "Marka adı reklam cümlesi değildir.",
      "İkinci görüş hakkı saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-dolgu-yapan-yerler",
    title: "Yalova'da Dolgu Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/dolgu",
    clinicAnchor: "Yalova dolgu uygulaması hakkında bilgi",
    keywords: [
      "Yalova'da dolgu yapan yerler",
      "Yalova'da dolgu",
      "dudak dolgusu Yalova",
    ],
    description:
      "Yalova'da dolgu yaptırmak isteyenler için anatomi, damarsal risk anlatımı, yer ölçütleri ve yerel ulaşım bağlamında bilgilendirme.",
    service: "dolgu",
    educationalPath: "/yazilar/dogal-gorunumlu-dolgu-uygulamalari/",
    educationalLabel: "Doğal Görünümlü Dolgu Uygulamaları",
    intent:
      "Doğallık, daha fazla ürün değil; oran, ışık ve hareket halinde bozulmayan görünümdür.",
    what: [
      "Dolgu hacim ve kontur aracıdır. Botoks ile aynı iş değildir.",
      "Bir bölgeye eklenen hacim komşu gölgeyi değiştirir.",
      "Nadir damarsal komplikasyon saklanmaz; iletişim yolu işlem öncesi verilir.",
    ],
    choose: [
      "Ürün niteliği, son kullanma ve acil çözücü hazırlığı sorulmalıdır.",
      "«Azıcık şuraya» talebi tüm yüzle okunur. Hekim talebi olduğu gibi uygulamak zorunda değildir.",
    ],
    notFor: [
      "Gebelik, aktif enfeksiyon ve gerçekçi olmayan beklenti planı durdurabilir.",
      "Bilinmeyen başka kent işlemi üzerine körlemesine ekleme risklidir.",
    ],
    faqs: [
      {
        question: "Yalova'da dudak dolgusu yapan yer var mı?",
        answer:
          "Uygunluk yüz ve sağlık durumuna bağlıdır. Bölge adı tek başına karar değildir.",
      },
      {
        question: "Dolgu kalıcı mıdır?",
        answer: "Kalıcılık vaat edilmez. Süre kişiye ve bölgeye göre değişir.",
      },
      {
        question: "Aynı gün botoks ile birlikte yapılır mı?",
        answer: "Otomatik kombinasyon yoktur. Yük hekime kalır.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["Oran ve Komşu Bölge", "Damarsal Anlatım", "Etik Ölçü"],
    beats: [
      "Doğallık konuşurken bozulmayan görünümdür.",
      "Şişlik ve morluk sık; damar olayı nadir ama ciddidir.",
      "Tören takvimi düzeltme payı bırakmalıdır.",
      "Geçmiş ürün kaydı paylaşılmalıdır.",
      "Feribot günü ağır plan önerilmeyebilir.",
      "Fiyat ve paket dili yoktur.",
      "İkinci görüş saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-sivi-yuz-germe-yapan-yerler",
    title: "Yalova'da Sıvı Yüz Germe Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/sivi-yuz-germe",
    clinicAnchor: "Yalova sıvı yüz germe yaklaşımı hakkında bilgi",
    keywords: [
      "Yalova'da sıvı yüz germe yapan yerler",
      "Yalova'da sıvı yüz germe",
      "ameliyatsız yüz germe Yalova",
    ],
    description:
      "Yalova'da sıvı yüz germe arayanlar için cerrahi kıyasın yanlışlığı, adaylık ve yerel planlama hakkında genel bilgi.",
    service: "sıvı yüz germe",
    educationalPath: "/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/",
    educationalLabel: "Sıvı Yüz Germe: Hacim Vermeden Sıkılaşma",
    intent:
      "Cerrahi yüz germenin yumuşak kopyası diye anlatılamaz. Kıyas yanlış beklenti üretir.",
    what: [
      "Amaç hacim artırmak değil, cilt kalitesi ve sıkılık görünümünü konuşmaktır.",
      "Belirgin sarkma ve destek kaybında bu yaklaşım yetersiz kalabilir.",
      "Yöntem adı ve ürün bu yazıda reklam edilmez.",
    ],
    choose: [
      "Cilt rezervi, güneş, sigara ve önceki işlemler sorulmayan ortamda plan kurulmamalıdır.",
      "Termal veya yaz döneminde bazı adımlar ertelenebilir.",
    ],
    notFor: [
      "Aktif cilt enfeksiyonu ve taze bronzlaşma planı durdurabilir.",
      "«Düğüne iki gün kala bitsin» talebi güvenlikle çelişebilir.",
    ],
    faqs: [
      {
        question: "Sıvı yüz germe ameliyatsız yüz germe midir?",
        answer: "Cerrahi yüz germenin eşdeğeri değildir. Bu karşılaştırma yanıltıcıdır.",
      },
      {
        question: "Yalova'da kaç seans gerekir?",
        answer: "Sabit sayı yoktur. Cilt durumu ve seçilen yaklaşıma göre konuşulur.",
      },
      {
        question: "Hacim artar mı?",
        answer: "Amaç hacim artırmak değildir. Eksik hacim ayrı araç ister.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["Hacim ile Kalite", "Güneş ve Termal", "Beklenti Sınırı"],
    beats: [
      "Hacim eksiği sıkılık gibi duruyorsa yalnızca kalite konuşmak yetmez.",
      "Şişlik ve hassasiyet olabilir; takvim vaat edilmez.",
      "Yaz ve termal sezon bazı adımları erteler.",
      "Dolgu ihtiyacı gizlenerek bu başlık öne çıkarılmaz.",
      "İlçe yolculuğu aynı gün yoğunluğu artırabilir.",
      "Ürün reklamı yoktur.",
      "Reddetmek de yaklaşımdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-leke-tedavisi-yapan-yerler",
    title: "Yalova'da Leke Tedavisi Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/yuzde-matlik-kirisiklik-leke-tedavisi",
    clinicAnchor: "Yalova leke ve matlık yaklaşımları",
    keywords: [
      "Yalova'da leke tedavisi yapan yerler",
      "Yalova'da leke tedavisi",
      "yüz leke Yalova",
    ],
    description:
      "Yalova'da yüz lekesi ve matlık için yer arayanlara leke tipi, güneş koruması ve hekimlik ölçütleri hakkında bilgi.",
    service: "leke ve matlık yaklaşımı",
    educationalPath: "/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/",
    educationalLabel: "Yüz Lekeleri ve Matlık: Bilimsel Yaklaşımlar",
    intent:
      "Tek cihaz her leke türünü yönetmez. Önce tip, sonra koruma, sonra — uygunsa — işlem konuşulur.",
    what: [
      "Melazma, güneş lekesi ve inflamasyon sonrası leke aynı planı paylaşmaz.",
      "Yanlış işlem lekeyi koyulaştırabilir.",
      "Cam cilt vaadi yoktur.",
    ],
    choose: [
      "Leke tipi ayrılmadan lazer veya soyma öneren ortam süzülmelidir.",
      "Güneş koruması işlemden bağımsız temel başlıktır. Yalova sahil ve termal yaşamı birikimli maruziyet yaratabilir.",
    ],
    notFor: [
      "Taze bronzlaşma, gebelik veya aktif enfeksiyon planı erteleyebilir.",
      "Dermatolojik hastalık şüphesi ilgili uzmanlığa geciktirilmez.",
    ],
    faqs: [
      {
        question: "Yalova'da leke tamamen geçer mi?",
        answer: "Kaybolur iddiası uygun değildir. Tip ve koruma yönetimin parçasıdır.",
      },
      {
        question: "Lazer her lekede ilk seçenek midir?",
        answer: "Hayır. Yanlış cihaz lekeyi belirginleştirebilir.",
      },
      {
        question: "Yazın işlem yapılır mı?",
        answer: "Güneş yükü bazı adımları erteletebilir. Karar hekime aittir.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["Leke Tipi", "Sahil ve Termal Güneş", "Ölçülü Hedef"],
    beats: [
      "Bariyer bozulmuş ciltte agresif soyma tahammülsüzlük üretir.",
      "Koruma kremi işlemden bağımsızdır.",
      "Ev tipi cihaz kontrolsüz kullanılmamalıdır.",
      "Hormonal dönem planı değiştirebilir.",
      "Çınarcık sahil rutini maruziyeti artırabilir.",
      "Öncesi-sonrası görsel yoktur.",
      "İlgili dermatoloji geciktirilmez.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-sac-dokulmesi-tedavisi-yapan-yerler",
    title: "Yalova'da Saç Dökülmesi Tedavisi Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/sac-dokulmesi-tedavisi",
    clinicAnchor: "Yalova saç dökülmesi destek yaklaşımları",
    keywords: [
      "Yalova'da saç dökülmesi tedavisi yapan yerler",
      "Yalova'da saç dökülmesi",
      "saç mezoterapisi Yalova",
    ],
    description:
      "Yalova'da saç dökülmesi için yer arayanlara neden araştırması, mezoterapi-PRP sınırı ve yerel izlem hakkında bilgi.",
    service: "saç dökülmesi desteği",
    educationalPath: "/yazilar/sac-dokulmesinde-mezoterapi-prp/",
    educationalLabel: "Saç Dökülmesinde Mezoterapi ve PRP",
    intent:
      "İşlem, demir, tiroit, ilaç ve genetik konuşulmadan ilk adım olamaz.",
    what: [
      "Mezoterapi ve PRP her dökülme türünde ilk seçenek değildir.",
      "Saç döngüsü haftalık mucize üretmez.",
      "Kadın ve erkek örüntüsü aynı şablonu paylaşmaz.",
    ],
    choose: [
      "Laboratuvar veya öykü istemeyen «hemen seans» dili süzülmelidir.",
      "Cerrahi adaylığı olan kişi ilgili uzmanlığı ertelememelidir.",
    ],
    notFor: [
      "Enfeksiyon ve kanama bozukluğu planı durdurabilir.",
      "Yeme veya ağır sistemik hastalık şüphesi tamamlayıcı işleme değil uygun değerlendirmeye gider.",
    ],
    faqs: [
      {
        question: "Yalova'da saç mezoterapisi yeterli midir?",
        answer: "Nedenler araştırılmadan yeterli olduğu söylenemez.",
      },
      {
        question: "PRP kaç seanstır?",
        answer: "Sabit paket yoktur. Yanıt ve tahammül izlenir.",
      },
      {
        question: "Kadın ve erkekte aynı plan mıdır?",
        answer: "Değildir. Örüntü ve hormon-ilaç bağlamı ayrılır.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["Önce Neden", "Döngü Yavaştır", "Yol ve Tetkik"],
    beats: [
      "Eksiklik yok sayılırsa işlem beklenen katkıyı sunmayabilir.",
      "Sıkı bağ ve rastgele vitamin yükü artırabilir.",
      "Erken «olmamış» hükmü yanıltır.",
      "Laboratuvar ayrı gün isteyebilir.",
      "Uzak ilçeden gelen bunu yol planına yazar.",
      "Cerrahi seçenek saklanmaz.",
      "Sonuç vaadi yoktur.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-mezoterapi-yapan-yerler",
    title: "Yalova'da Mezoterapi Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/mezoterapi",
    clinicAnchor: "Yalova mezoterapi yaklaşımı hakkında bilgi",
    keywords: [
      "Yalova'da mezoterapi yapan yerler",
      "Yalova'da mezoterapi",
      "mezoterapi Yalova",
    ],
    description:
      "Yalova'da mezoterapi yaptırmak isteyenler için yüz-saç-bölge ayrımı, içerik belirsizliği, hekimlik ölçütü ve yerel planlama.",
    service: "mezoterapi",
    educationalPath: "/yazilar/sac-dokulmesinde-mezoterapi-prp/",
    educationalLabel: "Saç Dökülmesinde Mezoterapi ve PRP",
    intent:
      "Mezoterapi tek bir «vitamin iğnesi» değildir. Bölge, içerik ve amaç ayrılmadan yer seçilemez.",
    what: [
      "Yüz, saç ve bölgesel anlatılar farklı uygunluk ve risk taşır.",
      "Karışım içeriği kişiye açıklanmalıdır. Anlaşılmayan onam geçerli sayılmaz.",
      "Kilo veya leke için sihirli çözüm diye sunulamaz.",
    ],
    choose: [
      "İçerik, derinlik ve seans gerekçesi sorulmayan ortamda işlem konuşulmamalıdır.",
      "Saç dökülmesinde neden araştırması olmadan mezoterapi ilk kapı olamaz.",
    ],
    notFor: [
      "Gebelik, emzirme, aktif enfeksiyon ve bazı alerjik öyküler planı durdurabilir.",
      "Kontrolsüz metabolik hastalıkta bölgesel anlatı ertelenebilir.",
    ],
    faqs: [
      {
        question: "Yalova'da mezoterapi yapan yerler nerede?",
        answer:
          "Hekimlik ortamında, içerik ve bölge netleştikten sonra konuşulur. Sıralama yoktur.",
      },
      {
        question: "Yüz ve saç mezoterapisi aynı mıdır?",
        answer: "Değildir. Amaç, içerik ve risk profili ayrılır.",
      },
      {
        question: "Zayıflama için yeterli midir?",
        answer:
          "Kilo yönetiminin ana yöntemi değildir. Enerji dengesi omurgadır.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["Bölgeyi Ayırmak", "İçerik ve Onam", "Beklenti ve Yol"],
    beats: [
      "Tek karışım her bölgeye uymaz.",
      "Alerji ve ilaç listesi paylaşılmadan plan kurulmaz.",
      "Şişlik ve kızarıklık olabilir; mucize dil yoktur.",
      "Saç yazısı neden süzgecini taşır; bu sayfa yer süzgecini taşır.",
      "Feribot günü birden fazla bölge dayatılmayabilir.",
      "Paket seans dili yoktur.",
      "İkinci görüş saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-lazer-yapan-yerler",
    title: "Yalova'da Lazer Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/lazer",
    clinicAnchor: "Yalova lazer uygulaması hakkında bilgi",
    keywords: [
      "Yalova'da lazer yapan yerler",
      "Yalova'da lazer",
      "lazer epilasyon Yalova",
    ],
    description:
      "Yalova'da lazer uygulaması arayanlara cilt tipi, endikasyon ayrımı, güneş ve hekimlik ortamı hakkında bilgi.",
    service: "lazer uygulaması",
    educationalPath: "/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/",
    educationalLabel: "Yüz Lekeleri ve Matlık: Bilimsel Yaklaşımlar",
    intent:
      "Lazer tek cihaz, tek amaç değildir. Epilasyon, leke ve canlandırma anlatıları karıştırılmamalıdır.",
    what: [
      "Cilt tipi, bronzlaşma ve leke eğilimi cihaz seçimini değiştirir.",
      "Yanlış dalga boyu veya doz leke ve yanık riskini artırır.",
      "Ev tipi cihaz bu rehberin dışındadır.",
    ],
    choose: [
      "Cilt tipi ve güneş öyküsü alınmayan ortamda lazer konuşulmamalıdır.",
      "Göz koruması, cihaz bakımı ve uygulayıcı yetkisi sorulmalıdır.",
    ],
    notFor: [
      "Taze bronzlaşma, bazı ilaçlar ve aktif enfeksiyon planı erteleyebilir.",
      "Melazmada rastgele lazer lekeyi koyulaştırabilir.",
    ],
    faqs: [
      {
        question: "Yalova'da lazer epilasyon yapan yerler güvenli midir?",
        answer:
          "Güvenlik cihaz, cilt tipi ve uygulayıcıya bağlıdır. Yer adı tek başına yeterli değildir.",
      },
      {
        question: "Yazın lazer olur mu?",
        answer: "Güneş yükü birçok planı erteletir. Karar hekime aittir.",
      },
      {
        question: "Leke ve tüy aynı seans mıdır?",
        answer: "Aynı amaç değildir. Karıştırmak risk üretir.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["Cilt Tipi", "Güneş ve İlaç", "Cihaz ve Yetki"],
    beats: [
      "Bronz ciltte acele seans yanık riskini büyütür.",
      "İlaç listesi ışığa duyarlılığı değiştirebilir.",
      "Koruyucu gözlük ve oda düzeni temeldir.",
      "Termal tatil sonrası plan kayabilir.",
      "İlçeden gelen kişi seans aralığını yola göre konuşur.",
      "Kalıcılık vaat edilmez.",
      "Dermatolojik hastalık geciktirilmez.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-ip-aski-yapan-yerler",
    title: "Yalova'da İp Askı Yapan Yerler",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    clinicPath: "/hizmetler/ip-aski",
    clinicAnchor: "Yalova ip askı yaklaşımı hakkında bilgi",
    keywords: [
      "Yalova'da ip askı yapan yerler",
      "Yalova'da ip askı",
      "ip askı Yalova",
    ],
    description:
      "Yalova'da ip askı düşünenler için anatomi, adaylık, cerrahi kıyasın sınırı ve yerel izlem hakkında bilgi.",
    service: "ip askı",
    educationalPath: "/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/",
    educationalLabel: "Sıvı Yüz Germe: Hacim Vermeden Sıkılaşma",
    intent:
      "İp askı, cerrahi yüz germenin eşdeğeri değildir ve öyle sunulamaz.",
    what: [
      "Doku kalitesi, sarkma derecesi ve yüz ağırlığı adaylığı belirler.",
      "Asimetri, palpe edilebilirlik ve enfeksiyon riski saklanmaz.",
      "Hacim eksiği ip ile çözülmez.",
    ],
    choose: [
      "Anatomi, malzeme ve olası düzeltme anlatılmayan ortamda işlem konuşulmamalıdır.",
      "Sosyal olay öncesi acele, şişlik ve oturma payını siler.",
    ],
    notFor: [
      "İnce veya ağır hasarlı doku, aktif enfeksiyon ve gerçekçi olmayan germe beklentisi planı durdurabilir.",
      "Belirgin sarkmada cerrahi seçenek saklanarak ip öne çıkarılmaz.",
    ],
    faqs: [
      {
        question: "İp askı ameliyatsız germe midir?",
        answer: "Cerrahi germenin yerine geçmez. Kıyas yanıltıcıdır.",
      },
      {
        question: "Yalova'da kalıcı mıdır?",
        answer: "Kalıcılık vaat edilmez. Doku ve yaşam biçimi süreci etkiler.",
      },
      {
        question: "Aynı gün işe dönülür mü?",
        answer: "Kişiye göre değişir. Şişlik ve hassasiyet payı bırakılır.",
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    seedTitles: ["Doku ve Ağırlık", "Cerrahi Kıyas", "İzlem Payı"],
    beats: [
      "Yüz ağırlığı ve asimetri yok sayılırsa sonuç hayal kırıklığı üretir.",
      "Enfeksiyon ve görünürlük riski işlem günü anlatılır.",
      "Dolgu veya botoks ihtiyacı gizlenmez.",
      "Tören takvimi acele ettirmez.",
      "Feribot dönüşü yüzüstü uyku ve eğilmeyi etkileyebilir.",
      "Malzeme adı reklam değildir.",
      "Red etik görevidir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-fibromiyalji-tedavisi-yapan-yerler",
    title: "Yalova'da Fibromiyalji Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/fibromiyalji",
    clinicAnchor: "Yalova fibromiyalji bütüncül destek yaklaşımı",
    keywords: [
      "Yalova'da fibromiyalji tedavisi yapan yerler",
      "Yalova'da fibromiyalji",
      "fibromiyalji Yalova",
    ],
    description:
      "Yalova'da fibromiyalji için yer arayanlara ayırıcı değerlendirme, bütüncül destek sınırı ve kamu-branş izlemi hakkında bilgi.",
    service: "fibromiyalji desteği",
    educationalPath: "/yazilar/fibromiyalji-ile-yasam/",
    educationalLabel: "Fibromiyalji ile Yaşam: Bütüncül Yaklaşım",
    intent:
      "Tek kapı «tedavi merkezi» dayatması yoktur. Önce örüntü ve diğer nedenlerin süzülmesi gelir.",
    what: [
      "Tek kan testi fibromiyaljiyi kanıtlamaz.",
      "Uyku, hareket ve tahammül izlenir; şifa vaadi kurulmaz.",
      "GETAT katmanı zorunlu omurga değildir.",
    ],
    choose: [
      "Kırmızı bayrak — ateş, kilo kaybı, eklem şişliği, nöroloji — stresse yorulup bekletilmez.",
      "Romatoloji veya ilgili branş izlemi varsa tamamlayıcı yöntem onu iptal etmez.",
    ],
    notFor: [
      "İlerleyici nöroloji veya inflamatuvar tablo şüphesi bütüncül randevuya bırakılmaz.",
      "İlaç kesme vaadi veren yer süzülmelidir.",
    ],
    faqs: [
      {
        question: "Yalova'da fibromiyalji nerede tedavi edilir?",
        answer:
          "Tanı ve izlem ilgili hekimlik alanındadır. Bütüncül ortam destek katmanı olabilir.",
      },
      {
        question: "Hacamat veya akupunktur zorunlu mudur?",
        answer: "Zorunlu değildir. Uygunluk ayrı süzgeçtir.",
      },
      {
        question: "Aynı gün işlem olur mu?",
        answer:
          "Uzun öykü ve işlem yorgunluğu artırabilir. Plan sığmalıdır.",
      },
    ],
    sources: [
      commonSources.niceFibromyalgia,
      commonSources.ttbEtik,
      commonSources.saglikBakanligiTanitim,
    ],
    seedTitles: ["Ayırıcı Sabır", "Günlük Ritim", "Destek Sınırı"],
    beats: [
      "Benzer tablo yapan hastalıklar evde ayrılmaz.",
      "Enerji planı her gün aynı yoğunluğu dayatmaz.",
      "Fizik tedavi varsa ikame edilmez.",
      "Termal konfor tedavi iddiası taşımaz.",
      "Çınarcık'tan gelen kişide aynı gün yük artabilir.",
      "Paket şifa yoktur.",
      "Kamu izlemi saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-kilo-verme-destegi-alan-yerler",
    title: "Yalova'da Kilo Verme Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/kilo-verme-destegi",
    clinicAnchor: "Yalova kilo yönetimi desteği hakkında bilgi",
    keywords: [
      "Yalova'da kilo verme desteği alan yerler",
      "Yalova'da kilo yönetimi",
      "kilo verme Yalova",
    ],
    description:
      "Yalova'da kilo yönetimi için yer arayanlara enerji dengesi, ilaç güvenliği ve tamamlayıcı yöntemlerin sınırı hakkında bilgi.",
    service: "kilo yönetimi desteği",
    educationalPath: "/yazilar/kilo-yonetiminde-ozon-hacamat-destegi/",
    educationalLabel: "Kilo Yönetiminde Ozon ve Hacamat Desteği",
    intent:
      "Ozon veya hacamat kilo kaybının ana yöntemi değildir. Tartı garantisi yoktur.",
    what: [
      "Omurga; uyku, beslenme, kas koruyan hareket ve varsa endokrin-ilaç süzgecidir.",
      "Toksin ve yağ eritme sloganı tıbbi anlatı değildir.",
      "Yeme bozukluğu şüphesi işleme değil uygun değerlendirmeye gider.",
    ],
    choose: [
      "İlaç kesme veya «haftada X kilo» vaadi veren yer süzülmelidir.",
      "Diyabet veya tansiyon ilacı olan kişide plan ilgili hekimle koordine edilir.",
    ],
    notFor: [
      "Kontrolsüz metabolik tablo ve gebelik eşiği yükseltir.",
      "Hızlı sonuç dayatması güvenlikle çelişir.",
    ],
    faqs: [
      {
        question: "Yalova'da hacamatla kilo verilir mi?",
        answer:
          "Hacamat kilo yönetiminin ana yöntemi değildir. Slogan tıbbi anlatı değildir.",
      },
      {
        question: "Ozon zayıflatır mı?",
        answer: "Sistemik iddia kurulmaz. Önce neden ve enerji dengesi konuşulur.",
      },
      {
        question: "Paket seans var mıdır?",
        answer: "Paket ve tartı garantisi bu yazıda yoktur.",
      },
    ],
    sources: [
      commonSources.whoObesity,
      commonSources.ttbEtik,
      commonSources.saglikBakanligiTanitim,
    ],
    seedTitles: ["Enerji Omurgası", "Slogan Süzgeci", "İlaç Koordinasyonu"],
    beats: [
      "Tartı tek izlem aracı olmayabilir.",
      "Hacamat ve ozon zorunlu adım değildir.",
      "İlaç onaysız kesilmez.",
      "Günübirlik yoğun uygulama ve uzun dönüş önerilmeyebilir.",
      "Termal terleme kilo yönetimi değildir.",
      "Yeme bozukluğu yönlendirilir.",
      "Sonuç vaadi yoktur.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-kronik-yorgunluk-destegi-alan-yerler",
    title: "Yalova'da Kronik Yorgunluk Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/kronik-yorgunluk-sendromu",
    clinicAnchor: "Yalova kronik yorgunluk yönetimi yaklaşımı",
    keywords: [
      "Yalova'da kronik yorgunluk tedavisi yapan yerler",
      "Yalova'da kronik yorgunluk",
      "kronik yorgunluk Yalova",
    ],
    description:
      "Yalova'da uzun süren yorgunluk için yer arayanlara ayırıcı değerlendirme, acil ayrımı ve destek sırası hakkında bilgi.",
    service: "kronik yorgunluk desteği",
    educationalPath: "/yazilar/kronik-yorgunluk-nedenleri-yonetimi/",
    educationalLabel: "Kronik Yorgunluk Sendromu: Nedenleri ve Yönetimi",
    intent:
      "İsim yapıştırmak tetkikin yerini tutmaz. Akupunktur ilk seçenek olamaz.",
    what: [
      "Anemi, tiroit, uyku apnesi, duygu durum, enfeksiyon sonrası süreç ve ilaç etkisi ayrılır.",
      "Ani nefes darlığı, göğüs ağrısı veya bayılma acile aittir.",
      "Seans sayısı baştan kilitlenmez.",
    ],
    choose: [
      "Öykü ve tetkik istemeden «yorgunluk paketi» sunan yer süzülmelidir.",
      "İş-bakım-yol yükü Yalova-İstanbul hattında uzuyorsa plan gerçek güne sığmalıdır.",
    ],
    notFor: [
      "İlerleyici güçsüzlük ve bilinç değişikliği randevulu kapıya bırakılmaz.",
      "İlaç kesme vaadi uygun değildir.",
    ],
    faqs: [
      {
        question: "Yalova'da kronik yorgunluk nereye başvurulur?",
        answer:
          "Önce olası tıbbi nedenler ilgili hekimlikte süzülür. Destek katmanı sonradır.",
      },
      {
        question: "Akupunktur yeterli midir?",
        answer: "İlk seçenek değildir. Kanıt ve adaylık ayrıdır.",
      },
      {
        question: "Aynı gün tetkik ve işlem olur mu?",
        answer: "Her zaman uygun olmayabilir. Sıra güvenliktedir.",
      },
    ],
    sources: [
      commonSources.nihAcupuncture,
      commonSources.ttbEtik,
      commonSources.saglikBakanligiTanitim,
    ],
    seedTitles: ["İsmi Yapıştırmamak", "Acil Ayrımı", "Sığan Plan"],
    beats: [
      "Kestirme ve kafein bazı kişilerde yükü artırır.",
      "Laboratuvar ertelenerek yöntem seçilmez.",
      "Göğüs ve nefes acile aittir.",
      "Feribot günü uzun öyküyü bozabilir.",
      "İşlev izlenir, mucize dil yoktur.",
      "İlaç omurgası bozulmaz.",
      "İkinci görüş saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-bel-fitigi-destegi-alan-yerler",
    title: "Yalova'da Bel Fıtığı Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/bel-fitiklari-omurga-sagligi",
    clinicAnchor: "Yalova bel ve omurga sağlığı destek yaklaşımı",
    keywords: [
      "Yalova'da bel fıtığı tedavisi yapan yerler",
      "Yalova'da bel fıtığı",
      "bel fıtığı Yalova",
    ],
    description:
      "Yalova'da bel fıtığı için yer arayanlara kırmızı bayrak, görüntüleme ve tamamlayıcı katmanın sınırı hakkında bilgi.",
    service: "bel ve omurga desteği",
    educationalPath: "/yazilar/bel-fitiklarinda-tamamlayici-tip/",
    educationalLabel: "Bel Fıtıklarında Tamamlayıcı Tıp Yaklaşımları",
    intent:
      "Kuvvet kaybı, idrar kaçırma veya eyer uyuşması tamamlayıcı tıp değil acil uzmanlık konusudur.",
    what: [
      "Her bel ağrısı fıtık değildir.",
      "Aynı MR farklı yakınma üretebilir.",
      "Hacamat veya akupunktur fizik tedavi ve cerrahi seçeneğin yerine geçmez.",
    ],
    choose: [
      "Kırmızı bayrak sormayan «bel paketi» süzülmelidir.",
      "Uzun oturuş — feribot, ofis — randevu ve dönüş planını etkiler.",
    ],
    notFor: [
      "İlerleyici nöroloji randevulu GETAT kapısına bırakılmaz.",
      "«Ameliyatsız garanti» dili uygun değildir.",
    ],
    faqs: [
      {
        question: "Yalova'da bel fıtığı nereye gidilir?",
        answer:
          "Kırmızı bayrakta acil ve ilgili uzmanlık. Destek katmanı ayrı süzgeçtir.",
      },
      {
        question: "Hacamat bel fıtığını çeker mi?",
        answer: "Çeker iddiası yoktur. Destek diye anılması zorunluluk değildir.",
      },
      {
        question: "MR yeterli midir?",
        answer: "Tek kesit karar vermez. Yakınma ve muayene birlikte okunur.",
      },
    ],
    sources: [
      commonSources.ttbEtik,
      commonSources.saglikBakanligiGetat,
      commonSources.saglikBakanligiTanitim,
    ],
    seedTitles: ["Kırmızı Bayrak", "Görüntü ve Yakınma", "Yol ve Oturma"],
    beats: [
      "Kalça ve kas kaynaklı ağrı ayrı süzgeç ister.",
      "Enjeksiyon veya cerrahi saklanmaz.",
      "Ağrı dalgalanması tek başarı kanıtı değildir.",
      "Feribot oturuşu planı bozabilir.",
      "Termal su konfordur, fıtık tedavisi değildir.",
      "Paket yoktur.",
      "112 saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-diyabet-destegi-alan-yerler",
    title: "Yalova'da Diyabet Yönetimi Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/diyabet-yonetimi-destegi",
    clinicAnchor: "Yalova diyabet yönetimi desteği hakkında bilgi",
    keywords: [
      "Yalova'da diyabet tedavisi yapan yerler",
      "Yalova'da diyabet yönetimi",
      "diyabet Yalova",
    ],
    description:
      "Yalova'da diyabet desteği arayanlara ilaç omurgasının bozulmaması, ölçüm ve tamamlayıcı sınır hakkında bilgi.",
    service: "diyabet yönetimi desteği",
    educationalPath: "/yazilar/diyabet-hipertansiyon-butuncul-destek/",
    educationalLabel: "Diyabet ve Hipertansiyonda Bütüncül Destek",
    intent:
      "İnsülin veya oral ilaç «doğalla değiştirilir» denmez. Destek, endokrin izleminin rakibi değildir.",
    what: [
      "Uyku, tuz, hareket ve ölçüm günlüğü konuşulabilir.",
      "Ozon veya hacamat metabolik kontrolün ana yöntemi değildir.",
      "Hipoglisemi belirtileri işlem günü ayrıca konuşulur.",
    ],
    choose: [
      "İlaç kesme vaadi veren yer elenir.",
      "Açlık ve uzun yol aynı güne yığılırsa risk artar.",
    ],
    notFor: [
      "Kontrolsüz tablo, ağır böbrek veya gebelik eşiği yükseltir.",
      "Acil hipoglisemi veya bilinç değişikliği 112'ye aittir.",
    ],
    faqs: [
      {
        question: "Yalova'da diyabet için GETAT yeterli midir?",
        answer: "Değildir. İlaç ve ilgili hekim omurgadır.",
      },
      {
        question: "Hacamat şekeri düşürür mü?",
        answer: "Böyle bir vaat yoktur. Ölçüm ve ilaç saklanır.",
      },
      {
        question: "Aile hekimi devre dışı mı kalır?",
        answer: "Hayır. Kronik izlem omurgası saklıdır.",
      },
    ],
    sources: [
      commonSources.cdcDiabetes,
      commonSources.ttbEtik,
      commonSources.saglikBakanligiTanitim,
    ],
    seedTitles: ["İlaç Omurgası", "Ölçüm Günlüğü", "Yol ve Açlık"],
    beats: [
      "Ezbere «iyi gidiyorum» ölçümün yerini tutmaz.",
      "Bitkisel ürün de ilaçtır gibi paylaşılır.",
      "Ozon otomatik eklenmez.",
      "Feribot ve öğün saati planlanır.",
      "Endokrin randevusu ertelenmez.",
      "Paket şifa yoktur.",
      "Acil kapısı saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-hipertansiyon-destegi-alan-yerler",
    title: "Yalova'da Hipertansiyon Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/hipertansiyon-destegi",
    clinicAnchor: "Yalova hipertansiyon desteği hakkında bilgi",
    keywords: [
      "Yalova'da hipertansiyon tedavisi yapan yerler",
      "Yalova'da tansiyon",
      "hipertansiyon Yalova",
    ],
    description:
      "Yalova'da tansiyon desteği arayanlara ilaç güvenliği, yaşam biçimi ve tamamlayıcı sınır hakkında bilgi.",
    service: "hipertansiyon desteği",
    educationalPath: "/yazilar/diyabet-hipertansiyon-butuncul-destek/",
    educationalLabel: "Diyabet ve Hipertansiyonda Bütüncül Destek",
    intent:
      "Tansiyon ilacı hekim onayı olmadan bırakılmaz. Destek risk etkenlerini konuşur, ilacı ikame etmez.",
    what: [
      "Tuz, uyku, hareket ve ölçüm tekniği konuşulabilir.",
      "Ani baş ağrısı, göğüs, nefes veya bilinç değişikliği aciledir.",
      "Termal sıcaklık hekime danışılmadan artırılmamalıdır.",
    ],
    choose: [
      "İlacı kesseniz de olur diyen yer elenir.",
      "Ölçüm aleti tekniği ve ev kaydı yoksa plan zayıf kalır.",
    ],
    notFor: [
      "Kontrolsüz kriz tablosu randevulu kapıya bırakılmaz.",
      "Gebelik hipertansiyonu ilgili uzmanlığa aittir.",
    ],
    faqs: [
      {
        question: "Yalova'da tansiyon için hacamat olur mu?",
        answer:
          "Uygunluk ayrıdır ve zorunlu değildir. İlaç omurgası bozulmaz.",
      },
      {
        question: "Termal su tansiyonu düzenler mi?",
        answer: "Konfor iddiası tedavi değildir. Eşik kişiye göre yükselir.",
      },
      {
        question: "İlaç doğal yöntemle kesilir mi?",
        answer: "Kesilmez. Onaysız değişiklik uygun değildir.",
      },
    ],
    sources: [
      commonSources.cdcDiabetes,
      commonSources.ttbEtik,
      commonSources.kulturTermal,
    ],
    seedTitles: ["Ölçüm Tekniği", "Sıcak ve Yol", "İlaç Saklanır"],
    beats: [
      "Tek yüksek değer kriz değildir; kriz de evde bekletilmez.",
      "Hacamat kanama ve ilaç süzgeci ister.",
      "Feribot stresi ölçümü etkileyebilir.",
      "Kardiyoloji izlemi saklıdır.",
      "Tuz sohbeti reçete değildir.",
      "Paket yoktur.",
      "112 saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-varis-destegi-alan-yerler",
    title: "Yalova'da Varis Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/varis-tedavisi-destegi",
    clinicAnchor: "Yalova varis desteği hakkında bilgi",
    keywords: [
      "Yalova'da varis tedavisi yapan yerler",
      "Yalova'da varis",
      "varis Yalova",
    ],
    description:
      "Yalova'da varis için yer arayanlara dolaşım değerlendirmesi, acil ayrımı ve sülük sınırına dair bilgi.",
    service: "varis desteği",
    educationalPath: "/yazilar/varis-hemoroid-suluk-tedavisinin-yeri/",
    educationalLabel: "Varis ve Hemoroid: Sülük Tedavisinin Yeri",
    intent:
      "Tek taraflı ani şişlik, kızarıklık veya nefes darlığı sülük bekletmez; acil değerlendirme ister.",
    what: [
      "Dolaşım muayenesi ve gerektiğinde ilgili uzmanlık önce gelir.",
      "Tıbbi sülük her variste uygun değildir.",
      "Cerrahi veya girişimsel seçenek saklanmaz.",
    ],
    choose: [
      "Kırmızı bayrak sormadan sülük öneren yer elenir.",
      "Uzun yol ve sıcak termal program dolaşımı zorlayabilir.",
    ],
    notFor: [
      "Anemi, kanama, enfeksiyon ve bazı ilaçlar sülüğü durdurur.",
      "Evde sülük önerilmez.",
    ],
    faqs: [
      {
        question: "Yalova'da varis sülükle geçer mi?",
        answer: "Geçer iddiası yoktur. Sülük yerine geçen tedavi değildir.",
      },
      {
        question: "Hangi hekime gidilir?",
        answer:
          "Dolaşım ve ilgili uzmanlık önce. Destek katmanı sonradır.",
      },
      {
        question: "Aynı gün işlem olur mu?",
        answer: "Yol ve şişlik payı bırakılmadan dayatılmaz.",
      },
    ],
    sources: [
      commonSources.saglikBakanligiGetat,
      commonSources.ttbEtik,
      commonSources.whoTraditional,
    ],
    seedTitles: ["Dolaşım Önce", "Sülük Sınırı", "Yol ve Sıcak"],
    beats: [
      "Nefes darlığı aciledir.",
      "Hijyen ve kaynak güvenliği evden ayrılır.",
      "Kompresyon veya girişim saklanmaz.",
      "Feribot oturuşu planı etkiler.",
      "Termal sıcaklık hekime danışılır.",
      "Paket şifa yoktur.",
      "İkinci görüş saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-hemoroid-destegi-alan-yerler",
    title: "Yalova'da Hemoroid Desteği Alan Yerler",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    clinicPath: "/hizmetler/hemoroid-tedavisi-destegi",
    clinicAnchor: "Yalova hemoroid desteği hakkında bilgi",
    keywords: [
      "Yalova'da hemoroid tedavisi yapan yerler",
      "Yalova'da hemoroid",
      "hemoroid Yalova",
    ],
    description:
      "Yalova'da hemoroid için yer arayanlara muayene önceliği, kanama uyarısı ve tamamlayıcı sınır hakkında bilgi.",
    service: "hemoroid desteği",
    educationalPath: "/yazilar/varis-hemoroid-suluk-tedavisinin-yeri/",
    educationalLabel: "Varis ve Hemoroid: Sülük Tedavisinin Yeri",
    intent:
      "Kanama, kansızlık ve bağırsak alışkanlığı değişimi ilgili hekimlik alanına aittir.",
    what: [
      "Sülük her hemoroid için uygun değildir.",
      "Cerrahi veya girişimsel seçenek saklanarak «doğal yöntem yeter» denmez.",
      "Ev uygulaması önerilmez.",
    ],
    choose: [
      "Muayene etmeden işlem öneren yer süzülmelidir.",
      "Anemi ve kanama öyküsü paylaşılmadan plan kurulmaz.",
    ],
    notFor: [
      "Bol kanama, baş dönmesi veya siyah gaita bekletilmez.",
      "Gebelik özel değerlendirme ister.",
    ],
    faqs: [
      {
        question: "Yalova'da hemoroid sülükle tedavi edilir mi?",
        answer:
          "Tedavi iddiası yoktur. Uygunluk ve yönlendirme hekime aittir.",
      },
      {
        question: "Hangi bölüme gidilir?",
        answer:
          "İlgili cerrahi veya gastroenterolojik değerlendirme geciktirilmez.",
      },
      {
        question: "Aynı gün sülük olur mu?",
        answer: "Muayene ve dışlama olmadan olmaz.",
      },
    ],
    sources: [
      commonSources.saglikBakanligiGetat,
      commonSources.ttbEtik,
      commonSources.saglikBakanligiTanitim,
    ],
    seedTitles: ["Kanama Uyarısı", "Yönlendirme", "Hijyen"],
    beats: [
      "Alışkanlık değişimi kanser tarama kapısını kapatmaz.",
      "Sülük kaynak ve atık hekimlik ortamına aittir.",
      "Ağrı dalgalanması tek kanıt değildir.",
      "Uzun oturuş ve yol planı etkiler.",
      "İlaç listesi kanamayı değiştirir.",
      "Paket yoktur.",
      "Acil saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-hacamat-yapan-yerler",
    title: "Yalova'da Hacamat Yapan Yerler",
    pillarSlug: "getat",
    category: "getat",
    clinicPath: "/hizmetler/hacamat",
    clinicAnchor: "Yalova hacamat uygulaması hakkında bilgi",
    keywords: [
      "Yalova'da hacamat yapan yerler",
      "Yalova'da hacamat",
      "hacamat Yalova",
    ],
    description:
      "Yalova'da hacamat yaptırmak isteyenler için yetki, hijyen, adaylık ve «en iyi» dilinin neden kullanılmadığı hakkında bilgi.",
    service: "hacamat",
    educationalPath: "/yazilar/hacamat-nedir-bilimsel-perspektif/",
    educationalLabel: "Hacamat Nedir? Bilimsel Perspektif",
    intent:
      "Geleneksel yaygınlık modern kanıtın yüksek olduğu anlamına gelmez. Evde hacamat önerilmez.",
    what: [
      "Tek kullanımlık malzeme, atık ve ortam hijyeni ev pratiğinden ayırır.",
      "Toksin atma ve kilo sloganı tıbbi anlatı değildir.",
      "Anemi, kan sulandırıcı, gebelik ve cilt enfeksiyonu sık duraklatma nedenidir.",
    ],
    choose: [
      "Hekim yetkisi, kayıt ve hijyen sorulmayan yer elenir. «En iyi hacamat» cümlesi yasal ve etik olarak kurulmaz.",
      "Başka yerde belirsiz başlamış dizi üzerine ekleme yapılmayabilir.",
    ],
    notFor: [
      "Kanama eğilimi ve ağır anemi planı durdurur.",
      "Çocuk ve gebe gruplarında eşik daha yüksektir.",
    ],
    faqs: [
      {
        question: "Yalova'da en iyi hacamat nerede?",
        answer:
          "Üstünlük iddiası kurulmaz. Ölçüt yetki, hijyen, dışlama ve rızadır.",
      },
      {
        question: "Hacamat evde yaptırılır mı?",
        answer: "Önerilmez. Yetkili hekimlik ortamı esastır.",
      },
      {
        question: "Kilo ve toksin için yeterli midir?",
        answer: "Değildir. Slogan tıbbi anlatının yerini tutmaz.",
      },
    ],
    sources: [
      commonSources.nihCupping,
      commonSources.saglikBakanligiGetat,
      commonSources.ttbEtik,
    ],
    seedTitles: ["Yetki ve Hijyen", "Slogan Değil Sıra", "Kanama Süzgeci"],
    beats: [
      "Gelenek, ev iznini doğurmaz.",
      "Ateş ve yayılan kızarıklık beklenmez.",
      "Kilo yazısında hacamat zorunlu değildir.",
      "İlaç listesi paylaşılır.",
      "İlçeden gelen kişi aynı gün yükü konuşur.",
      "Paket şifa yoktur.",
      "İkinci görüş saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-suluk-tedavisi-yapan-yerler",
    title: "Yalova'da Sülük Tedavisi Yapan Yerler",
    pillarSlug: "getat",
    category: "getat",
    clinicPath: "/hizmetler/suluk-tedavisi",
    clinicAnchor: "Yalova tıbbi sülük uygulaması hakkında bilgi",
    keywords: [
      "Yalova'da sülük tedavisi yapan yerler",
      "Yalova'da sülük",
      "sülük tedavisi Yalova",
    ],
    description:
      "Yalova'da tıbbi sülük arayanlara kaynak güvenliği, yetki, enfeksiyon ve ev pratiğinin dışı hakkında bilgi.",
    service: "tıbbi sülük",
    educationalPath: "/yazilar/suluk-tedavisi-modern-yorumu/",
    educationalLabel: "Sülük Tedavisi: Modern Yorumu",
    intent:
      "Modern yorum romantize şifa değil; kaynak, saklama, tek hasta ve atık yönetiminin yorumudur.",
    what: [
      "Tarihsel iz, her dolaşım şikâyetinde ilk tercih demek değildir.",
      "Enfeksiyon ve uzamış kanama yok sayılamaz.",
      "Evde sülük tarifi yoktur.",
    ],
    choose: [
      "Kaynak ve hijyen sorulmayan yer elenir.",
      "Varis veya hemoroidde kırmızı bayrak acile aittir.",
    ],
    notFor: [
      "Anemi, kanama, enfeksiyon, gebelik ve bağışıklık baskılanması planı durdurabilir.",
      "Belirsiz başka kent dizisi üzerine ekleme yapılmayabilir.",
    ],
    faqs: [
      {
        question: "Yalova'da sülük tedavisi nerede yapılır?",
        answer:
          "Yetkili hekimlik ortamında. Ev ve yetkisiz ortam önerilmez.",
      },
      {
        question: "Her varise sülük uygulanır mı?",
        answer: "Hayır. Uygunluk ve acil ayrımı önce gelir.",
      },
      {
        question: "Kaynak önemli midir?",
        answer: "Evet. Modern yorumun omurgası kaynaktır.",
      },
    ],
    sources: [
      commonSources.saglikBakanligiGetat,
      commonSources.ttbEtik,
      commonSources.whoTraditional,
    ],
    seedTitles: ["Kaynak", "Kanama ve Enfeksiyon", "Ev Dışı"],
    beats: [
      "Tek hasta ve atık yönetimi evden ayrılır.",
      "Cerrahi bağlam saklanarak şifa satılmaz.",
      "Erken uyarı işlem günü anlatılır.",
      "Yol ve sıcak program dolaşımı etkiler.",
      "Hemoroid kesişimi ilgili yazıdadır.",
      "Paket yoktur.",
      "112 saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-akupunktur-yapan-yerler",
    title: "Yalova'da Akupunktur Yapan Yerler",
    pillarSlug: "getat",
    category: "getat",
    clinicPath: "/hizmetler/akupunktur",
    clinicAnchor: "Yalova akupunktur yaklaşımı hakkında bilgi",
    keywords: [
      "Yalova'da akupunktur yapan yerler",
      "Yalova'da akupunktur",
      "akupunktur Yalova",
    ],
    description:
      "Yalova'da akupunktur arayanlara tanıya göre kanıt, iğne güvenliği, ilaç ilişkisi ve yer ölçütleri hakkında bilgi.",
    service: "akupunktur",
    educationalPath: "/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/",
    educationalLabel: "Akupunktur Hangi Durumlarda Tercih Edilir?",
    intent:
      "Kanıt tanıya göre değişir. On seans paket dili yoktur.",
    what: [
      "Bazı ağrı ve bulantı başlıklarında literatür daha yoğundur; başka belirtilerde seyrektir.",
      "İğne fobisi, kanama bozukluğu ve enfeksiyon planı değiştirir.",
      "Nokta haritası evde uygulanmak üzere verilmez.",
    ],
    choose: [
      "Sterilite ve hekim yetkisi sorulmalıdır.",
      "İlacı keseriz vaadi elenir.",
    ],
    notFor: [
      "Gebelik özel değerlendirme ister; genel evet-hayır kurulmaz.",
      "İlerleyici nöroloji veya acil tablo randevuya bırakılmaz.",
    ],
    faqs: [
      {
        question: "Yalova'da akupunktur kim yapar?",
        answer:
          "Yetkili hekimlik çerçevesinde konuşulur. Sıralı isim listesi yoktur.",
      },
      {
        question: "Kaç seans gerekir?",
        answer: "Sabit paket yoktur. Yanıt ve işlev izlenir.",
      },
      {
        question: "İlaç yerine geçer mi?",
        answer: "Geçmez. Kesişim ilgili hekimle konuşulur.",
      },
    ],
    sources: [
      commonSources.nihAcupuncture,
      commonSources.saglikBakanligiGetat,
      commonSources.ttbEtik,
    ],
    seedTitles: ["Tanıya Göre Kanıt", "Sterilite", "İlaçla Yan Yana"],
    beats: [
      "Kanıtın varlığı o kişinin aday olduğu anlamına gelmez.",
      "Anatomi ve sterilite temeldir.",
      "Fibromiyalji veya yorgunlukta ilk seçenek olmayabilir.",
      "Feribot günü uzun seans yorabilir.",
      "On seans dayatması yoktur.",
      "Nokta haritası ev içindir diye verilmez.",
      "İkinci görüş saklıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-ozon-tedavisi-yapan-yerler",
    title: "Yalova'da Ozon Tedavisi Yapan Yerler",
    pillarSlug: "getat",
    category: "getat",
    clinicPath: "/hizmetler/ozon-tedavisi",
    clinicAnchor: "Yalova ozon uygulaması hakkında bilgi",
    keywords: [
      "Yalova'da ozon tedavisi yapan yerler",
      "Yalova'da ozon",
      "ozon tedavisi Yalova",
    ],
    description:
      "Yalova'da ozon arayanlara uygulama yollarının ayrımı, cihaz-yetki, ev tipi anlatının dışı ve yerel güvenlik hakkında bilgi.",
    service: "ozon uygulaması",
    educationalPath: "/yazilar/ozon-tedavisinin-kullanim-alanlari/",
    educationalLabel: "Ozon Tedavisinin Kullanım Alanları",
    intent:
      "Farklı yollar farklı risk taşır. Ev tipi ozon anlatıları önerilmez.",
    what: [
      "Sistemik iddia ile yerel destek karıştırılmamalıdır.",
      "Belirli enzim eksikliği, kontrolsüz tiroit, gebelik ve ağır anemi planı durdurabilir.",
      "Hacamatla otomatik kombinasyon yoktur.",
    ],
    choose: [
      "Cihaz bakımı ve uygulayıcı yetkisi sorulmalıdır.",
      "Kilo veya yorgunluk tek başına gerekçe olmayabilir.",
    ],
    notFor: [
      "Nefes, göğüs veya alerji benzeri bulgu beklenmez; iletişim kurulur.",
      "Ev cihazı bu rehberin dışındadır.",
    ],
    faqs: [
      {
        question: "Yalova'da ozon tedavisi nerede yapılır?",
        answer:
          "Yetkili hekimlik ve uygun cihazda. Ev tipi anlatı önerilmez.",
      },
      {
        question: "Ozon zayıflatır mı?",
        answer: "Ana yöntem değildir. Önce neden konuşulur.",
      },
      {
        question: "Hacamat ile aynı gün olur mu?",
        answer: "Otomatik birleştirme yoktur. Yük hekime kalır.",
      },
    ],
    sources: [
      commonSources.saglikBakanligiGetat,
      commonSources.ttbEtik,
      commonSources.whoTraditional,
    ],
    seedTitles: ["Yolları Ayırmak", "Cihaz ve Yetki", "Ev Dışı"],
    beats: [
      "Reçete bu yazıda yoktur; soru listesi vardır.",
      "Enzim ve tiroit süzgeci atlanmaz.",
      "Kilo sloganı elenir.",
      "Feribot günü sistemik yük dayatılmayabilir.",
      "Nefes bulgusunda beklenmez.",
      "Paket yoktur.",
      "Onam anlaşılır olmalıdır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
];

export const clusters = specs.map(localCluster);

export const localPlaceSeeds: LocalPlaceSeed[] = specs.map((spec) => ({
  slug: spec.slug,
  kind: "cluster",
  titles: spec.seedTitles,
  beats: spec.beats,
}));

export const localPlaceClinicLinks = Object.fromEntries(
  specs.map((spec) => [
    spec.slug,
    {
      url: `https://uzmdrmuratcokay.com.tr${spec.clinicPath}`,
      anchor: spec.clinicAnchor,
    },
  ]),
) as Record<string, { url: string; anchor: string }>;

export const localPlaceKeywordRules = specs.flatMap((spec) => [
  { term: spec.title.replace("Yalova'da ", "Yalova'da ").toLocaleLowerCase("tr-TR"), url: `/yazilar/${spec.slug}/` },
  { term: spec.keywords[0], url: `/yazilar/${spec.slug}/` },
  { term: spec.keywords[1], url: `/yazilar/${spec.slug}/` },
]);
