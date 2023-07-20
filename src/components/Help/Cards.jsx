import React from "react";

const Cards = () => {
  return (
    <>
    
    {/* CARD 1 */}
      <div className=" h-[18.75rem] left-[525px] flex  absolute top-[79px] ">
        <div className="bg-[#ffffff] border border-[#f2f2f2] p-2 rounded-[40px] shadow-lg h-[379px] flex justify-center w-[15.625rem]">
          <div className="bg-[#f1f6ff] rounded-2xl h-[7.5625rem] flex justify-center absolute top-[2.4375rem] w-[7.5625rem]">
            <img
              className="h-[74px] absolute top-[24px] w-[74px]"
              alt="Box search"
              src="../public/images/box-search-1.svg"
            />
          </div>
          <p className=" text-[#757575] font-ad text-base font-normal tracking-normal leading-[22.4px] absolute text-center top-[277px] w-[245px]">
            We present you a proposal and discuss nitty-gritty like
          </p>
          <div className=" text-[#000000] font-ad text-base font-normal  tracking-normal leading-normal absolute text-center top-[190px] w-[167px]">
            Business Idea Planning
          </div>
        </div>
      </div>
      {/* CARD 2 */}
      <div className=" h-[18.75rem] left-[54.1875rem] flex absolute top-0 ">
        <div className="bg-[#ffffff] border border-[#f2f2f2] rounded-[40px] flex justify-center shadow-xl h-[379px] relative w-[15.625rem]">
          <div className="bg-[#FFF7E3] rounded-2xl h-[7.5625rem] flex justify-center absolute top-[2.4375rem] w-[7.5625rem]">
            <img
              className="h-[4.625rem]  absolute top-[1.5rem] w-[4.625rem]"
              alt="Wallet"
              src="../public/images/empty-wallet-1.svg"
            />
          </div>
          <p className=" text-[#757575] font-ad text-base font-normal  tracking-normal leading-[22.4px] absolute text-center top-[277px] w-[245px]">
            Protocols apart from aengage models, pricing billing
          </p>
          <div className=" text-[#000000] font-ad text-base font-normal  tracking-normal leading-normal absolute text-center top-[190px] w-[167px]">
            Financial Planning System
          </div>
        </div>
      </div>
      {/* CARD 3 */}
      <div className=" h-[18.75rem] left-[867px] flex absolute top-[409px] ">
        <div className="bg-[#ffffff] border border-[#f2f2f2] rounded-[40px] shadow-lg flex justify-center h-[379px] relative w-[15.625rem]">
          <div className="bg-[#DEFFEE] rounded-2xl h-[7.5625rem] flex justify-center absolute top-[2.4375rem] w-[7.5625rem]">
            <img
              className="h-[74px] absolute top-[24px] w-[74px]"
              alt="Chart"
              src="../public/images/chart-square-1.svg"
            />
          </div>
          <p className=" text-[#757575] font-ad text-base font-normal tracking-normal leading-[22.4px] absolute text-center top-[277px] w-[245px]">
            Protocols apart from aengage models, pricing billing
          </p>
          <div className=" text-[#000000] font-ad text-base font-normal tracking-normal leading-normal absolute text-center top-[190px] w-[167px]">
            Market Analysis Project
          </div>
        </div>
      </div>
      {/* CARD 4 */}
      <div className="h-[18.75rem] left-[525px] flex absolute top-[488px] ">
        <div className="bg-[#ffffff] border border-[#f2f2f2] rounded-[40px] flex justify-center shadow-lg h-[379px] relative w-[15.625rem]">
          <div className="bg-[#FFF2F8] rounded-2xl h-[7.5625rem] flex justify-center absolute top-[2.4375rem] w-[7.5625rem]">
            <img
              className="img-2 h-[74px] absolute top-[24px] w-[74px]"
              alt=" Code"
              src="../public/images/code-1-1.svg"
            />
          </div>
          <p className=" text-[#757575] font-ad text-base font-normal tracking-normal leading-[22.4px] absolute text-center top-[277px] w-[245px]">
            Communication protocols apart from engagement models
          </p>
          <div className=" text-[#000000] font-ad text-base font-normal tracking-normal leading-normal absolute text-center top-[190px] w-[167px]">
            Development Website and App
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
