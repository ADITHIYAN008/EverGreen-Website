import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBath, FaBed } from "react-icons/fa6";
import { Link, useLocation, useParams } from "react-router-dom";
import { PROP_LIST } from "@/constant/data";
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

const House = () => {
  const { state } = useLocation();
  const { imgData, relImg } = state;

  const [imgUrl, setImgUrl] = useState(relImg.ImgOne);
  const [activeImg, setActiveTab] = useState(relImg.ImgOne);

  return (
    <div className="text-secondary max-w-[1100px] mx-auto">
      <div className="mt-6">
        <img
          className="sm:w-[90%] sm:min-h-[500px] w-[90%] min-w-[300px] border border-secondary/50 lg:w-[95%] lg:min-h-[500px] lg:max-h-[700px] min-h-[250px]  mx-auto rounded-3xl"
          src={imgUrl}
          alt=""
        />
        <div className="px-10 flex gap-5 mt-6">
          <div className="w-11 h-11 sm:w-15 sm:h-15 cursor-pointer bg-secondary rounded-xl">
            <img
              onClick={() => {
                setImgUrl(relImg.ImgOne);
                setActiveTab(relImg.ImgOne);
              }}
              className={`w-full h-full object-cover rounded-xl ${
                activeImg == relImg.ImgOne ? "border border-secondary" : ""
              }`}
              src={relImg.ImgOne}
              alt=""
            />
          </div>
          <div className="w-11 h-11 sm:w-15 sm:h-15 cursor-pointer bg-secondary rounded-xl">
            <img
              onClick={() => {
                setImgUrl(relImg.ImgTwo);
                setActiveTab(relImg.ImgTwo);
              }}
              className={`w-full h-full object-cover rounded-xl ${
                activeImg == relImg.ImgTwo ? "border border-secondary" : ""
              }`}
              src={relImg.ImgTwo}
              alt=""
            />
          </div>
          <div className="w-11 h-11 sm:w-15 sm:h-15 cursor-pointer bg-secondary rounded-xl">
            <img
              onClick={() => {
                setImgUrl(relImg.ImgThree);
                setActiveTab(relImg.ImgThree);
              }}
              className={`w-full h-full object-cover rounded-xl ${
                activeImg == relImg.ImgThree ? "border border-secondary" : ""
              }`}
              src={relImg.ImgThree}
              alt=""
            />
          </div>
          <div className="w-11 h-11 sm:w-15 sm:h-15 bg-secondary rounded-xl">
            <img
              onClick={() => {
                setImgUrl(relImg.ImgFour);
                setActiveTab(relImg.ImgFour);
              }}
              className={`w-full h-full object-cover rounded-xl ${
                activeImg == relImg.ImgFour ? "border border-secondary" : ""
              }`}
              src={relImg.ImgFour}
              alt=""
            />
          </div>
          <div className="w-11 h-11 sm:w-15 sm:h-15 cursor-pointer bg-secondary rounded-xl">
            <img
              onClick={() => {
                setImgUrl(relImg.ImgFive);
                setActiveTab(relImg.ImgFive);
              }}
              className={`w-full h-full object-cover rounded-xl ${
                activeImg == relImg.ImgFive ? "border border-secondary" : ""
              }`}
              src={relImg.ImgFive}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="px-6 mt-5">
        <div>
          <h2 className="text-[18px] mb-1 font-semibold sm:text-3xl lg:text-4xl sm:mt-9">
            {imgData.Title}
          </h2>
        </div>
        <div className="flex gap-7 mb-1 items-center">
          <h3 className="text-[12px] sm:text-[14px]">
            Type: <span className="font-semibold">{imgData.Type}</span>
          </h3>
          <div className="flex mt-2 mb-2 items-center gap-2">
            <FaBed size={13} />
            <span className="text-[11px] ">{imgData.beds} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath size={13} />
            <span className="text-[11px]">{imgData.bathroom}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg mb-2 font-semibold sm:text-2xl sm:mt-3">
            {imgData.price}
          </h4>
          <h3 className="text-[12px] sm:mt-1 ">{imgData.address}</h3>
        </div>
        <div className="mt-4 flex gap-4 mb-8">
          <Drawer>
            <DrawerTrigger className="text-secondary  px-4 py-2 text-[12px] bg-green-400 rounded-3xl">
              Buy Now
            </DrawerTrigger>
            <DrawerContent className="bg-primary text-secondary">
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription className="mt-2 relative flex flex-row justify-between">
                  <img
                    className="absolute w-[10rem] -left-2 -top-2 -z-50 opacity-30"
                    src={Logo}
                    alt=""
                  />
                  <div className="flex flex-col justify-end w-full">
                    <h3 className="font-bold text-end">Property Details:</h3>
                    <div className="text-end mt-3">
                      <div className="">
                        <h3 className="text-[16px] font-semibold">
                          {imgData.Title}
                        </h3>
                      </div>
                      <h3 className="text-[13px] mt-1">
                        Type:{" "}
                        <span className="font-medium ">{imgData.Type}</span>
                      </h3>
                      <div className="flex justify-end text-[12px] mt-1 gap-3">
                        <div className="flex items-center gap-2">
                          <FaBed />
                          <h3 className="">{imgData.beds} Bedrooms</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaBed />
                          <h3>{imgData.beds} Bedrooms</h3>
                        </div>
                      </div>
                      <h3 className="mt-1 text-[12px]">{imgData.address}</h3>
                      <div className="flex items-center mt-3 justify-end gap-5">
                        <h3 className="text-xl font-semibold">Price: </h3>
                        <h3 className="font-bold text-2xl">{imgData.price}</h3>
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
                  <Button className="bg-secondary text-primary ">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <a
            className="bg-secondary text-primary px-3 py-2 rounded-2xl border text-[11px] lg:text-[16px] lg:px-5 hover:bg-transparent hover:text-secondary hover:border transition-all duration-300 ease-in"
            href="#"
          >
            Contact Owner
          </a>
        </div>
      </div>
      <div className="px-6 mt-6">
        <h3 className="text-[14px] font-semibold lg:text-xl">
          Recommendations for you
        </h3>
        <div className="overflow-x-auto mt-5 no-scrollbar">
          <div className="flex flex-nowrap w-max space-x-4">
            <ul className="flex w-max space-x-4 ">
              {PROP_LIST.filter(
                (item) => item.type === imgData.Type && item.url !== imgData.Url
              ).map((item, index) => (
                <li className="w-[9rem] lg:w-[15rem]" key={index}>
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
                        Url: item.url,
                        Title: item.title,
                        Type: item.type,
                        beds: item.bed,
                        bathroom: item.bathrooms,
                        price: item.price,
                        address: item.address,
                      },
                    }}
                    onClick={() => {
                      setTimeout(() => {
                        window.location.reload();
                      }, 100);
                    }}
                    className="w-[9rem] h-[8rem] rounded-2xl bg-secondary"
                  >
                    <img
                      className="w-full h-[8rem] object-cover lg:h-[10rem] rounded-xl"
                      src={item.url}
                      alt={item.title}
                    />
                  </Link>
                  <div className="ml-2">
                    <h2 className="text-[11px] mt-2 font-semibold lg:mt-4 lg:text-[16px]">
                      {item.title}
                    </h2>
                    <div className="mt-1 flex gap-3">
                      <div className="flex items-center gap-1">
                        <FaBed size={10} />
                        <span className="text-[8px]">{item.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBath size={10} />
                        <span className="text-[8px]">{item.bathrooms}</span>
                      </div>
                    </div>
                    <h3 className="text-sm mt-2 font-semibold lg:mt-2 lg:text-base">
                      {item.price}
                    </h3>
                    <h4 className="text-[8px] mt-1">{item.address}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-6 mb-10 mt-6">
        <h3 className="text-[14px] font-semibold lg:text-xl">New Properties</h3>
        <div className="overflow-x-auto mt-5 no-scrollbar">
          <div className="flex flex-nowrap w-max space-x-4">
            <ul className="flex w-max space-x-4 ">
              {PROP_LIST.filter(
                (item) => item.newArrival && item.url !== imgData.Url
              ).map((item, index) => (
                <li className="w-[9rem] lg:w-[15rem]" key={index}>
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
                        Url: item.url,
                        Title: item.title,
                        Type: item.type,
                        beds: item.bed,
                        bathroom: item.bathrooms,
                        price: item.price,
                        address: item.address,
                      },
                    }}
                    onClick={() => {
                      setTimeout(() => {
                        window.location.reload();
                      }, 100);
                    }}
                    className="w-[9rem] h-[8rem] rounded-2xl bg-secondary"
                  >
                    <img
                      className="w-full h-[8rem] object-cover lg:h-[10rem] rounded-xl"
                      src={item.url}
                      alt={item.title}
                    />
                  </Link>
                  <div className="ml-2">
                    <h2 className="text-[11px] mt-2 font-semibold lg:mt-4 lg:text-[16px]">
                      {item.title}
                    </h2>
                    <div className="mt-1 flex gap-3">
                      <div className="flex items-center gap-1">
                        <FaBed size={10} />
                        <span className="text-[8px]">{item.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBath size={10} />
                        <span className="text-[8px]">{item.bathrooms}</span>
                      </div>
                    </div>
                    <h3 className="text-sm mt-2 font-semibold lg:mt-2 lg:text-base">
                      {item.price}
                    </h3>
                    <h4 className="text-[8px] mt-1">{item.address}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
