import React from "react";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="mx-auto border-t-2 w-11/12 border-[#E4E4E4] "></div>
      <div className="justify-around items-center flex lg:flex-row  flex-col  ">
        <div className="flex flex-col mt-10 lg:w-[18.875rem] w-full p-5 gap-5">
          <div className="flex flex-row gap-2">
            <span className="text-black text-xl font-pn font-bold">A+</span>
            <span className="text-black text-xl font-ad font-normal">
              Studio
            </span>
          </div>
          <div className="flex w-full p">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </div>
          <div className="flex flex-row lg:justify-start justify-center  w-full p-2 gap-4 mt-10 items-center">
            <BsFacebook size={35} color="blue" />
            <AiFillLinkedin size={35} color=" #007AB9" />
            <AiFillTwitterCircle size={40} color="#55ACEE" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 grid-cols-2">
          <div className="flex flex-col">
            <h1 className="font-ad text-xl font-semibold">What We Do</h1>
            <ul className="flex gap-2 mt-3 font-ad flex-col font-medium whitespace-nowrap">
              <li>Web Design</li>
              <li>App Design</li>
              <li>Social Media Manage</li>
              <li>Market Analysis Project</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-ad text-xl font-semibold">Comapny</h1>
            <ul className="flex gap-2 mt-3 font-ad flex-col font-medium whitespace-nowrap">
              <li>About Us</li>
              <li>Career</li>
              <li>Become Investor</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-ad text-xl font-semibold">Support</h1>
            <ul className="flex gap-2 mt-3 font-ad flex-col font-medium whitespace-nowrap">
              <li>FAQ</li>
              <li>Policy</li>
              <li>Business</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-ad text-xl font-semibold">Contact</h1>
            <ul className="flex gap-2 mt-3 font-ad flex-col font-medium whitespace-nowrap">
              <li>Whatsapp</li>
              <li>Support 24</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto border-t-2 w-11/12 border-[#E4E4E4]"></div>
      <div className="flex justify-center items-center  my-5 p">
        Copyright © 2022 Avi Yansah
      </div>
    </>
  );
};

export default Footer;
