import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between px-2 pt-5 items-center fixed w-full z-5">
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
                  <li>{item}</li>
                  <FaArrowRightLong />
                </div>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
