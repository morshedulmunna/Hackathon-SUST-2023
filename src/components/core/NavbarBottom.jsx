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
          <DiscreteSlider
            check="count"
            onCountChange={this.props.handleCountChange}
          />
        </div>
        <div>
          <p>Speed</p>
          <DiscreteSlider
            check="speed"
            onSpeedChange={this.props.onSpeedChange}
          />
        </div>
        <div>
          <Dropdown pos={0} onAlgoChanged={this.props.onAlgoChanged} />
        </div>
        <div>
          <button
            onClick={this.props.onViusalize}
            disabled={this.props.disable}
            style={this.isClickable()}
            className="btn btn-primary "
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
