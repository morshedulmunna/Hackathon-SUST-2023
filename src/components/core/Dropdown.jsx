import React from "react";

const Dropdown = ({ onAlgoChanged, pos }) => {
  const [state, setState] = React.useState({
    pos: pos,
  });

  const handleChange = (event) => {
    console.log(state.pos);
    setState(parseInt(event.target.value));
    onAlgoChanged(state.pos, event.target.value);
  };

  return (
    <select onChange={handleChange} className="select w-full  ">
      <option value="0">Bubble Sort</option>
      <option value="1">SelectionSort Sort</option>
      <option value="2">InsertionSort Sort</option>
      <option value="3">QuickSort Sort</option>
    </select>
  );
};

export default Dropdown;
