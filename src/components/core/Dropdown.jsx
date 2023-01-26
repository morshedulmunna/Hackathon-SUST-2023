import React from "react";

const Dropdown = ({ onAlgoChanged, pos }) => {
  const handleChange = (event) => {
    let algo = parseInt(event.target.value);

    console.log(algo);
    onAlgoChanged(algo);
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
