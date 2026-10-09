const recent = new Map<string, number[]>();

function hostKey(hostname: string) {
  return hostname.replace(/^www\./, "");
}

function localHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

export function isLimited(ip: string) {
  const now = Date.now();
  const hour = 60 * 60 * 1000;
  const stamps = (recent.get(ip) ?? []).filter((time) => now - time < hour);
  if (stamps.length >= 8) {
    recent.set(ip, stamps);
    return true;
  }
  stamps.push(now);
  recent.set(ip, stamps);
  return false;
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const originHost = new URL(origin).hostname;
    const requestHost = new URL(request.url).hostname;
    if (hostKey(originHost) === hostKey(requestHost)) return true;
    if (localHost(originHost) && localHost(requestHost)) return true;
    const site = process.env.NEXT_PUBLIC_SITE_URL;
    return Boolean(site && hostKey(new URL(site).hostname) === hostKey(originHost));
  } catch {
    return false;
  }
}
