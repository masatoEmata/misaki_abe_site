import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
}));

export default function HeaderMenuItem(props) {
  const classes = useStyles();
  const { children, path } = props;
  return (
    <li className={classes.menuItem}>
      <Link className={classes.menuItemLink} to={path}>
        {children}
      </Link>
    </li>
  );
}
