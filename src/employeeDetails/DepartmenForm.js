import React, { useEffect, useState } from "react";
import { ReactComponent as AddIcon } from "../logos/addIcon.svg";
import { ReactComponent as Baca } from "../logos/bacaLogo2.svg";
import DepartmentModal from "./DepartmentModal";
import DepartmentalPersonalTable from "./DepartmentalPersonalTable";

const DepartmenForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasCardData, setHasCardData] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const storedDepartments = localStorage.getItem("departments");
    if (storedDepartments) {
      const parsedDepartments = JSON.parse(storedDepartments);
      if (parsedDepartments.length > 0) {
        setHasCardData(true);
      }
    }
  }, []);

  return (
    <>
      <div className="mainFrame flex flex-col items-center p-0 gap-6 absolute left-[300px] top-[200px] w-[672px] h-[170px]">
        {/*content*/}
        <div className="content flex flex-col items-center p-0 gap-3 w-full h-[110px]">
          <span className="font-sans not-italic font-semibold text-3xl leading-9 text-center text-[#101828] w-auto h-[38px]">
            Departman Ekle
          </span>
          <p className="w-auto h-[56px] font-sans not-italic font-normal text-sm leading-7 text-center text-[#667085] opacity-70">
            Firmanızda çalışan personelleri eklemeden önce; muhasebe, insan
            kaynakları, üretim gibi departmanları oluşturarak yönetim kolaylığı
            sağlayabilirsiniz.
          </p>
        </div>
        {/*button*/}
        <button
          onClick={handleOpenModal}
          className="buttonFrame box-border flex flex-row justify-center items-center py-1 px-5 gap-2 w-[300px] h-12 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-md"
        >
          <AddIcon className="w-4 h-4" />
          <p className="w-8 h-5 font-sans not-italic font-medium items-center text-lg leading-5 text-[#344054]">
            Ekle
          </p>
        </button>
      </div>
      {/*BACA logo in footer*/}
      <button>
        <Baca className="logoFrame box-border absolute w-[100px] h-[70px] right-11 bottom-11 bg-[#FFFFFF] backdrop-blur-lg rounded-md " />
      </button>

      {/*if value is true and has card data, show table component, else show current component*/}
      {isModalOpen ? (
        <DepartmentModal />
      ) : hasCardData ? (
        <DepartmentalPersonalTable />
      ) : null}
    </>
  );
};

export default DepartmenForm;
