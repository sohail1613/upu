import React from "react";
import { ReactComponent as Langauge } from "../logos/language.svg";
import { ReactComponent as LogOut } from "../logos/log-out.svg";

const LogOutAndLanguage = () => {
  return (
    <>
      <div className="logOutAndLanguage absolute flex flex-col items-start p-0 gap-4 w-12 h-[112px] left-9 top-[490px]">
        {/*language*/}
        <div className="langauge relative w-12 h-12 bg-[#6941C6] rounded-full">
          <Langauge className="left-2.5 top-2.5 w-7 h-7 absolute" />
        </div>
        {/*logout*/}
        <div className="langauge relative w-12 h-12 bg-[#F4EBFF] rounded-full">
          <LogOut className="left-2.5 top-2.5 w-7 h-7 absolute rotate-180" />
        </div>
      </div>
    </>
  );
};

export default LogOutAndLanguage;
