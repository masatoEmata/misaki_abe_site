import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function NeuButton(props) {
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
      onClick={handleClick}
      class="neuButton label"
    >
      {children}
    </Button>
  );
}
