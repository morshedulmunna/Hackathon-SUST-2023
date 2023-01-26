import React from "react";
import Navbar from "../components/core/Navbar";
import NavbarBottom from "../components/core/NavbarBottom";
import Assistance from "../components/Assistance/Assistance";
import MainSort from "../components/algorithm/sortingAlgoComponent/MainSort";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="  w-full h-[100vh] bg-blue-50 ">
        <div>
          <div className=" h-[100vh] grid grid-cols-12">
            <div className="col-span-9">
              {/* <NavbarBottom /> */}

              {/* Show Algorithm */}
              <div>
                <MainSort />
              </div>
            </div>

            {/* Assistance */}
            <div className="col-span-3 bg-blue-100 relative border-l-[1px] border-gray-400">
              <Assistance />
            </div>
          </div>
          <div className="bg-gray-700 h-[100px] relative">..f</div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
