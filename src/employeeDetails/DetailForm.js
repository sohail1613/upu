import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ReactComponent as ImageIcon } from "../logos/imageIcon.svg";

const DetailForm = () => {
  return (
    <>
      <div className="mainFrame absolute flex flex-col items-center p-0 gap-2 w-[850px] h-[450px] left-[215px] top-[90px]">
        {/*Form name*/}
        <span className="font-sans not-italic font-semibold text-xl leading-9 flex items-center justify-center text-center text-[#101828] w-[280px] h-7">
          Firma Oluştur
        </span>

        {/*Form content: details asking from users to enter*/}
        <div className="formContents flex flex-row justify-center items-end p-0 gap-5  w-full h-[400px]">
          {/*input areas*/}
          <div className="inputAreas flex flex-col items-start p-0 gap-2 w-[250px] h-full">
            {/*Logo Section*/}
            <div className="logoFrame relative flex flex-row items-center p-0 gap-2 w-full h-[72px]">
              {/*logo icon*/}
              <div className="logo relative w-12 h-12 bg-[#F4EBFF] rounded ">
                <ImageIcon className="m-2.5" width={28} height={28} />
              </div>
              {/*other details */}
              <div className="text flex flex-col justify-center items-start p-0 gap-2 w-[195px] h-[52px]">
                <span className="fonst-sans not-italic font-medium text-base leading-6 flex items-center text-[#101828] w-full h-6">
                  Firma Logosu
                </span>
                <span className="font-sans font-normal not-italic text-sm leading-5 flex items-center underline text-[#667085] w-full h-5">
                  Resmi yüklemek için tıklayın
                </span>
              </div>
            </div>

            {/*inputs*/}
            <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
              <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                Firma Adi
              </span>
              <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                  <input
                    type="text"
                    placeholder="Baca"
                    className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
              <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                Firma Adresi
              </span>
              <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                  <input
                    type="text"
                    placeholder="Ankara, Turkey"
                    className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
              <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                Firma E-mail
              </span>
              <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                  <input
                    type="text"
                    placeholder="baca@upu.io"
                    className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
              <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                Firma ilestsim No.
              </span>
              <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                  <input
                    type="text"
                    placeholder="12345ABCD0987"
                    className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
              <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                Mali Yıl Başlangıç ve Bitiş Tarihi
              </span>
              <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                  <input
                    type="text"
                    placeholder="7235"
                    className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*input another details*/}
          <div className="anotherInputs flex flex-row items-start pt-1 px-0 pb-0 gap-4 w-[550px] h-[300px]">
            {/*column first*/}
            <div className="firstCol flex flex-col items-start p-o gap-2 w-[270px] h-full">
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Yetkili Adı
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Yetkili E-mail
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="abcd@gmail.com"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Yetkili İletişim No.
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="1245ABCD098"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Vergi Dairesi
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="Vergi"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Vergi No
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="12345"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*second first*/}
            <div className="firstCol flex flex-col items-start p-o gap-2 w-[270px] h-full">
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Status
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="status"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Country
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="Choose country"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Zaman Dilimi
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="Zamana"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="inputs flex flex-col items-start p-0  w-full h-[52px]">
                <span className="w-auto h-5 font-sans not-italic font-medium text-sm leading-5 text-[#344054]">
                  Ekipman Kredisi
                </span>
                <div className="box-border flex flex-row items-center py-0 px-3 w-full h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg">
                  <div className="inputContent flex flex-row items-center p-0 w-full h-6">
                    <input
                      type="text"
                      placeholder="Equipments"
                      className="w-full h-6 font-sans not-italic font-normal text-base leading-6 text-[#667085] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*buttons*/}
        <div className="buttons flex flex-row items-start p-0 gap-2 justify-between w-full h-8">
          <button className="former box-border flex flex-row justify-center items-center  w-[50%] h-8 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-md">
            Former
          </button>
          <button className="former box-border flex flex-row justify-center items-center w-[50%] h-8 bg-[#7F56D9] border border-solid border-[#7F56D9] shadow-lg rounded-md">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailForm;
