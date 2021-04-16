import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import NeuButton from "../components/NeuButton";

export default function ContactScreen() {
  document.title = "プロフィール | 阿部美咲 Misaki Abe";

  return (
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
  );
}
