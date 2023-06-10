import React, { useState } from "react";
import { ReactComponent as BlackLogo } from "../logos/black_logo.svg";
import { ReactComponent as BacaLogo } from "../logos/bacaLogo.svg";
import { ReactComponent as BacaLogo2 } from "../logos/bacaLogo2.svg";
import { ReactComponent as ProfileAvatar } from "../logos/profile_images.svg";
import { ReactComponent as Mail } from "../logos/mail_notification.svg";
import { ReactComponent as Profile } from "../logos/profile - 64px.svg";
import { ReactComponent as Active } from "../logos/activeStatus.svg";
import RightMenuBar from "./RightMenuBar";
import data from "././jsonData/ChatData.js";

const RightNavBar = () => {
  const [user, setUser] = useState(data);
  const [showMenuBar, setShowMenuBar] = useState(false);

  const handleClick = () => {
    setShowMenuBar(!showMenuBar);
  };

  return (
    <>
      {/*right bar*/}
      <button
        style={{ width: showMenuBar ? 300 : 80 }}
        className="rightbar flex flex-col items-center justify-between bg-[#FFFFFF] max-h-full gap-5 pr-5 border border-solid border-[#E5E5E5] rounded-md shadow-lg"
        onClick={handleClick}
      >
        {/*Logo here */}
        <div className="logos">
          <BlackLogo className="ml-7 w-8 h-8 box-border mt-5 items-center mb-5" />
          <div className="box-border w-[80px] absolute h-[84px] bg-[#FCFCFD] border border-solid  items-center">
            <BacaLogo2 className=" image flex flex-row items-center gap-3 h-11 m-[11px] mt-5 " />
          </div>
        </div>
        {/* user prodife avatar*/}
        <div className="profileFrame flex flex-col items-center gap-2 w-14 h-full !ml-5 mt-20 mb-4 ">
          <div className="avatarFrame flex flex-col items-center gap-2 w-14 h-full bg-white ">
            <div className="avatar flex flex-col items-start gap-2 w-[34px] h-[380px] overflow-y-scroll no-scrollbar ">
              {user.map((data) => {
                return (
                  <div
                    className="profileImage flex flex-col w-[34px] h-[34px] relative "
                    key={data.id}
                  >
                    {/*active status*/}
                    <div className="status box-border  w-2 h-2 bg-[#02C851] border-[0.546482px] border-solid border-[#EFEFEF rounded-[5464.27px] ml-[26px]">
                      <Active />
                    </div>
                    <Profile />
                  </div>
                );
              })}
            </div>
          </div>
          {/*mail notification*/}
          <div className="notification">
            <Mail />
          </div>
        </div>
      </button>
      {showMenuBar && <RightMenuBar setShowMenuBar={setShowMenuBar} />}
    </>
  );
};

export default RightNavBar;

// import React, { useState } from "react";
// import { ReactComponent as BlackLogo } from "../logos/black_logo.svg";
// import { ReactComponent as BacaLogo } from "../logos/bacaLogo.svg";
// import { ReactComponent as BacaLogo2 } from "../logos/bacaLogo2.svg";
// import { ReactComponent as ProfileAvatar } from "../logos/profile_images.svg";
// import { ReactComponent as Mail } from "../logos/mail_notification.svg";
// import { ReactComponent as Profile } from "../logos/profile - 64px.svg";
// import { ReactComponent as Active } from "../logos/activeStatus.svg";
// import data from "././jsonData/ChatData.js";

// const RightNavBar = () => {
//   const [user, setUser] = useState(data);
//   return (
//     <>
//       {/*right bar*/}
//       <div className="rightbar flex flex-col items-center justify-between bg-[#FFFFFF] w-20 h-full gap-5 pr-5 border border-solid border-[#E5E5E5] rounded-md shadow-lg">
//         {/*Logo here */}
//         <div className="logos">
//           <BlackLogo className="ml-7 w-8 h-8 box-border mt-5 items-center mb-5" />
//           <div className="box-border w-[80px] absolute h-[84px] bg-[#FCFCFD] border border-solid  items-center">
//             <BacaLogo2 className=" image flex flex-row items-center gap-3 h-11 m-[11px] mt-5 " />
//           </div>
//         </div>
//         {/* user prodife avatar*/}
//         <div className="profileFrame flex flex-col items-center gap-2 w-14 h-full !ml-5 mt-20 mb-4 ">
//           <div className="avatarFrame flex flex-col items-center gap-2 w-14 h-full bg-white ">
//             <div className="avatar flex flex-col items-start gap-2 w-[34px] h-full overflow-y-scroll no-scrollbar">
//               <div className="profileImage flex flex-col w-[34px] h-[34px]">
//                 {/*active status*/}
//                 <div className="status box-border absolute w-2 h-2 bg-[#02C851] border-[0.546482px] border-solid border-[#EFEFEF rounded-[5464.27px] ml-[26px]">
//                   <Active />
//                 </div>
//                 <Profile />
//               </div>
//             </div>
//           </div>
//           {/*mail notification*/}
//           <div className="notification">
//             <Mail />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RightNavBar;
