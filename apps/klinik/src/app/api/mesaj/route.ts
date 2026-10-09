import { NextResponse } from "next/server";

import { clientIp, isLimited, sameOrigin } from "@/lib/form-guard";
import { sendWithResend } from "@/lib/send-appointment-mail";

export const dynamic = "force-dynamic";

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }
  if (isLimited(clientIp(request))) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = asString(data.name).trim();
  const phone = asString(data.phone).trim();
  const topic = asString(data.topic).trim();
  const note = asString(data.note).trim();
  const website = asString(data.website);
  const consent = data.consent === true;
  const digits = phone.replace(/\D/g, "");

  if (!consent || name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (digits.length < 10 || digits.length > 15 || !topic || note.length > 500) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const subject = `Bilgi talebi: ${topic}`;
  const text = [
    "uzmdrmuratcokay.com.tr iletişim formu",
    "",
    `Ad: ${name}`,
    `Telefon: ${phone}`,
    `Konu: ${topic}`,
    note ? `Not: ${note}` : null,
    "",
    "Bu bir randevu / bilgi talebidir; kayıt tutulmaz.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    if (await sendWithResend(subject, text)) {
      return NextResponse.json({ ok: true });
    }
  } catch {
    return NextResponse.json({ fallback: true });
  }

  return NextResponse.json({ fallback: true });
}
