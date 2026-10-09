"use client";

import { CheckCircle2, ChevronLeft, ChevronRight, Loader2, Send } from "lucide-react";
import { useMemo, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  appointmentCategories,
  appointmentSteps,
  appointmentWindows,
  generalTopic,
  todayIsoDate,
  type AppointmentCategory,
  type AppointmentStep,
  type AppointmentTopic,
  type AppointmentWindow,
} from "@/lib/appointment";
import { contactFormUi, contactHrefs } from "@/lib/contact-ui";

const fieldClass =
  "mt-2 w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-base text-foreground outline-none focus:border-primary";

const choiceClass =
  "flex min-h-20 w-full flex-col items-start rounded-[1.25rem] border px-4 py-4 text-left transition-colors";

function choiceState(active: boolean) {
  return active
    ? `${choiceClass} border-primary bg-primary/6 ring-2 ring-primary/20`
    : `${choiceClass} border-primary/12 bg-white hover:border-primary/35`;
}

export function AppointmentWizard({ topics }: { topics: AppointmentTopic[] }) {
  const [step, setStep] = useState<AppointmentStep>(1);
  const [category, setCategory] = useState<AppointmentCategory | "">("");
  const [topicSlug, setTopicSlug] = useState("");
  const [windowId, setWindowId] = useState<AppointmentWindow | "">("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "error" | "sending" | "sent" | "failed"
  >("idle");

  const visibleTopics = useMemo(
    () => (category ? topics.filter((topic) => topic.kategori === category) : []),
    [category, topics],
  );

  function go(next: AppointmentStep) {
    setStatus("idle");
    setStep(next);
  }

  function selectCategory(id: AppointmentCategory) {
    setCategory(id);
    setTopicSlug("");
    go(2);
  }

  function canAdvance() {
    if (step === 1) return Boolean(category);
    if (step === 2) return Boolean(topicSlug);
    if (step === 3) return Boolean(windowId);
    const phoneOk = phone.replace(/\D/g, "").length >= 10;
    return Boolean(name.trim() && phoneOk && consent);
  }

  function next() {
    if (!canAdvance()) {
      setStatus("error");
      return;
    }
    if (step < 4) go((step + 1) as AppointmentStep);
  }

  function reset() {
    setStep(1);
    setCategory("");
    setTopicSlug("");
    setWindowId("");
    setDate("");
    setName("");
    setPhone("");
    setNote("");
    setWebsite("");
    setConsent(false);
    setStatus("idle");
  }

  async function sendRequest() {
    if (!category || !topicSlug || !windowId || !canAdvance()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/randevu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          topicSlug,
          windowId,
          date,
          name: name.trim(),
          phone: phone.trim(),
          note: note.trim(),
          consent,
          website,
        }),
      });
      if (!response.ok) {
        setStatus("failed");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.7rem] bg-[#f6f1ea] p-5 shadow-[0_22px_50px_-32px_rgba(15,76,129,0.45)] ring-1 ring-primary/8 sm:p-7">
        <p className="flex items-center gap-2 font-serif text-2xl font-medium text-primary">
          <CheckCircle2 aria-hidden="true" className="size-7 text-secondary" />
          Talebiniz iletildi
        </p>
        <p className="mt-3 text-sm leading-6 text-mutedText">
          Bilgiler klinik e-posta adresine gönderildi. Uygunluk ve saat hekim
          tarafından bildirilir; bu adım randevu onayı değildir.
        </p>
        <button
          type="button"
          className={`${buttonVariants({ variant: "outline", size: "lg" })} mt-6 min-h-12 px-5`}
          onClick={reset}
        >
          Yeni talep
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[1.7rem] bg-[#f6f1ea] p-5 shadow-[0_22px_50px_-32px_rgba(15,76,129,0.45)] ring-1 ring-primary/8 sm:p-7">
      <ol className="mb-8 grid grid-cols-4 gap-2" aria-label="Randevu adımları">
        {appointmentSteps.map((item) => {
          const current = item.id === step;
          const done = item.id < step;
          return (
            <li key={item.id} className="min-w-0">
              <p
                className={`flex items-center gap-2 text-xs font-semibold sm:text-sm ${
                  current ? "text-primary" : done ? "text-secondary" : "text-mutedText"
                }`}
              >
                <span
                  className={`inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] ${
                    current
                      ? "bg-primary text-primary-foreground"
                      : done
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-white text-mutedText ring-1 ring-primary/15"
                  }`}
                  aria-current={current ? "step" : undefined}
                >
                  {item.id}
                </span>
                <span className="truncate">{item.label}</span>
              </p>
            </li>
          );
        })}
      </ol>

      {step === 1 ? (
        <fieldset>
          <legend className="font-serif text-2xl font-medium text-primary">
            Hangi alan için talep oluşturuyorsunuz?
          </legend>
          <p className="mt-2 text-sm leading-6 text-mutedText">
            Bu seçim, sonraki adımda görülecek konuları belirler. Uygunluk hekim
            değerlendirmesiyle anlaşılır.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {appointmentCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                className={choiceState(category === item.id)}
                onClick={() => selectCategory(item.id)}
              >
                <span className="font-serif text-xl font-medium text-primary">
                  {item.title}
                </span>
                <span className="mt-1 text-sm leading-6 text-mutedText">
                  {item.description}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset>
          <legend className="font-serif text-2xl font-medium text-primary">
            Konuyu seçin
          </legend>
          <p className="mt-2 text-sm leading-6 text-mutedText">
            Seçilen başlık bilgi talebidir; tanı, sonuç veya uygulama kararı
            anlamına gelmez.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {visibleTopics.map((service) => (
              <button
                key={service.slug}
                type="button"
                className={choiceState(topicSlug === service.slug)}
                onClick={() => {
                  setTopicSlug(service.slug);
                  go(3);
                }}
              >
                <span className="text-sm font-semibold text-primary">
                  {service.baslik}
                </span>
              </button>
            ))}
            <button
              type="button"
              className={choiceState(topicSlug === generalTopic.slug)}
              onClick={() => {
                setTopicSlug(generalTopic.slug);
                go(3);
              }}
            >
              <span className="text-sm font-semibold text-primary">
                {generalTopic.baslik}
              </span>
            </button>
          </div>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <fieldset>
          <legend className="font-serif text-2xl font-medium text-primary">
            Zaman tercihi
          </legend>
          <p className="mt-2 text-sm leading-6 text-mutedText">
            Tercih, planlama içindir. Kesin saat yanıtta bildirilir; bu adım
            randevu onayı değildir.
          </p>
          <label className="mt-5 block text-sm font-semibold text-primary">
            Tercih edilen gün
            <input
              type="date"
              min={todayIsoDate()}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={fieldClass}
            />
          </label>
          <p className="mt-5 text-sm font-semibold text-primary">Saat aralığı</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {appointmentWindows.map((item) => (
              <button
                key={item.id}
                type="button"
                className={choiceState(windowId === item.id)}
                onClick={() => setWindowId(item.id)}
              >
                <span className="text-sm font-semibold text-primary">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 4 ? (
        <fieldset>
          <legend className="font-serif text-2xl font-medium text-primary">
            İletişim bilgileri
          </legend>
          <p className="mt-2 text-sm leading-6 text-mutedText">
            Talebi gönderince bilgiler doğrudan klinik e-posta adresine iletilir.
            Sizin ayrıca bir e-posta uygulaması açmanız gerekmez.
          </p>
          <div className="mt-5 grid gap-5">
            <label className="text-sm font-semibold text-primary">
              {contactFormUi.nameLabel}
              <input
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="text-sm font-semibold text-primary">
              {contactFormUi.phoneLabel}
              <input
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="sr-only" aria-hidden="true">
              Kurum
              <input
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </label>
            <label className="text-sm font-semibold text-primary">
              {contactFormUi.messageLabel}
              <textarea
                rows={3}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className={`${fieldClass} resize-y`}
                placeholder={contactFormUi.messageHint}
              />
            </label>
            <label className="flex items-start gap-3 text-sm leading-6 text-mutedText">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 size-4 accent-primary"
              />
              <span>{contactFormUi.consent}</span>
            </label>
          </div>
        </fieldset>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 1 ? (
          <button
            type="button"
            className={`${buttonVariants({ variant: "outline", size: "lg" })} min-h-12 px-5`}
            onClick={() => go((step - 1) as AppointmentStep)}
            disabled={status === "sending"}
          >
            <ChevronLeft aria-hidden="true" />
            Geri
          </button>
        ) : (
          <span />
        )}
        {step < 4 ? (
          <button
            type="button"
            className={`${buttonVariants({ size: "lg" })} min-h-12 px-6`}
            onClick={next}
          >
            Devam
            <ChevronRight aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            className={`${buttonVariants({ size: "lg" })} min-h-12 px-6`}
            onClick={() => void sendRequest()}
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <Loader2 aria-hidden="true" className="animate-spin" />
            ) : (
              <Send aria-hidden="true" />
            )}
            {status === "sending" ? "Gönderiliyor" : "Talebi gönder"}
          </button>
        )}
      </div>
      <div className="mt-4 min-h-5 text-sm" role="status" aria-live="polite">
        {status === "error" ? (
          <p className="text-destructive">
            Bu adımı tamamlamak için seçimi veya zorunlu alanları kontrol edin.
          </p>
        ) : null}
        {status === "failed" ? (
          <p className="text-destructive">
            Talep iletilemedi. Lütfen{" "}
            <a className="underline" href={contactHrefs.whatsapp}>
              WhatsApp
            </a>{" "}
            veya telefon ile ulaşın.
          </p>
        ) : null}
      </div>
    </div>
  );
}
