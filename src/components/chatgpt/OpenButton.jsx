import React from "react";
import { MdCastForEducation } from "react-icons/md";

const OpenButton = () => {
  return (
    <>
      <div className="bg-orange-500 px-4 py-2 rounded-full text-white font-bold flex justify-center items-center space-x-2">
        <MdCastForEducation />
        <button>Learning Assistance</button>
      </div>
    </>
  );
};

export default OpenButton;
