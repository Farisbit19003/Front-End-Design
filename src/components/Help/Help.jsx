import React from "react";
import Cards from "./Cards";
import { Aside } from "./Aside";

const Help = () => {
  return (
    <>
      <div className=" left-[82px] absolute">
        <div className=" h-[867px] relative">
          <div className=" border-8 border-[#ff007a] rounded-full h-[120px] left-[1040px] absolute top-[711px] w-[120px]"></div>
          <div className=" h-[154px]  left-[43px] absolute top-[644px] w-[405px]">
            <img
              className=" h-[154px] left-[209px] absolute top-0 w-[196px]"
              alt="Dot"
              src="../public/images/Dot.svg"
            />
            <img
              className=" h-[154px] left-0 absolute top-0 w-[196px]"
              alt="Dot"
              src="../public/images/Dot.svg"
            />
          </div>
         
         <Aside/>
          
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Help;
