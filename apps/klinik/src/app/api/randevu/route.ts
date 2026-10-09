import { serviceCatalog } from "@muratcokay/content";
import { NextResponse } from "next/server";

import {
  buildAppointmentMail,
  parseAppointmentPayload,
} from "@/lib/appointment";
import { deliverAppointmentMail } from "@/lib/send-appointment-mail";

export const dynamic = "force-dynamic";

const topics = serviceCatalog.map((service) => ({
  slug: service.slug,
  kategori: service.kategori,
  baslik: service.baslik,
}));

const recent = new Map<string, number[]>();

function isLimited(ip: string) {
  const now = Date.now();
  const hour = 60 * 60 * 1000;
  const stamps = (recent.get(ip) ?? []).filter((time) => now - time < hour);
  if (stamps.length >= 5) {
    recent.set(ip, stamps);
    return true;
  }
  stamps.push(now);
  recent.set(ip, stamps);
  return false;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function localHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const originHost = new URL(origin).hostname;
    const requestHost = new URL(request.url).hostname;
    if (originHost === requestHost) return true;
    if (localHost(originHost) && localHost(requestHost)) return true;
    const site = process.env.NEXT_PUBLIC_SITE_URL;
    return Boolean(site && new URL(site).hostname === originHost);
  } catch {
    return false;
  }
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

  const payload = parseAppointmentPayload(body, topics);
  if (!payload) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (payload.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const mail = buildAppointmentMail(payload, topics);

  try {
    await deliverAppointmentMail(mail.subject, mail.body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
