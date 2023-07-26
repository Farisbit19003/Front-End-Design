import React from "react";

const CirclePics = () => {
  const Images = [
    "../circle/gray.svg",

    "../circle/pink.svg",
    "../circle/white.svg",
    "../circle/silver.svg",

    "../circle/red.svg",
    "../circle/purple.svg",
    "../circle/black.svg",
  ];
  const central_Image = "../circle/blue.svg";

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="circle-container relative">
          {Images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className=" absolute transform"
              style={{
                transform: `rotate(${
                  (360 / Images.length) * index
                }deg) translate(8rem) rotate(-${
                  (360 / Images.length) * index
                }deg)`,
              }}
            />
          ))}
          <img
            src={central_Image}
            alt="Center Image"
            className=" border-white "
          />
        </div>
      </div>
    </>
  );
};

export default CirclePics;
