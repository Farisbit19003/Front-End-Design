
import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import DrawerComp from "./Drawer";


const Header = () => {
  const [drawer, isDrawer] = useState(false);
  const openDrawer = () => {
    isDrawer(true);
  };
  const closeDrawer = () => {
    isDrawer(false);
  };
  return (
    <>
      <header className="flex flex-row justify-between text-center">
        <div className="flex">
          <h1 className="font-pn text-2xl">
            <b className="font-semibold">A+</b>{" "}
            <span className="font-ad">Studio</span>
          </h1>
        </div>

        <nav>
          <ul className="lg:flex hidden text-lg font-ad cursor-pointer font-medium flex-row gap-20 justify-around">
            <li>Home</li>
            <li>What We Do</li>
            <li>Service</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <AiOutlineMenuFold
            className="lg:hidden flex  cursor-pointer"
            size={35}
            onClick={openDrawer}
          />
        </nav>
      </header>
        {/* DRAWER */}
      <DrawerComp drawer={drawer} closeDrawer={closeDrawer}/>
    </>
  );
};

export default Header;
