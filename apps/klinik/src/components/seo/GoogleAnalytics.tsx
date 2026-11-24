import Script from "next/script";
import {
  gtagConfigInlineScript,
  isGaMeasurementId,
  isGtmContainerId,
} from "@muratcokay/seo";

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";

export function GoogleAnalytics() {
  const hasGa = isGaMeasurementId(gaId);
  const hasGtm = isGtmContainerId(gtmId);

  if (!hasGa && !hasGtm) return null;

  return (
    <>
      {hasGtm ? (
        <>
          <Script id="google-gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height={0}
              width={0}
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
      {hasGa ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-gtag" strategy="afterInteractive">
            {gtagConfigInlineScript(gaId)}
          </Script>
        </>
      ) : null}
    </>
  );
}
