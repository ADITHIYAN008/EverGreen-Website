import React from "react";
import { PROP_LIST } from "@/constant/data";
import { FaBath, FaBed } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";

const Properties = () => {
  return (
    <div className="text-secondary px-5">
      <div className="max-h-[18rem] rounded-3xl">
        <ul className="grid pb-20 grid-cols-2 md:grid-cols-3 md:gap-15 w-full">
          {PROP_LIST.map((item, index) => (
            <li key={index}>
              <motion.img
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: easeIn,
                }}
                className="w-[10rem] md:w-[26rem] cursor-pointer md:h-[18rem] object-cover object-center rounded-2xl"
                src={item.url}
                alt={item.title}
              />
              <div className="flex text-[15px] gap-3 md:gap-5 ml-2 mt-4">
                <h2 className="flex gap-2 items-center">
                  <FaBed size={10} />{" "}
                  <span className="text-[8px] md:text-[12px]">{item.beds}</span>
                </h2>
                <h2 className="flex gap-2 items-center">
                  <FaBath size={10} />{" "}
                  <span className="text-[8px] md:text-[12px]">
                    {item.bathrooms}
                  </span>
                </h2>
              </div>
              <div className="ml-2 mt-2">
                <h2 className="font-semibold cursor-pointer text-[14px] md:text-xl">
                  {item.title}
                </h2>
                <h3 className="text-[10px] md:text-sm mt-1">{item.price}</h3>
                <h3 className="text-[9px] md:text-[12px] mt-1">
                  {item.address}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Properties;
