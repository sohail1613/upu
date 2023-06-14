import React, { useState } from "react";
import { ReactComponent as Mobile } from "../../../logos/mobileSignalIcon.svg";
import { ReactComponent as Wifi } from "../../../logos/wifiIcon.svg";
import { ReactComponent as batteryIcon } from "../../../logos/batteryIcon.svg";
import { ReactComponent as Logo } from "../../../logos/Logo.svg";
import { ReactComponent as Chat } from "../../../logos/personel.svg";
import ExpandableRightNavBar from "./ExpandableRightNavBar";
import ExpandableChatBar from "./ExpandableChatBar";

const StatusBar = () => {
  const [showLeftBar, setShowLeftBar] = useState(false);
  const [chatBar, setChatBar] = useState(false)

  const handleLeftBar = () => {
    setShowLeftBar(!showLeftBar);
  };

  const handleChatBar = () => {
    setChatBar(!chatBar);
  }

  return (
    <>
      <div className="statusBar flex flex-row justify-between items-center py-3 px-5 w-full h-14 bg-[#6941C6]">
        {/*logo frame and left navBar*/}
        <button
          className="logoFrame flex flex-row items-center p-0 gap-2 h-8"
          style={{ width: ExpandableRightNavBar ? 130 : 80 }}
          onClick={handleLeftBar}
        >
          <Logo />
          <span className="flex items-center text-center text-[#FFFFFF] not-italic font-normal font-[Inter] text-xl leading-5 w-[80px] h-5">
            upu.twin
          </span>
        </button>

        {/*chat and right navBar*/}
        <button className="rightNavBar flex flex-row items-center p-0 gap-4 w-[10%] h-7"
        style={{width: ExpandableChatBar ? 40 : 80}}
        onClick={handleChatBar}
        >
          <div className="chatIcon w-7 h-5">
            <Chat style={{ width: "30px", height: "30px" }} />
          </div>
        </button>
      </div>
      {showLeftBar && <ExpandableRightNavBar setShowLeftBar={setShowLeftBar} />}
      {chatBar && <ExpandableChatBar setChatBar={setChatBar} />}
    </>
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
