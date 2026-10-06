export type PostCategory = "estetik" | "butuncul-saglik";

export type BilimselKaynak = {
  baslik: string;
  yil: string;
  yayin: string;
  url: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: PostCategory;
  description: string;
  paragraphs: readonly string[];
  noindex?: boolean;
  canonical?: string;
  kaynaklar?: readonly BilimselKaynak[];
};

export const posts: readonly BlogPost[] = [
  {
    slug: "sivi-yuz-germe-nedir",
    title: "Sıvı Yüz Germe Nedir? Hacim Vermeden Sıkılaşma Nasıl Olur?",
    category: "estetik",
    description:
      "Sıvı yüz germe yaklaşımının kapsamı, değerlendirme ölçütleri ve hacim oluşturmadan sıkılaşma hedefi hakkında genel bilgiler.",
    paragraphs: [
      "Sıvı yüz germe, cilt yapısı ve yüz anatomisi birlikte değerlendirilerek planlanan medikal estetik yaklaşımlardan biridir. Kullanılacak yöntem, kişinin sağlık geçmişine ve cildin mevcut durumuna göre değişebilir.",
      "Hacim oluşturmadan sıkılaşma hedeflendiğinde yöntem seçimi dikkatle yapılır. Uygunluk, beklenen süreç, sınırlılıklar ve olası riskler hekim görüşmesinde ele alınmalıdır.",
    ],
    kaynaklar: [
      {
        baslik: "Hyaluronic acid: A key molecule in skin aging",
        yil: "2012",
        yayin: "Dermato-Endocrinology / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/23467280/",
      },
      {
        baslik: "Skin quality — a holistic 360° view",
        yil: "2021",
        yayin: "Clinical, Cosmetic and Investigational Dermatology / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/34262307/",
      },
      {
        baslik: "Aging skin",
        yil: "2024",
        yayin: "American Academy of Dermatology",
        url: "https://www.aad.org/public/diseases/a-z",
      },
    ],
  },
  {
    slug: "sac-dokulmesinde-mezoterapi-ve-prp",
    title: "Saç Dökülmesinde Mezoterapi ve PRP Yaklaşımları",
    category: "estetik",
    description:
      "Saç dökülmesinde mezoterapi ve PRP yaklaşımlarının değerlendirme süreci ve destekleyici kullanım alanları.",
    paragraphs: [
      "Saç dökülmesi farklı tıbbi ve çevresel nedenlerle ortaya çıkabilir. Mezoterapi ve PRP seçenekleri değerlendirilmeden önce dökülmenin olası nedenlerinin araştırılması önem taşır.",
      "Bu uygulamalar herkese aynı biçimde planlanmaz ve sonuçlar kişisel faktörlere göre değişebilir. Yöntem seçimi, saçlı deri muayenesi ve sağlık geçmişi dikkate alınarak yapılır.",
    ],
    kaynaklar: [
      {
        baslik: "Interventions for female pattern hair loss",
        yil: "2016",
        yayin: "Cochrane Database of Systematic Reviews",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD007628.pub4/full",
      },
      {
        baslik:
          "A review of platelet-rich plasma: history, biology, mechanism of action, and classification",
        yil: "2018",
        yayin: "Skin Appendage Disorders / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/29457014/",
      },
      {
        baslik: "Mesotherapy — The French connection",
        yil: "2010",
        yayin: "Journal of Pharmacology and Pharmacotherapeutics / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/21350616/",
      },
    ],
  },
  {
    slug: "yuzde-leke-ve-matlik-icin-bilimsel-yaklasimlar",
    title: "Yüzde Leke ve Matlık İçin Bilimsel Yaklaşımlar",
    category: "estetik",
    description:
      "Yüzde leke ve mat görünümün olası nedenleri ile bilimsel değerlendirme ve cilt yönetimi yaklaşımları.",
    paragraphs: [
      "Leke ve mat görünüm; güneş maruziyeti, cilt yapısı, yaş ve bazı sağlık durumlarıyla ilişkili olabilir. Bu nedenle yaklaşım belirlenmeden önce cilt tipi ve lekenin özellikleri değerlendirilir.",
      "Güneşten korunma, uygun cilt bakımı ve hekim tarafından planlanan uygulamalar yönetimin parçaları olabilir. Her yöntemin kapsamı, sınırlılıkları ve olası etkileri farklıdır.",
    ],
    kaynaklar: [
      {
        baslik: "Interventions for melasma",
        yil: "2010",
        yayin: "Cochrane Database of Systematic Reviews",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003583.pub2/full",
      },
      {
        baslik: "Melasma: diagnosis and treatment",
        yil: "2024",
        yayin: "American Academy of Dermatology",
        url: "https://www.aad.org/public/diseases/a-z/melasma-treatment",
      },
      {
        baslik: "Evidence and considerations in chemical peels",
        yil: "2010",
        yayin: "Journal of Clinical and Aesthetic Dermatology / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/20725554/",
      },
    ],
  },
  {
    slug: "dogal-gorunumlu-dolgu-uygulamalari",
    title: "Doğal Görünümlü Dolgu Uygulamaları",
    category: "estetik",
    description:
      "Dolgu uygulamalarında yüz anatomisi, ölçülü planlama ve doğal görünüm yaklaşımı hakkında genel bilgi.",
    paragraphs: [
      "Dolgu planlamasında yüzün anatomik yapısı, oranları ve zamanla gelişen değişiklikler birlikte ele alınır. Kullanılan materyal ve uygulama alanı kişisel değerlendirmeye göre belirlenir.",
      "Doğal görünüm hedefi, ölçülü ve anatomiyi gözeten bir yaklaşım gerektirir. Uygulama öncesinde alternatifler, sınırlılıklar ve olası riskler hakkında bilgi alınmalıdır.",
    ],
    kaynaklar: [
      {
        baslik: "Dermal Fillers (Soft Tissue Fillers)",
        yil: "2024",
        yayin: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers",
      },
      {
        baslik: "Hyaluronic acid fillers in facial rejuvenation",
        yil: "2007",
        yayin: "Plastic and Reconstructive Surgery / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/18090770/",
      },
      {
        baslik: "Dermal fillers",
        yil: "2024",
        yayin: "American Academy of Dermatology",
        url: "https://www.aad.org/public/cosmetic/injectables/fillers",
      },
    ],
  },
  {
    slug: "fibromiyalji-ile-yasam",
    title: "Fibromiyalji ile Yaşam: Bütüncül Yaklaşımın Rolü",
    category: "butuncul-saglik",
    description:
      "Fibromiyalji yönetiminde tıbbi takip, yaşam biçimi ve bütüncül destek yaklaşımlarının rolü.",
    paragraphs: [
      "Fibromiyalji; yaygın ağrı, yorgunluk, uyku ve konsantrasyon sorunlarıyla birlikte seyredebilir. Yönetim planı kişinin belirtileri, sağlık geçmişi ve günlük yaşam gereksinimleri dikkate alınarak oluşturulur.",
      "Hareket, uyku düzeni, stres yönetimi ve hekim tarafından uygun görülen tamamlayıcı yaklaşımlar destek planında değerlendirilebilir. Bu yaklaşımlar mevcut tıbbi takibin yerine geçmez.",
    ],
    kaynaklar: [
      {
        baslik: "EULAR revised recommendations for the management of fibromyalgia",
        yil: "2017",
        yayin: "Annals of the Rheumatic Diseases / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/27377815/",
      },
      {
        baslik:
          "Chronic pain (primary and secondary) in over 16s: assessment of all chronic pain and management of chronic primary pain",
        yil: "2021",
        yayin: "NICE NG193",
        url: "https://www.nice.org.uk/guidance/ng193",
      },
      {
        baslik: "Exercise for treating fibromyalgia syndrome",
        yil: "2017",
        yayin: "Cochrane Database of Systematic Reviews",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003786.pub3/full",
      },
    ],
  },
  {
    slug: "kronik-yorgunluk-sendromunda-akupunktur",
    title: "Kronik Yorgunluk Sendromunda Akupunkturun Yeri",
    category: "butuncul-saglik",
    description:
      "Kronik yorgunluk yakınmalarında akupunkturun tamamlayıcı yaklaşım olarak değerlendirilmesi.",
    paragraphs: [
      "Uzun süren yorgunluk yakınmalarında öncelikle altta yatan tıbbi nedenlerin araştırılması gerekir. Akupunktur, uygun bulunan kişilerde mevcut yönetim planına eşlik eden tamamlayıcı bir yaklaşım olarak ele alınabilir.",
      "Uygulama planı belirtilerin niteliğine, sağlık geçmişine ve kullanılan tedavilere göre değişir. Bilimsel kanıtların kapsamı ve yöntemin sınırlılıkları hekimle birlikte değerlendirilmelidir.",
    ],
    kaynaklar: [
      {
        baslik: "Acupuncture: What You Need To Know",
        yil: "2024",
        yayin: "National Center for Complementary and Integrative Health",
        url: "https://www.nccih.nih.gov/health/acupuncture-what-you-need-to-know",
      },
      {
        baslik: "Exercise therapy for chronic fatigue syndrome",
        yil: "2019",
        yayin: "Cochrane Database of Systematic Reviews / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/31577366/",
      },
      {
        baslik:
          "Myalgic encephalomyelitis (or encephalopathy)/chronic fatigue syndrome: diagnosis and management",
        yil: "2021",
        yayin: "NICE NG206",
        url: "https://www.nice.org.uk/guidance/ng206",
      },
    ],
  },
  {
    slug: "bel-fitiklarinda-getat-yaklasimlari",
    title: "Bel Fıtıklarında Geleneksel ve Tamamlayıcı Tıp Yaklaşımları",
    category: "butuncul-saglik",
    description:
      "Bel fıtığı ve omurga yakınmalarında GETAT seçeneklerinin destekleyici rolüne ilişkin genel bilgiler.",
    paragraphs: [
      "Bel ve bacak yakınmaları farklı nedenlerle gelişebileceği için tanı ve uzmanlık değerlendirmesi önceliklidir. Geleneksel ve tamamlayıcı yöntemler ancak mevcut bulgular ve tedavi planı dikkate alınarak değerlendirilir.",
      "Destek yaklaşımı hareket kapasitesi, ağrının özellikleri ve kişinin genel sağlık durumuna göre planlanabilir. Acil veya ilerleyici bulgularda gecikmeden ilgili uzmanlık alanına başvurulmalıdır.",
    ],
    kaynaklar: [
      {
        baslik: "Low back pain and sciatica in over 16s: assessment and management",
        yil: "2020",
        yayin: "NICE NG59",
        url: "https://www.nice.org.uk/guidance/ng59",
      },
      {
        baslik: "Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain",
        yil: "2017",
        yayin: "Annals of Internal Medicine / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/28192789/",
      },
      {
        baslik: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
        yil: "2014",
        yayin: "T.C. Sağlık Bakanlığı",
        url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
      },
    ],
  },
  {
    slug: "diyabet-ve-hipertansiyonda-butuncul-destek",
    title: "Diyabet ve Hipertansiyonda Bütüncül Destek",
    noindex: true,
    canonical: "/yazilar/diyabet-hipertansiyon-butuncul-destek/",
    category: "butuncul-saglik",
    description:
      "Diyabet ve hipertansiyon yönetiminde yaşam biçimi, düzenli takip ve bütüncül destek yaklaşımı.",
    paragraphs: [
      "Diyabet ve hipertansiyon düzenli tıbbi takip gerektiren kronik durumlardır. Beslenme, hareket, uyku ve stres yönetimi mevcut tedavi planını destekleyen temel başlıklar arasında yer alabilir.",
      "Tamamlayıcı yaklaşımlar reçeteli ilaçların veya branş takibinin yerine kullanılmamalıdır. Her değişiklik ilgili hekimlerin bilgisi ve koordinasyonu ile ele alınmalıdır.",
    ],
    kaynaklar: [
      {
        baslik: "Diabetes",
        yil: "2024",
        yayin: "World Health Organization",
        url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
      },
      {
        baslik: "Hypertension in adults: diagnosis and management",
        yil: "2023",
        yayin: "NICE NG136",
        url: "https://www.nice.org.uk/guidance/ng136",
      },
      {
        baslik: "Type 2 diabetes in adults: management",
        yil: "2022",
        yayin: "NICE NG28",
        url: "https://www.nice.org.uk/guidance/ng28",
      },
    ],
  },
  {
    slug: "varis-hemoroid-suluk-tedavisi-bilimsel-perspektif",
    title: "Varis ve Hemoroid İçin Sülük Tedavisi: Bilimsel Perspektif",
    category: "butuncul-saglik",
    description:
      "Varis ve hemoroid yakınmalarında tıbbi sülük uygulamasına ilişkin kanıtlar, sınırlar ve güvenlik değerlendirmesi.",
    paragraphs: [
      "Varis ve hemoroid farklı uzmanlık değerlendirmeleri gerektirebilen sağlık sorunlarıdır. Tıbbi sülük uygulaması düşünülmeden önce tanının, dolaşım durumunun ve kanama risklerinin değerlendirilmesi gerekir.",
      "Bu yaklaşım her kişi veya durum için uygun değildir ve mevcut tedavilerin yerine geçmez. Uygulamanın yalnızca yetkili sağlık ortamında, hekim kararıyla ve hijyen standartları gözetilerek ele alınması gerekir.",
    ],
    kaynaklar: [
      {
        baslik: "Medicinal leech therapy — an overall perspective",
        yil: "2017",
        yayin: "Integrative Medicine Research / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/29296564/",
      },
      {
        baslik: "Chronic venous insufficiency",
        yil: "2014",
        yayin: "Circulation / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/25002743/",
      },
      {
        baslik:
          "The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Hemorrhoids",
        yil: "2018",
        yayin: "Diseases of the Colon & Rectum / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/29521841/",
      },
    ],
  },
  {
    slug: "kilo-verme-surecinde-ozon-ve-hacamat-destegi",
    title: "Kilo Verme Sürecinde Ozon ve Hacamat Desteği",
    category: "butuncul-saglik",
    description:
      "Kilo yönetiminde ozon ve hacamat uygulamalarının destekleyici rolü, sınırlılıkları ve değerlendirme gereklilikleri.",
    paragraphs: [
      "Kilo yönetiminin temeli sürdürülebilir beslenme, hareket, uyku düzeni ve gerekli tıbbi takiptir. Ozon veya hacamat gibi uygulamalar tek başına kilo kaybı yöntemi olarak değerlendirilmemelidir.",
      "Tamamlayıcı bir uygulamanın ele alınması halinde kişinin sağlık geçmişi, mevcut hastalıkları ve kullandığı ilaçlar incelenir. Bilimsel kanıtların sınırları ve olası riskler açık biçimde konuşulmalıdır.",
    ],
    kaynaklar: [
      {
        baslik: "Obesity and overweight",
        yil: "2024",
        yayin: "World Health Organization",
        url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
      },
      {
        baslik: "Ozone therapy: A clinical review",
        yil: "2011",
        yayin: "Journal of Natural Science, Biology and Medicine / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/22470237/",
      },
      {
        baslik: "An updated review of the efficacy of cupping therapy",
        yil: "2012",
        yayin: "PLOS ONE / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/22389674/",
      },
    ],
  },
  {
    slug: "yalovada-butuncul-saglik-turizmi",
    title: "Yalova'da Bütüncül Sağlık Turizmi Neden Yükseliyor?",
    category: "butuncul-saglik",
    description:
      "Yalova'nın erişilebilirliği ve sağlık altyapısı bağlamında bütüncül sağlık turizmine genel bir bakış.",
    paragraphs: [
      "Yalova; İstanbul, Bursa ve Kocaeli'ye yakınlığı sayesinde sağlık hizmetlerine erişim açısından dikkat çeken bir konumdadır. Bütüncül sağlık alanındaki ilgi, bilgilendirme ve güvenli hizmet beklentisini de artırmaktadır.",
      "Sağlık turizmi kapsamında kurum yetkileri, hekim nitelikleri ve mevzuata uygunluk dikkatle incelenmelidir. Seyahat kararı belirli bir sonuç vaadine değil, güvenilir bilgi ve kişisel tıbbi değerlendirmeye dayanmalıdır.",
    ],
    kaynaklar: [
      {
        baslik: "Traditional, Complementary and Integrative Medicine",
        yil: "2024",
        yayin: "World Health Organization",
        url: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
      },
      {
        baslik: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
        yil: "2014",
        yayin: "T.C. Sağlık Bakanlığı",
        url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        baslik: "Hekimlik Meslek Etiği Kuralları",
        yil: "2012",
        yayin: "Türk Tabipleri Birliği",
        url: "https://www.ttb.org.tr/kollar/hukuk/mevzuat",
      },
    ],
  },
  {
    slug: "hacamat-nedir-bilimsel-perspektif",
    title: "Hacamat Nedir? Bilimsel Perspektif",
    category: "butuncul-saglik",
    description:
      "Hacamat uygulamasının yöntemi, bilimsel kanıtların kapsamı, uygunluk ve güvenlik değerlendirmesi.",
    paragraphs: [
      "Hacamat, kupa uygulamasının belirli koşullarda yüzeysel kesilerle birlikte gerçekleştirilen biçimidir. Türkiye'de uygulama yetkili sağlık ortamı, eğitimli hekim ve ilgili GETAT mevzuatı çerçevesinde ele alınır.",
      "Bilimsel çalışmaların sonuçları uygulama alanına göre farklılık gösterebilir ve kesin sonuç vaadi oluşturmaz. Uygunluk, kanama riski, kullanılan ilaçlar ve genel sağlık durumu hekim tarafından değerlendirilmelidir.",
    ],
    kaynaklar: [
      {
        baslik: "Cupping",
        yil: "2024",
        yayin: "National Center for Complementary and Integrative Health",
        url: "https://www.nccih.nih.gov/health/cupping",
      },
      {
        baslik: "An updated review of the efficacy of cupping therapy",
        yil: "2012",
        yayin: "PLOS ONE / PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/22389674/",
      },
      {
        baslik: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
        yil: "2014",
        yayin: "T.C. Sağlık Bakanlığı",
        url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
      },
    ],
  },
] as const;
