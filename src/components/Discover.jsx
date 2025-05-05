import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Discover = () => {
  return (
    <div className="text-secondary px-3 py-5 bg-secondary/5">
      <img
        className="rounded-2xl shadow-xl border border-secondary/20"
        src="src/assets/map.png"
        alt=""
      />
      <div className="px-2">
        <h2 className="text-[27px] mt-7 font-medium">
          Discover Properties with the Best Value
        </h2>
        <p className="text-[10px] text-secondary/70 mt-2">
          From minimalist to compact solutions, small spaces inspire big ideas,
          proving that you don't need much room.
        </p>
        <button className="flex bg-secondary text-primary items-center text-[12px] px-8 py-3 rounded-3xl mt-5 mx-auto gap-2 cursor-pointer">
          Find Nearest Properties <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Discover;
