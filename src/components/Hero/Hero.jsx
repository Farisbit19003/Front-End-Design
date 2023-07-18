import React from "react";
import SidePic from "./SidePic";
import Dots from "./Dots";
import Button from "../common/Button";

const Hero = () => {
  return (
    <>
      <div className="sm:pl-20 pl-10">
        <div className="flex lg:flex-row flex-col justify-center ">
          <div className="flex flex-col justify-center gap-3 p-3 mr-6 lg:w-1/2 w-full ">
            <h1 className=" text-[#000] font-ad justify-center font-semibold lg:text-[2.5rem] lg:leading-[3.125rem] text-lg">
              A Digital Product Agency
            </h1>
            <p className="text-[#565656] font-ad">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <div className="flex flex-col relative top-8 items-center">
              <Button/>
              <Dots />
            </div>
          </div>
          <div className="flex justify-center ">
          <SidePic />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
