import { appointmentMailbox } from "@/lib/appointment";

type MailResult = { ok?: boolean; fallback?: boolean };

export async function sendViaFormSubmit(subject: string, body: string) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(appointmentMailbox)}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
  return (
    response.ok &&
    (payload?.success === true ||
      payload?.success === "true" ||
      /activat/i.test(message))
  );
}

export async function deliverClinicMail(
  endpoint: string,
  payload: Record<string, unknown>,
  mail: { subject: string; body: string },
) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = ((await response.json().catch(() => null)) ?? {}) as MailResult;
    if (result.ok) return true;
    if (result.fallback) return sendViaFormSubmit(mail.subject, mail.body);
    if (response.status === 400 || response.status === 403 || response.status === 429) {
      return false;
    }
  } catch {
    // Browser delivery below still reaches the clinic mailbox.
  }
  try {
    return await sendViaFormSubmit(mail.subject, mail.body);
  } catch {
    return false;
  }
}
