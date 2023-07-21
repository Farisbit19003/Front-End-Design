import React from "react";

const Card = ({ imageSrc, title, BackColour, description }) => {
  return (
    <>
      <div className="bg-[#ffffff] border border-[#f2f2f2] p-2 rounded-[40px] shadow-lg h-[379px] flex justify-center w-[15.625rem]">
        <div
          style={{ backgroundColor: `${BackColour}` }}
          className={` rounded-2xl h-[7.5625rem] flex justify-center absolute top-[2.4375rem] w-[7.5625rem]`}
        >
          <img
            className="h-[74px] absolute top-[24px] w-[74px]"
            alt="Box search"
            src={imageSrc}
          />
        </div>
        <p className="text-[#757575] font-ad text-base font-normal tracking-normal leading-[22.4px] absolute text-center top-[277px] w-[245px]">
          {description}
        </p>
        <div className="text-[#000000] font-ad text-base font-bold absolute text-center top-[190px] w-[167px]">
          {title}
        </div>
      </div>
    </>
  );
};

export default Card;
