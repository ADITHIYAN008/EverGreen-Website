import React from "react";
import { PROP_LIST } from "@/constant/data";
import { FaBath, FaBed } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";
import { House } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

const Properties = ({ filters }) => {
  const { looking, price, location, room } = filters;

  const filtered = PROP_LIST.filter((item) => {
    if (!looking) return true;
    return item.type === looking;
  })
    .filter((item) => {
      if (!price) return true;

      return item.cost < price;
    })
    .filter((item) => {
      if (!location) return true;
      return item.city === location;
    })
    .filter((item) => {
      if (!room) return true;
      return item.bed == room;
    });
  return (
    <div className="text-secondary dark:text-primary px-5">
      <div className="max-h-[18rem] rounded-3xl">
        <ul className="grid pb-20 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-15 w-full">
          {filtered.map((item, index) => (
            <li key={index}>
              <Link
                to={`/house/${item.id}`}
                state={{
                  relImg: {
                    ImgOne: item.one,
                    ImgTwo: item.two,
                    ImgThree: item.three,
                    ImgFour: item.four,
                    ImgFive: item.five,
                    ImgSix: item.six,
                  },
                  imgData: {
                    Id: item.id,
                    Url: item.url,
                    Title: item.title,
                    Type: item.type,
                    beds: item.bed,
                    bathroom: item.bathrooms,
                    price: item.price,
                    address: item.address,
                  },
                }}
              >
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
                  className="w-[24rem] md:w-[26rem] cursor-pointer md:h-[18rem] object-cover max-h-[15rem] object-center rounded-2xl"
                  src={item.url}
                  alt={item.title}
                />
              </Link>
              <div className="flex text-[15px]  gap-3 md:gap-5 ml-2 mt-4">
                <h2 className="flex gap-2 items-center">
                  <FaBed size={10} />{" "}
                  <span className="text-[10px] md:text-[12px]">
                    {item.beds}
                  </span>
                </h2>
                <h2 className="flex gap-2 items-center">
                  <FaBath size={10} />{" "}
                  <span className="text-[10px] md:text-[12px]">
                    {item.bathrooms}
                  </span>
                </h2>
              </div>
              <div className="ml-2 mb-4 mt-2">
                <Link
                  to={`/house/${item.id}`}
                  state={{
                    relImg: {
                      ImgOne: item.one,
                      ImgTwo: item.two,
                      ImgThree: item.three,
                      ImgFour: item.four,
                      ImgFive: item.five,
                      ImgSix: item.six,
                    },
                    imgData: {
                      Id: item.id,
                      Url: item.url,
                      Title: item.title,
                      Type: item.type,
                      beds: item.bed,
                      bathroom: item.bathrooms,
                      price: item.price,
                      address: item.address,
                    },
                  }}
                  className="font-semibold cursor-pointer text-[20px] md:text-xl"
                >
                  {item.title}
                </Link>

                <h3 className="text-[14px] md:text-sm mt-1">{item.price}</h3>
                <h3 className="text-[11px] md:text-[12px] mt-1">
                  {item.address}
                </h3>
              </div>
              <div className="flex gap-3">
                <Drawer>
                  <DrawerTrigger className="text-secondary  px-4 py-2 text-[11px] bg-green-400 rounded-3xl">
                    Buy Now
                  </DrawerTrigger>
                  <DrawerContent className="bg-primary text-secondary max-w-[1100px] dark:bg-secondary dark:text-primary mx-auto">
                    <DrawerHeader>
                      <DrawerTitle className=" lg:text-3xl lg:ml-5">
                        Are you absolutely sure?
                      </DrawerTitle>
                      <DrawerDescription className="mt-2 relative flex flex-row justify-between">
                        <img
                          className="absolute sm:hidden w-[10rem] -left-2 -top-2 -z-50 opacity-30"
                          src={Logo}
                          alt=""
                        />
                        <div className="flex flex-col justify-end w-full">
                          <h3 className="font-bold text-end">
                            Property Details:
                          </h3>
                          <div className="text-end mt-3">
                            <div className="">
                              <h3 className="text-[16px] font-semibold">
                                {item.title}
                              </h3>
                            </div>
                            <h3 className="text-[13px] mt-1">
                              Type:{" "}
                              <span className="font-medium ">{item.type}</span>
                            </h3>
                            <div className="flex justify-end text-[12px] mt-1 gap-3">
                              <div className="flex items-center gap-2">
                                <FaBed />
                                <h3 className="">{item.beds}</h3>
                              </div>
                              <div className="flex items-center gap-2">
                                <FaBed />
                                <h3>{item.bathrooms}</h3>
                              </div>
                            </div>
                            <h3 className="mt-1 text-[12px]">{item.address}</h3>
                            <div className="flex items-center mt-3 justify-end gap-5">
                              <h3 className="text-xl font-semibold">Price: </h3>
                              <h3 className="font-bold text-2xl">
                                {item.price}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Link
                        to=""
                        className="bg-green-400 text-center py-2 rounded-md mb-5"
                      >
                        Pay
                      </Link>
                      <DrawerClose>
                        <Button className="bg-secondary text-primary dark:bg-primary dark:text-secondary">
                          Cancel
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                <Link
                  to={`/owner/${item.id}`}
                  state={{
                    ImgId: item.id,
                  }}
                  className="bg-secondary dark:bg-primary dark:text-secondary cursor-pointer text-[10px] text-primary  px-4 py-2 rounded-full"
                  href="#"
                >
                  Contact Owner
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Properties;
