import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import IP6 from "../assets/IP6.png";
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

const OwnerDetails = () => {
  const location = useLocation();
  const { ImgId } = location.state || {};

  return (
    <div className="text-secondary px-5 pt-5">
      <h1 className="text-3xl font-secondary underline text-center mb-5">
        Profile
      </h1>
      {PROP_LIST.filter((item) => item.id === ImgId).map((item, index) => (
        <>
          <div className="flex gap-6 text-secondary rounded-2xl">
            <div className="w-30 h-35 bg-secondary overflow-clip rounded-2xl">
              <img
                className="object-cover w-full h-full object-center"
                src={item.avatar}
                alt="Profile"
              />
            </div>
            <div className="flex mt-3 flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FaUser />
                <h2 className="text-[16px] font-bold">{item.name}</h2>
              </div>

              <div className="flex gap-2 items-center">
                <IoMdMail />
                <h2 className="text-[11px]">{item.email}</h2>
              </div>
              <div className="flex gap-2 items-center">
                <IoCall />
                <h2
                  className="
            text-[12px]"
                >
                  {item.phone}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                <FaAddressCard />
                <h2 className="text-[10px]">{item.profileAddress}</h2>
              </div>
            </div>
          </div>
          <h3 className=" mt-7 text-[18px] font-semibold">Description</h3>
          <div className="text-[10px] w-[95%] text-left ml-3 mt-2 text-secondary/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quaerat sint maxime rem temporibus autem, quas modi ducimus
            voluptatem mollitia quod ut ad commodi non perferendis ipsum. Saepe,
            repellat vitae.
          </div>
          <div className="mt-5 text-[18px] mb-10 font-semibold">
            <h2>Property Images</h2>
            <div className="mt-7">
              <div className="flex flex-col gap-1">
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
