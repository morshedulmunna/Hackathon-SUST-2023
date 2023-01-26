import React from "react";
import DiscreteSlider from "../miu-core/DiscreteSlider";

const NavbarBottom = () => {
  return (
    <div className="flex items-center space-x-6 bg-blue-100 h-[70px] px-12">
      <button className="bg-blue-500 px-4 py-2 text-black rounded-sm">
        Randomize
      </button>
      <div>
        <p>Number of Array</p>
        <DiscreteSlider />
      </div>
      <div>
        <p>Speed</p>
        <DiscreteSlider />
      </div>
    </div>
  );
};

export default NavbarBottom;
