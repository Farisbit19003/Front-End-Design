import React from "react";
import { Aside } from "./Aside";


const Help = () => {
  return (
    <>
      <div className=" ml-[5.125rem] mt-36 ">
        <div className=" ">
          <Aside />

          <div className="justify-between flex flex-row -mt-10  ">
            <div className="flex flex-row ">
        
              <img className="lg:h-full flex flex-shrink lg:w-full w-40 h-40" alt="Dot" src="../images/Dot.svg" />
              <img className="lg:h-full flex  lg:w-full w-40 h-40" alt="Dot" src="../images/Dot.svg" />
            </div>
            <div className=" border-8 mr-40 border-[#ff007a] rounded-full h-32 w-32 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
