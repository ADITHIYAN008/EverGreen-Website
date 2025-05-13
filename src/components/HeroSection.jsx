import React from "react";

const HeroSection = () => {
  return (
    <>
      <div id="home" className="relative max-w-screen">
        <img
          className="min-w-screen md:max-h-screen md:object-cover"
          src="src/assets/vertical.jpg"
          alt="hero-image"
        />
        <div className="absolute bottom-10 left-3 md:bottom-10">
          <div className="flex gap-1 mb-7">
            <button className="bg-primary text-[12px] text-secondary sm:text-base px-3 py-1.5 rounded-2xl lg:text-[20px] lg:px-4 lg:rounded-full">
              House
            </button>
            <button className="bg-primary text-[12px] text-secondary sm:text-base px-3 py-1.5 rounded-2xl lg:text-[20px] lg:px-4 lg:rounded-full">
              Apartment
            </button>
            <button className="bg-primary sm:text-base text-[12px] text-secondary px-3 py-1.5 rounded-2xl lg:text-[20px] lg:px-4 lg:rounded-full">
              Residential
            </button>
          </div>
          <h1 className="text-[2.7rem] leading-12 font-medium flex sm:text-[3rem] flex-col md:text-[4rem] md:mt-10 md:leading-16 lg:text-[5rem]">
            Build Your Future,<span>One Property at a Time.</span>
          </h1>
          <p className="mt-5 text-[10px] w-[350px] sm:text-p[17px] sm:min-w-[600px] lg:min-w-[800px] lg:mt-8 text-primary md:text-[12px]">
            At EverGreen, we believe everyone deserves a place to call their
            own. Whether you're searching for your first home or your next
            investment, we’re here to help you own your world—one property at a
            time. Discover spaces that match your lifestyle, goals, and dreams.
          </p>
          <div className="flex justify-center lg:w-[117%]">
            <div className="w-[360px] hidden md:block px-6 py-6 rounded-3xl mt-6 h-auto bg-primary border sm:min-w-[500px] border-gray-400/30 md:w-[96%] shadow-2xl text-secondary">
              <h2 className="text-2xl mb-4 font-semibold">
                Find the best place
              </h2>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="mb-2 lg:w-[200px]">
                    <h3 className="text-sm mb-2">Looking for</h3>
                    <input
                      className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                      type="text"
                      placeholder="Enter type"
                    />
                  </div>
                  <div className="mb-2 lg:w-[200px]">
                    <h3 className="text-sm mb-2">Price $</h3>
                    <input
                      className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                      type="number"
                      placeholder="Price"
                    />
                  </div>
                  <div className="mb-2 lg:w-[200px]">
                    <h3 className="text-sm mb-2">Locations</h3>
                    <input
                      className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                  <div className="mb-2 lg:w-[200px]">
                    <h3 className="text-sm mb-2 ">Number of rooms</h3>
                    <input
                      className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                      type="text"
                      placeholder="Eg.2 Bed rooms"
                    />
                  </div>
                </div>

                <div className="mb-2 mt-5 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm mb-3">Filter:</h3>
                    <div className="flex gap-1">
                      <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60  px-3 py-1 rounded-full">
                        City
                      </button>
                      <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60 px-3 py-1 rounded-full">
                        House
                      </button>
                      <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60 px-3 py-1 rounded-full">
                        Residential
                      </button>
                      <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60 px-3 py-1 rounded-full">
                        Apartment
                      </button>
                    </div>
                  </div>
                  <button className="bg-secondary text-primary px-5 py-3 rounded-3xl mt-4 text-[13px] cursor-pointer">
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-center mb-12">
        <div className="w-[360px] px-6 py-6 rounded-3xl mt-6 h-auto bg-primary border sm:min-w-[500px] border-gray-400/30 shadow-2xl text-secondary">
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
              <h3 className="text-sm mb-2">Price $</h3>
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
                <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60  px-3 py-1 rounded-full">
                  City
                </button>
                <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60 px-3 py-1 rounded-full">
                  House
                </button>
                <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60 px-3 py-1 rounded-full">
                  Residential
                </button>
                <button className="text-[12px] border border-gray-300 focus-within:bg-gray-300/60 px-3 py-1 rounded-full">
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
    </>
  );
};

export default HeroSection;
