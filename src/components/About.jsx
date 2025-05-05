import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="text-secondary px-4 mb-12">
      <div>
        <h2 className="text-[32px] leading-12 font-medium tracking-tight mb-5">
          Your primary home might begin to feel left out.
        </h2>
        <div className="flex gap-3 items-center cursor-pointer">
          <div className="w-[90px] h-auto rounded-full overflow-clip relative">
            <img src="src/assets/one.jpg" alt="video-img" />
            <div className="absolute top-1/4 left-1/3 bg-primary rounded-full w-[25px] h-[25px]">
              <img className="p-2" src="src/assets/play.png" alt="play-icon" />
            </div>
          </div>
          <p className="text-[10px] text-secondary/60">
            Each listing offers unique features. exceptional quality, and prime
            locations
          </p>
        </div>
      </div>
      <div className="mt-10 relative">
        <img className="rounded-2xl" src="src/assets/six.jpeg" alt="" />
        <div className="absolute bottom-2 right-2 flex gap-2 bg-primary px-2 py-[5px] rounded-3xl">
          <img
            className="w-6 h-6 rounded-full border"
            src="src/assets/six.jpeg"
            alt=""
          />
          <img
            className="w-6 h-6 rounded-full"
            src="src/assets/two.jpg"
            alt=""
          />
          <img
            className="w-6 h-6 rounded-full"
            src="src/assets/three.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex mt-4 gap-2">
        <div className="w-1/2 rounded-xl min-h-[230px] bg-secondary/5 px-3 py-3">
          <h3 className="text-xl font-medium text-center">
            Big things can happen in small spaces.
          </h3>
          <p className="text-[10px] text-center mt-2 mb-4 text-secondary/60">
            With thoughtful design and smart organization, you can maximize
            every inch, making room for creativity
          </p>
          <button className="text-[10px] ml-10 bg-primary px-4 py-2 rounded-full border cursor-pointer border-secondary/30">
            Details
          </button>
        </div>
        <div className="w-1/2 rounded-xl min-h-[230px] bg-secondary/5 text-center">
          <img className="rounded-xl" src="src/assets/four.jpg" alt="" />
          <h2 className="mt-4 flex flex-col text-[14px] font-medium">
            Pricing Start at <span>$256K</span>
          </h2>
          <button className="flex bg-secondary text-primary items-center text-[10px] px-4 py-3 rounded-3xl mt-5 mx-auto gap-2 cursor-pointer">
            Explore Properties <FaArrowRightLong />
          </button>
        </div>
      </div>
      <ul className="mt-7 grid grid-cols-2 text-center">
        <li className="flex flex-col text-4xl border-r border-secondary/20 mb-8">
          100% <span className="text-xs mt-2">Satisfactions Clients</span>
        </li>
        <li className="flex flex-col text-4xl">
          500+ <span className="text-xs mt-2">Property sells</span>
        </li>
        <li className="flex flex-col text-4xl border-secondary/20 border-r">
          150+ <span className="text-xs mt-2">Countries & Cities</span>
        </li>
        <li className="flex flex-col text-4xl">
          2,00+ <span className="text-xs mt-2">Postive reviews</span>
        </li>
      </ul>
    </div>
  );
};

export default About;
