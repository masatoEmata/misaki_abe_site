import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactScreen() {
  document.title = "問い合わせ | 阿部美咲 Misaki Abe";

  return (
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
  );
}
