import React, { useState } from "react";
import GaugeCalculator from "./GaugeCalculator";
import { ReactComponent as PlusButton } from "../logos/plusButton.svg";
import { ReactComponent as ForwardButton } from "../logos/forwardButton.svg";
import { ReactComponent as Chart } from "../logos/chartButton.svg";
import data from "././jsonData/GaugeData.js";

const Gauge = ({ setsToggled, isToggled }) => {
  const [value, setValue] = useState(data);

  return (
    <>
      {/*chart*/}
      <div className="flex flex-row items-center gap-4 h-[126px] max-w-[1115px] isolate">
        {/*plus button*/}
        <button className="plusButton w-[30px] h-[126px] rounded flex flex-row flex-start ml-5">
          <PlusButton />
        </button>
        {/*all chart contents*/}
        <div className="chart flex flex-row items-center gap-6 w-full h-[126px] relative overflow-y-scroll no-scrollbar">
          {value.map((data) => {
            return (
              <div
                className="frames flex flex-col items-center  w-[148px] h-[126px]"
                key={data.id}
              >
                {/*screening display button*/}
                <div className="screening">
                  <Chart width={148} />
                </div>
                {/*for gap between both elements*/}
                <div className="flex flex-row justify-center items-start gap-[100px] w-[100px] h-1"></div>
                {/*graphs*/}
                {!isToggled && (
                  <div className="button">
                    <div className="graphs flex flex-row justify-center pt-1.5 px-3 pb-1 gap-2 w-[135px] h-[92px] bg-[#FFFFFF] border border-solid border-[#D0D5DD] rounded-md  shadow-lg relative ">
                      <span className="flex items-center text-center absolute w-[22px] h-[9px] text-[#F79009] font-medium not-italic font-[Inter] text-xs leading-[8px] left-3 top-2">
                        {data.min}
                      </span>
                      <span className="flex items-center absolute w-[22px] h-[9px] text-[#12B76A] font-medium not-italic font-[Inter] text-xs leading-[8px] left-[105px] top-2">
                        {data.max}
                      </span>

                      <GaugeCalculator value={data?.value} />

                      <span className="flex items-center absolute w-[22px] h-[9px] left-2 top-[70px] text-[#475467]  font-medium not-italic font-[Inter] text-xs leading-[8px] ">
                        0%
                      </span>
                      <span className="flex items-center absolute text-right w-[22px] h-[9px] left-[102px] top-[70px] text-[#475467] font-medium not-italic font-[Inter] text-xs leading-[8px]">
                        100%
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/*forward button*/}
        <button className="forwardButton backdrop-blur-sm">
          <ForwardButton />
        </button>
      </div>
    </>
  );
};

export default Gauge;
