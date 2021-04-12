import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#dde6f0",
    flex: 1,
    alignItems: "center",
    paddingTop: "25px",
    paddingBottom: "25px",
  },
  appBarTitle: {
    fontSize: "45px",
    fontFamily: "Yu Mincho",
    fontWeight: "bolder",
    color: "#323232",
    "&:hover": {
      color: "#f50057",
    },
  },
  appBarMenu: {
    textAlign: "center",
  },
  appBarMenuText: {
    fontSize: "35px",
    fontFamily: "Yu Mincho",
    color: "#323232",
    display: "inline-block",
    marginRight: "30px",
    "&:hover": {
      color: "#f50057",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <h1 variant="h6" noWrap className={classes.appBarTitle}>
        Abe Misaki
      </h1>
      <ul className={classes.appBarMenu}>
        <li className={classes.appBarMenuText}>Profile</li>
        <li className={classes.appBarMenuText}>Contact</li>
        <li className={classes.appBarMenuText}>Sale</li>
      </ul>
    </AppBar>
  );
}

// const styles =
