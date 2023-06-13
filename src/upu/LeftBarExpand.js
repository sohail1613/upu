import React, { useState } from "react";
import { ReactComponent as Logo } from "../logos/logoWithText.svg";
import { ReactComponent as LogoDesign } from "../logos/Logo.svg";
import { ReactComponent as Running } from "../logos/equipment.svg";
import { ReactComponent as People } from "../logos/personel.svg";
import { ReactComponent as SetUp } from "../logos/maintenance.svg";
import { ReactComponent as Time } from "../logos/unplannedLosses.svg";
import { ReactComponent as Link } from "../logos/shiftManagement.svg";
import { ReactComponent as Button } from "../logos/report.svg";
import { ReactComponent as Swap } from "../logos/swap.svg";
import { ReactComponent as Setting } from "../logos/setting.svg";
import { ReactComponent as Avatar } from "../logos/Avatar.svg";
import { ReactComponent as Expand } from "../logos/log-out.svg";

const LeftBarExpand = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
      className="h-full relative"
    >
      {expand ? (
        <>
          <div className="expandedForm absolute top-0 left-0 z-[9999] flex flex-col justify-between items-start w-[280px] h-[636px] bg-[#6941C6]">
            {/*navBar*/}
            <div className="navBar flex flex-col items-start w-[280px] h-[348px] gap-6 pt-8">
              {/*Logo with text*/}
              <div className="logo flex flex-col justify-center items-start px-6 w-[280px] h-8">
                <Logo className="w-[140px] h-8" />
              </div>

              {/*components navigation*/}
              <div className="nav flex flex-col items-start px-4 gap-1 w-[280px] h-[260px]">
                {/*Equipment*/}
                <div className="navItem flex flex-row items-start w-[248px] h-10">
                  <div className="navBase flex flex-row justify-between items-center py-2 px-3 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="content flex flex-row items-center p-0 gap-3 w-[127px] h-6">
                      <Running />
                      <span className="w-[91px] h-6 font-sans not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        Equipment
                      </span>
                    </div>
                  </div>
                </div>
                {/*Personal*/}
                <div className="navItem flex flex-row items-start w-[248px] h-10">
                  <div className="navBase flex flex-row justify-between items-center py-2 px-3 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="content flex flex-row items-center p-0 gap-3 w-[127px] h-6">
                      <People />
                      <span className="w-[91px] h-6 font-sans not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        Personal
                      </span>
                    </div>
                  </div>
                </div>
                {/*Maintenance*/}
                <div className="navItem flex flex-row items-start w-[248px] h-10">
                  <div className="navBase flex flex-row justify-between items-center py-2 px-3 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="content flex flex-row items-center p-0 gap-3 w-[127px] h-6">
                      <SetUp />
                      <span className="w-[99px] h-6 font-sans not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        Maintenance
                      </span>
                    </div>
                  </div>
                </div>
                {/*Unplanned Losses*/}
                <div className="navItem flex flex-row items-start w-[248px] h-10">
                  <div className="navBase flex flex-row justify-between items-center py-2 px-3 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="content flex flex-row items-center p-0 gap-3 w-[170px] h-6">
                      <Time />
                      <span className="w-[141px] h-6 font-sans not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        UnPlanned Losses
                      </span>
                    </div>
                  </div>
                </div>
                {/*Shift Management*/}
                <div className="navItem flex flex-row items-start w-[248px] h-10">
                  <div className="navBase flex flex-row justify-between items-center py-2 px-3 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="content flex flex-row items-center p-0 gap-3 absolute h-6">
                      <Link />
                      <span className="w-[141px] h-6 font-sans not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        Shift Management
                      </span>
                    </div>
                  </div>
                </div>
                {/*Reports*/}
                <div className="navItem flex flex-row items-start w-[248px] h-10">
                  <div className="navBase flex flex-row justify-between items-center py-2 px-3 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="content flex flex-row items-center p-0 gap-3 w-[127px] h-6">
                      <Button />
                      <span className="w-[91px] h-6 font-sans not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        Report
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Footer*/}
            <div className="footer flex flex-col items-start px-4 pb-8 w-[280px] h-[205px] justify-between">
              {/*Frames for settings*/}
              <div className="frame flex flex-col items-start gap-1 p-0 w-[248px] h-[84px]">
                <div className="companyNav flex flex-col items-start p-0 gap-1 w-[248px] h-10">
                  <div className="companyBase flex flex-row items-center py-2 px-3 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="companyContent flex flex-row items-center p-0 gap-3 w-[166px] h-6 ">
                      <Swap className="w-6 h-6" />
                      <span className="w-[130px] h-6 not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        Switch Company
                      </span>
                    </div>
                  </div>
                </div>
                {/*Setting*/}
                <div className="companyNav flex flex-col items-start p-0 gap-1 w-[248px] h-10">
                  <div className="companyBase flex flex-row items-center py-2 px-1 gap-[105px] w-[248px] h-10 bg-[#6941C6] rounded-md">
                    <div className="companyContent flex flex-row items-center p-0 gap-3 w-[166px] ">
                      <Setting />
                      <span className="w-[130px] h-6 not-italic font-medium text-base leading-6 text-[#F4EBFF]">
                        Settings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*Divider*/}
              <div className="divider bg-[#7F56D9] w-[248-px] h-[1px]"></div>

              {/*Account details*/}
              <div className="account flex flex-row justify-between items-center px-2 gap-[47px] w-[248px] h-10">
                {/*avatar lable and group*/}
                <div className="avatarAndName flex flex-row items-center p-0 gap-3 w-[191px] h-10">
                  <div className="avatar flex flex-col justify-center items-center p-0 w-10 h-10 rounded-[200px] ">
                    <Avatar />
                  </div>
                  <div className="Name flex flex-col items-start p-0 w-[139px] h-10 ">
                    <p className="userName w-[74px] h-5 not-italic leading-5 font-medium text-sm text-[#FFFFFF]">
                      Olivia Rhye
                    </p>
                    <p className="w-[139px] h-5 not-italic leading-5 font-normal text-sm text-[#E9D7FE]">
                      Baca Makina Pvt. Ltd.
                    </p>
                  </div>
                  {/*icon*/}
                  <div className="logOutIcon ">
                    <div className="iconsFeature w-9 h-9 pt-1 pl-1.5 bg-[#F4EBFF] border-[4px] border-solid border-[#F9F5FF] rounded-[28px]">
                      <Expand />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="sideBar flex flex-row justify-center items-start p-0 w-20 h-[636px] bg-[#6941C6]">
            <div className="content flex flex-col justify-between items-center p-0 w-20 h-full ">
              <div className="nav flex flex-col items-start pt-8 py-0 pb-0 gap-6 w-20 h-[472px]">
                <div className="header flex flex-col justify-center items-center py-0 px-[25px] w-20 h-8">
                  <LogoDesign />
                </div>
                <div className="navigation flex flex-col items-center py-0 px-4 gap-2 w-20 h-[392px]">
                  <div className="navItem flex flex-row items-start p-3 gap-[105px] w-12 h-12 bg-[#6941C6] rounded-md">
                    <Running />
                  </div>
                  <div className="navItem flex flex-row items-start p-3 gap-[105px] w-12 h-12 bg-[#6941C6] rounded-md">
                    <People />
                  </div>
                  <div className="navItem flex flex-row items-start p-3 gap-[105px] w-12 h-12 bg-[#6941C6] rounded-md">
                    <SetUp />
                  </div>
                  <div className="navItem flex flex-row items-start p-3 gap-[105px] w-12 h-12 bg-[#6941C6] rounded-md">
                    <Time />
                  </div>
                  <div className="navItem flex flex-row items-start p-3 gap-[105px] w-12 h-12 bg-[#6941C6] rounded-md">
                    <Link />
                  </div>
                  <div className="navItem flex flex-row items-start p-3 gap-[105px] w-12 h-12 bg-[#6941C6] rounded-md">
                    <Button />
                  </div>
                </div>
              </div>
              <div className="footer flex flex-col items-col pt-0 px-4 pb-6 gap-6 w-20 h-[150px]">
                <div className="settingNavigation flex flex-col items-center p-0 gap-2 w-12 h-12 ">
                  <div className="settingButton flex flex-row items-start gap-[105px] w-12 h-12 bg-[#6941C6] rounded-md">
                    <Setting />
                  </div>
                </div>
                <div className="avatar flex flex-col justify-center items-center p-0 w-12 h-12 bg-[#C7B9DA] rounded-full">
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeftBarExpand;
