import React, { useState } from "react";
import { ReactComponent as Langauge } from "../logos/language.svg";
import { ReactComponent as LogOut } from "../logos/log-out.svg";

const LogOutAndLanguage = () => {
  const [isActive, setIsActive] = useState(1);

  const handleActiveButton = (buttonIndex) => {
    setIsActive(buttonIndex);
  };

  return (
    <div className="logOutAndLanguage absolute flex flex-col items-start p-0 gap-4 w-12 h-[112px] left-9 bottom-[30px]">
      {/*language*/}
      <button
        onClick={() => {
          handleActiveButton(1);
        }}
        style={{
          backgroundColor: isActive === 1 ? "#6941C6" : "#F4EBFF",
        }}
        className="langauge relative w-12 h-12 rounded-full"
      >
        <Langauge
          className="left-2.5 top-2.5 w-7 h-7 absolute"
          style={{
            color: isActive === 1 ? "#FFFFFF" : "#6941C6",
          }}
        />
      </button>
      {/*logout*/}
      <button
        onClick={() => {
          handleActiveButton(2);
        }}
        style={{
          backgroundColor: isActive === 2 ? "#6941C6" : "#F4EBFF",
        }}
        className="langauge relative w-12 h-12 rounded-full"
      >
        <LogOut
          className="left-2.5 top-2.5 w-7 h-7 absolute rotate-180"
          style={{
            color: isActive === 2 ? "#FFFFFF" : "#6941C6",
          }}
        />
      </button>
    </div>
  );
};

export default LogOutAndLanguage;
