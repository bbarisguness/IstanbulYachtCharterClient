"use client";

import { Nunito_Sans, Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import HeaderStyleTwo from "@/components/header/HeaderTwo";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { usePathname } from 'next/navigation'

//CSS

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
//import "yet-another-react-lightbox/styles.css";
//import "yet-another-react-lightbox/plugins/counter.css";

import "animate.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/sass/style.scss";
import "@/assets/responsive.css";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Poppin = Poppins({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [path, setPath] = useState(pathname)

  useEffect(()=> {
    setPath(pathname);
  }, [pathname])

  const [toggleClassName, SetToggleClassName] = useState(false);
  const [topbar, SetTopbar] = useState(true);

  function toggleClassNameInBody() {
    SetToggleClassName((toggleClassName) => !toggleClassName);
  }

  return (
    <html lang="en">
      <style jsx global>{`
        html,
        body {
          font-family: ${nunito.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6 {
          font-family: ${Poppin.style.fontFamily};
        }
      `}</style>
      <body>
        <div
          className={`body-wrapper ${
            toggleClassName ? "ltn__utilize-open" : ""
          }`}
        >
          <HeaderStyleTwo
            toggleClassNameInBody={toggleClassNameInBody}
            SetToggleClassName={SetToggleClassName}
            topbar={topbar}
            path={path}
          />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
