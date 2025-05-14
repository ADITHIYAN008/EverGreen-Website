import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose, IoEarOutline, IoEarthOutline, IoMenu } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "About Us", "Property List", "Contact Us"];

  return (
    <>
      <nav className="flex md:hidden z-50 justify-between px-2 pt-5 items-center fixed w-full ">
        <div className="flex w-full justify-between backdrop-blur-3xl px-4 py-2 bg-primary rounded-full shadow-2xl border border-secondary/40">
          <h1 className="text-2xl font-secondary text-secondary">EverGreen</h1>
          <div className="flex gap-6 items-center">
            <a
              className="text-[10px] text-secondary bg-[#ACE277] px-4 py-1.5 rounded-3xl"
              href="#"
            >
              Sign Up
            </a>
            <IoMenu
              onClick={() => setIsOpen(true)}
              className={`text-[27px] text-secondary cursor-pointer  transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <IoClose
              className={`text-3xl absolute text-secondary right-4 transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-90 scale-0 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div
            className={`absolute right-5 top-22 w-[350px] h-auto bg-primary text-black backdrop-blur-3xl shadow-2xl rounded-3xl origin-top-right transform transition-transform duration-500 ease-in-out ${
              isOpen
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-11 px-9 py-12">
              {["Home", "About Us", "Property List", "Contact Us"].map(
                (item, index) => (
                  <div key={index} className="flex justify-between">
                    <li className="hover:underline duration-200">{item}</li>
                    <FaArrowRightLong />
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="text-primary lg:bg-center hidden md:block px-6 py-7 z-50 fixed items-center w-full justify-between">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl text-shadow-md">EverGreen</h3>
          <div className="flex bg-white/20 backdrop-blur-2xl items-center rounded-full px-1 py-1 border border-secondary/40">
            {tabs.map((tab) => {
              let href = "#";

              if (tab === "Home") href = "#home";
              else if (tab === "About Us") href = "#about";
              else if (tab === "Property List") href = "#property";
              else if (tab === "Contact Us") href = "#contact";

              return (
                <a
                  href={href}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 select-none rounded-full text-sm font-medium cursor-pointer transition 
                ${
                  activeTab === tab
                    ? "bg-white border border-secondary/50 text-black shadow"
                    : "text-secondary/60 hover:bg-white/10"
                }`}
                >
                  {tab}
                </a>
              );
            })}
          </div>

          <div className="flex gap-4 items-center">
            <div className="hidden lg:block">
              <div className="flex items-center cursor-pointer gap-2">
                <IoEarthOutline className="size-8 text-secondary" />
                <h2 className="text-[16px] text-secondary">Eng</h2>
              </div>
            </div>
            <a
              className="bg-[#b9dd8a] text-secondary px-5 py-2 rounded-full border hover:bg-secondary hover:text-primary hover:border hover:border-secondary transition-all duration-400 border-secondary/30"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
