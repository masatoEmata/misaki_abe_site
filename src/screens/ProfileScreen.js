import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

export default function ContactScreen() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div class="container">
        <Header shadow="none" />
        <main class="mainContainer">
          <Profile />
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
