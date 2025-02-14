import React, { useEffect } from "react";
import { useRouter } from "next/router";

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
    }

    // ✅ Route Change Error Handling
    const handleRouteChangeError = (err, url) => {
      console.error(`Route change to ${url} failed.`, err);
    };

    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;