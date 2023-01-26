import React from "react";
import FlipMove from "react-flip-move";

const Rects = ({ rects }) => {
  // let margin = 5;
  // if (rects.length > 50) {
  //   margin = 1;
  // }

  const checkColor = (sorted, sorting) => {
    if (sorted) {
      return "green";
    } else if (sorting) {
      return "red";
    } else {
      return "black";
    }
  };

  return (
    <React.Fragment>
      <div className="flex gap-5 justify-center items-center mt-12">
        {rects.map((rect, index) => {
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
                  background: checkColor(rect.isSorted, rect.isSorting),
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
