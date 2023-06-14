import React, { useState } from "react";
import { ReactComponent as BlackLogo } from "../../../logos/black_logo.svg";
import { ReactComponent as UpuPerson } from "../../../logos/upu.person.svg";
import { ReactComponent as AdminAvatar } from "../../../logos/admin_profile.svg";
import { ReactComponent as Baca } from "../../../logos/bacaLogo.svg";
import { ReactComponent as Message } from "../../../logos/msg.svg";
import { ReactComponent as Task } from "../../../logos/task.svg";
import { ReactComponent as Bell } from "../../../logos/bell.svg";
import { ReactComponent as Poll } from "../../../logos/poll.svg";
import { ReactComponent as Attend } from "../../../logos/attend.svg";
import { ReactComponent as Group } from "../../../logos/group.svg";
import { ReactComponent as Talent } from "../../../logos/upu.talent.svg";
import { ReactComponent as Leader } from "../../../logos/leaderLogo.svg";
import { ReactComponent as Point } from "../../../logos/upu.point.svg";
import { ReactComponent as NewMessage } from "../../../logos/newMsg.svg";
import data from "../../jsonData/ChatData.js";

const ExpandableChatBar = ({setChatBar}) => {
    const [chatData, setChatData] = useState(data);


  return (
    <>
    <div className="fixed z-[999] inset-0 bg-black/25 flex">
    <div
      className="flex-1 flex opacity-0"
      onClick={() => setChatBar(false)}
    ></div>
    {/*main container for right menu onClick open*/}
    <button className="onRightMenu absolute right-0 box-border flex flex-col items-center px-4  gap-2 isolate  w-[352px] h-full bg-[#FFFFFF] border border-solid border-[#EAECF0] shadow-lg rounded-l-lg">
      {/* admin header*/}
      <div className="adminHeader flex flex-row justify-between items-center py-1.5 my-[16px] mt-[16px] px-0 gap-2.5 w-[320px] h-14 bg-[#FFFFFF]">
        {/*upu person logo*/}
        <div className="logoFrame flex flex-row items-center p-0 w-[147px] h-8">
          <div className="blackLogo">
            <BlackLogo style={{ width: "32px", height: "32px" }} />
          </div>
          <div className="upuPersonLogo flex flex-col justify-center items-start gap-2 pt-2 py-2 pb-[3px] w-[115px] h-[29px]">
            <UpuPerson style={{ width: "99px", height: "18px" }} />
          </div>
        </div>
        {/*baca logo and admin avatar*/}
        <div className="bacaLogo box-border flex flex-row items-center py-1 pl-1 pr-1.5 w-[98px] h-11 bg-[#FFFFFF] border border-solid border-[#EAECF0] rounded">
          <div className="logoFrame flex flex-row items-center p-0 gap-2 w-[88px] h-9">
            <AdminAvatar className="box-border w-8 h-8 border-solid border-[#D0D5DD] drop-shadow-lg rounded-3xl" />
            <Baca />
          </div>
        </div>
      </div>
      {/*top bar for quick access*/}
      <div className="topBar box-boder flex flex-row justify-between items-center py-2 px-5 gap-3 w-[352px] h-[84px] bg-[#FCFCFD] border-solid border-[#EAECF0] border-y-1 border-x-0 ">
        {/*Message button*/}
        <div className="message flex flex-col  bg-white items-center p-0 w-12 h-[68px]">
          <div className="buttonContainer flex flex-row items-start justify-center p-0 w-12 h-12 rounded-md">
            <button className="button flex flex-row justify-center items-center p-1.5 gap-1.5 w-12 h-12 bg-[#0E9384] border-[0.8px] border-solid boder-[#0E9384] shadow-md rounded">
              <Message />
            </button>
          </div>
          <p className="not-italic font-medium font-[Codec Pro] text-xs leading-5 flex items-center text-[#0E9384]">
            Message
          </p>
        </div>
        {/*Task button*/}
        <div className="flex flex-col items-center p-0 w-12 h-[68px] ">
          <div className="flex flex-row justify-center items-center p-[6.4px] gap-[6.4px]  w-12 h-12 bg-[#FFFFFF] border-[0.8px] border-solid border-[#D0D5DD] shadow-lg rounded">
            <button className="flex flex-row items-start p-[6.4px] gap-[6.4px] w-[38.4px] h-[38.4px]">
              <Task />
            </button>
          </div>
          <p className="w-[33px] h-5 font-[Codec Pro] not-italic font-medium text-xs leading-5 flex items-center text-[#98A2B3] ">
            Task
          </p>
        </div>
        {/*Bell button*/}
        <div className="flex flex-col items-center p-0 w-12 h-[68px] ">
          <div className="flex flex-row justify-center items-center p-[6.4px] gap-[6.4px]  w-12 h-12 bg-[#FFFFFF] border-[0.8px] border-solid border-[#D0D5DD] shadow-lg rounded">
            <button className="flex flex-row items-start p-[6.4px] gap-[6.4px] w-[38.4px] h-[38.4px]">
              <Bell />
            </button>
          </div>
          <p className="w-[33px] h-5 font-[Codec Pro] not-italic font-medium text-xs leading-5 flex items-center text-[#98A2B3] ">
            Bell
          </p>
        </div>
        {/*Poll button*/}
        <div className="flex flex-col items-center p-0 w-12 h-[68px] ">
          <div className="flex flex-row justify-center items-center p-[6.4px] gap-[6.4px]  w-12 h-12 bg-[#FFFFFF] border-[0.8px] border-solid border-[#D0D5DD] shadow-lg rounded">
            <button className="flex flex-row items-start p-[6.4px] gap-[6.4px] w-[38.4px] h-[38.4px]">
              <Poll />
            </button>
          </div>
          <p className="w-[33px] h-5 font-[Codec Pro] not-italic font-medium text-xs leading-5 flex items-center text-[#98A2B3] ">
            Poll
          </p>
        </div>
        {/*Attend button*/}
        <div className="flex flex-col items-center p-0 w-12 h-[68px] ">
          <div className="flex flex-row justify-center items-center p-[6.4px] gap-[6.4px]  w-12 h-12 bg-[#FFFFFF] border-[0.8px] border-solid border-[#D0D5DD] shadow-lg rounded">
            <button className="flex flex-row items-start p-[6.4px] gap-[6.4px] w-[38.4px] h-[38.4px]">
              <Attend />
            </button>
          </div>
          <p className="w-[33px] h-5 font-[Codec Pro] not-italic font-medium text-xs leading-5 flex items-center text-[#98A2B3] ">
            Attend
          </p>
        </div>
      </div>
      {/*Chatting box frame*/}
      <div className="section flex flex-col items-start p-0 gap-2 w-full h-full">
        {/*chat section and it should be dynamic*/}
        <div className="chattingFrame flex flex-col items-start p-0 w-full ">
          <div className="chatBox flex flex-col items-start gap-1 p-0 w-full h-[680px] overflow-y-scroll no-scrollbar">
            {chatData.map((data) => {
              return (
                <div
                  className="personalCard  flex flex-row items-center  gap-3 isolate w-full py-3 h-[72px] border-b relative bg-[#FFFFFF]"
                  key={data.id}
                >
                  <div className="personal  flex flex-row items-center p-0 gap-3 w-full h-12">
                    {/*user avatar*/}
                    <div className="profileAvatar box-border min-w-[48px] min-h-[48px] bg-[#6941C6] border border-solid border-[#EAECF0] rounded-full"></div>
                    {/*userName and other details*/}
                    <div className="personalInfo flex flex-col justify-center itsm-start p-0 gap-1 w-full h-12  ">
                      <p className="w-full h-5 not-italic font-medium text-sm leading-5 flex items-corner  text-[#1D2939] ">
                        {data.name}
                      </p>
                      {/*Text frame and last msg will show */}
                      <div className="textFrame flex flex-row items-center p-0 gap-1 w-full h-[18px] ">
                        <span className="  w-full h-[18px] not-italic font-normal text-xs leading-[18px] flex items-center text-[#667085]">
                          {data.msg}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="absolute w-[27px] h-[16px] right-0 top-2 not-italic font-normal text-[10px] leading-4 flex items-center text-[#667085]">
                    {data.time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/*UpuPerson Navigation*/}
        <div className="personNav flex flex-row items-end p-0 gap-3 w-[320px] h-14">
          {/*talent frame*/}
          <div className="talentFrame box-border flex flex-row justify-between items-center py-3 px-2 gap-4  w-[120px] h-14 bg-[#FFFFFF] border border-solid border-[#EAECF0] shadow-lg rounded">
            <div className="talent flex flex-row items-center p-0 gap-2  w-[103.17px] h-6">
              <Group className="w-6 h-6" />
              <Talent className="w-[71.17px] h-[14px]" />
            </div>
          </div>
          {/*leader frame*/}
          <div className="leaderFrame box-border flex flex-row justify-between items-center py-3 px-2 gap-4  w-[120px] h-14 bg-[#FFFFFF] border border-solid border-[#EAECF0] shadow-lg rounded">
            <div className="leader flex flex-row items-center p-0 gap-1  w-[94.5px] h-[22px]">
              <Leader className="w-6 h-[22px]" />
              <Point className="w-[66.5px] h-3.5" />
            </div>
          </div>
          {/*New Message section*/}
          <div className="newMessage flex flex-row justify-center items-center p-4 gap-2 w-14 h-14 bg-[#0E9384] rounded ">
            <NewMessage className="w-6 h-6" />
          </div>
        </div>
      </div>
    </button>
  </div>
      
    </>
  )
}

export default ExpandableChatBar
