import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import DocumentMeta from "react-document-meta";

import Header from "../components/Header";
import Footer from "../components/Footer";
import History from "../components/History";
import NeuButton from "../components/NeuButton";

export default function ContactScreen() {
  const meta = {
    title: "プロフィール | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の経歴・活動を紹介。東京藝術大学に在学し、油絵を始めとする絵画、映像作品を出展・販売中。",
    canonical: "/profile/",
    meta: {
      charset: "utf-8",
    },
  };

  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-PQ27B5M");
  }, []);

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <div class="container">
          <Header />
          <main class="mainContainer" style={{ textAlign: "center" }}>
            <History />
            <NeuButton path="/contact/">質問する</NeuButton>
          </main>
        </div>
        <Footer />
      </React.Fragment>
    </DocumentMeta>
  );
}
