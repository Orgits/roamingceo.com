import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import "react-perfect-scrollbar/dist/css/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/widgets.css";
import "../public/assets/css/responsive.css";

// ✅ Corrected MetisMenu CSS Import (Handles Errors Gracefully)
if (typeof window !== "undefined") {
  try {
    require("metismenujs/styles/metismenu.css"); // ✅ Fixed import path
  } catch (error) {
    console.warn("MetisMenu CSS not found, skipping import.");
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Ensuring WOW.js only runs on client-side
      import("wowjs").then((WOW) => {
        new WOW.WOW().init();
      });

      // ✅ Ensuring Masonry only runs if element exists
      const gridElement = document.querySelector(".grid-sizer");
      if (gridElement) {
        import("masonry-layout").then((Masonry) => {
          new Masonry.default(".grid", {
            itemSelector: ".grid-item",
            columnWidth: ".grid-sizer",
          });
        });
      }

      // ✅ Google Analytics (gtag.js) - Runs Only in Browser
      const GA_TRACKING_ID = "G-L5R1V9B5MK"; // Change this if needed

      const handleRouteChange = (url) => {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      };

      if (!window.gtag) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", GA_TRACKING_ID);
      }

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <>
      <Head>
        {/* ✅ Default Meta Tags for SEO */}
        <meta
          name="description"
          content="RoamingCEO - Business & Tech Insights for Entrepreneurs and CEOs."
        />
        <meta property="og:title" content="RoamingCEO - Business & Tech Insights" />
        <meta
          property="og:description"
          content="Stay ahead with expert business, marketing, and tech strategies for CEOs, startups, and professionals."
        />
        <meta property="og:image" content="https://roamingceo.com/og-image.jpg" />
        <meta property="og:url" content="https://roamingceo.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Google Analytics (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
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
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;