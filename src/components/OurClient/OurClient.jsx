import React from "react";

const OurClient = () => {
  return (
    <>
      <div className="my-2 ml-[82px] lg:px-20">
        <h1 className="h1">Our Client</h1>
        <div className="flex lg:flex-row flex-col gap-2 justify-between">
          <p className="p lg:w-3/12 w-full">
            Several selected clients, who already believe in our service.
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 items-center justify-items-stretch p-5">
            <img
              className="h-[2.05rem] w-fit"
              src="../images/Google Logo.svg"
            />
            <img
              className="h-[2.05rem] w-fit"
              src="../images/Airbnb Logo.svg"
            />
            <img
              className="h-[2.05rem] w-fit"
              src="../images/Amazon Logo.svg"
            />
            <img
              className="h-[2.05rem] w-fit"
              src="../images/Uber Eats Logo.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClient;
