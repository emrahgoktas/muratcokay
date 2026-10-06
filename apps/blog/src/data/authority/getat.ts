import { commonSources, createCluster, createPillar } from "./compose";

export const pillar = createPillar({
  slug: "getat",
  title: "Geleneksel ve Tamamlayıcı Tıp Rehberi",
  description:
    "Yalova'da hacamat, akupunktur, sülük ve ozon yaklaşımlarını bilimsel sınırlar, yasal çerçeve ve etik bilgilendirme dilinde anlatan kapsamlı GETAT rehberi.",
  lastUpdated: "2026-10-06",
  clusterSlugs: [
    "hacamat-nedir-bilimsel-perspektif",
    "akupunktur-hangi-durumlarda-tercih-edilir",
    "suluk-tedavisi-modern-yorumu",
    "ozon-tedavisinin-kullanim-alanlari",
  ],
  introduction: [
    "Geleneksel ve tamamlayıcı tıp (GETAT), hekim değerlendirmesiyle ve yürürlükteki mevzuat çerçevesinde konuşulabilen yaklaşımları kapsar. Yalova'da hacamat, akupunktur, sülük ve ozon başlıkları sık aranır. Bu rehber, bu başlıkları mucize vaadi olmadan, yönetim ve destek dilinde açıklar.",
    "GETAT, kanıta dayalı tıbbın yerine geçmez. Tanısı konmuş bir hastalıkta ilgili hekimlik alanı ertelenemez. Tamamlayıcı sözcüğü, 'yerine' değil 'yanında ve uygunsa' anlamına gelir. Bu ayrım, güvenliğin ilk cümlesidir.",
    "Sağlık Bakanlığı'nın GETAT birim ve uygulama çerçevesi, yetki, hijyen ve kayıt yükümlülüğünü belirler. Evde veya yetkisiz ortamda yapılan uygulamalar bu rehberin konusu değildir ve önerilmez. Kişi, uygulayıcının hekimliğini ve ortamın niteliğini sorma hakkına sahiptir.",
    "Rehberin alt yazıları her yöntemi ayrı derinleştirir. Buradaki metin ortak omurgayı kurar: önce öykü ve uygunluk, sonra yöntem seçimi, ardından rıza, izlem ve yaşam biçimi. Bütüncül sağlık ve medikal estetik ile kesişim noktaları da işaret edilir; otomatik birleştirme yoktur.",
  ],
  sections: [
    {
      id: "cerceve",
      title: "Yasal ve Etik Çerçeve",
      paragraphs: [
        "GETAT uygulamaları, belirli eğitim ve yetki koşullarına bağlıdır. Bu koşullar, uygulamanın 'geleneksel' oluşundan bağımsızdır. Hijyen, atık yönetimi, onam ve kayıt, modern hekimliğin parçasıdır.",
        "Tanıtım kuralları hasta yorumu, öncesi-sonrası görsel, fiyat ve üstünlük iddiasını yasaklar. Bu sayfada bu unsurlar yoktur. Bunun yerine kimler için konuşulabileceği, kimler için ertelenmesi gerektiği ve belirsizliğin nasıl anlatılacağı yer alır.",
        "Hekimlik etiği, kanıt düzeyini abartmamayı gerektirir. Bazı yöntemlerde geleneksel kullanım uzun, modern kanıt ise sınırlı veya karışıktır. Bu durum saklanmaz. Kişi, sınırlı kanıtı bildikten sonra karar verebilmelidir.",
        "Yalova'daki okur, İstanbul veya başka kentlerde duyduğu iddiaları bu çerçeveyle süzebilir. 'Şifa garantisi' ile 'destek yaklaşımı' aynı cümlede durmaz. Rehber ikinci dili seçer.",
      ],
    },
    {
      id: "degerlendirme",
      title: "Değerlendirme Sırası",
      paragraphs: [
        "İyi bir GETAT planı, şikâyetin öyküsüyle başlar: ne zamandır, ne artırır, hangi hekimler görülmüştür, hangi ilaçlar kullanılmaktadır. Laboratuvar ve görüntüleme ihtiyacı varsa bunlar ertelenmez. Yöntem seçimi bu bilgiden sonra gelir.",
        "Kan sulandırıcı ilaç, anemi, enfeksiyon, gebelik, bağışıklık baskılanması veya kontrolsüz kronik hastalık, bazı uygulamaları durdurur. Bu dışlama listesi korkutmak için değil, zarar vermemek için vardır.",
        "Kişinin beklentisi ölçülür. 'Tek seansla bitsin' isteği ile 'uyku ve ağrı yükümü yönetmeme yardım etsin' isteği aynı plan değildir. Beklenti uyuşmazlığı, teknikten bağımsız düş kırıklığı üretir.",
        "Aynı seansta birden fazla yöntem dayatılmaz. Yük, tahammül ve izlem kapasitesi birlikte düşünülür. Yalova dışından gelen kişilerde yol yorgunluğu da bu hesabın parçasıdır.",
      ],
    },
    {
      id: "hacamat",
      title: "Hacamat: Bilimsel Perspektife Giriş",
      paragraphs: [
        "Hacamat, geleneksel kullanım öyküsü uzun bir uygulamadır. Modern tıpta mekanizma tartışmaları ve seçilmiş durumlardaki olası katkı araştırmaları sürmektedir. Bu, her ağrı veya her metabolik şikâyette ilk tercih olduğu anlamına gelmez.",
        "Hijyen, tek kullanımlık malzeme, cilt değerlendirmesi ve sonrası bakım vazgeçilmezdir. Enfeksiyon riski yok sayılamaz. Ev tipi uygulamalar bu riski büyütür.",
        "Kimler için uygun olmadığı en az kimler için konuşulabileceği kadar önemlidir. Anemi, kanama eğilimi, gebelik ve cilt enfeksiyonu sık anılan duraklatma nedenleridir. Ayrıntılar ilgili cluster yazıdadır.",
        "Hacamat, kilo yönetimi veya 'toksin atma' sloganıyla pazarlanmamalıdır. Vücudun atık yönetimi böbrek, karaciğer ve solunum ile yürür. Slogan, tıbbi anlatının yerini tutmaz.",
      ],
    },
    {
      id: "akupunktur",
      title: "Akupunktur: Ne Zaman Konuşulur?",
      paragraphs: [
        "Akupunktur, belirli şikâyetlerde tamamlayıcı bir seçenek olarak literatürde yer alır. Kanıt düzeyi tanıya göre değişir. Migren, bazı kas-iskelet ağrıları veya bulantı gibi başlıklarda tartışma farklıdır; her belirti için aynı güçte değildir.",
        "İğne fobisi, kanama bozukluğu, enfeksiyon veya gerçekçi olmayan beklenti planı değiştirebilir. Sterilite ve anatomi bilgisi güvenliğin temelidir.",
        "Akupunktur, ilaç veya fizik tedavinin yerine geçmez. Hekim, mevcut tedaviyi kesmeyi önermez; kesişimi ilgili hekimle konuşmayı önerir.",
        "Yalova pratiğinde seans aralığı sabitleştirilmez. Yanıt, tahammül ve günlük işlev izlenerek konuşulur. 'On seans paket' dili bu rehberde yoktur.",
      ],
    },
    {
      id: "suluk-ozon",
      title: "Sülük ve Ozon: Modern Yorumun Sınırı",
      paragraphs: [
        "Sülük tedavisi, tıp tarihinde yeri olan ve belirli cerrahi bağlamlarda da tartışılan bir uygulamadır. Estetik veya dolaşım şikâyetlerinde evrensel çözüm değildir. Hijyen, kaynak güvenliği ve enfeksiyon riski merkeztedir.",
        "Ozon uygulamaları farklı yollarla konuşulabilir; her yol aynı kanıt ve güvenlik profiline sahip değildir. Sistemik iddialar ile yerel destek yaklaşımları birbirine karıştırılmamalıdır.",
        "Varis, hemoroid, yorgunluk veya kilo başlıklarında bu yöntemler 'yerine geçen tedavi' olarak sunulamaz. Bütüncül sağlık rehberindeki ilgili yazılar bu kesişimi geniş anlatır.",
        "Kişi, kullanılan malzemenin niteliğini ve acil durumda ne yapılacağını sormalıdır. Anlaşılmayan onam, onam değildir.",
      ],
    },
    {
      id: "guvenlik",
      title: "Güvenlik, Rıza ve İzlem",
      paragraphs: [
        "Her uygulamada ortam, malzeme ve kayıt denetlenir. Ateş, yayılan kızarıklık, nefes darlığı veya beklenmeyen kanama gibi erken uyarılar işlem günü anlatılır. Beklemek yerine iletişim kurulması istenir.",
        "İzlem, uygulamanın bittiği an değil sürecin parçasıdır. Yalova dışından gelen kişilerde telefon veya kontrol randevusu önceden netleşir.",
        "İlaç etkileşimi özellikle kanama ve bağışıklık başlıklarında kritiktir. Kişi, bitkisel ürün dahil tüm kullandıklarını paylaşmalıdır. 'Doğal' olan her şey riskten azade değildir.",
        "Çocuk, gebe ve ağır bağışıklık baskılanması olan kişilerde eşik daha yüksektir. Bu gruplarda tamamlayıcı yaklaşım çoğu zaman ertelenir veya hiç konuşulmaz.",
      ],
    },
    {
      id: "butuncul-estetik",
      title: "Bütüncül Sağlık ve Estetikle Kesişim",
      paragraphs: [
        "Fibromiyalji, kronik yorgunluk, bel fıtığı veya kilo yönetimi konuşulurken GETAT bir destek katmanı olabilir; ana omurga değildir. Uyku, hareket, beslenme ve ilgili hekim izlemi önce gelir.",
        "Medikal estetik işlemlerle aynı güne sıkıştırılan GETAT, hem izlemi hem tahammülü zorlaştırabilir. Otomatik kombinasyon yoktur.",
        "Kişi bazen estetik talep ederken aslında ağrı ve yorgunluk yükünü tarif eder. GETAT bu yükü sihirle çözmez; bazen hiç uygun olmaz. Etik olan, her talebi işleme çevirmemektir.",
        "Yalova sağlık rehberi, kentin termal kaynakları ve kuruluş haritasını ayrı anlatır. Termal su, GETAT'ın yerine geçmez; yaşam düzeni içinde konuşulabilir bir çevresel kaynaktır.",
      ],
    },
    {
      id: "yalova-pratik",
      title: "Yalova Pratiğinde Planlama",
      paragraphs: [
        "Yalova Merkez'deki klinik, ilçe ve feribot bağlantıları nedeniyle farklı yol süreleriyle çalışır. Uzun yol sonrası aynı gün yoğun uygulama dayatılmaz.",
        "Termal ve yaz sezonu yoğunluğu randevu saatini etkiler. Hijyen ve zaman baskısı çatışırsa zaman baskısı kaybeder.",
        "Kişi, başka kentte başlamış belirsiz bir uygulamayla geldiğinde önce kayıtlar netleştirilir. Bilinmeyen bir işlem üzerine ekleme yapmak risklidir.",
        "Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanan bu metin, Yalova'daki okura sakin bir sözlük ve sıra sunar. Uygulama kararı metinden değil, muayeneden çıkar.",
      ],
    },
  ],
  faqs: [
    {
      question: "GETAT, ilaç tedavisinin yerini alır mı?",
      answer:
        "Almaz. Tamamlayıcı yaklaşım, ilgili hekimlik alanını ertelemez ve yerine geçmez.",
    },
    {
      question: "Hacamat toksin atar mı?",
      answer:
        "Toksin atma sloganı tıbbi bir anlatı değildir. Uygunluk ve hijyen ayrı konuşulur.",
    },
    {
      question: "Akupunktur her ağrıda ilk tercihtir?",
      answer:
        "Değildir. Kanıt ve uygunluk tanıya göre değişir. Değerlendirme gerekir.",
    },
    {
      question: "Sülük ve ozon herkese uygulanır mı?",
      answer:
        "Hayır. Enfeksiyon, kanama, gebelik ve hastalık durumu planı durdurabilir.",
    },
    {
      question: "Evde GETAT uygulanabilir mi?",
      answer:
        "Bu rehber evde uygulamayı önermez. Yetki, hijyen ve kayıt hekimlik ortamına aittir.",
    },
    {
      question: "Bu rehber kişiye özel plan mıdır?",
      answer:
        "Değildir. Plan yüz yüze değerlendirme ve rıza sürecinden sonra konuşulur.",
    },
  ],
});

export const clusters = [
  createCluster({
    slug: "hacamat-nedir-bilimsel-perspektif",
    title: "Hacamat Nedir? Bilimsel Perspektif",
    pillarSlug: "getat",
    category: "getat",
    description:
      "Hacamatın geleneksel kullanımı, modern tartışma alanı, hijyen, adaylık ve Yalova'da değerlendirme sırası.",
    lastUpdated: "2026-10-06",
    keywords: ["hacamat", "kupa"],
    introduction: [
      "Hacamat, uzun geleneksel kullanım öyküsü olan bir uygulamadır. Modern hekimlikte mekanizma ve seçilmiş katkılar tartışılır; evrensel çözüm olarak sunulmaz. Bu yazı Yalova'daki okura bilimsel sınırları anlatır.",
      "Amaç, 'toksin atma' sloganını bırakıp uygunluk, hijyen ve rıza diline geçmektir. Dilimiz yönetim ve destektir; şifa garantisi yoktur.",
    ],
    sections: [
      {
        id: "tanim",
        title: "Tanım ve Sınır",
        paragraphs: [
          "Hacamat, cilt üzerinde belirli bir planla konuşulan geleneksel bir uygulamadır. Teknik ayrıntı ve marka adı bu yazının konusu değildir. Önemli olan, işlemin tıbbi bir eylem oluşu ve rastgele yapılamayışıdır.",
          "Geleneksel yaygınlık, modern kanıtın yerine geçmez. Kanıt düzeyi abartılmaz. Kişi bu belirsizliği bilerek karar vermelidir.",
        ],
      },
      {
        id: "adaylik",
        title: "Adaylık ve Dışlama",
        paragraphs: [
          "Anemi, kanama eğilimi, kan sulandırıcı kullanım, gebelik, aktif cilt enfeksiyonu ve ağır bağışıklık baskılanması planı durdurabilir. Liste tam değildir; hekim öyküye göre genişletir.",
          "Kontrolsüz kronik hastalık veya ateşli dönemde acele uygulama önerilmez. Önce ilgili hekimlik alanı netleşir.",
        ],
      },
      {
        id: "hijyen",
        title: "Hijyen ve Güvenlik",
        paragraphs: [
          "Tek kullanımlık malzeme, cilt hazırlığı, atık yönetimi ve ortam temizliği vazgeçilmezdir. Ev tipi veya yetkisiz ortam bu yazının dışında kalır.",
          "İşlem sonrası bakım ve erken uyarı bulguları aynı gün anlatılır. Kızarıklığın yayılması, ateş veya beklenmeyen halsizlik beklenmemelidir.",
        ],
      },
      {
        id: "beklenti",
        title: "Beklenti Yönetimi",
        paragraphs: [
          "Hacamat kilo, varis, yorgunluk veya ağrıyı 'bitirmez'. Bütüncül planda bir destek katmanı olarak konuşulabilir veya hiç uygun olmayabilir.",
          "Tek seans mucizesi yoktur. İzlem, tahammül ve günlük işlev birlikte okunur.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova'da Planlama",
        paragraphs: [
          "Uzun yol ve işlem aynı güne sıkıştırılmayabilir. Termal sezon yoğunluğu hijyen ritmini bozmamalıdır.",
          "Başka yerde yapılmış belirsiz uygulamalar üzerine ekleme yapılmayabilir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Yazı reklam değildir.",
          "Karar muayene, uygunluk ve rıza sürecinden sonra verilir.",
        ],
      },
    ],
    sources: [commonSources.saglikGetat, commonSources.ttbEtik, commonSources.whoTm],
    faqs: [
      {
        question: "Hacamat toksin atar mı?",
        answer:
          "Toksin atma iddiası bilimsel bir anlatı değildir. Uygunluk ve hijyen ayrı konuşulur.",
      },
      {
        question: "Herkese uygulanır mı?",
        answer:
          "Hayır. Anemi, kanama, gebelik ve enfeksiyon gibi durumlar planı durdurabilir.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit sayı yoktur. Yanıt ve tahammül izlenerek konuşulur.",
      },
      {
        question: "Evde yapılabilir mi?",
        answer:
          "Önerilmez. Yetki, hijyen ve kayıt hekimlik ortamına aittir.",
      },
      {
        question: "İlaçları kesmek gerekir mi?",
        answer:
          "Hekim onayı olmadan ilaç kesilmez. Özellikle kan sulandırıcılar kritiktir.",
      },
      {
        question: "Bu yazı kişiye özel midir?",
        answer:
          "Değildir. Plan yüz yüze değerlendirmeden sonra konuşulur.",
      },
    ],
  }),
  createCluster({
    slug: "akupunktur-hangi-durumlarda-tercih-edilir",
    title: "Akupunktur Hangi Durumlarda Tercih Edilir?",
    pillarSlug: "getat",
    category: "getat",
    description:
      "Akupunkturun tamamlayıcı yerini, kanıtın tanıya göre değiştiğini ve Yalova'da değerlendirme ölçütlerini anlatır.",
    lastUpdated: "2026-10-06",
    keywords: ["akupunktur", "iğne"],
    introduction: [
      "Akupunktur, bazı şikâyetlerde tamamlayıcı bir seçenek olarak konuşulur. Her belirti için aynı güçte kanıt yoktur. Bu yazı Yalova'daki okura 'ne zaman tercih edilir?' sorusunu abartısız yanıtlar.",
      "Tercih, kişinin isteğinden önce uygunluk, güvenlik ve mevcut tedavilerle kesişim anlamına gelir.",
    ],
    sections: [
      {
        id: "kanit",
        title: "Kanıt Tanıya Göre Değişir",
        paragraphs: [
          "Literatürde bazı ağrı ve bulantı başlıklarında tartışma daha yoğundur; başka belirtilerde veri seyrektir. Bu dağılım saklanmaz.",
          "Kanıtın varlığı, o kişinin aday olduğu anlamına gelmez. Anatomi, ilaçlar ve beklenti ayrı süzgeçtir.",
        ],
      },
      {
        id: "adaylik",
        title: "Adaylık",
        paragraphs: [
          "İğne fobisi, kanama bozukluğu, enfeksiyon, gebelik ve gerçekçi olmayan beklenti planı değiştirebilir. Hekim, sterilite ve nokta seçimini kişiye göre kurar.",
          "Ağrı tek başına gerekçe değildir. Neden araştırılmadan yalnızca iğne konuşulmaz.",
        ],
      },
      {
        id: "ilac",
        title: "İlaç ve Diğer Tedaviler",
        paragraphs: [
          "Akupunktur, hekimin verdiği ilacı kesmenin gerekçesi değildir. Kesişim, ilgili hekimle konuşulur.",
          "Fizik tedavi veya egzersiz planı varsa bunlar 'eski yöntem' diye küçümsenmez. Tamamlayıcı katman, omurgayı devirmez.",
        ],
      },
      {
        id: "surec",
        title: "Süreç ve İzlem",
        paragraphs: [
          "Seans aralığı sabitleştirilmez. Yanıt, uyku, ağrı yükü ve günlük işlev izlenir.",
          "Erken dönemde geçici yorgunluk veya lokal hassasiyet olabilir. Beklenmeyen nörolojik belirti beklenmez, iletişim kurulur.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova Pratiği",
        paragraphs: [
          "İlçe dışından gelen kişilerde aynı gün uzun yol ve işlem yorgunluğu birlikte planlanır.",
          "Termal sezon yoğunluğu, acele seans dayatmasına dönüşmemelidir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı nokta haritası veya evde uygulama tarifi içermez.",
        ],
      },
    ],
    sources: [commonSources.nccihAcupuncture, commonSources.saglikGetat, commonSources.ttbEtik],
    faqs: [
      {
        question: "Akupunktur her ağrıyı alır mı?",
        answer:
          "Alır iddiası uygun değildir. Kanıt ve yanıt tanıya ve kişiye göre değişir.",
      },
      {
        question: "İlaç bırakılır mı?",
        answer:
          "Hekim onayı olmadan bırakılmaz. Akupunktur yerine geçen tedavi değildir.",
      },
      {
        question: "Acıtır mı?",
        answer:
          "Duyum kişiden kişiye değişir. Konfor önlemleri görüşmede konuşulur.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit paket yoktur. İzlem bulgularına göre konuşulur.",
      },
      {
        question: "Gebelikte uygulanır mı?",
        answer:
          "Gebelik planı durdurabilir veya özel değerlendirme ister. Genel evet-hayır yoktur.",
      },
      {
        question: "Bu yazı tanı mıdır?",
        answer:
          "Değildir. Tanı ve plan hekim değerlendirmesiyle konur.",
      },
    ],
  }),
  createCluster({
    slug: "suluk-tedavisi-modern-yorumu",
    title: "Sülük Tedavisi: Modern Yorumu",
    pillarSlug: "getat",
    category: "getat",
    description:
      "Sülük tedavisinin tarihsel yeri, modern güvenlik koşulları, adaylık ve varis-hemoroid kesişimindeki sınırlar.",
    lastUpdated: "2026-10-06",
    keywords: ["sülük", "hirudoterapi"],
    introduction: [
      "Sülük tedavisi, tıp tarihinde izi olan ve belirli cerrahi bağlamlarda da tartışılan bir uygulamadır. Modern yorum, romantize edilmiş 'doğal şifa' anlatısının değil; kaynak güvenliği, hijyen ve uygunluğun yorumudur.",
      "Yalova'da varis veya hemoroid başlıklarıyla birlikte anılabilir. Bu, evrensel çözüm olduğu anlamına gelmez.",
    ],
    sections: [
      {
        id: "modern",
        title: "Modern Yorum Ne Demektir?",
        paragraphs: [
          "Modern yorum, uygulamanın tıbbi bir eylem oluşunu kabul eder. Kaynak, saklama, tek hasta kullanımı ve atık yönetimi ev tipi pratikten ayrılır.",
          "Tarihsel yaygınlık, her dolaşım şikâyetinde ilk tercih demek değildir. Kanıt ve risk birlikte anlatılır.",
        ],
      },
      {
        id: "adaylik",
        title: "Adaylık",
        paragraphs: [
          "Anemi, kanama bozukluğu, enfeksiyon, bağışıklık baskılanması, gebelik ve bazı ilaçlar planı durdurabilir.",
          "Cilt bütünlüğünün bozulduğu bölgeler ve kontrolsüz hastalıklar ayrı süzgeçtir. Hekim, damar cerrahisi veya ilgili hekimlik alanını ertelemez.",
        ],
      },
      {
        id: "varis-hemoroid",
        title: "Varis ve Hemoroid Kesişimi",
        paragraphs: [
          "Bu şikâyetlerde sülük, yerine geçen tedavi olarak sunulamaz. Bütüncül sağlık rehberindeki ilgili yazı bu kesişimi geniş anlatır.",
          "Kırmızı bayraklar — ani şişlik, tek taraflı ağrı, kanama, ateş — acil değerlendirme ister. GETAT bu tabloyu bekletmez.",
        ],
      },
      {
        id: "guvenlik",
        title: "Güvenlik",
        paragraphs: [
          "Enfeksiyon ve kanama riski yok sayılamaz. Erken uyarı bulguları işlem günü anlatılır.",
          "Kişi, uygulamanın nerede ve hangi koşullarda yapıldığını sorma hakkına sahiptir.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova Pratiği",
        paragraphs: [
          "Uzun yol sonrası aynı gün uygulama dayatılmaz. İzlem yolu randevu günü netleşir.",
          "Başka kentte belirsiz başlamış bir dizi üzerine ekleme yapılmayabilir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı evde sülük uygulaması tarifi içermez ve önermez.",
        ],
      },
    ],
    sources: [commonSources.saglikGetat, commonSources.ttbEtik, commonSources.whoTm],
    faqs: [
      {
        question: "Sülük varisi bitirir mi?",
        answer:
          "Bitirir iddiası uygun değildir. İlgili hekimlik alanı ertelenmez.",
      },
      {
        question: "Herkese uygulanır mı?",
        answer:
          "Hayır. Kanama, anemi, enfeksiyon ve gebelik planı durdurabilir.",
      },
      {
        question: "Enfeksiyon riski var mıdır?",
        answer:
          "Vardır. Hijyen ve kaynak güvenliği bu yüzden merkeztedir.",
      },
      {
        question: "Evde uygulanabilir mi?",
        answer:
          "Önerilmez. Yetki ve kayıt hekimlik ortamına aittir.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit sayı yoktur. Uygunluk her seferinde yeniden konuşulur.",
      },
      {
        question: "Bu yazı tedavi planı mıdır?",
        answer:
          "Değildir. Plan muayene ve rızadan sonra konuşulur.",
      },
    ],
  }),
  createCluster({
    slug: "ozon-tedavisinin-kullanim-alanlari",
    title: "Ozon Tedavisinin Kullanım Alanları",
    pillarSlug: "getat",
    category: "getat",
    description:
      "Ozon yaklaşımlarının farklı uygulama yolları, güvenlik sınırları ve Yalova'da değerlendirme sırası.",
    lastUpdated: "2026-10-06",
    keywords: ["ozon", "ozon tedavisi"],
    introduction: [
      "Ozon tedavisi ifadesi, birbirinden farklı uygulama yollarını tek başlıkta toplar. Her yol aynı kanıt ve güvenlik profiline sahip değildir. Bu yazı Yalova'daki okura bu ayrımı öğretir.",
      "Sistemik iddialar ile yerel destek yaklaşımları karıştırılmamalıdır. Dilimiz kullanım alanı değil, konuşulabilir alan ve sınırdır.",
    ],
    sections: [
      {
        id: "ayrim",
        title: "Yolları Birbirine Karıştırmamak",
        paragraphs: [
          "Farklı uygulama biçimleri farklı risk taşır. Bu yazı teknik reçete vermez; kişinin hekime 'hangi yol, neden, hangi risk?' diye sormasını ister.",
          "İnternette dolaşan ev tipi cihaz anlatıları bu rehberin dışındadır ve önerilmez.",
        ],
      },
      {
        id: "adaylik",
        title: "Adaylık",
        paragraphs: [
          "Belirli enzim eksiklikleri, kontrolsüz tiroit, gebelik, ağır anemi veya gerçekçi olmayan beklenti planı durdurabilir. Liste hekim öyküsüne göre genişler.",
          "Kilo, yorgunluk veya cilt görünümü tek başına gerekçe olmayabilir. Önce nedenler konuşulur.",
        ],
      },
      {
        id: "kesişim",
        title: "Diğer Başlıklarla Kesişim",
        paragraphs: [
          "Kilo yönetiminde ozon ve hacamat desteği ayrı bir cluster yazıda ele alınır. Oradaki dil de vaat değil destektir.",
          "Medikal estetikle aynı güne sıkıştırma zorunlu değildir. İzlem ve tahammül önce gelir.",
        ],
      },
      {
        id: "guvenlik",
        title: "Güvenlik ve Rıza",
        paragraphs: [
          "Ortam, cihaz bakımı ve uygulayıcı yetkisi sorulmalıdır. Anlaşılmayan onam geçerli sayılmaz.",
          "Beklenmeyen nefes, göğüs veya alerji benzeri bulgu beklenmez; iletişim kurulur.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova'da Plan",
        paragraphs: [
          "Yol yorgunluğu ve işlem yükü aynı güne yığılmayabilir. Kontrol ihtiyacı varsa önceden konuşulur.",
          "Başka klinikte belirsiz başlamış ozon dizisi üzerine ekleme yapılmayabilir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı ev tipi ozon tarifi veya doz şeması içermez.",
        ],
      },
    ],
    sources: [commonSources.saglikGetat, commonSources.ttbEtik, commonSources.whoTm],
    faqs: [
      {
        question: "Ozon her hastalığı tedavi eder mi?",
        answer:
          "Etmez. Kullanım alanı iddiası abartılmamalıdır. İlgili hekimlik alanı ertelenmez.",
      },
      {
        question: "Evde ozon cihazı kullanılır mı?",
        answer:
          "Bu rehber ev tipi kullanımı önermez. Güvenlik ve yetki hekimlik ortamına aittir.",
      },
      {
        question: "Kilo veririr mi?",
        answer:
          "Kilo vaadi uygun değildir. Yaşam biçimi ve ilgili hekim izlemi omurgadır.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit sayı yoktur. Uygunluk her adımda yeniden konuşulur.",
      },
      {
        question: "Hacamatla birlikte yapılır mı?",
        answer:
          "Otomatik birlikte uygulanmaz. Yük ve güvenlik hekime kalır.",
      },
      {
        question: "Bu yazı plan mıdır?",
        answer:
          "Değildir. Plan muayene ve rızadan sonra konuşulur.",
      },
    ],
  }),
];
