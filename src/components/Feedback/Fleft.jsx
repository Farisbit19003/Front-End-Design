import React from "react";
import Dots from "../common/Dots";

const Fleft = () => {
  return (
    <>
      <div className="flex flex-col w-9/12 ">
        <div className="flex justify-end ">
          <Dots />
        </div>
        <img
          src="../images/feedback.svg"
          className="-mt-36 h-full w-full "
          alt="fb"
        />
        <div className="border-8 rounded-full border-[#ff007a] h-24 w-24 absolute mt-[16rem] ml-4 -z-10"></div>
      </div>
    </>
  );
};

export default Fleft;
