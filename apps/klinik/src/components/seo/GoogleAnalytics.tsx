import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";

export function GoogleAnalytics() {
  if (!gaId || !/^G-[A-Z0-9]+$/i.test(gaId)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
