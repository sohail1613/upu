import React from "react";
import { ReactComponent as Language } from "../logos/language.svg";

const Header = () => {
  return (
    <>
      <div className="headerFrame flex flex-row justify-between items-center py-2 px-8 absolute w-full h-[120px] ">
        <div className="header flex flex-row items-center p-0 gap-2 w-[85%] h-[104px] ml-[7%] ">
          {/*multiple language div*/}
          <div className="multiLingual flec flex-col items-center p-0 gap-3 h-full w-[20%]">
            {/*logo and text container*/}
            <div className="logoAndTextContainer flex flex-col justify-center items-center py-3 px-6 gap-2.5 w-full h-[88px]">
              <div className="content relative flex flex-row items-center p-0 gap-1 w-[99%] h-14">
                {/*icon*/}
                <div className="iconsFrame flex flex-row justify-center items-center p-0 gap-2.5 w-14 h-14">
                  <div className="languageIcon w-14 h-14 bg-[#7F56D9] border-8 border-solid border-[#6941C6] rounded-full">
                    <Language className="absolute w-7 h-7 left-3.5 top-3.5 " />
                  </div>
                </div>
                {/*personal info and action*/}
                <div className="personalInfoAndAction ml-2 flex flex-col items-start p-0 gap-1 w-[106px] h-12">
                  <span className="w-full h-[18px] font-sans not-italic font-normal text-xs leading-[18px] flex items-center text-[#667085]">
                    Admin 1/8
                  </span>
                  <h4 className="w-full h-[26px] font-sans not-italic font-medium text-base leading-6 flex - items-center text-[#1D2939] ">
                    Language
                  </h4>
                </div>
              </div>
            </div>
            {/*bottom thick line*/}
            <div className="bottomDivider flex flex-row justify-start items-center py-0 px-1 mt-3 gap-2.5 w-full h-1">
              <div className="horizontalLine flex flex-row items-center gap-2.5 w-[96%] ml-1 h-1  bg-[#6941C6]"></div>
            </div>
          </div>
          {/*rightSide line container*/}
          <div className="rightBorder h-[88px] w-0  border border-solid bor"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
