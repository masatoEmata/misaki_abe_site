import React from "react";
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

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <div class="container">
          <Header shadow="none" />
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
