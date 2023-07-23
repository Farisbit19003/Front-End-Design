import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Video = () => {
  return (
    <>
    <div className="top-[55rem] relative border">
     <div className="flex relative border">

        <AiFillPlayCircle
          size={40}
          color="#2639ED"
          className="items-center flex justify-center"
        />
        <img src="../images/video.svg" className="relative flex justify-center" alt="video"/>
        </div>
        
        </div>
    </>
  );
};

export default Video;
