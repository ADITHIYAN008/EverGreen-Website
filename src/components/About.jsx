import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import PlayIcon from "../assets/play.png";
import OneImg from "../assets/one.jpg";
import FourImg from "../assets/four.jpg";
import TwoImg from "../assets/two.jpg";
import ThreeImg from "../assets/three.jpg";
import SixImg from "../assets/six.jpeg";

const About = () => {
  const images = [SixImg, TwoImg, ThreeImg];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="about"
      className="text-secondary mt-10 max-w-[1100px] mx-auto md:mt-10 px-4 mb-12"
    >
      <div className="md:flex">
        <h2 className="text-[32px] leading-12 font-medium tracking-tight sm:max-w-[500px] mb-5">
          Your primary home might begin to feel left out.
        </h2>
        <div className="flex gap-3 md:gap-0 items-center cursor-pointer">
          <div className="w-[90px] h-auto rounded-full overflow-clip mx-[6%] relative cursor-pointer">
            <img src={OneImg} alt="video-img" />
            <div className="absolute top-1/4 left-1/3 bg-primary rounded-full sm:top-[30%] sm:left-[40%] w-[25px] h-[25px] md:top-2 md:left-4 xl:top-4 xl:left-7">
              <img className="p-2" src={PlayIcon} alt="play-icon" />
            </div>
          </div>
          <p className="text-[10px] text-secondary/60">
            Each listing offers unique features. exceptional quality, and prime
            locations
          </p>
        </div>
      </div>
      <div className="flex items-end flex-col xl:flex-row gap-2">
        <div className="mt-10 md:min-h-[450px] lg:min-w-[500px] lg:h-[600px] relative border border-secondary/30 rounded-2xl">
          <img
            className="rounded-2xl lg:h-full lg:object-cover md:mb-7 w-full"
            src={images[currentIndex]}
            alt="Main"
          />
          <div className="absolute bottom-5 xl:bottom-17 md:bottom-8 md:right-5 right-2 flex gap-2 bg-primary px-2 py-[5px] rounded-3xl">
            {images.map((img, index) => (
              <img
                key={index}
                className={` w-5 h-5 md:w-10  md:h-10 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "border-1 border-white" : "border"
                }`}
                src={img}
                alt={`thumb-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="flex md:flex-row lg:flex-col gap-2">
          <div className="w-1/2 h-auto md:min-h-[230px] bg-secondary/5 px-3 lg:px-10 lg:h-[240px] lg:w-[400px] py-10 border border-secondary/30 rounded-2xl">
            <h3 className="text-xl sm:mt-10 md:mt-20 font-medium text-center lg:mt-10">
              Big things can happen in small spaces.
            </h3>
            <p className="text-[10px] text-center mt-2 mb-4 text-secondary/60">
              With thoughtful design and smart organization, you can maximize
              every inch, making room for creativity
            </p>
            <button className="text-[10px] mx-auto w-full bg-primary px-4 py-2 sm:w-full sm:mx-auto mt-1 rounded-full border hover:bg-secondary hover:text-primary hover:border-primary cursor-pointer transition-all duration-500 border-secondary/30">
              Details
            </button>
          </div>
          <div className="w-1/2 min-h-[230px] bg-secondary/5 sm:min-h-[300px] md:h-[350px] text-center lg:w-[400px] border border-secondary/30 rounded-2xl">
            <img className="rounded-xl" src={FourImg} alt="" />
            <h2 className="mt-4 flex flex-col text-[14px] font-medium">
              Pricing Start at <span>$256K</span>
            </h2>
            <button className="flex bg-secondary text-primary items-center text-[10px] px-4 lg:mt-2 py-3 rounded-3xl mt-5 mx-auto mb-3 gap-2 cursor-pointer">
              Explore Properties{" "}
              <motion.div
                initial={{
                  x: 0,
                }}
                animate={{
                  x: [0, 7, 0],
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
