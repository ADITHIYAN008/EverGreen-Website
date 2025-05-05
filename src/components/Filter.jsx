import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-center mb-12">
      <div className="w-[360px] px-6 py-6 rounded-3xl mt-6 h-auto bg-primary border border-gray-400/30 shadow-2xl text-secondary">
        <h2 className="text-2xl mb-4 font-semibold">Find the best place</h2>
        <div>
          <div className="mb-2">
            <h3 className="text-sm mb-2">Looking for</h3>
            <input
              className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
              type="text"
              placeholder="Enter type"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-sm mb-2">Price</h3>
            <input
              className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
              type="number"
              placeholder="Price"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-sm mb-2">Locations</h3>
            <input
              className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-sm mb-2">Number of rooms</h3>
            <input
              className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
              type="text"
              placeholder="Eg.2 Bed rooms"
            />
          </div>
          <div className="mb-2 mt-5">
            <h3 className="text-sm mb-3">Filter:</h3>
            <div className="flex gap-1">
              <button className="text-[12px] border border-gray-300 bg-gray-300/60 px-3 py-1 rounded-full">
                City
              </button>
              <button className="text-[12px] border border-gray-300 px-3 py-1 rounded-full">
                House
              </button>
              <button className="text-[12px] border border-gray-300 px-3 py-1 rounded-full">
                Residential
              </button>
              <button className="text-[12px] border border-gray-300 px-3 py-1 rounded-full">
                Apartment
              </button>
            </div>
          </div>
          <button className="bg-secondary text-primary px-5 py-3 rounded-3xl mt-4 text-[13px] cursor-pointer w-full">
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
