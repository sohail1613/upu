import React, { useEffect, useState } from "react";
import { ReactComponent as AddIcon } from "../logos/addIcon.svg";
import { ReactComponent as Baca } from "../logos/bacaLogo2.svg";
import DepartmentModal from "./DepartmentModal";
import DepartmentalPersonalTable from "./DepartmentalPersonalTable";
import { useNavigate } from "react-router-dom";

const DepartmenForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasCardData, setHasCardData] = useState(false);
  const [department, setDepartment] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [searchCard, setSearchCard] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [modalValue, setModalValue] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setModalValue(department.value);
    setSelectedDepartment(department);
  };

  useEffect(() => {
    const storedDepartments = localStorage.getItem("departments");
    if (storedDepartments) {
      const parsedDepartments = JSON.parse(storedDepartments);
      if (parsedDepartments?.length > 0) {
        setHasCardData(true);
      }
      setDepartment(parsedDepartments);
      updateCards(parsedDepartments);
    }
  }, []);

  //navigating to the components with respect to clicks
  const navigate = useNavigate();
  const navigateToPersons = () => {
    navigate("/persons");
  };
  const navigateToLanguage = () => {
    navigate("/detail");
  };

  const getData = () => {
    const storedDepartments = localStorage.getItem("departments");

    if (storedDepartments) {
      const parsedDepartments = JSON.parse(storedDepartments);
      setDepartment(parsedDepartments);
      updateCards(parsedDepartments);
    }
  };

  const handleDeleteCard = (cardId) => {
    const updatedDepartments = department.filter((item) => item.id !== cardId);

    setDepartment(updatedDepartments);
    setCardCount(updatedDepartments.length);
    localStorage.setItem("departments", JSON.stringify(updatedDepartments));
    updateCards(updatedDepartments);
  };

  const updateCards = (updatedDepartments) => {
    const filterCards = updatedDepartments.filter((item) =>
      item.value.toLowerCase().includes(searchCard.toLowerCase())
    );

    setDepartment(updatedDepartments);
    setFilteredCards(filterCards);
    setCardCount(filterCards.length);
  };

  const handleModalOpen = (item, index) => {
    console.log("index:", index);
    console.log("items : ", item);
     
    const selectedDept = index !== undefined ? department[index] : null;
    setSelectedDepartment(selectedDept);
    setIsModalOpen(!isModalOpen);
    setModalValue(selectedDept ? selectedDept.value : "");
    const userInput = document.getElementById("departments")?.value;
    const storedDepartments = localStorage.getItem("departments");
    const parsedDepartments = JSON.parse(storedDepartments);
    const updatedDepartments = [...parsedDepartments || []];

    if (userInput.trim() === "") {
      return; // Skip adding empty card
    }

    if (index !== undefined) {
    // if (index !== undefined && updatedDepartments[index]) {
      //update existing department
      // updatedDepartments[index].value = userInput;
    } else {
      //add new department
      const newDepartment = {
        id: cardCount + 1,
        value: userInput,
      };
      updatedDepartments.push(newDepartment);
      // setHasCardData(true);
      setCardCount(cardCount + 1);
      //updateCards(updatedDepartments);
    }
    // localStorage.setItem("departments", JSON.stringify(updatedDepartments));
    // // console.log("updatedCards: ", updatedDepartments);
    // // setDepartment(updatedDepartments);
    // updateCards(updatedDepartments);
  };


  useEffect(() => {
    getData();
  }, [searchCard]);

  return (
    <>
      {department.length > 0 ? (
        <DepartmentalPersonalTable
          searchCard={searchCard}
          setSearchCard={setSearchCard}
          filteredCards={filteredCards}
          handleModalOpen={handleModalOpen}
          handleOpenModal={handleOpenModal}
          handleDeleteCard={handleDeleteCard}
          navigateToLanguage={navigateToLanguage}
          navigateToPersons={navigateToPersons}
          isModalOpen={isModalOpen}
          modalValue={modalValue}
          setModalValue={setModalValue}
          selectedDepartment={selectedDepartment}
          getData={getData}
          cardCount={cardCount}
          setCardCount={setCardCount}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <>
          <div className="mainFrame flex flex-col items-center m-[480px] mt-[350px] gap-6 absolute w-[700px] h-[200px]">
            {/*content*/}
            <div className="content flex flex-col items-center p-0 gap-3 w-full h-[110px]">
              <span className="font-sans not-italic font-semibold text-3xl leading-9 text-center text-[#101828] w-auto h-[38px]">
                Departman Ekle
              </span>
              <p className="w-auto h-[56px] font-sans not-italic font-normal text-sm leading-7 text-center text-[#667085] opacity-70">
                Firmanızda çalışan personelleri eklemeden önce; muhasebe, insan
                kaynakları, üretim gibi departmanları oluşturarak yönetim
                kolaylığı sağlayabilirsiniz.
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
        </>
      )}

      {/*if value is true and has card data, show table component, else show current component*/}
      {isModalOpen && (
        <DepartmentModal
          getData={getData}
          handleModalOpen={handleModalOpen}
          handleOpenModal={handleOpenModal}
        />
      )}
    </>
  );
};

export default DepartmenForm;