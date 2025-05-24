import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaAddressCard, FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Tick from "../assets/tick.gif";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { PROP_LIST } from "@/constant/data";
import Lenis from "lenis";

const OwnerDetails = () => {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { id } = useParams();

  return (
    <div className="text-secondary max-w-[1100px] mx-auto px-5 lg:pt-10 pt-5">
      <h1 className="text-3xl font-secondary underline text-center mb-5">
        Profile
      </h1>
      {PROP_LIST.filter((item) => item.id === id).map((item) => (
        <>
          <div
            key={item.id}
            className="flex lg:mt-15 gap-6 text-secondary lg:gap-10   rounded-2xl"
          >
            <div className="w-30 h-35 md:w-[15rem] md:h-[15rem] bg-secondary overflow-clip rounded-2xl">
              <img
                className="object-cover  rounded-2xl border-2 w-full h-full object-center"
                src={item.avatar}
                alt="Profile"
              />
            </div>
            <div className="flex mt-3 flex-col gap-2">
              <div className="flex gap-2 items-center ">
                <FaUser className="md:size-10" />
                <h2 className="text-[16px] font-bold md:text-[3rem] md:font-four">
                  {item.name}
                </h2>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                <div className="flex gap-2 items-center ml-1">
                  <IoMdMail className="md:size-7" />
                  <h2 className="text-[11px] md:text-[16px] md:font-thrid">
                    {item.email}
                  </h2>
                </div>
                <div className="flex gap-2 items-center ml-1">
                  <IoCall className="md:size-7" />
                  <h2
                    className="
                  text-[12px] md:text-[16px] md:font-thrid"
                  >
                    {item.phone}
                  </h2>
                </div>
                <div className="flex gap-2 items-center ml-1">
                  <FaAddressCard className="size-7" />
                  <h2 className="text-[10px] md:text-[16px] md:font-thrid">
                    {item.profileAddress}
                  </h2>
                </div>
              </div>
              <div className="hidden lg:block">
                <h3 className=" mt-4 text-[18px] font-semibold">Description</h3>
                <div className="text-[10px] w-[80%] text-left mt-2 text-secondary/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente quaerat sint maxime rem temporibus autem, quas modi
                  ducimus voluptatem mollitia quod ut ad commodi non perferendis
                  ipsum. Saepe, repellat vitae.
                </div>
              </div>
            </div>
          </div>
          <h3 className=" mt-7 text-[18px] font-semibold lg:hidden">
            Description
          </h3>
          <div className="text-[10px] lg:hidden w-[95%] text-left ml-3 mt-2 text-secondary/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quaerat sint maxime rem temporibus autem, quas modi ducimus
            voluptatem mollitia quod ut ad commodi non perferendis ipsum. Saepe,
            repellat vitae.
          </div>
          <div className="mt-5 text-[18px] mb-10 font-semibold">
            <h2 className="lg:text-3xl lg:font-bold lg:mt-15">
              Property Images
            </h2>
            <div className="mt-10">
              <div className="flex flex-col lg:hidden gap-1">
                <div className="flex gap-1">
                  <div className="bg-black border w-1/2 h-[10rem] rounded-2xl">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={item.one}
                      alt=""
                    />
                  </div>
                  <div className="bg-black border w-1/2 h-[10rem] rounded-2xl">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={item.two}
                      alt=""
                    />
                  </div>
                </div>
                <div className="bg-black border w-full h-[10rem] rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={item.three}
                    alt=""
                  />
                </div>
                <div className="flex gap-1">
                  <div className="bg-black w-1/3 border h-[10rem] rounded-2xl">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={item.four}
                      alt=""
                    />
                  </div>
                  <div className="bg-black border border-secondary/5 w-2/3 h-[10rem] rounded-2xl">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={item.five}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 grid-rows-3 w-full gap-3 ">
                  <div className="bg-black rounded-2xl row-span-2 h-full border">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={item.one}
                      alt={item.title}
                    />
                  </div>
                  <div className="bg-black rounded-2xl col-span-2 border h-[17rem]">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={item.two}
                      alt={item.title}
                    />
                  </div>
                  <div className="bg-black rounded-2xl h-[17rem] border">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={item.three}
                      alt={item.title}
                    />
                  </div>
                  <div className="bg-black rounded-2xl h-[17rem] border">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={item.four}
                      alt={item.title}
                    />
                  </div>
                  <div className="bg-black  rounded-2xl col-span-2 h-[17rem] border">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={item.five}
                      alt={item.title}
                    />
                  </div>
                  <div className="bg-black rounded-2xl h-[17rem] border">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={item.six}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-green-400 border border-secondary/40 py-3 rounded-2xl text-center">
            <AlertDialog>
              <AlertDialogTrigger className="text-secondary bg-green-400">
                Request a call
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-primary text-secondary">
                <AlertDialogHeader>
                  <AlertDialogTitle>congratulation!</AlertDialogTitle>
                  <div className="mx-auto">
                    <img width={80} src={Tick} alt="" />
                  </div>
                  <AlertDialogDescription>
                    Your request was sent successfully
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-secondary text-primary">
                    Close
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-10"></div>
        </>
      ))}
    </div>
  );
};

export default OwnerDetails;
