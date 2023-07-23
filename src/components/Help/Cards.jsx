import React from "react";
import Card from "../common/Card";

const Cards = () => {
  return (
    <>
      {/* CARD 1 */}
      <div className="h-[23rem] flex">
        <Card
          BackColour="#F1F7FF"
          imageSrc="../images/box-search-1.svg"
          title={"Business Idea Planning"}
          description={"We present you a proposal and discuss niffty-gritty like"}
        />
      </div>
      {/* CARD 2 */}
      <div className="h-[23rem]  flex -mt-10 ">
        <Card
          BackColour={"#FFF7E3"}
          imageSrc="../images/empty-wallet-1.svg"
          title="Financial Planning System"
          description="Protocols apart from aengage models, pricing billing"
        />
      </div>
      {/* CARD 3 */}
      <div className="h-[23rem] flex flex-wrap">
      <Card
          BackColour={"#FFF7E3"}
          imageSrc="../images/code-1-1.svg"
          title="Development Website and App"
          description="Communication protocols apart from engagement models"
        />
      </div>
      {/* CARD 4 */}
      <div className="h-[23rem]  flex -mt-10 ">
        
         <Card
            BackColour={"#DEFFEE"}
          imageSrc="../images/chart-square-1.svg"
          title="Market Analysis Project"
          description="Protocols apart from aengage models, pricing billing"
        />
      </div>
    </>
  );
};

export default Cards;
