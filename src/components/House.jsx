import React, { useState } from "react";
import ImgOne from "../assets/three.jpg";
import ImgTwo from "../assets/two.jpg";
import ImgThree from "../assets/one.jpg";
import ImgFour from "../assets/four.jpg";
import ImgFive from "../assets/five.jpg";
import { FaBath, FaBed } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { PROP_LIST } from "@/constant/data";

const House = () => {
  const { state } = useLocation();
  const { imgData, relImg } = state;

  const [imgUrl, setImgUrl] = useState(relImg.ImgOne);
  const [activeImg, setActiveTab] = useState(relImg.ImgOne);

  return (
    <div className="text-secondary">
      <div className="mt-6">
        <img
          className="max-w-[90%] min-w-[90%] border border-secondary/50 min-h-[250px] max-h-[250px] mx-auto rounded-3xl"
          src={imgUrl}
          alt=""
        />
        <div className="px-10 flex gap-5 mt-6">
          <div className="w-11 h-11 cursor-pointer bg-secondary rounded-xl">
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
          <div className="w-11 h-11 cursor-pointer bg-secondary rounded-xl">
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
          <div className="w-11 h-11 cursor-pointer bg-secondary rounded-xl">
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
          <div className="w-11 h-11 bg-secondary rounded-xl">
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
          <div className="w-11 h-11 cursor-pointer bg-secondary rounded-xl">
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
          <h2 className="text-[18px] mb-1 font-semibold">{imgData.Title}</h2>
        </div>
        <div className="flex gap-7 mb-1 items-center">
          <h3 className="text-[12px]">
            Type: <span className="font-semibold">{imgData.Type}</span>
          </h3>
          <div className="flex mt-2 mb-2 items-center gap-2">
            <FaBed size={13} />
            <span className="text-[11px]">{imgData.beds} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath size={13} />
            <span className="text-[11px]">{imgData.bathroom}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg mb-2 font-semibold">{imgData.price}</h4>
          <h3 className="text-[12px] ">{imgData.address}</h3>
        </div>
        <div className="mt-4 flex gap-4 mb-8">
          <a
            className="bg-green-300 px-3 py-2 rounded-2xl text-[11px]"
            href="#"
          >
            Buy Now
          </a>
          <a
            className="bg-secondary text-primary px-3 py-2 rounded-2xl text-[11px]"
            href="#"
          >
            Contact Owner
          </a>
        </div>
      </div>
      <div className="px-6 mt-6">
        <h3 className="text-[14px] font-semibold">Recommendations for you</h3>
        <div className="overflow-x-auto mt-5 no-scrollbar">
          <div className="flex flex-nowrap w-max space-x-4">
            <ul className="flex w-max space-x-4 ">
              {PROP_LIST.filter(
                (item) => item.type === imgData.Type && item.url !== imgData.Url
              ).map((item, index) => (
                <li className="w-[9rem]" key={index}>
                  <div className="w-[9rem] h-[8rem] rounded-2xl bg-secondary">
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={item.url}
                      alt={item.title}
                    />
                  </div>
                  <div className="ml-2">
                    <h2 className="text-[11px] mt-2 font-semibold">
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
                    <h3 className="text-sm mt-2 font-semibold">{item.price}</h3>
                    <h4 className="text-[8px] mt-1">{item.address}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-6 mb-10 mt-6">
        <h3 className="text-[14px] font-semibold">New Properties</h3>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap w-max space-x-4 mt-5">
            <div className="w-[9rem]">
              <div className="w-[9rem] relative h-[8rem] rounded-2xl bg-secondary">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={ImgFive}
                  alt=""
                />
                <div className="absolute bg-secondary/70 text-primary px-2 py-1 rounded-3xl top-2 left-2 text-[8px] ">
                  New
                </div>
              </div>
              <div className="ml-2">
                <h2 className="text-[11px] mt-2 font-semibold">
                  The Pinnacle at Highland Park
                </h2>
                <div className="mt-1 flex gap-3">
                  <div className="flex items-center gap-1">
                    <FaBed size={10} />
                    <span className="text-[8px]">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath size={10} />
                    <span className="text-[8px]">2 Bathrooms</span>
                  </div>
                </div>
                <h3 className="text-sm mt-2 font-semibold">$4,56798.00</h3>
                <h4 className="text-[8px] mt-1">123 Maple Street, New York</h4>
              </div>
            </div>
            <div className="w-[9rem]">
              <div className="w-[9rem] h-[8rem] rounded-2xl bg-secondary">
                <div className="w-[9rem] relative h-[8rem] rounded-2xl bg-secondary">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={ImgFour}
                    alt=""
                  />
                  <div className="absolute bg-secondary/70 text-primary px-2 py-1 rounded-3xl top-2 left-2 text-[8px] ">
                    New
                  </div>
                </div>
                <div className="ml-2">
                  <h2 className="text-[11px] mt-2 font-semibold">
                    The Pinnacle at Highland Park
                  </h2>
                  <div className="mt-1 flex gap-3">
                    <div className="flex items-center gap-1">
                      <FaBed size={10} />
                      <span className="text-[8px]">5 Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath size={10} />
                      <span className="text-[8px]">2 Bathrooms</span>
                    </div>
                  </div>
                  <h3 className="text-sm mt-2 font-semibold">$4,56798.00</h3>
                  <h4 className="text-[8px] mt-1">
                    123 Maple Street, New York
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-[9rem]">
              <div className="w-[9rem] h-[8rem] rounded-2xl bg-secondary">
                <div className="w-[9rem] relative h-[8rem] rounded-2xl bg-secondary">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={ImgThree}
                    alt=""
                  />
                  <div className="absolute bg-secondary/70 text-primary px-2 py-1 rounded-3xl top-2 left-2 text-[8px] ">
                    New
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <h2 className="text-[11px] mt-2 font-semibold">
                  The Pinnacle at Highland Park
                </h2>
                <div className="mt-1 flex gap-3">
                  <div className="flex items-center gap-1">
                    <FaBed size={10} />
                    <span className="text-[8px]">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath size={10} />
                    <span className="text-[8px]">2 Bathrooms</span>
                  </div>
                </div>
                <h3 className="text-sm mt-2 font-semibold">$4,56798.00</h3>
                <h4 className="text-[8px] mt-1">123 Maple Street, New York</h4>
              </div>
            </div>
            <div className="w-[9rem]">
              <div className="w-[9rem] h-[8rem] rounded-2xl bg-secondary">
                <div className="w-[9rem] relative h-[8rem] rounded-2xl bg-secondary">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={ImgTwo}
                    alt=""
                  />
                  <div className="absolute bg-secondary/70 text-primary px-2 py-1 rounded-3xl top-2 left-2 text-[8px] ">
                    New
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <h2 className="text-[11px] mt-2 font-semibold">
                  The Pinnacle at Highland Park
                </h2>
                <div className="mt-1 flex gap-3">
                  <div className="flex items-center gap-1">
                    <FaBed size={10} />
                    <span className="text-[8px]">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath size={10} />
                    <span className="text-[8px]">2 Bathrooms</span>
                  </div>
                </div>
                <h3 className="text-sm mt-2 font-semibold">$4,56798.00</h3>
                <h4 className="text-[8px] mt-1">123 Maple Street, New York</h4>
              </div>
            </div>
            <div className="w-[9rem]">
              <div className="w-[9rem] h-[8rem] rounded-2xl bg-secondary">
                <div className="w-[9rem] relative h-[8rem] rounded-2xl bg-secondary">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={ImgOne}
                    alt=""
                  />
                  <div className="absolute bg-secondary/70 text-primary px-2 py-1 rounded-3xl top-2 left-2 text-[8px] ">
                    New
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <h2 className="text-[11px] mt-2 font-semibold">
                  The Pinnacle at Highland Park
                </h2>
                <div className="mt-1 flex gap-3">
                  <div className="flex items-center gap-1">
                    <FaBed size={10} />
                    <span className="text-[8px]">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath size={10} />
                    <span className="text-[8px]">2 Bathrooms</span>
                  </div>
                </div>
                <h3 className="text-sm mt-2 font-semibold">$4,56798.00</h3>
                <h4 className="text-[8px] mt-1">123 Maple Street, New York</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
