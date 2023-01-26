import React from "react";
import OpenButton from "../components/assistance/OpenButton";
import Navbar from "../components/core/Navbar";
import NavbarBottom from "../components/core/NavbarBottom";

const HomeLayout = () => {
  return (
    <>
      <div className="  w-full h-[100vh] bg-blue-50 ">
        <Navbar />
        <NavbarBottom />
        <div>
          <div className=" h-[75vh]"> .. </div>
          <div className="bg-gray-700 h-[200px] relative">
            <div className="absolute bottom-8 right-4 ">
              <OpenButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
