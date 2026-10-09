import { serviceCatalog } from "@muratcokay/content";
import { NextResponse } from "next/server";

import {
  buildAppointmentMail,
  parseAppointmentPayload,
} from "@/lib/appointment";
import { clientIp, isLimited, sameOrigin } from "@/lib/form-guard";
import { sendWithResend } from "@/lib/send-appointment-mail";

export const dynamic = "force-dynamic";

const topics = serviceCatalog.map((service) => ({
  slug: service.slug,
  kategori: service.kategori,
  baslik: service.baslik,
}));

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

  const payload = parseAppointmentPayload(body, topics);
  if (!payload) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (payload.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const mail = buildAppointmentMail(payload, topics);

  try {
    if (await sendWithResend(mail.subject, mail.body)) {
      return NextResponse.json({ ok: true });
    }
  } catch {
    return NextResponse.json({ fallback: true }, { status: 502 });
  }

  return NextResponse.json({ fallback: true }, { status: 502 });
}
