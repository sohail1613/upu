import React from "react";
import { ReactComponent as Cross } from "../logos/crossIcon.svg";

const DepartmentModal = () => {
  return (
    <>
      <div className="modalFrame box-border flex flex-col items-start py-6  px-8 gap-8 relative w-[801px] h-[274px] bg-[#FFFFFF] border border-solid border-[#EAECF0] shadow-lg  rounded-2xl">
        {/*modal title*/}
        <div className="modalTitle  flex flex-col items-start p-0 gap-8 w-full h-11">
          <div className="header flex flex-row justify-between items-center pl-6 py-0 pr-0 w-full h-full">
            <div className="content flex flex-row items-center p-0 gap-16 w-[80%] h-full">
              <p className="w-full h-7 font-sans not-italic font-semibold text-2xl leading-7 flex items-center text-[#101828]">
                Yeni Departman Ekle
              </p>
            </div>

            {/*close icon*/}
            <div className="closeIconFrame flex flex-row justify-center items-center p-2.5 w-11 h-11 rounded-lg">
              <Cross />
            </div>
          </div>
        </div>
        {/*Field title*/}
        <div className="inputFrame flex flex-col items-start p-0 w-[50%] h-[70px]">
          <div className="inputAndLabel flex flex-col items-start p-0 gap-1.5  w-full h-full">
            {/*label*/}
            <div className="lable w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
              Department
            </div>
            {/*input*/}
            <div className="inputFrame box-border flex flex-row items-center py-2.5 px-3.5 gap-2 w-full h-11 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
              <div className="content flex flex-row items-center p-0 gap-2 w-full h-6">
                <input
                  placeholder="Damacana Yönetimi"
                  className="w-full h-full font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/*buttons*/}
        <div className="buttonFrame flex flex-row justify-end items-start p-0 gap-[1px] w-full h-12">
            <div className="buttonHolder flex flex-row justify-end p-0 gap-4 w-[320px] h-full">
                <button className="button1 flex flex-row justify-center items-center py-3 px-  gap-2 w-[152px] h-full bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                    <p className="w-[57px] h-6 font-sans hover:text-red-500 not-italic font-medium text-base leading-6 text-[#344054]">
                        Cancel
                    </p>
                </button>

                <button className="button2 flex flex-row justify-center items-center py-3 px-  gap-2 w-[152px] h-full bg-[#7F56D9] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                    <p className="w-[57px] h-6 font-sans not-italic font-medium text-base leading-6 text-[#344054]">
                        Save
                    </p>
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentModal;
