import React from "react";

const Great = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 gap-5 lg:flex-row flex-col">
        <div className="w-full px-auto">
          <div
            className="bg-[url(../images/video.svg)]  lg:w-[39rem] flex justify-center items-center bg-center bg-no-repeat  h-screen"
            alt="video"
          >
            <img
              src="../images/play.svg"
              alt="play"
              className="text-center justify-center flex"
            />
          </div>
          <div className="flex justify-end  items-end relative -mt-56 lg:ml-80 -z-10">
            <div className="bg-[#fff4da] rounded-full h-36  w-36" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-[#eff0ff] absolute -z-10 rounded-br-[6.25rem] h-[11.125rem]   w-[11.125rem]" />
          <div className="flex flex-col lg:-ml-28 w-fit p-2 mt-10 relative justify-end items-center">
            {" "}
            <h1 className="h1 lg:w-7/12 w-full">
              Great Digital Product Agency since 2016
            </h1>
            <p className="p lg:w-7/12 w-full">
              Our Business Plan is a written document describing a company&#39;s
              core business activites, Objectives, and how it plans to achieve
              its goals. Our goal is to provide our client high quality Product
              with modern idea accordingly their budgets and according thir
              reuirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Great;
