import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose, IoEarOutline, IoEarthOutline, IoMenu } from "react-icons/io5";
import EverGreenLogo from "../assets/EverGreen.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Nav = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "About Us", "Property List", "Contact Us"];

  return (
    <>
      <nav className="flex md:hidden  z-50 justify-between px-2 pt-5 items-center fixed w-full ">
        <div className="flex w-full justify-between backdrop-blur-3xl px-4 py-2 dark:border-primary/40 bg-primary dark:bg-secondary rounded-full shadow-2xl border border-secondary/40">
          <h1 className="text-2xl font-secondary text-secondary dark:text-primary">
            EverGreen
          </h1>
          <div className="flex gap-3 items-center">
            <a
              className="text-[10px] text-secondary bg-[#ACE277] px-4 py-1.5 rounded-3xl"
              href="#"
            >
              Sign Up
            </a>
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <MdLightMode className="text-primary size-6" />
              ) : (
                <MdDarkMode className="text-secondary size-6" />
              )}
            </button>
            <IoMenu
              onClick={() => setIsOpen(true)}
              className={`text-[27px] text-secondary cursor-pointer dark:text-primary transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <IoClose
              className={`text-3xl absolute dark:text-primary text-secondary right-4 transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-90 scale-0 opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div
            className={`absolute right-5 top-22 w-[350px] h-auto bg-primary dark:bg-secondary dark:text-primary text-black backdrop-blur-3xl shadow-2xl rounded-3xl origin-top-right transform transition-transform duration-500 ease-in-out ${
              isOpen
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-11 px-9 py-12">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex justify-between"
              >
                <li className="hover:underline duration-200">Home</li>
                <FaArrowRightLong />
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="flex justify-between"
              >
                <li className="hover:underline duration-200">About Us</li>
                <FaArrowRightLong />
              </a>
              <a
                href="#property"
                onClick={() => setIsOpen(false)}
                className="flex justify-between"
              >
                <li className="hover:underline duration-200">Property List</li>
                <FaArrowRightLong />
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex justify-between"
              >
                <li className="hover:underline duration-200">Contact Us</li>
                <FaArrowRightLong />
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="text-primary  lg:bg-center hidden md:block md:w-screen px-6 py-7 z-50 fixed items-center w-full justify-between">
        <div className="flex justify-between items-center ">
          <img className="lg:w-[15rem] w-[10rem]" src={EverGreenLogo} alt="" />
          <div className="flex dark:border dark:border-primary/40 bg-white/20 backdrop-blur-2xl dark:bg-secondary items-center rounded-full px-1 py-1 border border-secondary/40 lg:mr-20">
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
                    : "text-secondary/60 dark:text-primary hover:bg-white/10"
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
                <IoEarthOutline className="size-8 text-secondary dark:text-primary" />
                <h2 className="text-[16px] text-secondary dark:text-primary">
                  Eng
                </h2>
              </div>
            </div>
            <button
              className="hidden cursor-pointer md:block px-2 py-2 bg-primary rounded-full"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <MdLightMode className="text-secondary cursor-pointer hover:text-yellow-500 duration-300 transition-all ease-in-out size-5" />
              ) : (
                <MdDarkMode className="text-secondary cursor-pointer hover:text-blue-500 duration-300 transition-all ease-in-out size-5" />
              )}
            </button>
            <a
              className="bg-[#52e05b] text-secondary px-5 py-2 rounded-full border dark:hover:bg-primary dark:hover:text-secondary hover:bg-secondary hover:text-primary hover:border hover:border-secondary transition-all duration-400 border-secondary/30"
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
