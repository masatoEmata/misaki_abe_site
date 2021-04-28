import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import DocumentMeta from "react-document-meta";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Thread from "../components/Thread";

export default function ContactThanksScreen() {
  const meta = {
    title: "お問い合わせ完了 | 阿部美咲 Misaki Abe",
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
          <main class="mainContainer">
            <Thread heading={"Thanks"}>
              この度はお問い合わせいただき、誠にありがとうございます。追って内容を確認いたしますので、もうしばらくお待ちください。
            </Thread>
          </main>
        </div>
        <Footer />
      </React.Fragment>
    </DocumentMeta>
  );
}
