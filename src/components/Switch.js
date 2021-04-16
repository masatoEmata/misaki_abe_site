import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div class="switchContainer">
      <span class="passage">販売中</span>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            class="switchControl"
          />
        </FormGroup>
      </FormControl>
      <span class="passage">全作品</span>
    </div>
  );
}
