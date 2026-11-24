import { clinicAddress } from "./catalog";
import { contact, doctor, sites } from "./identity";

const nap = clinicAddress;

export function klinikHomeMarkdown() {
  return `# ${doctor.name} — Yalova Medikal Estetik ve GETAT

> Siteler genel bilgilendirme içindir; tanı, kişiye özel tavsiye veya sonuç vaadi değildir.

## Özet

Yalova Merkez’de medikal estetik ve Geleneksel ve Tamamlayıcı Tıp (GETAT) değerlendirmesi sunulur. Uygunluk yüz yüze hekim görüşmesiyle belirlenir.

## NAP

- Adres: ${nap}
- Telefon: ${contact.phone.display}
- E-posta: ${contact.email.display}

## Ne zaman bu siteyi kullanın

- Randevu, hekim varlığı, hizmet kapsamı veya NAP
- Hizmet sayfaları: ${sites.klinik}/hizmetler
- Bilgi niyeti → blog: ${sites.blog}/rehberler/
- Bütüncül arama → niş: ${sites.nis}

## Sınırlar

- Fiyat, hasta yorumu, önce-sonra ve üstünlük iddiası yoktur.
- Mevcut ilaç veya branş takibinin yerine geçilmez.

## Güven

- Hakkımda: ${sites.klinik}/hakkimda
- İletişim: ${sites.klinik}/iletisim
- Gizlilik: ${sites.klinik}/gizlilik
- llms.txt: ${sites.klinik}/llms.txt
- llms-full.txt: ${sites.klinik}/llms-full.txt
`;
}

export function blogHomeMarkdown() {
  return `# Yalova Medikal Estetik ve Bütüncül Sağlık Rehberi

> Bilimsel, tarafsız bilgilendirme. Tanı veya kişiye özel tavsiye değildir.

## Özet

Medikal estetik, bütüncül sağlık ve GETAT konularında pillar/cluster rehberler. Yazar: ${doctor.name}.

## Ne zaman bu siteyi kullanın

- Nedir / kimler için / bilimsel sınır
- «Yalova’da … yapan yerler» (sıralama yok)
- Randevu → klinik: ${sites.klinik}
- Bütüncül niyet → niş: ${sites.nis}

## Ana rehberler

- ${sites.blog}/rehberler/medikal-estetik/
- ${sites.blog}/rehberler/butuncul-saglik/
- ${sites.blog}/rehberler/getat/
- ${sites.blog}/rehberler/yalova-saglik/

## NAP (klinik)

${nap} — ${contact.phone.display}

## Güven

- Yazar: ${sites.blog}/yazar/
- Gizlilik: ${sites.blog}/gizlilik/
- llms.txt: ${sites.blog}/llms.txt
- llms-full.txt: ${sites.blog}/llms-full.txt
`;
}

export function nisHomeMarkdown() {
  return `# Yalova Bütüncül Sağlık — ${doctor.name}

> Fibromiyalji, kronik yorgunluk, kilo yönetimi ve GETAT yaklaşımları hakkında bilgilendirme. Tanı veya sonuç vaadi yoktur.

## Özet

«Yalova bütüncül sağlık» araması için niş kapı. Derin bilgi blogda; randevu klinikte.

## NAP

- Adres: ${nap}
- Telefon: ${contact.phone.display}

## Ne zaman bu siteyi kullanın

- Yalova bütüncül sağlık niyeti
- Durum / yaklaşım özeti
- Derin rehber → ${sites.blog}/rehberler/butuncul-saglik/
- Randevu → ${sites.klinik}/iletisim

## Sınırlar

- Branş takibinin yerine geçmez.
- Fiyat, yorum, önce-sonra yoktur.

## Güven

- Gizlilik: ${sites.nis}/gizlilik/
- Klinik: ${sites.klinik}
- llms.txt: ${sites.nis}/llms.txt
- llms-full.txt: ${sites.nis}/llms-full.txt
`;
}
