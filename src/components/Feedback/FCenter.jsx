import React from "react";
import { BsDot } from "react-icons/bs";

export const FCenter = () => {
  return (
    <>
      <div className="flex flex-col w-fit gap-3 justify-center items-start  p-3 ">
        <div className="flex flex-col w-fit"> 
        <h1 className="h1">Matthew Paul</h1>
        <p className="p  w-full">
          Perfect, very good job! Thank you for the amazing design and work.
          Really impressed with the high quality and quick turnaround time.
          Highly recommend.
        </p>
        </div>
        <div className="flex flex-row">
          <BsDot size={60} color="blue" />
          <BsDot size={60} color="gray" />
          <BsDot size={60} color="gray" />
          <BsDot size={60} color="gray" />
          <BsDot size={60} color="gray" />
        </div>
      </div>
    </>
  );
};
