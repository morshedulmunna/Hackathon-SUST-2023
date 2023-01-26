import React from "react";

const Loading = () => {
  let circleCommonClasses = "h-2 w-2 bg-blue-500 rounded-full";
  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses} mr-1`}></div>
      <div className={`${circleCommonClasses}`}></div>
    </div>
  );
};

export default Loading;
