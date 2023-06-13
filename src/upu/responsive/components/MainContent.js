import React, { useState } from "react";
import { ReactComponent as DotIcon } from "../../../logos/threeDotsIcon.svg";
import { ReactComponent as Lathe } from "../../../logos/lathe.svg";
import { ReactComponent as Plus } from "../../../logos/addIcon.svg";
import { ReactComponent as Backward } from "../../../logos/backwardIcon.svg";
import ProcessIcon from "../../../logos/lathe 1.png";
import GaugeCalculator from "../../GaugeCalculator";
import data from "../../jsonData/GaugeData.js";

const MainContent = () => {
  const [value, setValue] = useState(data);
  return (
    <>
      <div className="main flex flex-col items-center py-5 px-5 gap-6 w-full h-[882px] overflow-y-scroll no-scrollbar">
        {/*utilization frame and gauge chart frame*/}
        <div className="uitilizationAndGauge flex flex-col items-start p-0 gap-4 w-[100%] h-[177px] ">
          {/*utilization*/}
          <div className="utilization justify-between relative flex flex-row items-start p-0 gap-[1px] isolate w-[100%] h-5  ">
            <span className="font-sans not-italic font-medium text-lg leading-5 flex items-center text-center text-[#1D2939] ">
              Utilizations
            </span>
            <DotIcon className="flex flex-col items-start p-0 w-20 h-5 left-[312px] t-5 z-[1px] " />
          </div>
          {/*Gauge chart*/}

          <div className="gaugeFrame relative flex flex-row items-start pt-2 pr-5 pb-4 pl-0 gap-3 w-[100%] h-[140px] overflow-x-scroll no-scrollbar ">
            {/*mapping*/}
            {value.map((data) => {
              return (
                <div className="chart box-border min-w-[148px] h-[110px] bg-white border border-solid border-[#D0D5DD] shadow-lg rounded-lg relative">
                  <div className="machine flex flex-row items-start  p-0 absolute w-[120px] h-7 left-3.5 top-[93px] rounded-lg">
                    <div className="iconAndText box-border justify-between flex flex-row items-center py-1.5 px-2.5 w-[120px] h-7 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-md">
                      <img src={ProcessIcon} />
                      <div className="text flex flex-row items-start p-0 w-16 h-2.5">
                        <span className="w-16 h-2.5 font-sans font-normal not-italic  text-[10px] flex items-center text-center text-[#1D2939] ">
                          Manual Torna
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*Gauge chart*/}
                  <div className="gauge absolute w-[112px] h-[65px] left-[18px] top-[27px]">
                    <GaugeCalculator value={data?.value} />
                    <span className="flex items-center -translate-y-4 absolute w-[22px] h-[9px] left-0 top-[70px] text-[#475467]  font-medium not-italic font-[Inter] text-xs leading-[8px] ">
                      0%
                    </span>
                    <span className="flex items-center -translate-y-4 absolute text-right w-[22px] h-[9px] left-[93px] top-[70px] text-[#475467] font-medium not-italic font-[Inter] text-xs leading-[8px]">
                      100%
                    </span>
                  </div>
                  {/*utilization */}
                  <div className="gaugeUtilization absolute w-[108px] h-[22px] left-[18px] top-[2px]">
                    <div className="rectangularFrame box-border absolute left-[10.16%] right-[7.86%] top-[-8.82%] bottom-[8%] bg-[#FFFFFF] border border-solid border-[#D0D5DD]">
                      <span className="absolute left-[15.54%] right-[15.54%] top-[0.91%] bottom-[84.55%] font-sans not-italic font-normal text-sm  text-[#101828]">
                        Utilization
                      </span>
                    </div>

                    <div className="buttonFrame flex flex-col items-start p-2.5 gap-2.5 w-[104px] h-[22px] left-[21px] top-[-2px]"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*Processes content*/}
        <div className="processesFrame flex flex-col items-start p-0 gap-4 w-[100%] h-[100%] bg-green-300">
          {/*Processes frame*/}
          <div className="processFrame flex flex-col justify-between items-start p-0 gap-4 w-full h-5">
            <div className="process flex flex-row items-start p-0 gap-2 w-full h-5">
              <span className="w-20 h-5 font-sans not-italic font-medium text-[16px] leading-5 flex items-center text-center text-[#1D2939]">
                Processes
              </span>
            </div>
          </div>
          {/*Tab and buttons to expand for more details*/}
          <div className="tabFrame flex flex-row items-center p-0 gap-6 w-full h-10 bg-yellow-500">
            <button className="buttonFrame  relative flex flex-row items-start p-0 w-10 h-10 rounded-md">
              <div className="button box-border flex flex-row p-2.5 gap-2 w-10 h-10 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-md">
                <div className="plus w-4 h-4 ">
                  <Plus className="absolute items-center left-[34.83%] right-[34.83%] top-[34.83%] bottom-[34.83%] justify-center border-[#101828]" />
                </div>
              </div>
            </button>

            {/*machine button frame*/}
            <div className="machinebuttonFrame relative flex flex-row items-start p-0 gap-4 w-[100%] h-10 bg-slate-500">
                <button className="leftArrowButton relative w-3 h-10 bg-slate-100">
                <Backward  className="h-10  border-[2px] border-solid"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
