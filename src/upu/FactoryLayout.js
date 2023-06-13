import React from "react";
import { ReactComponent as IndustrialMap } from "../logos/industrialMap.svg";
import { ReactComponent as FullScreen } from "../logos/zoom.svg";
import { ReactComponent as InfoButton } from "../logos/info.svg";
import { ReactComponent as IndustrialButton } from "../logos/factory.svg";
import { ReactComponent as EditButton } from "../logos/edit.svg";
import MachineMap from "../logos/industrialMap.svg";
import MachineMapss from "../logos/industrialMapWithMachines.svg";

const FactoryLayout = () => {
  return (
    <>
      {/*Factory Layout or industrila mapping section*/}
      <button className="industryMapping w-[1115px] h-[400px] lg:w-[100%] bg-[#FFFFFF] rounded-lg overflow-scroll no-scrollbar">
        <img src={MachineMapss} />
      </button>
    </>
  );
};

export default FactoryLayout;

// const FactoryLayout = () => {
//     return (
//       <>
//         {/*Factory Layout or industrila mapping section*/}
//         <div className="industryMapping  box-border w-[1115px] h-[400px] bg-[#FFFFFF] border  border-solid border-[#EAECF0] shadow-lg rounded-lg  overflow-scroll no-scrollbar">
//           <img src={MachineMapss} />
//           {/*functional logos*/}
//           <div className="functionalIcons box-border flex flex-col items-center p-3 gap-7 w-16 h-[232px] left-[1164px] top-3  bg-white border border-solid border-[#D0D5DD] rounded backdrop-blur-md">
//             <div className="iconsAlignment !bg-black flex flex-col items-end p-0 gap-4 w-10 h-[208px] ">
//               <button className="icons box-border flex flex-row justify-center items-center w-10 h-10 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded ">
//                 <FullScreen />
//               </button>
//               <button className="icons box-border flex flex-row justify-center items-center w-10 h-10 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded ">
//                 <InfoButton />
//               </button>
//               <button className="icons box-border flex flex-row justify-center items-center w-10 h-10 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded ">
//                 <IndustrialButton />
//               </button>
//               <button className="icons box-border flex flex-row justify-center items-center w-10 h-10 bg-[#FFFFFF] border border-solid border-[#D0D5DD] shadow-lg rounded ">
//                 <EditButton />
//               </button>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   export default FactoryLayout;
