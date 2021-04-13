import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#dde6f0",
    padding: theme.spacing(6),
    height: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"©"}
        <Link color="inherit" href="https://twitter.com/Quincle_shimobe">
          Misaki Abe
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}
