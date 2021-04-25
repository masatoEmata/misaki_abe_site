import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

import HeaderMenuItem from "../components/HeaderMenuItem";

export default function Header() {
  return (
    <AppBar position="relative" class="appBarClass">
      <h1 variant="h6" class="appBarTitle">
        <Link to="/" class="rootLink">
          Misaki Abe
        </Link>
      </h1>
      <ul>
        <HeaderMenuItem pathTo="/profile/">Profile</HeaderMenuItem>
        <HeaderMenuItem pathTo="/contact/">Contact</HeaderMenuItem>
        <HeaderMenuItem pathTo="/works/">Works</HeaderMenuItem>
      </ul>
    </AppBar>
  );
}

// const styles =
