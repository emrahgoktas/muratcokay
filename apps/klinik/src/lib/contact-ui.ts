"use client";

export const clinicNAP = "Fevzi Çakmak Mah. Bora Sk. No:17/A Merkez YALOVA";

export const clinicGeo = {
  lat: 40.655,
  lng: 29.276,
} as const;

export const contactHrefs = {
  whatsapp: "https://wa.me/905052445123",
  email: "mailto:muryas2@mynet.com",
} as const;

export const contactFormUi = {
  nameLabel: "Ad soyad",
  phoneLabel: "Telefon",
  topicLabel: "Konu",
  messageLabel: "Kısa not",
  messageHint: "İsteğe bağlı. Tanı veya sonuç talebi yazılmamalıdır.",
  consent:
    "Bu iletinin randevu ve genel bilgi talebi olduğunu, tıbbi tavsiye veya sonuç vaadi içermediğini kabul ediyorum.",
  submitWhatsapp: "WhatsApp ile gönder",
  submitEmail: "E-posta ile gönder",
  success: "İletişim uygulaması açıldı. Gönderimi orada tamamlayabilirsiniz.",
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
} as const;

export const clinicMapUi = {
  load: "Haritayı göster",
  openExternal: "Google Haritalar’da aç",
  loadedLabel: "Yalova Merkez klinik konumu",
} as const;
