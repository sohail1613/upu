import React, { useEffect, useState } from "react";
import { ReactComponent as Language } from "../logos/language.svg";
import { ReactComponent as Factory } from "../logos/blueFactory.svg";
import { ReactComponent as Department } from "../logos/department.svg";
import { ReactComponent as Persons } from "../logos/groupr.svg";
import { ReactComponent as InteriorOperation } from "../logos/VectorLogo.svg";
import { ReactComponent as ExternalOperation } from "../logos/external _operations.svg";
import { ReactComponent as Equipment } from "../logos/valve.svg";
import { ReactComponent as Shift } from "../logos/calender.svg";
import { NavLink, useLocation } from "react-router-dom";

const Header = ({path}) => {
  const location = useLocation()
  const [activeButton, setActiveButton] = useState('Language');

  const isActiveButton = (buttonPath) => {
    return location.pathname === buttonPath;
  };
  
  useEffect(() => {
    setActiveButton(buttons.find((button) => isActiveButton(button.path)).name);
  }, [location]);

  //all header buttons
  const buttons = [
    { name: "Language", logo: <Language />, text: "Step 1/8",path:"/" },
    { name: "Factory", logo: <Factory />, text: "Step 2/8", path:"/detail" },
    { name: "Department", logo: <Department />, text: "Step 3/8", path:"/department" },
    { name: "Persons", logo: <Persons />, text: "Step 4/8", path:"/person" },
    { name: "Interior", logo: <InteriorOperation />, text: "Step 5/8", path:"/interior" },
    { name: "External", logo: <ExternalOperation />, text: "Step 6/8", path:"/exterior" },
    { name: "Equipment", logo: <Equipment />, text: "Step 7/8", path:"/equipment" },
    { name: "Shift", logo: <Shift />, text: "Step 8/8", path:"/shift" },
  ];

  console.log(location)


  return (
    <>
      <div className="headerFrame flex flex-row justify-between items-center py-2 mt-2 px-8 absolute w-full h-[70px]">
        <div className="header flex flex-row items-center justify-center p-0 gap-2 w-[85%] h-[65px] ml-[7%]">
          {/*multiple button components*/}
          {buttons.map((item, index) => {
            if (activeButton === item.name) {
              return (
                <>
                  <div
                    key={index}
                    className="multiLingual flec flex-col items-center p-0 gap-3 h-fullw-[20%]"
                  >
                    {/*logo and text container*/}
                    <div className="logoAndTextContainer flex flex-col justify-center items-center py-3 px-6 gap-2.5 w-full h-[50px]">
                      <div className="content relative flex flex-row items-center p-0 gap-1 w-[99%] h-12">
                        {/*icon*/}
                        <button className="iconsFrame flex flex-row justify-center items-center p-0 gap-2.5 w-12 h-12">
                          <div className="languageIcon w-12 h-12 bg-[#7F56D9] flex items-center justify-center border-8 border-solid border-[#6941C6] rounded-full">
                            <div className="color text-white">{item.logo}</div>
                          </div>
                        </button>
                        {/*personal info and action*/}
                        <div className="personalInfoAndAction ml-2 flex flex-col items-start p-0 gap-1 w-[106px] h-12">
                          <span className="w-full h-[18px] font-sans not-italic font-normal text-xs leading-[18px] flex items-center text-[#667085]">
                            {item.text}
                          </span>
                          <h4 className="w-full h-[26px] font-sans not-italic font-medium text-base leading-6 flex - items-center text-[#1D2939] ">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/*bottom thick line*/}
                    <div className="bottomDivider flex flex-row justify-start items-center py-0 px-1 mt-3 gap-2.5 w-full h-1">
                      <div className="horizontalLine flex flex-row items-center gap-2.5 w-[96%] ml-1 h-1  bg-[#6941C6]"></div>
                    </div>
                  </div>

                  <div className="rightBorder h-[60px] w-0  border border-solid"></div>
                </>
              );
            } else {
              return (
                <>
                  <NavLink
                  key={index}
                  to={item.path}
                    onClick={() => setActiveButton(item.name)}
                    className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full"
                  >
                    <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
                      <div className="iconFeature flex items-center justify-center relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                        <div className="color text-[#7F56D9]">{item.logo}</div>
                      </div>
                    </button>

                    {/*bottom line*/}
                    <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
                      <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
                    </div>
                  </NavLink>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
