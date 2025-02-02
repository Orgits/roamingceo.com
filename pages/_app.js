import React, { useEffect } from "react";
import { useRouter } from "next/router";

import "react-perfect-scrollbar/dist/css/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/widgets.css";
import "../public/assets/css/responsive.css";

// Ensure MetisMenu CSS is properly imported if available
try {
  require("metismenujs/dist/metismenujs.css");
} catch (error) {
  console.warn("MetisMenu CSS not found, skipping import.");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      new WOW.WOW().init();
    }

    const gridElement = document.querySelector(".grid-sizer");
    if (gridElement) {
      const Masonry = require("masonry-layout");
      new Masonry(".grid", {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
      });
    }

    const handleRouteChangeError = () => {
      console.error("Route change error occurred.");
    };

    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;