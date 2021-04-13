import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Thread from "../components/Thread";
import Form from "../components/Form";

import WorkCard from "../components/WorkCard";
import Switch from "../components/Switch";

const useStyles = makeStyles((theme) => ({
  listSection: {
    backgroundColor: "#dde6f0",
    padding: theme.spacing(6, 0, 5),
  },
  cardGrid: {
    flex: 1,
    backgroundColor: "#dde6f0",
  },
  container: {
    backgroundColor: "#dde6f0",
  },
}));

export default function SalesList() {
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0];
    const scriptUrl = document.createElement("script");
    scriptUrl.type = "text/javascript";
    scriptUrl.src = "https://sdk.form.run/js/v2/formrun.js";
    head.appendChild(scriptUrl);
  }, []);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <Header />
        <main>
          <div>TOP</div>
          <Thread heading={"Profile"}></Thread>
          <Thread heading={"Contact"}></Thread>
          <Form />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
