import React, { useState } from "react";
import { ReactComponent as UpuTwin } from "../logos/upu.twin.svg";
import { ReactComponent as ToggleLogo } from "../logos/toggle.svg";
import { ReactComponent as Map } from "../logos/map.svg";
import { ReactComponent as Statistics } from "../logos/statistics.svg";
import LeftBarExpand from "./LeftBarExpand";
import Gauge from "./Gauge";
import FactoryLayout from "./FactoryLayout";
import RightNavBar from "./RightNavBar";
import Toggle from "./Toggle";
import StatusBar from "./responsive/components/StatusBar";
import MainContent from "./responsive/components/MainContent";
import EditMachineCard from "./responsive/components/EditMachineCard";
import ExpandableRightNavBar from "./responsive/components/ExpandableRightNavBar.js";

const Tower = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <>
      <div className="bg-[#6941C6] xs:hidden xs:bg-black flex w-full h-[636px] overflow-hidden lg:w-[90%] md:w-fit">
        {/*left bar for navigations*/}
        <LeftBarExpand />

        {/*it holds all details*/}
        <div className="h-full lg:max-w-full sm:h-screen bg-white flex flex-row rounded-tl-lg mt-3">
          {/*main containt*/}
          <div className="details w-full  lg:w-[80%] md:w-[92%]">
            <div className="header flex flex-row justify-between items-center mt-5 ml-5 gap-2.5 bg-[#FFFFFF] h-14">
              <div className="flex flex-row items-center gap-2.5">
                <UpuTwin />
                <p className="font-inter not-italic font-normal text-base leading-4 text-[#667085] align-bottom">
                  fabrikanizin dijital ikizi
                </p>
              </div>

              {/*Toggle and charts*/}
              <button className="enabled flex flex-row gap-[30px] h-10 items-center rounded-sm">
                {/*Toggle button*/}
                <button
                  className={`flex relative flex-row justify-end items-center py-[2px] pl-[2px] pr-[2px] gap-1 w-[54px] h-6 bg-[#7F56D9] rounded-xl ${
                    isToggled ? " bg-gray-500" : "translate-500"
                  }`}
                  onClick={() => setIsToggled(!isToggled)}
                >
                  <span
                    className={`absolute z-10 text-sm transition duration-200 text-primary-100 mt-auto mb-auto leading-5 ${
                      isToggled ? "right-1" : "left-1"
                    }`}
                  >
                    OEE
                  </span>
                  <div
                    className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ${
                      isToggled ? "-translate-x-8" : "translate-x-0 "
                    }`}
                  />
                </button>
                <button className="charts flex flex-row items-center justify-center pt-1 pr-2 w-[84px] h-10 gap-3 rounded-md shadow-lg border border-solid border-[#D0D5DD]">
                  <Map />
                  <Statistics />
                </button>
              </button>
            </div>

            {/*graphical meter (Gauge meter)*/}
            <Gauge setIsToggled={setIsToggled} isToggled={isToggled} />
            {/*Factory Layout*/}
            <FactoryLayout />
          </div>
          <RightNavBar />
        </div>
      </div>

      {/*Mobile compatible responsive */}

      <div className="hidden xs:flex xs:flex-col w-full h-full">
        <StatusBar />
        <MainContent />
        
      </div>
    </>
  );
};

export default Tower;
