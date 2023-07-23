import React from "react";
import Dots from "../common/Dots";

const Fright = () => {
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
        <div className="border-8 rounded-full border-[#ff007a] h-24 w-24  -mt-40 ml-4 -z-10"></div>
      </div>
    </>
  );
};

export default Fright;
