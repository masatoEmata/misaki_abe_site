import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  thread: {
    textAlign: "center",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Yu Mincho",
  },
  passage: {
    fontSize: 16,
    lineHeight: 2,
    fontFamily: "Yu Mincho",
  },
}));

export default function Thread(props) {
  const classes = useStyles();
  const { heading, children } = props;
  return (
    <div class={classes.thread}>
      <h2 class={classes.heading}>{heading}</h2>
      <p class={classes.passage}>{children}</p>
    </div>
  );
}
