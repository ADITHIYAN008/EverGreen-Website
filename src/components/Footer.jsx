import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mb-10">
      <div className="relative">
        <div className="w-ful relative h-[200px] overflow-clip">
          <img src="src/assets/one.jpg" alt="" />
          <div className="bg-black/50 absolute top-0 w-full h-full"></div>
        </div>
        <div className="absolute text-primary top-10 left-10 w-[300px] mx-auto">
          <h3 className="text-2xl text-center font-medium">
            Ready to Make Your Dream Property a Reality?
          </h3>
          <p className="text-[8px] text-center mt-2">
            Explore a curated selection of properties that align with your
            vision and goals.
          </p>
          <a
            className="bg-primary mx-auto mt-5 flex max-w-[130px] text-[12px] rounded-3xl px-4 py-2 gap-3 items-center text-secondary"
            href="#"
          >
            Get Started <FaArrowRightLong />{" "}
          </a>
        </div>
      </div>
      <div className="text-secondary mt-6 px-3">
        <div>
          <h2 className="text-[27px]">
            Discover Nature's Wonders with Expert Guidance
          </h2>
          <div className="mt-2">
            <h4 className="text-[10px]">12345, Gazipur, Dhaka, Road, India</h4>
            <h4 className="text-[10px]">{"(+1)8139-849-8483"}</h4>
          </div>
        </div>
        <div className="w-full mt-5 mb-5 h-[0.6px] bg-secondary/10"></div>
        <div>
          <ul className="flex gap-6 text-[12px] justify-center">
            <li>
              <a className="cursor-pointer" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                About
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                Properties
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                Services
              </a>
            </li>
          </ul>
          <h2 className="mt-8 mb-8 text-center">EverGreen</h2>
          <ul className="flex gap-6 text-[12px] justify-center">
            <li>
              <a className="cursor-pointer" href="#">
                Gallery
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full mt-5 mb-5 h-[0.6px] bg-secondary/10"></div>
        <div className="text-center flex flex-col">
          <h3 className="text-[10px] text-secondary/40 mb-5">
            @2025 EverGreen All rights reserved.
          </h3>
          <h3 className="text-[10px] text-secondary/40">
            Terms & Conditions | Privacy Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
