import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  neuButton: {
    boxShadow:
      "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001",
    "&:hover": {
      boxShadow: "-2px -2px 5px #fff, 2px 2px 5px #babecc",
    },
    backgroundColor: "#dde6f0",
    padding: "10px 25px",
    margin: 10,
  },
  link: {
    textDecoration: "none",
  },
}));

export default function NeuButton(props) {
  const classes = useStyles();
  const history = useHistory();
  const { children, path } = props;
  function handleClick() {
    if (path === "goBack") {
      history.goBack();
    } else if (path) {
      history.push(path);
    }
  }
  return (
    <Button
      size="small"
      color="primary"
      className={classes.neuButton}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
