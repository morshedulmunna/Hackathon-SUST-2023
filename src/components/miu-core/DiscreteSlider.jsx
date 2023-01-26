import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider({ changeHandler }) {
  const handleChange = (event) => {
    if (event.target.innerText === "") {
      return;
    }
    const num = parseInt(event.target.innerText, 10);

    console.log(num);

    changeHandler(num);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
        onChangeCommitted={handleChange}
      />
    </Box>
  );
}
