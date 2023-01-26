import React from "react";
import { makeStyles, Typography } from "@mui/material";
import { Slider } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const handleChange = (event) => {
    if (event.target.innerText === "") {
      return;
    }
    const num = parseInt(event.target.innerText, 10);
    props.onCountChange(num);
  };
  return (
    <div className={classes.root + " ml-2 mr-2"}>
      <Slider
        defaultValue={props.default}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChangeCommitted={handleChange}
        step={props.step}
        // marks={props.marks}
        min={props.min}
        max={props.max}
        disabled={props.disable}
      />
      <Typography id="discrete-slider" gutterBottom>
        {props.title}
      </Typography>
    </div>
  );
}
