import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import MapImg from "../assets/map.png";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className="text-secondary lg:justify-between lg:px-15 px-3 py-5 md:flex md:gap-3 bg-secondary/5">
      <div className="flex justify-between w-full max-w-[1100px] mx-auto flex-col md:flex-row md:gap-10 xl:flex lg:flex-row">
        <motion.img
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="rounded-2xl md:w-[300px] shadow-xl border border-secondary/40"
          src={MapImg}
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
          <Link
            to="/AllList"
            className="flex bg-secondary text-primary items-center text-[12px] px-8 py-3 rounded-3xl mt-5 mx-auto md:mx-0 w-[14rem] gap-2 cursor-pointer"
          >
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
