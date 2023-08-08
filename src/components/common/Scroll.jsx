import React, { useEffect, useRef } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Scroll = () => {
  const scrollButtonRef = useRef(null);
  
  const handleScroll = () => {
    const scrollButton = scrollButtonRef.current;
    if (scrollButton) {
      if (window.scrollY > 100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <button
        ref={scrollButtonRef}
        className="z-20 fixed bottom-10 right-10 bg-gray-400 p-3 rounded-full text-white text-xl"
        onClick={scrollToTop}
      >
        <FaArrowCircleUp />
      </button>
    </>
  );
};

export default Scroll;
