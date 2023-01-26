import React from "react";

const Dropdown = () => {
  return (
    <select className="select w-full  ">
      <option value="bubble-sort">Bubble Sort</option>
      <option>Marge Sort</option>
      <option>Quick Sort</option>
      <option>Selection Sort</option>
    </select>
  );
};

export default Dropdown;
