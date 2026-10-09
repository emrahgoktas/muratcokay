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

export const appointmentMailbox = "muryas2@mynet.com" as const;

export type AppointmentPayload = {
  category: AppointmentCategory;
  topicSlug: string;
  windowId: AppointmentWindow;
  date: string;
  name: string;
  phone: string;
  note: string;
  consent: boolean;
  website?: string;
};

export function categoryTitle(id: AppointmentCategory) {
  return appointmentCategories.find((item) => item.id === id)?.title ?? id;
}

export function windowTitle(id: AppointmentWindow) {
  return appointmentWindows.find((item) => item.id === id)?.label ?? id;
}

export function todayIsoDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export function parseAppointmentPayload(
  input: unknown,
  topics: AppointmentTopic[],
): AppointmentPayload | null {
  if (!input || typeof input !== "object") return null;
  const data = input as Record<string, unknown>;
  const category = asString(data.category);
  const topicSlug = asString(data.topicSlug);
  const windowId = asString(data.windowId);
  const date = asString(data.date).trim();
  const name = asString(data.name).trim();
  const phone = asString(data.phone).trim();
  const note = asString(data.note).trim();
  const website = asString(data.website);
  const consent = data.consent === true;
  const digits = phone.replace(/\D/g, "");
  const topicOk =
    topicSlug === generalTopic.slug ||
    topics.some(
      (topic) => topic.slug === topicSlug && topic.kategori === category,
    );

  if (category !== "medikal-estetik" && category !== "butuncul-saglik") {
    return null;
  }
  if (windowId !== "sabah" && windowId !== "ogle" && windowId !== "farketmez") {
    return null;
  }
  if (!topicOk || !consent) return null;
  if (name.length < 2 || name.length > 80) return null;
  if (digits.length < 10 || digits.length > 15) return null;
  if (note.length > 500) return null;
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < todayIsoDate())) {
    return null;
  }

  return {
    category,
    topicSlug,
    windowId,
    date,
    name,
    phone,
    note,
    consent,
    website,
  };
}

export function buildAppointmentMail(
  input: AppointmentPayload,
  topics: AppointmentTopic[],
) {
  const selected = topics.find((topic) => topic.slug === input.topicSlug);
  const topicTitle =
    input.topicSlug === generalTopic.slug
      ? generalTopic.baslik
      : (selected?.baslik ?? input.topicSlug);
  const subject = `Randevu talebi: ${topicTitle}`;
  const body = [
    "uzmdrmuratcokay.com.tr randevu talebi",
    "",
    `Alan: ${categoryTitle(input.category)}`,
    `Konu: ${topicTitle}`,
    `Tercih edilen gün: ${input.date || "Belirtilmedi"}`,
    `Tercih edilen saat: ${windowTitle(input.windowId)}`,
    `Ad: ${input.name}`,
    `Telefon: ${input.phone}`,
    input.note ? `Not: ${input.note}` : null,
    "",
    "Bu bir randevu talebidir; kayıt tutulmaz. Uygunluk ve saat hekim tarafından bildirilir.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, body };
}
