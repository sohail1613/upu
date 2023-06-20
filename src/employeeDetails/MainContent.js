import React from "react";
import { ReactComponent as Upu } from "../logos/upu.io.svg";
import { ReactComponent as Turkish } from "../logos/turkish.svg";
import { ReactComponent as English } from "../logos/english.svg";

const MainContent = () => {
  return (
    <>
      {/*it hold languege changing blocks*/}
      <div className="mainFrame items-center flex flex-col px-0 pb-0 gap-16 relative w-[46%] h-[300px] left-[350px] top-[140px]">
        {/*content*/}
        <div className="contentFrame items-center flex flex-col pt-1 px-0 pb-0 gap-[3px] isolate w-full h-[80px]">
          {/*sub Header frame*/}
          <div className="subHeader w-[50%] h-[35%] top-0 flex flex-row justify-center left-10">
            {/*branc logo*/}
            <div className="brandLogo ">
              <Upu className="h-7 " />
            </div>
            <div className="header flex flex-row items-center">
              <p className="font-sans not-italic font-semibold flex items-center truncate leading-10 text-[#101828]">
                ’ya hoşgeldin.
              </p>
            </div>
          </div>

          <p className="w-full h-[50%] font-sans not-italic font-normal mt-1 text-xs text-center text-[#667085] opacity-70">
            Kaydınızı oluşturmanız ve upu’yu kullanabilmeniz için gerekli
            adımları tamamlamanız gerekmektedir. Adımları tamamlamak için
            “Başla” butonuna tıklayın.
          </p>
        </div>

        {/*language selector*/}
        <div className="langauge flex flex-row w-[300px] gap-1 h-12">
          {/*Turkish*/}
          <div className="turkish box-border gap-2 flex flex-row items-center py-4 px-6 w-[150px] h-full border-b border-b-[#EAECF0] border-solid">
            <div className="checkbox flex flex-row justify-center items-center p-0 w-5 h-5">
              <input
                type="checkBox"
                className="box-border w-5 h-5 bg-[#FFFFFF] border border-solid border-[#D0D5DD] rounded-lg"
              />
            </div>
            {/*Language flag*/}
            <Turkish className="h-8 w-8" />
            <span className="w-5 h-6  font-sans not-italic font-semibold text-base leading-6 text-[#101828] ">
              TR
            </span>
          </div>

          {/*English*/}
          <div className="turkish box-border gap-2 flex flex-row items-center py-4 px-6 w-[150px] h-full border-b border-b-[#EAECF0] border-solid">
            <div className="checkbox flex flex-row justify-center items-center p-0 w-5 h-5">
              <input
                type="checkBox"
                className="box-border w-5 h-5 bg-[#FFFFFF] border border-solid border-[#D0D5DD] rounded-lg"
              />
            </div>
            {/*Language flag*/}
            <English className="h-8 w-8" />
            <span className="w-5 h-6  font-sans not-italic font-semibold text-base leading-6 text-[#101828] ">
              EN
            </span>
          </div>
        </div>

        {/*button*/}
        <button className="box-border flex flex-row justify-center items-center py-4 px-7  gap-3 w-[310px] h-11 bg-[#7F56D9] border border-solid border-[#7F56D9] shadow-lg rounded-lg">
          <span className="w-10 h-6 font-sans not-italic font-medium text-lg leading-6 text-[#FFFFFF]">
            Save
          </span>
        </button>
      </div>
    </>
  );
};

export default MainContent;