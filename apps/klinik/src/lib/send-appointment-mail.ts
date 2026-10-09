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

export async function sendWithResend(subject: string, body: string) {
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
