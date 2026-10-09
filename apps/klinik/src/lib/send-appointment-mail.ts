import { appointmentMailbox } from "@/lib/appointment";

function mailFrom() {
  return (
    process.env.APPOINTMENT_MAIL_FROM ??
    "Randevu <randevu@uzmdrmuratcokay.com.tr>"
  );
}

function mailTo() {
  return process.env.APPOINTMENT_MAIL_TO ?? appointmentMailbox;
}

async function sendWithResend(subject: string, body: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: mailFrom(),
      to: [mailTo()],
      subject,
      text: body,
    }),
  });

  if (!response.ok) {
    throw new Error("resend");
  }

  return true;
}

async function sendWithFormSubmit(subject: string, body: string) {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://uzmdrmuratcokay.com.tr";
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(mailTo())}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: site,
        Referer: `${site}/`,
      },
      body: JSON.stringify({
        _subject: subject,
        _template: "box",
        _captcha: false,
        message: body,
      }),
    },
  );

  const payload = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;
  const message = payload?.message ?? "";
  const activating = /activat/i.test(message);
  const accepted =
    payload?.success === true ||
    payload?.success === "true" ||
    activating;

  if (!response.ok || !accepted) {
    throw new Error("formsubmit");
  }

  return true;
}

export async function deliverAppointmentMail(subject: string, body: string) {
  if (await sendWithResend(subject, body)) return;
  await sendWithFormSubmit(subject, body);
}
