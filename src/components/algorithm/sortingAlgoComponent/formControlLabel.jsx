import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.onDoubleChange(event.target.checked);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <div className="flex flex-col">
            <label className="cursor-pointer label">
              <input
                onChange={handleChange}
                type="checkbox"
                className="toggle toggle-primary"
                checked
              />
            </label>
          </div>
        }
        label="Duo"
        disabled={props.disable}
      />
    </FormGroup>
  );
}
