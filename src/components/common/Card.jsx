import React from "react";

const Card = ({ imageSrc, title, BackColour, description }) => {
  return (
    <>
      <div className="bg-[#ffffff] border border-[#f2f2f2]  rounded-[40px] shadow-lg h-full flex flex-col items-center gap-2 justify-center w-full">
        <div
          style={{ backgroundColor: `${BackColour}` }}
          className={` rounded-2xl h-[7.5625rem] flex justify-center items-center   w-[7.5625rem]`}
        >
          <img
            className="lg:h-[74px] h-20 w-20  lg:w-[74px]"
            alt="Box search"
            src={imageSrc}
          />
        </div>
        <div className="text-[#000000] font-ad text-base font-bold  text-center  w-fit lg:w-[167px]">
          {title}
        </div>
        <p className="text-[#757575] font-ad text-base font-normal tracking-normal leading-[22.4px]  text-center  w-fit lg:w-[245px]">
          {description}
        </p>
      </div>
    </>
  );
};

export default Card;
