// import React, { Component } from "react";

// class Rects extends Component {
//   render() {

//     return (
//       <div>
//         <FlipMove
//           className="flex justify-center items-end"
//           duration={this.props.speed}
//           // easing="cubic-bezier(.12,.36,.14,1.2)"
//         >
//           {this.props.rects.map((rect, rectidx) => {
//             return <Rect marg={margin} key={rect.kk} rect={rect} />;
//           })}
//         </FlipMove>
//       </div>
//     );
//   }
// }

// export default Rects;

import React from "react";
import Rect from "./rect";
import FlipMove from "react-flip-move";

const Rects = ({ rects }) => {
  let margin = 5;
  if (rects.length > 50) {
    margin = 1;
  }
  return (
    <React.Fragment>
      <div className="flex gap-5 justify-center items-center mt-12">
        {rects.map((rect, index) => {
          let height = `h-[${rect.width.toString()}px]`;

          console.log(height);
          return (
            <div
              className="relative h-[50vh] border-b-2 border-blue-800"
              key={index}
            >
              <div
                className=" absolute bottom-0"
                style={{
                  height: rect.width,
                  width: 15,
                  background: "#000000",
                  // float:'left',
                  "vertical-align": "middle",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Rects;
