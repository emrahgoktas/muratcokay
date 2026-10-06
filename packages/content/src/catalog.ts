export const brandColors = {
  primary: "#0F4C81",
  secondary: "#186A3D",
  accent: "#0A6B63",
  background: "#FFFFFF",
  surface: "#F8FAFC",
  text: "#1E293B",
  mutedText: "#334155",
} as const;

export const clinicAddress =
  "Fevzi Çakmak Mah. Bora Sk. No:17/A Merkez YALOVA" as const;

export const serviceCategories = {
  "medikal-estetik": "Medikal Estetik ve Cilt/Saç Sağlığı",
  "butuncul-saglik": "Bütüncül Sağlık ve GETAT",
} as const;

export const serviceCatalog = [
  {
    slug: "botoks",
    kategori: "medikal-estetik",
    baslik: "Botoks Uygulaması",
    kisaAciklama:
      "Botulinum toksini uygulamaları, hekim değerlendirmesiyle belirlenen alanlara yönelik planlanır. Uygulamanın kapsamı, sınırlılıkları ve olası etkileri kişiye göre ele alınır.",
    ikon: "Syringe",
    oneCikan: true,
  },
  {
    slug: "dolgu",
    kategori: "medikal-estetik",
    baslik: "Dolgu ile Yüzde Hacimlendirme",
    kisaAciklama:
      "Dolgu uygulamaları, yüz anatomisi ve kişisel gereksinimler değerlendirilerek planlanır. Kullanılacak yöntem ve materyal hakkında işlem öncesinde bilgilendirme yapılır.",
    ikon: "Sparkles",
    oneCikan: true,
  },
  {
    slug: "sivi-yuz-germe",
    kategori: "medikal-estetik",
    baslik: "Sıvı Yüz Germe",
    kisaAciklama:
      "Sıvı yüz germe yaklaşımı, cilt yapısı ve kişinin ihtiyaçları dikkate alınarak değerlendirilir. Uygulama planı hacim oluşturmadan sıkılaşma hedefi çerçevesinde kişiselleştirilir.",
    ikon: "Droplets",
    oneCikan: true,
  },
  {
    slug: "yuzde-matlik-kirisiklik-leke-tedavisi",
    kategori: "medikal-estetik",
    baslik: "Yüzde Matlık, Kırışıklık ve Leke Tedavisi",
    kisaAciklama:
      "Cilt tonu, kırışıklık ve leke görünümüne yönelik seçenekler dermatolojik değerlendirme çerçevesinde ele alınır. Yaklaşım, cilt tipi ve mevcut sağlık durumu dikkate alınarak planlanır.",
    ikon: "Sun",
    oneCikan: true,
  },
  {
    slug: "sac-dokulmesi-tedavisi",
    kategori: "medikal-estetik",
    baslik: "Saç Dökülmesi Tedavisi",
    kisaAciklama:
      "Saç dökülmesinin olası nedenleri sağlık geçmişi ve klinik bulgularla birlikte değerlendirilir. Uygun destek yaklaşımı, kişisel ihtiyaçlar ve tıbbi gereklilikler doğrultusunda planlanır.",
    ikon: "User",
    oneCikan: true,
  },
  {
    slug: "mezoterapi",
    kategori: "medikal-estetik",
    baslik: "Mezoterapi",
    kisaAciklama:
      "Mezoterapi uygulamasının içeriği ve yöntemi, uygulama bölgesi ile kişisel gereksinimlere göre değerlendirilir. Süreç, hekim muayenesi ve bilgilendirilmiş onam sonrasında planlanır.",
    ikon: "FlaskConical",
    oneCikan: false,
  },
  {
    slug: "lazer",
    kategori: "medikal-estetik",
    baslik: "Lazer Uygulamaları",
    kisaAciklama:
      "Lazer uygulamaları, cilt tipi ve ele alınan durumun özelliklerine göre planlanır. Yöntemin kapsamı ve işlem sonrası süreç hakkında kişiye özel bilgilendirme yapılır.",
    ikon: "Zap",
    oneCikan: false,
  },
  {
    slug: "ip-aski",
    kategori: "medikal-estetik",
    baslik: "İp Askı",
    kisaAciklama:
      "İp askı uygulaması, yüz anatomisi ve doku özellikleri değerlendirilerek ele alınır. Uygunluk, beklenen süreç ve sınırlılıklar hekim görüşmesinde açıklanır.",
    ikon: "ArrowUp",
    oneCikan: false,
  },
  {
    slug: "fibromiyalji",
    kategori: "butuncul-saglik",
    baslik: "Fibromiyalji Tedavisi",
    kisaAciklama:
      "Fibromiyaljiyle ilişkili yakınmalar, kişinin genel sağlık durumu ile birlikte bütüncül olarak değerlendirilir. Destek yaklaşımı tıbbi takip, yaşam biçimi ve kişisel ihtiyaçlar gözetilerek planlanır.",
    ikon: "Activity",
    oneCikan: true,
  },
  {
    slug: "kilo-verme-destegi",
    kategori: "butuncul-saglik",
    baslik: "Kilo Verme Desteği",
    kisaAciklama:
      "Kilo yönetimi; sağlık geçmişi, beslenme düzeni ve yaşam biçimi birlikte değerlendirilerek ele alınır. Destek planı sürdürülebilir alışkanlıklar ve düzenli tıbbi izlem odağında oluşturulur.",
    ikon: "Scale",
    oneCikan: true,
  },
  {
    slug: "kronik-yorgunluk-sendromu",
    kategori: "butuncul-saglik",
    baslik: "Kronik Yorgunluk Sendromu",
    kisaAciklama:
      "Uzun süren yorgunluk yakınmaları, olası tıbbi nedenler ve yaşam biçimi etkenleriyle birlikte değerlendirilir. Yaklaşım, kişisel bulgulara göre destekleyici bir yönetim planı oluşturmayı amaçlar.",
    ikon: "BatteryLow",
    oneCikan: true,
  },
  {
    slug: "bel-fitiklari-omurga-sagligi",
    kategori: "butuncul-saglik",
    baslik: "Bel Fıtıkları",
    kisaAciklama:
      "Bel ve omurga yakınmaları, klinik bulgular ve mevcut tetkiklerle birlikte değerlendirilir. Destekleyici yaklaşım, hareket kapasitesi ve genel sağlık durumu dikkate alınarak planlanır.",
    ikon: "Bone",
    oneCikan: false,
  },
  {
    slug: "diyabet-yonetimi-destegi",
    kategori: "butuncul-saglik",
    baslik: "Diyabet Yönetimi Desteği",
    kisaAciklama:
      "Diyabet yönetimi desteği, mevcut tıbbi tedavinin yerine geçmeden genel sağlık takibine katkı sunmayı amaçlar. Beslenme, hareket ve yaşam biçimi unsurları ilgili hekimlerin takibiyle birlikte ele alınır.",
    ikon: "Droplet",
    oneCikan: false,
  },
  {
    slug: "hipertansiyon-destegi",
    kategori: "butuncul-saglik",
    baslik: "Hipertansiyon Desteği",
    kisaAciklama:
      "Hipertansiyon desteği, mevcut tedavi planını değiştirmeden yaşam biçimi ve risk etkenlerinin değerlendirilmesine odaklanır. Tansiyon takibi ve destek yaklaşımı ilgili branş hekimiyle koordinasyon içinde ele alınır.",
    ikon: "HeartPulse",
    oneCikan: false,
  },
  {
    slug: "varis-tedavisi-destegi",
    kategori: "butuncul-saglik",
    baslik: "Varis Tedavisi Desteği",
    kisaAciklama:
      "Varis yakınmaları ve dolaşım bulguları, gerekli uzmanlık değerlendirmeleri dikkate alınarak ele alınır. Destek yaklaşımı kişinin sağlık durumu ve mevcut tedavi planıyla uyumlu biçimde planlanır.",
    ikon: "Waves",
    oneCikan: false,
  },
  {
    slug: "hemoroid-tedavisi-destegi",
    kategori: "butuncul-saglik",
    baslik: "Hemoroid Tedavisi Desteği",
    kisaAciklama:
      "Hemoroidle ilişkili yakınmaların değerlendirilmesinde öncelikle tıbbi muayene ve gerekli yönlendirmeler esas alınır. Destekleyici seçenekler kişinin mevcut tedavi planı ve genel sağlık durumuyla birlikte ele alınır.",
    ikon: "AlertCircle",
    oneCikan: false,
  },
  {
    slug: "hacamat",
    kategori: "butuncul-saglik",
    baslik: "Hacamat",
    kisaAciklama:
      "Kupa tedavisi, geleneksel ve tamamlayıcı tıp mevzuatındaki uygulama esasları çerçevesinde değerlendirilir. Uygunluk, sağlık geçmişi ve olası riskler hekim tarafından ele alınır.",
    ikon: "CircleDot",
    oneCikan: true,
  },
  {
    slug: "suluk-tedavisi",
    kategori: "butuncul-saglik",
    baslik: "Sülük Tedavisi",
    kisaAciklama:
      "Tıbbi sülük uygulaması, yetkili sağlık ortamında hekim değerlendirmesi sonrasında planlanır. Uygunluk ölçütleri, hijyen koşulları ve olası riskler süreç öncesinde açıklanır.",
    ikon: "Bug",
    oneCikan: false,
  },
  {
    slug: "akupunktur",
    kategori: "butuncul-saglik",
    baslik: "Akupunktur",
    kisaAciklama:
      "Akupunktur, kişinin sağlık durumu ve mevcut tedavileriyle birlikte değerlendirilen tamamlayıcı bir yaklaşımdır. Uygulama planı hekim muayenesi sonrasında kişisel gereksinimlere göre oluşturulur.",
    ikon: "Target",
    oneCikan: true,
  },
  {
    slug: "ozon-tedavisi",
    kategori: "butuncul-saglik",
    baslik: "Ozon Tedavisi",
    kisaAciklama:
      "Ozon uygulamaları, ilgili mevzuat ve tıbbi değerlendirme çerçevesinde ele alınır. Yöntem, uygunluk ve süreç hakkında hekim tarafından kişiye özel bilgilendirme yapılır.",
    ikon: "Wind",
    oneCikan: false,
  },
] as const;
