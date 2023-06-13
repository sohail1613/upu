import React from "react";
import { ReactComponent as Mobile } from "../../../logos/mobileSignalIcon.svg";
import { ReactComponent as Wifi } from "../../../logos/wifiIcon.svg";
import { ReactComponent as batteryIcon } from "../../../logos/batteryIcon.svg";
import { ReactComponent as Logo } from "../../../logos/Logo.svg";
import { ReactComponent as Chat } from "../../../logos/personel.svg";

const StatusBar = () => {
  return (
    <div className="statusBar flex flex-row justify-between items-center py-3 px-5 w-full h-14 bg-[#6941C6]">
      {/*logo frame and left navBar*/}
      <div className="logoFrame flex flex-row items-center p-0 gap-2 w-[127px] h-8">
        <Logo />
        <span className="flex items-center text-center text-[#FFFFFF] not-italic font-normal font-[Inter] text-xl leading-5 w-[70px] h-5">
          upu.twin
        </span>
      </div>

      {/*chat and right navBar*/}
      <div className="rightNavBar flex flex-row items-center p-0 gap-4 w-[10%] h-7">
        <div className="chatIcon w-7 h-5">
          <Chat style={{width:"30px", height:"30px"}} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

// <div className="flex flex-row items-start py-0 pl-[15px] pr-5 w-full h-[44px] bg-[#6941C6]">
// {/*time*/}
// <div className="time flex flex-col items-center pt-2.5 px-0 pb-0 gap-2.5 w-[54px] h-[44px] text-white">
//   <p style={{ width: "28.43px", height: "11.09px" }}>10:11</p>
// </div>
// {/*notch*/}
// <div className="notch w-[330px] h-[30px]">
//   <div className="notchResizing absolute h-[30px] left-28 rounded-b-2xl right-28 top-[-2px] bg-[#000000]"></div>
// </div>
// {/*battery, wifi and network signal status*/}
// <div className="status flex flex-row justify-center items-start pt-3 px-0 pb-0 gap-1.5 w-[90px] h-11">
//   <div className="mobile w-[20px] h-2.5 text-[#FFFFFF]">
//     <Mobile size={28}/>
//   </div>
//   <div className="wifi w-[20px] h-2.5 text-[#FFFFFF]">
//     <Wifi />
//   </div>
//   <div className="battery w-6 h-[11px] text-[#FFFFFF]">
//     <batteryIcon />
//   </div>
// </div>
// </div>
