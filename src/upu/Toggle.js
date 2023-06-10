import React from "react";



const Toggle = ({ enabled, setEnabled }) => {
  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <>
      <div className="w-fit rounded-[32px] flex items-center">
        <div
        onClick={handleClick}
          className={Toggle(
            enabled ? "translate-x-8" : "translate-500",
            "relative inline-flex flex-shrink-0 h-6 w-14 border-transparent rounded-full cursor-pointer"
          )}
        >
          <span
            aria-hidden="true"
            className={Toggle(
              enabled ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition"
            )}
          />
          <span className="mx-auto z-10 text-[10px] transition duration-200 text-primary-100 mt-auto mb-auto leading-5 ">
            OEE
          </span>
        </div>
      </div>
    </>
  );
};

export default Toggle;
