import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#dde6f0",
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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

// const styles =
