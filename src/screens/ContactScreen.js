import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import DocumentMeta from "react-document-meta";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactScreen() {
  const meta = {
    title: "お問い合わせ | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲へのお問い合わせはこちらから。展示などの協業、購入のご相談、ご感想などお気軽にご連絡ください。",
    canonical: "/contact/",
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
            <Contact />
          </main>
        </div>
        <Footer />
      </React.Fragment>
    </DocumentMeta>
  );
}
