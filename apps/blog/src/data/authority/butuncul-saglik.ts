import { commonSources, createCluster, createPillar } from "./compose";

export const pillar = createPillar({
  slug: "butuncul-saglik",
  title: "Bütüncül Sağlık Rehberi",
  description:
    "Yalova'da fibromiyalji, kronik yorgunluk, kilo yönetimi, diyabet, hipertansiyon ve omurga sağlığı konularında bilimsel sınırlar içinde bütüncül destek yaklaşımı.",
  lastUpdated: "2026-10-06",
  clusterSlugs: [
    "fibromiyalji-ile-yasam",
    "kronik-yorgunluk-nedenleri-yonetimi",
    "bel-fitiklarinda-tamamlayici-tip",
    "diyabet-hipertansiyon-butuncul-destek",
    "varis-hemoroid-suluk-tedavisinin-yeri",
    "kilo-yonetiminde-ozon-hacamat-destegi",
    "yalovada-fibromiyalji-tedavisi-yapan-yerler",
    "yalovada-kilo-verme-destegi-alan-yerler",
    "yalovada-kronik-yorgunluk-destegi-alan-yerler",
    "yalovada-bel-fitigi-destegi-alan-yerler",
    "yalovada-diyabet-destegi-alan-yerler",
    "yalovada-hipertansiyon-destegi-alan-yerler",
    "yalovada-varis-destegi-alan-yerler",
    "yalovada-hemoroid-destegi-alan-yerler",
  ],
  introduction: [
    "Bütüncül sağlık, bir yakınmayı yalnızca tek bir belirti olarak değil; uyku, hareket, beslenme, stres yükü, kullanılan ilaçlar ve mevcut branş takibiyle birlikte ele alan bir değerlendirme çerçevesidir. Bu rehber, Yalova Merkez ve çevre ilçelerden bilgi arayan kişiler için genel bir omurga sunar. Amaç tanı koymak, kişiye özel tedavi önermek veya sonuç vaat etmek değildir. Amaç, hangi başlıkların hekimle konuşulabileceğini ve hangi sınırların gözetilmesi gerektiğini açık biçimde anlatmaktır.",
    "Geleneksel ve tamamlayıcı tıp uygulamaları Türkiye'de belirli eğitim, yetki ve ortam koşullarına bağlanmıştır. Bu nedenle hacamat, akupunktur, tıbbi sülük veya ozon gibi yaklaşımlar evde, izinsiz ortamda veya mevcut ilaçların yerine kullanılacak seçenekler olarak değerlendirilmemelidir. Bütüncül yaklaşım, branş hekimliğinin rakibi değil; uygun bulunduğunda ona eşlik edebilecek bir destek katmanıdır.",
    "Yalova'nın İstanbul, Bursa ve Kocaeli'ye yakınlığı, farklı illerden bilgi ve randevu talebini artırmaktadır. Ulaşım kolaylığı tek başına bir uygulama kararı doğurmaz. Her kişi için uygunluk; sağlık geçmişi, laboratuvar veya görüntüleme sonuçları, kullanılan ilaçlar ve kişisel riskler incelendikten sonra belirlenebilir. Bu sayfada yer alan başlıklar, o incelemenin yerine geçmez.",
    "Aşağıdaki bölümler fibromiyalji, kronik yorgunluk, bel fıtıkları, metabolik izlem, dolaşım yakınmaları ve kilo yönetimini ayrı ayrı ele alır. Her başlığın sonunda ilgili alt yazılara bağlantı bulunur. Metinlerde kasıtlı olarak yönetim, destek ve yaklaşım dili kullanılmıştır; çünkü bu dil hem bilimsel belirsizlikleri hem de yürürlükteki tanıtım kurallarını daha doğru yansıtır.",
  ],
  sections: [
    {
      id: "butuncul-saglik-nedir",
      title: "Bütüncül Sağlık Nedir, Ne Değildir?",
      paragraphs: [
        "Bütüncül sağlık, bedenin bir bölümünü diğerlerinden kopuk biçimde ele almak yerine kişinin günlük işlevselliğini merkeze alan bir bakış açısıdır. Uyku bölünüyorsa ağrı algısı değişebilir; hareket kısıtlıysa kilo yönetimi zorlaşabilir; uzun süren stres, tansiyon izlemini etkileyebilir. Bu ilişkileri görmek, her yakınmaya aynı yöntemi uygulamak anlamına gelmez. Tam tersine, hangi desteğin gerçekten ilgili olduğunu ayırt etmeye yardım eder.",
        "Bu yaklaşım mucizevi bir çerçeve değildir. Kanıt düzeyi başlıktan başlığa değişir, bazı yöntemler hakkında sınırlı veri vardır ve bazı kişiler için hiç uygun olmayabilir. Bütüncül değerlendirme; alternatif tıp adı altında ilaç bırakmayı, tetkikleri ertelemeyi veya acil bulguları bekletmeyi meşrulaştırmaz. Göğüs ağrısı, ani güç kaybı, yüksek ateş, ilerleyici nörolojik bulgu veya kontrolsüz kanama gibi durumlarda öncelik acil ve ilgili uzmanlık değerlendirmesidir.",
        "Yalova'da bütüncül sağlık bilgisinin artması, aynı zamanda yanlış beklentilerin de artması demektir. 'Hepsini çözer', 'kökünden yok eder' veya 'ilaçsız kesin sonuç' gibi ifadeler bu rehberin diline uymaz. Bir yöntemin konuşulabilir olması, o yöntemin herkes için gerekli veya yeterli olduğu anlamına gelmez. Hekim görüşmesi; seçenekleri, sınırları, olası etkileri ve izlem ihtiyacını birlikte açıklamak içindir.",
      ],
    },
    {
      id: "degerlendirme-sureci",
      title: "Değerlendirme Süreci Nasıl İlerler?",
      paragraphs: [
        "İlk adım genellikle yakınmanın zaman çizelgesini netleştirmektir. Belirti ne zaman başladı, hangi durumlarda artıyor, uyku ve hareketle ilişkisi nedir, daha önce hangi incelemeler yapıldı? Bu sorular, hem gereksiz tekrarı azaltır hem de eksik kalan tetkiklerin görünmesini sağlar. Kişi yanında varsa eski raporlarını, ilaç listesini ve alerji bilgisini paylaşmalıdır.",
        "İkinci adım, mevcut tıbbi takiple çakışma riskini incelemektir. Kan sulandırıcı kullanan bir kişide kupa veya sülük uygulaması farklı risk taşır. İnsülin veya tansiyon ilacı kullanan bir kişide yaşam biçimi önerileri, ilgili branş hekiminden habersiz değiştirilmemelidir. Bütüncül plan, var olan tedaviyi sessizce ikame etmez; gerektiğinde koordinasyon önerir.",
        "Üçüncü adım, hedefleri gerçekçi biçimde konuşmaktır. 'Daha düzenli uyumak', 'gün içinde kısa yürüyüşleri sürdürmek' veya 'ağrı dalgalanmasını izlemek' gibi hedefler, belirsiz vaatlerden daha güvenlidir. Seans sayısı baştan sabitlenmez. İzlem aralığı kişinin yolculuk mesafesine, iş düzenine ve klinik bulgularına göre değişebilir. Çınarcık, Termal veya Gemlik'ten gelen kişilerde ulaşım süresi de planın parçasıdır.",
      ],
      bullets: [
        "Yakınma öyküsü, tetkikler ve ilaç listesi birlikte gözden geçirilir.",
        "Uygun bulunmayan yöntemler açıkça dışlanır.",
        "Destek planı varsa izlem ölçütleriyle birlikte anlatılır.",
        "Acil veya ilerleyici bulgularda yönlendirme geciktirilmez.",
      ],
    },
    {
      id: "fibromiyalji-ve-yorgunluk",
      title: "Fibromiyalji ve Uzun Süren Yorgunluk",
      paragraphs: [
        "Fibromiyalji, yaygın kas iskelet ağrısı, sabah tutukluğu, uyku bölünmesi ve zihinsel yorgunlukla birlikte konuşulan bir tablodur. Tanı, başka nedenlerin yeterince araştırılmasından sonra klinik olarak ele alınır. Bu nedenle ilk adım 'hangi tamamlayıcı yöntemi denemeliyim' değil, 'hangi tıbbi değerlendirmeler eksik' sorusu olmalıdır. Ayrıntılı yaşam öyküsü, fibromiyalji ile yaşam yazısında daha geniş ele alınmıştır.",
        "Kronik yorgunluk yakınması ise tek bir tanı adı altında toplanmamalıdır. Anemi, tiroit bozuklukları, uyku apnesi, depresyon, ilaç yan etkileri veya enfeksiyon sonrası süreçler benzer tablo yaratabilir. Akupunktur veya diğer tamamlayıcı yaklaşımlar, bu ayırıcı değerlendirme yapılmadan ilk seçenek olamaz. Yönetim; uyku hijyeni, kademeli hareket, enerji planlaması ve gerektiğinde branş izlemini kapsayabilir.",
        "Her iki başlıkta da beklenti yönetimi önemlidir. Belirtiler dalgalı seyredebilir, bir yönteme yanıt kişiden kişiye değişir ve 'kalıcı olarak yok etme' iddiası bilimsel olarak savunulamaz. Yalova Merkez'deki değerlendirmede amaç, kişinin günlük işlevselliğini destekleyecek güvenli bir çerçeve kurmaktır. İlgili alt yazılar, bu çerçevenin ayrıntılarını taşır.",
      ],
    },
    {
      id: "omurga-ve-hareket",
      title: "Bel Fıtıkları ve Omurga Sağlığı",
      paragraphs: [
        "Bel ve bacak ağrısı sık görülür; ancak her bel ağrısı bel fıtığı değildir ve her bel fıtığı aynı yaklaşımı gerektirmez. Kuvvet kaybı, idrar kaçırma, eyer tarzı uyuşma veya ilerleyici nörolojik bulgu varsa zaman kaybı kabul edilemez. Bu durumda tamamlayıcı tıp değil, acil uzmanlık değerlendirmesi önceliklidir.",
        "Görüntüleme sonucu tek başına karar vermez. Aynı MR görüntüsü farklı kişilerde farklı yakınmalara yol açabilir. Bu yüzden hareket kapasitesi, ağrının yayılımı, meslek yükü ve daha önce denenen fizik tedavi süreçleri birlikte okunur. GETAT seçenekleri ancak bu zemin netleştikten sonra, mevcut planı bozmadan konuşulabilir.",
        "Yalova'dan ve çevre ilçelerden gelen kişilerde uzun yolculuk, oturma süresi ve dönüş planı da omurga sağlığı yönetiminin parçasıdır. Çınarcık veya Armutlu gibi daha uzun güzergâhlarda randevu saati, kişinin yolda geçireceği süre dikkate alınarak seçilebilir. Ayrıntılar bel fıtıkları yazısında toplanmıştır.",
      ],
    },
    {
      id: "metabolik-izlem",
      title: "Diyabet, Hipertansiyon ve Kilo Yönetimi",
      paragraphs: [
        "Diyabet ve hipertansiyon, düzenli ölçüm, ilaç uyumu ve yaşam biçimi izlemi gerektiren kronik durumlardır. Bütüncül destek; beslenme düzeni, hareket, uyku ve stres yükünü konuşmayı içerebilir. Ancak insülin, oral antidiyabetikler veya tansiyon ilaçları hekim onayı olmadan azaltılmaz, bırakılmaz veya 'doğal yöntemle değiştirilir' denmez.",
        "Kilo yönetimi de benzer biçimde tek bir uygulamaya indirgenemez. Enerji dengesi, uyku, kas kaybını önleyen hareket ve varsa altta yatan endokrin veya ilaç ilişkili etkenler birlikte değerlendirilir. Ozon veya hacamat, kilo kaybının ana yöntemi değildir. Bu uygulamalar konuşulsa bile bilimsel sınırları ve güvenlik ölçütleri açıkça belirtilmelidir.",
        "Yalova Merkez'e yakın oturan kişilerde izlem randevuları daha sık planlanabilir; daha uzaktan gelenlerde ise hedefler ve ara kontrol ihtiyacı baştan konuşulur. Metabolik konularda 'hızlı sonuç' vaadi, hem tıbbi hem hukuki bakımdan sorunludur. Rehberin ilgili cluster yazıları bu sınırları örneklerle açıklar.",
      ],
    },
    {
      id: "dolasim-yakinmalari",
      title: "Varis, Hemoroid ve Dolaşım Değerlendirmesi",
      paragraphs: [
        "Bacaklarda ağırlık, görünür damar değişiklikleri veya hemoroidle ilişkili yakınmalar farklı uzmanlık alanlarını ilgilendirebilir. Tıbbi sülük uygulaması bu başlıklarda zaman zaman konuşulsa da her dolaşım yakınması için uygun değildir. Önce tanı, kanama riski, enfeksiyon riski ve mevcut cerrahi veya girişimsel seçenekler ele alınmalıdır.",
        "Kan sulandırıcı, bağışıklık baskılayıcı veya ciddi anemi varlığında sülük uygulamasının risk profili değişir. Hijyen, kayıt ve hekim kararı olmadan yapılan uygulamalar kabul edilemez. Bu rehber, sülüğü evde denenecek bir yöntem olarak sunmaz; yalnızca yetkili sağlık ortamında değerlendirilebileceğini vurgular.",
        "Yalova'daki kişiler için önemli olan, dolaşım yakınmasını 'hangi tamamlayıcı yöntemi seçmeliyim' diye değil, 'hangi hekim değerlendirmesi eksik' diye sormaktır. Cluster yazısı, bilimsel perspektif ve güvenlik sınırlarını daha ayrıntılı anlatır.",
      ],
    },
    {
      id: "yalova-baglami",
      title: "Yalova Bağlamında Bütüncül Destek",
      paragraphs: [
        "Yalova Merkez, Çınarcık, Termal, Çiftlikköy, Altınova, Armutlu ile Bursa sınırındaki Orhangazi ve Gemlik, kliniğe farklı ulaşım süreleriyle bağlanır. Bu coğrafya, randevu planını ve izlem sıklığını etkiler. Kısa mesafede oturan bir kişi ile 70 dakikalık yol yapan bir kişinin aynı takip takvimine zorlanması doğru olmayabilir.",
        "Termal suları ve ilin turizm kimliği, sağlık arayışını artırır. Kaplıca veya seyahat tek başına bir yönetim planı değildir. Kronik hastalığı olan kişilerin sıvı kaybı, tansiyon dalgalanması veya cilt hassasiyeti açısından hekime danışmadan yoğun termal programlara girmesi önerilmez. Yalova sağlık rehberi, bu başlığı ayrı ele alır.",
        "Bilgi arayan kişi, internetteki genel metinlerle hekim görüşmesini birbirine karıştırmamalıdır. Bu pillar sayfa bir haritadır; kişiye özel rota değildir. Haritayı okumak yararlıdır, ancak yürüyüşe çıkmadan önce zemin, hava ve kişinin kendi kapasitesi değerlendirilmelidir.",
      ],
    },
    {
      id: "yasal-sinirlar",
      title: "Yasal Sınırlar ve Bilimsel Dürüstlük",
      paragraphs: [
        "12 Kasım 2025 tarihli Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği, hasta yorumu, öncesi-sonrası görsel, fiyat ve üstünlük iddiasını yasaklar. Bu rehber o çerçeveye uygun yazılmıştır. Ayrıca içerikler tanı yerine geçmez; yönlendirici reklam dili kullanmaz.",
        "Bilimsel dürüstlük, belirsizliği saklamamayı gerektirir. Bir yöntemin geleneksel kullanımı olması, güncel kanıt düzeyinin yüksek olduğu anlamına gelmez. Kanıt sınırlıysa bu açıkça yazılır. Kişi, 'denendiği için kesin işe yarar' çıkarımını yapmamalıdır.",
        "Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanan bu metin, Yalova Eğitim ve Araştırma Hastanesi GETAT deneyimi ile muayenehane pratiğinin bilgilendirme dilini birleştirir. Metnin işlevi, okuru sakin, ölçülü ve hekimle konuşmaya hazır hale getirmektir. Karar, her zaman yüz yüze değerlendirme sonrasında kişi ve hekim tarafından birlikte alınır.",
      ],
    },
  ],
  faqs: [
    {
      question: "Bütüncül sağlık mevcut ilaçların yerini alır mı?",
      answer:
        "Almaz. Bütüncül destek, ilgili branş takibi ve reçeteli tedavilerin yerine geçmez. İlaç değişikliği yalnızca sorumlu hekimle konuşulmalıdır.",
    },
    {
      question: "Hangi durumlarda önce acil değerlendirme gerekir?",
      answer:
        "Ani güç kaybı, göğüs ağrısı, nefes darlığı, yüksek ateş, bilinç değişikliği, idrar kaçırma veya ilerleyici uyuşmada tamamlayıcı yaklaşımlar ertelenir; acil başvuru önceliklidir.",
    },
    {
      question: "Yalova dışından gelenler için plan değişir mi?",
      answer:
        "Ulaşım süresi izlem sıklığını etkileyebilir. Hedefler ve kontrol ihtiyacı kişinin yol planına göre konuşulur; bu bir sonuç vaadi değildir.",
    },
    {
      question: "Tamamlayıcı uygulamalar herkese uygun mudur?",
      answer:
        "Hayır. Kullanılan ilaçlar, kanama riski, gebelik, enfeksiyon ve eşlik eden hastalıklar bazı yaklaşımları uygunsuz kılabilir.",
    },
    {
      question: "Bu rehber kişiye özel tavsiye midir?",
      answer:
        "Değildir. Metin genel bilgilendirme amaçlıdır. Uygunluk ve plan ancak hekim değerlendirmesiyle belirlenebilir.",
    },
    {
      question: "Alt yazıları neden ayrı okumalıyım?",
      answer:
        "Her başlığın kanıt düzeyi, riskleri ve değerlendirme ölçütleri farklıdır. Cluster yazılar bu ayrıntıyı taşımak için hazırlanmıştır.",
    },
  ],
});

export const clusters = [
  createCluster({
    slug: "fibromiyalji-ile-yasam",
    title: "Fibromiyalji ile Yaşam: Bütüncül Yaklaşım",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    description:
      "Fibromiyalji yönetiminde uyku, hareket, stres yükü ve tamamlayıcı yaklaşımların bilimsel sınırlar içindeki yeri.",
    lastUpdated: "2026-10-06",
    keywords: ["fibromiyalji", "yaygın ağrı", "uyku"],
    introduction: [
      "Fibromiyalji ile yaşam, yalnızca ağrı şiddetini saymak değil; uykunun kalitesini, gün içi enerjisini, dikkat süresini ve sosyal katılımı da izlemek anlamına gelir. Bu yazı Yalova'dan bilgi arayan kişiler için genel bir çerçeve sunar. Tanı koymaz, kişiyi belirli bir uygulamaya yönlendirmez ve kalıcı sonuç vaat etmez.",
      "Bütüncül yaklaşım burada bir vaat değil, bir sıralama önerisidir: önce ayırıcı değerlendirme, sonra yaşam biçimi yönetimi, ardından uygun bulunursa tamamlayıcı seçeneklerin konuşulması. Mevcut romatoloji, fizik tedavi veya psikiyatri izlemi varsa bu izlem bozulmamalıdır.",
    ],
    sections: [
      {
        id: "belirtiler-ve-ayirici-degerlendirme",
        title: "Belirtiler ve Ayırıcı Değerlendirme",
        paragraphs: [
          "Yaygın kas eklem ağrısı, sabah tutukluğu, dinlendirmeyen uyku ve konsantrasyon güçlüğü sık tarif edilir. Ancak benzer tablo tiroit hastalıkları, D vitamini eksikliği, inflamatuvar romatizmal hastalıklar veya ilaç yan etkileriyle de görülebilir. Bu yüzden 'fibromiyaljim var, doğrudan tamamlayıcı yönteme geçeyim' yaklaşımı güvenli değildir.",
          "Değerlendirmede belirti süresi, tetikleyiciler, eşlik eden baş ağrısı, bağırsak düzensizliği ve duygu durum değişiklikleri sorulur. Eski tetkikler varsa tekrarlanmadan önce gerçekten neyin eksik olduğu anlaşılmalıdır. Yalova Merkez'deki görüşmede amaç, eksik halkayı tamamlamaktır; herkese aynı paket uygulamayı önermek değildir.",
        ],
      },
      {
        id: "uyku-ve-enerji",
        title: "Uyku, Enerji ve Günlük İşlevsellik",
        paragraphs: [
          "Uyku bölünmesi ağrı eşiğini düşürebilir. Kafein saati, ekran kullanımı, gece ağrı uyanmaları ve gündüz kestirmeleri birlikte konuşulur. Uyku hijyeni önerileri kişiye özel tavsiye gibi sunulmaz; hekim, hangilerinin o kişi için anlamlı olduğunu değerlendirir.",
          "Enerji yönetimi, 'her gün aynı yoğunlukta zorlamak' yerine dalgalanmayı kabul eden bir plan olabilir. Bazı günler kısa yürüyüş uygunken bazı günler dinlenme payı gerekebilir. Bu esneklik tembellik değil, belirtilerle çalışmayı öğrenme çabasıdır.",
        ],
      },
      {
        id: "hareket-ve-destek",
        title: "Hareket, Destek Yaklaşımları ve Sınırlar",
        paragraphs: [
          "Kademeli, tolere edilebilir hareket çoğu yönetim planında konuşulur. Ağrıyı yok sayarak zorlamak kadar tamamen hareketsiz kalmak da işlevselliği bozabilir. Fizik tedavi uzmanının önerdiği program varsa tamamlayıcı yaklaşımlar onun yerine geçmez.",
          "Akupunktur, hacamat veya ozon gibi seçenekler ancak uygunluk ve kanıt sınırları anlatıldıktan sonra gündeme gelebilir. Bunlar fibromiyaljiyi ortadan kaldıran yöntemler olarak sunulamaz. Karar, kişinin beklentisi değil; güvenlik ve klinik uygunluk temelinde verilir.",
        ],
        bullets: [
          "Ayırıcı tıbbi değerlendirme tamamlanmadan uygulama planı kurulmaz.",
          "Uyku ve hareket izlemi, yöntemin kendisi kadar önemlidir.",
          "Tamamlayıcı seçenekler mevcut takibin yerine kullanılmaz.",
        ],
      },
      {
        id: "yalova-planlama",
        title: "Yalova'dan Gelen Kişiler İçin Planlama",
        paragraphs: [
          "Merkezde oturan kişiler daha sık kısa görüşme planlayabilir. Çınarcık veya Termal'den gelenlerde ise yol yorgunluğu dikkate alınır. Uzun yol, aynı gün hem ayrıntılı öykü hem uygulama için her zaman uygun olmayabilir.",
          "Kişinin işi, bakım yükü ve ulaşım imkânı izlem sıklığını etkiler. Plan, hayatın gerçeklerine uymuyorsa sürdürülemez. Bu nedenle ilk görüşmede yalnızca belirtiler değil, günlük yaşam da konuşulur.",
        ],
      },
      {
        id: "ne-zaman-ileri-tetkik",
        title: "Ne Zaman İleri Tetkik veya Yönlendirme Gerekir?",
        paragraphs: [
          "Kilo kaybı, ateş, gece terlemesi, eklemde belirgin şişlik, nörolojik kayıp veya yeni başlayan ciddi belirti varsa tablo yalnızca fibromiyalji varsayımıyla bırakılmaz. İlgili uzmanlık alanına yönlendirme geciktirilmemelidir.",
          "Bütüncül yaklaşım, bu kırmızı bayrakları 'stres' diye etiketleyerek ertelemez. Güvenli tıp, önce ciddi nedenleri dışlamaktır.",
        ],
      },
      {
        id: "bilgilendirilmis-karar",
        title: "Bilgilendirilmiş Karar",
        paragraphs: [
          "Kişi, önerilen her adımın amacını, sınırını ve izlem biçimini anlamalıdır. Anlaşılmayan bir plan uygulanmamalıdır. Yazılı veya sözlü bilgilendirme, rıza sürecinin parçasıdır.",
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Metin, Yalova'daki okura sakin bir yol haritası sunmak içindir; kişiye özel yönetim kararı değildir.",
        ],
      },
    ],
    sources: [commonSources.niceFibromyalgia, commonSources.ttbEtik, commonSources.whoTraditional],
    faqs: [
      {
        question: "Fibromiyalji tamamlayıcı yöntemle yok edilir mi?",
        answer:
          "Yok edilir ifadesi uygun değildir. Yönetim; belirtileri izlemek, işlevselliği desteklemek ve güvenli seçenekleri konuşmak anlamına gelir.",
      },
      {
        question: "İlaç kullanıyorsam bütüncül yaklaşım uygulanamaz mı?",
        answer:
          "Uygulanabilirliği ilaç listesine göre değişir. Mevcut tedavi bırakılmaz; etkileşim ve uygunluk hekim tarafından incelenir.",
      },
      {
        question: "Kaç görüşme gerekir?",
        answer:
          "Sabit bir sayı yoktur. İzlem, belirtilerin seyri, ulaşım ve klinik bulgulara göre planlanır.",
      },
      {
        question: "Egzersiz ağrıyı artırırsa ne yapılır?",
        answer:
          "Plan gözden geçirilir. Ağrıyı yok sayarak zorlamak doğru değildir; hareket düzeni kişiye göre yeniden konuşulur.",
      },
      {
        question: "Yalova dışından randevu alabilir miyim?",
        answer:
          "Evet. Yol süresi görüşme planına eklenir. Bu, uygulamanın uygun olduğu anlamına gelmez.",
      },
      {
        question: "Bu yazı tanı koyar mı?",
        answer:
          "Koymaz. Yazı genel bilgidir. Tanı ve plan hekim değerlendirmesiyle belirlenir.",
      },
    ],
  }),
  createCluster({
    slug: "kronik-yorgunluk-nedenleri-yonetimi",
    title: "Kronik Yorgunluk Sendromu: Nedenleri ve Yönetimi",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    description:
      "Uzun süren yorgunlukta ayırıcı değerlendirme, yaşam biçimi yönetimi ve akupunkturun tamamlayıcı rolü.",
    lastUpdated: "2026-10-06",
    keywords: ["kronik yorgunluk", "akupunktur", "uyku"],
    introduction: [
      "Uzun süren ve dinlenmeyle geçmeyen yorgunluk, tek bir etiketle kapatılmamalıdır. Bu yazı, Yalova'da kronik yorgunluk yakınması olan kişilere genel bir değerlendirme sırası sunar. Amaç, eksik tıbbi nedenleri görünür kılmak ve tamamlayıcı yaklaşımları doğru yere yerleştirmektir.",
      "Akupunktur bu tabloda zaman zaman konuşulur; ancak yorgunluğun nedeni araştırılmadan ilk adım olmamalıdır. Yönetim; uyku, hareket, beslenme, duygu durum ve gerekirse ilgili branş izlemini kapsar.",
    ],
    sections: [
      {
        id: "nedenler",
        title: "Olası Nedenler Nasıl Ayrılır?",
        paragraphs: [
          "Yorgunluk; anemi, tiroit işlev bozukluğu, kalp-akciğer hastalıkları, uyku apnesi, depresyon, ilaç yan etkisi veya enfeksiyon sonrası süreçle ilişkili olabilir. Bu liste tam değildir. Hekim, öykü ve muayeneye göre hangi tetkiklerin anlamlı olduğuna karar verir.",
          "Kişinin 'hepsini yaptırdım' demesi, dosyanın gerçekten yeterli olduğu anlamına gelmeyebilir. Tarihleri eski, eksik veya farklı şikâyet döneminde yapılmış tetkikler yeniden yorumlanmalıdır.",
        ],
      },
      {
        id: "gunluk-yonetim",
        title: "Günlük Yönetim Başlıkları",
        paragraphs: [
          "Uyku düzeni, kafein, alkol, vardiyalı çalışma ve gece ekran kullanımı yorgunluğu besleyebilir. Bunları konuşmak suçlama değil, değiştirilebilir etkenleri görmektir. Her değişiklik hekimle birlikte ele alınır.",
          "Hareket planı 'hemen yoğun spor' biçiminde kurulmamalıdır. Efor sonrası belirgin kötüleşme tarif ediliyorsa tempo daha dikkatli ayarlanır. Amaç tükenene kadar zorlamak değil, sürdürülebilir bir ritim aramaktır.",
        ],
      },
      {
        id: "akupunkturun-yeri",
        title: "Akupunkturun Yeri",
        paragraphs: [
          "Akupunktur, uygun bulunan kişilerde mevcut yönetim planına eşlik edebilecek tamamlayıcı bir yaklaşımdır. Kanıtlar tabloya göre değişir ve herkeste aynı duyumu yaratmaz. Uygulama kararı, iğne fobisi, kanama riski ve enfeksiyon öyküsü dikkate alınarak verilir.",
          "Akupunkturun yorgunluğu kesin olarak bitirdiği söylenemez. Beklenti, belirtilerin birlikte izlenmesi ve kişinin işlevselliğinin değerlendirilmesidir. Ayrıntılı GETAT çerçevesi ilgili rehberde yer alır.",
        ],
      },
      {
        id: "ilac-ve-koordinasyon",
        title: "İlaçlar ve Branş Koordinasyonu",
        paragraphs: [
          "Bazı tansiyon, alerji veya ağrı ilaçları yorgunluk yapabilir. İlaç bırakma kararı bu yazıdan çıkarılamaz. Gerekirse ilgili hekime bilgi notu ile başvurulur.",
          "Endokrin, göğüs hastalıkları veya ruh sağlığı izlemi varsa tamamlayıcı plan bu izlemi gölgelememelidir. Koordinasyon, kişinin güvenliği içindir.",
        ],
      },
      {
        id: "yalova-ulasim",
        title: "Yalova'da Randevu ve Ulaşım",
        paragraphs: [
          "Yorgunluk yaşayan bir kişi için uzun yolculuk tek başına yük olabilir. Çınarcık, Altınova veya Orhangazi'den gelenlerde görüşme saati buna göre seçilebilir.",
          "Aynı güne birden fazla ağır işlem planlamak her zaman doğru değildir. Önce dinleme ve değerlendirme, sonra uygunsa uygulama düşünülür.",
        ],
      },
      {
        id: "sinirlar",
        title: "Sınırlar",
        paragraphs: [
          "Bu yazı tanı koymaz. Kronik yorgunluk sendromu tanısı, belirli ölçütler ve dışlama süreçleri gerektirir. İnternet metni bu sürecin yerini tutmaz.",
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır ve yalnızca genel bilgilendirme amaçlıdır.",
        ],
      },
    ],
    sources: [commonSources.nihAcupuncture, commonSources.ttbEtik, commonSources.whoTraditional],
    faqs: [
      {
        question: "Yorgunluk için önce hangi hekime gidilmeli?",
        answer:
          "İlk değerlendirme genellikle kişinin mevcut hekimi veya uygun iç hastalıkları/aile hekimliği izlemiyle başlar. Gerekirse ilgili branşa yönlendirilir.",
      },
      {
        question: "Akupunktur yorgunluğu bitirir mi?",
        answer:
          "Bitirir ifadesi uygun değildir. Uygun kişilerde destekleyici bir yaklaşım olarak konuşulabilir.",
      },
      {
        question: "Vitamin takviyesi yeterli midir?",
        answer:
          "Eksiklik yoksa rastgele takviye önerilmez. Gereksiz kullanım da risk taşıyabilir.",
      },
      {
        question: "İşten uzaklaşmak gerekir mi?",
        answer:
          "Bu karar tıbbi ve mesleki bağlama göre değişir. Genel bir uzaklaşma tavsiyesi verilmez.",
      },
      {
        question: "Kaç seans akupunktur gerekir?",
        answer:
          "Sabit seans sayısı yoktur. Uygunluk ve izlem bulgularına göre konuşulur.",
      },
      {
        question: "Bu içerik tıbbi tavsiye midir?",
        answer:
          "Değildir. Kişiye özel karar hekim değerlendirmesiyle verilir.",
      },
    ],
  }),
  createCluster({
    slug: "bel-fitiklarinda-tamamlayici-tip",
    title: "Bel Fıtıklarında Tamamlayıcı Tıp Yaklaşımları",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    description:
      "Bel ve bacak yakınmalarında GETAT seçeneklerinin destekleyici rolü, kırmızı bayraklar ve Yalova'dan ulaşım planı.",
    lastUpdated: "2026-10-06",
    keywords: ["bel fıtığı", "omurga", "akupunktur"],
    introduction: [
      "Bel fıtığı sözcüğü sık kullanılır; ancak görüntüleme ile yakınma her zaman birebir örtüşmez. Bu yazı, Yalova'dan bel ve bacak ağrısı için bilgi arayan kişilere tamamlayıcı tıp seçeneklerini doğru sıraya koymayı amaçlar.",
      "İlerleyici kuvvet kaybı, eyer uyuşması veya idrar kaçırma varsa GETAT değil, acil cerrahi/nöroradyolojik değerlendirme önceliklidir. Bu kuralün istisnası yoktur.",
    ],
    sections: [
      {
        id: "kirmizi-bayraklar",
        title: "Kırmızı Bayraklar",
        paragraphs: [
          "Ani bacakta güçsüzlük, yürüyememe, at nalı uyuşma, ateşle birlikte bel ağrısı veya travma sonrası ilerleyici ağrı bekletilmemelidir. Bu durumda hacamat, akupunktur veya ozon konuşulmaz.",
          "Kırmızı bayrak yoksa bile kontrolsüz ağrı kesici kullanımı, uzun süreli hareketsizlik ve yanlış kaldırma teknikleri tabloyu bozabilir. Yönetim, yalnızca 'hangi iğne' sorusuna indirgenemez.",
        ],
      },
      {
        id: "goruntuleme",
        title: "Görüntüleme Nasıl Okunur?",
        paragraphs: [
          "MR sonucu tek başına ameliyat veya uygulama kararı vermez. Yaşla birlikte disk değişiklikleri sık görülür. Önemli olan, görüntü ile muayene bulgusunun örtüşmesidir.",
          "Eski bir MR, yeni başlayan farklı bir yakınmayı açıklamayabilir. Hekim, tekrarın gerekip gerekmediğine klinik olarak karar verir.",
        ],
      },
      {
        id: "getat-secenekleri",
        title: "GETAT Seçeneklerinin Yeri",
        paragraphs: [
          "Akupunktur, kupa uygulamaları veya diğer tamamlayıcı yaklaşımlar bazı kişilerde ağrı yönetimine eşlik etmek üzere konuşulabilir. Kanıt düzeyi sınırlı olabilir ve kişiye göre değişir.",
          "Bu yöntemler fıtığı 'yerine yerleştirmez' veya 'yok etmez'. Dilimiz bu yüzden destek ve yaklaşım düzeyindedir. Cerrahi adaylığı olan kişi bu yazıdan 'ameliyattan kaçınma garantisi' çıkarmamalıdır.",
        ],
      },
      {
        id: "hareket",
        title: "Hareket ve Günlük Yük",
        paragraphs: [
          "Uzun oturma, ağır kaldırma ve ani dönme hareketleri bel yükünü artırabilir. İş düzeni ve ev içi bakım yükü konuşulmadan plan eksik kalır.",
          "Yalova-Çınarcık sahil yolundaki uzun oturuş, randevu gününde ağrıyı artırabilir. Bu pratik ayrıntı, klinik karar kadar yaşamın gerçeğidir.",
        ],
      },
      {
        id: "koordinasyon",
        title: "Fizik Tedavi ve Branş Koordinasyonu",
        paragraphs: [
          "Fizik tedavi ve rehabilitasyon izlemi varsa tamamlayıcı plan onunla çelişmemelidir. Aynı dönemde rastgele birden fazla agresif yöntem üst üste eklenmez.",
          "Nöroşirürji veya algoloji görüşü gerekiyorsa bu yönlendirme ertelenmez. Bütüncül yaklaşım, uzmanlıkları devre dışı bırakmaz.",
        ],
      },
      {
        id: "sonuc",
        title: "Bilgilendirme Sınırı",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Yazı, bel fıtığı olan herkese aynı paketi önermez.",
          "Karar; muayene, görüntüleme ve kişinin hedefleri birlikte ele alındıktan sonra verilir.",
        ],
      },
    ],
    sources: [commonSources.saglikBakanligiGetat, commonSources.nihAcupuncture, commonSources.ttbEtik],
    faqs: [
      {
        question: "Hacamat bel fıtığını yerine yerleştirir mi?",
        answer:
          "Hayır. Böyle bir iddia bilimsel ve yasal olarak uygun değildir. Kupa uygulaması yalnızca uygunluk halinde destek yaklaşımı olarak konuşulabilir.",
      },
      {
        question: "MR'da fıtık varsa mutlaka işlem gerekir mi?",
        answer:
          "Gerekmez. Karar muayene ve işlevsellikle birlikte verilir. Her görüntü aynı yaklaşımı gerektirmez.",
      },
      {
        question: "Yürümek zararlı mıdır?",
        answer:
          "Kişiye göre değişir. Tolere edilen yürüme çoğu planda konuşulur; ağrı ve nörolojik bulguya göre ayarlanır.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit seans yoktur. Uygun bulunan yaklaşımın izlemi klinik yanıta göre konuşulur.",
      },
      {
        question: "Ameliyat seçeneği kapanır mı?",
        answer:
          "Kapanmaz. Tamamlayıcı yaklaşımlar cerrahi kararı gizlemez veya ertelemek için bahane olmaz.",
      },
      {
        question: "Yalova'dan aynı gün uygulama yapılır mı?",
        answer:
          "Her zaman değil. Önce değerlendirme gerekir. Uygunluk yoksa işlem planlanmaz.",
      },
    ],
  }),
  createCluster({
    slug: "diyabet-hipertansiyon-butuncul-destek",
    title: "Diyabet ve Hipertansiyonda Bütüncül Destek",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    description:
      "Kan şekeri ve tansiyon izleminde yaşam biçimi desteği, ilaç güvenliği ve tamamlayıcı yaklaşımların sınırı.",
    lastUpdated: "2026-10-06",
    keywords: ["diyabet", "hipertansiyon", "izlem"],
    introduction: [
      "Diyabet ve hipertansiyon, ölçülebilir hedefleri olan kronik durumlardır. Bütüncül destek bu hedefleri iptal etmez; uyku, hareket, tuz-şeker yükü ve stres yönetimini görünür kılar.",
      "Yalova'daki okur için en kritik kural şudur: reçeteli ilaçlar hekim onayı olmadan kesilmez. Tamamlayıcı bir uygulama, 'ilaçsız yönetim' vaadi olarak sunulamaz.",
    ],
    sections: [
      {
        id: "olcum-ve-kayit",
        title: "Ölçüm ve Kayıt",
        paragraphs: [
          "Evde şeker ve tansiyon ölçümü, doğru teknikle yapıldığında izleme katkı sağlar. Cihaz kalibrasyonu, manşon boyutu ve ölçüm saati sonuçları etkiler. Yanlış teknikle alınan değerler yanıltıcı olabilir.",
          "Kayıtlar görüşmeye getirilmelidir. Tek bir yüksek değer panik, tek bir normal değer de gevşeme nedeni olmamalıdır. Eğilim daha önemlidir.",
        ],
      },
      {
        id: "yasam-bicimi",
        title: "Yaşam Biçimi Desteği",
        paragraphs: [
          "Beslenme düzeni, yürüyüş, uyku süresi ve tuz tüketimi sık konuşulan başlıklardır. Bunlar genel bilgilerdir; kişiye özel diyet listesi bu yazıdan çıkarılmamalıdır.",
          "Oruç, vardiya, gece çalışma veya yolculuk dönemlerinde ilaç saatleri etkilenebilir. Bu dönemler ilgili hekimle önceden konuşulmalıdır.",
        ],
      },
      {
        id: "tamamlayici-sinir",
        title: "Tamamlayıcı Yaklaşımların Sınırı",
        paragraphs: [
          "Akupunktur, hacamat veya ozon bazı kişilerde genel iyilik hali veya stres yükü bağlamında konuşulabilir. Bunlar kan şekerini veya tansiyonu 'düzelten kesin yöntem' değildir.",
          "Hipoglisemi riski, kanama riski veya kontrolsüz tansiyon varlığında bazı uygulamalar ertelenir. Güvenlik, yenilikten önce gelir.",
        ],
      },
      {
        id: "acil-durumlar",
        title: "Acil Durumlar",
        paragraphs: [
          "Göğüs ağrısı, konuşma bozukluğu, yüz kayması, ani görme kaybı veya bilinç bulanıklığında tamamlayıcı plan durur. Acil başvuru gerekir.",
          "Çok yüksek veya çok düşük şeker belirtilerinde evde bekleyerek 'doğal yöntem' denemek tehlikelidir.",
        ],
      },
      {
        id: "yalova-izlem",
        title: "Yalova'da İzlem Pratiği",
        paragraphs: [
          "Merkeze yakın oturan kişiler laboratuvar ve tansiyon kontrolünü daha kolay sürdürebilir. Uzak ilçelerden gelenlerde ise hangi ölçümlerin evde, hangilerinin klinikte yapılacağı konuşulur.",
          "Seyahat ve termal ziyaretleri sıvı kaybı ve tansiyon dalgalanması açısından ayrıca ele alınmalıdır.",
        ],
      },
      {
        id: "yazar-notu",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Metabolik hastalıklar branş takibi gerektirir.",
          "Yazının işlevi, tamamlayıcı seçenekleri doğru yere koymak ve ilaç güvenliğini korumaktır.",
        ],
      },
    ],
    sources: [commonSources.cdcDiabetes, commonSources.ttbEtik, commonSources.saglikBakanligiGetat],
    faqs: [
      {
        question: "Hacamat şekeri düşürür mü?",
        answer:
          "Kesin düşürür iddiası uygun değildir. Diyabet yönetiminin temeli tıbbi izlem, ilaç uyumu ve yaşam biçimidir.",
      },
      {
        question: "Tansiyon ilacını bırakabilir miyim?",
        answer:
          "Bu yazıdan çıkarılacak bir karar değildir. İlaç değişikliği yalnızca ilgili hekimle yapılır.",
      },
      {
        question: "Açlık şekeri bir kez yüksekse ne olur?",
        answer:
          "Tek değer tanı koymaz. Ölçüm tekniği, eşlik eden durumlar ve tekrarlayan kayıtlar birlikte yorumlanır.",
      },
      {
        question: "Yürüyüş herkese uygun mudur?",
        answer:
          "Kalp, eklem veya denge sorunu olanlarda plan değişir. Genel bir tempo tavsiyesi verilmez.",
      },
      {
        question: "Tamamlayıcı uygulama ilaçla aynı gün yapılır mı?",
        answer:
          "Uygunluk kişiye göre değişir. Kanama riski ve tansiyon durumu hekim tarafından incelenir.",
      },
      {
        question: "Bu yazı diyet listesi midir?",
        answer:
          "Değildir. Beslenme önerisi kişiye özeldir ve gerektiğinde diyetisyen/hekimle planlanır.",
      },
    ],
  }),
  createCluster({
    slug: "varis-hemoroid-suluk-tedavisinin-yeri",
    title: "Varis ve Hemoroid: Sülük Tedavisinin Yeri",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    description:
      "Varis ve hemoroid yakınmalarında tıbbi sülük uygulamasının sınırları, güvenlik ölçütleri ve uzmanlık değerlendirmesi.",
    lastUpdated: "2026-10-06",
    keywords: ["varis", "hemoroid", "sülük"],
    introduction: [
      "Tıbbi sülük uygulaması tarihsel olarak dolaşım ve doku yakınmalarında konuşulmuş bir yöntemdir. Modern çerçevede ise hijyen, kayıt, endikasyon ve kontrendikasyon olmadan ele alınamaz.",
      "Varis ve hemoroid farklı anatomik ve klinik sorunlardır. İkisini tek bir 'sülükle çözülür' cümlesinde birleştirmek yanıltıcıdır. Bu yazı, yöntemin yerini ve yer olmadığı durumları ayırır.",
    ],
    sections: [
      {
        id: "once-tani",
        title: "Önce Tanı ve Uzmanlık",
        paragraphs: [
          "Bacak damar yakınmalarında doppler inceleme ve kalp-damar cerrahisi veya ilgili uzmanlık görüşü gerekebilir. Hemoroidde ise genel cerrahi değerlendirmesi, kanama ve anemi riski açısından önemlidir.",
          "Sülük, bu değerlendirmelerin yerine geçecek bir tarama aracı değildir. Tanı belirsizken uygulama planlanmaz.",
        ],
      },
      {
        id: "guvenlik",
        title: "Güvenlik ve Kontrendikasyonlar",
        paragraphs: [
          "Kanama eğilimi, antikoagülan kullanımı, ciddi anemi, aktif enfeksiyon, bağışıklık baskılanması veya kontrolsüz hastalık durumlarında risk artar. Bu listeler kişiye göre genişleyebilir.",
          "Uygulama yalnızca tıbbi sülük ve yetkili ortamda, hekim kararıyla yapılabilir. Piyasadan rastgele sülük temin etmek kabul edilemez.",
        ],
      },
      {
        id: "kanit",
        title: "Kanıt Dilini Doğru Kullanmak",
        paragraphs: [
          "Bazı çalışmalarda belirli dolaşım veya doku tablolarında sülük uygulaması araştırılmıştır. Bu, her varis veya her hemoroid için yüksek düzeyde kanıt olduğu anlamına gelmez.",
          "'Yok eder', 'ameliyatı bitirir' veya 'garantili sonuç' ifadeleri kullanılamaz. Dilimiz destek ve değerlendirme düzeyindedir.",
        ],
      },
      {
        id: "alternatifler",
        title: "Diğer Seçeneklerle İlişki",
        paragraphs: [
          "Kompresyon, yaşam biçimi, girişimsel işlemler veya cerrahi seçenekler kişiye göre gündeme gelebilir. Sülük bunları gizli bir rakip gibi konumlandırılmaz.",
          "Kişi, daha az işlem isteyebilir; ancak isteğin güvenlikten önce gelmesi beklenemez.",
        ],
      },
      {
        id: "yalova-surec",
        title: "Yalova'daki Süreç",
        paragraphs: [
          "Yalova Merkez'deki görüşmede ilaç listesi, kanama öyküsü ve varsa cerrahi notlar öncelikle incelenir. Uygunluk yoksa bu açıkça söylenir.",
          "Uzak ilçeden gelen kişiler aynı gün işlem beklentisiyle gelmemelidir. Önce değerlendirme vardır.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar ve Sınır",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Yazı reklam değil, güvenlik odaklı bilgilendirmedir.",
          "Karar yalnızca yüz yüze değerlendirme ve gerektiğinde ilgili branş görüşüyle verilir.",
        ],
      },
    ],
    sources: [commonSources.saglikBakanligiGetat, commonSources.whoTraditional, commonSources.ttbEtik],
    faqs: [
      {
        question: "Sülük varisi yok eder mi?",
        answer:
          "Yok eder ifadesi kullanılmaz. Varis yönetiminde tanı, risk ve uzmanlık seçenekleri esastır.",
      },
      {
        question: "Evde sülük uygulanır mı?",
        answer:
          "Uygulanmamalıdır. Hijyen, tür güvenliği ve komplikasyon yönetimi ev ortamında sağlanamaz.",
      },
      {
        question: "Kan sulandırıcı kullanıyorsam ne olur?",
        answer:
          "Kanama riski artabilir. Bu durumda uygulama çoğu kez uygun görülmez; karar hekime aittir.",
      },
      {
        question: "Hemoroid kanamasında acil midir?",
        answer:
          "Şiddetli kanama, baş dönmesi veya bayılma hissinde acil başvuru gerekir. Bekleyerek sülük düşünülmez.",
      },
      {
        question: "Kaç uygulama gerekir?",
        answer:
          "Sabit sayı yoktur. Uygunluk yoksa sayı konuşulmaz bile.",
      },
      {
        question: "Bu yazı cerrahiye alternatif midir?",
        answer:
          "Değildir. Cerrahi adaylığı olan kişi ilgili uzmanlık değerlendirmesini ertelememelidir.",
      },
    ],
  }),
  createCluster({
    slug: "kilo-yonetiminde-ozon-hacamat-destegi",
    title: "Kilo Yönetiminde Ozon ve Hacamat Desteği",
    pillarSlug: "butuncul-saglik",
    category: "butuncul-saglik",
    description:
      "Sürdürülebilir kilo yönetiminde yaşam biçimi temeli ile ozon ve hacamat uygulamalarının sınırlı, destekleyici yeri.",
    lastUpdated: "2026-10-06",
    keywords: ["kilo yönetimi", "ozon", "hacamat"],
    introduction: [
      "Kilo yönetimi, tek bir işlem gününe sığdırılamaz. Beslenme düzeni, hareket, uyku, ilaçlar ve varsa hormonal etkenler birlikte okunur. Ozon veya hacamat bu temelin yerine geçemez.",
      "Yalova'da sık sorulan 'şu uygulamayla kilo verir miyim' sorusu, yanlış bir başlangıçtır. Doğru başlangıç, kilo değişiminin nedenlerinin ve güvenlik sınırlarının konuşulmasıdır.",
    ],
    sections: [
      {
        id: "temel-yonetim",
        title: "Temel Yönetim",
        paragraphs: [
          "Enerji alımı ve harcaması, kas kaybını azaltan hareket ve uyku düzeni kilo yönetiminin omurgasıdır. Bunlar slogan değil, izlenmesi gereken süreçlerdir.",
          "Hızlı ve aşırı kısıtlayıcı programlar, özellikle diyabet veya tansiyon izlemi olan kişilerde riskli olabilir. Kişiye özel plan bu yazıdan kopyalanmamalıdır.",
        ],
      },
      {
        id: "ozon-siniri",
        title: "Ozon Uygulamasının Sınırı",
        paragraphs: [
          "Ozon uygulamaları belirli tıbbi çerçevelerde konuşulur; kilo kaybının ana yöntemi değildir. Uygunluk, yöntem ve riskler hekim tarafından anlatılmadan işlem planlanmaz.",
          "İnternetteki 'detoks ile yağ yakımı' anlatıları bilimsel dil değildir. Bu yazı o anlatıyı tekrarlamaz.",
        ],
      },
      {
        id: "hacamat-siniri",
        title: "Hacamat Uygulamasının Sınırı",
        paragraphs: [
          "Hacamat, GETAT mevzuatı içinde yetkili ortam ve hekim kararıyla ele alınır. Kilo vermek için evde veya izinsiz ortamda uygulanamaz.",
          "Kanama riski, anemi ve kullanılan ilaçlar uygunluğu değiştirir. 'Toksin atarak zayıflama' iddiası kullanılmaz.",
        ],
      },
      {
        id: "izlem",
        title: "İzlem ve Gerçekçi Hedef",
        paragraphs: [
          "Kilo, bel çevresi, enerji ve laboratuvar izlemi birlikte anlam taşır. Tek bir tartı değeri başarı veya başarısızlık ilan etmez.",
          "Yalova Merkez'e yakın kişiler daha düzenli kontrol konuşabilir. Uzak ilçelerden gelenlerde ara izlem telefon veya ilgili hekimle sürdürülebilir; bu bir uzaktan tedavi vaadi değildir.",
        ],
      },
      {
        id: "psiko-sosyal",
        title: "Psikososyal Boyut",
        paragraphs: [
          "Yeme düzeni, stres ve uyku birbirinden kopuk değildir. Gerekirse ruh sağlığı veya diyetisyen desteği konuşulur.",
          "Utandırma dili kullanılmaz. Yönetim, kişinin günlük gerçekliğiyle kurulur.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Yazı, ozon veya hacamatı zayıflama ürünü gibi sunmaz.",
          "Karar, metabolik güvenlik ve kişinin mevcut takibi incelenmeden verilmez.",
        ],
      },
    ],
    sources: [commonSources.whoObesity, commonSources.saglikBakanligiGetat, commonSources.ttbEtik],
    faqs: [
      {
        question: "Hacamatla kilo verilir mi?",
        answer:
          "Hacamat kilo kaybının ana yöntemi değildir. Temel yönetim yaşam biçimi ve gerektiğinde tıbbi izlemdir.",
      },
      {
        question: "Ozon yağ yakar mı?",
        answer:
          "Yağ yakar iddiası uygun değildir. Ozon yalnızca belirli tıbbi çerçevede ve uygunluk halinde konuşulur.",
      },
      {
        question: "Kaç seansta sonuç alınır?",
        answer:
          "Sonuç vaadi verilmez. Seans sayısı ve izlem kişiye göre değişir; uygunluk yoksa plan kurulmaz.",
      },
      {
        question: "Diyet haplarıyla birlikte uygulanır mı?",
        answer:
          "Kontrolsüz ürünler ek risk yaratabilir. Tüm kullanılan maddeler hekimle paylaşılmalıdır.",
      },
      {
        question: "Gebelikte bu yaklaşımlar konuşulur mu?",
        answer:
          "Gebelik ve emzirme dönemleri ayrı değerlendirme gerektirir. Genel uygunluk varsayılamaz.",
      },
      {
        question: "Bu yazı kişiye özel menü midir?",
        answer:
          "Değildir. Beslenme planı gerektiğinde ilgili uzmanlıkla oluşturulur.",
      },
    ],
  }),
];
