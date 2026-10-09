export const appointmentSteps = [
  { id: 1, label: "Alan" },
  { id: 2, label: "Konu" },
  { id: 3, label: "Zaman" },
  { id: 4, label: "İletişim" },
] as const;

export type AppointmentStep = (typeof appointmentSteps)[number]["id"];

export type AppointmentCategory = "medikal-estetik" | "butuncul-saglik";

export type AppointmentTopic = {
  slug: string;
  kategori: AppointmentCategory;
  baslik: string;
};

export const appointmentCategories: {
  id: AppointmentCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "medikal-estetik",
    title: "Medikal Estetik",
    description: "Yüz, cilt ve saç yaklaşımları için değerlendirme talebi.",
  },
  {
    id: "butuncul-saglik",
    title: "Bütüncül Sağlık",
    description: "GETAT ve bütüncül destek başlıkları için değerlendirme talebi.",
  },
];

export const appointmentWindows = [
  { id: "sabah", label: "Sabah" },
  { id: "ogle", label: "Öğleden sonra" },
  { id: "farketmez", label: "Fark etmez" },
] as const;

export type AppointmentWindow = (typeof appointmentWindows)[number]["id"];

export const generalTopic = {
  slug: "genel-bilgi",
  baslik: "Genel bilgi / diğer",
} as const;

export function categoryTitle(id: AppointmentCategory) {
  return appointmentCategories.find((item) => item.id === id)?.title ?? id;
}

export function windowTitle(id: AppointmentWindow) {
  return appointmentWindows.find((item) => item.id === id)?.label ?? id;
}

export function todayIsoDate() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

export const appointmentMailbox = "muryas2@mynet.com" as const;

export function buildAppointmentMail(input: {
  categoryTitle: string;
  topicTitle: string;
  windowTitle: string;
  date: string;
  name: string;
  phone: string;
  note: string;
}) {
  const subject = `Randevu talebi: ${input.topicTitle}`;
  const body = [
    "uzmdrmuratcokay.com.tr randevu talebi",
    "",
    `Alan: ${input.categoryTitle}`,
    `Konu: ${input.topicTitle}`,
    `Tercih edilen gün: ${input.date || "Belirtilmedi"}`,
    `Tercih edilen saat: ${input.windowTitle}`,
    `Ad: ${input.name}`,
    `Telefon: ${input.phone}`,
    input.note ? `Not: ${input.note}` : null,
    "",
    "Bu bir randevu talebidir; kayıt tutulmaz. Uygunluk ve saat hekim tarafından bildirilir.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const query = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: appointmentMailbox,
    su: subject,
    body,
  });

  return {
    to: appointmentMailbox,
    subject,
    body,
    gmail: `https://mail.google.com/mail/?${query.toString()}`,
    mailto: `mailto:${appointmentMailbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
