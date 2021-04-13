import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

import HeaderMenuItem from "../components/HeaderMenuItem";

export default function Header(props) {
  let { shadow } = props;
  const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: "#dde6f0",
      flex: 1,
      alignItems: "center",
      paddingBottom: "25px",
      boxShadow: shadow,
    },
    appBarTitle: {
      marginTop: 25,
      marginBottom: 25,
    },
    menu: {
      textAlign: "center",
    },
    menuItem: {
      display: "inline-block",
      marginRight: "30px",
    },
    menuItemLink: {
      fontSize: 18,
      fontFamily: "Yu Mincho",
      textDecoration: "none",
      color: "#323232",
      "&:hover": {
        color: "#f50057",
      },
    },
    rootLink: {
      textDecoration: "none",
      fontSize: 32,
      fontFamily: "Yu Mincho",
      fontWeight: "bolder",
      color: "#323232",
      "&:hover": {
        color: "#f50057",
      },
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <h1 variant="h6" noWrap className={classes.appBarTitle}>
        <Link to="/" className={classes.rootLink}>
          Abe Misaki
        </Link>
      </h1>
      <ul className={classes.menu}>
        <HeaderMenuItem path="/#profile">Profile</HeaderMenuItem>
        <HeaderMenuItem path="/#contact">Contact</HeaderMenuItem>
        <HeaderMenuItem path="/works/">Works</HeaderMenuItem>
      </ul>
    </AppBar>
  );
}

// const styles =
