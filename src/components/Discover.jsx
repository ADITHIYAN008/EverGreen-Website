import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Discover = () => {
  return (
    <div className="text-secondary lg:justify-between lg:px-15 px-3 py-5 md:flex md:gap-3 bg-secondary/5">
      <div className="flex justify-between w-full max-w-[1100px] mx-auto flex-col xl:flex lg:flex-row">
        <img
          className="rounded-2xl md:w-[300px] shadow-xl border border-secondary/40"
          src="src/assets/map.png"
          alt=""
        />
        <div className="px-2">
          <h2 className="text-[27px] mt-7 font-medium">
            Discover Properties with the Best Value
          </h2>
          <p className="text-[10px] md:w-[300px] text-secondary/70 mt-2">
            From minimalist to compact solutions, small spaces inspire big
            ideas, proving that you don't need much room.
          </p>
          <button className="flex bg-secondary text-primary items-center text-[12px] px-8 py-3 rounded-3xl mt-5 mx-auto md:mx-0 gap-2 cursor-pointer">
            Find Nearest Properties{" "}
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
