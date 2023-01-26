import React, { Component } from "react";
import DiscreteSlider from "../miu-core/DiscreteSlider";
import Dropdown from "./Dropdown";
import SwitchLabels from "../algorithm/sortingAlgoComponent/formControlLabel";

class NavbarBottom extends Component {
  render() {
    return (
      <div className="flex items-center space-x-6  bg-blue-100 h-[70px] w-full px-8">
        {/* Random Array Generate BUtton */}
        <button onClick={this.props.onRandomize} className="btn btn-info ">
          Randomize
        </button>

        {/* Number Of Array */}
        <div>
          <p>Number of Array</p>
          <DiscreteSlider changeHandler={this.props.onCountChange} />
        </div>

        {/* Speed high Low Slider */}
        <div>
          <p>Speed</p>
          <DiscreteSlider changeHandler={this.props.onSpeedChange} />
        </div>

        {/* Select Your Sorting Algo */}
        <div>
          <Dropdown pos={0} onAlgoChanged={this.props.onAlgoChanged} />
        </div>

        {/* Visualizer Start Button */}
        <div>
          <button
            onClick={this.props.onViusalize}
            disabled={this.props.disable}
            style={this.isClickable()}
            className="btn btn-primary  "
          >
            Visualize
          </button>
        </div>
      </div>
    );
  }

  isClickable = () => {
    if (this.props.disable) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  };
}

export default NavbarBottom;
