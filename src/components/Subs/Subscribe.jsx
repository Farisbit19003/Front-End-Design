import React from "react";
import Dots from "../common/Dots";
import Button from "../common/Button";

const Subscribe = () => {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-end -mr-6 items-center">
          <Dots />
        </div>

        <div className="flex flex-row justify-between relative -mt-24 ">
          <div className="w-[1100px]  h-[292px] flex items-start justify-center p-4  flex-col  bg-sky-50 rounded-[75px]">
            <div className="left-[130px] h1">Subscribe Newsletter</div>
            <div className="w-[588px] left-[130px]  p">
              I will update good news and promotion service not spam
            </div>
          </div>
          <div className="w-[400px]  h-[292px] mr-2 bg-[#2639ED] flex flex-row -ml-40 rounded-tr-[50px] rounded-br-[50px] p-10 rounded-tl-[150px] rounded-bl-[150px]  justify-center items-center top-[162px] ">
            <div className="flex flex-row bg-white justify-between items-center h-14  w-[32rem] shadow-xl -ml-40 p-5 rounded-3xl">
              <input
                placeholder="Enter your email address"
                className=" font-ad rounded-[60px] p-3 text-base font-normal  outline-none"
              />

              <Button />
            </div>
          </div>
        </div>
        <div className="w-[178px] h-[178px] -mt-36 -ml-6  bg-orange-100 rounded-bl-[100px] -z-10" />
      </div>
    </>
  );
};

export default Subscribe;
