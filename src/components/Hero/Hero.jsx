import React from "react";
import SidePic from "./SidePic";
import Dots from "./Dots";
import Button from "../common/Button";

const Hero = () => {
  return (
    <>
      <div className="flex ml-[5.125rem] lg:flex-row flex-col justify-center ">
        <div className="flex flex-col justify-center gap-3 p-3 mr-6 lg:w-1/2 w-full ">
          <h1 className="h1">
            A Digital Product Agency
          </h1>
          <p className="p">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="flex flex-col relative my-10 justify-center items-center">
            <Button />
            <Dots/>
          </div>
        </div>
        <div className="flex justify-center ">
          <SidePic />
        </div>
      </div>
    </>
  );
};

export default Hero;
