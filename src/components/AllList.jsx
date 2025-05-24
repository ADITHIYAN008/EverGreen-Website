import React, { useEffect, useState } from "react";
import Properties from "./Properties";
import { Box, MenuItem, TextField } from "@mui/material";
import Lenis from "lenis";

const AllList = () => {
  const [looking, setLooking] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [room, setRooms] = useState("");

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

  const handleReset = () => {
    setLooking("");
    setPrice("");
    setLocation("");
    setRooms("");
  };

  const lookingFor = [
    {
      value: "House",
      label: "House",
    },
    {
      value: "Condo",
      label: "Condo",
    },
    {
      value: "Cottage",
      label: "Cottage",
    },
    {
      value: "Villa",
      label: "Villa",
    },
  ];

  const prices = [
    {
      value: "100000",
      label: "Under $100000",
    },
    {
      value: "200000",
      label: "Under $200000",
    },
    {
      value: "500000",
      label: "Under $500000",
    },
    {
      value: "5000000",
      label: "All",
    },
  ];
  const locations = [
    {
      value: "Newyork",
      label: "Newyork",
    },
    {
      value: "Austin",
      label: "Austin",
    },
    {
      value: "Lasvegas",
      label: "Las Vegas",
    },
    {
      value: "Sanfrancisco",
      label: "San Francisco",
    },
  ];
  const rooms = [
    {
      value: "2",
      label: "2 Rooms",
    },
    {
      value: "3",
      label: "3 Rooms",
    },
    {
      value: "4",
      label: "4 Rooms",
    },
    {
      value: "5",
      label: "5 Rooms",
    },
    {
      value: "6",
      label: "6 Rooms",
    },
  ];
  return (
    <div className="flex flex-col md:gap-10">
      <div className="md:fixed md:h-full">
        <div className="md:max-w-[300px] hidden md:block md:py-10">
          <div className="flex justify-center">
            <div className="w-[90%] px-6 py-6 rounded-3xl z-40 h-auto bg-primary border  border-gray-400/70   text-secondary">
              <h2 className="text-2xl text-center mb-7 font-bold">
                Find the best place
              </h2>
              <>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Looking for</h3>
                  <input
                    onChange={(e) => setLooking(e.target.value.toLowerCase())}
                    value={looking}
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Enter type"
                  />
                  <ul className="text-[10px] flex gap-2 mt-2 text-secondary/30 ml-2">
                    <li>House,</li>
                    <li>Condo,</li>
                    <li>Cottage,</li>
                    <li>Villa</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Price $</h3>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="number"
                    placeholder="Price"
                  />
                  <ul className="text-[8px] flex gap-2 mt-2 text-secondary/30 ml-2">
                    <li>100000,</li>
                    <li>200000,</li>
                    <li>500000,</li>
                    <li>1000000</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">Locations</h3>
                  <input
                    onChange={(e) =>
                      setLocation(e.target.value.trim().toLowerCase())
                    }
                    value={location}
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Location"
                  />
                  <ul className="text-[7px] flex gap-2 mt-2 text-secondary/30 ml-2">
                    <li>New York,</li>
                    <li>Austin,</li>
                    <li>Las Vegas,</li>
                    <li>San Francisco</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm mb-2 font-semibold">
                    Number of rooms
                  </h3>
                  <input
                    onChange={(e) => setRooms(e.target.value)}
                    value={room}
                    className="w-[95%] px-4 py-3 rounded-lg focus:outline-none text-[12px] bg-secondary/5 focus:ring-1 focus:ring-black"
                    type="text"
                    placeholder="Eg.2"
                  />
                </div>

                <button
                  onClick={handleReset}
                  className="bg-secondary text-primary px-5 py-3 rounded-3xl mt-4 text-[13px] cursor-pointer w-full"
                >
                  Reset All
                </button>
              </>
            </div>
          </div>
        </div>
        <Box
          className="grid md:hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          component="form"
          sx={{
            "& .MuiTextField-root": {
              mt: 2,
              ml: 2,
              width: "14ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              value={looking}
              label="Looking for"
              onChange={(e) => setLooking(e.target.value)}
              size="small"
              sx={{
                height: 1,
                fontSize: 15,
              }}
            >
              {lookingFor.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price$"
              size="small"
            >
              {prices.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
              size="small"
              sx={{
                height: 1,
              }}
            >
              {locations.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              value={room}
              onChange={(e) => setRooms(e.target.value)}
              label="Number of rooms"
              size="small"
              sx={{
                height: 1,
              }}
            >
              {rooms.map((option) => (
                <MenuItem
                  sx={{
                    height: 2,
                    fontSize: 13,
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <button
            onClick={handleReset}
            className="text-primary bg-secondary w-[8rem] h-10 ml-36 mt-4 rounded-3xl"
          >
            Reset
          </button>
        </Box>
      </div>
      <div className="pt-4 md:pt-10 md:ml-[300px]">
        <Properties
          filters={{
            looking,
            price,
            location,
            room,
          }}
        />
      </div>
    </div>
  );
};

export default AllList;
