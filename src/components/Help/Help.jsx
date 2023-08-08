import React, { useEffect, useRef } from "react";
import { Aside } from "./Aside";

const Help = () => {
  const helpRef = useRef(null);

  const handleScrollToHelp = () => {
    if (helpRef.current) {
      helpRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    handleScrollToHelp();

    window.addEventListener("load", handleScrollToHelp);

    return () => {
      window.removeEventListener("load", handleScrollToHelp);
    };
  }, []);

  return (
    <>
      <div className="ml-[5.125rem] mt-36" ref={helpRef}>
        <div className="">
          <Aside />

          <div className="justify-between flex flex-row -mt-10">
            <div className="flex flex-row">
              <div id="section1">
                <img
                  className="lg:h-full flex flex-shrink lg:w-full w-40 h-40"
                  alt="Dot"
                  src="../images/Dot.svg"
                />
              </div>
              <div id="section2">
                <img
                  className="lg:h-full flex lg:w-full w-40 h-40"
                  alt="Dot"
                  src="../images/Dot.svg"
                />
              </div>
            </div>
            <div className="border-8 mr-40 border-[#ff007a] rounded-full h-32 w-32"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
