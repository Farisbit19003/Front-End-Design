import React from "react";
import Dots from "../common/Dots";
import Cards from "./Cards";

export const Aside = () => {
  return (
    <>
      <div className="flex lg:flex-row w-full flex-col lg:justify-between gap-5 relative"> 
        <div className="bg-[#fff4da]  mt-14 rounded-tl-[6.25rem] h-[11.125rem] flex  w-[10rem] transform lg:w-2/12"></div>
        <div className="flex flex-col ml-14 z-20 gap-2 absolute mt-28">
          <h1 className="font-ad justify-center  font-semibold lg:text-[2.25rem] lg:leading-[3.125rem] text-xl lg:w-1/2">
            How can we help your Business ?
          </h1>
          <p className="p lg:w-7/12">
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <div className="bg-[#f4f8ff] px-10 z-10 relative flex justify-center items-center rounded-tl-[9.375rem] h-[619px] mt-32 lg:mt-0 lg:w-9/12 w-full">
          <div className="grid grid-cols-2 gap-4">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
