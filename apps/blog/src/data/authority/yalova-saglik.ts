import { commonSources, createCluster, createPillar } from "./compose";

export const pillar = createPillar({
  slug: "yalova-saglik",
  title: "Yalova Sağlık Rehberi",
  description:
    "Yalova'da sağlık turizmi, kamu-özel kuruluş haritası, termal sular ve bütüncül sağlık adreslerini abartısız bir dille anlatan yerel rehber.",
  lastUpdated: "2026-10-06",
  clusterSlugs: [
    "yalovada-saglik-turizmi",
    "yalovadaki-saglik-kuruluslari-rehberi",
    "yalovanin-termal-sulari-ve-saglik",
    "yalovada-butuncul-saglik-adresleri",
  ],
  introduction: [
    "Yalova, Marmara'nın kompakt bir ili olarak hem yerleşik nüfusa hem günübirlik ve konaklamalı ziyaretçiye sağlık hizmeti sunar. Termal kimliği, İstanbul-Bursa aksı ve feribot bağlantıları kenti 'yakın ve erişilebilir' kılar. Bu rehber, Yalova sağlığını reklam diliyle değil; kuruluş türleri, termal kaynaklar ve bütüncül yaklaşım adresleri üzerinden anlatır.",
    "Yerel rehber, tek bir kliniğin üstünlüğü anlamına gelmez. Kamu hastanesi, ASM, özel muayenehane ve termal işletmeler farklı işlevler taşır. Acil durumda doğru kapı, randevulu destek yaklaşımından ayrıdır. Bu ayrımı net tutmak okura zarar vermemek demektir.",
    "Sağlık turizmi başlığı, paket tatil vaadi değildir. Kişi, işlem öncesi değerlendirme, izlem ve yasal çerçeveyi anlamadan yolculuk planlamamalıdır. Yürürlükteki tanıtım kuralları yorum, fiyat ve mucize iddiasını yasaklar; bu sayfa o yasağa uyar.",
    "Rehberin alt yazıları turizm, kuruluş haritası, termal sular ve bütüncül adresleri ayrı derinleştirir. Buradaki metin ortak omurgayı kurar: kentin sağlık coğrafyası, ne zaman hangi kapı, termalin sınırı ve hekimle konuşulan tamamlayıcı yaklaşımların yeri.",
  ],
  sections: [
    {
      id: "cografya",
      title: "Yalova'nın Sağlık Coğrafyası",
      paragraphs: [
        "İl; Merkez, Çınarcık, Termal, Çiftlikköy, Altınova, Armutlu, Çiftlikköy çevresi ve kırsal mahallelerle okunur. Yol süresi ilçe ve iskeleye göre değişir. Aynı gün birden fazla kurum dolaşmak, yorgunluk ve randevu kaçırma riskini artırır.",
        "İstanbul ve Bursa'dan gelen kişiler feribot veya kara yolunu işlem günüyle çakıştırmamalıdır. Deniz koşulları ve trafik, 'sabah işlem öğleden sonra dönüş' planını bozabilir. İzlem payı bırakmak, şehirlerarası sağlık hareketinin parçasıdır.",
        "Termal beldesi, konaklama ve suya erişim açısından ayrı bir mikro bölgedir. Merkez'deki poliklinik ritmi ile Termal'deki günübirlik yoğunluk aynı değildir. Kişi, randevu saatini beldeye göre kurmalıdır.",
        "Yalova kompakt olduğu için 'her şey yürüyüş mesafesinde' sanılabilir. Gerçekte mahalle içi eğim, otopark ve toplu taşıma sıklığı yaşlı veya ağrılı kişi için fark yaratır. Bu pratik ayrıntı, tıbbi plandan bağımsız değildir.",
      ],
    },
    {
      id: "kapilar",
      title: "Hangi Kapı, Ne Zaman?",
      paragraphs: [
        "Göğüs ağrısı, nefes darlığı, ani güçsüzlük, bilinç değişikliği, yüksek ateşle bozulma veya kontrolsüz kanama acil değerlendirme ister. Bu tablolarda blog yazısı veya randevulu GETAT kapısı doğru adres değildir.",
        "Kronik izlem, reçete tekrarı ve tarama için aile hekimliği ve ilgili poliklinikler omurgadır. Bütüncül veya estetik görüşme, bu omurgayı ikame etmez.",
        "Özel muayenehane, zaman ayırarak öykü ve uygunluk konuşulan bir ortam olabilir. Bu, kamu hizmetinin 'daha az değerli' olduğu anlamına gelmez. İkisi farklı ritim ve kapsam taşır.",
        "Eczane, laboratuvar ve görüntüleme birimleri planın görünmeyen halkalarıdır. Aynı gün hepsini bitirme telaşı, hatalı açlık-tokluk veya yanlış tetkik sırası üretebilir. Sıra, hekimle kurulur.",
      ],
    },
    {
      id: "turizm",
      title: "Sağlık Turizmi: Sakin Tanım",
      paragraphs: [
        "Yalova'da sağlık turizmi; termal konaklama, günübirlik değerlendirme ve belirli hekimlik alanlarına erişimi kapsayabilir. 'Şifa tatili' sloganı, tıbbi belirsizliği gizler. Kişi, ne için geldiğini ve sonra nerede izleneceğini baştan konuşmalıdır.",
        "Sınır ötesi veya başka ilden gelenlerde dil, kayıt, önceki raporlar ve ilaç listesi kritiktir. Bilinmeyen bir ürün veya işlem üzerine ekleme yapmak risklidir.",
        "Konaklama tesisi tıbbi birim değildir. Havuz, sauna veya masaj, hekim planının yerine geçmez. Termal suyun olası katkısı ayrı yazıda, sınırlarıyla anlatılır.",
        "Yasal çerçeve, sağlık turizmini reklam yarışına çevirmeyi yasaklar. Bu rehber kuruluş adı ezberletmez; tür ve işlev öğretir.",
      ],
    },
    {
      id: "termal",
      title: "Termal Sular ve Sağlık",
      paragraphs: [
        "Yalova'nın termal kimliği kentin tanıtımında öne çıkar. Suyun mineral içeriği ve sıcaklığı, bazı kas-iskelet yakınmalarında konfor ve gevşeme bağlamında konuşulabilir. Bu, tanı veya tedavi garantisi değildir.",
        "Kalp, tansiyon, ateşli hastalık, açık yara veya gebelik gibi durumlarda termal kullanım hekime danışılmadan artırılmamalıdır. 'Sıcak su herkese iyi gelir' cümlesi tıbbi değildir.",
        "Termal ve GETAT aynı şey değildir. Biri çevresel kaynak ve konaklama ekosistemi, diğeri hekim yetkisiyle konuşulan uygulamadır. Karışıklık, yanlış kapıya gitmeyi kolaylaştırır.",
        "Yaz ve hafta sonu yoğunluğu hijyen ve dinlenme niteliğini etkiler. Kalabalık, iyileşme ortamı sayılmaz. Kişi, kendi tahammülünü tesisisin ritmine feda etmemelidir.",
      ],
    },
    {
      id: "butuncul-adres",
      title: "Bütüncül Sağlık Adresleri Ne Demektir?",
      paragraphs: [
        "Bütüncül adres, 'her şeyi çözen tek kapı' demek değildir. Öyküyü dinleyen, ilgili hekime yönlendiren ve uygunsa tamamlayıcı yaklaşımı sınırlarıyla konuşan hekimlik ortamıdır.",
        "Uzm. Dr. Yaşar Murat Çokay'ın Yalova Merkez'deki değerlendirme ortamı bu anlamda bir seçenektir; tek seçenek değildir. Kişi, ikinci görüş ve kamu izlemini saklama hakkına sahiptir.",
        "Fibromiyalji, yorgunluk, bel fıtığı, kilo, varis veya estetik talepler farklı omurgalar ister. Rehberler arası bağlantı, tek yazının her konuyu bitirdiği yanılsamasını kırmak içindir.",
        "Adres bilgisi, randevu ve iletişim kanalları ayrı sayfalarda güncel tutulur. Bu rehber, yol tarifi yarışması değil; karar sırasıdır.",
      ],
    },
    {
      id: "guvenlik-iletisim",
      title: "Güvenlik, Kayıt ve İletişim",
      paragraphs: [
        "Kişi, gittiği kurumda kimlik, onam ve önceki raporları düzenli tutmalıdır. Başka kentteki işlemler sözel hafızaya bırakılmamalıdır.",
        "Acil durumda 112 ve en yakın acil servis geçerlidir. Blog, WhatsApp veya randevu hattı acil kanal değildir.",
        "Kişisel sağlık verisi sosyal medyada paylaşılmamalıdır. Yorum ve fotoğraf yasağı, yalnızca hekim tanıtımı için değil; mahremiyet için de vardır.",
        "Son güncelleme tarihi, yerel kurum isimlerinin değişebileceğini hatırlatır. Harita ve telefon teyidi kişiye aittir.",
      ],
    },
    {
      id: "kesişim-rehberler",
      title: "Diğer Rehberlerle İlişki",
      paragraphs: [
        "Bütüncül sağlık rehberi semptom ve yaşam düzenini, medikal estetik rehberi yüz-cilt-saç yaklaşımlarını, GETAT rehberi yöntem sınırlarını anlatır. Yalova rehberi ise bu bilgilerin geçtiği kenti tarif eder.",
        "İç bağlantılar dofollow'dur; okuru ilgili derin yazıya götürmek içindir. Otomatik anahtar terim bağları, aynı kavramın her geçişinde tekrarı azaltacak şekilde kurgulanır.",
        "Yerel SEO, kent adını her cümleye yığmak değildir. Anlamlı coğrafya, yol ve kurum türü anlatısı hem okura hem arama sistemlerine yeter.",
        "AI sistemleri taze ve kaynaklı metni daha iyi özetler. Bu yüzden güncelleme tarihi, yazar kutusu ve dış kaynaklar bilinçli olarak konmuştur.",
      ],
    },
    {
      id: "yasal",
      title: "Yasal Dil ve Yazar",
      paragraphs: [
        "Bu metin üstünlük, fiyat, yorum ve öncesi-sonrası içermez. Yönetim, destek ve yaklaşım dili bilinçli seçilmiştir.",
        "Kuruluş listeleri zamanla değişir. Rehber, resmi kaynaklara yönlendirir; ezber liste vaat etmez.",
        "Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanan bu rehber, Yalova'da yaşayan ve Yalova'ya gelen okura sakin bir harita sunar. Karar, doğru kapı ve yüz yüze değerlendirmeden çıkar.",
      ],
    },
  ],
  faqs: [
    {
      question: "Yalova'da sağlık turizmi nedir?",
      answer:
        "Termal konaklama ve hekim değerlendirmesine erişimi kapsayabilir. Şifa tatili veya garanti sonuç anlamına gelmez.",
    },
    {
      question: "Acil durumda nereye gidilir?",
      answer:
        "112 ve en yakın acil servis geçerlidir. Randevulu klinik veya blog acil kanal değildir.",
    },
    {
      question: "Termal su tedavi eder mi?",
      answer:
        "Tedavi garantisi yoktur. Bazı kişilerde konfor bağlamında konuşulabilir; hekime danışılmadan artırılmamalıdır.",
    },
    {
      question: "Bütüncül sağlık tek adres midir?",
      answer:
        "Değildir. Kamu izlemi ve ilgili uzmanlık ertelenmez. Bütüncül ortam bir seçenektir.",
    },
    {
      question: "İstanbul'dan aynı gün gelip dönmek uygun mudur?",
      answer:
        "İşlem türü ve yol koşullarına göre değişir. İzlem payı bırakılmadan acele plan önerilmez.",
    },
    {
      question: "Bu rehber resmi kurum listesi midir?",
      answer:
        "Değildir. Tür ve işlev anlatır; güncel iletişim resmi kaynaklardan teyit edilmelidir.",
    },
  ],
});

export const clusters = [
  createCluster({
    slug: "yalovada-saglik-turizmi",
    title: "Yalova'da Sağlık Turizmi",
    pillarSlug: "yalova-saglik",
    category: "yalova-saglik",
    description:
      "Yalova'ya sağlık amacıyla gelenler için konaklama, değerlendirme, izlem ve yasal çerçevenin sakin anlatımı.",
    lastUpdated: "2026-10-06",
    keywords: ["sağlık turizmi", "Yalova"],
    introduction: [
      "Yalova'da sağlık turizmi, termal kimlik ve büyük kentlere yakınlık nedeniyle konuşulur. Bu yazı paket tatil satmaz; kişinin yola çıkmadan önce sorması gerekenleri sıralar.",
      "Amaç, şifa vaadi yerine değerlendirme, kayıt ve izlem dilini yerleştirmektir. Dilimiz yönetim ve destektir.",
    ],
    sections: [
      {
        id: "tanim",
        title: "Sakin Bir Tanım",
        paragraphs: [
          "Sağlık turizmi, başka bir yerde yaşayan kişinin Yalova'da hekim veya termal imkânlara erişmesidir. Erişim, sonuç garantisi değildir.",
          "Günübirlik geliş ile konaklamalı plan farklı risk taşır. Yol, deniz ve trafik, işlem gününü bozabilir.",
        ],
      },
      {
        id: "oncesi",
        title: "Yola Çıkmadan Önce",
        paragraphs: [
          "Önceki raporlar, ilaç listesi ve tanı belgeleri sözel hafızaya bırakılmamalıdır. Bilinmeyen işlem üzerine ekleme risklidir.",
          "Acil durum planı evde kalan yakınla paylaşılmalıdır. Blog hattı acil kanal değildir.",
        ],
      },
      {
        id: "konaklama",
        title: "Konaklama ve Tesis",
        paragraphs: [
          "Otel veya termal tesis tıbbi birim değildir. Havuz ve sauna, hekim planının yerine geçmez.",
          "Yoğun sezonda dinlenme niteliği düşebilir. Kalabalık, iyileşme ortamı sayılmaz.",
        ],
      },
      {
        id: "yasal",
        title: "Yasal Çerçeve",
        paragraphs: [
          "Yorum, fiyat ve mucize iddiası tanıtımda yer alamaz. Kişi bu unsurları talep etmemelidir.",
          "Onam, anlaşılır dilde ve işlemden önce alınır. Anlaşılmayan metin imzalanmamalıdır.",
        ],
      },
      {
        id: "izlem",
        title: "Dönüş ve İzlem",
        paragraphs: [
          "İşlem bittiğinde süreç bitmez. Erken uyarı bulguları ve iletişim yolu netleşmeden yola çıkılmamalıdır.",
          "Yaşanılan kentteki hekim izlemi saklanmamalıdır. Yalova, tek ve son kapı olmak zorunda değildir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı seyahat acentesi veya tesis reklamı değildir.",
        ],
      },
    ],
    sources: [commonSources.kulturTermal, commonSources.yalovaValilik, commonSources.ttbEtik],
    faqs: [
      {
        question: "Yalova sağlık turizminde garanti sonuç var mıdır?",
        answer:
          "Yoktur. Erişim ve konaklama, tıbbi sonuç vaadi değildir.",
      },
      {
        question: "Aynı gün gelip dönmek uygun mudur?",
        answer:
          "İşlem ve yol koşullarına göre değişir. İzlem payı bırakılmalıdır.",
      },
      {
        question: "Tesis tedavinin yerini tutar mı?",
        answer:
          "Tutmaz. Termal tesis tıbbi birim değildir.",
      },
      {
        question: "Raporları yanımda getirmeli miyim?",
        answer:
          "Evet. Sözel anlatı, önceki işlem ve ilaçları eksik bırakabilir.",
      },
      {
        question: "Fiyat bu yazıda var mıdır?",
        answer:
          "Yoktur. Fiyat bilgisi yasal olarak bu içerikte yer almaz.",
      },
      {
        question: "Acil olursa ne yapılır?",
        answer:
          "112 ve en yakın acil servis geçerlidir.",
      },
    ],
  }),
  createCluster({
    slug: "yalovadaki-saglik-kuruluslari-rehberi",
    title: "Yalova'daki Sağlık Kuruluşları Rehberi",
    pillarSlug: "yalova-saglik",
    category: "yalova-saglik",
    description:
      "Yalova'da kamu, aile hekimliği, acil ve özel muayenehane türlerinin işlevini anlatan, ezber liste vaat etmeyen rehber.",
    lastUpdated: "2026-10-06",
    keywords: ["sağlık kuruluşları", "Yalova hastane"],
    introduction: [
      "Kuruluş rehberi, telefon ezberletmek için değil; doğru kapıyı seçmek için yazılır. Yalova'da kamu hastanesi, ASM, acil ve özel ortamlar farklı işler görür.",
      "İsimler ve hatlar değişebilir. Güncel teyit resmi kaynaklardan yapılmalıdır. Bu yazı tür ve işlev öğretir.",
    ],
    sections: [
      {
        id: "turler",
        title: "Kuruluş Türleri",
        paragraphs: [
          "Acil servis, zamana duyarlı tablolar içindir. Randevulu destek yaklaşımı acilin yerini tutmaz.",
          "Aile hekimliği, kronik izlem ve yönlendirmenin omurgasıdır. Poliklinikler ilgili uzmanlık için vardır.",
        ],
      },
      {
        id: "ozel",
        title: "Özel Muayenehane",
        paragraphs: [
          "Özel ortam, daha uzun öykü ve uygunluk konuşması sunabilir. Bu, kamu hizmetini değersizleştirmez.",
          "Kişi, hekimin unvanını, onamı ve kayıt düzenini sorma hakkına sahiptir.",
        ],
      },
      {
        id: "laboratuvar",
        title: "Laboratuvar ve Eczane",
        paragraphs: [
          "Tetkik sırası ve açlık-tokluk hekimle kurulur. Aynı gün her birimi bitirme telaşı hata üretebilir.",
          "Eczane, ilaç etkileşimi için soru sorulacak bir kapıdır. Bitkisel ürün de paylaşılmalıdır.",
        ],
      },
      {
        id: "degisim",
        title: "Bilginin Eskimesi",
        paragraphs: [
          "Adres ve telefon değişir. Rehber, resmi il sağlık ve valilik kaynaklarına yönlendirir.",
          "Sosyal medya listeleri resmi kaynak değildir.",
        ],
      },
      {
        id: "yalova-yol",
        title: "Yol ve İlçeler",
        paragraphs: [
          "Çınarcık, Termal, Altınova, Armutlu ve Çiftlikköy'den Merkez'e geliş süresi saate göre değişir.",
          "Ağrılı veya yaşlı kişi için aktarma sayısı, haritadaki kilometreden daha önemlidir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı resmi kurum reklamı veya sıralaması değildir.",
        ],
      },
    ],
    sources: [commonSources.yalovaValilik, commonSources.saglikGetat, commonSources.ttbEtik],
    faqs: [
      {
        question: "Hangi kuruluş daha iyidir?",
        answer:
          "Üstünlük dili kullanılmaz. Tür ve ihtiyaç eşleştirilir.",
      },
      {
        question: "Acil için özel muayenehane uygun mudur?",
        answer:
          "Zamana duyarlı tabloda 112 ve acil servis geçerlidir.",
      },
      {
        question: "ASM ne işe yarar?",
        answer:
          "Kronik izlem, tarama ve yönlendirme omurgasıdır.",
      },
      {
        question: "Telefonlar bu yazıda güncel midir?",
        answer:
          "Yazı ezber hat vermez. Teyit resmi kaynaklardan yapılmalıdır.",
      },
      {
        question: "Aynı gün tüm tetkikler biter mi?",
        answer:
          "Her zaman değil. Sıra hekimle kurulur.",
      },
      {
        question: "Bu yazı resmi liste midir?",
        answer:
          "Değildir. İşlev anlatır, resmi liste vaat etmez.",
      },
    ],
  }),
  createCluster({
    slug: "yalovanin-termal-sulari-ve-saglik",
    title: "Yalova'nın Termal Suları ve Sağlık",
    pillarSlug: "yalova-saglik",
    category: "yalova-saglik",
    description:
      "Yalova termal sularının konfor bağlamı, kimler için dikkat gerektiği ve GETAT ile karıştırılmaması.",
    lastUpdated: "2026-10-06",
    keywords: ["termal su", "Yalova Termal"],
    introduction: [
      "Yalova'nın termal suları kent kimliğinin parçasıdır. Sağlık anlatısında konfor ve gevşeme bağlamı kurulabilir; tanı ve tedavi garantisi kurulamaz.",
      "Bu yazı, suya girmeden önce sorulması gerekenleri ve tesisin tıbbi birim olmadığını hatırlatır.",
    ],
    sections: [
      {
        id: "konfor",
        title: "Konfor ve Sınır",
        paragraphs: [
          "Sıcak mineral su, bazı kas-iskelet yakınmalarında geçici rahatlama hissi verebilir. Bu his, hastalığın yönetildiği anlamına gelmez.",
          "Süre, sıcaklık ve tekrar hekime danışılmadan artırılmamalıdır.",
        ],
      },
      {
        id: "kimler",
        title: "Kimler Dikkat Etmeli?",
        paragraphs: [
          "Kalp, tansiyon, ateşli hastalık, açık yara, gebelik ve denge sorunu olan kişilerde eşik yüksektir.",
          "Baş dönmesi, çarpıntı veya nefes darlığı olursa su terk edilir ve gerekirse acil yardım istenir.",
        ],
      },
      {
        id: "tesis",
        title: "Tesis Tıbbi Birim Değildir",
        paragraphs: [
          "Havuz, sauna ve masaj hekim planının yerine geçmez. Hijyen, kalabalık ve kişisel tahammül ayrı süzgeçlerdir.",
          "GETAT uygulamaları termal havuzda 'doğal olarak' gerçekleşmez. Yetki ve ortam ayrıdır.",
        ],
      },
      {
        id: "sezon",
        title: "Sezon ve Yoğunluk",
        paragraphs: [
          "Hafta sonu ve tatil yoğunluğu dinlenme niteliğini düşürebilir. Kalabalık iyileşme ortamı sayılmaz.",
          "Güneş ve sıcak birleşimi sıvı kaybını artırabilir. Bu, bütüncül planda konuşulur.",
        ],
      },
      {
        id: "kaynak",
        title: "Kaynak ve Teyit",
        paragraphs: [
          "Resmi kültür, turizm ve valilik anlatıları tanıtım iddiasından ayrılır. Kişi, tesis iddiasını resmi çerçeveyle süzebilir.",
          "Mineral analizleri pazarlama metni gibi okunmamalıdır.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı tesis reklamı veya şifa vaadi değildir.",
        ],
      },
    ],
    sources: [commonSources.kulturTermal, commonSources.yalovaValilik, commonSources.whoTm],
    faqs: [
      {
        question: "Termal su hastalık tedavi eder mi?",
        answer:
          "Tedavi garantisi yoktur. Konfor bağlamı ile tedavi iddiası ayrıdır.",
      },
      {
        question: "Herkes girebilir mi?",
        answer:
          "Hayır. Kalp, tansiyon, ateş, yara ve gebelikte hekime danışılmalıdır.",
      },
      {
        question: "GETAT ile aynı şey midir?",
        answer:
          "Değildir. Termal çevresel kaynaktır; GETAT hekim yetkisiyle konuşulur.",
      },
      {
        question: "Ne kadar kalınmalıdır?",
        answer:
          "Genel süre verilmez. Kişiye ve hekim önerisine göre değişir.",
      },
      {
        question: "Çocuklar girebilir mi?",
        answer:
          "Yaş, süre ve gözetim kişiye özeldir. Genel evet yoktur.",
      },
      {
        question: "Bu yazı tesis önerir mi?",
        answer:
          "Önermez. İşlev ve güvenlik anlatır.",
      },
    ],
  }),
  createCluster({
    slug: "yalovada-butuncul-saglik-adresleri",
    title: "Yalova'da Bütüncül Sağlık Adresleri",
    pillarSlug: "yalova-saglik",
    category: "yalova-saglik",
    description:
      "Yalova'da bütüncül yaklaşımı konuşan hekimlik ortamının ne olduğu, ne olmadığı ve kamu izlemiyle ilişkisi.",
    lastUpdated: "2026-10-06",
    keywords: ["bütüncül sağlık", "Yalova adres"],
    introduction: [
      "Bütüncül sağlık adresi, her kapıyı kapatan tek merkez değildir. Öyküyü dinleyen, yönlendiren ve uygunsa tamamlayıcı yaklaşımı sınırlarıyla konuşan ortamdır.",
      "Yalova Merkez'de Uzm. Dr. Yaşar Murat Çokay'ın değerlendirme ortamı bir seçenektir. Kişi ikinci görüş hakkını saklar.",
    ],
    sections: [
      {
        id: "anlam",
        title: "Adres Ne Anlama Gelir?",
        paragraphs: [
          "Adres, yol tarifi kadar niyet tarifidir. Bütüncül niyet; uyku, ağrı, ilaç ve yaşam düzenini birlikte okumaktır.",
          "GETAT veya estetik işlem, adresin zorunlu çıktısı değildir. Bazen çıktı yönlendirme ve beklemeyi öğrenmektir.",
        ],
      },
      {
        id: "kamu",
        title: "Kamu İzlemi Saklanır",
        paragraphs: [
          "Aile hekimi, poliklinik ve acil omurga durur. Bütüncül görüşme bu omurgayı ikame etmez.",
          "Diyabet, tansiyon veya bel fıtığında ilgili hekimlik alanı ertelenmez.",
        ],
      },
      {
        id: "secenek",
        title: "Tek Seçenek Değildir",
        paragraphs: [
          "Üstünlük dili kullanılmaz. Başka hekim ve kurumlar geçerlidir.",
          "Kişi, mahremiyet ve kayıt düzenini sorma hakkına sahiptir.",
        ],
      },
      {
        id: "randevu",
        title: "Randevu ve Yol",
        paragraphs: [
          "İlçeden gelişte işlem ve yol aynı güne yığılmayabilir. Sosyal olay öncesi acele talep güvenlikle çelişebilir.",
          "İletişim kanalları acil servis değildir. Zamana duyarlı tabloda 112 aranır.",
        ],
      },
      {
        id: "rehberler",
        title: "Hangi Rehbere Gidilir?",
        paragraphs: [
          "Semptom ve yaşam düzeni için bütüncül sağlık, yöntem için GETAT, yüz-cilt için medikal estetik rehberi okunur.",
          "Bu yazı yalnızca kent içi niyeti ve kapı seçimini netleştirir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı tek adres dayatması veya reklam sıralaması değildir.",
        ],
      },
    ],
    sources: [commonSources.yalovaValilik, commonSources.ttbEtik, commonSources.saglikGetat],
    faqs: [
      {
        question: "Bütüncül adres her şeyi tedavi eder mi?",
        answer:
          "Etmez. Yönlendirme ve sınırlı destek yaklaşımı söz konusudur.",
      },
      {
        question: "Kamu hastanesine gitmeme gerekir mi?",
        answer:
          "Gerekmez. Kamu izlemi saklanır ve çoğu durumda omurgadır.",
      },
      {
        question: "Randevu acil midir?",
        answer:
          "Değildir. Acilde 112 geçerlidir.",
      },
      {
        question: "Tek hekim zorunlu mudur?",
        answer:
          "Değildir. İkinci görüş hakkı saklıdır.",
      },
      {
        question: "İlçeden gelenler aynı gün işlem olur mu?",
        answer:
          "Her zaman değil. Yol ve tahammül plana dahildir.",
      },
      {
        question: "Bu yazı yönlendirme midir?",
        answer:
          "Bilgilendirmedir. Karar kişi ve hekim arasında kalır.",
      },
    ],
  }),
];
