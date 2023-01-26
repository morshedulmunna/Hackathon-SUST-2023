import React, { Component } from "react";
import NavbarBottom from "../../core/NavbarBottom";
import Rects from "./rects";

import { bubbleSort } from "../../../algorithm/bubbleSort";
import { selectionSort } from "../../../algorithm/selectionSort";
import { quickSort } from "../../../algorithm/quickSort";
import { insertionSort } from "../../../algorithm/insertionSort";

class Sort extends Component {
  // Main State
  state = {
    count: 50,
    rects: [],
    rects2: [],
    speed: 10,
    isRunning: false,
    isRunning1: false,
    isRunning2: false,
    algo1: 0,
    disable: true,
  };

  render() {
    return (
      <React.Fragment>
        <NavbarBottom
          disable={this.state.isRunning}
          onViusalize={this.handleSort}
          onRandomize={this.handleRandomize}
          onRefresh={this.handleRefresh}
          onCountChange={this.handleCountChange}
          onAlgoChanged={this.handleAlgoChanged}
          onSpeedChange={this.handleSpeedChanged}
        />
        <div className=" justify-content-center">
          <Rects rects={this.state.rects} />
        </div>
      </React.Fragment>
    );
  }

  // Component Mount
  componentDidMount() {
    const rect = getInitialRects(this.state.count);
    const rect2 = rect.slice();
    this.setState({ rects: rect, rects2: rect2 });
  }
  //randomize Array Generator
  handleRandomize = () => {
    const rect = getInitialRects(this.state.count);
    const rect2 = rect.slice();
    this.setState({ rects: rect, rects2: rect2 });
  };

  // Handle Refresh
  handleRefresh = () => {
    const rects = this.state.rects;
    for (let i = 0; i < rects.length; i++) {
      const rect = { ...rects[i], isSorted: false, isSorting: false };
      rects[i] = rect;
    }
    const rects2 = rects.slice();
    this.setState({ rects, rects2 });
  };

  //Handle Count Change
  handleCountChange = (val) => {
    console.log(val);

    this.setState({ count: val });
    this.handleRandomize();
  };

  // Handle Algo
  handleAlgoChanged = (val) => {
    this.setState({ algo1: val });
    this.handleRandomize();
  };

  // Handle SPeed
  handleSpeedChanged = (val) => {
    const speed = 760 - val * 7.5;
    this.setState({ speed });
  };

  // Handle Sort array
  handleSort = () => {
    this.setState({ isRunning: true, disable: false });
    let steps1;
    switch (this.state.algo1) {
      case 0:
        steps1 = bubbleSort(this.state.rects);
        break;
      case 1:
        steps1 = selectionSort(this.state.rects);
        break;
      case 2:
        steps1 = insertionSort(this.state.rects);
        break;
      case 3:
        steps1 = quickSort(this.state.rects2);
        break;
      default:
        steps1 = bubbleSort(this.state.rects);
        break;
    }

    this.handleFirst(steps1);
  };

  // Handle Fast
  handleFirst = async (steps) => {
    this.setState({ isRunning1: true });

    const prevRect = this.state.rects;
    for (let i = 0; i < steps.length; i++) {
      if (i !== 0) {
        prevRect[steps[i - 1].xx] = {
          ...prevRect[steps[i - 1].xx],
          isSorting: false,
        };
        prevRect[steps[i - 1].yy] = {
          ...prevRect[steps[i - 1].yy],
          isSorting: false,
        };
      }
      if (steps[i].xx === steps[i].yy) {
        prevRect[steps[i].xx] = {
          ...prevRect[steps[i].xx],
          isSorted: true,
          isSorting: false,
        };
      } else if (steps[i].changed) {
        const recti = { ...prevRect[steps[i].xx], isSorting: true };
        const rectj = { ...prevRect[steps[i].yy], isSorting: true };
        prevRect[steps[i].yy] = recti;
        prevRect[steps[i].xx] = rectj;
      } else {
        prevRect[steps[i].xx] = { ...prevRect[steps[i].xx], isSorting: true };
        prevRect[steps[i].yy] = { ...prevRect[steps[i].yy], isSorting: true };
      }
      if (i === steps.length - 1) {
        this.setState({ isRunning1: false });
        if (this.state.isRunning2 === false) {
          this.setState({ isRunning: false });
        }
      }

      this.setState({ rects: prevRect });
      await sleep(this.state.speed);
    }
  };
}

// SPeed Controller
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Initial Array Generator
const getInitialRects = (tot) => {
  const rects = [];
  for (let i = 0; i < tot; i++) {
    rects.push(getRect(i));
  }
  return rects;
};

const getRect = (kk) => {
  return {
    width: Math.floor(Math.random() * 200) + 50,
    isSorted: false,
    isSorting: false,
    kk: kk,
  };
};
export default Sort;
