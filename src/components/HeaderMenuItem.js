import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function HeaderMenuItem(props) {
  const { children, pathTo, scrollTo } = props;
  if (scrollTo) {
    return (
      <li class="appBarMenuItem">
        <AnchorLink class="appBarMenuItemLink" href={scrollTo} offset="50">
          {children}
        </AnchorLink>
      </li>
    );
  } else if (pathTo) {
    return (
      <li class="appBarMenuItem">
        <Link class="appBarMenuItemLink" to={pathTo}>
          {children}
        </Link>
      </li>
    );
  }
}
