import React from "react";
import Properties from "./Properties";

const AllList = () => {
  return (
    <div className="flex gap-10">
      <div className="fixed h-full">
        <div className="md:max-w-[300px] hidden md:block md:py-10">
          <div className="flex justify-center">
            <div className="w-[90%] px-6 py-6 rounded-3xl z-40 h-auto bg-primary border  border-gray-400/70   text-secondary">
              <h2 className="text-2xl text-center mb-7 font-bold">
                Find the best place
              </h2>
              <div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Looking for</h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Enter type"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Price $</h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="number"
                    placeholder="Price"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Locations</h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Location"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">
                    Number of rooms
                  </h3>
                  <input
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Eg.2 Bed rooms"
                  />
                </div>
                <div className="mb-2">
                  <h3 className="text-sm mb-2 font-semibold">New Arrivals</h3>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="all"
                      />
                      All
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="7 days"
                      />
                      Last 7 days
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="15 days"
                      />
                      Last 15 days
                    </label>
                    <label className="text-sm">
                      <input
                        type="radio"
                        className="size-3 mr-2"
                        name="myRadio"
                        value="30 days"
                      />
                      Last 30 days
                    </label>
                  </div>
                </div>
                <button className="bg-secondary text-primary px-5 py-3 rounded-3xl mt-4 text-[13px] cursor-pointer w-full">
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-17 md:pt-10 md:ml-[300px]">
        <Properties />
      </div>
    </div>
  );
};

export default AllList;
