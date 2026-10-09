import {
  brandColors,
  clinicAddress,
  serviceCatalog,
  serviceCategories,
} from "@muratcokay/content";

export {
  brandColors,
  clinicAddress,
  serviceCatalog,
  serviceCategories,
};


type ServiceSlug = (typeof serviceCatalog)[number]["slug"];

export type BilimselKaynak = {
  baslik: string;
  yil: string;
  yayin: string;
  url: string;
};

export const kaynaklar: Record<ServiceSlug, readonly BilimselKaynak[]> = {
  botoks: [
    {
      baslik:
        "A multicenter, double-blind, randomized, placebo-controlled study of botulinum toxin type A for glabellar lines",
      yil: "2002",
      yayin: "Journal of the American Academy of Dermatology / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/12063483/",
    },
    {
      baslik:
        "Global Aesthetics Consensus: Botulinum Toxin Type A — evidence-based review",
      yil: "2016",
      yayin: "Plastic and Reconstructive Surgery / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/26910686/",
    },
    {
      baslik: "Botulinum toxin",
      yil: "2024",
      yayin: "American Academy of Dermatology",
      url: "https://www.aad.org/public/cosmetic/injectables/botulinum-toxin",
    },
  ],
  dolgu: [
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
  "sivi-yuz-germe": [
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
  "yuzde-matlik-kirisiklik-leke-tedavisi": [
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
  "sac-dokulmesi-tedavisi": [
    {
      baslik: "Interventions for female pattern hair loss",
      yil: "2016",
      yayin: "Cochrane Database of Systematic Reviews",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD007628.pub4/full",
    },
    {
      baslik: "Hair loss",
      yil: "2024",
      yayin: "American Academy of Dermatology",
      url: "https://www.aad.org/public/diseases/hair-loss",
    },
    {
      baslik: "A review of platelet-rich plasma: history, biology, mechanism of action, and classification",
      yil: "2018",
      yayin: "Skin Appendage Disorders / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29457014/",
    },
  ],
  mezoterapi: [
    {
      baslik: "Mesotherapy — The French connection",
      yil: "2010",
      yayin: "Journal of Pharmacology and Pharmacotherapeutics / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/21350616/",
    },
    {
      baslik: "Hair loss: diagnosis and treatment overview",
      yil: "2024",
      yayin: "American Academy of Dermatology",
      url: "https://www.aad.org/public/diseases/hair-loss",
    },
    {
      baslik: "Hekimlik Meslek Etiği Kuralları",
      yil: "2012",
      yayin: "Türk Tabipleri Birliği",
      url: "https://www.ttb.org.tr/kollar/hukuk/mevzuat",
    },
  ],
  lazer: [
    {
      baslik: "Selective photothermolysis: precise microsurgery by selective absorption of pulsed radiation",
      yil: "1983",
      yayin: "Science / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/6836297/",
    },
    {
      baslik: "Laser treatment overview",
      yil: "2024",
      yayin: "American Academy of Dermatology",
      url: "https://www.aad.org/public/cosmetic/younger-looking/lasers-lights-overview",
    },
    {
      baslik: "Laser and light-based treatments in dermatology",
      yil: "2013",
      yayin: "Seminars in Cutaneous Medicine and Surgery / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/24175401/",
    },
  ],
  "ip-aski": [
    {
      baslik: "Thread-lift sutures: still in the lift? A systematic review",
      yil: "2018",
      yayin: "Plastic and Reconstructive Surgery / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29369995/",
    },
    {
      baslik: "Absorbable thread lifting: evidence and limitations",
      yil: "2019",
      yayin: "Journal of Cosmetic Dermatology / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/30588757/",
    },
    {
      baslik: "Hekimlik Meslek Etiği Kuralları",
      yil: "2012",
      yayin: "Türk Tabipleri Birliği",
      url: "https://www.ttb.org.tr/kollar/hukuk/mevzuat",
    },
  ],
  fibromiyalji: [
    {
      baslik: "EULAR revised recommendations for the management of fibromyalgia",
      yil: "2017",
      yayin: "Annals of the Rheumatic Diseases / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/27377815/",
    },
    {
      baslik: "Chronic pain (primary and secondary) in over 16s: assessment of all chronic pain and management of chronic primary pain",
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
  "kilo-verme-destegi": [
    {
      baslik: "Obesity and overweight",
      yil: "2024",
      yayin: "World Health Organization",
      url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
    },
    {
      baslik: "Obesity: identification, assessment and management",
      yil: "2023",
      yayin: "NICE CG189",
      url: "https://www.nice.org.uk/guidance/cg189",
    },
    {
      baslik: "Exercise for overweight or obesity",
      yil: "2006",
      yayin: "Cochrane Database of Systematic Reviews",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003817.pub3/full",
    },
  ],
  "kronik-yorgunluk-sendromu": [
    {
      baslik: "Myalgic encephalomyelitis/chronic fatigue syndrome (ME/CFS)",
      yil: "2024",
      yayin: "Centers for Disease Control and Prevention",
      url: "https://www.cdc.gov/me-cfs/",
    },
    {
      baslik: "Exercise therapy for chronic fatigue syndrome",
      yil: "2019",
      yayin: "Cochrane Database of Systematic Reviews / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/31577366/",
    },
    {
      baslik: "Myalgic encephalomyelitis (or encephalopathy)/chronic fatigue syndrome: diagnosis and management",
      yil: "2021",
      yayin: "NICE NG206",
      url: "https://www.nice.org.uk/guidance/ng206",
    },
  ],
  "bel-fitiklari-omurga-sagligi": [
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
      baslik: "Traction for low-back pain with or without sciatica",
      yil: "2013",
      yayin: "Cochrane Database of Systematic Reviews",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003010.pub5/full",
    },
  ],
  "diyabet-yonetimi-destegi": [
    {
      baslik: "Diabetes",
      yil: "2024",
      yayin: "World Health Organization",
      url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
    },
    {
      baslik: "Type 2 diabetes in adults: management",
      yil: "2022",
      yayin: "NICE NG28",
      url: "https://www.nice.org.uk/guidance/ng28",
    },
    {
      baslik: "Diabetes management",
      yil: "2024",
      yayin: "Centers for Disease Control and Prevention",
      url: "https://www.cdc.gov/diabetes/treatment/index.html",
    },
  ],
  "hipertansiyon-destegi": [
    {
      baslik: "Hypertension in adults: diagnosis and management",
      yil: "2023",
      yayin: "NICE NG136",
      url: "https://www.nice.org.uk/guidance/ng136",
    },
    {
      baslik: "2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure",
      yil: "2018",
      yayin: "Hypertension / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29133356/",
    },
    {
      baslik: "Hypertension",
      yil: "2023",
      yayin: "World Health Organization",
      url: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
    },
  ],
  "varis-tedavisi-destegi": [
    {
      baslik: "Varicose veins: diagnosis and management",
      yil: "2013",
      yayin: "NICE CG168",
      url: "https://www.nice.org.uk/guidance/cg168",
    },
    {
      baslik: "Chronic venous insufficiency",
      yil: "2014",
      yayin: "Circulation / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/25002743/",
    },
    {
      baslik: "Compression for venous leg ulcers",
      yil: "2012",
      yayin: "Cochrane Database of Systematic Reviews",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000265.pub3/full",
    },
  ],
  "hemoroid-tedavisi-destegi": [
    {
      baslik:
        "The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Hemorrhoids",
      yil: "2018",
      yayin: "Diseases of the Colon & Rectum / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29521841/",
    },
    {
      baslik: "Rubber band ligation versus excisional haemorrhoidectomy for haemorrhoids",
      yil: "2015",
      yayin: "Cochrane Database of Systematic Reviews",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005034.pub2/full",
    },
    {
      baslik: "Haemorrhoids: diagnosis and management overview",
      yil: "2021",
      yayin: "NICE Clinical Knowledge Summaries",
      url: "https://cks.nice.org.uk/topics/haemorrhoids/",
    },
  ],
  hacamat: [
    {
      baslik: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
      yil: "2014",
      yayin: "T.C. Sağlık Bakanlığı",
      url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
    },
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
  ],
  "suluk-tedavisi": [
    {
      baslik: "Medicinal leech therapy — an overall perspective",
      yil: "2017",
      yayin: "Integrative Medicine Research / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29296564/",
    },
    {
      baslik: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
      yil: "2014",
      yayin: "T.C. Sağlık Bakanlığı",
      url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
    },
    {
      baslik: "Hirudotherapy: a systematic review",
      yil: "2014",
      yayin: "Journal of Postgraduate Medicine / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/25370551/",
    },
  ],
  akupunktur: [
    {
      baslik: "Acupuncture for chronic pain: individual patient data meta-analysis",
      yil: "2012",
      yayin: "Archives of Internal Medicine / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/22965186/",
    },
    {
      baslik: "Acupuncture: What You Need To Know",
      yil: "2024",
      yayin: "National Center for Complementary and Integrative Health",
      url: "https://www.nccih.nih.gov/health/acupuncture-what-you-need-to-know",
    },
    {
      baslik: "Acupuncture for chronic pain",
      yil: "2018",
      yayin: "Journal of Pain / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/29198932/",
    },
  ],
  "ozon-tedavisi": [
    {
      baslik: "Ozone therapy: A clinical review",
      yil: "2011",
      yayin: "Journal of Natural Science, Biology and Medicine / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/22470237/",
    },
    {
      baslik: "Geleneksel ve Tamamlayıcı Tıp Uygulamaları Yönetmeliği",
      yil: "2014",
      yayin: "T.C. Sağlık Bakanlığı",
      url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20995&MevzuatTur=7&MevzuatTertip=5",
    },
    {
      baslik: "Ozone therapy: an overview of pharmacodynamics, current research, and clinical utility",
      yil: "2017",
      yayin: "Medical Gas Research / PubMed",
      url: "https://pubmed.ncbi.nlm.nih.gov/28744342/",
    },
  ],
};

export const serviceSituations: Record<ServiceSlug, readonly string[]> = {
  botoks: [
    "Mimik hareketlerine bağlı çizgilerin değerlendirilmesi",
    "Alın ve kaş arası bölgesindeki görünüm değişiklikleri",
    "Göz çevresindeki mimik çizgileri",
    "Yüz kaslarının hareket yapısının değerlendirilmesi",
  ],
  dolgu: [
    "Yüzde zamanla gelişen hacim değişiklikleri",
    "Yüz hatları ve kontur değerlendirmesi",
    "Asimetri görünümünün hekim tarafından incelenmesi",
    "Belirginleşen yüz kıvrımlarının değerlendirilmesi",
  ],
  "sivi-yuz-germe": [
    "Cilt elastikiyetindeki değişiklikler",
    "Yüz ovalinde gevşeme görünümü",
    "Cilt sıkılığının değerlendirilmesi",
    "Hacim artışı istenmeden planlanan destek yaklaşımları",
  ],
  "yuzde-matlik-kirisiklik-leke-tedavisi": [
    "Cilt tonu eşitsizliği ve mat görünüm",
    "İnce çizgi ve kırışıklık görünümü",
    "Cilt lekelerinin nedenlerinin değerlendirilmesi",
    "Cilt dokusu ve nem dengesindeki değişiklikler",
  ],
  "sac-dokulmesi-tedavisi": [
    "Saç dökülmesinde artış fark edilmesi",
    "Saç tellerinde incelme ve yoğunluk değişikliği",
    "Saçlı deri sağlığının değerlendirilmesi",
    "Dökülmeye eşlik edebilecek tıbbi nedenlerin araştırılması",
  ],
  mezoterapi: [
    "Cilt kalitesi ve nem dengesinin değerlendirilmesi",
    "Saçlı deriye yönelik destek planlaması",
    "Uygulama bölgesine özgü ihtiyaçların belirlenmesi",
    "Tamamlayıcı bakım seçeneklerinin değerlendirilmesi",
  ],
  lazer: [
    "Cilt tipi ve uygulama alanının değerlendirilmesi",
    "Leke ve ton farklılıklarının incelenmesi",
    "Cilt dokusuna yönelik uygulama seçenekleri",
    "Kişiye özgü lazer yöntemi planlaması",
  ],
  "ip-aski": [
    "Yüz ovalindeki değişikliklerin değerlendirilmesi",
    "Doku gevşekliği görünümü",
    "Yüz anatomisine uygun yaklaşım planlaması",
    "Cerrahi olmayan seçenekler hakkında bilgilendirme",
  ],
  fibromiyalji: [
    "Yaygın kas ve eklem ağrıları",
    "Kronik yorgunluk ve uyku bozuklukları",
    "Konsantrasyon güçlüğü",
    "Sabah tutukluğu",
  ],
  "kilo-verme-destegi": [
    "Kilo yönetiminde sürdürülebilir plan ihtiyacı",
    "Beslenme ve hareket alışkanlıklarının değerlendirilmesi",
    "Kilo değişimini etkileyebilecek sağlık durumları",
    "Düzenli tıbbi izlem gereksinimi",
  ],
  "kronik-yorgunluk-sendromu": [
    "Uzun süren ve dinlenmeyle geçmeyen yorgunluk",
    "Uyku düzeni ve kalitesindeki bozukluklar",
    "Dikkat ve konsantrasyon güçlüğü",
    "Yorgunluğa eşlik eden genel yakınmalar",
  ],
  "bel-fitiklari-omurga-sagligi": [
    "Bel ve sırt bölgesindeki uzun süreli yakınmalar",
    "Hareket kapasitesindeki değişiklikler",
    "Omurga sağlığını etkileyen yaşam biçimi unsurları",
    "Mevcut tetkiklerle birlikte destek yaklaşımı planlaması",
  ],
  "diyabet-yonetimi-destegi": [
    "Mevcut diyabet takibine destek gereksinimi",
    "Beslenme ve hareket düzeninin değerlendirilmesi",
    "Kan şekeri takibini etkileyen yaşam biçimi unsurları",
    "İlgili branşlarla koordineli izlem ihtiyacı",
  ],
  "hipertansiyon-destegi": [
    "Tansiyon takibinde yaşam biçimi desteği ihtiyacı",
    "Beslenme, hareket ve stres etkenlerinin değerlendirilmesi",
    "Kalp ve damar risklerinin genel olarak ele alınması",
    "Mevcut hekim takibiyle koordinasyon gereksinimi",
  ],
  "varis-tedavisi-destegi": [
    "Bacaklarda ağırlık ve rahatsızlık hissi",
    "Yüzeyel damar görünümündeki değişiklikler",
    "Dolaşım bulgularının uzmanlık değerlendirmesi",
    "Mevcut tedaviye eşlik edecek destek planlaması",
  ],
  "hemoroid-tedavisi-destegi": [
    "Hemoroidle ilişkili yakınmaların değerlendirilmesi",
    "Bağırsak alışkanlıkları ve yaşam biçimi etkenleri",
    "Uzmanlık muayenesi gerektiren bulguların ayrıştırılması",
    "Mevcut tedaviye eşlik edecek destek seçenekleri",
  ],
  hacamat: [
    "Kupa uygulamasına uygunluğun değerlendirilmesi",
    "Sağlık geçmişi ve kullanılan ilaçların incelenmesi",
    "Uygulamaya engel oluşturabilecek durumların belirlenmesi",
    "GETAT kapsamında destek yaklaşımı planlaması",
  ],
  "suluk-tedavisi": [
    "Tıbbi sülük uygulamasına uygunluğun değerlendirilmesi",
    "Dolaşım ve doku bulgularının hekim tarafından incelenmesi",
    "Kanama riskini etkileyebilecek durumların belirlenmesi",
    "GETAT mevzuatına uygun uygulama planlaması",
  ],
  akupunktur: [
    "Tamamlayıcı yaklaşım gerektiren yakınmaların değerlendirilmesi",
    "Ağrı yönetimine destek seçeneklerinin ele alınması",
    "Uyku ve stresle ilişkili yakınmaların incelenmesi",
    "Mevcut tedavilere eşlik edecek planlama",
  ],
  "ozon-tedavisi": [
    "Ozon uygulamasına uygunluğun hekim tarafından değerlendirilmesi",
    "Genel sağlık durumu ve mevcut tedavilerin incelenmesi",
    "Uygulama yönteminin tıbbi gerekliliklere göre belirlenmesi",
    "GETAT kapsamında destek yaklaşımı planlaması",
  ],
};

export const serviceBlogLinks: Record<
  ServiceSlug,
  { url: string; anchor: string }
> = {
  botoks: {
    url: "https://yalovamedikalestetik.com.tr/yazilar/dogal-gorunumlu-dolgu-uygulamalari/",
    anchor: "Yalova'da doğal görünümlü medikal estetik yaklaşımları",
  },
  dolgu: {
    url: "https://yalovamedikalestetik.com.tr/yazilar/dogal-gorunumlu-dolgu-uygulamalari/",
    anchor: "Yalova doğal görünümlü dolgu uygulamaları rehberi",
  },
  "sivi-yuz-germe": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/sivi-yuz-germe-nedir/",
    anchor: "Yalova sıvı yüz germe yaklaşımı rehberi",
  },
  "yuzde-matlik-kirisiklik-leke-tedavisi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/yuzde-leke-ve-matlik-icin-bilimsel-yaklasimlar/",
    anchor: "Yalova cilt lekesi ve matlık için bilimsel yaklaşımlar",
  },
  "sac-dokulmesi-tedavisi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/sac-dokulmesinde-mezoterapi-ve-prp/",
    anchor: "Yalova saç dökülmesinde mezoterapi ve PRP rehberi",
  },
  mezoterapi: {
    url: "https://yalovamedikalestetik.com.tr/yazilar/sac-dokulmesinde-mezoterapi-ve-prp/",
    anchor: "Yalova mezoterapi ve PRP yaklaşımları",
  },
  lazer: {
    url: "https://yalovamedikalestetik.com.tr/yazilar/yuzde-leke-ve-matlik-icin-bilimsel-yaklasimlar/",
    anchor: "Yalova leke ve matlık için bilimsel cilt rehberi",
  },
  "ip-aski": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/sivi-yuz-germe-nedir/",
    anchor: "Yalova yüz sıkılaştırma yaklaşımları rehberi",
  },
  fibromiyalji: {
    url: "https://yalovamedikalestetik.com.tr/yazilar/fibromiyalji-ile-yasam/",
    anchor: "Yalova fibromiyalji bütüncül yaklaşım rehberi",
  },
  "kilo-verme-destegi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/kilo-verme-surecinde-ozon-ve-hacamat-destegi/",
    anchor: "Yalova kilo yönetiminde bütüncül destek rehberi",
  },
  "kronik-yorgunluk-sendromu": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/kronik-yorgunluk-sendromunda-akupunktur/",
    anchor: "Yalova kronik yorgunluk ve akupunktur rehberi",
  },
  "bel-fitiklari-omurga-sagligi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/bel-fitiklarinda-getat-yaklasimlari/",
    anchor: "Yalova bel fıtıklarında GETAT yaklaşımları",
  },
  "diyabet-yonetimi-destegi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/diyabet-hipertansiyon-butuncul-destek/",
    anchor: "Yalova diyabet yönetiminde bütüncül destek rehberi",
  },
  "hipertansiyon-destegi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/diyabet-hipertansiyon-butuncul-destek/",
    anchor: "Yalova hipertansiyon yönetiminde bütüncül destek",
  },
  "varis-tedavisi-destegi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/varis-hemoroid-suluk-tedavisi-bilimsel-perspektif/",
    anchor: "Yalova varis desteği ve sülük uygulaması rehberi",
  },
  "hemoroid-tedavisi-destegi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/varis-hemoroid-suluk-tedavisi-bilimsel-perspektif/",
    anchor: "Yalova hemoroid desteği için bilimsel perspektif",
  },
  hacamat: {
    url: "https://yalovamedikalestetik.com.tr/yazilar/hacamat-nedir-bilimsel-perspektif/",
    anchor: "Yalova hacamat hakkında bilimsel rehber",
  },
  "suluk-tedavisi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/varis-hemoroid-suluk-tedavisi-bilimsel-perspektif/",
    anchor: "Yalova tıbbi sülük uygulaması bilimsel rehberi",
  },
  akupunktur: {
    url: "https://yalovamedikalestetik.com.tr/yazilar/kronik-yorgunluk-sendromunda-akupunktur/",
    anchor: "Yalova akupunktur ve kronik yorgunluk rehberi",
  },
  "ozon-tedavisi": {
    url: "https://yalovamedikalestetik.com.tr/yazilar/kilo-verme-surecinde-ozon-ve-hacamat-destegi/",
    anchor: "Yalova ozon ve bütüncül destek yaklaşımları",
  },
};

export const serviceDetailTemplate = {
  breadcrumbs: {
    home: "Ana Sayfa",
    services: "Hizmetler",
  },
  introSuffix:
    "Uygunluk ve uygulama planı, kişinin sağlık durumu değerlendirildikten sonra hekim tarafından belirlenir.",
  whatIsTitle: "Bu Yaklaşım Nedir?",
  whatIsTemplate:
    "{service}, kişinin sağlık geçmişi, mevcut bulguları ve ihtiyaçları birlikte değerlendirilerek ele alınan bir yaklaşımdır. Süreç; bilgilendirme, uygunluk değerlendirmesi ve gerekli tıbbi izlem adımlarını içerir. Buradaki açıklamalar genel bilgi niteliğindedir.",
  situationsTitle: "Hangi Durumlarda Değerlendirilir?",
  situationsNote:
    "Aşağıdaki maddeler genel bilgilendirme amaçlıdır ve kişiye özel uygunluk anlamına gelmez:",
  relatedTitle: "Tedaviye Eşlik Eden Yaklaşımlar",
  blogLabel: "Yerel rehber",
  blogGuideLabel: "Bilgi yazısı",
  faqTitle: "Sık Sorulan Sorular",
  faqs: [
    {
      question: "Acı verir mi?",
      answer:
        "{service} sırasında hissedilen duyum, kullanılan yönteme ve kişisel hassasiyete göre değişebilir. Süreç öncesinde konforu etkileyen unsurlar hakkında bilgi verilir.",
    },
    {
      question: "Kaç seans sürer?",
      answer:
        "{service} için sabit bir seans sayısı bulunmaz. Planlama; değerlendirme bulguları, yöntem ve kişisel gereksinimlere göre yapılır.",
    },
    {
      question: "Günlük hayata dönüş ne zaman?",
      answer:
        "{service} sonrasında günlük yaşama dönüş süresi yönteme ve kişisel faktörlere göre farklılık gösterebilir. Uygulamaya özgü bilgiler hekim tarafından paylaşılır.",
    },
    {
      question: "Kimler için uygun değildir?",
      answer:
        "{service}; bazı sağlık durumlarında, kullanılan ilaçlara veya kişisel risklere bağlı olarak uygun olmayabilir. Kesin uygunluk ancak hekim değerlendirmesiyle belirlenebilir.",
    },
    {
      question: "Yan etkileri neler olabilir?",
      answer:
        "{service} ile ilişkili olası etkiler ve riskler kullanılan yönteme göre değişir. Kişiye ilişkin riskler işlem veya destek planı öncesinde açıklanır.",
    },
    {
      question: "Diğer tedavilerle birlikte uygulanabilir mi?",
      answer:
        "{service} ile diğer tedavilerin birlikte değerlendirilmesi mevcut sağlık durumu ve tedavi planına bağlıdır. İlgili hekimlerin bilgisi olmadan mevcut tedaviler değiştirilmemelidir.",
    },
  ],
  sourcesTitle: "Bilimsel Dayanak",
  sourcesNote:
    "Aşağıdaki kayıtlar genel bilimsel ve resmî çerçeve sunar; kişiye özel uygunluk, tanı veya sonuç anlamına gelmez.",
  warning:
    "Bu sayfa bilgilendirme amaçlıdır. Tıbbi tavsiye yerine geçmez. Tedavi kararı hekiminizle birlikte alınmalıdır.",
  cta: {
    title: "Bu konuda bilgi almak için randevu oluşturun.",
    description:
      "Genel bilgi ve hekim değerlendirmesi için kliniğimizle iletişime geçebilirsiniz.",
  },
} as const;

export const locationCatalog = [
  {
    slug: "yalova-merkez",
    name: "Yalova Merkez",
    locativeName: "Yalova Merkez'de",
    fromName: "Yalova Merkez'den",
    summary:
      "Merkez içinden kliniğe kısa mesafede ulaşım ve şehir içi seçenekler hakkında bilgi.",
    introduction:
      "Fevzi Çakmak Mah. Bora Sk. No:17/A Merkez YALOVA adresindeki kliniğimiz, Yalova Merkez'de medikal estetik ve bütüncül sağlık alanlarında genel bilgilendirme ve hekim değerlendirmesi sunar. Randevu planı kişinin sağlık geçmişi ve ihtiyaçları ele alındıktan sonra oluşturulur.",
    access:
      "Merkezde yaşayanlar için klinik, şehir içi ana ulaşım noktalarından Bora Sk. yönüne ilerlenerek erişilebilecek konumdadır. Kısa mesafe, randevu öncesi ve sonrası ulaşım planını kolaylaştırır.",
    transport:
      "Merkez içi otobüs, minibüs ve taksi seçenekleri kullanılabilir; yürüyüş mesafesi çıkış noktasına göre değişir.",
    parking:
      "Bora Sk. ve yakın çevresindeki park koşulları günün saatine göre değişebilir. Araçla gelecek kişilerin güncel otopark bilgisi için randevu öncesinde iletişim kurması önerilir.",
    travelTime: "Yalova Merkez içinden yaklaşık 5–10 dakika",
    travelNote:
      "Tahmini süre başlangıç noktasına ve merkez trafiğine göre değişebilir.",
    popularServiceSlugs: ["botoks", "dolgu", "hacamat", "akupunktur"],
    faqAnswer:
      "Yalova Merkez'den randevu almak için telefon veya WhatsApp üzerinden kliniğe ulaşabilirsiniz. Görüşmede talep edilen konu paylaşılır ve uygun değerlendirme zamanı planlanır.",
  },
  {
    slug: "cinarcik",
    name: "Çınarcık",
    locativeName: "Çınarcık'ta",
    fromName: "Çınarcık'tan",
    summary:
      "Çınarcık sahil hattından Yalova Merkez'deki kliniğe ulaşım seçenekleri ve tahmini süre.",
    introduction:
      "Çınarcık'tan başvuran kişiler için medikal estetik ve bütüncül sağlık konuları Yalova Merkez'deki kliniğimizde hekim değerlendirmesiyle ele alınır. Süreç, genel bilgi verilmesi ve kişisel uygunluğun incelenmesiyle başlar.",
    access:
      "Çınarcık sahil yolundan Yalova Merkez yönüne ilerleyen güzergâh kliniğe erişim için kullanılabilir. Randevu saati belirlenirken yaz dönemi ve hafta sonu yoğunluğunun hesaba katılması yararlı olur.",
    transport:
      "Çınarcık–Yalova arasında çalışan ilçe minibüsleri ve toplu taşıma seçenekleriyle merkeze ulaşım sağlanabilir.",
    parking:
      "Araçla gelenler için klinik çevresindeki park seçenekleri saatlere göre değişir; yoğun günlerde ek süre ayrılması uygun olabilir.",
    travelTime: "Çınarcık'tan yaklaşık 25 dakika",
    travelNote:
      "Sahil yolu trafiği, mevsim ve hareket saatine bağlı olarak süreyi uzatabilir.",
    popularServiceSlugs: [
      "sivi-yuz-germe",
      "sac-dokulmesi-tedavisi",
      "fibromiyalji",
      "hacamat",
    ],
    faqAnswer:
      "Çınarcık'tan gelecek kişiler telefon veya WhatsApp aracılığıyla randevu talebi oluşturabilir. Ulaşım süresi dikkate alınarak uygun saat seçilir ve gerekli ön bilgiler paylaşılır.",
  },
  {
    slug: "termal",
    name: "Termal",
    locativeName: "Termal'de",
    fromName: "Termal'den",
    summary:
      "Termal güzergâhından kliniğe erişim, toplu taşıma ve randevu planlama bilgileri.",
    introduction:
      "Termal'den Yalova Merkez'e gelen kişiler, medikal estetik ve bütüncül sağlık yaklaşımları hakkında kliniğimizde bilgi alabilir. Her uygulama veya destek yaklaşımı öncesinde sağlık durumu ve uygunluk değerlendirilir.",
    access:
      "Termal–Yalova yolu üzerinden merkeze doğrudan ulaşım mümkündür. İlçenin turizm hareketliliği nedeniyle özellikle tatil dönemlerinde yola çıkış saatinin önceden planlanması önerilir.",
    transport:
      "Termal ile Yalova Merkez arasında çalışan minibüsler ve bölgesel toplu taşıma seçenekleri kullanılabilir.",
    parking:
      "Merkeze ulaşıldığında Bora Sk. çevresindeki güncel park imkânları değerlendirilebilir; kliniğin özel otopark garantisi bulunmamaktadır.",
    travelTime: "Termal'den yaklaşık 20 dakika",
    travelNote:
      "Tahmin normal trafik koşulları içindir ve çıkış noktasına göre farklılaşabilir.",
    popularServiceSlugs: [
      "mezoterapi",
      "kronik-yorgunluk-sendromu",
      "akupunktur",
      "ozon-tedavisi",
    ],
    faqAnswer:
      "Termal'den randevu için kliniğe telefonla veya WhatsApp üzerinden ulaşılır. Değerlendirme konusu belirtildikten sonra yol süresine uygun bir görüşme saati belirlenir.",
  },
  {
    slug: "armutlu",
    name: "Armutlu",
    locativeName: "Armutlu'da",
    fromName: "Armutlu'dan",
    summary:
      "Armutlu'dan kıyı güzergâhıyla kliniğe ulaşım ve uzun mesafeli randevu planlaması.",
    introduction:
      "Armutlu'dan gelen kişiler için değerlendirmeler Yalova Merkez'deki kliniğimizde randevulu olarak yürütülür. Uzun yol planı göz önünde bulundurularak bilgilendirme ve kontrol gereksinimleri görüşme sırasında açıklanır.",
    access:
      "Armutlu'dan Çınarcık üzerinden Yalova yönüne uzanan kıyı güzergâhı kullanılabilir. Mesafe diğer ilçelere göre daha uzun olduğundan randevu saatinden önce yeterli yol payı bırakılması önemlidir.",
    transport:
      "İlçeler arası minibüs ve otobüs seferleri kullanılabilir; sefer saatlerinin yolculuk öncesinde güncel kaynaklardan kontrol edilmesi gerekir.",
    parking:
      "Yalova Merkez'e araçla varıldığında klinik çevresindeki genel park ve otopark seçenekleri değerlendirilebilir.",
    travelTime: "Armutlu'dan yaklaşık 75 dakika",
    travelNote:
      "Kıyı yolu, mevsimsel yoğunluk ve hava koşulları tahmini süreyi etkileyebilir.",
    popularServiceSlugs: [
      "fibromiyalji",
      "bel-fitiklari-omurga-sagligi",
      "hacamat",
      "suluk-tedavisi",
    ],
    faqAnswer:
      "Armutlu'dan gelecek kişiler randevu talebinde yolculuk süresini belirtmelidir. Telefon veya WhatsApp görüşmesinde uygun saat ve varsa değerlendirme öncesi hazırlanması gereken bilgiler paylaşılır.",
  },
  {
    slug: "ciftlikkoy",
    name: "Çiftlikköy",
    locativeName: "Çiftlikköy'de",
    fromName: "Çiftlikköy'den",
    summary:
      "Çiftlikköy'den Yalova Merkez'e kısa ulaşım, toplu taşıma ve park planlaması.",
    introduction:
      "Çiftlikköy'den kliniğimize ulaşan kişiler için medikal estetik ve bütüncül sağlık başlıkları bilimsel değerlendirme çerçevesinde ele alınır. Yalova Merkez'e yakınlık, randevu ve gerekli kontrollerin planlanmasını kolaylaştırabilir.",
    access:
      "Çiftlikköy'den Yalova Merkez yönündeki ana kara yolu ve sahil bağlantıları kliniğe erişimde kullanılabilir. İş giriş ve çıkış saatlerindeki trafik yoğunluğu planlamada dikkate alınmalıdır.",
    transport:
      "Çiftlikköy–Yalova hattındaki belediye otobüsleri, minibüsler ve taksi seçenekleriyle merkeze ulaşım sağlanabilir.",
    parking:
      "Kliniğin bulunduğu mahalledeki park durumu saate göre değişir. Araçla gelenler yakın çevredeki genel otopark seçeneklerini kullanabilir.",
    travelTime: "Çiftlikköy'den yaklaşık 15 dakika",
    travelNote:
      "Süre, ilçedeki başlangıç noktası ve şehir girişindeki trafiğe bağlıdır.",
    popularServiceSlugs: [
      "botoks",
      "dolgu",
      "kilo-verme-destegi",
      "diyabet-yonetimi-destegi",
    ],
    faqAnswer:
      "Çiftlikköy'den randevu almak için telefon ya da WhatsApp kanalı kullanılabilir. Yakın mesafe sayesinde uygunluk durumuna göre görüşme saatleri birlikte planlanır.",
  },
  {
    slug: "altinova",
    name: "Altınova",
    locativeName: "Altınova'da",
    fromName: "Altınova'dan",
    summary:
      "Altınova–Yalova kara yolu üzerinden kliniğe ulaşım ve görüşme öncesi hazırlık bilgileri.",
    introduction:
      "Altınova'dan Yalova Merkez'deki kliniğimize gelen kişiler, hizmetler hakkında genel bilgi ve hekim değerlendirmesi alabilir. Yaklaşım seçimi sağlık geçmişi, mevcut tedaviler ve kişisel riskler birlikte incelenerek yapılır.",
    access:
      "Altınova'dan Yalova yönüne ana kara yolu kullanılarak merkeze ulaşılabilir. Sanayi ve feribot bağlantılarındaki dönemsel yoğunluk nedeniyle yol süresine ek pay bırakılması uygun olur.",
    transport:
      "Altınova ile Yalova arasında çalışan ilçe minibüsleri ve şehirler arası hatların uygun seferleri değerlendirilebilir.",
    parking:
      "Merkezdeki park koşulları değişken olduğundan araçla ulaşımda çevredeki açık veya kapalı genel otoparklar tercih edilebilir.",
    travelTime: "Altınova'dan yaklaşık 30 dakika",
    travelNote:
      "Tersane bölgesi, ana yol ve şehir girişi yoğunluğu süreyi değiştirebilir.",
    popularServiceSlugs: [
      "lazer",
      "ip-aski",
      "hipertansiyon-destegi",
      "akupunktur",
    ],
    faqAnswer:
      "Altınova'dan randevu oluşturmak için kliniğe telefon veya WhatsApp üzerinden ulaşılır. Yol planı ve değerlendirme konusu dikkate alınarak uygun zaman belirlenir.",
  },
  {
    slug: "orhangazi",
    name: "Orhangazi",
    locativeName: "Orhangazi'de",
    fromName: "Orhangazi'den",
    summary:
      "Bursa Orhangazi'den Yalova Merkez'e yakın bölgesel ulaşım ve randevu bilgileri.",
    introduction:
      "Bursa sınırındaki Orhangazi'den gelen kişiler için kliniğimiz Yalova Merkez'de değerlendirme imkânı sunar. Medikal estetik ve bütüncül sağlık konuları sonuç vaadi olmadan, bilgilendirme ve uygunluk incelemesi temelinde ele alınır.",
    access:
      "Orhangazi'den Yalova yönüne kara yolu bağlantısı kullanılarak merkeze ulaşılır. İl sınırı geçişi kısa olmakla birlikte hafta sonu ve tatil trafiği randevu planına eklenmelidir.",
    transport:
      "Orhangazi–Yalova yönündeki otobüs ve minibüs seferleri kullanılabilir; güncel saatler ilgili taşıyıcılardan doğrulanmalıdır.",
    parking:
      "Özel araçla gelenler Yalova Merkez'de kliniğe yakın genel park seçeneklerini değerlendirebilir; yer garantisi verilmemektedir.",
    travelTime: "Orhangazi'den yaklaşık 35 dakika",
    travelNote:
      "Ana yol trafiği ve Orhangazi içindeki başlangıç noktası tahmini süreyi etkiler.",
    popularServiceSlugs: [
      "sivi-yuz-germe",
      "sac-dokulmesi-tedavisi",
      "kronik-yorgunluk-sendromu",
      "ozon-tedavisi",
    ],
    faqAnswer:
      "Orhangazi'den başvuran kişiler telefon veya WhatsApp ile randevu oluşturabilir. Şehirler arası yol süresi hesaba katılarak değerlendirme saati karşılıklı belirlenir.",
  },
  {
    slug: "gemlik",
    name: "Gemlik",
    locativeName: "Gemlik'te",
    fromName: "Gemlik'ten",
    summary:
      "Gemlik'ten Yalova Merkez'deki kliniğe bölgesel ulaşım ve zamanlama önerileri.",
    introduction:
      "Gemlik'ten Yalova'ya gelen kişiler, medikal estetik ve bütüncül sağlık yaklaşımlarını hekimle görüşmek üzere randevu planlayabilir. Mevcut sağlık takibi ve kişisel ihtiyaçlar değerlendirilmeden herhangi bir uygulama kararı verilmez.",
    access:
      "Gemlik'ten Orhangazi bağlantısı üzerinden Yalova yönüne kara yoluyla ulaşım sağlanabilir. Bölgesel trafik ve yol çalışmaları olabileceği için hareket öncesinde güzergâh kontrolü yapılması yararlıdır.",
    transport:
      "Gemlik–Yalova yönünde hizmet veren şehirler arası otobüs seçenekleri kullanılabilir; terminalden kliniğe şehir içi ulaşım gerekir.",
    parking:
      "Özel araç tercih edildiğinde Yalova Merkez'deki genel otopark ve sokak parkı koşulları dikkate alınmalıdır.",
    travelTime: "Gemlik'ten yaklaşık 55 dakika",
    travelNote:
      "Orhangazi bağlantısındaki trafik ve Gemlik içi çıkış süresi toplam yolculuğu değiştirebilir.",
    popularServiceSlugs: [
      "yuzde-matlik-kirisiklik-leke-tedavisi",
      "mezoterapi",
      "fibromiyalji",
      "suluk-tedavisi",
    ],
    faqAnswer:
      "Gemlik'ten randevu almak isteyen kişiler telefon veya WhatsApp üzerinden iletişim kurabilir. Şehirler arası yolculuk dikkate alınarak uygun saat ve değerlendirme süreci hakkında bilgi verilir.",
  },
] as const;

export const locationPageContent = {
  list: {
    eyebrow: "Hizmet Bölgeleri",
    title: "Yalova Merkez, İlçeler ve Yakın Bölgeler",
    description:
      "Yalova Merkez'deki kliniğimize ulaşım bilgilerini ve bölgelere göre genel hizmet başlıklarını inceleyin.",
  },
  travelTimeTitle: "Tahmini Ulaşım Süresi",
  popularServicesTitle: "Bu Bölgeden İncelenen Hizmet Başlıkları",
  faqTitle: "Sık Sorulan Sorular",
  appointmentTitle: "Yalova Merkez'deki kliniğimiz için randevu oluşturun",
  appointmentDescription:
    "Ulaşım ve değerlendirme süreci hakkında genel bilgi almak için iletişime geçebilirsiniz.",
  disclaimer:
    "Ulaşım süreleri yaklaşık değerlerdir; trafik, hava ve çıkış noktasına göre değişebilir.",
} as const;

export const serviceLocationCombinations = [
  {
    servicePathSlug: "fibromiyalji-tedavisi",
    serviceSlug: "fibromiyalji",
    locationSlug: "yalova-merkez",
    localFocus:
      "Merkez içindeki kısa ulaşım, değerlendirme ve gerekli kontrollerin farklı günlere planlanmasını kolaylaştırabilir.",
  },
  {
    servicePathSlug: "fibromiyalji-tedavisi",
    serviceSlug: "fibromiyalji",
    locationSlug: "cinarcik",
    localFocus:
      "Çınarcık sahil yolundaki dönemsel yoğunluk dikkate alınarak yorgunluk ve hareket güçlüğü yaşayan kişiler için uygun saat seçimi yapılabilir.",
  },
  {
    servicePathSlug: "fibromiyalji-tedavisi",
    serviceSlug: "fibromiyalji",
    locationSlug: "termal",
    localFocus:
      "Termal güzergâhından gelen kişiler için yol süresi ve günlük enerji düzeyi görüşme planında birlikte ele alınabilir.",
  },
  {
    servicePathSlug: "hacamat",
    serviceSlug: "hacamat",
    locationSlug: "yalova-merkez",
    localFocus:
      "Merkezden kısa sürede erişim, uygulama öncesi değerlendirme ile işlem sonrası bilgilendirmenin aynı randevu akışında yürütülmesine yardımcı olur.",
  },
  {
    servicePathSlug: "hacamat",
    serviceSlug: "hacamat",
    locationSlug: "cinarcik",
    localFocus:
      "Çınarcık'tan gelecek kişiler için dönüş yolculuğu ve işlem sonrası öneriler randevu öncesinde açıkça planlanır.",
  },
  {
    servicePathSlug: "hacamat",
    serviceSlug: "hacamat",
    locationSlug: "ciftlikkoy",
    localFocus:
      "Çiftlikköy'ün merkeze yakınlığı, uygunluk değerlendirmesi ve gerekli görülürse kontrol görüşmesi için ulaşımı kolaylaştırabilir.",
  },
  {
    servicePathSlug: "botoks-uygulamasi",
    serviceSlug: "botoks",
    locationSlug: "yalova-merkez",
    localFocus:
      "Yalova Merkez'den gelen kişilerde yüz anatomisi değerlendirmesi, işlem kapsamı ve günlük yaşama dönüş bilgileri görüşmede ele alınır.",
  },
  {
    servicePathSlug: "botoks-uygulamasi",
    serviceSlug: "botoks",
    locationSlug: "termal",
    localFocus:
      "Termal'den planlanan ziyarette turizm yoğunluğu ve yol süresi hesaba katılarak değerlendirme için yeterli zaman ayrılır.",
  },
  {
    servicePathSlug: "sac-dokulmesi-tedavisi",
    serviceSlug: "sac-dokulmesi-tedavisi",
    locationSlug: "yalova-merkez",
    localFocus:
      "Merkezdeki görüşmede saç dökülmesinin süresi, saçlı deri bulguları ve gerekli olabilecek tıbbi incelemeler birlikte değerlendirilir.",
  },
  {
    servicePathSlug: "kilo-verme-destegi",
    serviceSlug: "kilo-verme-destegi",
    locationSlug: "yalova-merkez",
    localFocus:
      "Merkez içinden düzenli erişim, kilo yönetiminde izlem görüşmeleri ve yaşam biçimi başlıklarının sürdürülebilir biçimde ele alınmasını destekler.",
  },
  {
    servicePathSlug: "kilo-verme-destegi",
    serviceSlug: "kilo-verme-destegi",
    locationSlug: "cinarcik",
    localFocus:
      "Çınarcık'tan gelen kişiler için takip sıklığı, ulaşım süresi ve günlük yaşam düzeni dikkate alınarak gerçekçi bir görüşme planı oluşturulur.",
  },
  {
    servicePathSlug: "akupunktur",
    serviceSlug: "akupunktur",
    locationSlug: "yalova-merkez",
    localFocus:
      "Yalova Merkez'deki değerlendirmede akupunkturun mevcut sağlık takibine nasıl eşlik edebileceği ve sınırlılıkları açıklanır.",
  },
  {
    servicePathSlug: "suluk-tedavisi",
    serviceSlug: "suluk-tedavisi",
    locationSlug: "yalova-merkez",
    localFocus:
      "Merkezdeki randevuda kanama riski, kullanılan ilaçlar ve tıbbi sülük uygulamasına özgü hijyen koşulları öncelikle incelenir.",
  },
  {
    servicePathSlug: "ozon-tedavisi",
    serviceSlug: "ozon-tedavisi",
    locationSlug: "yalova-merkez",
    localFocus:
      "Yalova Merkez'den başvuran kişiler için ozon yaklaşımının yöntemi, kanıt sınırları ve uygunluk ölçütleri görüşmede açıklanır.",
  },
  {
    servicePathSlug: "sivi-yuz-germe",
    serviceSlug: "sivi-yuz-germe",
    locationSlug: "yalova-merkez",
    localFocus:
      "Merkezde yapılan yüz anatomisi değerlendirmesinde hacim oluşturmadan sıkılaşma hedefi ve uygulanabilecek yöntemlerin sınırları konuşulur.",
  },
  {
    servicePathSlug: "sivi-yuz-germe",
    serviceSlug: "sivi-yuz-germe",
    locationSlug: "termal",
    localFocus:
      "Termal'den gelen kişiler için uygulama öncesi değerlendirme ve dönüş yolculuğunda dikkat edilecek noktalar randevu akışına eklenir.",
  },
  {
    servicePathSlug: "bel-fitiklari",
    serviceSlug: "bel-fitiklari-omurga-sagligi",
    locationSlug: "yalova-merkez",
    localFocus:
      "Merkezdeki değerlendirmede mevcut görüntüleme sonuçları, hareket kapasitesi ve ilgili branş takipleri birlikte gözden geçirilir.",
  },
  {
    servicePathSlug: "bel-fitiklari",
    serviceSlug: "bel-fitiklari-omurga-sagligi",
    locationSlug: "cinarcik",
    localFocus:
      "Çınarcık'tan yolculukta oturma süresi ve hareket kısıtlılığı dikkate alınarak görüşme saati ile ulaşım planı birlikte ele alınır.",
  },
] as const;

export const serviceLocationPageContent = {
  approachTitle: "Yaklaşım Hakkında Genel Bilgi",
  accessTitle: "İlçeden Kliniğe Ulaşım",
  nearbyServicesTitle: "Yakındaki Diğer Hizmet Başlıkları",
  linksTitle: "İlgili Ana Sayfalar",
  faqTitle: "Sık Sorulan Sorular",
  appointmentTitle: "Yalova Merkez'de değerlendirme randevusu oluşturun",
  appointmentDescription:
    "Hizmet, ulaşım ve randevu süreci hakkında genel bilgi için kliniğimizle iletişime geçebilirsiniz.",
  generalDisclaimer:
    "Bu içerik genel bilgilendirme amaçlıdır; kişiye özel tıbbi tavsiye veya sonuç vaadi değildir.",
} as const;

export const siteContent = {
  brand: {
    name: "Uzm. Dr. Yaşar Murat Çokay",
    siteName: "Uzm. Dr. Yaşar Murat Çokay",
    domain: "uzmdrmuratcokay.com.tr",
    tagline: "Medikal Estetik & Bütüncül Sağlık",
    biography:
      "Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesinden emekli olup, kendi muayenehanemde GETAT Ünitesi kurdum.",
    values: ["Bilimsel yaklaşım", "Şeffaf bilgilendirme", "Etik sağlık iletişimi"],
  },
  colors: brandColors,
  services: {
    categories: serviceCategories,
    catalog: serviceCatalog,
    ui: {
      featuredTitle: "Öne Çıkan Hizmetler",
      tabs: {
        "medikal-estetik": "Medikal Estetik",
        "butuncul-saglik": "Bütüncül Sağlık",
      },
      badges: {
        "medikal-estetik": "Estetik",
        "butuncul-saglik": "Bütüncül",
      },
    },
  },
  contact: {
    address: clinicAddress,
    phone: {
      display: "0505 244 51 23",
      href: "tel:+905052445123",
    },
    whatsapp: {
      href: "https://wa.me/905052445123",
    },
    email: {
      display: "muryas2@mynet.com",
      href: "mailto:muryas2@mynet.com",
    },
    workingHours: "Randevu ile hizmet verilmektedir.",
  },
  navigation: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Bölgeler", href: "/bolgeler" },
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "İletişim", href: "/iletisim" },
  ],
  accessibility: {
    mainNavigation: "Ana menü",
    quickContact: "Hızlı iletişim",
    openMenu: "Menüyü aç",
    doctorPhotoPlaceholder:
      "Yalova medikal estetik ve GETAT uzmanı Uzm. Dr. Yaşar Murat Çokay",
  },
  actions: {
    appointment: "Randevu Al",
    appointmentHref: "/#randevu",
    exploreServices: "Hizmetleri İncele",
    detailedInformation: "Detaylı Bilgi",
    whatsapp: "WhatsApp",
    phone: "Ara",
  },
  footer: {
    servicesTitle: "Hizmetler",
    legalTitle: "Yasal",
    contactTitle: "İletişim",
    workingHoursTitle: "Çalışma Saatleri",
    legalLink: "Yasal Bilgilendirme",
    legalNotice:
      "Bu site bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez.",
    copyright:
      "© 2025 Uzm. Dr. Yaşar Murat Çokay. Tüm hakları saklıdır.",
  },
  seo: {
    siteUrl: "https://uzmdrmuratcokay.com.tr",
    description:
      "Uzm. Dr. Yaşar Murat Çokay'ın Yalova merkezli bilgilendirme sitesi.",
  },
  pages: {
    home: {
      seo: {
        title: "Yalova Medikal Estetik ve GETAT",
        description:
          "Uzm. Dr. Yaşar Murat Çokay'ın Yalova'daki medikal estetik ve GETAT uygulamaları hakkında bilimsel ve genel bilgilendirme sitesi.",
      },
      hero: {
        eyebrow: "Uzm. Dr. Yaşar Murat Çokay",
        title: "Yalova'da Medikal Estetik ve Bütüncül Sağlık",
        description:
          "Bilimsel değerlendirme, açık bilgilendirme ve kişiye özel sağlık yaklaşımı.",
        photoPlaceholder: "Profesyonel doktor fotoğrafı",
      },
      trustTitle: "Klinik yaklaşımı ve deneyim",
      trustBadges: [
        {
          icon: "hospital",
          text: "Yalova Eğitim ve Araştırma Hastanesi deneyimi",
        },
        {
          icon: "stethoscope",
          text: "GETAT Ünitesi kurucusu",
        },
        {
          icon: "microscope",
          text: "Bilimsel ve kanıta dayalı yaklaşım",
        },
        {
          icon: "location",
          text: "Merkez Yalova'da kolay ulaşım",
        },
      ],
      services: {
        eyebrow: "Hizmet Alanları",
        title: "Bilgilendirme ve uygulama alanları",
        description:
          "Her uygulama, hekim değerlendirmesi sonrasında kişiye özel tıbbi gereklilikler gözetilerek ele alınır.",
      },
      whyClinic: {
        eyebrow: "Hekim Hakkında",
        title: "Neden Bu Klinik?",
        description:
          "Uzm. Dr. Yaşar Murat Çokay, Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesindeki görevinden emekli olduktan sonra çalışmalarını kendi muayenehanesinde sürdürmektedir.",
        detail:
          "Hastane deneyimi ile geleneksel ve tamamlayıcı tıp alanındaki birikimini; bilimsel değerlendirme, açık bilgilendirme ve etik sağlık iletişimi ilkeleriyle bir araya getirir.",
      },
      appointment: {
        eyebrow: "Randevu",
        title: "Değerlendirme randevusu talebi",
        description:
          "Alan, konu ve zaman tercihini adım adım seçin. Talep kaydedilmez; e-posta uygulamanız açılır. Uygunluk ve saat hekim tarafından bildirilir.",
      },
      contactCta: {
        title: "Yalova Merkez'deki kliniğimizde randevu alın",
        description:
          "Kısa bir talep oluşturun. Bilgiler e-posta ile iletilir; uygunluk hekim tarafından bildirilir.",
      },
    },
    services: {
      title: "Hizmetler",
      seo: {
        title: "Hizmetler",
        description:
          "Yalova'da medikal estetik ve geleneksel ve tamamlayıcı tıp uygulamaları hakkında genel bilgilendirme.",
      },
      detail: {
        eyebrow: "Hizmet Bilgilendirmesi",
        whatIsTitle: "Bu Tedavi Nedir?",
        whatIsDescription:
          "Bu uygulama, kapsamı ve yöntemi kişinin sağlık durumu ile hekim değerlendirmesine göre ele alınan bir sağlık hizmetidir. Buradaki içerik yalnızca genel bilgilendirme amaçlıdır; tanı, tedavi önerisi veya sonuç vaadi değildir.",
        processTitle: "Nasıl Uygulanır?",
        processSteps: [
          {
            title: "Ön değerlendirme",
            description:
              "Sağlık geçmişi, mevcut durum ve uygulamaya uygunluğu etkileyebilecek faktörler hekim tarafından değerlendirilir.",
          },
          {
            title: "Bilgilendirme",
            description:
              "Uygulamanın kapsamı, alternatifleri, sınırlılıkları ve olası riskleri hakkında bilgi verilir.",
          },
          {
            title: "Uygulama",
            description:
              "Planlanan işlem, ilgili tıbbi yöntem ve hijyen standartları çerçevesinde gerçekleştirilir.",
          },
          {
            title: "İzlem",
            description:
              "İşlem sonrası dikkat edilmesi gerekenler açıklanır ve gerekli görülürse kontrol planlanır.",
          },
        ],
        suitabilityTitle: "Kimler İçin Uygundur?",
        suitabilityDescription:
          "Uygunluk; kişinin yaşı, sağlık geçmişi, kullandığı ilaçlar, mevcut hastalıkları ve uygulamaya özgü koşullar birlikte değerlendirilerek hekim tarafından belirlenir. Bu genel bilgiler kişiye özel tıbbi tavsiye yerine geçmez.",
        faqTitle: "Sık Sorulan Sorular",
        faqs: [
          {
            question: "Acıyor mu?",
            answer:
              "Uygulama sırasında hissedilen duyum kişiden kişiye ve kullanılan yönteme göre değişebilir. Süreç öncesinde konforu etkileyen unsurlar hakkında hekim tarafından bilgi verilir.",
          },
          {
            question: "Ne kadar sürer?",
            answer:
              "İşlem süresi uygulamanın kapsamına ve kişisel değerlendirmeye göre değişir. Tahmini süre muayene sonrasında açıklanır.",
          },
          {
            question: "İyileşme süresi nedir?",
            answer:
              "İşlem sonrası süreç uygulamanın türüne ve kişisel faktörlere bağlıdır. Genel öneriler ve gerekli kontroller uygulama sonrasında paylaşılır.",
          },
        ],
        cta: {
          title: "Randevu ve genel bilgi",
          description:
            "Uygunluk değerlendirmesi ve süreç hakkında bilgi almak için kliniğimizle iletişime geçebilirsiniz.",
        },
        metadataTitleSuffix: "Hakkında Bilgi",
      },
    },
    about: {
      title: "Uzm. Dr. Yaşar Murat Çokay Hakkında",
      seo: {
        title: "Hakkımda",
        description:
          "Uzm. Dr. Yaşar Murat Çokay'ın Yalova'daki hekimlik geçmişi, GETAT deneyimi ve sağlık iletişimi yaklaşımı.",
      },
      introduction:
        "Uzm. Dr. Yaşar Murat Çokay, Yalova Eğitim ve Araştırma Hastanesi GETAT Ünitesindeki görevinden emekli olduktan sonra çalışmalarını Yalova Merkez'deki muayenehanesinde sürdürmektedir.",
      detail:
        "Medikal estetik ve bütüncül sağlık alanındaki değerlendirmelerinde bilimsel yaklaşım, açık bilgilendirme ve etik sağlık iletişimi ilkelerini esas alır.",
    },
    contact: {
      title: "İletişim",
      description:
        "Kısa bir not yeterlidir. Ayrıntılı sağlık bilgisi ve tetkikler görüşmede ele alınır. Form, WhatsApp veya e-posta yoluyla randevu talebi iletir.",
      seo: {
        title: "İletişim",
        description:
          "Uzm. Dr. Yaşar Murat Çokay'ın Yalova Merkez'deki muayenehanesinin adres ve iletişim bilgileri.",
      },
      form: {
        title: "Mesaj bırakın",
        nameLabel: "Ad soyad",
        phoneLabel: "Telefon",
        topicLabel: "Konu",
        messageLabel: "Kısa not",
        messageHint: "İsteğe bağlı. Tanı veya sonuç talebi yazılmamalıdır.",
        consent:
          "Bu iletinin randevu ve genel bilgi talebi olduğunu, tıbbi tavsiye veya sonuç vaadi içermediğini kabul ediyorum.",
        submitWhatsapp: "WhatsApp ile gönder",
        submitEmail: "E-posta ile gönder",
        success:
          "İletişim uygulaması açıldı. Gönderimi orada tamamlayabilirsiniz.",
        error: "Ad, telefon, konu ve onay alanlarını kontrol edin.",
        topics: [
          "Genel bilgi / randevu",
          "Botoks veya dolgu",
          "Yüz ve cilt uygulamaları",
          "Saç dökülmesi",
          "Fibromiyalji",
          "Kilo verme desteği",
          "Hacamat, sülük veya akupunktur",
          "Diğer",
        ],
      },
      map: {
        title: "Klinik konumu",
        description:
          "Harita, yalnızca istediğinizde yüklenir; sayfa açılışını yavaşlatmaz.",
        load: "Haritayı göster",
        openExternal: "Google Haritalar’da aç",
        loadedLabel: "Yalova Merkez klinik konumu",
      },
      legalWarning:
        "Bu site bilgilendirme amaçlıdır. Tıbbi tavsiye, tanı veya sonuç vaadi içermez. Uygulama ve destek kararları hekim değerlendirmesiyle birlikte alınmalıdır.",
    },
  },
} as const;
