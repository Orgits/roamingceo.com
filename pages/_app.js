import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Importing global styles
import "react-perfect-scrollbar/dist/css/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/widgets.css";
import "../public/assets/css/responsive.css";

// ✅ Load GA Tracking ID from environment
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && GA_TRACKING_ID) {
      // ✅ Google Analytics Setup (Only in Client)
      if (!window.gtag) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", GA_TRACKING_ID);
      }

      // ✅ Track Route Changes
      const handleRouteChange = (url) => {
        window.gtag("config", GA_TRACKING_ID, { page_path: url });
      };
      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <>
      <Head>
        {/* ✅ SEO Meta Tags */}
        <meta name="description" content="RoamingCEO - Business & Tech Insights for Entrepreneurs and CEOs." />
        <meta property="og:title" content="RoamingCEO - Business & Tech Insights" />
        <meta property="og:description" content="Stay ahead with expert business, marketing, and tech strategies for CEOs, startups, and professionals." />
        <meta property="og:image" content="https://roamingceo.com/og-image.jpg" />
        <meta property="og:url" content="https://roamingceo.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}');
                `,
              }}
            />
          </>
        )}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;