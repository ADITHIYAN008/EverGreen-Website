import { PREMIUM_HOUSES } from "@/constant/data";
import React from "react";
import { FaArrowRightLong, FaBath, FaBed } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import AllList from "./AllList";

const Premium = () => {
  return (
    <div
      id="property"
      className="text-secondary max-w-[1100px] mx-auto mb-12 px-3"
    >
      <div className="px-2 mb-8 md:flex md:justify-between items-center">
        <div>
          <h2 className="text-[27px] md:text-4xl mt-10 font-semibold">
            Explore our premier houses
          </h2>
          <div className="flex">
            <p className="text-[10px] w-[400px] text-secondary/70 mt-3">
              Each listing offers unique features, exceptional quality, and
              prime locations, ensuring an exclusive living experience."
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <a
            href="/AllList"
            className="flex bg-secondary text-primary items-center text-[12px] px-8 py-3 rounded-3xl mt-2 mx-auto gap-2 cursor-pointer"
          >
            See All Properties
            <motion.div
              initial={{
                x: 0,
              }}
              animate={{
                x: [0, 12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <FaArrowRightLong />
            </motion.div>
          </a>
        </div>
      </div>
      <ul className="md:grid grid-cols-2 xl:grid-cols-3">
        {PREMIUM_HOUSES.map((item, index) => (
          <li className="mb-12" key={index}>
            <div className="relative">
              <img
                className="rounded-3xl cursor-pointer md:max-w-[350px] md:min-h-[300px] lg:h-[400px] lg:max-w-[450px] md:object-cover xl:max-w-[320px] xl:max-h-[200px]"
                src={item.url}
                alt={item.title}
              />
              <div className="bg-primary absolute top-3 left-3 px-3 py-1 rounded-3xl font-medium text-[10px]">
                For Sale
              </div>
            </div>
            <div className="flex text-[15px] gap-5 ml-2 mt-4">
              <h2 className="flex gap-2 items-center">
                <FaBed /> <span className="text-[12px]">{item.beds}</span>
              </h2>
              <h2 className="flex gap-2 items-center">
                <FaBed /> <span className="text-[12px]">{item.bathroom}</span>
              </h2>
            </div>
            <h2 className="ml-1 mt-2 text-xl cursor-pointer font-medium">
              <a href="#">{item.title}</a>
            </h2>
            <div className="ml-2 mt-2">
              <h3 className="flex items-center gap-2 text-[12px]">
                {item.amount} <GoDotFill className="size-2 text-secondary/50" />{" "}
                {item.address}
              </h3>
            </div>
          </li>
        ))}
      </ul>
      <a
        href="/AllList"
        className="flex bg-secondary text-primary items-center text-[12px] px-8 py-3 rounded-3xl w-[12rem] mt-2 mx-auto gap-2 cursor-pointer md:hidden"
      >
        See All Properties
        <motion.div
          initial={{
            x: 0,
          }}
          animate={{
            x: [0, 12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <FaArrowRightLong />
        </motion.div>
      </a>
    </div>
  );
};

export default Premium;
