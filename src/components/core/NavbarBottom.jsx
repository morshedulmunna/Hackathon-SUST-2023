import React, { Component } from "react";
import DiscreteSlider from "../miu-core/DiscreteSlider";
import Dropdown from "./Dropdown";

class NavbarBottom extends Component {
  render() {
    return (
      <div className="flex items-center space-x-6  bg-blue-100 h-[70px] w-full px-8">
        <button onClick={this.props.onRandomize} className="btn btn-info ">
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
        <div>
          <Dropdown />
        </div>
        <div>
          <button className="btn btn-primary ">Visualize</button>
        </div>
      </div>
    );
  }
}

export default NavbarBottom;
