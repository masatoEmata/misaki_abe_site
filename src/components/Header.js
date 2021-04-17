import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

import HeaderMenuItem from "../components/HeaderMenuItem";

export default function Header(props) {
  let { shadow } = props;
  const useStyles = makeStyles(() => ({
    appBar: {
      backgroundColor: "#dde6f0",
      flex: 1,
      alignItems: "center",
      paddingBottom: "25px",
      boxShadow: shadow,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <h1 variant="h6" class="appBarTitle">
        <Link to="/" class="rootLink">
          Misaki Abe
        </Link>
      </h1>
      <ul>
        {/* <HeaderMenuItem scrollTo="#sectionOther">Profile</HeaderMenuItem>
        <HeaderMenuItem scrollTo="#sectionContact">Contact</HeaderMenuItem> */}
        <HeaderMenuItem pathTo="/profile/">Profile</HeaderMenuItem>
        <HeaderMenuItem pathTo="/contact/">Contact</HeaderMenuItem>
        <HeaderMenuItem pathTo="/works/">Works</HeaderMenuItem>
      </ul>
    </AppBar>
  );
}

// const styles =
