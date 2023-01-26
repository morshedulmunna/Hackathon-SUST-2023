import React from "react";
import { Slider, Typography, makeStyles, withStyles } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const CSlider = withStyles({
  root: {
    // color: "#ffffff",
    height: 3,
    padding: "13px 0",
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    backgroundColor: "#fff",
    //color: "#fff",
  },
})(Slider);

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCommit = (event, newValue) => {
    console.log(newValue);
  };

  return (
    <div className={classes.root}>
      <CSlider
        disabled={props.disable}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleCommit}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <Typography id="range-slider" gutterBottom>
        Value range
      </Typography>
    </div>
  );
}
