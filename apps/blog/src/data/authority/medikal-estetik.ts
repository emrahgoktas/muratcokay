import { commonSources, createCluster, createPillar } from "./compose";

export const pillar = createPillar({
  slug: "medikal-estetik",
  title: "Medikal Estetik Rehberi",
  description:
    "Yalova'da botoks, dolgu, sıvı yüz germe, lazer, mezoterapi ve saç dökülmesi yaklaşımlarını bilimsel sınırlar ve etik bilgilendirme dilinde anlatan kapsamlı rehber.",
  lastUpdated: "2026-10-06",
  clusterSlugs: [
    "sivi-yuz-germe-hacim-vermeden-sikilasma",
    "dogal-gorunumlu-dolgu-uygulamalari",
    "sac-dokulmesinde-mezoterapi-prp",
    "yuz-lekeleri-matlik-bilimsel-yaklasimlar",
    "botoks-kimler-icin-uygundur",
    "yalovada-botoks-yapan-yerler",
    "yalovada-dolgu-yapan-yerler",
    "yalovada-sivi-yuz-germe-yapan-yerler",
    "yalovada-leke-tedavisi-yapan-yerler",
    "yalovada-sac-dokulmesi-tedavisi-yapan-yerler",
    "yalovada-mezoterapi-yapan-yerler",
    "yalovada-lazer-yapan-yerler",
    "yalovada-ip-aski-yapan-yerler",
  ],
  introduction: [
    "Medikal estetik, yüz ve cilt görünümüne yönelik hekim değerlendirmesiyle planlanan uygulamaları kapsar. Yalova'da bu alana ilgi artarken bilgi kirliliği de artmıştır. Bu rehber, botoks, dolgu, sıvı yüz germe, leke-matlık yönetimi ve saç dökülmesi başlıklarını abartısız bir dille açıklar. Amaç, kişinin hekimle daha nitelikli soru sormasını sağlamaktır.",
    "Estetik amaçlı bir işlem bile tıbbi işlemdir. Anatomi, kullanılan madde, uygulama derinliği, hijyen ve olası etkiler evde izlenen videolarla öğrenilemez. 'Doğal görünüm' hedefi, daha az madde kullanmak kadar doğru yer, doğru aday ve doğru beklenti demektir. Her yüz aynı planı kaldırmaz.",
    "Yürürlükteki tanıtım kuralları hasta yorumu, öncesi-sonrası görsel, fiyat ve üstünlük iddiasını yasaklar. Bu sayfada bu unsurlar yoktur. Bunun yerine değerlendirme sırası, kimler için uygun olmayabileceği ve iyileşme sürecinin kişiye göre değişebileceği anlatılır.",
    "Rehberin alt yazıları her yöntemi ayrı derinleştirir. Buradaki metin ise ortak omurgayı kurar: önce yüz ve cilt analizi, sonra seçeneklerin sınırları, ardından rıza ve izlem. Medikal estetik, bütüncül sağlıktan kopuk değildir; uyku, güneş, sigara ve ilaçlar sonucu etkiler.",
  ],
  sections: [
    {
      id: "degerlendirme",
      title: "Yüz ve Cilt Değerlendirmesi",
      paragraphs: [
        "İyi bir plan, kişinin rahatsız olduğu tek çizgiye bakmakla başlamaz. Mimik alışkanlığı, cilt kalınlığı, yağ yastıkçıklarının dağılımı, asimetri ve diş-çene ilişkisi birlikte okunur. Fotoğraf çekmek yerine ışık altında durağan ve hareketli yüz incelenir.",
        "Cilt tipi, leke eğilimi, akne öyküsü ve daha önceki işlemler sonraki seçimi değiştirir. Lazer veya kimyasal soyma düşünülen bir ciltte aktif enfeksiyon veya taze bronzlaşma varsa plan ertelenebilir. Acele, komplikasyon riskini artırır.",
        "Kişinin beklentisi ölçülür. 'Hiç mimik kalmasın' isteği ile 'yalnızca yorgun görünümü azaltayım' isteği aynı botoks planı değildir. Beklenti uyuşmazlığı, teknikten bağımsız memnuniyetsizlik üretir. Bu nedenle görüşmenin ilk bölümü dinlemektir.",
      ],
    },
    {
      id: "botoks-ve-dolgu",
      title: "Botoks ve Dolgu: Farklı Araçlar",
      paragraphs: [
        "Botulinum toksini, belirli kasların kasılma gücünü geçici olarak azaltmak üzere kullanılır. Dolgu ise hacim ve kontur için farklı bir araçtır. Birinin uygun olduğu yerde diğeri gereksiz, hatta zararlı olabilir. Bu ayrım, 'estetik iğne' diye tekilleştirilen anlatıları bozar.",
        "Doğal görünümlü dolgu, yüze yabancı bir maske eklemek değil; kaybolan desteği ölçülü biçimde konuşmaktır. Aşırı hacim, ışıkta ve hareket halinde daha belirgin durur. Bu yüzden plan anatomik bölgelere ve kişinin yaşına göre sınırlanır.",
        "Kimler için uygun olmadığı en az kimler için konuşulabileceği kadar önemlidir. Gebelik, emzirme, aktif enfeksiyon, bazı nöromüsküler hastalıklar veya gerçekçi olmayan beklenti, işlemi erteletebilir. Ayrıntılar ilgili cluster yazılardadır.",
      ],
    },
    {
      id: "sivi-yuz-germe",
      title: "Hacim Vermeden Sıkılaşma Arayışı",
      paragraphs: [
        "Sıvı yüz germe başlığı, hacim artırmadan cilt kalitesi ve sıkılık görünümünü konuşmak isteyen kişiler için kullanılır. Bu, cerrahi yüz germenin eşdeğeri değildir ve öyle sunulamaz. Yöntem seçimi cilt rezervine, elastikiyete ve kişinin tolere edebileceği süreçlere bağlıdır.",
        "Bazı kişilerde asıl ihtiyaç hacim değil, cilt kalitesidir; bazılarında ise hacim eksikliği sıkılık arayışını taklit eder. Bu ayrım yapılmadan uygulanan işlem, yüzü şişirmeden sorun çözmez; bazen yeni bir dengesizlik ekler.",
        "İyileşme süreci kişiden kişiye değişir. Sosyal hayata dönüş süresi vaat edilmez; olası şişlik, kızarıklık veya hassasiyet önceden anlatılır. Yalova'dan aynı gün dönülecek yol planı da bu anlatının parçasıdır.",
      ],
    },
    {
      id: "leke-matlik-sac",
      title: "Leke, Matlık ve Saç Dökülmesi",
      paragraphs: [
        "Yüzde leke ve mat görünüm; güneş, hormonal dönem, cilt bariyeri ve yaşlanma ile ilişkilenebilir. Tek bir krem veya tek bir cihaz her leke türünü yönetmez. Önce lekenin tipi anlaşılır, sonra güneşten korunma gibi temel adımlar konuşulur.",
        "Saç dökülmesinde mezoterapi ve PRP yaklaşımları ancak dökülmenin olası nedenleri araştırıldıktan sonra gündeme gelir. Demir eksikliği, tiroit, ilaçlar veya genetik yatkınlık yok sayılırsa işlem beklenen katkıyı sunmayabilir.",
        "Hem cilt hem saçta 'bitirir, yok eder' dili kullanılmaz. Görünüm değişimi kademeli olabilir, olmayabilir veya sınırlı kalabilir. Bilgilendirilmiş rıza, bu belirsizliği saklamamayı gerektirir.",
      ],
    },
    {
      id: "guvenlik",
      title: "Güvenlik, Rıza ve İzlem",
      paragraphs: [
        "Her işlemde kullanılan ürünün niteliği, son kullanma bilgisi ve uygulama ortamının hijyeni temeldir. Kişi, ne uygulandığını sorma hakkına sahiptir. Anlaşılmayan bir onam, onam değildir.",
        "Olası etkiler arasında şişlik, morluk, asimetri, enfeksiyon ve nadir ama ciddi damarsal komplikasyonlar konuşulmalıdır. Korkutmak için değil, seçebilsin diye anlatılır. Acil durumda nereye başvurulacağı da planın parçasıdır.",
        "İzlem, işlemin bittiği an değil sürecin parçasıdır. Erken dönemde beklenmeyen bir bulgu olursa beklenmemeli, iletişim kurulmalıdır. Yalova dışından gelen kişilerde bu iletişim yolu randevu günü netleştirilir.",
      ],
    },
    {
      id: "butuncul-baglanti",
      title: "Medikal Estetik ve Bütüncül Bağlam",
      paragraphs: [
        "Uyku bozukluğu, kilo değişimi, sigara ve güneş hasarı cilt yaşlanmasıyla ilişkilidir. Yalnızca işleme odaklanıp bu etkenleri yok saymak, planı zayıf bırakır. Bütüncül sağlık rehberi bu bağlantıyı geniş anlatır.",
        "Bazı kişiler estetik talep ederken aslında yorgunluk, ağrı veya özgüven yükünü tarif eder. Hekim, işlemin bu yükü çözmeyeceğini dürüstçe söyleyebilmelidir. Etik olan, her talebi işleme çevirmemektir.",
        "GETAT uygulamaları ile medikal estetik aynı seansta otomatik birleştirilmez. Her birinin kendi uygunluk ölçütü vardır. Birlikte düşünülecekse güvenlik önce gelir.",
      ],
    },
    {
      id: "yalova-pratik",
      title: "Yalova Pratiğinde Planlama",
      paragraphs: [
        "Yalova Merkez'deki klinik, ilçe ve komşu il bağlantıları nedeniyle farklı yol süreleriyle çalışır. Sosyal olay öncesi acele işlem talepleri, şişlik ve izlem payı bırakılmadan kabul edilmemelidir.",
        "Termal veya yaz sezonu yoğunluğu randevu saatini etkiler. Güneş hasarı riski yüksek dönemde bazı cilt işlemleri ertelenebilir. Bu erteleme keyfi değil, güvenlik tedbiridir.",
        "Kişi, başka kentte başlamış bir işleme ait belirsiz ürün bilgisiyle geldiğinde önce kayıtlar netleştirilir. Bilinmeyen madde üzerine ek işlem yapmak risklidir.",
      ],
    },
    {
      id: "yasal-etik",
      title: "Yasal ve Etik Çerçeve",
      paragraphs: [
        "Hekimlik etiği, gerçekçi olmayan vaatten kaçınmayı gerektirir. Filtreli sosyal medya görselleri tıbbi sonuç değildir. Bu rehber o görsellerle yarışmaz.",
        "Fiyat, paket ve 'ücretsiz muayene garantisi' dili kullanılmaz. Bilgi verilir, karar kişi ve hekim arasında kalır.",
        "Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanan bu metin, Yalova'daki okura sakin bir sözlük ve sıra sunar. Uygulama kararı metinden değil, muayeneden çıkar.",
      ],
    },
  ],
  faqs: [
    {
      question: "Botoks ve dolgu aynı şey midir?",
      answer:
        "Değildir. Botoks kas hareketini geçici azaltmaya, dolgu ise hacim ve kontura yönelik farklı araçlardır.",
    },
    {
      question: "Doğal görünüm garanti midir?",
      answer:
        "Garanti edilmez. Anatomi, ürün, teknik ve iyileşme süreci sonucu etkiler. Beklenti görüşmede netleştirilir.",
    },
    {
      question: "Aynı gün tüm işlemler yapılır mı?",
      answer:
        "Her zaman değil. Cilt durumu, işlem yükü ve yol planı birlikte değerlendirilir.",
    },
    {
      question: "Leke tamamen kaybolur mu?",
      answer:
        "Kaybolur iddiası uygun değildir. Leke tipi ve güneş koruması yönetimin parçasıdır.",
    },
    {
      question: "Saç dökülmesinde yalnızca mezoterapi yeterli midir?",
      answer:
        "Nedenler araştırılmadan yeterli olduğu söylenemez. Eksiklik veya hastalık varsa önce onlar ele alınır.",
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
    slug: "sivi-yuz-germe-hacim-vermeden-sikilasma",
    title: "Sıvı Yüz Germe: Hacim Vermeden Sıkılaşma",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    description:
      "Hacim artırmadan cilt kalitesi ve sıkılık görünümünü konuşan yaklaşımların kapsamı, adaylık ve sınırları.",
    lastUpdated: "2026-10-06",
    keywords: ["sıvı yüz germe", "cilt kalitesi"],
    introduction: [
      "Sıvı yüz germe ifadesi, cerrahi germenin yumuşak bir kopyası gibi anlaşılmamalıdır. Bu yazı, Yalova'da hacim vermeden sıkılaşma arayan kişilere yöntemin ne olduğunu ve ne olmadığını anlatır.",
      "Amaç, yüzü şişirmeden cilt kalitesini konuşmaktır. Uygunluk; cilt rezervi, yaş, hastalıklar ve beklenti netleşmeden belirlenemez.",
    ],
    sections: [
      {
        id: "nedir",
        title: "Bu Yaklaşım Nedir?",
        paragraphs: [
          "Hacim vermeden sıkılaşma arayışı, genellikle cilt kalitesi, nem ve destek dokusu üzerine yoğunlaşır. Kullanılacak yöntem kişiye göre değişir ve tek bir ürün adı bu yazının konusu değildir.",
          "Cerrahi yüz germe ile kıyaslanamaz. Kıyas, yanlış beklenti üretir. Bu nedenle dilimiz yaklaşım ve değerlendirme düzeyindedir.",
        ],
      },
      {
        id: "kimler",
        title: "Kimler İçin Konuşulabilir?",
        paragraphs: [
          "Hafif gevşeme görünümü, cilt kalitesinde azalma ve hacim artışı istemeyen kişilerde seçenekler konuşulabilir. Belirgin sarkma ve anatomik destek kaybında bu yaklaşım yetersiz kalabilir.",
          "Aktif cilt enfeksiyonu, kontrolsüz hastalık veya gerçekçi olmayan beklenti planı durdurur. 'Düğüne iki gün kala her şey bitsin' talebi güvenlikle çelişebilir.",
        ],
      },
      {
        id: "surec",
        title: "Süreç Nasıl İşler?",
        paragraphs: [
          "Önce yüz analizi ve fotoğrafsız, ışık altında değerlendirme yapılır. Sonra olası etkiler, iyileşme payı ve alternatifler anlatılır.",
          "İşlem sonrası şişlik veya hassasiyet olabilir. Sosyal hayata dönüş süresi kişiye göre değişir; kesin takvim vaat edilmez.",
        ],
      },
      {
        id: "sinirlar",
        title: "Sınırlar",
        paragraphs: [
          "Bu yaklaşım yaşlanmayı durdurmaz. Güneş, sigara ve uyku alışkanlıkları sonucu etkiler.",
          "Dolgu ihtiyacı olan bir yüzde yalnızca sıkılaşma konuşmak, asıl eksikliği gölgeleyebilir. Hekim bu ayrımı yapmakla yükümlüdür.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova'dan Planlama",
        paragraphs: [
          "Termal veya yaz döneminde güneş hasarı riski yüksekse bazı adımlar ertelenebilir. Yolculuk günü ağır bir program dayatılmaz.",
          "Kontrol ihtiyacı varsa bu, randevu günü konuşulur. Uzak ilçeden gelen kişiler için izlem yolu netleştirilir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Yazı ürün reklamı değildir.",
          "Karar muayene ve rıza sürecinden sonra verilir.",
        ],
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    faqs: [
      {
        question: "Sıvı yüz germe ameliyatsız yüz germe midir?",
        answer:
          "Cerrahi yüz germenin eşdeğeri değildir. Bu karşılaştırma yanıltıcıdır.",
      },
      {
        question: "Hacim artar mı?",
        answer:
          "Amaç hacim artırmak değil, cilt kalitesi ve sıkılık görünümünü konuşmaktır. Yöntem kişiye göre değişir.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit sayı yoktur. Cilt durumu ve seçilen yaklaşıma göre konuşulur.",
      },
      {
        question: "Aynı gün işe dönülür mü?",
        answer:
          "Kişiye göre değişir. Şişlik ve hassasiyet payı bırakılmalıdır.",
      },
      {
        question: "Herkese uygulanır mı?",
        answer:
          "Hayır. Enfeksiyon, hastalık ve beklenti uygunluğu hekim belirler.",
      },
      {
        question: "Kalıcı mıdır?",
        answer:
          "Kalıcılık vaat edilmez. Yaşlanma ve yaşam biçimi süreci etkiler.",
      },
    ],
  }),
  createCluster({
    slug: "dogal-gorunumlu-dolgu-uygulamalari",
    title: "Doğal Görünümlü Dolgu Uygulamaları",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    description:
      "Yüz anatomisine saygılı, ölçülü dolgu planlaması, adaylık ölçütleri ve olası etkiler hakkında genel bilgi.",
    lastUpdated: "2026-10-06",
    keywords: ["dolgu", "yüz anatomisi"],
    introduction: [
      "Doğal görünümlü dolgu, daha fazla ürün kullanmak değil; yüzün kendi oranlarına saygı duymaktır. Bu yazı Yalova'daki okura planlama mantığını anlatır.",
      "Dolgu tıbbi bir işlemdir. Damar anatomisi, ürün seçimi ve acil durum hazırlığı olmadan ele alınamaz.",
    ],
    sections: [
      {
        id: "anatomi",
        title: "Anatomi ve Oran",
        paragraphs: [
          "Yüz, bölgelere ayrılmış bir haritadır. Bir bölgeye eklenen hacim, komşu bölgelerin gölgesini değiştirir. Bu yüzden 'sadece buraya azıcık' talebi bile tüm yüzle birlikte düşünülür.",
          "Asimetri tamamen silinmeyebilir. Amaç, hareket halinde de inandırıcı duran bir denge aramaktır.",
        ],
      },
      {
        id: "adaylik",
        title: "Adaylık",
        paragraphs: [
          "Aktif enfeksiyon, bazı otoimmün durumlar, gebelik-emzirme ve gerçekçi olmayan beklenti planı durdurabilir. Daha önce geçirilmiş işlemler ve bilinen ürünler mutlaka paylaşılmalıdır.",
          "Migren, diş tedavisi veya yakın zamanda geçirilmiş cerrahi, zamanlamayı değiştirebilir.",
        ],
      },
      {
        id: "risk",
        title: "Olası Etkiler ve Riskler",
        paragraphs: [
          "Şişlik, morluk ve geçici asimetri sık konuşulan etkilerdir. Nadiren damar tıkanıklığı gibi ciddi komplikasyonlar olabilir. Bu riskler saklanmaz.",
          "Kişi, erken uyarı bulgularını ve iletişim yolunu işlem öncesi öğrenmelidir.",
        ],
      },
      {
        id: "dogallik",
        title: "Doğallık Ne Demektir?",
        paragraphs: [
          "Doğallık, fotoğrafta değil günlük ışıkta ve konuşurken bozulmayan bir görünümdür. Aşırı dolgu, gülüşü ve bakışı değiştirebilir.",
          "Hekim, talebi olduğu gibi uygulamak zorunda değildir. Etik olan, yüzü korumaktır.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova Pratiği",
        paragraphs: [
          "Sosyal olay öncesi acele randevu, şişlik payını yok saydırır. Plan, olay takvimine göre değil güvenliğe göre kurulur.",
          "Başka klinikte başlanmış belirsiz işlemler üzerine ekleme yapılmayabilir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı marka veya ürün reklamı içermez; karar muayeneye aittir.",
        ],
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    faqs: [
      {
        question: "Dolgu kalıcı mıdır?",
        answer:
          "Kullanılan maddeye ve bölgeye göre süre değişir. Kalıcılık vaat edilmez.",
      },
      {
        question: "Botoksla aynı anda yapılır mı?",
        answer:
          "Bazen aynı planda konuşulabilir. Yüz durumu ve işlem yükü hekime kalır.",
      },
      {
        question: "Morluk olur mu?",
        answer:
          "Olabilir. Süre ve şiddet kişiden kişiye değişir.",
      },
      {
        question: "Spor ne zaman yapılır?",
        answer:
          "Kişiye ve işleme göre değişir. Genel bir saat verilmez; görüşmede konuşulur.",
      },
      {
        question: "Herkese dolgu gerekir mi?",
        answer:
          "Gerekmez. Bazı yüzlerde hacim değil cilt kalitesi veya botoks daha uygun olabilir.",
      },
      {
        question: "Bu yazı fiyat bilgisi içerir mi?",
        answer:
          "İçermez. Fiyat bilgisi yasal olarak bu içerikte yer almaz.",
      },
    ],
  }),
  createCluster({
    slug: "sac-dokulmesinde-mezoterapi-prp",
    title: "Saç Dökülmesinde Mezoterapi ve PRP",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    description:
      "Saç dökülmesinin olası nedenleri ile mezoterapi ve PRP yaklaşımlarının değerlendirme sırası.",
    lastUpdated: "2026-10-06",
    keywords: ["saç dökülmesi", "mezoterapi", "PRP"],
    introduction: [
      "Saç dökülmesi tek nedenli değildir. Bu yazı, Yalova'da mezoterapi ve PRP duyan kişilere önce neden araştırmasının geldiğini anlatır.",
      "İşlemler, eksiklik veya hastalık yok sayılırsa beklenen katkıyı sunmayabilir. Dilimiz destek yaklaşımıdır; saçı 'geri getirir' iddiası kullanılmaz.",
    ],
    sections: [
      {
        id: "nedenler",
        title: "Önce Nedenler",
        paragraphs: [
          "Demir, tiroit, ilaçlar, doğum sonrası dönem, stres yükü ve genetik yatkınlık sık konuşulan başlıklardır. Hekim hangilerinin araştırılacağına karar verir.",
          "Kadın ve erkek tip dökülme farklı seyredebilir. Aynı işlemi herkese uygulamak doğru plan değildir.",
        ],
      },
      {
        id: "mezoterapi-prp",
        title: "Mezoterapi ve PRP'nin Yeri",
        paragraphs: [
          "Mezoterapi, saçlı deriye yönelik destek içeriklerin kişiye göre konuşulduğu bir yaklaşımdır. PRP ise kişinin kendi kan bileşenleriyle planlanan ayrı bir seçenektir.",
          "İkisi de her dökülme türünde ilk veya tek seçenek değildir. Aktif enfeksiyon, kanama bozukluğu veya gerçekçi olmayan beklenti planı durdurur.",
        ],
      },
      {
        id: "surec",
        title: "Süreç ve İzlem",
        paragraphs: [
          "Saç döngüsü yavaştır. Kısa sürede dramatik değişim beklenmemelidir. İzlem fotoğrafı yerine hekim muayenesi ve tarama öyküsü daha güvenlidir.",
          "Seans aralığı sabitleştirilmez. Yanıt, tahammül ve laboratuvar bulgularına göre konuşulur.",
        ],
      },
      {
        id: "yasam",
        title: "Yaşam Biçimi",
        paragraphs: [
          "Sıkı saç çekme, yüksek ısı, yetersiz protein alımı veya düzensiz uyku süreci etkileyebilir. Bunlar suçlama değil, konuşulabilir etkenlerdir.",
          "Takviye ürünler rastgele eklenmemelidir. Etkileşim ve gereksiz kullanım riski vardır.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova'da Plan",
        paragraphs: [
          "Laboratuvar için ayrı gün gerekebilir. Uzak ilçeden gelen kişiler bunu yol planına eklemelidir.",
          "Aynı gün hem kapsamlı tetkik hem işlem her zaman uygun olmayabilir.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Saç cerrahisi adaylığı olan kişi ilgili uzmanlık değerlendirmesini ertelememelidir.",
        ],
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEtik, commonSources.cdcDiabetes],
    faqs: [
      {
        question: "PRP saçı geri getirir mi?",
        answer:
          "Geri getirir iddiası uygun değildir. Katkı kişiye ve dökülme nedenine göre değişebilir.",
      },
      {
        question: "Mezoterapi acıtır mı?",
        answer:
          "Duyum kişiden kişiye değişir. Konfor önlemleri görüşmede konuşulur.",
      },
      {
        question: "Kadınlarda da uygulanır mı?",
        answer:
          "Uygunluk cinsiyetten çok nedene ve sağlık durumuna bağlıdır.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit sayı yoktur. İzlem bulgularına göre planlanır.",
      },
      {
        question: "Vitamin içsem yeterli olur mu?",
        answer:
          "Eksiklik yoksa rastgele vitamin yeterli veya gerekli olmayabilir.",
      },
      {
        question: "Bu yazı tanı mıdır?",
        answer:
          "Değildir. Tanı ve plan hekim değerlendirmesiyle konur.",
      },
    ],
  }),
  createCluster({
    slug: "yuz-lekeleri-matlik-bilimsel-yaklasimlar",
    title: "Yüz Lekeleri ve Matlık: Bilimsel Yaklaşımlar",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    description:
      "Yüzde leke ve mat görünümün olası nedenleri, güneş koruması ve hekim değerlendirmesiyle konuşulan yaklaşımlar.",
    lastUpdated: "2026-10-06",
    keywords: ["yüz lekeleri", "matlık", "güneş"],
    introduction: [
      "Leke ve matlık, tek bir cilt tipinin sorunu değildir. Güneş, bariyer bozulması, hormonal dönem ve yaşlanma sık kesişir. Bu yazı Yalova'daki okura sıra öğretir: önce tür, sonra koruma, sonra işlem.",
      "Lazer veya soyma seçenekleri her leke için uygun değildir. Yanlış işlem lekeyi belirginleştirebilir.",
    ],
    sections: [
      {
        id: "turler",
        title: "Leke Türünü Anlamak",
        paragraphs: [
          "Epidermal ve dermal lekeler farklı davranır. Melazma, güneş lekesi ve inflamasyon sonrası leke aynı planı paylaşmaz.",
          "Kendi kendine teşhis yanıltıcıdır. Hekim, ışık altında ve gerekirse ek inceleme ile ayrım yapar.",
        ],
      },
      {
        id: "gunes",
        title: "Güneş ve Bariyer",
        paragraphs: [
          "Güneşten korunma, işlemden bağımsız temel bir yönetim başlığıdır. Koruma yoksa yapılan işlemlerin katkısı zayıflayabilir.",
          "Yalova'nın sahil ve termal yaşamı, beklenmedik birikimli güneş maruziyeti yaratabilir. Bu pratik ayrıntı planda yer alır.",
        ],
      },
      {
        id: "yaklasimlar",
        title: "Konuşulabilecek Yaklaşımlar",
        paragraphs: [
          "Topikal bakım, cihaz temelli işlemler veya destekleyici uygulamalar leke tipine göre ele alınabilir. Hepsi herkese aynı anda uygulanmaz.",
          "Aktif enfeksiyon, gebelik veya taze bronzlaşma planı erteleyebilir.",
        ],
      },
      {
        id: "beklenti",
        title: "Beklenti Yönetimi",
        paragraphs: [
          "Lekenin tamamen silineceği söylenemez. Hedef, görünümün daha düzenli hale gelmesi ve yeni hasarın azaltılması olabilir.",
          "Matlık, yalnızca leke değil nem ve ışık yansımasıyla da ilişkilidir. Tek işlemle 'cam cilt' vaadi yoktur.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova'da Zamanlama",
        paragraphs: [
          "Yaz ve tatil dönemlerinde bazı işlemler ertelenebilir. Bu, kişiyi cezalandırmak değil, leke riskini artırmamaktır.",
          "Kontrol aralığı cilt yanıtına göre konuşulur.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Dermatolojik hastalık şüphesinde ilgili uzmanlık değerlendirmesi geciktirilmez.",
        ],
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEtik, commonSources.kulturTermal],
    faqs: [
      {
        question: "Lazer her lekeyi alır mı?",
        answer:
          "Alır iddiası uygun değildir. Leke tipi ve cilt rengi uygunluğu belirler.",
      },
      {
        question: "Güneş kremi yeterli midir?",
        answer:
          "Temel başlıktır ama tek başına her leke türünü yönetmeyebilir.",
      },
      {
        question: "Ev tipi cihazlar güvenli midir?",
        answer:
          "Kontrolsüz kullanım lekeyi artırabilir. Hekim onayı olmadan agresif deneme önerilmez.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Sabit sayı yoktur. Yanıt ve tahammül izlenerek konuşulur.",
      },
      {
        question: "Yazın işlem yapılır mı?",
        answer:
          "Kişiye ve işleme göre değişir. Güneş riski yüksekse ertelenebilir.",
      },
      {
        question: "Bu yazı bakım tarifesi midir?",
        answer:
          "Değildir. Ürün ve işlem seçimi muayeneye aittir.",
      },
    ],
  }),
  createCluster({
    slug: "botoks-kimler-icin-uygundur",
    title: "Botoks: Kimler İçin Uygundur?",
    pillarSlug: "medikal-estetik",
    category: "estetik",
    description:
      "Botulinum toksini uygulamalarında adaylık, uygun olmayan durumlar, beklenti ve Yalova'da değerlendirme süreci.",
    lastUpdated: "2026-10-06",
    keywords: ["botoks", "mimik"],
    introduction: [
      "Botoks sözcüğü günlük dilde genelleşmiştir; tıbbi karşılığı ise belirli kas gruplarına yönelik geçici bir yaklaşımdır. Bu yazı, kimler için konuşulabileceğini ve kimler için ertelenmesi gerektiğini anlatır.",
      "Amaç yüzü hareketsiz bırakmak değildir. Ölçülü plan, ifadeyi korumaya çalışır. Sonuç vaadi yoktur.",
    ],
    sections: [
      {
        id: "nasil-calisir",
        title: "Nasıl Çalışır?",
        paragraphs: [
          "Botulinum toksini, hedef kasın kasılma gücünü geçici azaltarak mimik çizgilerinin görünümünü konuşmayı sağlar. Etki süresi kişiden kişiye değişir.",
          "Yanlış kas seçimi, istenmeyen asimetri veya ağır kapak görünümü yaratabilir. Bu nedenle anatomi bilgisi vazgeçilmezdir.",
        ],
      },
      {
        id: "uygunluk",
        title: "Uygunluk ve Dışlama",
        paragraphs: [
          "Gebelik, emzirme, uygulama bölgesinde enfeksiyon, bazı nöromüsküler hastalıklar ve toksine duyarlılık öyküsü planı durdurabilir.",
          "Gerçekçi olmayan 'hiç çizgi kalmasın' beklentisi de adaylık açısından sorunludur. Yüzün hareketi kimliğin parçasıdır.",
        ],
      },
      {
        id: "surec",
        title: "Süreç",
        paragraphs: [
          "Değerlendirme, mimik yaptırılarak yapılır. İşlem sonrası ilk günlerde ovuşturma ve ağır efor konusunda kişiye özel anlatım yapılır.",
          "Etkinin belirginleşmesi zaman alır. Erken 'olmamış' hükmü yanıltıcı olabilir. Kontrol ihtiyacı hekim belirler.",
        ],
      },
      {
        id: "dolgu-ayrimi",
        title: "Dolgu ile Ayrım",
        paragraphs: [
          "Hacim kaybı botoksla düzelmez. Çizgi derinliği yerçekimi ve hacimle de ilişkilidir. Yanlış araç seçimi doğal görünümü bozar.",
          "Bazen iki yaklaşım farklı zamanlarda konuşulur. Otomatik kombinasyon yoktur.",
        ],
      },
      {
        id: "yalova",
        title: "Yalova'da Zamanlama",
        paragraphs: [
          "Önemli bir toplantı veya tören öncesi acele işlem, düzeltme için yeterli süre bırakmaz. Takvim güvenliğe göre kurulur.",
          "İlçe dışından gelen kişiler aynı gün uzun yol ve işlem yorgunluğunu birlikte planlamalıdır.",
        ],
      },
      {
        id: "yazar",
        title: "Yazar Notu",
        paragraphs: [
          "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
          "Yazı marka adı veya doz tarifesi içermez.",
        ],
      },
    ],
    sources: [commonSources.aadAging, commonSources.ttbEstetik, commonSources.ttbEtik],
    faqs: [
      {
        question: "Botoks kalıcı mıdır?",
        answer:
          "Değildir. Etki geçicidir ve süresi kişiden kişiye değişir.",
      },
      {
        question: "Yüz düşer mi?",
        answer:
          "Uygun teknik ve anatomi ile amaç ifadeyi korumaktır. Riskler görüşmede anlatılır.",
      },
      {
        question: "Erkeklerde uygulanır mı?",
        answer:
          "Uygunluk cinsiyetten çok kas yapısı, beklenti ve sağlık durumuna bağlıdır.",
      },
      {
        question: "Migren için de kullanılır mı?",
        answer:
          "Bu yazı estetik bilgilendirmedir. Başka tıbbi endikasyonlar ilgili hekimlik alanına aittir.",
      },
      {
        question: "Ne sıklıkla tekrarlanır?",
        answer:
          "Sabit takvim yoktur. Etki süresi ve yüz durumu izlenerek konuşulur.",
      },
      {
        question: "Aynı gün spor yapılır mı?",
        answer:
          "Kişiye göre değişir. İşlem sonrası anlatım görüşmede yapılır.",
      },
    ],
  }),
];
