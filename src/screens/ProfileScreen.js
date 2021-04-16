import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import DocumentMeta from "react-document-meta";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import NeuButton from "../components/NeuButton";

export default function ContactScreen() {
  const meta = {
    title: "プロフィール | 阿部美咲 Misaki Abe",
    description:
      "絵画・映像の作家、阿部美咲の経歴・活動を紹介。東京藝術大学に在学し、油絵を始めとする絵画、映像作品を出展・販売中。",
    canonical: "/profile/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <CssBaseline />
        <div class="container">
          <Header shadow="none" />
          <main class="mainContainer" style={{ textAlign: "center" }}>
            <Profile />
            <NeuButton path="/contact/">質問する</NeuButton>
          </main>
        </div>
        <Footer />
      </React.Fragment>
    </DocumentMeta>
  );
}
