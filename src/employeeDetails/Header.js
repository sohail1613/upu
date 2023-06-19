import React from "react";
import { ReactComponent as Language } from "../logos/language.svg";
import { ReactComponent as Factory } from "../logos/blueFactory.svg";
import { ReactComponent as Department } from "../logos/department.svg";
import { ReactComponent as Persons } from "../logos/groupr.svg";
import { ReactComponent as InteriorOperataion } from "../logos/Vector.svg";
import { ReactComponent as ExternalOperation } from "../logos/external _operations.svg";
import { ReactComponent as Equipment } from "../logos/valve.svg";
import { ReactComponent as Shift } from "../logos/calender.svg";

const Header = () => {


  return (
    <>
      <div className="headerFrame flex flex-row justify-between items-center py-2 mt-2 px-8 absolute w-full h-[70px] ">
        <div className="header flex flex-row items-center justify-center p-0 gap-2 w-[85%] h-[65px] ml-[7%]">
          {/*multiple language div*/}
          <div className="multiLingual flec flex-col items-center p-0 gap-3 h-fullw-[20%]">
            {/*logo and text container*/}
            <div className="logoAndTextContainer flex flex-col justify-center items-center py-3 px-6 gap-2.5 w-full h-[50px]">
              <div className="content relative flex flex-row items-center p-0 gap-1 w-[99%] h-12">
                {/*icon*/}
                <button className="iconsFrame flex flex-row justify-center items-center p-0 gap-2.5 w-12 h-12">
                  <div className="languageIcon w-12 h-12 bg-[#7F56D9] border-8 border-solid border-[#6941C6] rounded-full">
                    <Language className="absolute w-5 h-5 left-3.5 top-3.5 " />
                  </div>
                </button>
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
          <div className="rightBorder h-[60px] w-0  border border-solid"></div>

          {/*factory icon frame*/}
          <div className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full">
            <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
              <div className="iconFeature relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                <Factory className="absolute w-5 h-5  left-1.5 top-1 text-[#6c56a0]" />
              </div>
            </button>

            {/*bottom line*/}
            <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
              <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
            </div>
          </div>
          {/*right handside line*/}
          <div className="rightBorder w-0 h-[60px] border border-solid border-[#EAECF0]"></div>

          {/*Department*/}
          <div className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full">
            <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
              <div className="iconFeature relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                <Department className="absolute w-5 h-5  left-1.5 top-1" />
              </div>
            </button>

            {/*bottom line*/}
            <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
              <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
            </div>
          </div>
          {/*right handside line*/}
          <div className="rightBorder w-0 h-[60px] border border-solid border-[#EAECF0]"></div>

          {/*Personal*/}
          <div className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full">
            <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
              <div className="iconFeature relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                <Persons className="absolute w-5 h-5  left-1.5 top-1" />
              </div>
            </button>

            {/*bottom line*/}
            <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
              <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
            </div>
          </div>
          {/*right handside line*/}
          <div className="rightBorder w-0 h-[60px] border border-solid border-[#EAECF0]"></div>

          {/*Interior operation*/}
          <div className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full">
            <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
              <div className="iconFeature relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                <InteriorOperataion className="absolute w-5 h-5  left-1.5 top-1.5" />
              </div>
            </button>

            {/*bottom line*/}
            <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
              <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
            </div>
          </div>
          {/*right handside line*/}
          <div className="rightBorder w-0 h-[60px] border border-solid border-[#EAECF0]"></div>

          {/*External operation*/}
          <div className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full">
            <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
              <div className="iconFeature relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                <ExternalOperation className="absolute w-5 h-5  left-1.5 top-1.5" />
              </div>
            </button>

            {/*bottom line*/}
            <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
              <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
            </div>
          </div>
          {/*right handside line*/}
          <div className="rightBorder w-0 h-[60px] border border-solid border-[#EAECF0]"></div>

          {/*Equipment*/}
          <div className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full">
            <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
              <div className="iconFeature relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                <Equipment className="absolute w-5 h-5  left-1.5 top-1" />
              </div>
            </button>

            {/*bottom line*/}
            <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
              <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
            </div>
          </div>
          {/*right handside line*/}
          <div className="rightBorder w-0 h-[60px] border border-solid border-[#EAECF0]"></div>

          {/*Shift*/}
          <div className="factoryFrame flex flex-col items-start p-0 gap-3 w-[8%] h-full">
            <button className="iconFrame flex flex-col justify-center items-center gap-2.5 w-full h-[50px]">
              <div className="iconFeature relative w-12 h-12 bg-[#F4EBFF] border-8 border-solid border-[#F9F5FF] rounded-full">
                <Shift className="absolute w-5 h-5  left-1.5 top-1" />
              </div>
            </button>

            {/*bottom line*/}
            <div className="bottomLineFrame flex flex-row justify-center items-center py-0 px-1 gap-2.5 w-full h-1">
              <div className="bottomLine flex flex-row items-start w-[96%] h-1 bg-[#EAECF0]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
