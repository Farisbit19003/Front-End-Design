import React from 'react'

const SidePic = () => {
  return (
    <>
      <div className="relative w-fit flex flex-col">
        <div className="bg-[#DAE9FF] absolute rounded-full w-[8.0625rem] h-[8.0625rem] -left-[3.6875rem] "></div>

        <img className="relative " src="../images/hero.png" alt="hero" />
        <div className="justify-around flex shrink-0">
          <div className="bg-[#FFF5DB]  flex  rounded-full w-[11.125rem] h-[7.625rem]  rounded-tl-[0] rounded-tr-[0] rounded-br-[6.25rem] rounded-bl-[0]"></div>
        </div>
      </div>
    </>
  );
}

export default SidePic