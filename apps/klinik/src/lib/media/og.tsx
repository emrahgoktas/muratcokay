import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export function createOgImage({
  title,
  domain,
  eyebrow = "Yalova · Medikal Estetik ve Bütüncül Sağlık",
}: {
  title: string;
  domain: string;
  eyebrow?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0F4C81 0%, #0D9488 58%, #2E8B57 100%)",
          color: "#FFFFFF",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.18,
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "38%",
              height: "42%",
              background: "#08243d",
              clipPath: "polygon(0 100%, 0 46%, 28% 18%, 52% 44%, 70% 22%, 100% 50%, 100% 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "54%",
              height: "36%",
              background: "#063528",
              clipPath: "polygon(0 100%, 12% 48%, 36% 20%, 58% 46%, 78% 16%, 100% 40%, 100% 100%)",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 1,
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 52 ? 48 : 58,
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 700 }}>Uzm. Dr. Yaşar Murat Çokay</span>
            <span style={{ opacity: 0.85 }}>{domain}</span>
          </div>
          <span style={{ opacity: 0.8 }}>Yalova</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
