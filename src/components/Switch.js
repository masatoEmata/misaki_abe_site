import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingLeft: "20px",
      height: "100px",
      display: "flex",
      alignItems: "center",
    },
    switch: {
      padding: "20px",
    },
    passage: {
      fontSize: "18px",
      fontFamily: "Yu Mincho",
    },
  }));
  const classes = useStyles();

  return (
    <div class={classes.container}>
      <span class={classes.passage}>売却済</span>
      <FormControl component="fieldset" class={classes.switchBar}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            class={classes.switch}
          />
        </FormGroup>
      </FormControl>
      <span class={classes.passage}>販売中</span>
    </div>
  );
}
