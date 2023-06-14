import React, { useState } from "react";

const EditMachineCard = ({ puantaj, nodeId, serilaNo, maxPersonel }) => {
  return (
    <>
      {/*main machine card edittor*/}
      <div className="editForm flex flex-row items-start p-0 w-full h-[144px]">
        <div className="rectangle w-1.5 h-full bg-[#EAECF0] "></div>

        {/*edit form */}
        <div className="form flex flex-col items-end w-full p-0 h-[164px] ">
          {/*key 1*/}
          <div className="editcard flex flex-row items-start p-0 w-full h-9 ">
            {/*title or key*/}
            <div className="titleCol box-border flex  flex-col justify-center items-start py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0] ">
              <p className="w-full h-full font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#667085]">
                Pantaj
              </p>
            </div>
            {/*table value*/}
            <div className="valueCol box-border flex flex-row items-center py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0]">
              <p className="w-full h-5 font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#101828]">
                {puantaj}
              </p>
            </div>
          </div>

          {/*key 2*/}
          <div className="editcard flex flex-row items-start p-0 w-full h-9 ">
            {/*title or key*/}
            <div className="titleCol box-border flex  flex-col justify-center items-start py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0] ">
              <p className="w-full h-full font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#667085]">
                Node Id
              </p>
            </div>
            {/*table value*/}
            <div className="valueCol box-border flex flex-row items-center py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0]">
              <p className="w-full h-5 font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#101828]">
                {nodeId}
              </p>
            </div>
          </div>

          {/*key 3*/}
          <div className="editcard flex flex-row items-start p-0 w-full h-9 ">
            {/*title or key*/}
            <div className="titleCol box-border flex  flex-col justify-center items-start py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0] ">
              <p className="w-full h-full font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#667085]">
                Serial Number
              </p>
            </div>
            {/*table value*/}
            <div className="valueCol box-border flex flex-row items-center py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0]">
              <p className="w-full h-5 font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#101828]">
                {serilaNo}
              </p>
            </div>
          </div>

          {/*key 4*/}
          <div className="editcard flex flex-row items-start p-0 w-full h-9 ">
            {/*title or key*/}
            <div className="titleCol box-border flex  flex-col justify-center items-start py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0] ">
              <p className="w-full h-full font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#667085]">
                Max Personel
              </p>
            </div>
            {/*table value*/}
            <div className="valueCol box-border flex flex-row items-center py-2 px-4 w-[50%] h-9 bg-[#FFFFFF] border border-solid border-[#EAECF0]">
              <p className="w-full h-5 font-sans not-italic font-normal text-xs leading-5 flex items-center capitalize text-[#101828]">
                {maxPersonel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMachineCard;
