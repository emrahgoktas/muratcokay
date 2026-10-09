import { localPlaceSeeds } from "./yalova-hizmet-yerleri";
import type { ClusterContent, ContentSection, PillarContent } from "./types";

type DepthSeed = {
  slug: string;
  kind: "pillar" | "cluster";
  titles: readonly [string, string, string] | readonly [string, string, string, string];
  beats: readonly string[];
};

function chunk<T>(items: readonly T[], size: number) {
  const groups: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
}

function weave(title: string, beats: readonly string[], kind: "pillar" | "cluster") {
  const bridges = [
    "Önce öykü, ilaç listesi ve varsa eski raporlar masaya gelir; yöntem adı cümlenin sonundadır.",
    "Güvenlik süzgeci reklam cümlesinden önce çalışır: kimler için konuşulabileceği kadar kimler için ertelenmesi gerektiği de anlatılır.",
    "Kanıt sınırı gizlenmez. Geleneksel yaygınlık veya sosyal medya iddiası, güncel kanıtın yerine geçmez.",
    "Yalova'nın feribot, kara yolu ve ilçe mesafeleri aynı gün hem uzun değerlendirme hem uygulama dayatmayı zorlaştırabilir.",
    "12 Kasım 2025 tanıtım çerçevesi hasta yorumu, öncesi-sonrası görsel, fiyat ve üstünlük iddiasını yasaklar; bu metin o yasağa uyar.",
    "İzlem ölçütü tek bir his, tartı veya fotoğraf karesi değildir. Uyku, günlük işlev, tahammül ve erken uyarı birlikte okunur.",
    "Anlaşılmayan onam onam değildir. Kişi, neyin neden konuşulduğunu ve neyin neden bekletildiğini sorma hakkına sahiptir.",
    kind === "pillar"
      ? "Bu ana rehber haritadır; her alt yazı kendi kırmızı bayrağını ve kaynaklarını taşır."
      : "Bu alt yazı ana rehbere döner ve aynı kümedeki diğer başlıklarla konuşur; tek başına tüm planı bitirmez.",
  ];
  const practice = [
    "Pratikte bu, randevu gününe ilaç kutusu, son tetkik çıktısı ve mümkünse bir yakının eşlik etmesi; işlem veya görüşme sonrası ise erken uyarı bulgusunu beklememek demektir. Açlık, uzun yol ve sıcak termal program aynı güne yığılırsa tahammül düşer. Plan, kişinin işi, bakım yükü ve dönüş arasında sığmalıdır.",
    "Hekim, uygun olmayan talebi erteleyebilir veya hiç konuşmayabilir. Bu red, hizmet eksikliği değil güvenlik kararıdır. Kişi ikinci görüş hakkını saklar; kamu izlemi ve ilgili uzmanlık alanı blog yazısıyla kapanmaz.",
    "Yalova Merkez'deki değerlendirme, İstanbul veya Bursa'da başlamış belirsiz bir dizinin üzerine körlemesine ekleme yapmak zorunda değildir. Kayıt yoksa önce netleştirme gelir. Sözel hafıza, ürün adı, doz veya önceki kırmızı bayrağı eksik bırakabilir.",
    "Sık sorulan 'kaç seans, ne zaman biter, kesin işe yarar mı' sorularının dürüst yanıtı sabittir: sayı kilitlenmez, süre vaat edilmez, sonuç garanti edilmez. Konuşulabilir hedef, daha düzenli uyku, izlenebilir işlev veya daha sakin bir beklentidir.",
    "Çocuk, gebe, ağır bağışıklığı baskılanmış veya kontrolsüz kronik hastalığı olan kişilerde eşik yüksektir. Bu gruplarda tamamlayıcı veya estetik başlık çoğu zaman bekler. Acele sosyal takvim, tıbbi eşiği indirmez.",
    "İç bağlantılar dofollow'dur çünkü okurun ilgili derin yazıya geçmesi istenir; otomatik terim bağları ise aynı sözcüğü her geçişte tekrar linklemez. Böylece metin hem okunur hem taranabilir kalır.",
  ];

  return beats.flatMap((beat, index) => {
    const opener =
      index === 0
        ? `${title} derinleştirilirken ilk iş, beklentiyi yönetim ve destek diline çekmektir.`
        : `${title} başlığının ${index + 1}. katmanı, acele sonucu değil sırayı korumaktır.`;
    const bridge = bridges[index % bridges.length];
    const city =
      index % 2 === 0
        ? "Çınarcık, Termal, Çiftlikköy, Altınova ve Armutlu'dan gelen kişilerde yol yorgunluğu planın parçasıdır."
        : "Merkez'de oturan kişi daha sık kısa izlem konuşabilir; uzak güzergâhta hedefler sadeleşebilir.";
    const closer =
      index % 2 === 0
        ? "Kişiye özel plan yalnızca yüz yüze uygunluk, bilgilendirilmiş rıza ve gerektiğinde ilgili branş koordinasyonu ile kurulur."
        : "Metin tanı, reçete veya sonuç vaadi değildir; hekimle daha nitelikli soru sormak içindir.";
    const companion = `${title} günlük hayatta şöyle görünür: ${beat} ${practice[index % practice.length]} Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanan bu anlatım ürün, paket veya şifa satmaz; sırayı ve sınırı görünür kılar.`;
    const third =
      kind === "pillar"
        ? `${title} ana rehberinde bu katman, cluster yazılara geçmeden önce ortak sözlüğü kurar. ${beat} Okur; fibromiyalji, hacamat, botoks, dolgu, akupunktur, sülük, ozon, saç dökülmesi veya termal gibi anahtar terimleri gördüğünde ilgili sayfaya dofollow bağ ile gidebilir. Yine de bağ, kişiye özel uygunluk kararı değildir. Acil tabloda 112 ve en yakın acil servis geçerlidir. Tanıtım yasağına uygun olarak yorum, fiyat ve öncesi-sonrası bu metinde yoktur.`
        : `${title} yazısında bu katman, pillar sayfaya geri döner ve küme içi diğer yazılara bağlanır. ${beat} Dış kaynaklar TTB, Sağlık Bakanlığı, WHO, NICE veya NCCIH gibi kurumlara aittir; ev tarifi veya doz şeması yoktur. Yalova'dan gelen kişi yol, izlem ve acil kapısını randevu günü netleştirmelidir. Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.`;
    return [`${opener} ${beat} ${bridge} ${city} ${closer}`, companion, third];
  });
}

function sectionsFromSeed(seed: DepthSeed): ContentSection[] {
  const groups = chunk(seed.beats, Math.ceil(seed.beats.length / seed.titles.length));
  return seed.titles.map((title, index) => {
    const id = `${seed.slug}-derinlik-${index + 1}`;
    const beats = groups[index] ?? [];
    return {
      id,
      title,
      paragraphs: weave(title, beats, seed.kind),
    };
  });
}

const seeds: DepthSeed[] = [
  {
    slug: "butuncul-saglik",
    kind: "pillar",
    titles: [
      "Belirtiyi Tek Başına Okumamak",
      "İlaç, Tetkik ve Tamamlayıcı Katman",
      "Günlük İşlev ve Dalgalanma",
      "Yalova Coğrafyasında Sürdürülebilir İzlem",
    ],
    beats: [
      "Fibromiyalji, kronik yorgunluk, bel fıtığı, diyabet, hipertansiyon, varis, hemoroid ve kilo yönetimi aynı cümlede anılsa da aynı planı paylaşmaz. Her başlık kendi kırmızı bayrağını taşır.",
      "Yaygın ağrı ile lokal bel ağrısını, yorgunluk ile uykusuzluğu, kilo değişimi ile ilaç yan etkisini ayırmak hekimin işidir. Okur bu ayrımı evde tamamlamış sayılmaz.",
      "Laboratuvar veya görüntüleme 'normal' olsa bile işlev bozulmuş olabilir; tersine görüntüleme bozulmuş olsa da kişi görece iyi işlev görebilir. Sayı ile yaşam aynı şey değildir.",
      "Kan sulandırıcı, insülin, tansiyon ilacı veya bağışıklık baskılayıcı kullanan kişide GETAT seçeneklerinin riski değişir. Liste paylaşılmadan plan kurulmaz.",
      "Eksik tetkik, tamamlayıcı yönteme geçiş gerekçesi olamaz. Önce neyin eksik olduğu konuşulur; sonra — uygunsa — destek katmanı.",
      "Hacamat, akupunktur, sülük veya ozon; kilo, ağrı veya yorgunluğu bitiren ana yöntem olarak sunulamaz. Konuşulabilir olmaları, gerekli oldukları anlamına gelmez.",
      "Uyku bölünmesi ağrı eşiğini, hareket kısıtı kilo yönetimini, stres tansiyon izlemini etkileyebilir. Bu ilişkileri görmek herkese aynı uygulamayı yapmak değildir.",
      "Hedef 'yok etmek' değil 'daha düzenli uyumak', 'kısa yürüyüşü sürdürmek', 'ölçümleri kaydetmek' gibi izlenebilir dilde kurulursa düş kırıklığı azalır.",
      "Dalgalı seyir, yöntemin işe yaramadığı anlamına gelmeyebilir; zorlu bir gün de planı çöpe atmaz. İzlem, tek fotoğraf karesi değil eğridir.",
      "Çınarcık, Termal, Armutlu, Altınova ve Gemlik hattında aynı gün hem uzun öykü hem uygulama dayatmak yorgunluğu artırabilir.",
      "Termal su ve tatil ritmi bütüncül planın yerine geçmez. Sıvı kaybı, tansiyon ve cilt tahammülü hekime danışılmadan zorlanmamalıdır.",
      "Bu rehberin cluster yazıları her başlığı ayrı dağıtır. Pillar sayfa haritadır; yürüyüşe çıkmadan zemin kişiye göre kontrol edilir.",
    ],
  },
  {
    slug: "medikal-estetik",
    kind: "pillar",
    titles: [
      "Beklenti, Işık ve Hareket",
      "Ürün, Anatomi ve Acil Hazırlık",
      "Cilt Takvimi ve Güneş",
      "Etik Red ve Yalova Ritmi",
    ],
    beats: [
      "Botoks, dolgu, sıvı yüz germe, leke-matlık ve saç dökülmesi aynı 'estetik iğne' değildir. Yanlış araç, doğal görünümü bozar.",
      "Filtreli fotoğraf tıbbi hedef olamaz. Değerlendirme durağan ve hareketli yüzde, gün ışığına yakın koşulda yapılır.",
      "Hiç mimik kalmasın isteği ile yorgun bakışı azaltayım isteği aynı botoks planı değildir. İlk iş dinlemektir.",
      "Dolgu, damar anatomisi ve nadir damarsal komplikasyon anlatılmadan konuşulmamalıdır. Kişi erken uyarıyı öğrenmeden rıza vermiş sayılmaz.",
      "Sıvı yüz germe cerrahi yüz germenin eşdeğeri değildir. Hacim eksikliği sıkılık gibi duruyorsa yalnızca kalite konuşmak yetersiz kalır.",
      "Leke türü ayrılmadan lazer veya soyma denemek lekeyi belirginleştirebilir. Güneş koruması işlemden bağımsız temel başlıktır.",
      "Saç dökülmesinde mezoterapi ve PRP, demir, tiroit, ilaç ve genetik konuşulmadan ilk adım olamaz.",
      "Gebelik, emzirme, aktif enfeksiyon ve bazı nöromüsküler hastalıklar planı durdurur. Dışlama listesi reklam eki değildir.",
      "Yaz ve termal sezonda bazı cilt işlemleri ertelenir. Erteleme cezalandırma değil güvenlik tedbiridir.",
      "Sosyal olay öncesi acele randevu, şişlik izlemi ve düzeltme için yeterli süre bırakmaz. Takvim, olaya göre değil tahammüle göre kurulur.",
      "Bilinmeyen ürüne ait başka kent işlemi üzerine ekleme yapılmayabilir. Kayıt yoksa risk artar.",
      "Etik hekimlik, her talebi işleme çevirmemektir. Reddetmek de bir yaklaşımdır ve bu rehberin parçasıdır.",
    ],
  },
  {
    slug: "getat",
    kind: "pillar",
    titles: [
      "Yetki, Hijyen ve Kayıt",
      "Kanıtın Dağılımı",
      "Kesişim ve Otomatik Kombinasyon Yokluğu",
      "Ev Pratiğinin Dışı",
    ],
    beats: [
      "GETAT uygulamaları eğitim, yetki, hijyen, atık ve onam koşullarına bağlıdır. Geleneksel oluş bu koşulları gevşetmez.",
      "Hacamat, akupunktur, sülük ve ozon aynı risk profilini paylaşmaz. Tek 'doğal yöntem' başlığı yanıltır.",
      "Sağlık Bakanlığı çerçevesi evde veya yetkisiz ortamı kapsamamaktadır. Bu rehber ev uygulamasını önermez.",
      "Kanıt düzeyi tanıya göre değişir. Bir başlıkta tartışma yoğun, diğerinde seyrek olabilir; bu dağılım saklanmaz.",
      "Toksin atma, şifa garantisi ve paket seans dili bilimsel anlatının yerini tutmaz. Vücudun atık yönetimi organ sistemleriyle yürür.",
      "Anemi, kanama eğilimi, gebelik, enfeksiyon ve bağışıklık baskılanması sık duraklatma nedenleridir. Liste öyküyle genişler.",
      "Fibromiyalji, yorgunluk, bel fıtığı veya kilo yazılarında GETAT destek katmanı olabilir; omurga değildir.",
      "Medikal estetik ile aynı güne yığmak izlemi bozar. Otomatik birleştirme yoktur.",
      "İlaç kesmek GETAT'ın işi değildir. Özellikle kan sulandırıcılar ilgili hekim onayı olmadan oynanmaz.",
      "Çocuk, gebe ve ağır bağışıklığı baskılanmış kişilerde eşik daha yüksektir; çoğu zaman yöntem konuşulmaz.",
      "Yalova dışından gelenlerde belirsiz önceki uygulama üzerine ekleme yapılmayabilir. Önce kayıt netleşir.",
      "Uzm. Dr. Yaşar Murat Çokay'ın metinleri ürün veya seans satmaz; sıra ve sınır öğretir.",
    ],
  },
  {
    slug: "yalova-saglik",
    kind: "pillar",
    titles: [
      "Doğru Kapı ve Acil Ayrımı",
      "Turizm ile İzlemin Çatışmaması",
      "Termal Kaynak ile Hekimlik Ayrımı",
      "Yerel Rehberin Görevi",
    ],
    beats: [
      "Göğüs ağrısı, nefes darlığı, ani güçsüzlük ve bilinç değişikliği randevulu blog kapısına değil 112 ve acile aittir.",
      "Aile hekimliği ve poliklinik omurgadır. Bütüncül veya estetik görüşme bu omurgayı ikame etmez.",
      "İstanbul-Bursa aksı ve feribot, aynı gün işlem-dönüş planını bozabilir. Deniz ve trafik izlem payıdır.",
      "Sağlık turizmi şifa tatili değildir. Kişi ne için geldiğini ve sonra nerede izleneceğini baştan konuşmalıdır.",
      "Konaklama tesisi tıbbi birim değildir. Havuz, sauna ve masaj hekim planının yerine geçmez.",
      "Termal su bazı kas yakınmalarında konfor bağlamında konuşulabilir; tanı ve tedavi garantisi taşımaz.",
      "Kalp, tansiyon, ateş, açık yara ve gebelikte termal kullanım hekime danışılmadan artırılmamalıdır.",
      "Kuruluş isimleri değişir. Rehber tür ve işlev öğretir; ezber telefon vaat etmez. Teyit resmi kaynaktandır.",
      "Bütüncül adres tek kapı dayatması değildir. İkinci görüş ve kamu izlemi saklıdır.",
      "Çınarcık, Termal, Altınova, Armutlu ve Çiftlikköy'den gelişte aktarma sayısı kilometreden önemlidir.",
      "Kişisel sağlık verisi ve işlem görseli sosyal medyada paylaşılmamalıdır. Mahremiyet yasal yasağın da gerekçesidir.",
      "Diğer üç rehber semptom, yöntem ve yüz-cilt anlatır; bu rehber bunların geçtiği kenti tarif eder.",
    ],
  },
  {
    slug: "fibromiyalji-ile-yasam",
    kind: "cluster",
    titles: [
      "Ayırıcı Tanı Sabır İster",
      "Günlük Ritmi Yeniden Kurmak",
      "Tamamlayıcı Katmanın Sınırı",
    ],
    beats: [
      "Tek kan testi fibromiyaljiyi kanıtlamaz. Klinik örüntü, süre ve diğer nedenlerin yeterince araştırılması birlikte okunur.",
      "İnflamatuvar romatizma, tiroit, eksiklikler ve ilaç yan etkisi benzer tablo yapabilir. Bu ayrım evde tamamlanmaz.",
      "Uyku hijyeni önerisi evrensel reçete değildir. Kafein, ekran, gece ağrısı ve kestirme hekimle süzülür.",
      "Enerji planı, her gün aynı yoğunluğu dayatmaz. Dalgalanmayı kabul etmek tembellik değil yönetimdir.",
      "Fizik tedavi programı varsa akupunktur, hacamat veya ozon onun yerine geçmez. Kesişim konuşulur, ikame edilmez.",
      "Kırmızı bayrak — ateş, kilo kaybı, eklem şişliği, nörolojik kayıp — stresse yorulup bekletilmez.",
      "Çınarcık veya Termal'den gelen kişide aynı gün uzun öykü ve işlem yorgunluğu artırabilir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır. Amaç sakin çerçeve sunmaktır.",
    ],
  },
  {
    slug: "kronik-yorgunluk-nedenleri-yonetimi",
    kind: "cluster",
    titles: [
      "Yorgunluğu Tek Tanıya İndirmemek",
      "Uyku, Kan ve İlaç Süzgeci",
      "Destek Yaklaşımının Sırası",
    ],
    beats: [
      "Uzun süren yorgunluk anemi, tiroit, uyku apnesi, depresyon, enfeksiyon sonrası süreç veya ilaç etkisiyle görülebilir.",
      "Kronik yorgunluk sendromu adı, ayırıcı değerlendirme yapılmadan yapıştırılmamalıdır. İsim, tetkikin yerini tutmaz.",
      "Akupunktur bu tabloda ilk seçenek olamaz. Önce neyin eksik veya fazla olduğu anlaşılır.",
      "Gündüz kestirmesi, kafein ve düzensiz öğün bazı kişilerde yükü artırır; bu gözlem suçlama değil konuşma başlığıdır.",
      "İş ve bakım yükü Yalova-İstanbul hattında uzuyorsa plan, gerçek güne sığmalıdır. Sığmayan plan sürdürülmez.",
      "Ani nefes darlığı, göğüs ağrısı, bayılma veya ilerleyici güçsüzlük acil kapısınadır.",
      "Seans sayısı baştan kilitlenmez. Yanıt, tahammül ve laboratuvar birlikte izlenir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır ve tanı yerine geçmez.",
    ],
  },
  {
    slug: "bel-fitiklarinda-tamamlayici-tip",
    kind: "cluster",
    titles: [
      "Kırmızı Bayrak Önce Gelir",
      "Görüntü ile Yakınmayı Eşleştirmek",
      "Yol, Oturma ve GETAT",
    ],
    beats: [
      "Kuvvet kaybı, idrar kaçırma, eyer uyuşması veya ilerleyici nöroloji tamamlayıcı tıp değil acil uzmanlık konusudur.",
      "Her bel ağrısı fıtık değildir. Kalça, eklem ve kas kaynaklı ağrı ayrı süzgeç ister.",
      "Aynı MR farklı kişilerde farklı yakınma üretebilir. Karar tek kesitten çıkmaz.",
      "Fizik tedavi ve hareket planı varsa hacamat veya akupunktur onu iptal etmez.",
      "Uzun oturuş — feribot, otobüs, ofis — randevu günü ve dönüş planını etkiler.",
      "Enjeksiyon, cerrahi veya acil seçenekler saklanarak 'doğal yöntem yeter' denmez.",
      "Ağrı dalgalanması tek başına başarının veya başarısızlığın kanıtı değildir; işlev izlenir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "diyabet-hipertansiyon-butuncul-destek",
    kind: "cluster",
    titles: [
      "İlaç Omurgası Bozulmaz",
      "Ölçüm, Beslenme ve Hareket",
      "GETAT ile Çakışma Riski",
    ],
    beats: [
      "İnsülin, oral antidiyabetik ve tansiyon ilaçları hekim onayı olmadan azaltılmaz, bırakılmaz, 'doğalla değiştirilir' denmez.",
      "Bütüncül destek; uyku, tuz, hareket ve stres yükünü konuşmayı içerebilir. Bu, endokrin veya kardiyoloji izleminin rakibi değildir.",
      "Hipoglisemi veya ani tansiyon düşüşü belirtileri işlem günü ayrıca konuşulur. Açlık ve yol birleşebilir.",
      "Ozon veya hacamat metabolik kontrolün ana yöntemi değildir. Konuşulsa bile sınırları açık yazılır.",
      "Ölçüm günlüğü, ezbere 'iyi gidiyorum' cümlesinden daha güvenilir bir izlem aracıdır.",
      "Yalova'da aynı gün tetkik, görüşme ve uygulama her zaman uygun olmayabilir.",
      "Gebelik, ağır böbrek veya kontrolsüz tablo eşikleri yükseltir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "varis-hemoroid-suluk-tedavisinin-yeri",
    kind: "cluster",
    titles: [
      "Önce Dolaşım Değerlendirmesi",
      "Sülük Ne Zaman Konuşulmaz",
      "Hijyen ve Yönlendirme",
    ],
    beats: [
      "Bacakta ani şişlik, tek taraflı ağrı, kızarıklık veya nefes darlığı acil değerlendirme ister. Sülük bekletmez.",
      "Hemoroid kanaması, kansızlık ve bağırsak alışkanlığı değişimi ilgili hekimlik alanına aittir.",
      "Tıbbi sülük her varis veya hemoroid için uygun değildir. Kanama, anemi, enfeksiyon ve ilaçlar durdurabilir.",
      "Evde sülük uygulaması bu yazının dışındadır ve önerilmez. Kaynak ve atık hekimlik ortamına aittir.",
      "Cerrahi veya girişimsel seçenekler saklanarak tamamlayıcı yöntem öne çıkarılmaz.",
      "Modern sülük yorumu ilgili GETAT yazısında; bu metin kesişim ve sınır içindir.",
      "Uzun yol ve sıcak termal program dolaşım yakınmasını artırabilir; plan buna göre kurulur.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "kilo-yonetiminde-ozon-hacamat-destegi",
    kind: "cluster",
    titles: [
      "Enerji Dengesi Omurgadır",
      "Ozon ve Hacamat Destek Dilinde",
      "Hızlı Sonuç Vaadinin Dışı",
    ],
    beats: [
      "Kilo yönetimi enerji dengesi, uyku, kas koruyan hareket ve varsa endokrin-ilaç etkenleriyle konuşulur.",
      "Ozon veya hacamat kilo kaybının ana yöntemi değildir. Destek diye anılmaları zorunlu oldukları anlamına gelmez.",
      "Toksin ve yağ eritme sloganı bilimsel anlatı değildir. Karaciğer, böbrek ve solunum yok sayılmaz.",
      "Diyabet veya tansiyon ilacı olan kişide beslenme değişikliği ilgili hekimle koordine edilir.",
      "Paket seans ve tartı garantisi bu yazıda yoktur. İzlem tartıdan ibaret de olmayabilir.",
      "Yalova'ya günübirlik gelen kişide aynı gün yoğun uygulama ve uzun dönüş önerilmeyebilir.",
      "Yeme bozukluğu şüphesi tamamlayıcı işleme değil uygun değerlendirmeye yönlendirilir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "sivi-yuz-germe-hacim-vermeden-sikilasma",
    kind: "cluster",
    titles: [
      "Hacim ile Kaliteyi Ayırmak",
      "Cerrahi Kıyasın Yanlışlığı",
      "İyileşme Payı ve Güneş",
    ],
    beats: [
      "Bazı yüzlerde asıl eksik hacimdir; sıkılık arayışı bunu taklit eder. Ayrım yapılmazsa işlem yeni dengesizlik ekler.",
      "Cilt rezervi, elastikiyet, sigara ve güneş öyküsü adaylığı değiştirir. Yaş tek başına karar vermez.",
      "Sıvı yüz germe, cerrahi yüz germenin yumuşak kopyası gibi anlatılamaz. Kıyas yanlış beklenti üretir.",
      "Şişlik, kızarıklık ve hassasiyet olabilir. Sosyal hayata dönüş süresi vaat edilmez.",
      "Termal ve yaz döneminde bazı adımlar ertelenir. Güneş, kalite hedefini bozabilir.",
      "Dolgu veya botoks ihtiyacı olan yüzde yalnızca bu başlığı konuşmak eksik kalabilir.",
      "Bilinmeyen önceki ürüne ekleme yapılmayabilir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "dogal-gorunumlu-dolgu-uygulamalari",
    kind: "cluster",
    titles: [
      "Oran, Işık ve Komşu Bölge",
      "Damarsal Risk Anlatımı",
      "Etik Ölçü",
    ],
    beats: [
      "Bir bölgeye eklenen hacim komşu gölgeyi değiştirir. 'Sadece buraya azıcık' talebi tüm yüzle okunur.",
      "Doğallık, konuşurken ve gülümserken bozulmayan görünümdür. Aşırı dolgu bakışı değiştirir.",
      "Şişlik ve morluk sık; damar tıkanıklığı nadir ama ciddidir. Saklanmaz, iletişim yolu önceden verilir.",
      "Gebelik, enfeksiyon ve gerçekçi olmayan beklenti planı durdurur. Geçmiş işlem kayıtları paylaşılmalıdır.",
      "Hekim talebi olduğu gibi uygulamak zorunda değildir. Yüzü korumak etik görevidir.",
      "Tören öncesi acele, düzeltme için yeterli süre bırakmaz.",
      "Botoks ile otomatik aynı seans yoktur; yük hekime kalır.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "sac-dokulmesinde-mezoterapi-prp",
    kind: "cluster",
    titles: [
      "Neden Araştırması Olmadan İşlem Yok",
      "Döngü Yavaştır",
      "Kadın ve Erkek Örüntüsü",
    ],
    beats: [
      "Demir, tiroit, ilaç, doğum sonrası dönem ve genetik yok sayılırsa mezoterapi veya PRP beklenen katkıyı sunmayabilir.",
      "İki yöntem de her dökülme türünde ilk seçenek değildir. Enfeksiyon ve kanama bozukluğu durdurur.",
      "Saç döngüsü haftalık mucize üretmez. Erken 'olmamış' hükmü yanıltır.",
      "Sıkı bağ, yüksek ısı ve rastgele vitamin bazı kişilerde yükü artırır. Takviye hekimsiz eklenmemelidir.",
      "Kadın ve erkek tip dökülme aynı seans şablonunu paylaşmaz.",
      "Laboratuvar ayrı gün isteyebilir. Uzak ilçeden gelen bunu yol planına yazar.",
      "Cerrahi adaylığı olan kişi ilgili uzmanlığı ertelememelidir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yuz-lekeleri-matlik-bilimsel-yaklasimlar",
    kind: "cluster",
    titles: [
      "Leke Tipi İşlemi Belirler",
      "Güneş ve Yalova Yaşamı",
      "Beklentiyi Ölçülü Kurmak",
    ],
    beats: [
      "Melazma, güneş lekesi ve inflamasyon sonrası leke aynı cihazı paylaşmaz. Yanlış işlem lekeyi koyulaştırabilir.",
      "Bariyer bozulmuş ciltte agresif soyma tahammülsüzlük üretir. Önce bariyer konuşulur.",
      "Yalova sahil ve termal yaşamı birikimli güneş maruziyeti yaratabilir. Koruma işlemden bağımsızdır.",
      "Taze bronzlaşma, gebelik veya aktif enfeksiyon planı erteleyebilir.",
      "Cam cilt vaadi yoktur. Hedef daha düzenli görünüm ve yeni hasarı azaltmak olabilir.",
      "Ev tipi cihazlar kontrolsüz kullanılmamalıdır.",
      "Dermatolojik hastalık şüphesi ilgili uzmanlığa geciktirilmez.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "botoks-kimler-icin-uygundur",
    kind: "cluster",
    titles: [
      "İfadeyi Koruyan Plan",
      "Dışlama ve Zamanlama",
      "Dolgu ile Görev Ayrımı",
    ],
    beats: [
      "Amaç yüzü dondurmak değil, seçilmiş kasın gücünü geçici azaltarak görünümü konuşmaktır. Süre kişiye göre değişir.",
      "Yanlış kas seçimi asimetri veya ağır kapak görünümü yaratabilir. Anatomi vazgeçilmezdir.",
      "Gebelik, emzirme, bölgede enfeksiyon ve bazı nöromüsküler hastalıklar planı durdurur.",
      "Etki hemen tam belirgin olmayabilir. Erken hüküm yanıltır; kontrol hekim belirler.",
      "Hacim kaybı botoksla düzelmez. Yanlış araç doğal görünümü bozar.",
      "Toplantı veya tören öncesi acele, düzeltme payını siler.",
      "Marka ve doz tarifesi bu yazıda yoktur. Karar muayeneye aittir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "hacamat-nedir-bilimsel-perspektif",
    kind: "cluster",
    titles: [
      "Gelenek ve Kanıtı Ayırmak",
      "Kanama ve Enfeksiyon Süzgeci",
      "Sloganların Yerine Sıra",
    ],
    beats: [
      "Uzun geleneksel kullanım, modern kanıtın yüksek olduğu anlamına gelmez. Belirsizlik saklanmaz.",
      "Anemi, kan sulandırıcı, gebelik ve cilt enfeksiyonu sık duraklatma nedenidir.",
      "Tek kullanımlık malzeme, atık ve ortam hijyeni ev pratiğinden ayırır. Evde hacamat önerilmez.",
      "Toksin atma ve kilo sloganı tıbbi anlatı değildir.",
      "Kilo, varis veya yorgunluk yazılarında hacamat zorunlu adım değildir.",
      "Ateş, yayılan kızarıklık veya beklenmeyen halsizlik beklenmez; iletişim kurulur.",
      "Başka yerde belirsiz başlamış dizi üzerine ekleme yapılmayabilir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "akupunktur-hangi-durumlarda-tercih-edilir",
    kind: "cluster",
    titles: [
      "Tanıya Göre Kanıt",
      "İğne Güvenliği",
      "İlaçla Yan Yana Durmak",
    ],
    beats: [
      "Bazı ağrı ve bulantı başlıklarında literatür daha yoğundur; başka belirtilerde veri seyrektir.",
      "Kanıtın varlığı o kişinin aday olduğu anlamına gelmez. İlaç, anatomi ve beklenti ayrı süzgeçtir.",
      "İğne fobisi, kanama bozukluğu ve enfeksiyon planı değiştirir. Sterilite temeldir.",
      "Nokta haritası evde uygulanmak üzere verilmez.",
      "Hekimin verdiği ilaç akupunktur gerekçesiyle kesilmez.",
      "On seans paket dili yoktur. Yanıt ve işlev izlenir.",
      "Gebelik özel değerlendirme ister; genel evet-hayır cümlesi kurulmaz.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "suluk-tedavisi-modern-yorumu",
    kind: "cluster",
    titles: [
      "Kaynak Güvenliği",
      "Cerrahi ve Dolaşım Sınırı",
      "Risk Anlatımı",
    ],
    beats: [
      "Modern yorum romantize şifa değil; kaynak, saklama, tek hasta ve atık yönetiminin yorumudur.",
      "Tarihsel iz, her dolaşım şikâyetinde ilk tercih demek değildir.",
      "Anemi, kanama, enfeksiyon, gebelik ve bağışıklık baskılanması planı durdurabilir.",
      "Varis ve hemoroid kesişiminde sülük yerine geçen tedavi değildir. Kırmızı bayrak acile aittir.",
      "Enfeksiyon ve uzamış kanama yok sayılamaz. Erken uyarı işlem günü anlatılır.",
      "Evde sülük tarifi yoktur ve önerilmez.",
      "Belirsiz başka kent dizisi üzerine ekleme yapılmayabilir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "ozon-tedavisinin-kullanim-alanlari",
    kind: "cluster",
    titles: [
      "Yolları Karıştırmamak",
      "Sistemik İddia ile Yerel Destek",
      "Cihaz ve Yetki",
    ],
    beats: [
      "Farklı uygulama yolları farklı risk taşır. Bu yazı reçete vermez; soru listesi verir.",
      "Ev tipi ozon anlatıları rehberin dışındadır ve önerilmez.",
      "Belirli enzim eksikliği, kontrolsüz tiroit, gebelik ve ağır anemi planı durdurabilir.",
      "Kilo ve yorgunluk tek başına gerekçe olmayabilir. Önce neden konuşulur.",
      "Hacamatla otomatik kombinasyon yoktur. Yük ve güvenlik hekime kalır.",
      "Cihaz bakımı ve uygulayıcı yetkisi sorulmalıdır. Anlaşılmayan onam geçerli sayılmaz.",
      "Nefes, göğüs veya alerji benzeri bulgu beklenmez.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-saglik-turizmi",
    kind: "cluster",
    titles: [
      "Yola Çıkmadan Kayıt",
      "Tesis ile Klinik Ayrımı",
      "Dönüşte İzlem",
    ],
    beats: [
      "Rapor, ilaç listesi ve tanı belgesi sözel hafızaya bırakılmamalıdır. Bilinmeyen işlem üzerine ekleme risklidir.",
      "Günübirlik geliş ile konaklama farklı risk taşır. Feribot ve trafik işlem gününü bozabilir.",
      "Otel veya termal tesis tıbbi birim değildir. Havuz hekim planının yerine geçmez.",
      "Yorum, fiyat ve mucize iddiası tanıtımda yer alamaz. Kişi bunları talep etmemelidir.",
      "Acil plan evde kalan yakınla paylaşılır. Blog hattı acil kanal değildir.",
      "Yaşanılan kentteki hekim izlemi saklanmamalıdır. Yalova son kapı olmak zorunda değildir.",
      "Yoğun sezonda dinlenme niteliği düşebilir. Kalabalık iyileşme ortamı sayılmaz.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovadaki-saglik-kuruluslari-rehberi",
    kind: "cluster",
    titles: [
      "Tür ve İşlev",
      "Tetkik Sırası",
      "Bilginin Eskimesi",
    ],
    beats: [
      "Acil servis zamana duyarlı tablo içindir. Randevulu destek yaklaşımı acilin yerini tutmaz.",
      "Aile hekimliği kronik izlem ve yönlendirmenin omurgasıdır. Üstünlük dili kullanılmaz.",
      "Özel muayenehane daha uzun öykü sunabilir; bu kamu hizmetini değersizleştirmez.",
      "Açlık-tokluk ve tetkik sırası hekimle kurulur. Aynı gün her birimi bitirme telaşı hata üretir.",
      "Eczanede bitkisel ürün de konuşulmalıdır. Doğal olan risksiz değildir.",
      "Adres ve telefon değişir. Sosyal medya listesi resmi kaynak değildir. Teyit valilik ve il sağlık kaynaklarındandır.",
      "İlçeden gelişte aktarma, ağrılı kişi için kilometreden önemlidir.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovanin-termal-sulari-ve-saglik",
    kind: "cluster",
    titles: [
      "Konfor ile Tedavi İddiası",
      "Kimler Eşiği Yükseltir",
      "GETAT ile Karışmama",
    ],
    beats: [
      "Sıcak mineral su geçici rahatlama hissi verebilir. His, hastalığın yönetildiği anlamına gelmez.",
      "Süre ve sıcaklık hekime danışılmadan artırılmamalıdır.",
      "Kalp, tansiyon, ateş, açık yara, gebelik ve denge sorunu eşiği yükseltir.",
      "Baş dönmesi, çarpıntı veya nefes darlığında su terk edilir; gerekirse 112 aranır.",
      "Termal çevresel kaynaktır. GETAT hekim yetkisiyle konuşulur. Havuzda 'doğal GETAT' olmaz.",
      "Hafta sonu yoğunluğu hijyen ve dinlenme niteliğini düşürebilir.",
      "Mineral analizleri pazarlama metni gibi okunmamalıdır. Resmi kültür ve valilik anlatısıyla süzülür.",
      "Bu içerik Uzm. Dr. Yaşar Murat Çokay tarafından hazırlanmıştır.",
    ],
  },
  {
    slug: "yalovada-butuncul-saglik-adresleri",
    kind: "cluster",
    titles: [
      "Niyet ve Çıktı",
      "Tek Kapı Dayatmaması",
      "Hangi Rehbere Gidilir",
    ],
    beats: [
      "Bütüncül adres, her şeyi çözen merkez değil; öyküyü dinleyen, yönlendiren ve uygunsa sınırlı destek konuşan ortamdır.",
      "GETAT veya estetik işlem zorunlu çıktı değildir. Bazen çıktı beklemek ve doğru kapıya gitmektir.",
      "Uzm. Dr. Yaşar Murat Çokay'ın Yalova Merkez ortamı bir seçenektir. İkinci görüş hakkı saklıdır.",
      "Diyabet, tansiyon, bel fıtığı ve acil omurga kamu ve ilgili uzmanlıkta durur.",
      "İlçeden gelişte yol ve işlem aynı güne yığılmayabilir.",
      "Semptom için bütüncül, yöntem için GETAT, yüz-cilt için medikal estetik rehberi okunur.",
      "İletişim kanalları acil servis değildir.",
      "Bu içerik bilgilendirmedir; karar kişi ve hekim arasında kalır.",
    ],
  },
  ...localPlaceSeeds,
];

const extraBySlug = new Map(
  seeds.map((seed) => [seed.slug, sectionsFromSeed(seed)] as const),
);

export function applyExpansion<T extends PillarContent | ClusterContent>(content: T): T {
  const extra = extraBySlug.get(content.slug);
  if (!extra) {
    return content;
  }

  return {
    ...content,
    sections: [...content.sections, ...extra],
  };
}
