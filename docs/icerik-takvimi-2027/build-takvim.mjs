import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));

const months = [
  { n: 1, name: "Ocak", theme: "Fibromiyalji odaklı küme" },
  { n: 2, name: "Şubat", theme: "Medikal estetik odaklı küme" },
  { n: 3, name: "Mart", theme: "Kronik yorgunluk ve uyku sağlığı" },
  { n: 4, name: "Nisan", theme: "Kilo yönetimi ve metabolik sağlık" },
  { n: 5, name: "Mayıs", theme: "Bel ve omurga sağlığı" },
  { n: 6, name: "Haziran", theme: "Yalova sağlık turizmi" },
  { n: 7, name: "Temmuz", theme: "Saç ve cilt sağlığı" },
  { n: 8, name: "Ağustos", theme: "Diyabet ve hipertansiyon yönetimi" },
  { n: 9, name: "Eylül", theme: "Kadın sağlığı ve hormonal denge" },
  { n: 10, name: "Ekim", theme: "Bağışıklık sistemi ve koruyucu sağlık" },
  { n: 11, name: "Kasım", theme: "Cilt yaşlanması yaklaşımları" },
  { n: 12, name: "Aralık", theme: "Yıl değerlendirmesi ve özet rehberler" },
];

function item(ay, site, tip, slug, baslik, meta, h1, hedefKw, icLinkler) {
  if (baslik.length > 60) throw new Error(`Başlık 60+ (${baslik.length}): ${baslik}`);
  if (meta.length > 155) throw new Error(`Meta 155+ (${meta.length}): ${baslik}`);
  return {
    yil: 2027,
    ay,
    ayAdi: months[ay - 1].name,
    tema: months[ay - 1].theme,
    site,
    tip,
    slug,
    baslik,
    meta,
    h1,
    hedefKw,
    icLinkler,
    durum: "planlandı",
  };
}

const blog = [
  item(1, "blog", "pillar", "fibromiyalji-destek", "Yalova'da Fibromiyalji Destek Rehberi", "Yalova'da fibromiyalji yakınmalarında uyku, hareket ve değerlendirme çerçevesi. Bilgilendirme amaçlıdır; tanı yerine geçmez.", "Yalova'da Fibromiyalji Destek Rehberi", "yalova fibromiyalji", "/yazilar/fibromiyalji-ile-yasam/; /rehberler/butuncul-saglik/; https://uzmdrmuratcokay.com.tr/hizmetler/fibromiyalji"),
  item(1, "blog", "cluster", "fibromiyalji-ve-uyku-yonetimi", "Fibromiyalji ve Uyku Yönetimi", "Fibromiyaljide uyku bölünmesi ve günlük işlev ilişkisi. Yönetim diliyle genel bilgi; kişiye özel tavsiye değildir.", "Fibromiyalji ve Uyku Yönetimi", "fibromiyalji uyku", "/yazilar/fibromiyalji-ile-yasam/; /rehberler/fibromiyalji-destek/; /yazilar/kronik-yorgunluk-nedenleri-yonetimi/"),
  item(1, "blog", "cluster", "fibromiyaljide-hareket-ve-islev", "Fibromiyaljide Hareket ve Günlük İşlev", "Hareket kapasitesi, tahammül ve günlük işlevin birlikte okunması. Sonuç vaadi yoktur.", "Fibromiyaljide Hareket ve Günlük İşlev", "fibromiyalji hareket", "/rehberler/fibromiyalji-destek/; /yazilar/bel-fitiklarinda-tamamlayici-tip/; https://uzmdrmuratcokay.com.tr/hizmetler/fibromiyalji"),
  item(1, "blog", "cluster", "fibromiyalji-ve-akupunktur-yaklasimi", "Fibromiyalji ve Akupunktur Yaklaşımı", "Akupunkturun fibromiyalji konuşmasındaki yeri ve sınırları. Yerine geçen tedavi iddiası yoktur.", "Fibromiyalji ve Akupunktur Yaklaşımı", "fibromiyalji akupunktur", "/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/; /rehberler/getat/; https://uzmdrmuratcokay.com.tr/hizmetler/akupunktur"),
  item(1, "blog", "cluster", "fibromiyalji-degerlendirme-sureci", "Fibromiyalji Değerlendirme Süreci", "Öykü, ilaç listesi ve tetkik sırasının nasıl ele alındığı. Uygunluk yüz yüze belirlenir.", "Fibromiyalji Değerlendirme Süreci", "fibromiyalji değerlendirme", "/rehberler/fibromiyalji-destek/; /yazilar/fibromiyalji-ile-yasam/; https://uzmdrmuratcokay.com.tr/hakkimda"),
  item(1, "blog", "cluster", "yalovadan-fibromiyalji-randevu-plani", "Yalova'dan Fibromiyalji Randevu Planı", "İlçe mesafesi, yol süresi ve izlem sıklığının randevu planına etkisi. Ulaşım sonucu vaat etmez.", "Yalova'dan Fibromiyalji Randevu Planı", "yalova fibromiyalji randevu", "https://uzmdrmuratcokay.com.tr/hizmetler/fibromiyalji; https://uzmdrmuratcokay.com.tr/bolgeler; /rehberler/yalova-saglik/"),
  item(1, "blog", "cluster", "fibromiyalji-ve-stres-destek-cercevesi", "Fibromiyalji ve Stres Destek Çerçevesi", "Stres yükü ile ağrı algısının birlikte değerlendirilmesi. Psikolojik tanı koymaz.", "Fibromiyalji ve Stres Destek Çerçevesi", "fibromiyalji stres", "/rehberler/fibromiyalji-destek/; /yazilar/kronik-yorgunluk-nedenleri-yonetimi/; /rehberler/butuncul-saglik/"),
  item(1, "blog", "cluster", "fibromiyalji-sss-sik-sorulan-sorular", "Fibromiyalji SSS: Sık Sorulan Sorular", "Seans, uygunluk ve ilaç kesme sorularına yasal dilde yanıt. Bilgilendirme amaçlıdır.", "Fibromiyalji SSS: Sık Sorulan Sorular", "fibromiyalji sss", "/rehberler/fibromiyalji-destek/; /yazilar/fibromiyalji-ile-yasam/; https://uzmdrmuratcokay.com.tr/hizmetler/fibromiyalji"),

  item(2, "blog", "pillar", "yalova-medikal-estetik-2027", "Yalova Medikal Estetik 2027 Rehberi", "Botoks, dolgu ve yüz değerlendirmesini bilimsel sınırla anlatan güncel rehber. Sonuç vaadi yoktur.", "Yalova Medikal Estetik 2027 Rehberi", "yalova medikal estetik", "/rehberler/medikal-estetik/; /yazilar/botoks-kimler-icin-uygundur/; https://uzmdrmuratcokay.com.tr/hizmetler"),
  item(2, "blog", "cluster", "botoks-oncesi-bilgilendirme", "Botoks Öncesi Bilgilendirme", "Uygunluk, dışlama ve rıza adımları. Kimler için ertelenebileceği açık yazılır.", "Botoks Öncesi Bilgilendirme", "botoks öncesi bilgi", "/yazilar/botoks-kimler-icin-uygundur/; https://uzmdrmuratcokay.com.tr/hizmetler/botoks; /rehberler/yalova-medikal-estetik-2027/"),
  item(2, "blog", "cluster", "dolgu-ve-yuz-orani-degerlendirme", "Dolgu ve Yüz Oranı Değerlendirmesi", "Anatomi ve oran konuşması. Doğallık iddiası pazarlama değil sınır tanımıdır.", "Dolgu ve Yüz Oranı Değerlendirmesi", "yalova dolgu", "/yazilar/dogal-gorunumlu-dolgu-uygulamalari/; https://uzmdrmuratcokay.com.tr/hizmetler/dolgu; /rehberler/medikal-estetik/"),
  item(2, "blog", "cluster", "sivi-yuz-germe-kimler-icin-konusulur", "Sıvı Yüz Germe Kimler İçin Konuşulur", "Hacim vermeden sıkılaşma arayışının adaylık ve sınırları.", "Sıvı Yüz Germe Kimler İçin Konuşulur", "sıvı yüz germe yalova", "/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/; https://uzmdrmuratcokay.com.tr/hizmetler/sivi-yuz-germe; /rehberler/yalova-medikal-estetik-2027/"),
  item(2, "blog", "cluster", "ip-aski-yaklasiminin-sinirlari", "İp Askı Yaklaşımının Sınırları", "İp askının konuşulabilir olduğu durumlar ve ertelenmesi gerekenler.", "İp Askı Yaklaşımının Sınırları", "ip askı yalova", "https://uzmdrmuratcokay.com.tr/hizmetler/ip-aski; /rehberler/medikal-estetik/; /yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/"),
  item(2, "blog", "cluster", "medikal-estetikte-riza-ve-guvenlik", "Medikal Estetikte Rıza ve Güvenlik", "Bilgilendirilmiş rıza, risk anlatımı ve kayıt. Yorum ve fiyat yoktur.", "Medikal Estetikte Rıza ve Güvenlik", "medikal estetik rıza", "/rehberler/yalova-medikal-estetik-2027/; /rehberler/medikal-estetik/; https://uzmdrmuratcokay.com.tr/hakkimda"),
  item(2, "blog", "cluster", "yalovada-estetik-gorusme-plani", "Yalova'da Estetik Görüşme Nasıl Planlanır", "İlçe yolu, aynı gün işlem dayatması ve hazırlık listesi.", "Yalova'da Estetik Görüşme Nasıl Planlanır", "yalova estetik randevu", "https://uzmdrmuratcokay.com.tr/iletisim; /rehberler/yalova-saglik/; /rehberler/yalova-medikal-estetik-2027/"),
  item(2, "blog", "cluster", "dogal-gorunum-ne-demek", "Doğal Görünüm Ne Demek?", "Beklenti dilini abartısız kurmak. Öncesi-sonrası görsel kullanılmaz.", "Doğal Görünüm Ne Demek?", "doğal görünümlü dolgu", "/yazilar/dogal-gorunumlu-dolgu-uygulamalari/; /yazilar/botoks-kimler-icin-uygundur/; /rehberler/medikal-estetik/"),

  item(3, "blog", "pillar", "uyku-ve-yorgunluk-destek", "Uyku ve Yorgunluk Destek Rehberi", "Uzun süren yorgunluk ve uyku bölünmesini bütüncül çerçevede anlatır. Tanı koymaz.", "Uyku ve Yorgunluk Destek Rehberi", "kronik yorgunluk yalova", "/yazilar/kronik-yorgunluk-nedenleri-yonetimi/; /rehberler/butuncul-saglik/; https://uzmdrmuratcokay.com.tr/hizmetler/kronik-yorgunluk-sendromu"),
  item(3, "blog", "cluster", "kronik-yorgunlukta-uyku-hijyeni", "Kronik Yorgunlukta Uyku Hijyeni", "Uyku düzeni konuşmasının sınırları. İlaç bırakma önerisi yoktur.", "Kronik Yorgunlukta Uyku Hijyeni", "kronik yorgunluk uyku", "/rehberler/uyku-ve-yorgunluk-destek/; /yazilar/kronik-yorgunluk-nedenleri-yonetimi/; /yazilar/fibromiyalji-ve-uyku-yonetimi/"),
  item(3, "blog", "cluster", "yorgunluk-ve-akupunktur-ne-zaman", "Yorgunluk ve Akupunktur: Ne Zaman", "Neden ayrılmadan akupunkturun ilk adım olmaması. Kanıt sınırı açıktır.", "Yorgunluk ve Akupunktur: Ne Zaman", "yorgunluk akupunktur", "/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/; https://uzmdrmuratcokay.com.tr/hizmetler/akupunktur; /rehberler/getat/"),
  item(3, "blog", "cluster", "yorgunlukta-tetkik-sirasi", "Yorgunlukta Tetkik Sırası", "Eksik tetkik, ilaç listesi ve branş yönlendirmesi. Evde tanı yok.", "Yorgunlukta Tetkik Sırası", "kronik yorgunluk tetkik", "/rehberler/uyku-ve-yorgunluk-destek/; /yazilar/kronik-yorgunluk-nedenleri-yonetimi/; https://uzmdrmuratcokay.com.tr/hizmetler/kronik-yorgunluk-sendromu"),
  item(3, "blog", "cluster", "vardiya-ve-uyku-duzeni", "Vardiya ve Uyku Düzeni", "Vardiyalı çalışmada uyku ve yorgunluk konuşması. Mesleki tanı koymaz.", "Vardiya ve Uyku Düzeni", "vardiya uyku yorgunluk", "/rehberler/uyku-ve-yorgunluk-destek/; /yazilar/diyabet-hipertansiyon-butuncul-destek/; /rehberler/butuncul-saglik/"),
  item(3, "blog", "cluster", "yalovada-yorgunluk-degerlendirmesi", "Yalova'da Yorgunluk Değerlendirmesi", "Yol süresi ve aynı gün işlem dayatmasının yorgunluk planına etkisi.", "Yalova'da Yorgunluk Değerlendirmesi", "yalova kronik yorgunluk", "https://uzmdrmuratcokay.com.tr/hizmetler/kronik-yorgunluk-sendromu; /rehberler/yalova-saglik/; /rehberler/uyku-ve-yorgunluk-destek/"),
  item(3, "blog", "cluster", "yorgunluk-ile-agrinin-kesisimi", "Yorgunluk ile Ağrının Kesişimi", "Fibromiyalji ve yorgunluk başlıklarının nasıl ayrıldığı.", "Yorgunluk ile Ağrının Kesişimi", "yorgunluk ağrı", "/yazilar/fibromiyalji-ile-yasam/; /rehberler/fibromiyalji-destek/; /rehberler/uyku-ve-yorgunluk-destek/"),
  item(3, "blog", "cluster", "uyku-bolunmesi-ve-gunluk-islev", "Uyku Bölünmesi ve Günlük İşlev", "Bölünen uykunun işlevselliğe etkisi. Uyku ilacı önermez.", "Uyku Bölünmesi ve Günlük İşlev", "uyku bölünmesi", "/rehberler/uyku-ve-yorgunluk-destek/; /yazilar/fibromiyalji-ve-uyku-yonetimi/; /rehberler/butuncul-saglik/"),

  item(4, "blog", "pillar", "kilo-yonetimi-destek-rehberi", "Kilo Yönetimi Destek Rehberi", "Beslenme, hareket ve izlemi abartısız anlatır. Hızlı sonuç ve fiyat yoktur.", "Kilo Yönetimi Destek Rehberi", "yalova kilo yönetimi", "/yazilar/kilo-yonetiminde-ozon-hacamat-destegi/; /rehberler/butuncul-saglik/; https://uzmdrmuratcokay.com.tr/hizmetler/kilo-verme-destegi"),
  item(4, "blog", "cluster", "metabolik-izlem-ve-yasam-bicimi", "Metabolik İzlem ve Yaşam Biçimi", "Kayıt, uyku ve hareketin kilo konuşmasındaki yeri.", "Metabolik İzlem ve Yaşam Biçimi", "metabolik sağlık yalova", "/rehberler/kilo-yonetimi-destek-rehberi/; /yazilar/diyabet-hipertansiyon-butuncul-destek/; https://uzmdrmuratcokay.com.tr/hizmetler/diyabet-yonetimi-destegi"),
  item(4, "blog", "cluster", "kilo-yonetiminde-ozonun-siniri", "Kilo Yönetiminde Ozonun Sınırı", "Ozonun kilo vaadi olmaması. Yaşam biçimi omurgadır.", "Kilo Yönetiminde Ozonun Sınırı", "ozon kilo", "/yazilar/ozon-tedavisinin-kullanim-alanlari/; https://uzmdrmuratcokay.com.tr/hizmetler/ozon-tedavisi; /yazilar/kilo-yonetiminde-ozon-hacamat-destegi/"),
  item(4, "blog", "cluster", "kilo-yonetiminde-hacamatin-siniri", "Kilo Yönetiminde Hacamatın Sınırı", "Hacamatın zayıflama iddiasıyla sunulamayacağı. Yasal dil.", "Kilo Yönetiminde Hacamatın Sınırı", "hacamat kilo", "/yazilar/hacamat-nedir-bilimsel-perspektif/; https://uzmdrmuratcokay.com.tr/hizmetler/hacamat; /rehberler/kilo-yonetimi-destek-rehberi/"),
  item(4, "blog", "cluster", "surdurulebilir-hareket-plani", "Sürdürülebilir Hareket Planı", "Gerçekçi hareket hedefi. Spor programı satışı yoktur.", "Sürdürülebilir Hareket Planı", "kilo hareket planı", "/rehberler/kilo-yonetimi-destek-rehberi/; /yazilar/fibromiyaljide-hareket-ve-islev/; /rehberler/butuncul-saglik/"),
  item(4, "blog", "cluster", "yalovada-kilo-destegi-randevusu", "Yalova'da Kilo Desteği Randevusu", "Yol, izlem sıklığı ve ilgili hekim koordinasyonu.", "Yalova'da Kilo Desteği Randevusu", "yalova kilo verme desteği", "https://uzmdrmuratcokay.com.tr/hizmetler/kilo-verme-destegi; /rehberler/yalova-saglik/; /rehberler/kilo-yonetimi-destek-rehberi/"),
  item(4, "blog", "cluster", "istah-uyku-ve-stres-iliskisi", "İştah, Uyku ve Stres İlişkisi", "Üç başlığın birlikte okunması. Diyet listesi yoktur.", "İştah, Uyku ve Stres İlişkisi", "iştah uyku stres", "/rehberler/uyku-ve-yorgunluk-destek/; /rehberler/kilo-yonetimi-destek-rehberi/; /yazilar/fibromiyalji-ve-stres-destek-cercevesi/"),
  item(4, "blog", "cluster", "diyet-iddialarini-okumak", "Diyet İddialarını Okumak", "Sosyal medya vaadi ile kanıt dilini ayırmak.", "Diyet İddialarını Okumak", "diyet iddia bilimsel", "/rehberler/kilo-yonetimi-destek-rehberi/; /rehberler/butuncul-saglik/; /yazilar/kilo-yonetiminde-ozon-hacamat-destegi/"),

  item(5, "blog", "pillar", "bel-ve-omurga-destek-rehberi", "Bel ve Omurga Destek Rehberi", "Kırmızı bayrak, görüntüleme ve GETAT sınırını anlatır. Cerrahi yerine geçmez.", "Bel ve Omurga Destek Rehberi", "yalova bel fıtığı", "/yazilar/bel-fitiklarinda-tamamlayici-tip/; /rehberler/butuncul-saglik/; https://uzmdrmuratcokay.com.tr/hizmetler/bel-fitiklari-omurga-sagligi"),
  item(5, "blog", "cluster", "bel-fitiginda-kirmizi-bayraklar", "Bel Fıtığında Kırmızı Bayraklar", "Acil başvuru gerektiren bulgular. Tamamlayıcı yaklaşım ertelenir.", "Bel Fıtığında Kırmızı Bayraklar", "bel fıtığı kırmızı bayrak", "/rehberler/bel-ve-omurga-destek-rehberi/; /yazilar/bel-fitiklarinda-tamamlayici-tip/; /rehberler/getat/"),
  item(5, "blog", "cluster", "goruntuleme-raporunu-anlamak", "Görüntüleme Raporunu Anlamak", "MR cümlelerini abartmadan okumak. Radyolojik tanı koymaz.", "Görüntüleme Raporunu Anlamak", "bel fıtığı MR", "/rehberler/bel-ve-omurga-destek-rehberi/; https://uzmdrmuratcokay.com.tr/hizmetler/bel-fitiklari-omurga-sagligi; /yazilar/bel-fitiklarinda-tamamlayici-tip/"),
  item(5, "blog", "cluster", "bel-agrisinda-getatin-yeri", "Bel Ağrısında GETAT'ın Yeri", "Hacamat ve akupunkturun omurga konuşmasındaki sınırı.", "Bel Ağrısında GETAT'ın Yeri", "bel ağrısı hacamat", "/rehberler/getat/; /yazilar/hacamat-nedir-bilimsel-perspektif/; /yazilar/akupunktur-hangi-durumlarda-tercih-edilir/"),
  item(5, "blog", "cluster", "uzun-yol-ve-bel-planlamasi", "Uzun Yol ve Bel Planlaması", "Armutlu, Gemlik ve Orhangazi yolunun izleme etkisi.", "Uzun Yol ve Bel Planlaması", "yalova bel fıtığı ulaşım", "https://uzmdrmuratcokay.com.tr/bolgeler/armutlu; https://uzmdrmuratcokay.com.tr/bolgeler/gemlik; /rehberler/bel-ve-omurga-destek-rehberi/"),
  item(5, "blog", "cluster", "yalovada-bel-degerlendirmesi", "Yalova'da Bel Değerlendirmesi", "Mevcut tetkik, branş takibi ve randevu hazırlığı.", "Yalova'da Bel Değerlendirmesi", "yalova bel fıtığı", "https://uzmdrmuratcokay.com.tr/hizmetler/bel-fitiklari-omurga-sagligi; /rehberler/yalova-saglik/; /rehberler/bel-ve-omurga-destek-rehberi/"),
  item(5, "blog", "cluster", "oturma-suresi-ve-omurga", "Oturma Süresi ve Omurga", "Masa başı ve yolculukta yükün konuşulması. Egzersiz satışı yok.", "Oturma Süresi ve Omurga", "oturma bel ağrısı", "/rehberler/bel-ve-omurga-destek-rehberi/; /yazilar/fibromiyaljide-hareket-ve-islev/; /rehberler/butuncul-saglik/"),
  item(5, "blog", "cluster", "fizik-tedavi-ile-koordinasyon", "Fizik Tedavi ile Koordinasyon", "GETAT'ın fizik tedavinin yerine geçmemesi.", "Fizik Tedavi ile Koordinasyon", "bel fıtığı fizik tedavi", "/rehberler/bel-ve-omurga-destek-rehberi/; /rehberler/getat/; /yazilar/bel-fitiklarinda-tamamlayici-tip/"),

  item(6, "blog", "pillar", "yalova-saglik-turizmi-2027", "Yalova Sağlık Turizmi 2027 Rehberi", "Yol, konaklama ve tıbbi birim ayrımını sakin dille anlatır. Tur paketi satmaz.", "Yalova Sağlık Turizmi 2027 Rehberi", "yalova sağlık turizmi", "/yazilar/yalovada-saglik-turizmi/; /rehberler/yalova-saglik/; https://uzmdrmuratcokay.com.tr/bolgeler"),
  item(6, "blog", "cluster", "istanbuldan-yalova-saglik-yolculugu", "İstanbul'dan Yalova Sağlık Yolculuğu", "Feribot ve kara yolu sürelerinin randevu planına etkisi.", "İstanbul'dan Yalova Sağlık Yolculuğu", "istanbul yalova sağlık", "/rehberler/yalova-saglik-turizmi-2027/; https://uzmdrmuratcokay.com.tr/iletisim; /yazilar/yalovada-saglik-turizmi/"),
  item(6, "blog", "cluster", "bursadan-yalova-degerlendirme-plani", "Bursa'dan Yalova Değerlendirme Planı", "Orhangazi ve Gemlik bağlantısıyla planlama.", "Bursa'dan Yalova Değerlendirme Planı", "bursa yalova klinik", "https://uzmdrmuratcokay.com.tr/bolgeler/orhangazi; https://uzmdrmuratcokay.com.tr/bolgeler/gemlik; /rehberler/yalova-saglik-turizmi-2027/"),
  item(6, "blog", "cluster", "termal-konaklama-ve-tibbi-sinir", "Termal Konaklama ve Tıbbi Sınır", "Tesisin tıbbi birim olmadığı. Kaplıca vaadi yoktur.", "Termal Konaklama ve Tıbbi Sınır", "yalova termal sağlık", "/yazilar/yalovanin-termal-sulari-ve-saglik/; https://uzmdrmuratcokay.com.tr/bolgeler/termal; /rehberler/yalova-saglik/"),
  item(6, "blog", "cluster", "sezon-yogunlugu-ve-randevu", "Sezon Yoğunluğu ve Randevu", "Yaz ve hafta sonu trafiğinin görüşme saatine etkisi.", "Sezon Yoğunluğu ve Randevu", "yalova randevu yaz", "https://uzmdrmuratcokay.com.tr/bolgeler/cinarcik; /rehberler/yalova-saglik-turizmi-2027/; https://uzmdrmuratcokay.com.tr/iletisim"),
  item(6, "blog", "cluster", "saglik-turizminde-yasal-cerceve", "Sağlık Turizminde Yasal Çerçeve", "Tanıtım yasağı, kayıt ve yönlendirme. Fiyat yoktur.", "Sağlık Turizminde Yasal Çerçeve", "sağlık turizmi yasal", "/yazilar/yalovadaki-saglik-kuruluslari-rehberi/; /rehberler/yalova-saglik/; /rehberler/yalova-saglik-turizmi-2027/"),
  item(6, "blog", "cluster", "cinarcik-termal-guzergah-rehberi", "Çınarcık-Termal Güzergâh Rehberi", "Sahil yolu ve dönemsel yoğunluk. Tur önerisi yoktur.", "Çınarcık-Termal Güzergâh Rehberi", "çınarcık termal ulaşım", "https://uzmdrmuratcokay.com.tr/bolgeler/cinarcik; https://uzmdrmuratcokay.com.tr/bolgeler/termal; /rehberler/yalova-saglik-turizmi-2027/"),
  item(6, "blog", "cluster", "yalovada-ilk-gorusme-kontrol-listesi", "Yalova'da İlk Görüşme Kontrol Listesi", "İlaç kutusu, tetkik ve yol payı. Paket satış yoktur.", "Yalova'da İlk Görüşme Kontrol Listesi", "yalova ilk görüşme", "https://uzmdrmuratcokay.com.tr/iletisim; /yazilar/yalovada-butuncul-saglik-adresleri/; /rehberler/yalova-saglik-turizmi-2027/"),

  item(7, "blog", "pillar", "sac-ve-cilt-sagligi-rehberi", "Saç ve Cilt Sağlığı Rehberi", "Dökülme, leke ve bariyeri neden ayrımıyla anlatır. Sonuç vaadi yoktur.", "Saç ve Cilt Sağlığı Rehberi", "yalova saç dökülmesi", "/yazilar/sac-dokulmesinde-mezoterapi-prp/; /yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/; /rehberler/medikal-estetik/"),
  item(7, "blog", "cluster", "sac-dokulmesinde-neden-ayrimi", "Saç Dökülmesinde Neden Ayrımı", "Önce neden, sonra yöntem. Cerrahi adaylığı ertelenmez.", "Saç Dökülmesinde Neden Ayrımı", "saç dökülmesi neden", "/rehberler/sac-ve-cilt-sagligi-rehberi/; https://uzmdrmuratcokay.com.tr/hizmetler/sac-dokulmesi-tedavisi; /yazilar/sac-dokulmesinde-mezoterapi-prp/"),
  item(7, "blog", "cluster", "mezoterapi-ve-prp-beklenti", "Mezoterapi ve PRP: Beklenti", "Seans kilidi ve garanti dilinin neden kullanılmadığı.", "Mezoterapi ve PRP: Beklenti", "mezoterapi prp yalova", "https://uzmdrmuratcokay.com.tr/hizmetler/mezoterapi; /yazilar/sac-dokulmesinde-mezoterapi-prp/; /rehberler/sac-ve-cilt-sagligi-rehberi/"),
  item(7, "blog", "cluster", "yuz-lekelerinde-gunes-ve-bariyer", "Yüz Lekelerinde Güneş ve Bariyer", "Leke türü ve güneş koruması. Mucize ürün yoktur.", "Yüz Lekelerinde Güneş ve Bariyer", "yüz lekesi güneş", "/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/; https://uzmdrmuratcokay.com.tr/hizmetler/yuzde-matlik-kirisiklik-leke-tedavisi; /rehberler/sac-ve-cilt-sagligi-rehberi/"),
  item(7, "blog", "cluster", "lazer-yaklasiminin-sinirlari", "Lazer Yaklaşımının Sınırları", "Cilt tipi ve erteleme nedenleri. Fiyat yoktur.", "Lazer Yaklaşımının Sınırları", "yalova lazer", "https://uzmdrmuratcokay.com.tr/hizmetler/lazer; /yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/; /rehberler/medikal-estetik/"),
  item(7, "blog", "cluster", "yalovada-cilt-degerlendirmesi", "Yalova'da Cilt Değerlendirmesi", "Yaz güneşi, yol ve randevu zamanlaması.", "Yalova'da Cilt Değerlendirmesi", "yalova cilt değerlendirme", "https://uzmdrmuratcokay.com.tr/hizmetler; /rehberler/yalova-saglik/; /rehberler/sac-ve-cilt-sagligi-rehberi/"),
  item(7, "blog", "cluster", "mevsimsel-cilt-bilgisi", "Mevsimsel Cilt Bakımı Bilgisi", "Yaz yoğunluğu ve bariyer. Ürün satışı yoktur.", "Mevsimsel Cilt Bakımı Bilgisi", "yaz cilt yalova", "/rehberler/sac-ve-cilt-sagligi-rehberi/; /yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/; /rehberler/yalova-saglik-turizmi-2027/"),
  item(7, "blog", "cluster", "sac-dokulmesi-ve-stres", "Saç Dökülmesi ve Stres", "Stresin tek neden sayılmaması. Branş yönlendirmesi saklanır.", "Saç Dökülmesi ve Stres", "saç dökülmesi stres", "/rehberler/sac-ve-cilt-sagligi-rehberi/; /yazilar/fibromiyalji-ve-stres-destek-cercevesi/; /yazilar/sac-dokulmesinde-mezoterapi-prp/"),

  item(8, "blog", "pillar", "metabolik-destek-rehberi", "Diyabet ve Tansiyon Destek Rehberi", "İlaçların yerine geçmeyen yaşam biçimi desteği. Ölçüm omurgadır.", "Diyabet ve Tansiyon Destek Rehberi", "yalova diyabet desteği", "/yazilar/diyabet-hipertansiyon-butuncul-destek/; https://uzmdrmuratcokay.com.tr/hizmetler/diyabet-yonetimi-destegi; /rehberler/butuncul-saglik/"),
  item(8, "blog", "cluster", "diyabette-yasam-bicimi-destegi", "Diyabette Yaşam Biçimi Desteği", "Beslenme ve hareket konuşması. İnsülin değişimi yoktur.", "Diyabette Yaşam Biçimi Desteği", "diyabet yaşam biçimi", "/rehberler/metabolik-destek-rehberi/; https://uzmdrmuratcokay.com.tr/hizmetler/diyabet-yonetimi-destegi; /rehberler/kilo-yonetimi-destek-rehberi/"),
  item(8, "blog", "cluster", "hipertansiyonda-izlem-ve-hareket", "Hipertansiyonda İzlem ve Hareket", "Ölçüm kaydı ve ilgili hekim. Tuz vaadi yoktur.", "Hipertansiyonda İzlem ve Hareket", "yalova hipertansiyon", "https://uzmdrmuratcokay.com.tr/hizmetler/hipertansiyon-destegi; /yazilar/diyabet-hipertansiyon-butuncul-destek/; /rehberler/metabolik-destek-rehberi/"),
  item(8, "blog", "cluster", "ilac-saatleri-ve-yolculuk", "İlaç Saatleri ve Yolculuk", "Feribot ve ilçe yolunda ilaç saati. İlaç kesilmez.", "İlaç Saatleri ve Yolculuk", "diyabet yolculuk ilaç", "/rehberler/yalova-saglik-turizmi-2027/; /rehberler/metabolik-destek-rehberi/; https://uzmdrmuratcokay.com.tr/bolgeler"),
  item(8, "blog", "cluster", "metabolik-konularda-getat-siniri", "Metabolik Konularda GETAT Sınırı", "Hacamat ve ozonun ilaç yerine geçmemesi.", "Metabolik Konularda GETAT Sınırı", "diyabet hacamat", "/rehberler/getat/; /yazilar/hacamat-nedir-bilimsel-perspektif/; /rehberler/metabolik-destek-rehberi/"),
  item(8, "blog", "cluster", "yalovada-metabolik-gorusme", "Yalova'da Metabolik Görüşme", "Son tetkik, ilaç listesi ve randevu hazırlığı.", "Yalova'da Metabolik Görüşme", "yalova diyabet randevu", "https://uzmdrmuratcokay.com.tr/hizmetler/diyabet-yonetimi-destegi; https://uzmdrmuratcokay.com.tr/iletisim; /rehberler/metabolik-destek-rehberi/"),
  item(8, "blog", "cluster", "tuz-uyku-ve-tansiyon", "Tuz, Uyku ve Tansiyon", "Üç başlığın birlikte okunması. Diyet listesi yoktur.", "Tuz, Uyku ve Tansiyon", "tansiyon uyku", "/rehberler/uyku-ve-yorgunluk-destek/; /rehberler/metabolik-destek-rehberi/; https://uzmdrmuratcokay.com.tr/hizmetler/hipertansiyon-destegi"),
  item(8, "blog", "cluster", "kan-sekeri-kaydi-nasil-tutulur", "Kan Şekeri Kaydı Nasıl Tutulur", "Kayıt alışkanlığı. Cihaz veya marka satışı yoktur.", "Kan Şekeri Kaydı Nasıl Tutulur", "kan şekeri kayıt", "/rehberler/metabolik-destek-rehberi/; /yazilar/diyabet-hipertansiyon-butuncul-destek/; /rehberler/butuncul-saglik/"),

  item(9, "blog", "pillar", "kadin-sagliginda-butuncul-destek", "Kadın Sağlığında Bütüncül Destek", "Uyku, demir ve yönlendirme. Hormonal tedavi vaadi yoktur.", "Kadın Sağlığında Bütüncül Destek", "yalova kadın sağlığı", "/rehberler/butuncul-saglik/; /rehberler/uyku-ve-yorgunluk-destek/; https://uzmdrmuratcokay.com.tr/hakkimda"),
  item(9, "blog", "cluster", "uyku-ve-hormonal-dalgalanma", "Uyku ve Hormonal Dalgalanma Bilgisi", "Döngü ile uyku ilişkisinin genel çerçevesi. Hormon reçetesi yoktur.", "Uyku ve Hormonal Dalgalanma Bilgisi", "uyku hormonal denge", "/rehberler/kadin-sagliginda-butuncul-destek/; /rehberler/uyku-ve-yorgunluk-destek/; /yazilar/kronik-yorgunlukta-uyku-hijyeni/"),
  item(9, "blog", "cluster", "perimenopozda-hareket-ve-uyku", "Perimenopozda Hareket ve Uyku", "Yaşam biçimi konuşması. Hormon yerine geçmez.", "Perimenopozda Hareket ve Uyku", "perimenopoz uyku", "/rehberler/kadin-sagliginda-butuncul-destek/; /yazilar/surdurulebilir-hareket-plani/; /rehberler/butuncul-saglik/"),
  item(9, "blog", "cluster", "kadinlarda-akupunktur-ne-zaman", "Kadınlarda Akupunktur: Ne Zaman", "Konuşulabilir başlıklar ve branş önceliği.", "Kadınlarda Akupunktur: Ne Zaman", "kadın akupunktur yalova", "/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/; https://uzmdrmuratcokay.com.tr/hizmetler/akupunktur; /rehberler/getat/"),
  item(9, "blog", "cluster", "migren-ve-dongu-bilgilendirme", "Migren ve Döngü: Bilgilendirme", "Nöroloji önceliği. GETAT yerine geçmez.", "Migren ve Döngü: Bilgilendirme", "migren döngü", "/rehberler/kadin-sagliginda-butuncul-destek/; /yazilar/akupunktur-hangi-durumlarda-tercih-edilir/; /rehberler/butuncul-saglik/"),
  item(9, "blog", "cluster", "yalovada-kadin-sagligi-yonlendirme", "Yalova'da Kadın Sağlığı Yönlendirmesi", "Hangi kapının ne zaman öncelikli olduğu.", "Yalova'da Kadın Sağlığı Yönlendirmesi", "yalova kadın sağlığı", "/yazilar/yalovadaki-saglik-kuruluslari-rehberi/; https://uzmdrmuratcokay.com.tr/iletisim; /rehberler/kadin-sagliginda-butuncul-destek/"),
  item(9, "blog", "cluster", "demir-eksikligi-ve-yorgunluk", "Demir Eksikliği ve Yorgunluk", "Tetkik ve ilgili hekim. Demir satışı yoktur.", "Demir Eksikliği ve Yorgunluk", "demir eksikliği yorgunluk", "/rehberler/uyku-ve-yorgunluk-destek/; /yazilar/yorgunlukta-tetkik-sirasi/; /rehberler/kadin-sagliginda-butuncul-destek/"),
  item(9, "blog", "cluster", "pelvik-agrida-hangi-kapi", "Pelvik Ağrıda Hangi Kapı", "Acil ve uzmanlık önceliği. Tamamlayıcı yaklaşım bekler.", "Pelvik Ağrıda Hangi Kapı", "pelvik ağrı yönlendirme", "/rehberler/kadin-sagliginda-butuncul-destek/; /yazilar/yalovadaki-saglik-kuruluslari-rehberi/; /rehberler/yalova-saglik/"),

  item(10, "blog", "pillar", "koruyucu-saglik-ve-bagisiklik", "Koruyucu Sağlık ve Bağışıklık Rehberi", "Aşı ve branş izlemi saklanır. Mucize bağışıklık vaadi yoktur.", "Koruyucu Sağlık ve Bağışıklık Rehberi", "yalova koruyucu sağlık", "/rehberler/butuncul-saglik/; /rehberler/getat/; /yazilar/yalovadaki-saglik-kuruluslari-rehberi/"),
  item(10, "blog", "cluster", "mevsim-gecisinde-uyku-ve-hareket", "Mevsim Geçişinde Uyku ve Hareket", "Sonbahar düzeni. Takviye satışı yoktur.", "Mevsim Geçişinde Uyku ve Hareket", "sonbahar bağışıklık", "/rehberler/koruyucu-saglik-ve-bagisiklik/; /rehberler/uyku-ve-yorgunluk-destek/; /yazilar/surdurulebilir-hareket-plani/"),
  item(10, "blog", "cluster", "asi-ve-brans-izlemi-saklanir", "Aşı ve Branş İzlemi Saklanır", "GETAT'ın aşı yerine geçmemesi. Resmî takvim önceliklidir.", "Aşı ve Branş İzlemi Saklanır", "aşı getat", "/rehberler/koruyucu-saglik-ve-bagisiklik/; /rehberler/getat/; /yazilar/yalovadaki-saglik-kuruluslari-rehberi/"),
  item(10, "blog", "cluster", "getat-ve-enfeksiyon-donemi", "GETAT ve Enfeksiyon Dönemi", "Ateşli dönemde uygulamanın ertelenmesi.", "GETAT ve Enfeksiyon Dönemi", "hacamat enfeksiyon", "/yazilar/hacamat-nedir-bilimsel-perspektif/; /rehberler/getat/; /rehberler/koruyucu-saglik-ve-bagisiklik/"),
  item(10, "blog", "cluster", "d-vitamini-iddialarini-okumak", "D Vitamini İddialarını Okumak", "Eksiklik tetkikle konuşulur. Ürün satışı yoktur.", "D Vitamini İddialarını Okumak", "D vitamini iddia", "/rehberler/koruyucu-saglik-ve-bagisiklik/; /yazilar/yorgunlukta-tetkik-sirasi/; /rehberler/butuncul-saglik/"),
  item(10, "blog", "cluster", "yalovada-sonbahar-degerlendirmesi", "Yalova'da Sonbahar Değerlendirmesi", "Mevsim ve randevu planı. Paket yoktur.", "Yalova'da Sonbahar Değerlendirmesi", "yalova sonbahar sağlık", "https://uzmdrmuratcokay.com.tr/iletisim; /rehberler/yalova-saglik/; /rehberler/koruyucu-saglik-ve-bagisiklik/"),
  item(10, "blog", "cluster", "el-hijyeni-ve-toplumsal-koruma", "El Hijyeni ve Toplumsal Koruma", "Basit korunma bilgisi. Ürün markası yoktur.", "El Hijyeni ve Toplumsal Koruma", "hijyen koruyucu sağlık", "/rehberler/koruyucu-saglik-ve-bagisiklik/; /yazilar/yalovadaki-saglik-kuruluslari-rehberi/; /rehberler/yalova-saglik/"),
  item(10, "blog", "cluster", "kronik-hastalikta-koruyucu-plan", "Kronik Hastalıkta Koruyucu Plan", "Diyabet ve tansiyon izleminin saklanması.", "Kronik Hastalıkta Koruyucu Plan", "kronik hastalık koruma", "/rehberler/metabolik-destek-rehberi/; /rehberler/koruyucu-saglik-ve-bagisiklik/; /yazilar/diyabet-hipertansiyon-butuncul-destek/"),

  item(11, "blog", "pillar", "cilt-yaslanmasi-yonetim-rehberi", "Cilt Yaşlanması Yönetim Rehberi", "Mimik, hacim ve güneş başlıkları. Gençleştirme vaadi yoktur.", "Cilt Yaşlanması Yönetim Rehberi", "yalova cilt yaşlanması", "/rehberler/medikal-estetik/; /rehberler/yalova-medikal-estetik-2027/; https://uzmdrmuratcokay.com.tr/hizmetler"),
  item(11, "blog", "cluster", "botoks-ve-mimik-cizgileri-bilgi", "Botoks ve Mimik Çizgileri: Bilgi", "Nasıl konuşulduğu, kimde ertelendiği. Garanti yoktur.", "Botoks ve Mimik Çizgileri: Bilgi", "botoks mimik", "/yazilar/botoks-kimler-icin-uygundur/; https://uzmdrmuratcokay.com.tr/hizmetler/botoks; /rehberler/cilt-yaslanmasi-yonetim-rehberi/"),
  item(11, "blog", "cluster", "dolgu-ile-hacim-sinirlari", "Dolgu ile Hacim: Sınırlar", "Oran ve güvenlik. Doğallık pazarlama cümlesi değildir.", "Dolgu ile Hacim: Sınırlar", "dolgu hacim yalova", "/yazilar/dogal-gorunumlu-dolgu-uygulamalari/; https://uzmdrmuratcokay.com.tr/hizmetler/dolgu; /rehberler/cilt-yaslanmasi-yonetim-rehberi/"),
  item(11, "blog", "cluster", "sivi-yuz-germe-ve-yas", "Sıvı Yüz Germe ve Yaş", "Yaş tek başına karar değildir. Değerlendirme yüz yüzedir.", "Sıvı Yüz Germe ve Yaş", "sıvı yüz germe yaş", "/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/; https://uzmdrmuratcokay.com.tr/hizmetler/sivi-yuz-germe; /rehberler/cilt-yaslanmasi-yonetim-rehberi/"),
  item(11, "blog", "cluster", "gunes-bariyer-ve-leke", "Güneş, Bariyer ve Leke", "Leke yönetiminde güneşin yeri. Mucize ürün yoktur.", "Güneş, Bariyer ve Leke", "leke güneş bariyer", "/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/; /rehberler/sac-ve-cilt-sagligi-rehberi/; /rehberler/cilt-yaslanmasi-yonetim-rehberi/"),
  item(11, "blog", "cluster", "yalovada-yasa-bagli-cilt-gorusmesi", "Yalova'da Yaşa Bağlı Cilt Görüşmesi", "Kış ışığı ve randevu zamanı. Paket yoktur.", "Yalova'da Yaşa Bağlı Cilt Görüşmesi", "yalova cilt yaşlanması", "https://uzmdrmuratcokay.com.tr/hizmetler; /rehberler/yalova-saglik/; /rehberler/cilt-yaslanmasi-yonetim-rehberi/"),
  item(11, "blog", "cluster", "beklenti-ve-fotograf-karsilastirmasi", "Beklenti ve Fotoğraf Karşılaştırması", "Öncesi-sonrası görselin neden kullanılmadığı.", "Beklenti ve Fotoğraf Karşılaştırması", "medikal estetik tanıtım kuralı", "/yazilar/dogal-gorunum-ne-demek/; /rehberler/medikal-estetik/; /rehberler/cilt-yaslanmasi-yonetim-rehberi/"),
  item(11, "blog", "cluster", "cilt-yaslanmasi-ve-uyku", "Cilt Yaşlanması ve Uyku", "Uyku ile cilt konuşmasının sınırı. Krem satışı yoktur.", "Cilt Yaşlanması ve Uyku", "cilt uyku", "/rehberler/uyku-ve-yorgunluk-destek/; /rehberler/cilt-yaslanmasi-yonetim-rehberi/; /yazilar/uyku-bolunmesi-ve-gunluk-islev/"),

  item(12, "blog", "pillar", "yalova-saglik-2027-yil-ozeti", "Yalova Sağlık 2027 Yıl Özeti", "Yılın okuma haritası ve yasal dil hatırlatması. Yeni vaat yoktur.", "Yalova Sağlık 2027 Yıl Özeti", "yalova sağlık rehberi 2027", "/rehberler/butuncul-saglik/; /rehberler/medikal-estetik/; /rehberler/yalova-saglik/"),
  item(12, "blog", "cluster", "yilin-en-cok-okunan-konulari", "Yılın En Çok Okunan Konuları", "Küme özeti. Sıralama üstünlük iddiası değildir.", "Yılın En Çok Okunan Konuları", "yalova sağlık yazıları", "/rehberler/yalova-saglik-2027-yil-ozeti/; /rehberler/fibromiyalji-destek/; /rehberler/metabolik-destek-rehberi/"),
  item(12, "blog", "cluster", "hizmet-lokasyon-haritasi-ozeti", "Hizmet-Lokasyon Haritası Özeti", "Klinik sayfalarının yıllık iç bağlantı özeti.", "Hizmet-Lokasyon Haritası Özeti", "yalova hizmet bölgeler", "https://uzmdrmuratcokay.com.tr/hizmetler; https://uzmdrmuratcokay.com.tr/bolgeler; /rehberler/yalova-saglik/"),
  item(12, "blog", "cluster", "getat-yil-rehberi-ozeti", "GETAT Yıl Rehberi Özeti", "Hacamat, akupunktur, sülük ve ozonun yıl özeti.", "GETAT Yıl Rehberi Özeti", "getat yalova özet", "/rehberler/getat/; /yazilar/hacamat-nedir-bilimsel-perspektif/; /yazilar/akupunktur-hangi-durumlarda-tercih-edilir/"),
  item(12, "blog", "cluster", "medikal-estetik-yil-rehberi-ozeti", "Medikal Estetik Yıl Rehberi Özeti", "Botoks, dolgu ve cilt başlıklarının yıl özeti.", "Medikal Estetik Yıl Rehberi Özeti", "medikal estetik özet", "/rehberler/medikal-estetik/; /rehberler/yalova-medikal-estetik-2027/; /rehberler/cilt-yaslanmasi-yonetim-rehberi/"),
  item(12, "blog", "cluster", "butuncul-saglik-yil-rehberi-ozeti", "Bütüncül Sağlık Yıl Rehberi Özeti", "Fibromiyalji, yorgunluk, kilo ve bel özeti.", "Bütüncül Sağlık Yıl Rehberi Özeti", "bütüncül sağlık özet", "/rehberler/butuncul-saglik/; /rehberler/fibromiyalji-destek/; /rehberler/bel-ve-omurga-destek-rehberi/"),
  item(12, "blog", "cluster", "2028-icin-okuma-sirasi", "2028 İçin Okuma Sırası", "Yeni okura önerilen sıra. Üstünlük iddiası yoktur.", "2028 İçin Okuma Sırası", "yalova sağlık okuma sırası", "/rehberler/yalova-saglik-2027-yil-ozeti/; /rehberler/butuncul-saglik/; /rehberler/medikal-estetik/"),
  item(12, "blog", "cluster", "kaynak-ve-yasal-cerceve-ozeti", "Kaynak ve Yasal Çerçeve Özeti", "12 Kasım 2025 tanıtım çerçevesinin yıl sonu hatırlatması.", "Kaynak ve Yasal Çerçeve Özeti", "tıbbi tanıtım yasağı", "/rehberler/yalova-saglik-2027-yil-ozeti/; https://uzmdrmuratcokay.com.tr/hakkimda; /yazar/"),
];

const clinic = [
  item(1, "klinik", "hibrit", "fibromiyalji-tedavisi/ciftlikkoy", "Çiftlikköy Fibromiyalji Desteği", "Çiftlikköy'den Yalova Merkez'e fibromiyalji değerlendirme ve ulaşım bilgisi.", "Çiftlikköy'den Fibromiyalji Desteği", "çiftlikköy fibromiyalji", "/hizmetler/fibromiyalji; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/yazilar/fibromiyalji-ile-yasam/"),
  item(1, "klinik", "hibrit", "fibromiyalji-tedavisi/altinova", "Altınova Fibromiyalji Desteği", "Altınova'dan kliniğe yol ve fibromiyalji görüşme planı. Sonuç vaadi yoktur.", "Altınova'dan Fibromiyalji Desteği", "altınova fibromiyalji", "/hizmetler/fibromiyalji; /bolgeler/altinova; https://yalovamedikalestetik.com.tr/rehberler/fibromiyalji-destek/"),
  item(1, "klinik", "hibrit", "fibromiyalji-tedavisi/armutlu", "Armutlu Fibromiyalji Desteği", "Uzun kıyı yolunun izlem planına etkisi. Seans kilidi yoktur.", "Armutlu'dan Fibromiyalji Desteği", "armutlu fibromiyalji", "/hizmetler/fibromiyalji; /bolgeler/armutlu; https://yalovamedikalestetik.com.tr/yazilar/yalovadan-fibromiyalji-randevu-plani/"),
  item(1, "klinik", "hibrit", "fibromiyalji-tedavisi/gemlik", "Gemlik Fibromiyalji Desteği", "Gemlik'ten Yalova Merkez'e değerlendirme planı.", "Gemlik'ten Fibromiyalji Desteği", "gemlik fibromiyalji", "/hizmetler/fibromiyalji; /bolgeler/gemlik; https://yalovamedikalestetik.com.tr/rehberler/fibromiyalji-destek/"),

  item(2, "klinik", "hibrit", "botoks-uygulamasi/cinarcik", "Çınarcık Botoks Bilgisi", "Çınarcık'tan botoks görüşmesi ve sahil yolu zamanlaması.", "Çınarcık'tan Botoks Bilgisi", "çınarcık botoks", "/hizmetler/botoks; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/botoks-kimler-icin-uygundur/"),
  item(2, "klinik", "hibrit", "dolgu/yalova-merkez", "Yalova Merkez Dolgu Bilgisi", "Merkezden dolgu değerlendirmesi. Fiyat yoktur.", "Yalova Merkez'de Dolgu Bilgisi", "yalova merkez dolgu", "/hizmetler/dolgu; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/yazilar/dogal-gorunumlu-dolgu-uygulamalari/"),
  item(2, "klinik", "hibrit", "dolgu/termal", "Termal Dolgu Bilgisi", "Termal güzergâhından dolgu görüşmesi.", "Termal'den Dolgu Bilgisi", "termal dolgu", "/hizmetler/dolgu; /bolgeler/termal; https://yalovamedikalestetik.com.tr/rehberler/yalova-medikal-estetik-2027/"),
  item(2, "klinik", "hibrit", "sivi-yuz-germe/cinarcik", "Çınarcık Sıvı Yüz Germe", "Çınarcık'tan sıvı yüz germe değerlendirme planı.", "Çınarcık'tan Sıvı Yüz Germe", "çınarcık sıvı yüz germe", "/hizmetler/sivi-yuz-germe; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/sivi-yuz-germe-hacim-vermeden-sikilasma/"),

  item(3, "klinik", "hibrit", "kronik-yorgunluk/yalova-merkez", "Merkez Kronik Yorgunluk Desteği", "Yalova Merkez'de yorgunluk değerlendirmesi. Tanı koymaz.", "Yalova Merkez'de Yorgunluk Desteği", "yalova merkez yorgunluk", "/hizmetler/kronik-yorgunluk-sendromu; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/rehberler/uyku-ve-yorgunluk-destek/"),
  item(3, "klinik", "hibrit", "kronik-yorgunluk/cinarcik", "Çınarcık Kronik Yorgunluk", "Sahil yolunun yorgunluk planına etkisi.", "Çınarcık'tan Yorgunluk Desteği", "çınarcık kronik yorgunluk", "/hizmetler/kronik-yorgunluk-sendromu; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/kronik-yorgunluk-nedenleri-yonetimi/"),
  item(3, "klinik", "hibrit", "kronik-yorgunluk/termal", "Termal Kronik Yorgunluk", "Termal'den yorgunluk görüşmesi. Tesis tıbbi birim değildir.", "Termal'den Yorgunluk Desteği", "termal yorgunluk", "/hizmetler/kronik-yorgunluk-sendromu; /bolgeler/termal; https://yalovamedikalestetik.com.tr/yazilar/yalovanin-termal-sulari-ve-saglik/"),
  item(3, "klinik", "hibrit", "kronik-yorgunluk/ciftlikkoy", "Çiftlikköy Kronik Yorgunluk", "Kısa mesafenin izlem sıklığına etkisi.", "Çiftlikköy'den Yorgunluk Desteği", "çiftlikköy yorgunluk", "/hizmetler/kronik-yorgunluk-sendromu; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/rehberler/uyku-ve-yorgunluk-destek/"),

  item(4, "klinik", "hibrit", "kilo-verme-destegi/termal", "Termal Kilo Desteği", "Termal'den kilo yönetimi görüşmesi. Hızlı sonuç yoktur.", "Termal'den Kilo Desteği", "termal kilo yönetimi", "/hizmetler/kilo-verme-destegi; /bolgeler/termal; https://yalovamedikalestetik.com.tr/rehberler/kilo-yonetimi-destek-rehberi/"),
  item(4, "klinik", "hibrit", "kilo-verme-destegi/ciftlikkoy", "Çiftlikköy Kilo Desteği", "Çiftlikköy'den kilo desteği planı.", "Çiftlikköy'den Kilo Desteği", "çiftlikköy kilo", "/hizmetler/kilo-verme-destegi; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/yazilar/kilo-yonetiminde-ozon-hacamat-destegi/"),
  item(4, "klinik", "hibrit", "kilo-verme-destegi/altinova", "Altınova Kilo Desteği", "Kara yolu süresinin izleme etkisi.", "Altınova'dan Kilo Desteği", "altınova kilo", "/hizmetler/kilo-verme-destegi; /bolgeler/altinova; https://yalovamedikalestetik.com.tr/rehberler/kilo-yonetimi-destek-rehberi/"),
  item(4, "klinik", "hibrit", "ozon-tedavisi/cinarcik", "Çınarcık Ozon Bilgisi", "Ozonun uygunluk ve yöntem konuşması. Kilo vaadi yoktur.", "Çınarcık'tan Ozon Bilgisi", "çınarcık ozon", "/hizmetler/ozon-tedavisi; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/ozon-tedavisinin-kullanim-alanlari/"),

  item(5, "klinik", "hibrit", "bel-fitiklari/termal", "Termal Bel Desteği", "Termal'den bel değerlendirmesi. Cerrahi yerine geçmez.", "Termal'den Bel Desteği", "termal bel fıtığı", "/hizmetler/bel-fitiklari-omurga-sagligi; /bolgeler/termal; https://yalovamedikalestetik.com.tr/rehberler/bel-ve-omurga-destek-rehberi/"),
  item(5, "klinik", "hibrit", "bel-fitiklari/armutlu", "Armutlu Bel Desteği", "Uzun yol ve bel planı.", "Armutlu'dan Bel Desteği", "armutlu bel fıtığı", "/hizmetler/bel-fitiklari-omurga-sagligi; /bolgeler/armutlu; https://yalovamedikalestetik.com.tr/yazilar/uzun-yol-ve-bel-planlamasi/"),
  item(5, "klinik", "hibrit", "bel-fitiklari/orhangazi", "Orhangazi Bel Desteği", "Bursa sınırından bel değerlendirmesi.", "Orhangazi'den Bel Desteği", "orhangazi bel fıtığı", "/hizmetler/bel-fitiklari-omurga-sagligi; /bolgeler/orhangazi; https://yalovamedikalestetik.com.tr/rehberler/bel-ve-omurga-destek-rehberi/"),
  item(5, "klinik", "hibrit", "bel-fitiklari/gemlik", "Gemlik Bel Desteği", "Gemlik'ten Yalova Merkez bel görüşmesi.", "Gemlik'ten Bel Desteği", "gemlik bel fıtığı", "/hizmetler/bel-fitiklari-omurga-sagligi; /bolgeler/gemlik; https://yalovamedikalestetik.com.tr/yazilar/bel-fitiklarinda-tamamlayici-tip/"),

  item(6, "klinik", "sayfa", "bolgeler/istanbul-yalova", "İstanbul'dan Yalova Ulaşım", "Feribot ve kara yolu ile randevu planı. Tur satışı yoktur.", "İstanbul'dan Yalova Ulaşım", "istanbul yalova klinik", "/bolgeler; /iletisim; https://yalovamedikalestetik.com.tr/yazilar/istanbuldan-yalova-saglik-yolculugu/"),
  item(6, "klinik", "sayfa", "bolgeler/bursa-yalova", "Bursa'dan Yalova Ulaşım", "Orhangazi-Gemlik hattı ile planlama.", "Bursa'dan Yalova Ulaşım", "bursa yalova klinik", "/bolgeler/orhangazi; /bolgeler/gemlik; https://yalovamedikalestetik.com.tr/yazilar/bursadan-yalova-degerlendirme-plani/"),
  item(6, "klinik", "hibrit", "akupunktur/termal", "Termal Akupunktur Bilgisi", "Termal'den akupunktur görüşmesi.", "Termal'den Akupunktur Bilgisi", "termal akupunktur", "/hizmetler/akupunktur; /bolgeler/termal; https://yalovamedikalestetik.com.tr/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/"),
  item(6, "klinik", "hibrit", "hacamat/termal", "Termal Hacamat Bilgisi", "Hacamat uygunluğu ve yol planı. Kilo vaadi yoktur.", "Termal'den Hacamat Bilgisi", "termal hacamat", "/hizmetler/hacamat; /bolgeler/termal; https://yalovamedikalestetik.com.tr/yazilar/hacamat-nedir-bilimsel-perspektif/"),

  item(7, "klinik", "hibrit", "sac-dokulmesi-tedavisi/cinarcik", "Çınarcık Saç Dökülmesi", "Neden ayrımı ve randevu. Sonuç vaadi yoktur.", "Çınarcık'tan Saç Dökülmesi Desteği", "çınarcık saç dökülmesi", "/hizmetler/sac-dokulmesi-tedavisi; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/sac-dokulmesinde-mezoterapi-prp/"),
  item(7, "klinik", "hibrit", "sac-dokulmesi-tedavisi/ciftlikkoy", "Çiftlikköy Saç Dökülmesi", "Kısa mesafe ve izlem planı.", "Çiftlikköy'den Saç Dökülmesi Desteği", "çiftlikköy saç dökülmesi", "/hizmetler/sac-dokulmesi-tedavisi; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/rehberler/sac-ve-cilt-sagligi-rehberi/"),
  item(7, "klinik", "hibrit", "yuzde-matlik-kirisiklik-leke-tedavisi/yalova-merkez", "Merkez Leke ve Matlık", "Leke türü ve güneş. Mucize iddiası yoktur.", "Yalova Merkez'de Leke Bilgisi", "yalova leke tedavisi", "/hizmetler/yuzde-matlik-kirisiklik-leke-tedavisi; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/"),
  item(7, "klinik", "hibrit", "mezoterapi/yalova-merkez", "Merkez Mezoterapi Bilgisi", "İçerik ve bölge değerlendirmesi. Fiyat yoktur.", "Yalova Merkez'de Mezoterapi", "yalova mezoterapi", "/hizmetler/mezoterapi; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/yazilar/sac-dokulmesinde-mezoterapi-prp/"),

  item(8, "klinik", "hibrit", "diyabet-yonetimi-destegi/yalova-merkez", "Merkez Diyabet Desteği", "İlaçların yerine geçmeyen destek. Ölçüm omurgadır.", "Yalova Merkez'de Diyabet Desteği", "yalova diyabet", "/hizmetler/diyabet-yonetimi-destegi; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/rehberler/metabolik-destek-rehberi/"),
  item(8, "klinik", "hibrit", "diyabet-yonetimi-destegi/ciftlikkoy", "Çiftlikköy Diyabet Desteği", "Kısa mesafe izlem planı.", "Çiftlikköy'den Diyabet Desteği", "çiftlikköy diyabet", "/hizmetler/diyabet-yonetimi-destegi; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/yazilar/diyabet-hipertansiyon-butuncul-destek/"),
  item(8, "klinik", "hibrit", "hipertansiyon-destegi/yalova-merkez", "Merkez Hipertansiyon Desteği", "Tansiyon izlemi saklanır. İlaç kesilmez.", "Yalova Merkez'de Hipertansiyon Desteği", "yalova hipertansiyon", "/hizmetler/hipertansiyon-destegi; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/rehberler/metabolik-destek-rehberi/"),
  item(8, "klinik", "hibrit", "hipertansiyon-destegi/altinova", "Altınova Hipertansiyon Desteği", "Kara yolu ve tansiyon görüşmesi.", "Altınova'dan Hipertansiyon Desteği", "altınova hipertansiyon", "/hizmetler/hipertansiyon-destegi; /bolgeler/altinova; https://yalovamedikalestetik.com.tr/yazilar/diyabet-hipertansiyon-butuncul-destek/"),

  item(9, "klinik", "hibrit", "akupunktur/cinarcik", "Çınarcık Akupunktur Bilgisi", "Uygunluk ve branş önceliği. Hormon vaadi yoktur.", "Çınarcık'tan Akupunktur Bilgisi", "çınarcık akupunktur", "/hizmetler/akupunktur; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/kadinlarda-akupunktur-ne-zaman/"),
  item(9, "klinik", "hibrit", "mezoterapi/ciftlikkoy", "Çiftlikköy Mezoterapi", "Kısa mesafe mezoterapi değerlendirmesi.", "Çiftlikköy'den Mezoterapi", "çiftlikköy mezoterapi", "/hizmetler/mezoterapi; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/rehberler/sac-ve-cilt-sagligi-rehberi/"),
  item(9, "klinik", "sayfa", "hizmetler/yonlendirme-kadin-sagligi", "Kadın Sağlığı Yönlendirme", "Hangi kapının ne zaman öncelikli olduğu. Tedavi vaadi yoktur.", "Kadın Sağlığı Yönlendirme", "yalova kadın sağlığı yönlendirme", "/iletisim; /hakkimda; https://yalovamedikalestetik.com.tr/rehberler/kadin-sagliginda-butuncul-destek/"),
  item(9, "klinik", "hibrit", "kronik-yorgunluk/armutlu", "Armutlu Yorgunluk Desteği", "Uzun yol ve yorgunluk planı.", "Armutlu'dan Yorgunluk Desteği", "armutlu yorgunluk", "/hizmetler/kronik-yorgunluk-sendromu; /bolgeler/armutlu; https://yalovamedikalestetik.com.tr/rehberler/uyku-ve-yorgunluk-destek/"),

  item(10, "klinik", "hibrit", "hacamat/armutlu", "Armutlu Hacamat Bilgisi", "Enfeksiyon döneminde erteleme. Kilo vaadi yoktur.", "Armutlu'dan Hacamat Bilgisi", "armutlu hacamat", "/hizmetler/hacamat; /bolgeler/armutlu; https://yalovamedikalestetik.com.tr/yazilar/getat-ve-enfeksiyon-donemi/"),
  item(10, "klinik", "hibrit", "ozon-tedavisi/ciftlikkoy", "Çiftlikköy Ozon Bilgisi", "Uygunluk ve yöntem. Bağışıklık mucizesi yoktur.", "Çiftlikköy'den Ozon Bilgisi", "çiftlikköy ozon", "/hizmetler/ozon-tedavisi; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/yazilar/ozon-tedavisinin-kullanim-alanlari/"),
  item(10, "klinik", "hibrit", "suluk-tedavisi/cinarcik", "Çınarcık Sülük Bilgisi", "Güvenlik ve kanama riski. Sonuç vaadi yoktur.", "Çınarcık'tan Sülük Bilgisi", "çınarcık sülük", "/hizmetler/suluk-tedavisi; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/suluk-tedavisi-modern-yorumu/"),
  item(10, "klinik", "sayfa", "hizmetler/koruyucu-saglik-bilgisi", "Koruyucu Sağlık Bilgisi", "Aşı ve branş izlemi saklanır. Takviye satışı yoktur.", "Koruyucu Sağlık Bilgisi", "yalova koruyucu sağlık", "/hizmetler; /iletisim; https://yalovamedikalestetik.com.tr/rehberler/koruyucu-saglik-ve-bagisiklik/"),

  item(11, "klinik", "hibrit", "ip-aski/yalova-merkez", "Merkez İp Askı Bilgisi", "Adaylık ve sınır. Gençleştirme vaadi yoktur.", "Yalova Merkez'de İp Askı", "yalova ip askı", "/hizmetler/ip-aski; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/yazilar/ip-aski-yaklasiminin-sinirlari/"),
  item(11, "klinik", "hibrit", "lazer/yalova-merkez", "Merkez Lazer Bilgisi", "Cilt tipi ve erteleme. Fiyat yoktur.", "Yalova Merkez'de Lazer", "yalova lazer", "/hizmetler/lazer; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/yazilar/lazer-yaklasiminin-sinirlari/"),
  item(11, "klinik", "hibrit", "botoks-uygulamasi/ciftlikkoy", "Çiftlikköy Botoks Bilgisi", "Kısa mesafe botoks görüşmesi.", "Çiftlikköy'den Botoks Bilgisi", "çiftlikköy botoks", "/hizmetler/botoks; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/yazilar/botoks-kimler-icin-uygundur/"),
  item(11, "klinik", "hibrit", "dolgu/cinarcik", "Çınarcık Dolgu Bilgisi", "Sahil yolu ve dolgu değerlendirmesi.", "Çınarcık'tan Dolgu Bilgisi", "çınarcık dolgu", "/hizmetler/dolgu; /bolgeler/cinarcik; https://yalovamedikalestetik.com.tr/yazilar/dogal-gorunumlu-dolgu-uygulamalari/"),

  item(12, "klinik", "sayfa", "hizmetler/yil-ozeti-2027", "2027 Hizmet Haritası", "Yılın hizmet-bölge özeti. Yeni vaat yoktur.", "2027 Hizmet Haritası", "yalova hizmetler 2027", "/hizmetler; /bolgeler; https://yalovamedikalestetik.com.tr/rehberler/yalova-saglik-2027-yil-ozeti/"),
  item(12, "klinik", "sayfa", "bolgeler/yil-ozeti-2027", "2027 Bölge Haritası", "Sekiz bölgenin yıllık ulaşım özeti.", "2027 Bölge Haritası", "yalova bölgeler 2027", "/bolgeler; /iletisim; https://yalovamedikalestetik.com.tr/yazilar/hizmet-lokasyon-haritasi-ozeti/"),
  item(12, "klinik", "hibrit", "akupunktur/ciftlikkoy", "Çiftlikköy Akupunktur", "Kısa mesafe akupunktur görüşmesi.", "Çiftlikköy'den Akupunktur", "çiftlikköy akupunktur", "/hizmetler/akupunktur; /bolgeler/ciftlikkoy; https://yalovamedikalestetik.com.tr/yazilar/akupunktur-hangi-durumlarda-tercih-edilir/"),
  item(12, "klinik", "hibrit", "varis-tedavisi-destegi/yalova-merkez", "Merkez Varis Desteği", "Damar cerrahisi önceliği saklanır.", "Yalova Merkez'de Varis Desteği", "yalova varis", "/hizmetler/varis-tedavisi-destegi; /bolgeler/yalova-merkez; https://yalovamedikalestetik.com.tr/yazilar/varis-hemoroid-suluk-tedavisinin-yeri/"),
];

const nis = [
  item(1, "nis", "guncelleme", "durumlar/fibromiyalji", "Fibromiyalji kartı güncellemesi", "Niş sitede fibromiyalji kartı, SSS ve çapraz link yenilemesi.", "Fibromiyalji kartı güncellemesi", "fibromiyalji bütüncül", "https://uzmdrmuratcokay.com.tr/hizmetler/fibromiyalji; https://yalovamedikalestetik.com.tr/rehberler/fibromiyalji-destek/"),
  item(1, "nis", "guncelleme", "sss/fibromiyalji-uyku", "SSS: fibromiyalji ve uyku", "Niş SSS'ye uyku ve hareket soruları eklenmesi.", "SSS: fibromiyalji ve uyku", "fibromiyalji sss", "https://yalovamedikalestetik.com.tr/yazilar/fibromiyalji-ve-uyku-yonetimi/; https://uzmdrmuratcokay.com.tr/hizmetler/fibromiyalji"),
  item(2, "nis", "guncelleme", "capraz/estetik-yonlendirme", "Estetik yönlendirme notu", "Niş siteden medikal estetik rehberine sakin yönlendirme.", "Estetik yönlendirme notu", "medikal estetik yönlendirme", "https://yalovamedikalestetik.com.tr/rehberler/yalova-medikal-estetik-2027/; https://uzmdrmuratcokay.com.tr/hizmetler"),
  item(2, "nis", "guncelleme", "sss/riza-guvenlik", "SSS: rıza ve güvenlik", "Niş SSS'ye rıza ve kayıt sorusu.", "SSS: rıza ve güvenlik", "rıza güvenlik", "https://yalovamedikalestetik.com.tr/yazilar/medikal-estetikte-riza-ve-guvenlik/; https://uzmdrmuratcokay.com.tr/hakkimda"),
  item(3, "nis", "guncelleme", "durumlar/kronik-yorgunluk", "Yorgunluk kartı güncellemesi", "Uyku hijyeni ve tetkik sırası linkleri.", "Yorgunluk kartı güncellemesi", "kronik yorgunluk", "https://uzmdrmuratcokay.com.tr/hizmetler/kronik-yorgunluk-sendromu; https://yalovamedikalestetik.com.tr/rehberler/uyku-ve-yorgunluk-destek/"),
  item(3, "nis", "guncelleme", "surec/uyku-hazirlik", "Süreç: uyku hazırlık notu", "İlk görüşmede uyku kaydı hatırlatması.", "Süreç: uyku hazırlık notu", "uyku kayıt", "https://yalovamedikalestetik.com.tr/yazilar/kronik-yorgunlukta-uyku-hijyeni/; https://uzmdrmuratcokay.com.tr/iletisim"),
  item(4, "nis", "guncelleme", "durumlar/kilo-verme", "Kilo kartı güncellemesi", "Ozon ve hacamat sınır linkleri.", "Kilo kartı güncellemesi", "kilo yönetimi", "https://uzmdrmuratcokay.com.tr/hizmetler/kilo-verme-destegi; https://yalovamedikalestetik.com.tr/rehberler/kilo-yonetimi-destek-rehberi/"),
  item(4, "nis", "guncelleme", "yaklasimlar/ozon-sinir", "Ozon kartı sınır notu", "Kilo vaadinin neden yazılmadığı.", "Ozon kartı sınır notu", "ozon sınır", "https://yalovamedikalestetik.com.tr/yazilar/kilo-yonetiminde-ozonun-siniri/; https://uzmdrmuratcokay.com.tr/hizmetler/ozon-tedavisi"),
  item(5, "nis", "guncelleme", "durumlar/bel-fitigi", "Bel fıtığı kartı güncellemesi", "Kırmızı bayrak ve fizik tedavi linkleri.", "Bel fıtığı kartı güncellemesi", "bel fıtığı", "https://uzmdrmuratcokay.com.tr/hizmetler/bel-fitiklari-omurga-sagligi; https://yalovamedikalestetik.com.tr/rehberler/bel-ve-omurga-destek-rehberi/"),
  item(5, "nis", "guncelleme", "sss/kirmizi-bayrak", "SSS: kırmızı bayrak", "Acil bulgu sorusu eklenmesi.", "SSS: kırmızı bayrak", "bel kırmızı bayrak", "https://yalovamedikalestetik.com.tr/yazilar/bel-fitiginda-kirmizi-bayraklar/; https://uzmdrmuratcokay.com.tr/hizmetler/bel-fitiklari-omurga-sagligi"),
  item(6, "nis", "guncelleme", "iletisim/yol-notu", "İletişim: yol notu", "İstanbul ve Bursa hatları.", "İletişim: yol notu", "yalova ulaşım", "https://uzmdrmuratcokay.com.tr/bolgeler; https://yalovamedikalestetik.com.tr/rehberler/yalova-saglik-turizmi-2027/"),
  item(6, "nis", "guncelleme", "sss/sezon-randevu", "SSS: sezon randevu", "Yaz yoğunluğu sorusu.", "SSS: sezon randevu", "yalova randevu yaz", "https://yalovamedikalestetik.com.tr/yazilar/sezon-yogunlugu-ve-randevu/; https://uzmdrmuratcokay.com.tr/iletisim"),
  item(7, "nis", "guncelleme", "yaklasimlar/mezoterapi", "Mezoterapi kartı güncellemesi", "Saç ve cilt rehberine yönlendirme.", "Mezoterapi kartı güncellemesi", "mezoterapi", "https://uzmdrmuratcokay.com.tr/hizmetler/mezoterapi; https://yalovamedikalestetik.com.tr/rehberler/sac-ve-cilt-sagligi-rehberi/"),
  item(7, "nis", "guncelleme", "capraz/cilt-yonlendirme", "Cilt yönlendirme notu", "Nişten estetik rehberine sakin geçiş.", "Cilt yönlendirme notu", "cilt yönlendirme", "https://yalovamedikalestetik.com.tr/yazilar/yuz-lekeleri-matlik-bilimsel-yaklasimlar/; https://uzmdrmuratcokay.com.tr/hizmetler/yuzde-matlik-kirisiklik-leke-tedavisi"),
  item(8, "nis", "guncelleme", "durumlar/diyabet", "Diyabet kartı güncellemesi", "İlaç saklama ve ölçüm omurgası.", "Diyabet kartı güncellemesi", "diyabet desteği", "https://uzmdrmuratcokay.com.tr/hizmetler/diyabet-yonetimi-destegi; https://yalovamedikalestetik.com.tr/rehberler/metabolik-destek-rehberi/"),
  item(8, "nis", "guncelleme", "durumlar/hipertansiyon", "Hipertansiyon kartı güncellemesi", "Tansiyon izlemi ve GETAT sınırı.", "Hipertansiyon kartı güncellemesi", "hipertansiyon desteği", "https://uzmdrmuratcokay.com.tr/hizmetler/hipertansiyon-destegi; https://yalovamedikalestetik.com.tr/yazilar/metabolik-konularda-getat-siniri/"),
  item(9, "nis", "guncelleme", "yonlendirme/kadin-sagligi", "Kadın sağlığı yönlendirme", "Branş önceliği. Hormon vaadi yoktur.", "Kadın sağlığı yönlendirme", "kadın sağlığı", "https://yalovamedikalestetik.com.tr/rehberler/kadin-sagliginda-butuncul-destek/; https://uzmdrmuratcokay.com.tr/hizmetler/yonlendirme-kadin-sagligi"),
  item(9, "nis", "guncelleme", "sss/akupunktur-kadin", "SSS: kadınlarda akupunktur", "Ne zaman konuşulur sorusu.", "SSS: kadınlarda akupunktur", "kadın akupunktur", "https://yalovamedikalestetik.com.tr/yazilar/kadinlarda-akupunktur-ne-zaman/; https://uzmdrmuratcokay.com.tr/hizmetler/akupunktur"),
  item(10, "nis", "guncelleme", "sss/enfeksiyon-donemi", "SSS: enfeksiyon dönemi", "GETAT'ın ateşli dönemde ertelenmesi.", "SSS: enfeksiyon dönemi", "getat enfeksiyon", "https://yalovamedikalestetik.com.tr/yazilar/getat-ve-enfeksiyon-donemi/; https://uzmdrmuratcokay.com.tr/hizmetler/hacamat"),
  item(10, "nis", "guncelleme", "yasal/asi-notu", "Yasal not: aşı izlemi", "Aşı takviminin saklandığı cümle.", "Yasal not: aşı izlemi", "aşı getat", "https://yalovamedikalestetik.com.tr/yazilar/asi-ve-brans-izlemi-saklanir/; https://yalovamedikalestetik.com.tr/rehberler/koruyucu-saglik-ve-bagisiklik/"),
  item(11, "nis", "guncelleme", "capraz/cilt-yaslanmasi", "Cilt yaşlanması yönlendirme", "Gençleştirme vaadi olmadan estetik rehberi.", "Cilt yaşlanması yönlendirme", "cilt yaşlanması", "https://yalovamedikalestetik.com.tr/rehberler/cilt-yaslanmasi-yonetim-rehberi/; https://uzmdrmuratcokay.com.tr/hizmetler"),
  item(11, "nis", "guncelleme", "yasal/oncesi-sonrasi-yok", "Yasal not: görsel yasağı", "Öncesi-sonrası görselin neden olmadığı.", "Yasal not: görsel yasağı", "tanıtım yasağı", "https://yalovamedikalestetik.com.tr/yazilar/beklenti-ve-fotograf-karsilastirmasi/; https://uzmdrmuratcokay.com.tr/hakkimda"),
  item(12, "nis", "guncelleme", "ozet/2027-nis-harita", "2027 niş site haritası", "Durum ve yaklaşım kartlarının yıl özeti.", "2027 niş site haritası", "bütüncül sağlık özet", "https://yalovamedikalestetik.com.tr/rehberler/yalova-saglik-2027-yil-ozeti/; https://uzmdrmuratcokay.com.tr/hizmetler"),
  item(12, "nis", "guncelleme", "sss/yil-sonu", "SSS: yıl sonu hatırlatma", "İlaç kesilmez, fiyat yok, yorum yok.", "SSS: yıl sonu hatırlatma", "yasal sss", "https://yalovamedikalestetik.com.tr/yazilar/kaynak-ve-yasal-cerceve-ozeti/; https://uzmdrmuratcokay.com.tr/hakkimda"),
];

const rows = [...blog, ...clinic, ...nis];

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

const headers = [
  "Yıl",
  "Ay",
  "Ay adı",
  "Tema",
  "Site",
  "Tip",
  "Slug / yol",
  "Başlık",
  "Meta description",
  "H1",
  "Hedef anahtar kelime",
  "İç bağlantılar",
  "Durum",
];

const csv = [
  headers.join(","),
  ...rows.map((row) =>
    [
      row.yil,
      row.ay,
      row.ayAdi,
      row.tema,
      row.site,
      row.tip,
      row.slug,
      row.baslik,
      row.meta,
      row.h1,
      row.hedefKw,
      row.icLinkler,
      row.durum,
    ]
      .map(csvEscape)
      .join(","),
  ),
].join("\n");

writeFileSync(join(dir, "takvim.json"), `${JSON.stringify({ yil: 2027, months, rows }, null, 2)}\n`);
writeFileSync(join(dir, "takvim.csv"), `\uFEFF${csv}\n`, "utf8");

const counts = rows.reduce(
  (acc, row) => {
    acc[row.site] = (acc[row.site] ?? 0) + 1;
    return acc;
  },
  {},
);

console.log(
  JSON.stringify(
    {
      toplam: rows.length,
      counts,
      blogBaslikMax: Math.max(...blog.map((row) => row.baslik.length)),
      blogMetaMax: Math.max(...blog.map((row) => row.meta.length)),
    },
    null,
    2,
  ),
);
