import React from "react";
import OpenButton from "../components/chatgpt/OpenButton";

const HomeLayout = () => {
  return (
    <>
      <div className=" relative w-full h-[100vh] bg-blue-50 ">
        <div>
          <div className="bg-red-400 h-[70vh]"> hello</div>
          <div className="bg-blue-500 h-[30vh] "> lover</div>
        </div>
        <div className="absolute bottom-2 right-4 ">
          <OpenButton />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
