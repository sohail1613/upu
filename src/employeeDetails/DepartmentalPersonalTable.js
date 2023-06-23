import React, { useEffect, useState } from "react";
import { ReactComponent as Search } from "../logos/search.svg";
import { ReactComponent as Edit } from "../logos/edit.svg";
import { ReactComponent as Delete } from "../logos/delete.svg";
import { ReactComponent as AddIcon } from "../logos/addIcon.svg";
import DepartmentModal from "./DepartmentModal";
import { useNavigate } from "react-router-dom";

const DepartmentalPersonalTable = () => {
  const [department, setDepartment] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchCard, setSearchCard] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [modalValue, setModalValue] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState([]);

  //navigating to the components with respect to clicks
  const navigate = useNavigate();
  const navigateToPersons = () => {
    navigate("/persons");
  };
  const navigateToLanguage = () => {
    navigate("/detail");
  };

  const handleDeleteCard = (cardId) => {
    console.log(cardId, department);

    const updatedDepartments = department.filter((item) => item.id !== cardId);
    console.log(updatedDepartments);
    setDepartment(updatedDepartments);
    setCardCount(updatedDepartments.length);
    localStorage.setItem("departments", JSON.stringify(updatedDepartments));
    updateCards(updatedDepartments);
    // const updateDepartments = [...department];
    // updateDepartments.splice(index, 1);
    // setDepartment(updateDepartments);
    // setCardCount(updateDepartments.length);
    // localStorage.setItem("departments", JSON.stringify(updateDepartments));
  };

  const updateCards = (updatedDepartments) => {
    const filterCards = updatedDepartments.filter((item) =>
      item.value.toLowerCase().includes(searchCard.toLowerCase())
    );

    setDepartment(updatedDepartments);
    setFilteredCards(filterCards);
    setCardCount(filterCards.length);
  };

  const handleModalOpen = (index) => {
    const selectedDept = index !== undefined ? department[index] : null;
    setSelectedDepartment(selectedDept);
    setIsModalOpen(!isModalOpen);
    const userInput = document.getElementById("departments")?.value;
    const storedDepartments = localStorage.getItem("departments");
    const parsedDepartments = JSON.parse(storedDepartments);
    const updatedDepartments = [...parsedDepartments];
    // updatedDepartments[index].value = userInput;

    if (index !== undefined) {
      //update existing department
      //   updatedDepartments[index].value = userInput;
    } else {
      //add new department
      const newDepartment = {
        id: cardCount + 1,
        value: userInput,
      };
      updatedDepartments.push(newDepartment);
      setCardCount(cardCount + 1);
      //   updateCards(updatedDepartments);
    }
    localStorage.setItem("departments", JSON.stringify(updatedDepartments));

    updateCards(updatedDepartments);
  };

  useEffect(() => {
    const storedDepartments = localStorage.getItem("departments");
    if (storedDepartments) {
      const parsedDepartments = JSON.parse(storedDepartments);
      setDepartment(parsedDepartments);
      updateCards(parsedDepartments);
    }
  }, [searchCard]);

  //   in case of zero cards it will close form
  //   if (cardCount === 0) {
  //     return null;
  //   }

  return (
    <>
      <div className="tableFrame flex flex-col items-end p-0 gap-3 w-[736px] h-[418px] top-[102px] left-[270px] absolute">
        {/*table title and cards frame*/}
        <div className="tableAndCards box-border flex-col items-start p-0 w-full h-[90%] bg-[#FFFFFF] border border-solid border-[#EAECF0] shadow-lg rounded-lg">
          {/*Table title*/}
          <div className="tableTitle flex flex-col items-start p-0 w-full h-[13%] bg-[#FFFFFF] self-stretch">
            <div className="content flex flex-row items-start py-0 px-8 gap-4 w-full h-full">
              <div className="textAndCounter flex flex-col justify-center items-start p-0 gap-1 w-full h-full grow">
                <div className="textContainer flex flex-row justify-between items-center p-0 gap-1 w-full h-[99%] self-stretch">
                  {/*Text*/}
                  <p className="min-w-[70%] h-7 font-sans not-italic font-semibold text-xl leading-7 flex items-center text-[#101828] rounded-md">
                    Department
                  </p>
                  {/*card counter*/}
                  <div className="counterFrame flex flex-row items-start p-0 min-w-[20%] h-8 mix-blend-multiply">
                    <div className="counter flex flex-row justify-center items-center py-1.5 px-3 w-full h-full bg-[#F9F5FF] rounded-3xl">
                      <p className="w-full h-5 font-sans not-italic font-medium text-sm leading-5 text-center text-[#6941C6]">
                        {`${cardCount} operations`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*divider*/}
          <div className="divider w-full h-1 bg-[#EAECF0]"></div>
          {/*cardsFrame*/}
          <div className="cardHolder flex flex-col items-start py-1 px-10 gap-2 w-full h-[75%]">
            {/*search card*/}
            <div className="search flex flex-col items-start p-0 gap-2 w-full h-7">
              <div className="input box-border flex flex-row justify-center items-center py-2.5 px-3.5 gap-2 w-full h-full bg-[#FFFFFF] border border-solid border-[#D0D5DD] rounded-lg self-stretch grow-0">
                <div className="content flex flex-row items-center p-0 gap-2 w-full h-6">
                  <button>
                    <Search className="w-4 h-4" />
                  </button>

                  <input
                    id="departments"
                    type="text"
                    value={searchCard}
                    onChange={(e) => setSearchCard(e.target.value)}
                    placeholder="search"
                    className="w-full h-6 outline-none font-sans not-italic font-normal text-sm leading-6 text-[#667085]"
                  ></input>
                </div>
              </div>
            </div>
            {/*main card conatiner*/}
            <div className="cardContainer box-border flex flex-col items-center p-0 gap-3 w-full h-full overflow-y-scroll no-scrollbar ">
              {/*card and mapping on it*/}

              {filteredCards.map((item, index) => {
                console.log("filteredcard", item);
                return (
                  <div
                    key={index}
                    className="card box-border flex flex-row justify-between hover:bg-gray-200 items-center py-4 pl-6 pr-4 gap-[21px] w-full h-16 bg-[#FFFFFF] border border-solid border-[#EAECF0] shadow-md rounded-lg self-stretch grow-0"
                  >
                    {/*department name*/}
                    <div className="departmentName flex flex-row items-center p-0 gap-3 w-[300px] h-6">
                      <div className="department flex flex-col justify-center items-start p-0 gap-2 w-full h-full">
                        <p className="w-full h-full font-sans not-italic font-medium text-sm leading-5 flex items-center text-[#1D2939]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    {/*modification icons*/}
                    <div className="modification flex flex-row items-start p-0 gap-2 w-[72px] h-8">
                      <button
                        onClick={() => {
                          handleModalOpen(index);
                        }}
                        className="editIcon flex justify-center text-[#7F56D9] items-center w-8 h-8 bg-[#F4EBFF] rounded "
                      >
                        <Edit />
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteCard(item.id);
                        }}
                        className="editIcon flex justify-center text-red-600 items-center w-8 h-8 bg-[#FEE4E2] rounded "
                      >
                        <Delete />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*card add button*/}
          <div className="addCard justify-center items-center flex w-full h-[40px] pb-1">
            <button
              onClick={handleModalOpen}
              className="button flex flex-row hover:bg-[#7F56D9] justify-center items-center gap-1 w-[90%] h-full bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg self-stretch"
            >
              <AddIcon className="w-3 h-4 text-[#344054]" />
              <p className="w-8 h-6 font-sans not-italic font-medium  text-base leading-6 text-[#344054]">
                Ekle
              </p>
            </button>
          </div>
        </div>
        {/*buttons frame*/}
        <div className="buttonsFrame flex flex-row items-start p-0 gap-3 w-full h-[10%] ">
          <button
            onClick={navigateToLanguage}
            className="button1 box-border flex flex-row justify-center items-center py-3 px-5 gap-2 w-[49%] h-full bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded-lg "
          >
            <p className="w-14 h6 font-sans not-italic font-medium text-base leading-6 text-[#344054]">
              Back
            </p>
          </button>

          <button
            onClick={navigateToPersons}
            className="button1 box-border flex flex-row justify-center items-center py-3 px-5 gap-2 w-[49%] h-full bg-[#7F56D9] border border-solid border-[#D0D5DD] shadow-lg rounded-lg "
          >
            <p className="w-14 h6 font-sans not-italic font-medium text-base leading-6 text-[#FFFFFF]">
              Forward
            </p>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <DepartmentModal
          closeModal={handleModalOpen}
          modalValue={modalValue}
          setModalValue={setModalValue}
          selectedDepartment={selectedDepartment}
        />
      )}
    </>
  );
};

export default DepartmentalPersonalTable;
