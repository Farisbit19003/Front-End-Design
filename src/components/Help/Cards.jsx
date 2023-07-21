import React from "react";
import Card from "../common/Card";

const Cards = () => {
  return (
    <>
      {/* CARD 1 */}
      <div className="h-[18.75rem] left-[525px] flex absolute top-[79px]">
        <Card
          BackColour="#F1F7FF"
          imageSrc="../images/box-search-1.svg"
          title={"Business Idea Planning"}
          description={"We present you a proposal and discuss niffty-gritty like"}
        />
      </div>
      {/* CARD 2 */}
      <div className="h-[18.75rem] left-[54.1875rem] flex absolute top-0">
        <Card
          BackColour={"#FFF7E3"}
          imageSrc="../images/empty-wallet-1.svg"
          title="Financial Planning System"
          description="Protocols apart from aengage models, pricing billing"
        />
      </div>
      {/* CARD 3 */}
      <div className="h-[18.75rem] left-[867px] flex absolute top-[409px]">
        <Card
            BackColour={"#DEFFEE"}
          imageSrc="../images/chart-square-1.svg"
          title="Market Analysis Project"
          description="Protocols apart from aengage models, pricing billing"
        />
      </div>
      {/* CARD 4 */}
      <div className="h-[18.75rem] left-[525px] flex absolute top-[488px]">
        <Card
          BackColour={"#FFF7E3"}
          imageSrc="../images/code-1-1.svg"
          title="Development Website and App"
          description="Communication protocols apart from engagement models"
        />
      </div>
    </>
  );
};

export default Cards;
