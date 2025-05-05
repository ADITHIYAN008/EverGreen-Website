import React from "react";

const HeroSection = () => {
  return (
    <div className="relative max-w-screen">
      <img
        className="min-w-screen"
        src="src/assets/vertical.jpg"
        alt="hero-image"
      />
      <div className="absolute bottom-10 left-3">
        <div className="flex gap-1 mb-7">
          <button className="bg-primary text-[12px] text-secondary px-3 py-1.5 rounded-2xl">
            House
          </button>
          <button className="bg-primary text-[12px] text-secondary px-3 py-1.5 rounded-2xl">
            Apartment
          </button>
          <button className="bg-primary text-[12px] text-secondary px-3 py-1.5 rounded-2xl">
            Residential
          </button>
        </div>
        <h1 className="text-[2.7rem] leading-12 font-medium flex flex-col">
          Build Your Future,<span>One Property at a Time.</span>
        </h1>
        <p className="mt-5 text-[10px] w-[350px] text-primary">
          At EverGreen, we believe everyone deserves a place to call their own.
          Whether you're searching for your first home or your next investment,
          we’re here to help you own your world—one property at a time. Discover
          spaces that match your lifestyle, goals, and dreams.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
