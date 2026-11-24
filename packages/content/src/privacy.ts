import { clinicAddress } from "./catalog";
import { contact, doctor, sites } from "./identity";

/** Paylaşılan gizlilik / KVKK bilgilendirme metni (≥500 karakter, agent trust). */
export const privacyContent = {
  title: "Gizlilik ve Kişisel Veriler",
  description:
    "Uzm. Dr. Yaşar Murat Çokay sitelerinde kişisel veri işleme, iletişim formu ve çerez kullanımına ilişkin bilgilendirme.",
  intro:
    "Bu sayfa; klinik, bilgilendirme blogu ve bütüncül sağlık niş sitesinde kişisel verilerin nasıl ele alındığını açıklar. Amaç, ziyaretçi ve hasta adaylarına şeffaf bilgi vermektir. Metin genel bilgilendirmedir; hukuki danışmanlık yerine geçmez.",
  sections: [
    {
      heading: "Veri sorumlusu",
      body: `${doctor.name}, Yalova Merkez’de medikal estetik ve Geleneksel ve Tamamlayıcı Tıp (GETAT) alanında bilgilendirme ve randevu iletişimi yürütür. Muayenehane adresi: ${clinicAddress}. Telefon: ${contact.phone.display}. E-posta: ${contact.email.display}.`,
    },
    {
      heading: "Hangi veriler toplanabilir?",
      body: "İletişim formları veya doğrudan e-posta/telefon yoluyla ad-soyad, iletişim bilgisi ve ilettiğiniz mesaj metni alınabilir. Randevu veya klinik değerlendirme sürecinde sağlık öyküsü yalnızca yüz yüze veya güvenli klinik süreçte, tıbbi gereklilik çerçevesinde ele alınır. Siteler üzerinden tanı, reçete veya sonuç vaadi sunulmaz.",
    },
    {
      heading: "Amaç ve hukuki dayanak",
      body: "İletişim verileri; bilgilendirme taleplerine yanıt vermek, randevu planlamak ve yasal yükümlülükleri yerine getirmek için işlenir. İşleme, ilgili kişinin talebi ve meşru menfaat ile sınırlı tutulur. Pazarlama amacıyla üçüncü taraflara satılmaz.",
    },
    {
      heading: "Çerezler ve ölçüm",
      body: "Sitelerde güvenlik, oturum ve (yapılandırıldığında) Google Analytics / Tag Manager gibi ölçüm araçları kullanılabilir. Ölçüm kimlikleri boş bırakıldığında ilgili izleme kodları yüklenmez. Tarayıcı ayarlarından çerezleri sınırlayabilirsiniz; bazı işlevler etkilenebilir.",
    },
    {
      heading: "Saklama ve güvenlik",
      body: "İletişim kayıtları, talebin gerektirdiği süre ve ilgili mevzuattaki saklama süreleriyle sınırlı tutulur. Teknik altyapıda HTTPS ve erişim kontrolleri kullanılır. Mutlak güvenlik taahhüdü verilmez; makul teknik ve idari tedbirler uygulanır.",
    },
    {
      heading: "Haklarınız",
      body: "Kişisel verilerinize ilişkin bilgilendirme, düzeltme, silme veya itiraz taleplerinizi e-posta veya telefon yoluyla iletebilirsiniz. Başvurular makul sürede yanıtlanır. Gerekirse ilgili veri koruma mercilerine başvuru hakkınız saklıdır.",
    },
    {
      heading: "Üç site kapsamı",
      body: `Bu metin şu alan adlarını kapsar: ${sites.klinik}, ${sites.blog} ve ${sites.nis}. Çocuklara yönelik hizmet veya içerik sunulmaz. Sayfa güncellemesi: Kasım 2026.`,
    },
  ],
} as const;
