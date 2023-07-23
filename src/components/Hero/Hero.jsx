import React from "react";
import SidePic from "./SidePic";
import Dots from "../common/Dots";
import Button from "../common/Button";

const Hero = () => {
  return (
    <>
      <div className="flex ml-3 lg:ml-[5.125rem] lg:flex-row flex-col justify-center ">
        <div className="flex flex-col justify-center gap-3 ">
        <div className="flex flex-col lg:p-3 border mr-6 lg:w-7/12 ">
          <h1 className="h1 whitespace-nowrap">
            A Digital Product Agency
          </h1>
          <p className="p">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          </div>
          <div className="flex flex-col -ml-3 w-fit items-stretch my-2 justify-start">
            <Button />
            <div className="flex flex-row justify-stretch -mt-5 items-stretch ">
            <Dots/>
            <Dots/>
            </div>
          </div>
          </div>
        <div className="flex  w-full justify-center ">
          <SidePic />
        </div>
      </div>
    </>
  );
};

export default Hero;
