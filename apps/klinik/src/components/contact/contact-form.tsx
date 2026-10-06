"use client";

import { FormEvent, useRef, useState } from "react";

import { contactFormUi as copy, contactHrefs } from "@/lib/contact-ui";

function buildMessage(name: string, phone: string, topic: string, note: string) {
  return [
    "uzmdrmuratcokay.com.tr üzerinden randevu / bilgi talebi",
    `Ad: ${name}`,
    `Telefon: ${phone}`,
    `Konu: ${topic}`,
    note ? `Not: ${note}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function readFields(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const topic = String(data.get("topic") ?? "").trim();
  const note = String(data.get("message") ?? "").trim();
  const consent = data.get("consent") === "on";
  const phoneOk = phone.replace(/\D/g, "").length >= 10;
  return {
    name,
    phone,
    topic,
    note,
    valid: Boolean(name && phoneOk && topic && consent),
  };
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");

  function send(channel: "whatsapp" | "email") {
    const form = formRef.current;
    if (!form) return;
    const fields = readFields(form);
    if (!fields.valid) {
      setStatus("error");
      return;
    }
    const text = buildMessage(
      fields.name,
      fields.phone,
      fields.topic,
      fields.note,
    );
    if (channel === "whatsapp") {
      window.open(
        `${contactHrefs.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      window.location.href = `${contactHrefs.email}?subject=${encodeURIComponent(fields.topic)}&body=${encodeURIComponent(text)}`;
    }
    setStatus("ready");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send("whatsapp");
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-base text-foreground outline-none focus:border-primary";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-[1.7rem] bg-[#f6f1ea] p-5 sm:p-7"
    >
      <div className="grid gap-5">
        <label className="text-sm font-semibold text-primary">
          {copy.nameLabel}
          <input name="name" autoComplete="name" required className={fieldClass} />
        </label>
        <label className="text-sm font-semibold text-primary">
          {copy.phoneLabel}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            className={fieldClass}
          />
        </label>
        <label className="text-sm font-semibold text-primary">
          {copy.topicLabel}
          <select name="topic" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Seçin
            </option>
            {copy.topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-primary">
          {copy.messageLabel}
          <textarea
            name="message"
            rows={4}
            className={`${fieldClass} resize-y`}
            placeholder={copy.messageHint}
          />
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-mutedText">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 size-4 accent-primary"
          />
          <span>{copy.consent}</span>
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 text-sm font-medium text-primary-foreground sm:w-auto"
        >
          {copy.submitWhatsapp}
        </button>
        <button
          type="button"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-primary sm:w-auto"
          onClick={() => send("email")}
        >
          {copy.submitEmail}
        </button>
      </div>
      <p className="mt-4 min-h-5 text-sm" role="status" aria-live="polite">
        {status === "error" ? copy.error : null}
        {status === "ready" ? copy.success : null}
      </p>
    </form>
  );
}
